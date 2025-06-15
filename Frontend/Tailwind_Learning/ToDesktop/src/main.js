import "./style.css";

let sideNav = document.getElementById("sideNav");
let hamburger = document.getElementById("hamburger");
let xmark = document.getElementById("xmark");

hamburger.addEventListener("click", () => {
  sideNav.classList.toggle("hidden");
});

xmark.addEventListener("click", () => {
  sideNav.classList.toggle("hidden");
});

// const value of our lanes initial postions we set

const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;


function setUpIntersectionObserver(element, isLTR, speed) {
  // intersection callback
  const intersectionCallBack = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    // observing
    console.log(element, isIntersecting);
    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };

  // creating new intersection observer
  const intersectionObserver = new IntersectionObserver(intersectionCallBack);

  // pass element on which we want to observe

  intersectionObserver.observe(element);

  // scrollHandler
  function scrollHandler() {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed; // first part () compute how much that element is scroll means, how up or down its position
    // element.style.transform = `translateX(${translateX}px)`;

    //* Utill this our icons trays are translate toward x direction but without respect of its initial positions;

    // lets set starting position for our animation (translation)
    let totalTranslate = 0;

    if (isLTR) {
      totalTranslate = translateX + initialTranslateLTR;
    } else {
      totalTranslate = -(translateX + initialTranslateRTL);
    }

    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}

setUpIntersectionObserver(lane1, true, 0.15);
setUpIntersectionObserver(lane2, false, 0.15);
setUpIntersectionObserver(lane3, true, 0.15);
setUpIntersectionObserver(lane4, true, 0.7);

// FAQs collaps logic

let dtElements = document.querySelectorAll("dt");

dtElements.forEach((element) => {
  element.addEventListener("click", () => {
    let ddID = element.getAttribute("aria-controls");
    let ddElement = document.getElementById(ddID);
    let arrowIcon = element.querySelector("i");
    ddElement.classList.toggle("hidden");
    arrowIcon.classList.toggle("-rotate-180");
  });
});
