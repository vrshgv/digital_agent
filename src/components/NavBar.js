import React from 'react';

class NavBar extends React.Component{

    render(){
        return(
            <nav className="navbar fixed-top navbar-expand-md navbar-light navbar-inverse px-3">
                
                <a className="navbar-brand" href="#"><img alt='Digital Agent' src='/logo2.png'/></a>
                <button className="navbar-toggler order-last order-sm-2 order-md-1" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" collapse navbar-collapse smooth-scroll" id="navbarText">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#benefits">Преимущества</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link prices" href="#tariffs">Цены</a>
                    </li>
                    
                  </ul>
                </div>
                <div className='or order-sm-1 order-md-2'>
                      <a className="nav-link btn my-2 my-sm-0 pro-b px-3" href="#form">Получить PRO</a>
                      </div>
              </nav>
            );
         }
}
export default NavBar;