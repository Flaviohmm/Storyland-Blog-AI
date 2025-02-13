// components/Footer.tsx

"use client";

import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: relative; /* Ajuste conforme necessário */
    width: 100%;
    height: 132px;
    background-color: #030303;
    color: white;
    padding: 16px; /* Valor de padding igual a 'p-4' */
    text-align: center;
`;

const FooterTitle = styled.h2`
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    margin-top: 20px;
`;

const FooterText = styled.p`
    color: #ffffff;
    font-size: 16px;
    line-height: 24px;
    margin-top: 10px;
`;

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <FooterTitle>Storyland</FooterTitle>
            <FooterText>© 2025 Storyland. All rights reserved.</FooterText>
        </StyledFooter>
    );
};

export default Footer;