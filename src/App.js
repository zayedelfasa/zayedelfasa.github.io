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
import colors from './app/styles/colors';
import portofolio from './app/data/portofolio.json';

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
  const CardView = ({ title, image, desc, width, height }) => {
    return (
      <Paper className={classes.root} variant="outlined" style={{ borderRadius: 10 }}>
        <Typography component="div" style={{
          justifyContent: "center",
          alignItems: "center"
        }}>
          <ImageView
            image={image} width={width} height={height}
          />
        </Typography>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
        </CardContent>
      </Paper>
    );
  }

  /**
   * 
   * @param {require} image
   * @param {number} width
   * @param {number} height
   */
  const ImageView = ({ image, width, height }) => {
    return (
      <Grid container spacing={0} direction="column" alignItems="center" justify="center">
        <Avatar src={image} style={{ width: width, height: height, padding: 18 }} />
      </Grid>
    );
  }

  /** 
   * @param {*} param0 
   */
  const PortofolioView = ({ }) => {

  }

  /**
   * @render component
   * @return <View />
   */
  return (
    <React.Fragment>
      <Container style={{ backgroundColor: colors.default_white }} >
        <Container maxWidth="lg" style={{ backgroundColor: colors.default_white }}>
          <Grid component="div" style={{ height: '100vh', backgroundColor: colors.default_white }}>
            <Typography style={{ fontSize: Dimensi.bigFont, textAlign: "start", paddingTop: 10 }}>
              Zayed Elfasa
            </Typography>
            <Typography variant="body2" color="textSecondary" component="div" style={{
              paddingTop: -10
            }}>
              Let's Code and Share...
            </Typography>
            <Grid container spacing={0} style={{ paddingTop: 24 }}>
              <Grid item xs>
                <CardView title="React Native" image={reactnative} width={130} height={130}
                  desc="Library turunan dari React yang digunakan untuk membuat aplikasi Android dan iOS."
                />
              </Grid>
              <Grid item xs>
                <CardView title="Flutter" image={flutter} width={100} height={100}
                  desc="UI Kit dari Google untuk membuat aplikasi yang berjalan secara cross-platform."
                />
              </Grid>
              <Grid item xs>
                <CardView title="Multipass Ubuntu" image={multipass} width={150} height={150}
                  desc="Mini Cloud Ubuntu yang dijalankan secara virtual di dalam Sistem Operasi Anda."
                />
              </Grid>
            </Grid>
            <Grid component="div" style={{ height: '100vh', backgroundColor: colors.default_white }}>
              <Typography style={{ fontSize: Dimensi.bigFont, textAlign: "start", paddingTop: 10 }}>
                Portofolio Saya
            </Typography>
              <Typography variant="body2" color="textSecondary" component="div" style={{
                paddingTop: -10
              }}>
                Project yang pernah dibuat dan ada yang sedang berlanjut
            </Typography>
              <Grid container spacing={0} style={{ paddingTop: 24 }}>
                <Grid container spacing={0} >
                  {
                    portofolio.map((val, index) => {
                      return (
                        <Grid container item>
                          {/* <div>{val.judul}</div> */}
                          <div>
                            
                          </div>
                          <div style={{ paddingBottom: 8 }}>
                            <Paper variant="outlined" style={{ padding: 8 }}>
                              <div>{val.judul}</div>
                              <div>{val.deskripsi}</div>
                            </Paper>
                          </div>
                        </Grid>
                      );
                    })
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default App;
