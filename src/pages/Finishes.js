import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'

const Finishes = () => {
    const [data, setData] = useState(null);
    const rootUrl = "https://localhost:44349/"
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('https://localhost:44349/umbraco/api/Finishes/getFinishesPageContent', {
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
  var headerImgSrc = "";
  if(data?.headerImage !== ""){
    headerImgSrc = data?.headerImage
  }
  return (
    <>
    <Layout data={data}>
    <section class="intro-img-box small">
                <figure class="pattern" style={{backgroundImage:`url(${rootUrl + headerImgSrc})`,backgroundPosition: "top center"}}></figure>
                <div class="description">
                    <div><h1>{data?.centerText}</h1></div>
                </div>
            </section>
            <section class="finishes-box">
                <div class="inner">
                    <article class="s1">
                        <p class="fs">{data?.rightText}</p>
                        <div class="img-1 lm70">
                            <figure><img alt={data?.leftImageAlt} src={rootUrl + data?.leftImage} /></figure>
                            <p>{data?.leftCenterText}</p>
                            <figure class="small"><img alt={data?.leftSmallImageAlt} src={rootUrl + data?.leftSmallImage} /></figure>
                            <p>{data?.leftBelowText}</p>
                        </div>
                        <div class="img-2 rt">
                            <figure><img alt={data?.rightLargeImageAlt} src={rootUrl + data?.rightLargeImage} /></figure>
                        </div> 
                    </article>
                    <article class="s3">
                        <div class="img-8">
                            <figure><img alt={data?.leftPictureAlt} src={rootUrl + data?.leftPicture} /></figure>
                            <p>{data?.centerInfo}</p>
                        </div>
                        <div class="img-5 rt rm70">
                            <figure><img alt={data?.rightPictureAlt} src={rootUrl + data?.rightPicture} /></figure>
                        </div>
                    </article>
                    <article class="s2">
                        <div class="img-3 lm70">
                            <figure>
                                <img alt={data?.leftLargeImageAlt} src={rootUrl + data?.leftLargeImage} />
                            </figure>  
                            <p>{data?.leftLargeImageText}</p>
                        </div> 
                    </article>
                    <article>
                        <div class="img-9">
                            <figure><img alt={data?.smallImageAlt} src={rootUrl + data?.smallImage} /></figure> 
                        </div>
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

export default Finishes
