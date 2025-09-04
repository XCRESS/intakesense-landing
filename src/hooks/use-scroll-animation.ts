'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)

  const animateFrom = (elem: HTMLElement, direction = 1) => {
    const offset = 100
    let x = 0
    let y = direction * offset

    if (elem.classList.contains('animate-left')) {
      x = -offset
      y = 0
    } else if (elem.classList.contains('animate-right')) {
      x = offset
      y = 0
    }

    elem.style.transform = `translate(${x}px, ${y}px)`
    elem.style.opacity = '0'

    gsap.fromTo(
      elem,
      { x, y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: 'expo.out',
        overwrite: 'auto',
      }
    )
  }

  const hide = (elem: HTMLElement) => {
    gsap.set(elem, { autoAlpha: 0 })
  }

  useEffect(() => {
    if (!ref.current) return

    const elements = ref.current.querySelectorAll('.animate-on-scroll')
    
    elements.forEach((elem) => {
      const htmlElem = elem as HTMLElement
      hide(htmlElem)

      ScrollTrigger.create({
        trigger: htmlElem,
        start: 'top bottom-=100',
        onEnter: () => animateFrom(htmlElem),
        onEnterBack: () => animateFrom(htmlElem, -1),
        onLeave: () => hide(htmlElem),
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return ref
}
