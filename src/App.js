/**
 * @contribute by Zayed Elfasa
 * @created at 1 January 2021
 */

import React from 'react';
import {
  Container, CssBaseline, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Grid, Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import clsx from 'clsx';
import { Dimensi } from './app/styles/dimensions';
import { FavoriteIcon, ShareIcon, ExpandMoreIcon, MoreVertIcon } from '@material-ui/icons/Favorite';
import logo from './logo.svg';
import './App.css';
import reactnative from './app/assets/images/reactnative.png';
import flutter from './app/assets/images/flutter.png';
import multipass from './app/assets/images/multipass.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const App = () => {
  const classes = useStyles();

  /**
   * @param {String} title
   * @param {Image} image
   * @param {String} desc
   */
  const CardView = ({ title, image, desc }) => {
    return (
      <Card className={classes.root} elevation={0} variant="elevation" style={{ borderRadius: 10 }}>
        <Typography component="div" style={{
          justifyContent: "center",
          alignItems: "center"
        }}>
          <ImageView image={image} />
        </Typography>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  const ImageView = ({ image }) => {
    return (
      <Grid container spacing={0} direction="column" alignItems="start" justify="start">
        <Avatar src={image} style={{ width: 100, height: 100, padding: 18 }} />
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Container style={{ backgroundColor: "#ffffff" }} >
        <Container maxWidth="lg" style={{ backgroundColor: "#ffffff" }}>
          <Grid component="div" style={{ height: '100vh', backgroundColor: "#ffffff" }}>
            <Typography style={{ fontSize: Dimensi.bigFont, textAlign: "start", paddingTop: 10 }}>
              Zayed Elfasa
            </Typography>
            <Typography variant="body2" color="textSecondary" component="div" style={{
              paddingTop: -10
            }}>
              Let's Code and Share...
            </Typography>
            <Grid container spacing={3} style={{ paddingTop: 24 }}>
              <Grid item xs>
                <CardView title="React Native" image={reactnative}
                  desc="Library turunan dari React yang digunakan untuk membuat aplikasi Android dan iOS."
                />
              </Grid>
              <Grid item xs>
                <CardView title="Flutter" image={flutter}
                  desc="UI Kit dari Google untuk membuat aplikasi yang berjalan secara cross-platform."
                />
              </Grid>
              <Grid item xs>
                <CardView title="Multipass Ubuntu" image={multipass}
                  desc="Mini Cloud Ubuntu yang dijalankan secara virtual di dalam Sistem Operasi Anda."
                />
              </Grid>
            </Grid>
            
          </Grid>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default App;
