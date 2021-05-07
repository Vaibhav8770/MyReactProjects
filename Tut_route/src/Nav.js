import React from 'react'
import { FaHome } from 'react-icons/fa'
import { BiMessageRoundedAdd } from 'react-icons/bi'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <nav>
            <h1>MK Characters Details</h1>
            <Link to="/create"><span className="span"><BiMessageRoundedAdd size={40}/></span></Link>
            <Link to="/"><span className="span"><FaHome size={40}/></span></Link>
        </nav>
    )
}

export default Nav;
