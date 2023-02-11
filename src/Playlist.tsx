import React, { useState, useEffect } from "react";
import { playlistCreator } from "./Function/PlaylistCreation";
import { NameofVibes, resultTemplate } from "./Function/VibeSeperator";
import "./Styling/Playlist.scss";

export interface PlaylistProps {
  Playlist: {
    type: NameofVibes;
    tracks: SpotifyApi.TrackObjectFull[];
    desc?: string;
  };
  UserId: string;
}

const imageBlock = (tracks: SpotifyApi.TrackObjectFull[], index: number) => {
  const randomURL =
    tracks[Math.floor(Math.random() * tracks.length)].album.images[0].url;

  return <img key={index} src={randomURL} className="imageBlock"></img>;
};

const Playlist = ({ Playlist, UserId }: PlaylistProps) => {
  return (
    <div className="playlistHolder">
      <div className="albumCover">
        {[...Array(4)].map((eachArray, i) => imageBlock(Playlist.tracks, i))}
        <img
          src={require(`./RecordSvg/${Playlist.type.replace(/\s/g, "")}.svg`)}
          className="record"
        />
      </div>
      <div className="albumDescription">
        <h2>{Playlist.type}</h2>
        <p>{Playlist.desc}</p>
        <div
          className="createButton"
          onClick={() => playlistCreator({ Playlist, UserId })}
        >
          <p>Create Playlist</p>
        </div>
      </div>
    </div>
  );
};

export default Playlist;