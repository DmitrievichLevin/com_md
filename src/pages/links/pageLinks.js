import React from "react";
import folder from "../../res/folderIcon.svg";
import routeConfig from "../routeConfig";
import "./pagelinks.css";
import { Link } from "react-router-dom";

const LocalLinkTo = ({ to, name = "", idx }) => {
  return (
    <Link to={to}>
      {idx !== 0 ? <span>,&nbsp;</span> : ""}
      <img alt="folder-icon" src={folder} />
      '/{name}'
    </Link>
  );
};

export default () => {
  return (
    <p className="code-block __pg-links-wrapper">
      {"pages = ["}
      {routeConfig.map(({ name, path }, idx) => {
        return <LocalLinkTo name={name} to={path} idx={idx} key={name} />;
      })}
      {"]"}
    </p>
  );
};
