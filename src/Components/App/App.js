import React from 'react'
import './App.css'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import SearchBar from '../SearchBar/SearchBar'

class App extends React.Component() {

constructor(props){
  super(props);
  this.state = {searchResults:[{
    name: "Let It Be",
    artist: "Beatles",
    album: "Let It Be",
    id: "1234"
  }
  ]};
};

  render(){
  return (
<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults searchResults = {this.state.searchResults}/>
      <Playlist />
    </div>
  </div>
</div>
  );
}
}
export default App
