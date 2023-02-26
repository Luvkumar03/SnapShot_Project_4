import React from "react";
import { useParams } from "react-router-dom";
import Container from "./Container";

function Item({ searchTerm }) {
  let { searchInput } = useParams();

  return (
    <div>
      <h2>{searchInput || searchTerm} Pictures</h2>
      <Container searchTerm={searchInput || searchTerm} />
    </div>
  );
}

export default Item;