

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


/*  

a multiline comment

*/

// "text in quotes is a string of text and will not cause issues"
// make sure to name things with words that do not represent other things
// functions are basically nonexistant unless you call or access it


export function usingScroll(){
    console.log("this is working test123");

    const tl = gsap.timeline();

    tl.to("#text", {
            // duration: 6,
            x: "-=50",
            alpha: 1,
            stagger: 0.4,
            ease: "back",
            scrollTrigger: {
                trigger: "#content",
                toggleActions: "restart none resume none",
                scrub: true,
                markers: true
            }
        });

   return tl;

   


}
