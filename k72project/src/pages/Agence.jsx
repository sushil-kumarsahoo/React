import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
const Agence = () => {
gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

    const imageArray = [

      'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',

      'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',

      'https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007',

      'https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3',

      'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',

      'https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac',

      'https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac',

      'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
    ]

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        markers:true,
        start:'top 28%',
        end:'top -100%',
        pin:true,
        scrub:true,
        onUpdate:function(elem){
          const imageIndex = Math.round(elem.progress * (imageArray.length-1))
          
          imageRef.current.src = imageArray[imageIndex]
          
        }
      }
    })
  })

  return (
   <div>
    <div className='section1'>
    <div ref={imageDivRef} className=' absolute h-[20vw] w-[15vw] rounded-3xl top-40 left-[30vw] overflow-hidden '>
      <img ref={imageRef} className='h-full w-full object-cover' src="https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2" alt="" />
    </div>
    <div className=' relative font-[font2] '>
     <div className=' mt-[55vh]'>
      <h1 className='text-[18vw] uppercase leading-[18vw] text-white text-center '>SEVEN7Y
TWO</h1>
    </div>
    <div className='pl-[40%] mt-20'>
      <p className='text-6xl text-white  '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>

    </div>
   </div>
   </div>

   <div className="section2 h-screen">
       
   </div>
   </div>
  )
}

export default Agence
