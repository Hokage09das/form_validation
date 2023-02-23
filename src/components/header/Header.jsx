import React from "react";

import { Link, useMatch } from "react-router-dom";

import styles from "./header.module.scss";

const CustomLink = ({ to, children, ...props }) => {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      className={match ? `${styles.link} ${styles.active}` : styles.link}
      {...props}
    >
      {children}
    </Link>
  );
};

export const Header = () => {
  return (
    <header className={styles.header}>
      <CustomLink to='/'>List</CustomLink>
      <CustomLink to='create'>Convert</CustomLink>
    </header>
  );
};
