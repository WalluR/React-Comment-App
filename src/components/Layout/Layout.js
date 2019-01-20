import React from 'react'
import Aux from '../../hoc/Aux';
import classes from './Layout.css'

// Component to show navbar top of the page
const layoyt = (props) => (
  <Aux>
  <div className = {classes.topnav}>
    <a href={'notActive/'} className="active">Comment ReactApp</a>
  </div>
  <main>
  {props.children}
  </main>
  </Aux>

);

export default layoyt;
