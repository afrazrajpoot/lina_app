import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'

const ActonGardens = () => {
  const [data, setData] = useState(null);
  const rootUrl = "https://localhost:44349/"
  var headerImgSrc = "";
  if(data?.headerImage !== ""){
    headerImgSrc = rootUrl + data?.headerImage
  }
  var textImgSrc = "";
  if(data?.textImage !== ""){
    textImgSrc = rootUrl + data?.textImage
  }

  const leftText = {__html: data?.leftText}
  const bottomCaption = {__html: data?.bottomCaption}
  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('https://localhost:44349/umbraco/api/Acton/getActonPageContent', {
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
  return (
    <>
    <Layout data={data}>
        <section class="intro-img-box">
            <figure class="pattern" style={{backgroundImage:`url(${headerImgSrc})`}}></figure>
            <section class="description"><figure class="db-text">Level split</figure></section> 
        </section>
                
        <section class="intro-text-box ag">
            <div class="inner"> 
                <article class="left-box">
                    <img class="ilina" alt="" src={textImgSrc} />
                    <div dangerouslySetInnerHTML={leftText}/>
                    {/* <h2>where you’re part of something bigger</h2>
                    <h2>On your doorstep…</h2>
                    <p class="small">CONVENIENCE THAT’S REALLY CONVENIENT!</p>
                    <p>Acton Gardens has three schools, nursery, doctors & dentists, as well as hairdressers, supermarket, gym, co-working, event spaces and Mint Café - the home of incredible coffee, teas, frappes, cake & pastries.</p>
                    <h2 class="quote pq">Acton High Street’s variety of new independent bars, coffee shops & restaurants add to the choice.</h2>
                    <p class="fgu">Acton Gardens is surrounded by leafy lanes & streets, with green spaces throughout – from shared gardens & pocket parks to play areas & elegant squares. Thoughtfully designed landscaping creates a green outlook all year around, providing a host of spaces to walk & gather, no matter the season.</p>
                    <p class="fgu">Central Plaza, directly opposite Lina, sits at the heart of Acton Gardens, recently opened with the unveiling of The Peoples Throne, a piece of public Art created by former Acton Gardens resident, Adebayo Bolaji, in collaboration with the local community.</p> */}
                </article>
                <article class="right-box">
                    <section>
                        <aside>
                        {data?.rightImages.map((image, index) => (
                            <figure key={index}>
                                <img alt="" src={ rootUrl + image.image} />
                            </figure>
                        ))}
                            {/* <figure><img alt="" src="/images/img-ag-thumb1.jpg" /></figure>
                            <figure><img alt="" src="/images/img-ag-thumb2.jpg" /></figure>
                            <figure><img alt="" src="/images/img-ag-thumb3.jpg" /></figure> */}
                        </aside>
                    </section> 
                </article>
                <article class="left-box l2">
                    {/* <h2>Lina residents have easy access to a superb range of surrounding parks & green spaces.</h2> */}
                    <div dangerouslySetInnerHTML={bottomCaption}/>
                    <figure><img style={{width: "104px"}} alt="" src={rootUrl + data?.logo} /></figure>
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

export default ActonGardens
