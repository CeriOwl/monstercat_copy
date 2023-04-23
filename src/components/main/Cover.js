import React from 'react'
import CoverAlbum from "../../assests/cover.png"

export default function Cover() {
    return (
        <div className='cover'>
            <div>
                <p>
                    <span>Instinct</span>— Released March 31, 2023
                </p>
            </div>
            <img src={CoverAlbum} alt=" idk a text equisde" />
        </div>
    )
}
