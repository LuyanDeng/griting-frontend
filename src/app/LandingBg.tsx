'use client'
import { useState, useEffect } from 'react'
import LandingCotonCandy from '@/modules/GradientBgs'

const LandingBg: React.FC = () => {
  const [showCanvas, setShowCanvas] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCanvas(true)
    }, 800)

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <LandingCotonCandy hidden={!showCanvas} />
    </>
  )
}

export default LandingBg
