gsap.registerPlugin(GSDevTools, SplitText, TextPlugin, ScrollTrigger);
//text plugin
gsap.to("p#one", {
  //   text: {
  //       value: "typewriter effect with GSAP 3",
  //       delimiter: " "
  //     },
  text: "Welcome To J&G Railways!",
color: "white",
fontSize: 30,
  ease: "power35.in",
  duration: 1,
  repeat: -1,
  yoyo: true,
  repeatDelay: .5
});
//split text letters
let split1;
let animation1 = gsap.timeline({
  id: "animation1",
  repeat: 10,
  yoyo: true,
  repeatDelay: 0.3,
});

// function init1() {
//   gsap.set(".wrapper2", { autoAlpha: 1 });
//   split1 = new SplitText("h1", { type: "chars" });
//   animation1.from(split1.chars, {
//     opacity: 0,
//     y: 50,
//     ease: "back(4)",
//     stagger: 0.05,
//     scrollTrigger: {
//       trigger: ".wrapper2",
//       // markers: true,
//       start: "top 10%",
//       end: "bottom 40%",
//       scrub: true,
//       pin: true,
//     },
//   });
//   GSDevTools.create({ animation1: "animation1" });
// }

// window.addEventListener("load", init1);

// //split text words
// let split2;
// let animation2 = gsap.timeline({ id: "animation2" });

// function init2() {
//   split2 = new SplitText("h1", { type: "words" });
//   gsap.set(".wrapper3", { autoAlpha: 1 });
//   animation2.from(split2.words, {
//     duration: 4,
//     opacity: 0,
//     rotation: -40,
//     scale: 0.4,
//     stagger: 0.4,
//     ease: "back",
//     // repeat: -1,
//     scrollTrigger: {
//       trigger: ".wrapper2",
//       // markers: true,
//       start: "top 10%",
//       end: "bottom 40%",
//       scrub: 1,
//       pin: true,
//       // pinSpacing: false
//     }
//   });
//   GSDevTools.create({ animation2: "animation2" });
// }

// window.addEventListener("load", function (event) {
//   init2(); //do stuff
// });

// //split text line

// // let split3;
// // let animation3 = gsap.timeline({
// //   id: "animation3",
// //   // repeat: 10,
// //   repeatDelay: 1,
// // });

// function init3() {
//   split3 = new SplitText("p#two", { type: "lines" });
//   gsap.set(".wrapper4", { autoAlpha: 1 });
//   animation3.from(split3.lines, {
//     opacity: 0,
//     rotationX: -90,
//     rotationY: -80,
//     stagger: 0.2,
//     transformOrigin: "50% 50% -200",
//     scrollTrigger: {
//       trigger: ".wrapper4",
//       markers: true,
//       start: "top 20%",
//       end: "bottom 100%",
//       scrub: true,
//       // pin: true
//     }
//   });
//   GSDevTools.create({ animation3: "animation3" });
// }

// window.addEventListener("load", init3);

// //Scroll Trigger

// gsap.to("#b", {
//   y: 100,
//   duration: 3,
//   scale: 3,
//   backgroundColor: "#fff",
//   scrollTrigger: { trigger: "#a", marker: true },
// });

// //more 
// let tl2 = gsap.timeline();
// tl2.from('.sect3', {
//     // tl2.from(sect3, {
//     // duration: 1,
//     autoAlpha: 0,
//     x: 100,
//     stagger: 0.2,
//     ease: "linear",
//     scrollTrigger: {
//         trigger: '.sect3',
//         // markers: true,
//         markers: {
//             startColor: "purple",
//             endColor: "fuchsia",
//             fontSize: "1em",
//             indent: 100,
//         },
//          start: "top center",//first value is start, second value is scroller-start, same for end
//          start: "top 60%",
//         // end: "bottom 90%",
//         // end: () => `+=${document.querySelector('.sect3').offsetHeight}`,
//         // end: "top 40%",
//         //  pin: true,
//         // toggleActions: "play none reverse reset"
//         // toggleActions: "play reverse none none"
//         // events: onEnter onLeave onEnterBack onLeaveBack
//         // toggleActions: "play none reverse reset",//working well
//         // toggleActions: "restart pause reverse reset",
//          scrub: true,
//         // toggleClass: "red"
//     }
// })
