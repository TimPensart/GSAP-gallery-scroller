import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, ScrollSmoother, CustomEase);

const smoother = ScrollSmoother.create({
    smooth: 1,
    effects: true,
});

const gallerySliderWrapper = document.getElementById("slider-wrapper");

// Create 9 gallery slide elements
let slides = [];
for (let i = 0; i < 7; i++) {
    const slide = document.createElement("div");
    slide.className = "slide";
    gallerySliderWrapper.appendChild(slide);
    slides.push(slide);
    // Add a random Pokemon image to each slide
    const pokemonId = Math.floor(Math.random() * 898) + 1; // Pokemon API has 898 Pokemon
    const pokemonImg = document.createElement("img");
    pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
    pokemonImg.alt = `Pokemon ${pokemonId}`;
    pokemonImg.style.width = "100%";
    pokemonImg.style.height = "auto";
    pokemonImg.style.objectFit = "contain";
    pokemonImg.style.marginBottom = "10px";
    slide.prepend(pokemonImg);
}

// add animations and labels to the timeline
const responsiveStagger = window.innerWidth < 1024 ? 0.125 : 0.075;

console.log(responsiveStagger);

gsap.to(slides, {
    immediateRender: true,
    ease: CustomEase.create("custom", "M0,0 C0.792,0.5 0.21,0.498 1,1 "),
    stagger: {
        each: responsiveStagger,
        ease: "none",
    },
    motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 1],
        autoRotate: 180,
        ease: "none",
    },
    scrollTrigger: {
        fastScrollEnd: true,
        pin: "#slider-wrapper",
        pinSpacing: false,
        trigger: ".gallery-slider",
        scrub: 1.2,
        start: "top center",
        end: "bottom bottom",
    },
});
