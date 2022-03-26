/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Items = styled.div`
  padding-top: 10px;
  padding-left: 10px;
`;

const Container = styled.div`
  margin-left: -14px;
`;

const Search = ({ value, onSearch, itemsDisplayed }) => {
  return (
    <Container className="input-group col-md-4 mb-4">
      <div className="input-group-prepend">
        <span className="input-group-text fa fa-search py-2" />
      </div>
      <input
        type="text"
        value={value}
        className="form-control"
        placeholder="Search..."
        onChange={onSearch}
      />
      <Items>{`${itemsDisplayed} items`}</Items>
    </Container>
  );
};

Search.propTypes = {
  value: PropTypes.string,
  onSearch: PropTypes.func,
  itemsDisplayed: PropTypes.number,
};

export default Search;
