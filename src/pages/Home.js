import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="content">
    <h1 className="text-center">Introduction</h1>
    <p>
      <span>
        Hi! I'm Mátyás Angyal from Hungary and my main profile is JavaScript web
        development with React to create impressive web applications. However I
        define myself as a frontend developer, I am familiar with fullstack
        JavaScript programming in NodeJS/Express as well as using NoSQL solution
        like Mongo in the backend. I follow DevOps methodology wherever I can,
        in my opinion CI/CD, automated building and versioning is a powerful
        toolset even when working on small projects alone.
      </span>
    </p>
    <p>
      <span>
        I'm working as a self-taught developer since 2015. I have done many
        smaller projects for my clients, including portfolio websites and
        landing pages. Also contributed to open source software development on
        Github and added translations to several Crowdin projects.
      </span>
    </p>
    <p>
      <span>
        I learned my skill set on my own by reading manuals, documentations and
        taking online courses but most importantly constantly practicing and
        challenging myself to push forward on the hard road.
      </span>
    </p>
    <p>
      <span>
        I love to solve complex problems as well as doing straightforward tasks.
        You can check out my accomplishments on the{" "}
        <Link className="site-link" to="/projects">
          Projects
        </Link>{" "}
        section of this website!
      </span>
    </p>
    <div className="flex-grow-1 d-flex align-items-center flex-column">
      <h3 className="mt-auto">Feel free to contact me</h3>
      <h5 className="mt-1">-by mail: amatyas001@gmail.com</h5>
      <h5 className="mb-4">-by cell: +36 70 662 9640 (HU)</h5>
    </div>
  </div>
);

export default Home;
