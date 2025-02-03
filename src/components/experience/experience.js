import Terminal from "../terminal/terminal";
import "./experience.css";

export default () => {
  return (
    <p class="__exp-cn">
      <p>print( sr_software_engineer.wrk_exp() )</p>
      <p>print( sr_software_engineer.__dict__ )</p>
      <Terminal>
        <p className="__tab-lg __json">
          <p>
            Sr. Software Development Engineer
            <br />
            Whole Groom
            <br />
            Apr 2023 - Present:
            <br />
            <br />• Evaluate scope, understand and communicate trade-offs of
            leveraging existing scalable systems e.g. Amazon S3, Lambda, EC2,
            API Gateway, DynamoDB.
            <br />• Developed Containerized CI/CD pipeline with Docker, and
            custom Git Actions Workflow.
            <br />• Collaborated with engineers, product owner, and designers,
            to rapidly iterate on product requirements and UX/UI designs.
            <br />• Architected checkout flow & Integrated Payment processing
            Solution(s) end-to-end.
            <br />
            <a target="_blank" href={"//wholegroom.com"} rel="noreferrer">
              WholeGroom.com
            </a>
          </p>
          <p>
            Lead Front-End Engineer
            <br />
            EstateSpace Inc.
            <br />
            Feb 2022 – Feb 2024:
            <br />• Established best practices through modern UI Patterns, &
            Design Principles.
            <br />• Implemented a Robust QA Process, enforcing it as a
            requirement on all PR reviews.
            <br />• Lead vital event driven functionality development achieving
            high-cohesion in an Enterprise Resource Planning (ERP) software
            system.
            <br />
            <a target="_blank" href={"//www.estatespace.com"} rel="noreferrer">
              EstateSpace.com
            </a>
          </p>
          <p>
            Software Development Engineer
            <br />
            MaeGenix
            <br />
            Dec 2020 – Feb 2022:
            <br />
            • Designed & Developed Stock Market ETL Pipeline. Leveraged
            real-time data from multiple social media platforms/news outlets to
            aggregate consumer/investor sentiment.
            <br />
            • Collaborated on database seeding utilizing Automated Python Web
            Scraping with Selenium, EC2, CloudWatch, and Lambda. Developed
            scraping scripts for multiple sources, implementing internal
            interfaces.
            <br />• Contributed to Library of React Components and UI to create
            data visualizations using D3.js. <br />
            <a target="_blank" href={"//maegenix.com"} rel="noreferrer">
              Maegenix.com
            </a>
          </p>
          <p>
            {"{"}
            <p className="__tab-lg">yoe: 10</p>
            <p className="__tab-lg">education: Eastern Michigan University</p>
            <p className="__tab-lg">Curriculum: BS in Computer Science</p>
            <p className="__tab-lg">
              languages: ['Python', 'TypeScript', 'Javascript', 'HTML', 'CSS',
              'C++', 'Java']
            </p>
            <p className="__tab-lg">
              platforms: ['AWS', 'GCP', 'Azure', 'Oracle', 'Vercel']
            </p>
            <p className="__tab-lg">
              self.databases = 'SQL' <br />• 'NoSQL'
            </p>
            <p className="__tab-lg">
              frameworks: ['React', 'NextJS', 'Godot', 'OpenGL', 'OpenCV']
            </p>
            <p className="__tab-lg">
              intrests: ['UI/UX', 'Robotics', 'Physics', 'SaaS', 'Quant']
            </p>
            {"}"}
          </p>
        </p>
      </Terminal>
    </p>
  );
};
