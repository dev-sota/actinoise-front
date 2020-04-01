import React from "react";
import { useForm } from "react-hook-form";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    alert("API server is in development. Print form data in console.");
  };
  const classes = useStyles();
  const style = {
    margin: "auto",
    width: "50%"
  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>CONTACT US</h2>
          <h4 className={classes.description}>
            If you have an account on twitter, please send us a{" "}
            <a href="https://twitter.com/ActiNoise" target="blank">
              direct message
            </a>
            . <br />
            We will responde get back to you.
          </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  label="Your Name"
                  name="name"
                  inputRef={register}
                  fullWidth={true}
                  margin="normal"
                  required
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  label="Your Email"
                  name="email"
                  inputRef={register}
                  fullWidth={true}
                  margin="normal"
                  required
                />
              </GridItem>
              <GridItem md={12}>
                <TextField
                  label="Your Message"
                  name="message"
                  inputRef={register}
                  fullWidth={true}
                  margin="normal"
                  multiline
                  rows="5"
                  required
                />
              </GridItem>
              <GridContainer style={style}>
                <GridItem className={classes.textCenter}>
                  <Button type="submit" color="primary">
                    Send Message
                  </Button>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
