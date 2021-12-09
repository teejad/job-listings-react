import React from 'react'
import HeaderImg from '../images/bg-header-desktop.svg'

 function Header(){
    return (
        <div className="py-4 relative h-32 cyan">
          <img src={HeaderImg} alt="Header" className="absolute inset-0 w-full object-cover" />  
        </div>
    )
}


export default Header