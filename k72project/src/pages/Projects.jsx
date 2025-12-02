import React from 'react'
import ProjectCrd from '../components/projects/ProjectCrd'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Projects = () => {

  const project = [
    {
      image1: "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b",

      image2:"https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f"
    },

    {
      imge1: 'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda',
      image2:'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022'
    },

    {
      image1:'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996',
      image2:'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c'
    },

    {
      image1:"https://k72.ca/images/caseStudies/OSM/thumbnailimage_OSM.jpg?w=1280&h=960&s=7a3a71e610146472e6439cc8c765fccd",
      image2:"https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757"
    }

  ]

  gsap.registerPlugin(ScrollTrigger)   

  useGSAP(function(){
    gsap.from('.hero',{
      height:0,
      stagger:{
       amount:0.4
      },
      scrollTrigger:{
        trigger:'.lol',
        markers:true,
        start:'top 100%',
        end:'top -150%',
        scrub:true
      }
    })
  })


  return (
    <div className='p-4 bg-white'>
      <div className=' pt-[40vh]'>
      <h2 className='font-[font2] text-[12vw] uppercase text-black'>Projects</h2>
    </div>
    <div className='-mt-17 lol'>
       {project.map(function(elem,idx){
        return <div key={idx} className="hero flex gap-4 mb-4 w-full h-[600px]">
         <ProjectCrd image1={elem.image1} image2={elem.image2}/>
         </div>
       })}
    </div>
    </div>
  )
}

export default Projects
