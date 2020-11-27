import React from 'react'
import {ReactComponent as Logo} from './github.svg'
import PropTypes from 'prop-types'


const Navbar = ({title}) => {
        return (
            <nav className='navbar bg-primary'>
                <h1> 
                <Logo width='30' display='block'/> 
                {title}
                </h1>
            </nav>
        )
}

Navbar.defaultProps = {
    title: '  Github Finder'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Navbar
