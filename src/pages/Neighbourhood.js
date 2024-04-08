import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'

const Neighbourhood = () => {
    const [data, setData] = useState(null);
    const rootUrl = "https://localhost:44349/"
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('https://localhost:44349/umbraco/api/Neighbourhood/getNeighbourhoodPageContent', {
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
  const leftDescription = {__html: data?.leftDescription}
  const leftStandFirst = {__html: data?.leftStandFirst}
  const rightStandFirst = {__html: data?.rightStandFirst}
  const leftIntro = {__html: data?.leftIntro}
  const leftText = {__html: data?.leftText}
  return (
    <>
    <Layout data={data}>
    <section class="intro-img-box lg neighb">
    <figure class="pattern" style={{backgroundImage:`url(${rootUrl + headerImgSrc})`}}></figure>
                <section class="description bt info">
                    <div class="inner">
                        <img alt={data?.logoTextAlt} src={rootUrl + data?.logoText} />
                        <p class="ht info">{data?.leftTopText}</p>
                    </div>
                </section>
            </section>
            <section class="intro-text-box neighb">
                <div class="inner">
                    <article class="neib">
                        <div dangerouslySetInnerHTML={leftDescription}/>
                        {/* <h2>EAT & DRINK</h2>
                        <p>
                            Acton hosts some great pubs with impressive kitchens, including The Rocket, The Station House & The George & Dragon, guaranteed for a local pint of craft beer & great gastro experiences – or visit Vindinista, a wine bar with a huge collection of unusual & independent bottles. <br /><br />
                            The Aeronaut is arguably one of Ealing borough’s most unique venues with circus themed performances, its own onsite microbrewery & one of the best beer gardens in London. <br /><br />
                            Claimed to be the best pub in Chiswick, The City Barge, known for not only its enviable views of the Thames, but also its entertaining Wednesday night quiz & soft shell crab burgers. <br /><br />
                            Local Japanese fishmongers, Atari-Ya, popular for high-quality sushi & sashimi. <br /><br /> 
                            Grove Park Deli, renowned for its amazing selection of deli foods & possibly the best sausage rolls in the world! <br /><br />
                            Acton Market (Crown Street), every Wednesday & Saturday, is the spot to pick up homemade jams, fresh bread, fruit, vegetables, flowers & art from a host of enthusiastic independent makers & traders.
                        </p> */}
                    </article>
                </div>
            </section>
            <section class="neib-grid-box">
                <div class="inner">
                
                    <article>
                    {data?.multiImages.map((image, index) => (
                        <figure key={index} class={"g" + (index+1)} style={{backgroundImage:`url(${rootUrl + image.image})`}}><img alt={image.imageAlt} src={rootUrl + image.image} /></figure>
                    ))}    
                    </article>
                
                    {/* <article>
                       <figure class="g1" style={{backgroundImage: "url(images/img-neib-grid1.jpg)"}}><img alt="" src="images/img-neib-grid1.jpg" /></figure>
                       <figure class="g2" style={{backgroundImage: "url(images/img-neib-grid2.jpg)"}}><img alt="" src="images/img-neib-grid2.jpg" /></figure>
                       <figure class="g3" style={{backgroundImage: "url(images/img-neib-grid3.jpg)"}}><img alt="" src="images/img-neib-grid3.jpg" /></figure>
                       <figure class="g4" style={{backgroundImage: "url(images/img-neib-grid4.jpg)"}}><img alt="" src="images/img-neib-grid4.jpg" /></figure>
                       <figure class="g5" style={{backgroundImage: "url(images/img-neib-grid5.jpg)"}}><img alt="" src="images/img-neib-grid5.jpg" /></figure>
                    </article> */}
                </div>
            </section> 
            <section class="greenspace-leisure" id="greenspaceandleisure">
                <div class="inner">
                    <h2 class="hd">{data?.heading}</h2>
                    <article class="col-box c1">
                        <section>
                            <div dangerouslySetInnerHTML={leftStandFirst}/>
                            {/* <h2>Acton</h2>
                            <p>Acton’s abundant surrounding green open spaces & leisure opportunities are one of the area’s main draws. </p>
                            <p>Acton Park’s stunning grounds offer a range of activities, including tennis, basketball & football courts, climbing block, bowling green, boating pond, as well as popular Putt In The Park’s 15 hole course with fully-licensed clubhouse. There’s plenty more to keep children entertained, including a play centre & playground.</p> */}
                        </section>
                        <figure><img alt={data?.rightSmallImageAlt} src={rootUrl + data?.rightSmallImage} /></figure>
                    </article>
                    <article class="col-box c2"> 
                        <figure><img alt={data?.leftSmallImageAlt} src={rootUrl + data?.leftSmallImage} /></figure>
                        <section>
                            <div dangerouslySetInnerHTML={rightStandFirst}/>
                            {/* <p>Also nearby, providing adrenalin entertainment for all ages (8 years plus), is TeamSports E-Karting – featuring the no-nonsense twisted multi-level, 500m track - one of the fastest in the country. </p>
                            <p>For something less energetic, visit the pop-up ActOne Cinema on Acton High Street. Pioneered by a group of local residents, the venture has brought new life to the disused old library building, restoring its role as a community hub with two 60-seat screening rooms, fully equipped with the latest digital technology, lounge & café.</p> */}
                        </section>
                    </article>
                    <article class="col-box c3"> 
                        <figure><img alt={data?.rightImageAlt} src={rootUrl + data?.rightImage} /></figure>
                        <section>
                            <div dangerouslySetInnerHTML={leftIntro}/>
                            {/* <h2>Gunnersbury</h2>
                            <p>Gunnersbury Park stretches across 200 acres of expansive lawns, woodlands, lakes & fountains, as well as a museum which was once the home of the Rothschild family. </p>
                            <p>Year-round educational walks, talks & community events can be enjoyed, alongside extensive leisure facilities to hire – eight floodlit tennis courts, two full-size all-weather football pitches, nice adult & junior grass football pitches, a rugby pitch & three grass cricket wickets. A picturesque spot with a nature trail, Gunnersbury Triangle, is also a haven for local wildlife.</p> */}
                        </section>
                        <figure class="sm"><img alt={data?.leftShortImageAlt} src={rootUrl + data?.leftShortImage} /></figure>
                        <figure class="lg"><img alt={data?.rightLargeImageAlt} src={rootUrl + data?.rightLargeImage} /></figure>
                    </article>
                    <article class="col-box c4"> 
                        <section>
                            <div dangerouslySetInnerHTML={leftText}/>
                            {/* <h2>Chiswick</h2>
                            <p>Chiswick & its Thames-side walks, are described as some of the prettiest green spaces in West London – including Chiswick House & Gardens, regarded as the birthplace of the English Landscape Garden, balances elegant 18th century architecture with 65 acres of gardens, alongside café, tennis courts, playgrounds & bowling green. </p>
                            <p>Chiswick is home to designer brands as well as up & coming creatives. The leafy High Road & surrounding streets mix gastropubs, upmarket brands & casual dining, as well as coffee shops, delis & bakeries. A destination for interiors fans, Chiswick is famed for its auction house & vintage stores, as well as plenty to entertain, including boutique cinema, cookery school & comedy club.</p> */}
                        </section>
                        <figure><img alt={data?.rightShortImageAlt} src={rootUrl + data?.rightShortImage} /></figure> 
                    </article>
                </div>
            </section> 
            {/* <section class="find-home-box">
                <article>
                    <h2>
                        <span>Available March 24</span>
                        <a class="btn" href="#">BOOK A VIEWING</a><a class="btn" href="#">Find your home</a>
                    </h2>
                </article>
            </section> */}
    </Layout>
    </>
  )
}

export default Neighbourhood
