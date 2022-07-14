import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function keywordSearch(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`The keyword you searched for is ${keyword}`);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" autoFocus={true} onChange={keywordSearch} />
      </form>
    </div>
  );
}
