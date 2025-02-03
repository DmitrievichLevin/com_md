import Terminal from "../components/terminal/terminal";
import Header from "../header/header";

export default ({ children, terminal, className = "" }) => {
  return (
    <div className={`__app ${className}`}>
      <Header />
      <main>{terminal ? <Terminal>{children}</Terminal> : children}</main>
      <footer>
        <p>
          Jalin Howard 2025{". "}
          <a
            href={"//github.com/dmitrievichlevin/com_md"}
            target="_blank"
            rel="external"
          >
            Source
          </a>
        </p>
      </footer>
    </div>
  );
};
