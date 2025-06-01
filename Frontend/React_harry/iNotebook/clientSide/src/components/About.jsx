// import React, { useContext, useEffect } from "react";
// import noteContext from "../context/notes/noteContext";
import "./About.css";

//! Basic context use example
// here, we want to access our note state

const About = () => {
  // // this will give us
  // const stateUpdateFuncPack = useContext(noteContext); // useContext bring desired context state or data  e.g. from noteContext

  // lets invoke our updateStateFunc
  // useEffect(() => {  // we use useEffect to do something before rendering
  //   stateUpdateFuncPack.updateStatefunc();
  // }, []);

  return (
    <div className="container py-5 about-us">
      <div className="text-center mb-5">
        <h1 className="display-4">About Us</h1>
        <p className="lead text-muted">
          Learn more about our mission, values, and team.
        </p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
          src="https://divergentsoftlab.com/wp-content/uploads/2021/08/459-4593324_quality-management-hd-png-download.png"
            className="img-fluid rounded shadow-sm"
            alt="Our Mission"
          />
        </div>
        <div className="col-md-6">
          <h2>Our Mission</h2>
          <p>
            We aim to deliver high-quality solutions that drive growth and
            innovation. Our mission is to empower businesses with reliable and
            scalable digital experiences.
          </p>
        </div>
      </div>

      <div className="row align-items-center mb-5 flex-md-row-reverse">
        <div className="col-md-6">
          <img
            src="https://vamanioverseas.com/garments/images/Our-Values.png"
            className="img-fluid rounded shadow-sm"
            alt="Our Values"
          />
        </div>
        <div className="col-md-6">
          <h2>Our Values</h2>
          <ul>
            <li>Customer First</li>
            <li>Innovation Driven</li>
            <li>Integrity & Transparency</li>
            <li>Team Collaboration</li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <h2>Meet the Team</h2>
        <p className="text-muted">A small team of passionate professionals.</p>
        <div className="row">
          {["John", "Devid", "Mike"].map((name, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                  alt={name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text text-muted">Frontend Developer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

// learning part : accessing context api state

/*

 return (
    <div>
      <p>
        This is About Page
        {stateUpdateFuncPack.state.class} 
      </p>
    </div>
  );

*/
