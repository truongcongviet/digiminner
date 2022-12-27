import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function useScrollToHomeSection () {
  const router = useRouter();

  const isHomePage = router.route === "/";
  const scrollToFAQ = () => {
    const idSelector = "#home-faq"
    if(!isHomePage){
      return router.push(`/${idSelector}`)
    }
    else{
      gsap.to(window, {
        duration: 1,
        ease: "power2.out",
        scrollTo: {
          y: idSelector,
        },
        onComplete: () => router.push(`/${idSelector}`) as any
    });
  }
    
  }

  const scrollToAbout = () => {
    const idSelector =  "#home-about";
    if(!isHomePage){
      return router.push(`/${idSelector}`)
    }
    else{
      gsap.to(window, {
        duration: 1,
        ease: "power2.out",
        scrollTo: {
          y: idSelector,
          offsetY: 0
        },
        onComplete: () => router.push(`/${idSelector}`) as any
      });
    }
  }

  const scrollToHIW = () => {
    const idSelector = "#home-hiw";
    if(!isHomePage){
      return router.push(`/${idSelector}`)
    }
    else{
      gsap.to(window, {
        duration: 1,
        ease: "power2.out",
        scrollTo: {
          y: idSelector,
          offsetY: 0
        },
        onComplete: () => router.push(`/${idSelector}`) as any
      });
    }
  }
  return {scrollToFAQ, scrollToAbout, scrollToHIW}
}
