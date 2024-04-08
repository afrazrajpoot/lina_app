import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'

const OurImpact = () => {
  const [data, setData] = useState(null);
  const rootUrl = "https://localhost:44349/"
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://localhost:44349/umbraco/api/OurImpact/getOurImpactPageContent', {
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
var leftImgSrc = "";
if(data?.leftImage !== ""){
    leftImgSrc = rootUrl + data?.leftImage
}
var lefttImgMobileSrc = "";
if(data?.leftImageMobile !== ""){
    lefttImgMobileSrc = rootUrl + data?.leftImageMobile
}
var rightImgSrc = "";
if(data?.rightImage !== ""){
    rightImgSrc = rootUrl + data?.rightImage
}
var rightImgMobileSrc = "";
if(data?.rightImageMobile !== ""){
    rightImgMobileSrc = rootUrl + data?.rightImageMobile
}
const leftText = {__html: data?.leftText}
const rightText = {__html: data?.rightText}
const bottomText = {__html: data?.bottomText}
return (
    <>
    <Layout data={data}>
    <section class="impact-box">
                <div class="inner">
                    <article>
                        <figure>
                            <img class="web" alt={data?.rightImageAlt} src={rightImgSrc}/>
                            <img class="mobile" alt={data?.rightImageMobileAlt} src={rightImgMobileSrc}/>
                        </figure>
                        <div class="rt info">
                            <div dangerouslySetInnerHTML={leftText}/>
                            {/* <h1>A place that gives back to those who give…</h1>
                            <p>30% OF OUR APARTMENTS HAVE BEEN SET ASIDE FOR THOSE IN FRONTLINE ROLES, PROVIDING SECURE, LOWER RENTS, WITH UP TO 25% DISCOUNT*. </p> */}
                        </div>
                    </article>
                </div>
            </section>
            <section class="key-worker-box">
                <div class="inner">
                    <article>
                        <div class="lt">
                            <figure class="ikw1">
                                <img class="web" alt={data?.leftImageAlt} src={leftImgSrc}/>
                                <img class="mobile" alt={data?.leftImageMobileAlt} src={lefttImgMobileSrc}/>
                            </figure>
                        </div>
                        <div class="rt">
                        <div dangerouslySetInnerHTML={rightText}/>
                            {/* <h3>Providing a home for today & tomorrow, a place for living & breathing that gives back</h3>
                            <p class="small fgu">We give back by removing compromise – all our spacious apartments are of the same thoughtful design and furnishing specification, creating comfortable, affordable homes in a fantastic accessible location. </p>
                            <p class="small fgu">We’re supporting keyworkers with the reassurance & security of affordable homes in London W3 </p>
                            <h3 class="bl">A place for everyone to belong in a natural neighbourhood – making a sustainable difference together.</h3>
                            <a class="btn" href="#">FIND OUT MORE</a> */}
                        </div>
                    </article>
                </div>
            </section>
            <section class="three-columns-box">
                <div class="inner">
                    {data?.multiImages.map((image, index) => (
                        <article key={index}> 
                            <figure style={{backgroundImage:`url(${rootUrl + image.image})`}}><img alt={image.imageAlt} src={rootUrl + image.image} /></figure>
                        </article>
                    ))}
                </div>
            </section>
            <section class="single-column-text info">
                <div class="inner">
                    <article>
                        <div dangerouslySetInnerHTML={bottomText}/> 
                        {/* <p>We’re making 14 apartments at Lina, that’s just over 30%, available at discounted rents for current key workers. Offering up to a 25% discount, applications are considered on a first come, first serve basis. All applications are individually assessed and available only to key workers on salaries less than £52,500 pa, with priority given to those in full-time public sector employment.</p>
                        <p>Applicable current key worker roles include: NHS staff, including nurses, midwifes, doctors, administrative roles (including those in training); teachers and teaching assistants; those employed by the police, fire, reserve and defence services. Social workers and equivalent roles at Ealing Council may be considered.</p> */}
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

export default OurImpact
