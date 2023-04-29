import React, { useEffect } from 'react'

export default function Cover({cover_image, date_release}) {
    
    return (
        <div className='cover'>
            <div>
                <p>
                    <span>Instinct</span>— Released {date_release}
                </p>
            </div>
            <img src={cover_image} alt="The image cover of the album" />
        </div>
    )
}
