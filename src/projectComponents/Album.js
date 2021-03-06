import React from "react";
import Footer from "./Footer";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "2%",
  },
  cardMediaImgList: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1];
export default function Album(props) {
  const classes = useStyles();
  const imgList = props.component.shuffledImgs || [];
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              How it works
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Click <i>shuffle</i> button to get a random meme image and use
              your creativity by adding top/bottom texts!
            </Typography>
            <div style={props.component.randImg ? null : { display: "none" }}>
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={12} md={12}>
                    <Card className={classes.card}>
                      <CardMedia className={classes.cardMedia} title="Image title">
                        <div className="container meme">
                          <img
                            src={props.component.randImg}
                            alt="Snow"
                            style={{ width: "100%" }}
                          />
                          <h2 className="top">{props.component.topText}</h2>
                          <h2 className="bottom">{props.component.bottomText}</h2>
                          <CardActions>
                            <TextField
                              id="standard-search"
                              label="top text"
                              type="search"
                              name="topText"
                              value={props.component.topText}
                              onChange={props.handleChange}
                            />
                            <TextField
                              id="standard-search"
                              label="bottom text"
                              type="search"
                              name="bottomText"
                              value={props.component.bottomText}
                              onChange={props.handleChange}
                            />
                          </CardActions>
                        </div>
                      </CardMedia>
                      <CardContent className={classes.cardContent}>
                        <Typography color="textSecondary">
                          Here is your meme image. Enjoy ^^
                        </Typography>
                      </CardContent>
                    </Card>
                    <Typography color="textSecondary" style={!props.component.shuffleAfterDel ? { display: 'none' } : null}>
                      Note:you <b>must</b> shuffle first to click previous/next after deletion
                    </Typography>
                    <br />
                  </Grid>
                ))}
              </Grid>
            </div>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={props.handlePrevImg}
                    disabled={(!props.component.imgCount || props.component.indexOfCurrentImg === 0 || props.component.shuffleAfterDel) ? true : false}
                  >
                    Previous
                  </Button>
                </Grid>
                <Grid item >
                  <Button
                    variant="contained"
                    onClick={props.handleNextImg}
                    disabled={(props.component.indexOfCurrentImg === props.component.shuffledImgs.length - 1 || props.component.shuffledImgs.length === 0 || props.component.shuffleAfterDel) ? true : false}
                  >
                    Next
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={props.src}
                    disabled={props.component.indexOfCurrentImg < props.component.shuffledImgs.length - 1 ? true : false}
                  >
                    Shuffle
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          <Container className={classes.cardGrid} maxWidth="md">
            <Typography color="textPrimary"
              variant="h4" style={props.component.shuffledImgs.length ? { display: 'none', paddingBottom: '3%' } : null}>
              There is no meme in the card, why not exploring?
            </Typography>
            <Typography color="textPrimary"
              variant="h4" style={!props.component.shuffledImgs.length ? { display: 'none', paddingBottom: '3%' } : null}>
              Great! you have {props.component.shuffledImgs.length} memes, keep it up ^^
            </Typography> <br />
            <br />
            <Grid container spacing={4}>
              {imgList.map((card, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMediaImgList}
                      image={card}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Meme {index + 1}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {/* <Button size="small" color="primary">
                        View
                    </Button> */}
                      <Button size="small" color="secondary" onClick={() => props.handleDelete(index)}>
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </main>
      <Footer component={props.component} />
    </React.Fragment>
  );
}
