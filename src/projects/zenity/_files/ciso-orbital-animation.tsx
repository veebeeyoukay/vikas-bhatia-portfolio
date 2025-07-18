import React from 'react';
import { Shield, Users, FileCheck, Server, Eye, Lock, AlertTriangle, Globe } from 'lucide-react';

const CISOOrbitalAnimation = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <svg 
        width="1080" 
        height="1406" 
        viewBox="0 0 1080 1406" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute bottom-[-780px] md:bottom-[-850px] xl:bottom-[-900px] max-md:left-1/2 max-md:-translate-x-1/2 md:right-[-15%] w-[500px] md:w-[min(60vw,1080px)] overflow-visible pointer-events-none"
      >
        <defs>
          <linearGradient id="securityTail" gradientUnits="userSpaceOnUse" x1="30" y1="0" x2="-30" y2="0">
            <stop offset="0%" stopColor="rgb(139, 92, 246)" />
            <stop offset="50%" stopColor="rgb(59, 130, 246)" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="securityTailReverse" gradientUnits="userSpaceOnUse" x1="-30" y1="0" x2="30" y2="0">
            <stop offset="0%" stopColor="rgb(139, 92, 246)" />
            <stop offset="50%" stopColor="rgb(59, 130, 246)" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
          </linearGradient>
          
          {/* Path Masks */}
          <mask id="pathMask1"><use href="#secPath1" stroke="white" strokeWidth="80" fill="none" /></mask>
          <mask id="pathMask2"><use href="#secPath2" stroke="white" strokeWidth="80" fill="none" /></mask>
          <mask id="pathMask3"><use href="#secPath3" stroke="white" strokeWidth="80" fill="none" /></mask>
          <mask id="pathMask4"><use href="#secPath4" stroke="white" strokeWidth="80" fill="none" /></mask>
          <mask id="pathMask5"><use href="#secPath5" stroke="white" strokeWidth="80" fill="none" /></mask>
          <mask id="pathMask6"><use href="#secPath6" stroke="white" strokeWidth="80" fill="none" /></mask>
        </defs>

        {/* Orbital Paths */}
        <g opacity="0.25">
          <path id="secPath1" d="M540,1078 A538,538 0 1,1 540,2 A538,538 0 1,1 540,1078" stroke="white" strokeWidth="2" strokeOpacity="0.5" strokeMiterlimit="10" />
          <path id="secPath2" d="M540,995 A455,455 0 1,1 540,85 A455,455 0 1,1 540,995" stroke="white" strokeWidth="2" strokeOpacity="0.5" strokeMiterlimit="10" />
          <path id="secPath3" d="M540,912 A372,372 0 1,1 540,168 A372,372 0 1,1 540,912" stroke="white" strokeWidth="2" strokeOpacity="0.5" strokeMiterlimit="10" />
          <path id="secPath4" d="M540,829 A289,289 0 1,1 540,251 A289,289 0 1,1 540,829" stroke="white" strokeWidth="2" strokeOpacity="0.5" strokeMiterlimit="10" />
          <path id="secPath5" d="M540,746 A206,206 0 1,1 540,334 A206,206 0 1,1 540,746" stroke="white" strokeWidth="2" strokeOpacity="0.5" strokeMiterlimit="10" />
          <path id="secPath6" d="M540,663 A123,123 0 1,1 540,417 A123,123 0 1,1 540,663" stroke="white" strokeWidth="2" strokeOpacity="0.5" strokeMiterlimit="10" />
        </g>

        {/* Security Shield - Outer Ring */}
        <g>
          <g mask="url(#pathMask1)" opacity="0">
            <animate attributeName="opacity" values="0;1" dur="0.3s" begin="0.2s" fill="freeze" />
            <circle r="150" fill="url(#securityTailReverse)" transform="translate(150, 0)" className="mix-blend-screen">
              <animate attributeName="opacity" values="0;1;1;0" dur="20s" begin="0s" repeatCount="indefinite" keyTimes="0;0.1;0.9;1" calcMode="spline" keySplines="0.5 0 0.5 1;0 0 0 0;0.5 0 0.5 1" />
              <animateMotion dur="20s" repeatCount="indefinite" begin="0s" keyPoints="1;0" keyTimes="0;1" calcMode="linear" rotate="auto">
                <mpath href="#secPath1" />
              </animateMotion>
            </circle>
          </g>
          <g opacity="0">
            <animate attributeName="opacity" values="0;1" dur="0.3s" fill="freeze" />
            <foreignObject x="-40" y="-40" width="80" height="80">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </foreignObject>
            <animateMotion dur="20s" repeatCount="indefinite" begin="0s" keyPoints="1;0" keyTimes="0;1" calcMode="linear" rotate="0">
              <mpath href="#secPath1" />
            </animateMotion>
          </g>
        </g>

        {/* Users/People - Second Ring */}
        <g>
          <g mask="url(#pathMask2)" opacity="0">
            <animate attributeName="opacity" values="0;1" dur="0.3s" begin="0.2s" fill="freeze" />
            <circle r="135" fill="url(#securityTail)" transform="translate(-135, 0)" className="mix-blend-screen">
              <animate attributeName="opacity" values="0;1;1;0" dur="18s" begin="-2s" repeatCount="indefinite" keyTimes="0;0.1;0.9;1" calcMode="spline" keySplines="0.5 0 0.5 1;0 0 0 0;0.5 0 0.5 1" />
              <animateMotion dur="18s" repeatCount="indefinite" begin="-2s" keyPoints="0;1" keyTimes="0;1" calcMode="linear" rotate="auto">
                <mpath href="#secPath2" />
              </animateMotion>
            </circle>
          </g>
          <g opacity="0">
            <animate attributeName="opacity" values="0;1" dur="0.3s" fill="freeze" />
            <foreignObject x="-40" y="-40" width="80" height="80">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
            </foreignObject>
            <animateMotion dur="18s" repeatCount="indefinite" begin="-2s" keyPoints="0;1" keyTimes="0;1" calcMode="linear" rotate="0">
              <mpath href="#secPath2" />
            </animateMotion>
          </g>
        </g>

        {/* Compliance/Regulations - Third Ring */}
        <g>
          <g mask="url(#pathMask3)" opacity="0">
            <animate attributeName="opacity" values="0;1" dur="0.3s" begin="0.2s" fill="freeze" />
            <circle r="120" fill="url(#securityTailReverse)" transform="translate(120, 0)" className="mix-blend-screen">
              <animate attributeName="opacity" values="0;1;1;0" dur="22s" begin="-4s" repeatCount="indefinite" keyTimes="0;0.1;0.9;1" calcMode="spline" keySplines="0.5 0 0.5 1;0 0 0 0;0.5 0 0.5 1" />
              <animateMotion dur="22s" repeatCount="indefinite" begin="-4s" keyPoints="1;0" keyTimes="0;1" calcMode="linear" rotate="auto">
                <mpath href="#secPath3" />
              </animateMotion>
            </circle>
          </g>
          <g opacity="0">
            <animate attributeName="opacity" values="0;1" dur="0.3s" fill="freeze" />
            <foreignObject x="-40" y="-40" width="80" height="80">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
            </foreignObject>
            <animateMotion dur="22s" repeatCount="indefinite" begin="-4s" keyPoints="1;0" keyTimes="0;1" calcMode="linear" rotate="0">
              <mpath href="#secPath3" />
            </animateMotion>
          </g>
        </g>

        {/* Technology/Infrastructure - Fourth Ring */}
        <g>
          <g mask="url(#pathMask4)" opacity="0">
            <animate attributeName="opacity" values="0;1" dur="0.3s" begin="0.2s" fill="freeze" />
            <circle r="105" fill="url(#securityTail)" transform="translate(-105, 0)" className="mix-blend-screen">
              <animate attributeName="opacity" values="0;1;1;0" dur="16s" begin="-6s" repeatCount="indefinite" keyTimes="0;0.1;0.9;1" calcMode="spline" keySplines="0.5 0 0.5 1;0 0 0 0;0.5 0 0.5 1" />
              <animateMotion dur="16s" repeatCount="indefinite" begin="-6s" keyPoints="0;1" keyTimes="0;1" calcMode="linear" rotate="auto">
                <mpath href="#secPath4" />
              </animateMotion>
            </circle>
          </g>
          <g opacity="0">
            <animate attributeName="opacity" values="0;1" dur="0.3s" fill="freeze" />
            <foreignObject x="-40" y="-40" width="80" height="80">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <Server className="w-8 h-8 text-white" />
              </div>
            </foreignObject>
            <animateMotion dur="16s" repeatCount="indefinite" begin="-6s" keyPoints="0;1" keyTimes="0;1" calcMode="linear" rotate="0">
              <mpath href="#secPath4" />
            </animateMotion>
          </g>
        </g>

        {/* Threat Detection - Fifth Ring */}
        <g>
          <g mask="url(#pathMask5)" opacity="0">
            <animate attributeName="opacity" values="0;1" dur="0.3s" begin="0.2s" fill="freeze" />
            <circle r="90" fill="url(#securityTailReverse)" transform="translate(90, 0)" className="mix-blend-screen">
              <animate attributeName="opacity" values="0;1;1;0" dur="24s" begin="-8s" repeatCount="indefinite" keyTimes="0;0.1;0.9;1" calcMode="spline" keySplines="0.5 0 0.5 1;0 0 0 0;0.5 0 0.5 1" />
              <animateMotion dur="24s" repeatCount="indefinite" begin="-8s" keyPoints="1;0" keyTimes="0;1" calcMode="linear" rotate="auto">
                <mpath href="#secPath5" />
              </animateMotion>
            </circle>
          </g>
          <g opacity="0">
            <animate attributeName="opacity" values="0;1" dur="0.3s" fill="freeze" />
            <foreignObject x="-40" y="-40" width="80" height="80">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
            </foreignObject>
            <animateMotion dur="24s" repeatCount="indefinite" begin="-8s" keyPoints="1;0" keyTimes="0;1" calcMode="linear" rotate="0">
              <mpath href="#secPath5" />
            </animateMotion>
          </g>
        </g>

        {/* Data Protection - Inner Ring */}
        <g>
          <g mask="url(#pathMask6)" opacity="0">
            <animate attributeName="opacity" values="0;1" dur="0.3s" begin="0.2s" fill="freeze" />
            <circle r="75" fill="url(#securityTail)" transform="translate(-75, 0)" className="mix-blend-screen">
              <animate attributeName="opacity" values="0;1;1;0" dur="14s" begin="-10s" repeatCount="indefinite" keyTimes="0;0.1;0.9;1" calcMode="spline" keySplines="0.5 0 0.5 1;0 0 0 0;0.5 0 0.5 1" />
              <animateMotion dur="14s" repeatCount="indefinite" begin="-10s" keyPoints="0;1" keyTimes="0;1" calcMode="linear" rotate="auto">
                <mpath href="#secPath6" />
              </animateMotion>
            </circle>
          </g>
          <g opacity="0">
            <animate attributeName="opacity" values="0;1" dur="0.3s" fill="freeze" />
            <foreignObject x="-40" y="-40" width="80" height="80">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <Lock className="w-8 h-8 text-white" />
              </div>
            </foreignObject>
            <animateMotion dur="14s" repeatCount="indefinite" begin="-10s" keyPoints="0;1" keyTimes="0;1" calcMode="linear" rotate="0">
              <mpath href="#secPath6" />
            </animateMotion>
          </g>
        </g>

        {/* Additional Security Elements */}
        <g>
          <g mask="url(#pathMask4)" opacity="0">
            <animate attributeName="opacity" values="0;1" dur="0.3s" begin="0.2s" fill="freeze" />
            <circle r="105" fill="url(#securityTailReverse)" transform="translate(105, 0)" className="mix-blend-screen">
              <animate attributeName="opacity" values="0;1;1;0" dur="19s" begin="-12s" repeatCount="indefinite" keyTimes="0;0.1;0.9;1" calcMode="spline" keySplines="0.5 0 0.5 1;0 0 0 0;0.5 0 0.5 1" />
              <animateMotion dur="19s" repeatCount="indefinite" begin="-12s" keyPoints="1;0" keyTimes="0;1" calcMode="linear" rotate="auto">
                <mpath href="#secPath4" />
              </animateMotion>
            </circle>
          </g>
          <g opacity="0">
            <animate attributeName="opacity" values="0;1" dur="0.3s" fill="freeze" />
            <foreignObject x="-40" y="-40" width="80" height="80">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
            </foreignObject>
            <animateMotion dur="19s" repeatCount="indefinite" begin="-12s" keyPoints="1;0" keyTimes="0;1" calcMode="linear" rotate="0">
              <mpath href="#secPath4" />
            </animateMotion>
          </g>
        </g>

        {/* Global Security */}
        <g>
          <g mask="url(#pathMask3)" opacity="0">
            <animate attributeName="opacity" values="0;1" dur="0.3s" begin="0.2s" fill="freeze" />
            <circle r="120" fill="url(#securityTail)" transform="translate(-120, 0)" className="mix-blend-screen">
              <animate attributeName="opacity" values="0;1;1;0" dur="21s" begin="-14s" repeatCount="indefinite" keyTimes="0;0.1;0.9;1" calcMode="spline" keySplines="0.5 0 0.5 1;0 0 0 0;0.5 0 0.5 1" />
              <animateMotion dur="21s" repeatCount="indefinite" begin="-14s" keyPoints="0;1" keyTimes="0;1" calcMode="linear" rotate="auto">
                <mpath href="#secPath3" />
              </animateMotion>
            </circle>
          </g>
          <g opacity="0">
            <animate attributeName="opacity" values="0;1" dur="0.3s" fill="freeze" />
            <foreignObject x="-40" y="-40" width="80" height="80">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </foreignObject>
            <animateMotion dur="21s" repeatCount="indefinite" begin="-14s" keyPoints="0;1" keyTimes="0;1" calcMode="linear" rotate="0">
              <mpath href="#secPath3" />
            </animateMotion>
          </g>
        </g>
      </svg>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Security Orchestration
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
          Protecting your technology, people, and data with comprehensive security solutions
        </p>
      </div>
    </div>
  );
};

export default CISOOrbitalAnimation;