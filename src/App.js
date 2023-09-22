import React from "react";
import PlayersList from "./PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>FIFA Player Cards</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <p style={{ fontSize: "24px", fontWeight: "bold", lineHeight: "1.5" }}>
          Welcome to the FIFA Player Cards app! Explore the profiles of your favorite football players from around the world. Click on a player's card to see their details, including team, nationality, jersey number, and more.
        </p>
        <PlayersList />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} FIFA Player Cards App</p>
        <p>Contact: contact@example.com</p>
        <p>Follow us on <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a></p>
      </footer>
    </div>
  );
}

export default App;
