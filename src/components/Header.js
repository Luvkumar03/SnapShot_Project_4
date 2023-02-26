import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import Navigation from "./Navigation";

function Header() {
  let _navigate = useNavigate();

  const _handleSubmit = (e, navigate, searchInput) => {
    e.preventDefault();
    // e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    navigate(url);
  };

  return (
    <div>
      <h1>SnapShot</h1>
      <Form navigate={_navigate} handleSubmit={_handleSubmit} />
      <Navigation />
    </div>
  );
}

export default Header;
