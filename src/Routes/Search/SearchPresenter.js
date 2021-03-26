import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
    padding: 0px 20px;
`;

const Form = styled.form`
    margin-top: 25px;
    margin-bottom: 50px;
    width:100%;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width:100%;
    text-align: center;
`;

const SearchPresenter = ({
    movieResults,
    tvResults,
    loading,
    searchTerm,
    handleSubmit,
    error,
    updateTerm
}) => (
    <Container>
        <Form onSubmit={handleSubmit}>
           <Input placeholder="영화 또는 TV 프로그램을 검색하세요=3"
                  value={searchTerm} 
                  onChange={updateTerm} />
        </Form>
           {loading ? (<Loader />) : (
                <>
                  {movieResults && movieResults.length > 0 && (
                    <Section title="Movie Results">
                        {movieResults.map(movie => (<span key={movie.id}>{movie.title}</span>))}
                    </Section>
                  )}
                  {tvResults && tvResults.length > 0 && (
                    <Section title="TV show Results">
                        {tvResults.map(show => (<span key={show.id}>{show.name}</span>))}
                    </Section>
                  )} 
                  {error && <Message color=" #c0392b " text={error} />}
                  {tvResults && movieResults && 
                    tvResults.length === 0 && movieResults.length === 0 && (
                        <Message text= {"해당 검색어를 찾을 수 없습니다"} color="#c0392b"/>
                        )}
                </>
              )}
        </Container>
    );

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    error: PropTypes.string,
    searchTerm: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
};


export default SearchPresenter;