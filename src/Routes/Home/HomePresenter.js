import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";


const Container = styled.div`
    padding: 20px;
    color: #81ecec;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) => (
      <>
      <Helmet>
          <title>Movies | Mingflix</title>
      </Helmet>
      {loading ? (
          <Loader />
      ) : (
          <Container>
            <Helmet>
              <title>Movies | Mingflix</title>
            </Helmet>
              {nowPlaying && nowPlaying.length > 0 && (
                  <Section title="Now Playing">
                      {nowPlaying.map(movie => (
                      <Poster 
                        key={movie.id} 
                        id={movie.id} 
                        imageUrl={movie.poster_path}
                        title={movie.original_title}
                        rating={movie.vote_average}
                        year={movie.release_date && movie.release_date.substring(0, 4)}
                        isMovie={true} 
                      />
                      ))}
                  </Section>
              )}
              {upcoming && upcoming.length > 0 && (
                <Section title="Upcoming Movies">
                      {upcoming.map(movie => (
                            <Poster 
                              key={movie.id} 
                              id={movie.id} 
                              imageUrl={movie.poster_path}
                              title={movie.original_title}
                              rating={movie.vote_average}
                              year={movie.release_date && movie.release_date.substring(0, 4)}
                              isMovie={true} 
                            />
                      ))}
                  </Section>)}
              {popular && popular.length > 0 && (
                <Section title="Popular Movies">
                    {popular.map(movie => (
                        <Poster 
                          key={movie.id} 
                          id={movie.id} 
                          imageUrl={movie.poster_path}
                          title={movie.original_title}
                          rating={movie.vote_average}
                          year={movie.release_date && movie.release_date.substring(0, 4)}
                          isMovie={true} 
                        />
                    ))}
                  </Section>
                )}
              {error && <Message color="#c0392b" text={error} />}                  
          </Container>
          )}            
        </>
      );

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;