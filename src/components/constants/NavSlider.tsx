import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const NavSlider = ({ children}:{ children: ReactNode, props?: any}) => {
    const [chevAppear, setChevApp] = useState<any>({left: false, right: false})
    const [winObje, setWindow] = useState({})
    const sliderRef = useRef(null)
    const curRef: any = sliderRef.current


    // console.log(children);
    const handleSliderScroll = (e: any)=> {
        const slider: any = sliderRef.current
        const scrollWidth = slider.scrollLeft+slider.offsetWidth
        const isLeft = slider.scrollLeft>2
        const isRight = scrollWidth+ 15<= slider.scrollWidth        
        
        if(isLeft){
          if (isRight && isRight) {
            setChevApp({right: true, left: true})
          }else{
            setChevApp({right: false, left: true})
          }
        }else{
          setChevApp({right: true, left: false})
        }
    }

    const handleLeftChevClick = ()=> {
      const slider: any = sliderRef.current
      slider.scrollLeft -= 200;

    }
    const handleRightChevClick = ()=> {
      const slider: any = sliderRef.current
      slider.scrollLeft += 200;

    }

    useEffect(()=>{
        if(typeof window !== undefined) setWindow(window)
        const slider: any = sliderRef.current
        if(slider.scrollWidth>slider.offsetWidth) setChevApp({left: false, right: true})
        
    },[winObje])   

  return (
        <div className='relative px-3 overflow-hidden w-full' >
            {chevAppear.right && <BiChevronRight onClick={handleRightChevClick} 
            className='absolute text-3xl right-[-0.3em] cursor-pointer top-1/2 -translate-y-1/2 ' />}
            {chevAppear.left && <BiChevronLeft onClick={handleLeftChevClick}
          className='absolute text-3xl left-[-0.3em] cursor-pointer top-1/2 -translate-y-1/2 ' />}
            <div ref={sliderRef} onScroll={handleSliderScroll} 
                className='w-full relative flex overflow-x-auto hslider'>
                {children}
            </div>
        </div>
  )
}

export default NavSlider