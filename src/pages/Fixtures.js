import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'

const Fixtures = () => {
    const [data, setData] = useState(null);
    const rootUrl = "https://localhost:44349/"
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('https://localhost:44349/umbraco/api/Fixtures/getFixturesPageContent', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
              const result = await response.json();
              setData(result);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
  
      fetchData();
  }, []); // Empty dependency array means the effect runs once when the component mounts
  const htmlString = data?.leftText;
  const modifiedHtmlString = htmlString?.replace(/<p>\s*<span>/, '<span>');
  const leftText = {__html:  modifiedHtmlString}

  const centerText = {__html: data?.centerText}
  return (
    <>
    <Layout data={data}>
    <section class="beauty-space-box">
                <div class="inner">
                    <article>
                        <div dangerouslySetInnerHTML={leftText}/>
                        {/* <span>ALL HOMES ARE FURNISHED WITH A SUSTAINABLE MIX OF BESPOKE & DESIGNER FURNITURE</span>
                        <h1>Surrounded by craft, beauty & space</h1>
                        <p>Our dining furniture are a testament to local craftsmanship with design that combines lightness with stability, offering ample space and comfort.</p> */}
                    </article>
                    <figure><img alt={data?.rightLargeImageAlt} src={rootUrl + data?.rightLargeImage} /></figure>
                </div>
            </section>
            <section class="two-col-space-box">
                <div class="inner">
                    <article class="s1">
                        <figure><img alt={data?.leftFirstImageAlt} src={rootUrl + data?.leftFirstImage} /></figure>
                        <aside>
                            <p>{data?.leftFirstText}</p>
                        </aside>
                    </article>
                    <article class="s2">
                        <figure><img alt={data?.leftSecondImageAlt} src={rootUrl + data?.leftSecondImage} /></figure>
                        <aside>
                            <p>{data?.leftSecondText}</p>
                        </aside>
                    </article>
                    <article class="rt s1">
                        <figure><img alt={data?.rightImageAlt} src={rootUrl + data?.rightImage} /></figure>
                        <aside>
                            <h3>{data?.rightImageText}</h3>
                        </aside>
                    </article>
                    <article class="s3">
                        <figure><img alt={data?.leftPictureAlt} src={rootUrl + data?.leftPicture} /></figure>
                        <aside>
                            <div dangerouslySetInnerHTML={centerText}/>
                            {/* <h2>Selected for its ergonomic design ensuring <br />maximum comfort.</h2> */}
                        </aside>
                    </article>
                    <article class="rt s2">
                        <figure><img alt={data?.rightPictureAlt} src={rootUrl + data?.rightPicture} /></figure>
                    </article>
                    <article class="s4">
                        <figure><img alt={data?.leftCenterImageAlt} src={rootUrl + data?.leftCenterImage} /></figure> 
                    </article>
                </div>
            </section>
            {/* <section class="find-home-box">
                <article>
                    <h2><span>Available March 24</span> <a class="btn" href="#">BOOK A VIEWING</a><a class="btn" href="#">Find your home</a></h2>
                </article>
            </section> */}
    </Layout>
    </>
  )
}

export default Fixtures
