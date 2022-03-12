/* eslint-disable react/button-has-type */
/* eslint-disable no-use-before-define */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import {useLocation} from 'react-router-dom'
function Header({ title,onAdd,showAdd }) {
  const location = useLocation()
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/'&&(<Button color={showAdd ? 'red':'green'}text ={showAdd? 'Close':'Add'}onClick ={onAdd} />)}
    </header>
  );
}

Header.defaultProps = {
  title: 'My Task Tracker',
};
Header.prototype = {
  title: PropTypes.string,
};
// CSS option of styling.
// const headerstyle = {
//   color: 'black',
//   backgroundColor: 'grey',
// }

export default Header;
