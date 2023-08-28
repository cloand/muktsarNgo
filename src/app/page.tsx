"use client"

import Banner from '@/components/layout/Banner'
import ImageGallery from '@/components/layout/ImageGallery'
import Register from '@/components/layout/Register'
import VideoGallery from '@/components/layout/VideoGallery'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [currentRef, setCurrentRef] = useState(0)
  const itemsRef = useRef([]);

  useEffect(() => {
    console.log(currentRef,'reffereer')
  },[currentRef])

  return (
    <>
      <Banner />
      <Register />
      {/* <VideoGallery videosOne={[
        '/mp4/one.mp4',
        '/mp4/two.mp4',
        '/mp4/three.mp4',
        '/mp4/four.mp4',
        '/mp4/five.mp4',
      ]}
      videosTwo={[
        '/mp4/six.mp4',
        '/mp4/seven.mp4',
        '/mp4/eight.mp4',
        '/mp4/nine.mp4',
        '/mp4/ten.mp4'
      ]}
      /> */}
      <ImageGallery url={[
        '/jpg/one.jpg',
        '/jpg/two.jpg',
        '/jpg/three.jpg',
        '/jpg/four.jpg',
        '/jpg/five.jpg',
        '/jpg/six.jpg',
        '/jpg/seven.jpg',
        '/jpg/eight.jpg',
        '/jpg/nine.jpg',
        '/jpg/ten.jpg',
        '/jpg/eleven.jpg',
        '/jpg/twelve.jpg',
        '/jpg/thirteen.jpg',
        '/jpg/fourteen.jpg',
        '/jpg/fifteen.jpg',
        '/jpg/sixteen.jpg',
        '/jpg/seventeen.jpg',
        '/jpg/eighteen.jpg',
        '/jpg/nineteen.jpg',
        '/jpg/twenty.jpg'
      ]}/>
    </>
  )
}