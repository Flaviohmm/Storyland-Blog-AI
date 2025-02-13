"use client";

import Navbar from "@/components/Navbar";
import styled from "styled-components";

const defaultProps = {
    image: 'https://assets.api.uizard.io/api/cdn/stream/e47ed860-7a9c-4382-912c-24e0a2c0146d.png',
}

const Section = styled.section`
    background-color: #e5e7eb;
    padding: 20px;
    min-height: 100vh; /* Garante que cubra toda a altura da janela */
`;

const Container = styled.div`
    display: flex;
    max-width: 1200px;
    margin: auto;
    flex-direction: column; /* Alteração para coluna */
`;

const Row = styled.div`
    display: flex;
    flex-direction: row; /* Linha para conteúdo */
    margin-bottom: 20px; /* Espaçamento entre conteúdo e coluna lateral */
`;

const ContentColumn = styled.div`
    flex: 3;
    margin-top: 20px;
`;

const AsideColumn = styled.aside`
    flex: 1;
    background-color: #ffffff;
    box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
    padding: 20px;
    border-radius: 5px;
    margin-top: 80px;
    height: 100%;
    margin-left: 50px;
`;

const AuthorDateRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 300px;
    border-radius: 2px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Title = styled.h2`
    color: #030303;
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
    margin-top: 80px;
`;

const Button = styled.button`
    margin-top: 10px;
    margin-right: 10px;
    padding: 10px 15px;
    border: none;
    background-color: #32bc9b;
    color: white;
    cursor: pointer;
    border-radius: 30px;

    &:hover {
        background-color: #059473;
    }
`;

const AsideTitle = styled.h3`
    color: #030303;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    margin-bottom: 20px;
`;

const RelatedStoriesList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const RelatedStory = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const StoryImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 3px;
    margin-right: 10px;
    object-fit: cover;
`;

const StoryText = styled.div`
    display: flex;
    flex-direction: column;
`;

const StoryTitle = styled.h4`
    margin: 0;
    color: #111827;
    font-weight: bold;
`;

const StoryDescription = styled.p`
    margin: 0;
    color: #6b7280;
    font-size: 14px;
`;

const StoriesPage = () => {
    return (
        <>
            <Navbar />
            <Section>
                <Container>
                    <Row>
                        <ContentColumn>
                            <Title>The Enchanted Mountains</Title>
                            <StyledImage
                                src={defaultProps.image}
                                alt="The Enchanted Mountains"
                            />
                            <AuthorDateRow>
                                <p className="text-[#a9a9a9]">By Sarah Thompson</p>
                                <p className="text-[#a9a9a9]">Published on October 15, 2022</p>
                            </AuthorDateRow>
                            <p className="text-[#030303] mt-2">
                                Once upon a time, nestled within the heart of the mystical mountains, lay a village untouched by time. The villagers lived in harmony with nature, their lives intertwined with the mystical forces that surrounded them...
                            </p>
                            <p className="text-[#030303] mt-2">
                                The mountain peaks whispered secrets of ages past, and the streams sang songs of forgotten tales. One day, a young girl named Elara discovered a hidden path that led to an enchanted realm...
                            </p>
                            <Button>Leave a Comment</Button>
                            <span className="text-[#030303]">Rate this story: ★★★★☆</span>
                        </ContentColumn>
                        <AsideColumn>
                            <AsideTitle>Recent Stories</AsideTitle>
                            <RelatedStoriesList>
                                <RelatedStory>
                                    <StoryImage src="https://assets.api.uizard.io/api/cdn/stream/7e5aa6ee-aec1-4c9c-9211-8e010bf23a85.png" alt="Whispers of the Sea" />
                                    <StoryText>
                                        <StoryTitle>Whispers of the Sea</StoryTitle>
                                        <StoryDescription>A tale of a mysterious island where the sea holds many secrets.</StoryDescription>
                                    </StoryText>
                                </RelatedStory>
                                <RelatedStory>
                                    <StoryImage src="https://assets.api.uizard.io/api/cdn/stream/91977b97-b3b5-4fdd-9db6-5b588aeb3230.png" alt="Whispers of the Sea" />
                                    <StoryText>
                                        <StoryTitle>City of Dreams</StoryTitle>
                                        <StoryDescription>Explore the bustling life in a city that never sleeps.</StoryDescription>
                                    </StoryText>
                                </RelatedStory>
                                <RelatedStory>
                                    <StoryImage src="https://assets.api.uizard.io/api/cdn/stream/a8e53fde-6e8c-40fb-806a-7971eda9982e.png" alt="Whispers of the Sea" />
                                    <StoryText>
                                        <StoryTitle>Forest of Echoes</StoryTitle>
                                        <StoryDescription>Journey through an ancient forest where the past echoes.</StoryDescription>
                                    </StoryText>
                                </RelatedStory>
                            </RelatedStoriesList>
                        </AsideColumn>
                    </Row>
                </Container>
            </Section>
        </>
    );
};

export default StoriesPage;
