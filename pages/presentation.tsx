import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Presentation() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        (videoRef.current as HTMLVideoElement).pause();
      } else {
        (videoRef.current as HTMLVideoElement).play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-20">
      <Head>
        <title>Video Presentation | PC Portfolio</title>
        <meta name="description" content="Video presentation showcase" />
      </Head>

      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Project Showcase
        </h1>

        <div 
          className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl bg-gray-800"
        >
          {/* Video Container */}
          <div className="relative aspect-video">
            <video 
              ref={videoRef}
              className="w-full h-full object-cover" 
              src="/0323.mp4" 
              onClick={togglePlay}
              poster="/video-thumbnail.jpg"
              controls
            />
            
            {/* Play/Pause Button Overlay */}
            <button 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition-all"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Progress Bar
          <div className="h-1 bg-gray-700">
            <div 
              className="h-full bg-indigo-600 transition-all duration-100" 
              style={{ width: `${progress}%` }}
            />
          </div> */}
          
          {/* Video Description */}
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Project Overview</h2>
            <p className="text-gray-300 mb-4">
              This video demonstrates the key features and functionality of my latest project.
              Watch the full presentation to see the application in action.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-indigo-900/60 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-indigo-900/60 rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-indigo-900/60 rounded-full text-sm">TailwindCSS</span>
              <span className="px-3 py-1 bg-indigo-900/60 rounded-full text-sm">TypeScript</span>
            </div>
            
            <div className="flex justify-between items-center mt-6">
              {/* <button 
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors"
                onClick={togglePlay}
              >
                {isPlaying ? 'Pause Video' : 'Play Video'}
              </button> */}
              
              <a 
                href="https://github.com/PiyushChauhan3/Piyush_Chuahan" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                View Project Details →
              </a>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
}