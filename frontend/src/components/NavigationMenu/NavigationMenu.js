import React from 'react'
import classes from './NavigationMenu.module.css';

function NavigationMenu() {
  return (
      <div className={classes.navigationMenu}>
          <ul className={classes.navigationMenuItems}>
              <li>home</li>
              <li>rental listings</li>
              <li>owner</li>
              <li>about us</li>
              <li>contact</li>
            </ul>
      </div>
  )
}

export default NavigationMenu