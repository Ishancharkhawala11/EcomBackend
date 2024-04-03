import React from 'react'
import "./NewsLetter.css"
const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>
            Get Exclusive Offers On Email
        </h1>
        <p>
            Subscribe To Our  Newsletter And Stay
        </p>
        <div>
            <input type='email' placeholder='Your Email Id'></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter