import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid } from '@mui/material';

import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";


// project imports

import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ===============================|| SHADOW BOX ||=============================== //

const ShadowBox = ({ shadow }) => (
  <Card sx={{ mb: 3, boxShadow: shadow }}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4.5,
        bgcolor: 'primary.light',
        color: 'grey.800'
      }}
    >
      <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
    </Box>
  </Card>
);

ShadowBox.propTypes = {
  shadow: PropTypes.string.isRequired
};

// ============================|| UTILITIES SHADOW ||============================ //

const UtilitiesShadow = () => (
  
  <MainCard title="Pieces List">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
      <MDBContainer fluid>
      <MDBRow className="justify-content-center mb-0">
        <MDBCol md="12" xl="10">
          <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6">
                  <h5>Quant trident shirts</h5>
                  <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                    </div>
                    <span>310</span>
                  </div>
                  <div className="mt-1 mb-0 text-muted small">
                    <span>100% cotton</span>
                    <span className="text-primary"> • </span>
                    <span>Light weight</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Best finish
                      <br />
                    </span>
                  </div>
                  <div className="mb-2 text-muted small">
                    <span>Unique design</span>
                    <span className="text-primary"> • </span>
                    <span>For men</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Casual
                      <br />
                    </span>
                  </div>
                  <p className="text-truncate mb-4 mb-md-0">
                    There are many variations of passages of Lorem Ipsum
                  </p>
                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">$13.99</h4>
                    <span className="text-danger">
                      <s>$20.99</s>
                    </span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color="primary" size="sm">
                      Details
                    </MDBBtn>
                    <MDBBtn outline color="primary" size="sm" className="mt-2">
                      Add to wish list
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className="justify-content-center mb-3">
        <MDBCol md="12" xl="10">
          <MDBCard className="shadow-0 border rounded-3">
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp"
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6">
                  <h5>Quant olap shirts</h5>
                  <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                    </div>
                    <span>289</span>
                  </div>
                  <div className="mt-1 mb-0 text-muted small">
                    <span>100% cotton</span>
                    <span className="text-primary"> • </span>
                    <span>Light weight</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Best finish
                      <br />
                    </span>
                  </div>
                  <div className="mb-2 text-muted small">
                    <span>Unique design</span>
                    <span className="text-primary"> • </span>
                    <span>For men</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Casual
                      <br />
                    </span>
                  </div>
                  <p className="text-truncate mb-4 mb-md-0">
                    There are many variations of passages of Lorem Ipsum
                  </p>
                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">$14.99</h4>
                    <span className="text-danger">
                      <s>$21.99</s>
                    </span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color="primary" size="sm">
                      Details
                    </MDBBtn>
                    <MDBBtn outline color="primary" size="sm" className="mt-2">
                      Add to wish list
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className="justify-content-center mb-3">
        <MDBCol md="12" xl="10">
          <MDBCard className="shadow-0 border rounded-3">
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp"
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6">
                  <h5>Quant ruybi shirts</h5>
                  <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                    </div>
                    <span>145</span>
                  </div>
                  <div className="mt-1 mb-0 text-muted small">
                    <span>100% cotton</span>
                    <span className="text-primary"> • </span>
                    <span>Light weight</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Best finish
                      <br />
                    </span>
                  </div>
                  <div className="mb-2 text-muted small">
                    <span>Unique design</span>
                    <span className="text-primary"> • </span>
                    <span>For women</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Casual
                      <br />
                    </span>
                  </div>
                  <p className="text-truncate mb-4 mb-md-0">
                    There are many variations of passages of Lorem Ipsum
                  </p>
                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">$17.99</h4>
                    <span className="text-danger">
                      <s>$25.99</s>
                    </span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color="primary" size="sm">
                      Details
                    </MDBBtn>
                    <MDBBtn outline color="primary" size="sm" className="mt-2">
                      Add to wish list
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      </Grid>
    </Grid>
  </MainCard>
);

export default UtilitiesShadow;









