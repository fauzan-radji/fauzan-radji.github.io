import { useEffect, useState } from "react";

import { GlobalsContext } from "../contexts/useGlobals";
import PropTypes from "prop-types";

export default function GlobalsProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("/tools.json")
      .then((res) => res.json())
      .then((tools) => {
        setTools(tools);
      });
  }, []);

  useEffect(() => {
    if (!tools.length) return;

    fetch("/projects.json")
      .then((res) => res.json())
      .then((projects) => {
        setProjects(
          projects.map((project) => ({
            ...project,
            tools: tools.filter((tool) => project.tools.includes(tool.name)),
          }))
        );
      });
  }, [tools]);

  return (
    <GlobalsContext.Provider
      value={{
        projects,
        tools,
      }}
    >
      {children}
    </GlobalsContext.Provider>
  );
}

GlobalsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
