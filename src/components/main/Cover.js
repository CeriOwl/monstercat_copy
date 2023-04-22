import React from 'react'
import CoverAlbum from "../../assests/cover.png"

export default function Cover() {
    return (
        <div className='cover'>
            <div>
                <p>
                    <span>Instinct</span>— Released May 22, 2020
                </p>
            </div>
            <img src={CoverAlbum} alt="" />
        </div>
    )
}
