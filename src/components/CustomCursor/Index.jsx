import {useEffect, useRef } from 'react'
import './style.css'
const Index = () => {
  const cursorRef = useRef(null);

  useEffect(()=>{
    const mouseTransformer = (e5)=>{
      console.log('ds')
      const {clientX, clientY} = e5;
      const mouseX = clientX - cursorRef.current.clientWidth/2;
      const mouseY = clientY - cursorRef.current.clientHeight/2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    }
    document.addEventListener('mousemove', (event)=>{
      console.log('ds')
      const {clientX, clientY} = event;
      const mouseX = clientX - cursorRef.current.clientWidth)/2;
      const mouseY = clientY - (cursorRef.current.clientHeight/2);
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    })
  
  }, [])
  return (
    <div ref={cursorRef} className='custom-cursor' />
  )
}

export default Index