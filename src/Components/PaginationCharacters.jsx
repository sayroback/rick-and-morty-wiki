import * as React from "react";
import Pagination from "@mui/material/Pagination";
import styled from "@emotion/styled";
import { useCharacters } from "../Services/useCharacters";
import { useScreen } from "../Hooks/useScreen";

export const PaginationCharacters = ({ nextPage, index }) => {
  const { state } = useCharacters();
  const { pages } = state;
  const { width } = useScreen();

  const PaginationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    color: #fff;
    align-items: center;
  `;
  const goToTop = () => {
    document.body.scrollIntoView();
  };

  const handleChange = (page) => {
    nextPage(page);
    console.log(page);
    goToTop();
  };

  return (
    <PaginationContainer className="pagination-container">
      <Pagination
        count={pages}
        page={index}
        shape="rounded"
        size={width > 425 ? "large" : "medium"}
        className="pagination"
        onChange={(_, page) => {
          handleChange(page);
        }}
      />
    </PaginationContainer>
  );
};
