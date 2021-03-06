import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import Favicon from 'react-favicon'



import logo from '../../static/images/logo.png'
import favicon from '../../static/images/favicon.png'

export class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (<header>

        <Favicon url={favicon} />


      <div className="headerIn">
        <NavLink className="logo" to="/">
            <img src={logo} alt="Geo Tourizm Logo"/>
        </NavLink>
    
  <div className="wrapper">
    <input type="checkbox" id="check-menu" />


    <label htmlFor="check-menu"></label>

   <div className="burger-line fi-burger"></div>
    <div className="burger-line se-burger"></div>
    <div className="burger-line th-burger"></div>
    <div className="burger-line fo-burger"></div>
    <nav className="main-burger_menu">
    <NavLink className="blog" to="/trips">
      Туры
    </NavLink>
    <NavLink className="otzivi" to="/reviews">
      Отзывы
    </NavLink>

    <NavLink className="oproekte" to="/about">
                О проекте
    </NavLink>
    <NavLink className="hambruger_pick" to="/tour-pick">
                Позвонить
    </NavLink>
    </nav>

        </div>

        <div className="navigation">

          <NavLink className="blog" to="/trips">
            Туры
          </NavLink>


          <NavLink className="otzivi" to="/reviews">
            Отзывы
          </NavLink>

          <NavLink className="oproekte" to="/about">
            О проекте
          </NavLink>

        </div>


        {/*<div id="mainselection" className="select_value">*/}
        {/*<select>*/}
          {/*<option value="dollar">$</option>*/}
          {/*<option value="evro">€</option>*/}
          {/*<option value="rub">₽</option>*/}
        {/*</select>*/}
        {/*</div>*/}


        {/*<div className="search">*/}
          {/*<input placeholder="Искать тур"></input>*/}
        {/*</div>*/}


        <NavLink className="tour_pick" to="/tour-pick">
          Позвонить
        </NavLink>
      </div>
    </header>);
  }
}

export default connect(null)(Header);
