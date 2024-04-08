import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ data }) => {
  return (
    <header>
      <div id="header">
        <Link class="logo ir" to="/" title="Lina">
          Lina
        </Link>
        <a class="menu ir" href="javascript:;">
          Menu
        </a>
        <nav>
          <ul class="main-nav">
            <li>
              <a href="#apartments">Apartments</a>
            </li>
            <li>
              <a href="#livingatlina">Living at Lina</a>
            </li>
            <li>
              <a href="#location">Location</a>
            </li>
            <li>
              <a class="dd" href="#ourcommunityandcommitments">
                Our Community & Commitments
              </a>
              <ul>
                {data?.lstheaderLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.Url}>{link.Name}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/acton-gardens">Action Gardens</Link>
                </li>
                <li>
                  <Link to="/neighbourhood">Neighbourhood</Link>
                </li>
                <li>
                  <Link to="/our-impact">key workers</Link>
                </li>
                <li>
                  <Link to="/furniture">Furniture</Link>
                </li>
                <li>
                  <Link to="/finishes">Finishes</Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="bf">
            <li>
              <Link to={data?.leftLink.Url}>{data?.leftButtonText}</Link>
            </li>
            <li>
              <Link to={data?.rightLink.Url}>{data?.rightButtonText}</Link>
            </li>
          </ul>
        </nav>
        <Link class="bk mobile" to={data?.leftLink.Url}>
          {data?.leftButtonText}
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
