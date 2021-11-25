// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const styles = {
//   link: {
//     display: 'inline-block',
//     textDecoration: 'none',
//     padding: 12,
//     fontWeight: 700,
//     color: '#ffffff',
//   },
//   activeLink: {
//     color: '#808080',
//   },
// };

// const Navigation = () => (
//   <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
//     <li>
//       <NavLink
//         to="/"
//         exact="true"
//         className="nav-link px-2 "
//         // style={styles.link}
//         // activestyle={styles.activeLink}
//       >
//         Main
//       </NavLink>
//     </li>
//     <li>
//       <NavLink
//         to="/contacts"
//         exact="true"
//         className="nav-link px-2 "
//         // style={styles.link}
//         // activestyle={styles.activeLink}
//       >
//         Contacts
//       </NavLink>
//     </li>
//   </ul>
// );

// export default Navigation;

import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => (
  <nav>
    <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Главная
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Контакты
    </NavLink>
  </nav>
);

export default Navigation;
