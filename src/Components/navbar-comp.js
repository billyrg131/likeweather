import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import cloud from '../assets/cloud.jpeg';


class NavbarTwo extends React.Component{
    render(){
        return(
            <div>
                <nav className='navbar navbar-dark bg-danger navbar-expand-lg'>
                    <Link to="/" className='navbar-brand'><img src={cloud} width="50" height="50" alt=""/>  LikeWeather</Link>
                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav'>
                            <li className='navbar-item'>
                                <Link to="/update" className='nav-link'>Weather Update</Link>
                            </li>
                            <li className='navbar-item'>
                                <Link to="/news" className='nav-link'>Weather News</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavbarTwo;