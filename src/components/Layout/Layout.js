import React from 'react'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import { Link } from 'react-router-dom'

const Layout = ({children, data}) => {
  return (
    <div id="outer-wrapper">
        <Navbar data={data} />
        <main>
          {children}
        </main>
        <section class="find-home-box">
          <article>
            <h2>
              <span>{data?.availableText}</span>{" "}
              <Link class="btn" to={data?.leftLink.Url}>
                {data?.leftButtonText}
              </Link>
              <Link class="btn" to={data?.rightLink.Url}>
                {data?.rightButtonText}
              </Link>
            </h2>
          </article>
        </section>
        <Footer />
    </div>
  )
}

export default Layout