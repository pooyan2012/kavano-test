import React from "react";

import "./search.styles.scss";

const Search = () => (
  <div className="form-block w-form">
    <form
      id="email-form"
      name="email-form"
      data-name="Email Form"
      className="kavano-form"
    >
      <input
        type="submit"
        value=""
        data-wait="Please wait..."
        className="kavano-search-btn w-button"
      />
      <input
        type="text"
        className="kavano-search-txt-field w-input"
        maxLength="256"
        name="name"
        data-name="Name"
        placeholder="Search"
        id="name"
      />
    </form>
  </div>
);

export default Search;
