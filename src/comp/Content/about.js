import React from "react";
import injectSheet from 'react-jss'




const styles = {
  container: {
    height: 1000,
  }
};

function About(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.container}>i`m about</div>
      <div>i`m end</div>
    </div>
  );
}
export default injectSheet(styles)(About);
