import React, { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getWeatherApi } from "./services/Api"

export default function App() {
  const [weatherinfo, setWeatherinfo] = useState([]);
  const [disabled, setDisable] = useState(true);
  const [searchText, setSearchText] = useState("");
  

  useEffect(() => {


  }, [])

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


  const onkeyPressChange = (event) => {

    setSearchText(event.target.value)
    setDisable(false);

  }

  const getWeather = async () => {

    try {
      const apidata = await getWeatherApi(searchText);
      console.log(apidata)  
      if(apidata?.error){
         throw apidata.error
      }else{
        const index = weatherinfo.findIndex((item) => item.name === apidata?.location?.name)
        if (index) {
          const data = [...weatherinfo, apidata.location];
          setWeatherinfo(data);
        } else {
          weatherinfo[index]=apidata.location;
        }
      }
    } catch (error) {

      console.log(error);
    }
    setSearchText("")
    setDisable(true);
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <TextField
              placeholder="Search…"
              value={searchText}
              onChange={onkeyPressChange}
              inputProps={{ 'aria-label': 'search' }}
            />

            <Button variant="contained" disabled={disabled} onClick={getWeather}>Get Weather</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {weatherinfo.map((item,key) =>
        <Card key={key} sx={{ minWidth: 275 }}>

          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {item.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">

            </Typography>
            <Typography variant="body2">
              Countary : {item.country}
            </Typography>

            <Typography variant="body2">
              region : {item.region}
            </Typography>
          </CardContent>
          <CardActions>
          <Button variant="outlined" >
        full information
      </Button>
          </CardActions>
        </Card>
      )}
      


    </div>
  )
}
