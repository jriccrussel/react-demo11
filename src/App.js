import { useEffect, useRef, useState } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import './App.scss'

export const images = [
  {
    id: 1,
    img: "https://www.micelistudios.com/sandbox/scrolltrigger/imgs/great_horned_owl.jpg"
  },
  {
    id: 2,
    img: "https://www.micelistudios.com/sandbox/scrolltrigger/imgs/burrrowing_owl_674x700.jpg"
  },
] 

export const svgs = [
  {
    id: 1,
    svg: "https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_blue_494x434.svg"
  },
  {
    id: 2,
    svg: "https://www.micelistudios.com/sandbox/scrolltrigger/imgs/triangle_448x446.svg"
  },
  {
    id: 3,
    svg: "https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_white_310x588.svg"
  },
]

function App() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // clusterGreat 
    let tlSplitGreat = gsap.timeline()

    let SplitGreat = document.querySelector(".title")
			SplitGreat.innerHTML = SplitGreat.textContent.replace( /\S/g, "<span class='letter'>$&</span>")

    tlSplitGreat.from(".letter", {
      duration: 0.8,
      opacity: 0,
      y:10,
      ease:"circ.out",
      stagger: 0.02,
    }, "+=0")

    gsap.set(".circle", { yPercent: -5})
    gsap.set(".dotsBlue", { yPercent: 10})
    gsap.set(".owlHorned", { yPercent: -20})
    gsap.set(".clusterGreat", { yPercent: 5})

    gsap.to(".circle",{
      yPercent: 5,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterGreat",
        scrub: 1
      }, 
    })

    gsap.to(".dotsBlue", {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterGreat",
        scrub: 1
      }, 
    })

    gsap.to(".owlHorned", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterGreat",
        scrub: 1
      }, 
    })

    gsap.to(".caption", {
      yPercent: 100,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterGreat",
        end: "bottom center",
        scrub: 1
      }, 
    })

    gsap.to(".clusterGreat", {
      yPercent: -5,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterGreat",
        end: "bottom center",
        scrub: 1
      }, 
    })


    // clusterBurrowing 
    let tlSplitBurrowing = gsap.timeline()

    let splitTxt = document.querySelector(".titleBurrowing")
			splitTxt.innerHTML = splitTxt.textContent.replace( /\S/g, "<span class='letter2'>$&</span>")

    tlSplitBurrowing.from(".letter2", {
      duration: 0.8,
      opacity:0,
      y:10,
      ease:"circ.out",
      stagger: 0.02,
      scrollTrigger: {
        trigger: ".titleBurrowing",
        start: "top 75%",
        end: "bottom center",
        scrub:1
      }
    }, "+=0")

    gsap.set(".triangle", { yPercent: 25})
    gsap.set(".dotsWhite", { yPercent: 10})
    gsap.set(".owlBurrowing", { yPercent: -20})
    gsap.set(".clusterBurrowing", { yPercent: 5})

    gsap.to(".triangle",{
      yPercent: -5,
      rotation: 40,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterBurrowing",
        scrub: 1
      }, 
    })

    gsap.to(".dotsWhite",{
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterBurrowing",
        scrub: 1
      }, 
    })

    gsap.to(".owlBurrowing",{
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterBurrowing",
        scrub: 1
      }, 
    })

    gsap.to(".captionBurrowing",{
      yPercent: 200,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterBurrowing",
        end: "bottom center",
        scrub: 1
      }, 
    })

    gsap.to(".clusterBurrowing",{
      yPercent: -5,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterBurrowing",
        end: "bottom center",
        scrub: 1
      }, 
    })
    
    
  }, [])

  return (
    <>
      <section>
        <div className="title titleGreathorned">
          {/* <span>The great horned owl</span> also known as the tiger owl or the hoot owl, is a large owl native to the Americas. */}
          <span className="white">The great horned owl</span> also known as the tiger owl or the hoot owl, is a large owl native to the Americas.
        </div>
      </section>

      <section className="cluster clusterGreat">
        <div className="circle clusterPieces"></div>

        <div className="owlHorned clusterPieces">
          <img src={images[0].img} />
          <div className="caption">
            <span>/01</span>
            GREAT HORNED OWL
          </div>
        </div>

        <img src={svgs[0].svg} className="dotsBlue clusterPieces" />
      </section>

      <section>
        <div className="title titleBurrowing">
          <span>The borrowing owl</span>
          is a small, long-legged owl found throughout open landscapes of North and South America.
        </div>
      </section>

      <section className="cluster clusterBurrowing">
        <img src={svgs[1].svg} className="triangle clusterPieces" />

        <div className="owlBurrowing clusterPieces">
          <img src={images[1].img} />
          <div className="caption captionBurrowing">
            <span>/02</span>
            BURROWING OWL
          </div>
        </div>

        <img src={svgs[2].svg} alt="" className="dotsWhite clusterPieces" />
      </section>

      <section className="spcr300"></section>
    </>
  )
}

export default App
