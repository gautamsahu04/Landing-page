
Shery.mouseFollower();

Shery.makeMagnet(".magnet");


Shery.hoverWithMediaCircle(".hvr", {
  videos: ["https://videos.pexels.com/video-files/3059865/3059865-hd_1920_1080_25fps.mp4", "https://videos.pexels.com/video-files/3926624/3926624-hd_1920_1080_25fps.mp4", "https://videos.pexels.com/video-files/3191572/3191572-uhd_2560_1440_25fps.mp4"
  ]
});



gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});
