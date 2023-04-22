import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import Pin from '@mui/icons-material/PushPinRounded';
import React, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import MyFormControlLabel from '@mui/material/FormControlLabel';

export default function () {
  const [currentCity, setCurrentCity] = useState(null);
  const [pick,setPick]=useState();
  const [drop,setDrop]=useState();
  const [sc,setSc]=useState();
  //const [info,setInfo]=useState([false,false,false,false]);
  const [infoc,setInfoc]=useState([0,0,0,0]);
  const [add,setAdd]=useState();

  const submit=()=>
  {

  }

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
  const handlepick=(e)=>{
    setPick(e.target.value);
    console.log(pick);
  }
  const handledrop=(e)=>{
    setDrop(e.target.value);
    console.log(drop);
  }
  const book=(e)=>{
    setSc(e.target.value);
    console.log(sc);
  }
  const handlei=(e)=>{
    let x=e.target.value
    
    if(x=='baby')
    {
      if(infoc[0]==0)
      {
        infoc[0]=1;
      }
      else
      {
        infoc[0]=0;
      }
    }
    else if(x=='carrier')
    {
      if(infoc[1]==0)
      {
        infoc[1]=1;
      }
      else
      {
        infoc[1]=0;
      }
    }
    else if(x=='chair')
    {
      if(infoc[2]==0)
      {
        infoc[2]=1;
      }
      else
      {
        infoc[2]=0;
      }
    }
    else if(x=='trunk')
    {
      if(infoc[3]==0)
      {
        infoc[3]=1;
      }
      else
      {
        infoc[3]=0;
      }
    }
    for(let i=0;i<4;i++)
    {
      console.log(infoc[i]);
    }

    console.log(e.target.value);
  }
  const handleadd=(e)=>{
    setAdd(e.target.value)
    console.log((add));
  }
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
                  value={pick}
                  onChange={handlepick}
                />
              </Grid>
              <Grid item md={0.7}></Grid>
              <Grid item md={11.3}>

                <TextField
                  id="outlined-multiline-flexible"
                  label="Drop Location"
                  multiline
                  sx={{ width: '430px' }}
                  value={drop}
                  onChange={handledrop}
                />
              </Grid>
              <Grid item md={1}></Grid>
              <Grid item md={5} sx={{ backgroundColor: '#ff9800d6', borderRadius: '40px', paddingBottom: '24px', marginTop: '10px' }}>
                <input type="radio" id="html" name="fav_language" value="now" onClick={book}/>
                <label for="html"><Typography variant='h5'>Now</Typography></label>
              </Grid>
              <Grid md={0.5}></Grid>
              <Grid item md={5} sx={{ backgroundColor: '#ff9800d6', borderRadius: '40px', paddingBottom: '24px', marginTop: '10px' }}>
                <input type="radio" id="css" name="fav_language" value="later" onClick={book}/>
                <label for="css"><Typography variant='h5'>Schedule Later</Typography></label>
              </Grid>
              <Grid md={0.5}></Grid>
              <hr></hr>
              <Grid item md={0.8}></Grid>
              <Grid item md={5}>
                <input type='checkbox' value='baby' onClick={handlei}/>Baby Seat
              </Grid>
              <Grid item md={5}>
                <input type='checkbox' value='carrier' onClick={handlei}/>Carrier
              </Grid>
              <Grid item md={1.2}></Grid>
              <Grid item md={0.8}></Grid>
              <Grid item md={5}>
                <input type='checkbox' value='chair' onClick={handlei}/>Wheel Chair
              </Grid>
              <Grid item md={5}>
                <input type='checkbox' value='trunk' onClick={handlei}/>Trunk
              </Grid>
              <Grid item md={1.2}></Grid>
              <hr></hr>
              <Grid item md={0.8}></Grid>
              <Grid item md={11.2}>
                <TextField
                  id="outlined-multiline-static"
                  label="Additonal Information"
                  multiline
                  rows={2}
                  //placeholder='Enter text here...'
                  sx={{ width: '430px' }}
                  value={add}
                  onChange={handleadd}
                />
              </Grid>
              <br></br>
              <br></br>
              <Grid item md={0.8}></Grid>
              <Grid item md={4}>
              </Grid>
              <Button variant='filled' onClick={submit}>Submit</Button>
            </Grid>
          </Paper>

        </Grid>
        <Grid item md={4}></Grid>

      </Grid>

    </>
  )
}
