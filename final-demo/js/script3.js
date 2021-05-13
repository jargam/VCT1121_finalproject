gsap.registerPlugin(GSDevTools, SplitText, TextPlugin, ScrollTrigger);
//text plugin
gsap.to("p#one", {
  //   text: {
  //       value: "typewriter effect with GSAP 3",
  //       delimiter: " "
  //     },
  text: "St. Cloud, Minnesota",

  ease: "power1.in",
  duration: 2,
  repeat: -1,
  yoyo: true,
  repeatDelay: 0.4,
});
//split text letters
let split1;
let animation1 = gsap.timeline({
  id: "animation1",
  repeat: 10,
  yoyo: true,
  repeatDelay: 0.3,
});

function init1() {
  gsap.set(".wrapper2", { autoAlpha: 1 });
  split1 = new SplitText("html", { type: "chars" });
  animation1.from(split1.chars, {
    opacity: 0,
    y: 10,
    ease: "back(4)",
    stagger: .05,
    scrollTrigger: {
      trigger: ".wrapper2",
      // markers: true,
      start: "top 10%",
      end: "bottom 10%",
      scrub: true,
      pin: true,
    },
  });
  GSDevTools.create({ animation1: "animation1" });
}

window.addEventListener("load", init1);

//more 
let tl2 = gsap.timeline();
tl2.from('.sect3', {
    // tl2.from(sect3, {
    // duration: 1,
    autoAlpha: 0,
    x: 3500,
    stagger: 0.2,
    ease: "linear",
    scrollTrigger: {
        trigger: '.sect3',
        // markers: true,
        // markers: {
        //     startColor: "purple",
        //     endColor: "fuchsia",
        //     fontSize: "1em",
        //     indent: 100,
        // },
         start: "top center",//first value is start, second value is scroller-start, same for end
         start: "top 90%",
        // end: "bottom 90%",
        // end: () => `+=${document.querySelector('.sect3').offsetHeight}`,
        // end: "top 40%",
        //  pin: true,
        // toggleActions: "play none reverse reset"
        // toggleActions: "play reverse none none"
        // events: onEnter onLeave onEnterBack onLeaveBack
        // toggleActions: "play none reverse reset",//working well
        // toggleActions: "restart pause reverse reset",
         scrub: true,
        // toggleClass: "red"
    }
})
