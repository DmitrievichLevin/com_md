import "./hexpath.css";
import git from "../../res/gitBranchIcon.svg";
import folder from "../../res/folderIcon.svg";
import clock from "../../res/clockIcon.svg";
import user from "../../res/userIcon.svg";
import { useMemo } from "react";
import dayjs from "dayjs";

export default ({ dir = ".." }) => {
  const dateStr = useMemo(() => {
    const date = dayjs();
    return date.format("ddd   D   MMM - H:mm");
  }, []);
  return (
    <div className="__hex_term-wrapper">
      <div className="__hex_term_path">
        <span className="__hex_terminal __hex_term_0">
          <div>
            <img id="clock-icon" alt="clock-icon" src={clock} />
            {dateStr}
          </div>
        </span>
        <span className="__hex_terminal __hex_term_1">
          <div>
            <img id="folder-icon" alt="folder-icon" src={folder} />
            ../pages/{dir}/src
          </div>
        </span>
        <span className="__hex_terminal __hex_term_2">
          <div>
            <img id="git-icon" alt="git-icon" src={git} />
            master
          </div>
        </span>
      </div>
      <p className="__hex_term-command">
        <span className="__hex_term-usr">
          <span>
            <img id="user-icon" alt="user-icon" src={user} />
            methoddecorator
          </span>
        </span>
        <span className="__hex-command">
          python -u "/pages/{dir}/src/{dir}.py"
        </span>
      </p>
    </div>
  );
};
