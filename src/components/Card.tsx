// components/Card.tsx
import React from "react";
import styled from "styled-components";

interface CardProps {
    image: string;
    title: string;
    description: string;
}

const CardContainer = styled.div`
    width: 100%;
    max-width: 443px;
    height: 300px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const ImageContainer = styled.div<{ image: string }>`
    width: 411px;
    height: 200px;
    border-radius: 24px;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 15px;
`;

const Content = styled.div`
    padding: 14px;
`;

const Title = styled.h3`
    font-size: 1.25rem;
    font-weight: bold;
    background-color: '#030303';
`;

const Description = styled.p`
    margin: 0;
`;

const Card: React.FC<CardProps> = ({ image, title, description }) => {
    return (
        <CardContainer>
            <ImageContainer image={image} />
            <Content>
                <Title className="text-[#030303]">{title}</Title>
                <Description className="text-[#030303]">{description}</Description>
            </Content>
        </CardContainer>
    );
}

export default Card;