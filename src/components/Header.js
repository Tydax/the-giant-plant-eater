import React from 'react'
import { Link } from 'gatsby'
import headerStyles from '../styles/components/header.module.scss'

export default function Header(props) {
  return (
    <header
      className={`${headerStyles.header} ${props.page === 'info' &&
        headerStyles.info_page}`}
    >
      <nav
        className={headerStyles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          <h1 className={headerStyles.header__websitename}>{props.title}</h1>
        </Link>
        <ul className={headerStyles.header__menu}>
          <li>
            <Link
              to={props.page === 'info' ? '/' : '/info'}
              activeClassName={headerStyles.navItemActive}
            >
              {props.page === 'info' ? 'close' : 'info'}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
