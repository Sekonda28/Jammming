import React from 'react';
import './TrackList.css';
import Track from '../Track/Track'

class TrackList extends React.Component(){

    render(){
        <div className="TrackList">
            {
                this.props.tracks.map(track => {
                    <Track track = {tracks}
             
                key = {track.id}
            
                />

            })}
        </div>
    }
};

export default TrackList