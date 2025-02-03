import React from "react";
import "./extlinks.css";

const LinkTo = ({ href = "", label = "", name = "", onclick = null }) => {
  return (
    <span className="__ext_link">
      {onclick ? (
        <a onClick={onclick}>link_to('{name}')</a>
      ) : (
        <a href={href} target="_blank" rel="external">
          link_to('{name}')
        </a>
      )}
    </span>
  );
};

export default ({ links = [] }) => {
  return (
    <div className="code-block __stck_ovflow">
      {links.map((props, idx) => {
        return (
          <div key={props?.name}>
            <span className="__cmnt">#&nbsp;{props?.name}</span>
            <LinkTo {...props} />
          </div>
        );
      })}
    </div>
  );
};
