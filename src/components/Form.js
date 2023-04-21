import { Grid, Paper, TextField, Typography } from '@mui/material'
import Pin from '@mui/icons-material/PushPinRounded';
import React, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function () {
  const [currentCity, setCurrentCity] = useState(null);

  const getloc = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`);
        const data = await response.json();
        const city = data.results[0].address_components.find((component) => {

          component.types.includes('locality');
          console.log((data));
          console.log(city)
        }
        );
        setCurrentCity(city.long_name);
      },
      (error) => {
        console.error(error);
      })
  }
  //getloc();

  return (
    <>

      <Grid container spacing={5}>
        <Grid item md={4}></Grid>
        <Grid item md={4}>
          <Paper elevation={12} sx={{ borderRadius: '10px', padding: "5px" }}>
            <Grid container spacing={3}>
              <Grid item md={12} >
                <Typography variant='h4'>Book A Ride</Typography>
              </Grid>
              <Grid item md={12}>
                <Pin sx={{ width: '30px', height: '60px' }} />
                <TextField
                  id="outlined-multiline-flexible"
                  label="Pickup Location"
                  multiline
                  sx={{ width: '430px' }}
                />
              </Grid>
              <Grid item md={0.7}></Grid>
              <Grid item md={11.3}>

                <TextField
                  id="outlined-multiline-flexible"
                  label="Drop Location"
                  multiline
                  sx={{ width: '430px'}}
                />
              </Grid>
              <Grid item md={2}></Grid>
              <Grid item md={5} >
                <input type='radio' value='now'/><b>Now</b>
              </Grid>
              <Grid item md={5}>
              <input type='radio' value='later'/><b>Schedule</b>
              </Grid>
              <Grid item md={0.8}></Grid>
              <Grid item md={5}>
                <input type='checkbox'/>Baby Seat
              </Grid>
              <Grid item md={5}>
                <input type='checkbox'/>Carrier
              </Grid>
              <Grid item md={1.2}></Grid>
              <Grid item md={0.8}></Grid>
              <Grid item md={5}>
                <input type='checkbox' label='Wheel Chair'/>Wheel Chair
              </Grid>
              <Grid item md={5}>
                <input type='checkbox'/>Trunk
              </Grid>
              <Grid item md={1.2}></Grid>
            </Grid>
          </Paper>

        </Grid>
        <Grid item md={4}></Grid>

      </Grid>

    </>
  )
}
