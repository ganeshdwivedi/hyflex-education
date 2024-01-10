import React from 'react'

const Custom = ({ className }) => {
    return (
        <div className={`${className} absolute`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 62 65" fill="none">
                <circle cx="37.3888" cy="19.9905" r="11.3066" transform="rotate(-160.453 37.3888 19.9905)" fill="#7077E4" />
            </svg>
        </div>
    )
}

export default Custom

/* <CustomHero className={`lg:-right-10 z-0 3xl:-right-36 right-20 -top-20 lg:top-0 absolute`} /> */