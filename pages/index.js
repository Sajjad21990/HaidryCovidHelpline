import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import BedsTable from "../components/BedsTable";
import BackToTop from "../components/BackToTop";
import CovidTracker from "../components/CovidTracker";
import EmergencyBanner from "../components/EmergencyBanner";
import Disclaimer from "../components/Disclaimer";
import Carousel from "../components/Carousel";

export default function Home({ bedsData }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Head lang="en">
        <title>Haidery Covid Helpline</title>

        <link rel="icon" href="/images/coronavirus.png" />
      </Head>

      {bedsData ? (
        <>
          <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg
                  className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <Navbar
                  isOpen={isOpen}
                  hanldeOpen={() => setIsOpen(true)}
                  handleClose={() => setIsOpen(false)}
                />

                <Hero />
              </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="/images/hero.jpg"
                alt=""
              />
            </div>
          </div>
          {/* <Carousel /> */}
          <Features />
          <EmergencyBanner />
          <BedsTable data={bedsData} />

          {/* <CovidTracker /> */}
          <Disclaimer />
          <BackToTop />
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const result = await fetch(
    `https://haidery-covid-helpline.vercel.app/api/beds/get-data`
  );
  // const result = await fetch(`http://localhost:3000/api/beds/get-data`);
  const data = await result.json();

  return {
    props: {
      bedsData: data,
    }, // will be passed to the page component as props
  };
}
