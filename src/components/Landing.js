import React from "react";
import '../bootstrap/css/bootstrap.min.css'
import * as routes from "../constants/routes";

const LandingPage = () => (
  <div className="jumbotron">
  <h1 className="display-4">COVISURANCE</h1>
  <p className="lead">Your personal COVID Insurance</p>
  <hr className="my-4" />
  <p>Fill in your details and get instant insurance in your wallet.</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="https://apoorve73.github.io/signin" role="button">Get Started</a>
  </p>
  </div>
);

export default LandingPage;
