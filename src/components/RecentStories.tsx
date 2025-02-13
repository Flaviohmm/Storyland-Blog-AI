// components/RecentStories.tsx
"use client";

import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    padding: 20px;
`

const stories = [
    { title: "Sunset Serenity", description: "Experience the calm and beauty of a beach sunset.", image: "/sunset.png" },
    { title: "City Lights", description: "Dive into the vibrant nightlife of the city.", image: "/city.png" },
    { title: "Mountain Tranquility", description: "Find peace in the serene mountain landscapes.", image: "/mountain.png" }
];

const RecentStories = () => (
    <div className="m-4">
        <h2 className="text-2xl font-bold text-center mt-5 text-[#030303]">Recent Stories</h2>
        <CardsWrapper>
            {stories.map(({ title, description, image }) => (
                <div key={title}>
                    <Card title={title} description={description} image={image} />
                </div>
            ))}
        </CardsWrapper>
    </div>
);

export default RecentStories;