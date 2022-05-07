// document.addEventListener("DOMContentLoaded", function () {
window.addEventListener("load", function () {
  // Header

  const headerScroll = document.querySelector("#header");
  //   console.log(headerScroll);
  addEventListener("scroll", function () {
    if (window.pageYOffset > 60) {
      headerScroll.classList.add("header-scrolled");
    } else {
      headerScroll.classList.remove("header-scrolled");
    }
  });

  // nav cross btn
  let menuBtn = document.querySelector(".nav-mob-icon");
  let allEl = document.querySelectorAll(".nav-link");
  // let allEl2 = document.querySelectorAll("#navbar .nav-link");
  // console.log(allEl2);

  for (let i = 0; i < allEl.length; i++) {
    allEl[i].addEventListener("click", function (e) {
      document.querySelector(".nav-menu").classList.remove("active1");
      // menuBtn.classList.toggle("fa-bars");
      menuBtn.classList.toggle("fa-times");
    });
  }

  // if (document.body.offsetWidth < 991) {
  //   document.querySelector(".nav-menu").style.transition = "0.6s";
  //   console.log(document.querySelector(".nav-menu"));
  // } else {
  //   document.querySelector(".nav-menu").style.transition = null;
  //   console.log(document.querySelector(".nav-menu"));
  // }
  // if (document.querySelector(".nav-menu")) {
  //   document.querySelector(".nav-menu").style.removeProperty("transition");
  // }

  menuBtn.addEventListener("click", function () {
    document.querySelector(".nav-menu").classList.toggle("active1");

    // this.classList.toggle("fa-bars");
    this.classList.toggle("fa-times");
    // document.querySelector(".nav-menu").style.transition = "0.6s";
  });

  // BackTop
  const backTop = document.querySelector("#backTop");
  addEventListener("scroll", function () {
    if (window.pageYOffset > 500) {
      backTop.style.opacity = "1";
    } else {
      backTop.style.opacity = "0";
    }
  });

  //Progression bar with Waypoints.js cdn
  let waypoint = new Waypoint({
    element: document.getElementById("skills"),
    offset: "80%",
    handler: function (direction) {
      console.log(direction);
      let progress = document.getElementsByClassName("progress-bar");
      //   console.log(progress);
      //   progress[0].style.width = progress[0].getAttribute("aria-valuenow") + "%";
      //   [...progress].forEach((el) => {
      //     console.log(el);
      //   });
      [...progress].forEach((el) => {
        el.style.width = el.getAttribute("aria-valuenow") + "%";
      });
      //   console.log(progress[0].getAttribute("aria-valuenow"));
    },
  });
  console.log(waypoint);

  //Portfolio with Isotope.js
  let elem = document.querySelector(".portfolio-container");
  imagesLoaded(elem, function () {
    let iso = new Isotope(elem, {
      // options
      itemSelector: ".portfolio-item",
    });

    iso.layout();

    let portfolioFilters = [...document.querySelectorAll("#portfolio ul li")];
    //   console.log(portfolioFilters);
    //   console.log([...portfolioFilters]);
    portfolioFilters.forEach((e) => {
      e.addEventListener("click", function (e) {
        //   console.log(e.target);
        //   console.log(this);
        portfolioFilters.forEach(function (el) {
          el.classList.remove("filter-active");
        });
        this.classList.add("filter-active");

        iso.arrange({
          filter: this.getAttribute("data-filter"),
        });
      });
    });
  });

  // iso.arrange({
  //   filter: "*",
  // });

  // let reloaditem = new Isotope(".portfolio-container");
  // let reloaditem = document.getElementById("portfolio-container").isotope("layout");
  // console.log(reloaditem);
  // imagesLoaded(elem).addEventListener("load", function () {
  //   iso.layout();
  // });'

  // Scroll setions active link

  window.addEventListener("scroll", function () {
    const windowScroller = window.scrollY;
    // console.log(windowScroller);

    // Attempte 1

    let section = document.querySelectorAll("section[id]");
    // return nodeList --> totla 6
    // console.log(section);

    section.forEach((el) => {
      let sectionOffSetTop = el.offsetTop - 58;
      let sectionOffSetHeight = el.offsetHeight;
      let sectionId = el.getAttribute("id");
      // find out the plain text if

      let navActive = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
      // find out all a tag element
      // console.log(navActive);

      if (windowScroller > sectionOffSetTop && windowScroller <= sectionOffSetTop + sectionOffSetHeight) {
        document.querySelector(`div.nav-menu a[href*=${sectionId}]`).classList.add("active-link");
        // let navActive = document.querySelector(`div.nav-menu a[href*=${sectionId}]`);
        // let navActive = document.querySelector("div.nav-menu a[href*=" + sectionId + "]");
      } else {
        document.querySelector(`div.nav-menu a[href*=${sectionId}]`).classList.remove("active-link");
      }
    });

    // Attempte 2

    // let sectionA = [...document.querySelectorAll("#navbar .nav-link")];
    // // return nodelike as first --> array
    // // console.log(sectionA);

    // sectionA.forEach((el) => {
    //   // console.log(el);
    //   // console.log(el.hash);
    //   // console.log(document.querySelectorAll(el.hash));
    //   let wholeSection = document.querySelector(el.hash);
    //   // return the first element object #xxx (section xxx)

    //   let eachSectionOffsetTop = wholeSection.offsetTop - 58;
    //   // console.log(`${el.hash}: ${wholeSection.offsetTop}`);
    //   // console.log(wholeSection.offsetHeight);
    //   // console.log(wholeSection);

    //   if (windowScroller >= eachSectionOffsetTop && windowScroller <= eachSectionOffsetTop + wholeSection.offsetHeight) {
    //     el.classList.add("active-link");
    //   } else {
    //     el.classList.remove("active-link");
    //   }
    // });
  });

  // const scrollto = (el) => {
  //   let header = document.querySelector("#header");
  //   let offset = header.offsetHeight;

  //   if (!header.classList.contains("header-scrolled")) {
  //     offset -= 150;
  //   }

  //   let elementPos = document.querySelector(el).offsetTop;
  //   window.scrollTo({
  //     top: elementPos - offset,
  //     behavior: "smooth",
  //   });
  // };

  // window.addEventListener("load", () => {
  //   console.log(window.location.hash);
  //   if (window.location.hash) {
  //     console.log(document.querySelector(window.location.hash));
  //     if (document.querySelector(window.location.hash)) {
  //       scrollto(window.location.hash);
  //     }
  //   }
  // });

  //Dark mode

  const darkModeBtn = document.getElementById("dark-mode-btn");
  const darkTheme = "dark-theme";
  const iconTheme = "fa-sun";

  // let currentIcon = () => (darkModeBtn.classList.contains(iconTheme) ? "fa-sun" : "fa-moon");
  let currentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
  // console.log(localStorage.getItem("theme"));
  // console.log(localStorage.getItem("icon"));
  // console.log(document.body.classList);
  console.log(darkModeBtn);

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add(darkTheme);
    darkModeBtn.classList.toggle(iconTheme);
  } else {
    document.body.classList.remove(darkTheme);
  }

  darkModeBtn.addEventListener("click", function () {
    this.classList.toggle(iconTheme);
    // this.classList.toggle("fa-moon");
    document.body.classList.toggle(darkTheme);
    // console.log(this);
    // console.log(this.classList.contains("fa-moon"));
    // console.log(this.classList[0]);
    // localStorage.setItem("theme", );
    localStorage.setItem("theme", currentTheme());
    // localStorage.setItem("icon", currentIcon());
    // console.log(document.body.classList);
    console.log(darkModeBtn);
  });
});
