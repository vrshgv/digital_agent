import React from 'react';

class NavBar extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-expand-lg px-3">
                <a className="navbar-brand" href="#"><img alt='Digital Agent' src='/logo2.png'/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#">Преимущества</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Демо</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link prices" href="#">Цены</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link signin" href="#">Войти</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link btn my-2 my-sm-0" href="#">Получить PRO</a>
                    </li>
                  </ul>
                
                </div>
</nav>
            );
         }
}
export default NavBar;