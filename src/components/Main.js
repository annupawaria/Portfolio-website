import React from 'react'
import logo from '../pic/logo.jpg'

const Main = () => {
  return (
    <div className='center'>
       <div className="left1">
<p>I am <br className='break'>Sunil</br>, an experienced advocate with a strong background in legal practice. I specialize in providing comprehensive legal services, including litigation, contract negotiations, and advisory support. My commitment is to uphold justice and advocate for my clients' rights with integrity and diligence.</p>

       </div>
       <div className="right1">
        <img src={logo}  alt={logo}/>
       </div>

    </div>
  )
}

export default Main