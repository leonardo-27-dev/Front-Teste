"use client";
import React from "react";
import { MenuLink, Nav, NavHeader, NavLeft, NavRight } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSignOut,
  faTasks,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export function Header() {
  const handleSignOutClick = () => {
    localStorage.clear();
  };

  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <MenuLink href="/home">
            <FontAwesomeIcon icon={faHome} />
            Home
          </MenuLink>
          <MenuLink href="/users">
            <FontAwesomeIcon icon={faUser} />
            Users
          </MenuLink>
          <MenuLink href="/tasks">
            <FontAwesomeIcon icon={faTasks} />
            Tasks
          </MenuLink>
        </NavLeft>
        <NavRight>
          <MenuLink href="/" onClick={() => handleSignOutClick()}>
              <FontAwesomeIcon icon={faSignOut} />
              Sign out
          </MenuLink>
        </NavRight>
      </NavHeader>
    </Nav>
  );
}
