import React, { Component } from "react";
import "./style.css";
import { Movies } from "./componets/Movies/Movies";
import { Header } from "./componets/Header/Header";

class App extends Component {
  state = {
    movies: "",
    searchQuery: "Simpsons",
  };

  handleValue = (e) => {
    const inputValue = e.target.value;
    this.setState({ movies: inputValue });
  };

  btnSearch = () => {
    this.setState({ searchQuery: this.state.movies });
  };

  render() {
    return (
      <>
        <Header
          movies={this.state.movies}
          handleValue={this.handleValue}
          btnSearch={this.btnSearch}
        />
        <main>
          <div className="contaner">
            <Movies value={this.state.searchQuery} />
          </div>
        </main>
      </>
    );
  }
}

export default App;
