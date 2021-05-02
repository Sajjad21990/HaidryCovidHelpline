import React from "react";
import { animateScroll as scroll } from "react-scroll";

const BackToTop = () => {
  return (
    <div
      className="bg-indigo-600 fixed bottom-5 right-2 w-12 h-12 rounded-3xl cursor-pointer"
      onClick={() => scroll.scrollToTop()}
    >
      <img src="/images/up-arrow-2.svg" alt="" />
    </div>
  );
};

export default BackToTop;
