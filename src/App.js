import React, { useState, useEffect } from "react";
import Quote from "./components/Quote";
import useFetch from "./customHooks/useFetch";

const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const inicialQuote = {
  quote: "Life isn’t about getting and having, it’s about giving and being.",
  author: "Kevin Kruse",
};

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

function App() {
  const { data, isLoading, isError } = useFetch(url);

  const [quote, setQuote] = useState({});

  useEffect(() => {
    setQuote(inicialQuote);
  }, []);

  const getRandomQuote = (e) => {
    if (isLoading) return;

    return data.quotes[Math.floor(Math.random() * data.quotes.length)];
  };

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  let randomColor = getRandomColor();

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : isError ? (
        "Error!"
      ) : (
        <div className="container" style={{ background: randomColor }}>
          <div className="quote-container">
            <div className="content" style={{ color: randomColor }}>
              <Quote quote={quote} />
            </div>
            <div className="btn-container">
              <button
                style={{ background: randomColor }}
                className="btn"
                onClick={() => {
                  setQuote(getRandomQuote());
                }}
              >
                New quote
              </button>
            </div>
          </div>
          <footer style={{ background: randomColor }}>by Julián Vicente</footer>
        </div>
      )}
    </div>
  );
}

export default App;
