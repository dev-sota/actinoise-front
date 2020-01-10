import React from "react";
import ReactPlayer from "react-player";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>GALLERY</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          {/* <GridItem> */}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=-d_RuZhuR-k"
            playing
          />
          {/* </GridItem> */}
        </GridContainer>
      </div>
    </div>
  );
}
