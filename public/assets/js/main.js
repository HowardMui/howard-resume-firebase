// document.addEventListener("DOMContentLoaded", function () {
// import apikey from "apikey.js";
window.addEventListener("load", function () {
  (function (f, b) {
    if (!b.__SV) {
      var e, g, i, h;
      window.mixpanel = b;
      b._i = [];
      b.init = function (e, f, c) {
        function g(a, d) {
          var b = d.split(".");
          2 == b.length && ((a = a[b[0]]), (d = b[1]));
          a[d] = function () {
            a.push([d].concat(Array.prototype.slice.call(arguments, 0)));
          };
        }
        var a = b;
        "undefined" !== typeof c ? (a = b[c] = []) : (c = "mixpanel");
        a.people = a.people || [];
        a.toString = function (a) {
          var d = "mixpanel";
          "mixpanel" !== c && (d += "." + c);
          a || (d += " (stub)");
          return d;
        };
        a.people.toString = function () {
          return a.toString(1) + ".people (stub)";
        };
        i =
          "disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(
            " "
          );
        for (h = 0; h < i.length; h++) g(a, i[h]);
        var j = "set set_once union unset remove delete".split(" ");
        a.get_group = function () {
          function b(c) {
            d[c] = function () {
              call2_args = arguments;
              call2 = [c].concat(Array.prototype.slice.call(call2_args, 0));
              a.push([e, call2]);
            };
          }
          for (var d = {}, e = ["get_group"].concat(Array.prototype.slice.call(arguments, 0)), c = 0; c < j.length; c++) b(j[c]);
          return d;
        };
        b._i.push([e, f, c]);
      };
      b.__SV = 1.2;
      e = f.createElement("script");
      e.type = "text/javascript";
      e.async = !0;
      e.src =
        "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL
          ? MIXPANEL_CUSTOM_LIB_URL
          : "file:" === f.location.protocol && "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)
          ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"
          : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
      g = f.getElementsByTagName("script")[0];
      g.parentNode.insertBefore(e, g);
    }
  })(document, window.mixpanel || []);

  let token = config.mixPanel;
  // console.log(token);

  mixpanel.init(token, { debug: true });
  mixpanel.track("Apps launch");

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

  //----------------------------------------------------------------------------------------------------nav cross btn
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
    mixpanel.track("Toggle menu btn");
    // document.querySelector(".nav-menu").style.transition = "0.6s";
  });

  // ---------------------------------------------------------------------------------------------BackTop
  const backTop = document.querySelector("#backTop");
  addEventListener("scroll", function () {
    if (window.pageYOffset > 500) {
      backTop.style.opacity = "1";
    } else {
      backTop.style.opacity = "0";
    }
  });

  //--------------------------------------------------------------------------Progression bar with Waypoints.js cdn
  let waypoint = new Waypoint({
    element: document.getElementById("skills"),
    offset: "80%",
    handler: function (direction) {
      // console.log(direction);
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
  // console.log(waypoint);

  // -----------------------------------------------------------------------------------------------Portfolio with Isotope.js
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

  // ------------------------------------------------------------------------------------------Scroll setions active link
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

  //--------------------------------------------------------------------------------------------------Dark mode
  const darkModeBtn = document.getElementById("dark-mode-btn");
  const darkTheme = "dark-theme";
  const iconTheme = "fa-sun";

  // let currentIcon = () => (darkModeBtn.classList.contains(iconTheme) ? "fa-sun" : "fa-moon");
  let currentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
  // console.log(localStorage.getItem("theme"));
  // console.log(localStorage.getItem("icon"));
  // console.log(document.body.classList);
  // console.log(darkModeBtn);

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
    // console.log(darkModeBtn);
    mixpanel.track("Change Background mode");
  });

  // --------------------------------------------------------------------------------------------- trace user event

  const linkToGit = document.querySelectorAll("a.preview-link");
  const linkToWeb = document.querySelectorAll("a.details-link");
  const getDownPDF = document.querySelector(".download-div");
  const formSubmitBtn = document.querySelector(".submit-btn");
  // const errorPageBtn = document.querySelector(".p-container");

  // Click download pdf
  getDownPDF.children[0].addEventListener("click", function () {
    mixpanel.track("Download my PDF resume");
  });

  // Click Github link
  linkToGit.forEach((el) => {
    el.addEventListener("click", function (e) {
      if (el.parentNode.children[0].innerText === "Full React website") {
        mixpanel.track("Click Full React website Github");
      }
      if (el.parentNode.children[0].innerText === "Login and Signup page") {
        mixpanel.track("Click Login and Signup Github");
      }
      if (el.parentNode.children[0].innerText === "React with styled-component") {
        mixpanel.track("Click React with styled-component Github");
      }
      if (el.parentNode.children[0].innerText === "React form submit with validation") {
        mixpanel.track("Click React form submit with validation Github");
      }
      if (el.parentNode.children[0].innerText === "Fetch data from Pexels") {
        mixpanel.track("Click Fetch data from Pexels Github");
      }
    });
  });

  // Click Web link
  for (let i = 0; i < linkToWeb.length; i++) {
    linkToWeb[i].addEventListener("click", function () {
      // console.log(linkToWeb[i].closest(".portfolio-info > h4"));
      if (linkToWeb[i].parentNode.children[0].innerText === "Full React website") {
        mixpanel.track("Click Full React website");
      }
      if (linkToWeb[i].parentNode.children[0].innerText === "Login and Signup page") {
        mixpanel.track("Click Login and Signup page");
      }
      if (linkToWeb[i].parentNode.children[0].innerText === "React with styled-component") {
        mixpanel.track("Click React with styled-component page");
      }
      if (linkToWeb[i].parentNode.children[0].innerText === "React form submit with validation") {
        mixpanel.track("Click React form submit with validation page");
      }
      if (linkToWeb[i].parentNode.children[0].innerText === "Fetch data from Pexels") {
        mixpanel.track("Click Fetch data from Pexels page");
      }
    });
  }

  //Click submit form

  formSubmitBtn.children[0].addEventListener("click", function () {
    mixpanel.track("Submit my resume form");
  });

  // 404 page go for home
});
