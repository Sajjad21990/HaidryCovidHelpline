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

export default function Home({ bedsData }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Head lang="en">
        <title>Haidery Covid Helpline</title>
        <meta name="description" content="Haidery Covid Helpline" />
        <meta name="description" content="Haidery Covid Helpline" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Volunteer driven, crowdsourced tracker for Covid19 cases in Mira-Bhayander area"
        />
        <meta
          property="og:description"
          content="This website provides you the information about Hospital beds, Oxygen Cylinders to the needy ones at right time."
        />
        <meta
          property="og:url"
          content="https://haiderycovidhelpline.netlify.app/"
        />
        <meta property="og:site_name" content="Haidery Covid Helpline" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Haidery Covid Helpline" />
        <meta
          name="twitter:description"
          content="This website provides you the information about Hospital beds, Oxygen Cylinders to the needy ones at right time."
        />
        <meta
          name="twitter:image"
          content="https://haiderycovidhelpline.netlify.app/images/coronavirus.png"
        />
        <meta name="theme-color" content="#ee5b3e" />
        <link rel="icon" href="/images/coronavirus.png" />
      </Head>

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
      <Features />
      <BedsTable data={bedsData} />
      <EmergencyBanner />
      <CovidTracker />
      <BackToTop />
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
