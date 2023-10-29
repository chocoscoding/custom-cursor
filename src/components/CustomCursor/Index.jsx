import {useEffect, useRef } from 'react'
import './style.css'
const Index = () => {
  const cursorRef = useRef(null);

  useEffect(()=>{
    const mouseTransformer = (event)=>{
      const {clientX, clientY} = event;
      const mouseX = clientX - (cursorRef.current.clientWidth/2);
      const mouseY = clientY - (cursorRef.current.clientHeight/2);
      cursorRef.current.style.left = `${mouseX}px`
      cursorRef.current.style.top = `${mouseY}px`
    }
    document.addEventListener('mousemove', mouseTransformer)

    return ()=> document.removeEventListener('mousemove', mouseTransformer)
  
  }, [])
  return (
    <div ref={cursorRef} className='custom-cursor' />
  )
}

export default Index