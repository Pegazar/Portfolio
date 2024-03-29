import React from 'react'
import cv from "../assets/cv.pdf"

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">

        {/*Conatiner*/}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-pink-600">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] pb-2">Yusif Feyzullazade</h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Front End Developer</h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">I’m a front-end developer specializing in building (and occasionally
               designing) exceptional digital experiences. Currently, I’m focused on
               building responsive front-end web applications.
            </p>
            <div className="flex">
                <a href={cv} download className="cursor-pointer text-white group border-2 px-6 py-3 my-2
                hover:bg-pink-600 hover:border-pink-600">Download CV
                </a>
            </div>
            
        </div>
    </div>
  )
}

export default Home