import React from 'react'

const HeroVideoSVG = ({ className }) => {
    return (
        <div className={`${className} absolute`}><svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 427318225">
                <g id="Ellipse 346" filter="url(#filter0_b_130_701)">
                    <circle cx="42.2085" cy="42.7654" r="41.835" fill="url(#paint0_linear_130_701)" />
                    <circle cx="42.2085" cy="42.7654" r="40.835" stroke="url(#paint1_linear_130_701)" stroke-width="2" />
                </g>
                <g id="&#240;&#159;&#166;&#134; icon &#34;play circle filled&#34;">
                    <path id="Vector" d="M42.2085 27.1169C33.5706 27.1169 26.5602 34.1274 26.5602 42.7653C26.5602 51.4032 33.5706 58.4137 42.2085 58.4137C50.8464 58.4137 57.8569 51.4032 57.8569 42.7653C57.8569 34.1274 50.8464 27.1169 42.2085 27.1169ZM39.0789 48.2422V37.2884C39.0789 36.6468 39.8143 36.2712 40.3307 36.6624L47.6385 42.1394C48.061 42.4523 48.061 43.0783 47.6385 43.3912L40.3307 48.8682C39.8143 49.2594 39.0789 48.8838 39.0789 48.2422Z" fill="#F80000" />
                </g>
            </g>
            <defs>
                <filter id="filter0_b_130_701" x="-25.4265" y="-24.8696" width="135.27" height="135.27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.9" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_130_701" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_130_701" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_130_701" x1="12.555" y1="25.9389" x2="57.4565" y2="84.6003" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" stop-opacity="0.4" />
                    <stop offset="1" stop-color="white" stop-opacity="0.1" />
                </linearGradient>
                <linearGradient id="paint1_linear_130_701" x1="4.58862" y1="8.55765" x2="42.2085" y2="84.6003" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
        </div>
    )
}

export default HeroVideoSVG