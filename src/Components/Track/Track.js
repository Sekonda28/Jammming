import React from 'react';
import './Track.css';
import TrackList from '../TrackList/TrackList';

class Track extends React.Component(){

    renderAction(){
        return isRemoval?<button className="Track-action">"+"</button>:<button className="Track-action">"-"</button>; 
    }

    render(){
        <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p> {this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <button className="Track-action"></button>
      </div>  
    }

}
export default Track