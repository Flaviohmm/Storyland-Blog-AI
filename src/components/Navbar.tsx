// components/Navbar.tsx

"use client";

import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 65px;
    background-color: #ffffff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 1000;
`;

const Logo = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #030303;
`;

const NavList = styled.ul`
    display: flex;
    font-size: 15px;
    line-height: 28px;
    gap: 20px;
    color: #030303;
    font-weight: 600;
`;

const NavItem = styled.li`
    & a {
        color: #030303;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
            color: gray;
        }
    }
`;

const Navbar: React.FC = () => {
    return (
        <Header>
            <Logo>Storyland</Logo>
            <nav>
                <NavList>
                    <NavItem><Link href="/">Home</Link></NavItem>
                    <NavItem><Link href="/stories">Stories</Link></NavItem>
                    <NavItem><Link href="/video">Videos</Link></NavItem>
                    <NavItem><Link href="/about">About Us</Link></NavItem>
                    <NavItem><Link href="/contact">Contact</Link></NavItem>
                </NavList>
            </nav>
        </Header>
    );
};

export default Navbar;