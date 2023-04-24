import React from 'react'
import Link from './Link'
import Button from '../main/Button'

const Links = {
    first_links: [
        "about monstercat",
        "contact us",
        "careers",
        "news",
        "press"
    ],
    second_links: [
        "terms of service",
        "privacy policy"
    ]
}

export default function FirstPart() {
    return (
        <div className='first-part'>
            <hr />
            <div className="container-links-footer">
                <nav>
                    {
                        Links.first_links.map(link => <Link name={link} />)
                    }
                </nav>
                <nav>
                    {
                        Links.second_links.map(link => <Link name={link} />)
                    }
                </nav>
                <div>
                    <h3>monstercat news</h3>
                    <p>Don't miss a thing, stay up to date with the latest news from us.</p>
                    <form action="">
                        <input type="email" name="email" id="email" placeholder='Enter email' />
                        <Button icon_name="right-arrow-alt"/>
                    </form>
                </div>
            </div>
            <hr />
        </div>
    )
}
