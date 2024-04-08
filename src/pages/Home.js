import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);
  const rootUrl = "https://localhost:44349/";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://localhost:44349/umbraco/api/Home/getHomePageContent",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means the effect runs once when the component mounts

  var videoSrc = "";
  if (data?.desktopVideo !== "") {
    videoSrc = rootUrl + data?.desktopVideo;
  }
  var posterImgSrc = "";
  if (data?.posterImage !== "") {
    posterImgSrc = rootUrl + data?.posterImage;
  }
  var textImgSrc = "";
  if (data?.textImage !== "") {
    textImgSrc = rootUrl + data?.textImage;
  }
  console.log(data);

  const availableServices = { __html: data?.availableServices };

  // const blockList = data?.spaceForLivingBlocks
  // var classLabel = "";
  // blockList.forEach(element => {
  //   if(element.Type === "One bed"){
  //     classLabel = "one"
  //   }
  //   else if(element.Type === "Two bed"){
  //     classLabel = "two"
  //   }
  //   else if(element.Type === "Level split"){
  //     classLabel = "level"
  //   }

  // });

  function finalLogoSelection(strlogoSelection) {
    let finallogoselectionclass = "";
    if (strlogoSelection.toLowerCase() === "green blue circle") {
      finallogoselectionclass =
        '<b class="circle green"></b><b class="circle blue"></b>';
    } else if (strlogoSelection.toLowerCase() === "red circle") {
      finallogoselectionclass = '<b class="circle red"></b>';
    } else if (strlogoSelection.toLowerCase() === "railway blue circle") {
      finallogoselectionclass =
        '<b class="circle rail"></b><b class="circle purple"></b>';
    } else if (strlogoSelection.toLowerCase() === "railway orange circle") {
      finallogoselectionclass =
        '<b class="circle rail"></b><b class="circle orange"></b>';
    }
    return finallogoselectionclass;
  }

  return (
    <>
      <Layout data={data}>
        <section class="intro-img-box">
          <video
            class="web"
            // src="video/video-acton_lena.mp4"
            src={videoSrc}
            type="video/mp4"
            poster={posterImgSrc}
            muted
            loop
            autoPlay
            playsInline
          >
            Sorry, your browser doesn't support HTML5 video tag.
          </video>
          <video
            class="mobile"
            src="video/video-acton_lena-mobile.mp4"
            type="video/mp4"
            poster="images/img--home-poster.jpg"
            muted
            loop
            autoPlay
            playsInline
          >
            Sorry, your browser doesn't support HTML5 video tag.
          </video>
        </section>
        <section class="intro-text-box">
          <div class="inner">
            <article>
              <h1>
                {/* Forty five beautifully designed homes to rent in London W3. */}
                {data?.bottomCaption}
              </h1>
            </article>
          </div>
        </section>
        <section class="apartment-list-box info" id="apartments">
          <div class="inner">
            <h2>
              <img alt="" src={textImgSrc} /> <b>{data?.text}</b>
            </h2>
            <section class="apartment">
              <article class="one">
                <section class="slide">
                {data?.leftSliderBlocks.map((block, index) => (
                  <article key={index}>
                    <figure style={{backgroundImage: `url(${rootUrl + block.desktopImage})`}}>
                      <img src={rootUrl + block.desktopImage} alt="" />
                    </figure>
                  </article>
                ))}
                </section>
                <section class="bedroom">
                  <figure class="db-text one"></figure>
                </section>
                <section class="text-box">
                  <p>From £{data?.leftPrice}</p>
                </section>
              </article>
              <article class="two">
                <section class="slide">
                {data?.centerSliderBlocks.map((block, index) => (
                  <article key={index}>
                    <figure style={{backgroundImage: `url(${rootUrl + block.desktopImage})`}}>
                      <img src={rootUrl + block.desktopImage} alt="" />
                    </figure>
                  </article>
                ))}
                </section>
                <section class="bedroom">
                  <figure class="db-text one"></figure>
                </section>
                <section class="text-box">
                  <p>From £{data?.centerPrice}</p>
                </section>
              </article>
              <article class="level">
                <section class="slide">
                {data?.rightSliderBlocks.map((block, index) => (
                  <article key={index}>
                    <figure style={{backgroundImage: `url(${rootUrl + block.desktopImage})`}}>
                      <img src={rootUrl + block.desktopImage} alt="" />
                    </figure>
                  </article>
                ))}
                </section>
                <section class="bedroom">
                  <figure class="db-text one"></figure>
                </section>
                <section class="text-box">
                  <p>From £{data?.rightPrice}</p>
                </section>
              </article>
            </section>
            <section class="furnished">
              <article>
                {/* <h2>
                  <span>Fully furnished</span> – all apartments are move-in
                  ready with <span>generous private balcony</span>, fitted
                  kitchens with integrated Samsung appliances,{" "}
                  <span>sustainably sourced furniture & fittings</span> &
                  washing machine.
                </h2>
                <h3>Designed to maximise comfort & light</h3> */}
                <div dangerouslySetInnerHTML={availableServices} />
              </article>
            </section>
          </div>
        </section>
        <section class="home-slide-box">
          <div class="sx">
            {data?.homeSliderBlocks.map((block, index) => (
              <article key={index}>
                <figure style={{ backgroundImage: rootUrl + block.image }}>
                  <img alt="" src={rootUrl + block.image} />
                </figure>
              </article>
            ))}
          </div>
          <span class="arrow l"></span>
          <span class="arrow r"></span>
        </section>
        <section class="living-lina-box info" id="livingatlina">
          <div class="inner">
            {data?.livingFacilitiesBlocks.map((block, index) => (
              <div key={index}>
                <h2>{block.heading}</h2>
                <section>
                  {block.facilities.map((facility, facilityIndex) => (
                    <article key={facilityIndex}>
                      <figure
                        style={{
                          backgroundImage: `url(${rootUrl + facility.image})`,
                        }}
                      >
                        <img alt="" src={rootUrl + facility.image} />
                      </figure>
                      <p>{facility.standFirst}</p>
                    </article>
                  ))}
                </section>
              </div>
            ))}
          </div>
          <span class="graphic"></span>
        </section>
        <section class="location-box info" id="location">
          <div class="inner">
            {/* <h2>Location</h2>
              <p>
                You can see the city skyline from your balcony & be there in no
                time – Acton is a commuter’s dream, with seven railway stations
                & easy access to the M4 corridor & beyond.
              </p> */}
            {data?.locationMapBlocks.map((block, index) => (
              <div key={index}>
                <article>
                  <div
                    dangerouslySetInnerHTML={{ __html: block.description }}
                  />
                </article>
                <article class="location">
                  <figure>
                    <img alt="" src={rootUrl + block.leftImage} />
                  </figure>

                  <aside class="station-box">
                    {block.location.map((location, locationImdex) => (
                      <p key={locationImdex}>
                        <span
                          class="ca"
                          dangerouslySetInnerHTML={{
                            __html: finalLogoSelection(location.logoSelection),
                          }}
                        >
                          {/* <b class="circle green"></b>
                          <b class="circle blue"></b> */}
                        </span>
                        <label>{location.station}</label>
                        <small>{location.location}</small>
                      </p>
                    ))}
                  </aside>
                  <figcaption>
                    {/* Acton is the only place in London to have stations named after
                      all four of its cardinal points, North, South, East, & West, as
                      well as Acton Town & Central…a world of possibilities. */}
                    {block.bottomCaption}
                  </figcaption>
                </article>
              </div>
            ))}
          </div>
        </section>
        <section class="our-community-box" id="ourcommunityandcommitments">
          {data?.ourCommunityBlocks?.map((block, index) => (
            <div class="inner info" key={index}>
              <h2>{block.heading}</h2>
              <div class="community">
              {block?.community?.map((block, index) => (
                <article key={index}>
                  <Link to={block.url}>
                    <figure
                      style={{
                        backgroundImage: `url(${rootUrl + block.image})`,
                      }}
                    >
                      <img alt="" src={rootUrl + block.image} />
                    </figure>
                  </Link>
                </article>
              ))}
              </div>
            </div>
          ))}
        </section>
        <section class="intro-img-box lg">
          {data?.fullWidthVideoBlocks?.map((block, index) => (
            <div class="inner" key={index}>
              <video
                class="web"
                src={rootUrl + block.video}
                type="video/mp4"
                poster={rootUrl + block.posterImage}
                muted
                loop
                autoPlay
                playsInline
              >
                Sorry, your browser doesn't support HTML5 video tag.
              </video>
              <video
                class="mobile"
                src={rootUrl + block.videoMobile}
                type="video/mp4"
                poster={rootUrl + block.posterImageMobile}
                muted
                loop
                autoPlay
                playsInline
              >
                Sorry, your browser doesn't support HTML5 video tag.
              </video>
            </div>
          ))}
        </section>
        {/* <section class="find-home-box">
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
        </section> */}
      </Layout>
    </>
  );
};

export default Home;
