import React from 'react';

const defaultProps = {
    image: 'https://assets.api.uizard.io/api/cdn/stream/d48d8f7b-ff08-4c00-a88c-0ee82772d41b.png',
};

const FeaturedStory = () => (
    <div className="m-4">
        <h2 className="text-2xl font-bold text-center m-4" style={{ color: "#030303", marginTop: "80px" }}>Featured Story</h2>
        <div className="relative rounded overflow-hidden w-full max-w-screen-xl mx-auto h-96" style={{
            backgroundImage: `url(${defaultProps.image})`,
            borderRadius: '8px',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 text-white">
                <h3 className="text-lg font-bold">Moonlit Mysteries</h3>
                <p>Unravel the secrets hidden within the shadows of the forest.</p>
            </div>
        </div>
    </div>
);

export default FeaturedStory;