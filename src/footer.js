import React from "react";
import "./footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Grid, Slider } from "@mui/material";
import { PlaylistPlay, VolumeDown } from "@mui/icons-material";
function footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumlogo"
          src="https://imgs.search.brave.com/st61eIpD3s5Ia5WfrvXC_PFBLB4LBVxOXU62had_7WY/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/eENuazBNakZvN3Fp/STE5aFM2T1FBSGFI/YSZwaWQ9QXBp"
          alt=""
        />
        <div className="footer__songinfo">
          <h4>Gbona</h4>
          <p>Burna Boy</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default footer;
