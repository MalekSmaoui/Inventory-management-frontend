
import React, { useState } from 'react';
// material-ui
import { Grid,Button,TextField } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';


// ===============================|| SHADOW BOX ||=============================== //




// ============================|| UTILITIES SHADOW ||============================ //

const UtilitiesShadow = () => {
  const [name, setName] = useState('');
  const [version, setVersion] = useState('');
  const [color, setColor] = useState('');
  const [year, setYear] = useState('');
  const [km, setKm] = useState('');
  const [carburant, setCarburant] = useState('');
  const [ref, setRef] = useState('');
  const [oe, setOe] = useState('');
  const [infoSupp, setInfoSupp] = useState('');
  const [prices, setPrices] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    // You can access the form values via the state variables
    console.log({
      name,
      version,
      color,
      year,
      km,
      carburant,
      ref,
      oe,
      infoSupp,
      prices
    });
  };


  return (
    <MainCard title="Add Piece">
        <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Version"
            variant="outlined"
            fullWidth
            value={version}
            onChange={(event) => setVersion(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Color"
            variant="outlined"
            fullWidth
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Year"
            variant="outlined"
            fullWidth
            value={year}
            onChange={(event) => setYear(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Km"
            variant="outlined"
            fullWidth
            value={km}
            onChange={(event) => setKm(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Carburant"
            variant="outlined"
            fullWidth
            value={carburant}
            onChange={(event) => setCarburant(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Ref"
            variant="outlined"
            fullWidth
            value={ref}
            onChange={(event) => setRef(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="OE"
            variant="outlined"
            fullWidth
            value={oe}
            onChange={(event) => setOe(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Info Supp"
            variant="outlined"
            fullWidth
            value={infoSupp}
            onChange={(event) => setInfoSupp(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Prices"
            variant="outlined"
            fullWidth
            value={prices}
            onChange={(event) => setPrices(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <input
            type="file"
            id="upload-images"
            accept="image/*"
            multiple
            style={{ display: 'none' }}
          />
          <label htmlFor="upload-images">
            <TextField
              variant="outlined"
              fullWidth
              value="Upload Images"
              disabled
              placeholder="Select images"
            />
          </label>
          <Button variant="contained" component="span">
            Browse
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
    </MainCard>
  );
  };

export default UtilitiesShadow;
