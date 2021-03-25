import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    padding: 0px 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width: 100%
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%
`;

const SearchPresenter = ({ movieResults, tvResults, loading, searchTerm, handleSubmit, error, updateTerm }) => (
      <Container>
          <Form onSubmit={handleSubmit}>
            <Input 
              placeholder="영화 또는 TV 프로그램을 검색하세요 =3333" 
              value={searchTerm} 
              onChange={updateTerm}
            />
          </Form>
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