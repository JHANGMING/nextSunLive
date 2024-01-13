import { globalIconSet } from '@/constants/globaIIcon'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const ScrollPageTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const scrollToTop = () => {
    if (typeof window === 'undefined') return
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const toggleVisibility = () => {
    if (typeof window === 'undefined') return
    const pageSet = window.pageYOffset > 300 ? true : false
    setIsVisible(pageSet)
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])
  const isVisibleClass = isVisible ? 'opacity-100' : 'opacity-0';
  return (
    <div className={`${isVisibleClass} fixed bottom-40 right-40 flex flex-col gap-8 items-center cursor-pointer shake z-30 transition-opacity duration-1000 ease-in-out`} onClick={scrollToTop}>
      <Image {...globalIconSet.logoImage} width={50} height={50} />
      <p className=" text-primary-red bg-primary-yellow w-35 py-2 rounded-8 text-12 text-center">Top</p>
    </div>
  )
}

export default ScrollPageTop
