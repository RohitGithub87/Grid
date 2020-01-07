import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const Response = await unsplash.get("search/photos", {
      params: { query: term  , per_page: 10000},

    });
    this.setState({ images: Response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "3px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
