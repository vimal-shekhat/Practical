import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          CardContent example
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This Card's children are wrapped in a CardContent component, which
          adds 16px of padding around the edges. The last CardContent in a group
          of children will get 24px of padding on the bottom.
        </Typography>
      </CardContent>
    </Card>
  );
}
