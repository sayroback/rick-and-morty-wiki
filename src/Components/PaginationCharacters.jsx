import * as React from "react";
import Pagination from "@mui/material/Pagination";
import styled from "@emotion/styled";
import { useCharacters } from "../Services/useCharacters";

export const PaginationCharacters = ({ nextPage, index }) => {
  const { state } = useCharacters();
  const { pages } = state;

  const PaginationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    color: #fff;
    align-items: center;
  `;

  const handleChange = (page) => {
    console.log(page);
    nextPage(page);
  };

  return (
    <PaginationContainer className="pagination-container">
      <Pagination
        count={pages}
        page={index}
        shape="rounded"
        size="large"
        className="pagination"
        onChange={(_, page) => {
          handleChange(page);
        }}
      />
    </PaginationContainer>
  );
};
