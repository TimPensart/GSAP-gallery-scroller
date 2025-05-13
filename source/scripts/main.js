import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(ScrollTrigger, GSDevTools, MotionPathPlugin);

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

gsap.to(slides, {
    immediateRender: true,
    ease: CustomEase.create("custom", "M0,0 C0.895,0.699 0.104,0.297 1,1 "),
    stagger: {
        each: 0.07,
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
        trigger: ".gallery-slider",
        scrub: 1.2,
        start: "top center",
        end: "bottom bottom",
        markers: true,
        pinSpacing: false,
        ease: "none",
    },
});
