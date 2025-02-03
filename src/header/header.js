import ExtLinks from "../components/extlinks/extLinks";
import { ext_links } from "../constants";
import PageLinks from "../pages/links/pageLinks";
import "./header.css";

export default () => {
  return (
    <>
      <header>
        <div className="__hdr-content">
          <p className="">import Jalin Howard as sr_software_engineer</p>
          <p className="">import os</p>
          <p>
            def link_to(name) <span className="__sys-font">--&gt; </span>Social:
          </p>
          <span className="__cmnt __tab-lg">"""Clickable external link"""</span>
          <p className="__tab-lg">return os.path.abspath(name)</p>
          <PageLinks />
        </div>
        <ExtLinks links={ext_links} />
      </header>
    </>
  );
};
