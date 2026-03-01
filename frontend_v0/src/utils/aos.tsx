'use client'

import { useEffect, type ReactNode } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface AoscompoProps {
  children: ReactNode
}

const Aoscompo = ({ children }: AoscompoProps) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return <>{children}</>
}

export default Aoscompo