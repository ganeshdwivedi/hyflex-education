import React from 'react'

const CustomHero = ({ className }) => {
    return (
        <div className={`${className} absolute`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="65" viewBox="0 0 62 65" fill="none">

                <circle cx="41.5486" cy="57.4647" r="5.15177" transform="rotate(-160.453 41.5486 57.4647)" fill="#ADBBF4" />
                <circle cx="5.11221" cy="41.3461" r="2.37922" transform="rotate(-160.453 5.11221 41.3461)" fill="#ADBBF4" />
            </svg></div>
    )
}

export default CustomHero