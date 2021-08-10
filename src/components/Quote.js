import React from "react";

const Quote = ({ quote }) => {
  return (
    <div>
      <h2>"{quote.quote}"</h2>
      <p className="author">-{quote.author}</p>
    </div>
  );
};

export default Quote;
