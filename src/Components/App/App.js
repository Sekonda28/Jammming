import React from 'react'
import './App.css'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import SearchBar from '../SearchBar/SearchBar'

class App extends React.Component {

constructor(props){
  super(props);
  this.state = {searchResults:[{
    name: "Let It Be",
    artist: "Beatles",
    album: "Let It Be",
    id: 1
  }, {name: "Lithium", artist: "Nirvana", album: "Nevermind", id: 2}], playlistName: "My Playlist", playlistTracks:[{name: "playlistName1",
  artist: "playlistArtist1",
  album: "playlistAlbum1",
  id: 4}, {name: "playlistName2",
  artist: "playlistArtist2",
  album: "playlistAlbum2",
  id: 5},]
};
this.addTrack = this.addTrack.bind(this)

}

addTrack(track){
  let tracks = this.state.playlistTracks;
  if (tracks.find(savedTrack=>savedTrack.id === track.id)) {
    return
  }
  tracks.push(track)
  this.setState({playlistTracks: tracks})
}



  render(){
  return (
<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults searchResults = {this.state.searchResults} onAdd = {this.addTrack}_/>
      <Playlist playlistTracks = {this.state.playlistTracks} playlistName = {this.state.playlistName}/>
    </div>
  </div>
</div>
  );
}
}
export default App
