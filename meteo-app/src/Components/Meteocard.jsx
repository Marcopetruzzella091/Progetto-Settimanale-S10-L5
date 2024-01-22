

import React from "react";
import {
    MDBCard,
    
    MDBCol,
    MDBContainer,
    
    MDBRow, MDBTypography, MDBCardImage
} from "mdb-react-ui-kit";






export default function Meteocard({selectcomune, meteoparams}) {
 



  


    return (<>
         {selectcomune && <section className="vh-100" style={{ backgroundColor: "#C1CFEA" }}>
        <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="10" lg="8" xl="6">
            <MDBCard
              className="bg-dark text-white"
              style={{ borderRadius: "40px" }}
            >
              <div className="bg-image" style={{ borderRadius: "35px" }}>
                <MDBCardImage
                  src="/hot.webp"
                  className="card-img"
                  alt="weather"
                />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}
                ></div>
              </div>
              <div className="card-img-overlay text-dark p-5">
                <MDBTypography tag="h4" className="mb-0"><h1>{ selectcomune.nome}</h1>
                 <span>{selectcomune.cap + " " +  selectcomune.provincia.nome}</span></MDBTypography>
                <p className="display-2 my-3">{ (Math.floor(meteoparams.main.temp - 273.15)) }°C</p>
                <p className="mb-2">
                 Temperatura minima: <strong>{ (Math.floor(meteoparams.main.temp_min - 273.15))}°C</strong>
                </p>
                <p className="mb-2">
                  temperatura massima: <strong>{ (Math.floor(meteoparams.main.temp_max - 273.15))}°C</strong>
                </p>
                
                <MDBTypography tag="h5">Pressione : <strong>{ meteoparams.main.pressure}</strong></MDBTypography>
                <MDBTypography tag="h5">Umidità: <strong>{meteoparams.main.humidity}%</strong></MDBTypography>
                <MDBTypography tag="h5">Situazione meteorologica : <strong>{meteoparams.weather[0].description}</strong></MDBTypography>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
        </section>}
      
        
        
        
        
        
        </>
    )
}
 