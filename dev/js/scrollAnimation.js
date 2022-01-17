

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

    tl.fromTo("#text",
    
    { 
        alpha: 0
    },
    
    
    {
            // duration: 6,
            x: "-=20",
            alpha: 1,
   
            scrollTrigger: {
                trigger: "#content",
                start: "top 30%",
                end: "bottom 60%",
                toggleActions: "reverse none none restart",
                scrub: true
            }
        });


        tl.fromTo("#boxes-grid",
    
        { 
            alpha: 0
        },
        
        
        {
                // duration: 6,
                alpha: 1,
       
                scrollTrigger: {
                    trigger: "#content",
                    start: "top 60%",
                    end: "bottom 90%",
                    toggleActions: "reverse none none restart",
                    scrub: true
                }
            });

        

        tl.fromTo("#imagec",
    
    { 
        alpha: 0
    },
    
    
    {
            // duration: 6,
            x: "-=20",
            alpha: 1,
   
            scrollTrigger: {
                trigger: "#content",
                start: "top 60%",
                end: "bottom 80%",
                toggleActions: "reverse none none restart",
                scrub: true
            }
        });


    // tl.from("#text", {
    //     duration: 6,
    //    scaleX:0,
    //    scrollTrigger: {
    //                 trigger: "#content",
    //                 start: "top 60%",
    //                 end: "bottom 80%",
    //                 toggleActions: "restart none resume none",
    //                 scrub: true,
    //                 markers: true
    //             }


    
    // });

   return tl;

   


}
