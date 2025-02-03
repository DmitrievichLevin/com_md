import { CompressionCanvas } from "../../compression_demo/canvas";
import Page from "../page";
import "./projects.css";

const projs = [
  {
    key: "__qd_tree",
    title: "QuadTree Based Digital Image Processing",
    tech: "C++, WebAssembly, OpenCV",
    desc: "Demonstrating a basic example of image compression using a QuadTree to represent 2D space.",
    children: <CompressionCanvas />,
    link: "//github.com/dmitrievichlevin/comp_quad/",
  },
  {
    key: "__proto_buf",
    title: "Renity Protocol Buffer",
    tech: "Python",
    desc: "Renity is an Open Source Python Object-Binary-Mapper(OBM) Binary Protocol Buffer that provides a way to rapidly define the de/serialization format of packets.",
    link: "//pypi.org/project/renity/",
  },
];

const Project = ({ children, title, tech, desc, link = null }) => {
  return (
    <div className="__cmp-proj">
      <p className="__proj-desc">
        <span>{title}</span>
        <span>{tech}</span>
        <span>{desc}</span>
        {link && <a href={link}>Source</a>}
      </p>
      {children}
    </div>
  );
};

export default () => {
  return (
    <Page>
      {projs.map((props) => (
        <Project {...props} key={props.key} />
      ))}
    </Page>
  );
};
