import React from "react";
import "./body.css";
import Header from "./Header";
import SongRow from "./Songrow";
import { useDataLayerValue } from "./datalayer";
import { Favorite, MoreHoriz, PlayCircle } from "@mui/icons-material";

function Body({ spotify }) {
  const [{ discover_weekly, dispatch }] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__content">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__text">
          <strong>PLAYLISTS</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
          {dispatch}
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircle className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>

        {discover_weekly?.tracks.item.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
