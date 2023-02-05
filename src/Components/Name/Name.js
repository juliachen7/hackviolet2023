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
          image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
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
          image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
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
          image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
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
          image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
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
 