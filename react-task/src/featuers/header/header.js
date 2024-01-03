import React from 'react'
import "../../assets/css/header/header.css"
import { IoMdClose } from "react-icons/io";

const Header = () => {
  return (
    <div>
      <div>
        <div style={{float:"right" ,paddingRight:"15px",paddingTop:"20px",color: "#ffffff91"}}><IoMdClose className="closeButton" /></div>
      </div>
      <div>
        <p className='head'>Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</p>
      </div>
      <div className='icon'>
        <img alt='lgo' src={require("../../assets/images/fortnite-pictures-b5kfcchwazwiz3cs 1.png")} className='headimg' />
      </div>
      <div>
        <p className='head-ph'>
          Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build,
          experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, 
          and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. 
          Find it all in Fortnite ... Drop In.</p>
      </div>
      <div>
        <button className='spanbgrd'>Visit Website</button>
      </div>

    </div>
  )
}
export default Header
