import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
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
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            {/* NetlifyFormで必要な値 */}
            <input type="hidden" name="bot-field" />
            {/* NetlifyFormで必要な値 */}
            <input type="hidden" name="form-name" />

            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  name="name"
                  type="text"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  name="email"
                  type="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                name="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
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
