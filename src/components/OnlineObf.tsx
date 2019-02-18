import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import MyFooter from "./MyFooter";
import download from "..ico/Downloads-ico.png";
interface Props {}

interface State {
  textInput: string;
  textOutput: string;
}
class OnlineObf extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      textInput: "",
      textOutput: ""
    };
  }
  render() {
    return (
      <form action="POST">
        <Navbar />
        <main>
          <section className="g-bg-gray-light-v5 g-brd-around g-brd-gray-light-v4 g-line-height-2 g-pa-20 g-mb-20">
            <div className="container">
              <div className="row g-mb-10">
                <div className="col-md-6">
                  <label className="upload-button">
                    <div className="btn btn-primary">Chose</div>
                    <input type="file" hidden />
                  </label>
                  <span className="help-block">
                    &nbsp;&nbsp;Online Obfuscator supports .js &amp; .txt &amp;
                    .zip (Maximum size 2MB)
                  </span>
                </div>
                <div className="col-md-1">
                  <button className="btn btn-primary">Transform</button>
                </div>
                <div className="col-md-4" />
                <div className="col-md-1">
                  <div className="btn-group pull-right">
                    <a
                      id="ctl00_MainContent_ButtonDownload"
                      className="btn btn-light"
                      title="download"
                      href=""
                    >
                      down
                    </a>
                    <button className="btn btn-primary">copy</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-input">
                  <textarea
                    className="form-control form-control-md"
                    placeholder="Input Javascript code here"
                  />
                </div>
                <div className="col-md-6 form-output">
                  <textarea className="form-control form-control-md" readOnly />
                </div>
              </div>
            </div>
          </section>
          <section className="configurations">
            <div className="col-lg-3 g-pa-60">
              <div className="media g-mb-15">
                <div className="d-flex align-self-center mr-3">
                  <span className="u-icon-v3 g-color-gray-dark-v4 g-bg-secondary g-bg-primary--hover g-color-white--hover rounded-circle">
                    <i className="icon-wrench u-line-icon-pro" />
                  </span>
                </div>
                <div className="media-body align-self-center">
                  <h3 className="h5 g-color-black mb-0">Options</h3>
                </div>
              </div>
              {/* Выровнять по левому краю */}
              <ul className="list-unstyled">
                <li className="list-item">
                  <input className="pull-left" type="radio" name="" id="" />
                  <label className="pull-right">Delete all comments</label>
                </li>
                <li>
                  <input type="radio" name="" id="" />
                  <label>Trim (left and right trimming)</label>
                </li>
                <li>
                  <input type="radio" name="" id="" />
                  <label>Trim and delete comments</label>
                </li>
                <li>
                  <input type="radio" name="" id="" />
                  <label>Obfuscate</label>
                </li>
              </ul>
            </div>
          </section>
        </main>
        <MyFooter />
      </form>
    );
  }
}

export default OnlineObf;
