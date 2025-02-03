import { useLocation } from "react-router-dom";
import HexPath from "../hexpath/hexPath";
import "./terminal.css";
import routeConfig from "../../pages/routeConfig";
import { useMemo } from "react";

export default ({ children }) => {
  const location = useLocation();
  const path = useMemo(() => {
    return (
      routeConfig.find(({ path }) => path === location?.pathname)?.name ?? ""
    );
  }, [location?.pathname]);
  return (
    <div className="__terminal">
      <p className="__term-tabs">
        <span className="__term-other-tab">
          PROBLEMS <span className="__circ">0</span>
        </span>
        <span className="__term-other-tab">OUTPUT</span>
        <span className="__term-tab">TERMINAL</span>
        <span className="__term-other-tab">DEBUG CONSOLE</span>
      </p>
      <HexPath dir={path} />
      <div className="__term-child-wrapper">{children}</div>
    </div>
  );
};
