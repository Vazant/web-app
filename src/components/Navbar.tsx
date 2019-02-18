import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <a className="navbar-brand" href="/">
            Web Obfuscator
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/online-obfuscator">
                  Online Obfuscator
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="download">
                  Download
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
