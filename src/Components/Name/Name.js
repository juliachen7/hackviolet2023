import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

const Name = (props) => {
  return (
      <Grid container spacing={2} marginTop={10} marginLeft={2}>
        <Grid item xs={3} md={3}>
        <Card sx={{ maxWidth: 345,borderRadius:'16px'}}>

        <CardMedia
          component="img"
          height="140"
          image="https://content.thriveglobal.com/wp-content/uploads/2020/06/07-Kid-Asian-Alamy-XDKY6P.jpg"
          alt="Darren Zheng"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Darren Zheng
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Junior, CMDA Major
          </Typography>
        </CardContent>
      
    </Card>
 
        </Grid>
        <Grid item xs={3} md={3}>
        <Card sx={{ maxWidth: 345 }}>

        <CardMedia
          component="img"
          height="140"
          image="https://content.thriveglobal.com/wp-content/uploads/2020/06/07-Kid-Asian-Alamy-XDKY6P.jpg"
          alt="Julia Chen"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Julia Chen
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Junior, CS Major
          </Typography>
        </CardContent>
    </Card>
 
        </Grid>
        <Grid item xs={3} md={3}>
        <Card sx={{ maxWidth: 345 }}>
      
        <CardMedia
          component="img"
          height="140"
          image="https://content.thriveglobal.com/wp-content/uploads/2020/06/07-Kid-Asian-Alamy-XDKY6P.jpg"
          alt="Alex Wallace"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Alex Wallace
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Junior, CS Major
          </Typography>
        </CardContent>
      
    </Card>
 
        </Grid>
        <Grid item xs={3} md={3}>
        <Card sx={{ maxWidth: 345 }}>
      
        <CardMedia
          component="img"
          height="140"
          image="https://content.thriveglobal.com/wp-content/uploads/2020/06/07-Kid-Asian-Alamy-XDKY6P.jpg"
          alt="Gawain Zheng"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Gawain Zheng
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Junior, CMDA Major
          </Typography>
        </CardContent>
      
    </Card>
         
        </Grid>
      </Grid>
  );
 
 }
 
 export default Name;
 