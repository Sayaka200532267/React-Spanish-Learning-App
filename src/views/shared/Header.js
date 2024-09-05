import React from "react";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container"> 
          <a className="navbar-brand" href="/" style = {{color: 'white'}}>
            Spanish App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/" id="home" style = {{color: 'white'}}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutspanish" id="aboutspanish" style = {{color: 'white'}}>
                  About Spanish
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/holidays" id="holidays" style = {{color: 'white'}}>
                  Holidays
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Greetings" id="greetings" style = {{color: 'white'}}>
                  Greetings
                </a>
              </li>
            </ul>
          </div>
          <span className="navbar-text" style = {{color: 'white'}}>Spanish application</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
