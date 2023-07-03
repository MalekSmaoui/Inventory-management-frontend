import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ===============================|| COLOR BOX ||=============================== //

const ColorBox = ({ bgcolor, title, data, dark }) => (
  <>
    <Card sx={{ mb: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 4.5,
          bgcolor,
          color: dark ? 'grey.800' : '#ffffff'
        }}
      >
        {title && (
          <Typography variant="subtitle1" color="inherit">
            {title}
          </Typography>
        )}
        {!title && <Box sx={{ p: 1.15 }} />}
      </Box>
    </Card>
    {data && (
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="subtitle2">{data.label}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
            {data.color}
          </Typography>
        </Grid>
      </Grid>
    )}
  </>
);

ColorBox.propTypes = {
  bgcolor: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.object.isRequired,
  dark: PropTypes.bool
};

// ===============================|| UI COLOR ||=============================== //

const UIColor = () => (
  <MainCard title="Categories">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <SubCard title="Primary Color">
          <Grid container spacing={gridSpacing}>

          </Grid>
        </SubCard>
      </Grid>
      <Grid item xs={12}>
        <SubCard title="Secondary Color">
          <Grid container spacing={gridSpacing}>

          </Grid>
        </SubCard>
      </Grid>
      <Grid item xs={12}>
        <SubCard title="Success Color">
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="success.light" data={{ label: 'Green-A100', color: '#b9f6ca' }} title="success.light" dark />
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
      
    </Grid>
  </MainCard>
);

export default UIColor;
