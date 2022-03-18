import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

function Map () {

  const mapStyle = {
    height: "50vh",
    width: "100%"
  }

  const defaultCenter = {
    lat: 19.4215269, lng: -99.4842548
  }

  return(
    <LoadScript googleMapsApiKey="AIzaSyAXXlRY-hL5BKDmSnFfD8_IfAktVCSmOG8">
      <GoogleMap
        mapContainerStyle={mapStyle}
        zoom={9}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export { Map }