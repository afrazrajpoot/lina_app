import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div id="footer">
            <a class="logo ir" href="./" title="Lina">Lina</a>
            <ul>
                <li><a href="#apartments">APARTMENTS</a></li>
                <li><a href="#livingatlina">LIVING AT LINA</a></li>
                <li><a href="#location">LOCATION</a></li>
                <li><a href="#ourcommunityandcommitments">OUR COMMUNITY & COMMITMENTS</a></li>
            </ul>
            <p><a href="https://www.smallbackroom.com" target="_blank">Design by Small Back Room</a><Link to="/privacy-policy-and-terms-of-use">Privacy Policy + Terms of use</Link></p>
        </div>
    </footer>
  )
}

export default Footer
