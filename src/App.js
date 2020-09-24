import React from "react";
//import logo from './logo.svg';
import Producto from "./Componentes/Producto";
import "./App.css";
import { Container, Row } from "reactstrap";

function App() {
  return (
    <Container>
      <Row>
        <Producto
          titulo="NoteBook HP Pavillon Game SSD 256"
          imagen="https://www.pngitem.com/pimgs/m/46-466187_download-for-free-laptops-png-picture-imagens-de.png"
          descripcion="Para los que juegan de todo y hacen de Todo."
          precio="699.990"
        />
        <Producto
          titulo="Nintendo Switch"
          imagen="https://images-na.ssl-images-amazon.com/images/I/71ivrWiYkLL._AC_.jpg"
          descripcion="Consola Nintendo Switch Black"
          precio="229.000"
        />
        <Producto
          titulo="Consola SONY PS4"
          imagen="https://estaticos.elperiodico.com/resources/jpg/9/8/playstation-sony-1370947347089.jpg"
          descripcion="Consola PS4 SLIM 500GB "
          precio="199.990"
        />
        <Producto
          titulo="Consola XBOX ONE"
          imagen="https://compass-ssl.xbox.com/assets/dd/2e/dd2ef163-a130-403a-a394-a5b11c1533c8.jpg?n=Xbox-Family_Image-0_X1S-1111_496x279.jpg"
          descripcion="Consola Xbox One solo juegos digitales "
          precio="229.000"
        />
        <Producto
          titulo="Consola New Nintendo 2DS"
          imagen="https://http2.mlstatic.com/nintendo-2ds-xl-black-and-turquoise-nuevo-D_NQ_NP_615117-MLM27995821063_082018-F.jpg"
          descripcion="2DS XL Black Turqoise"
          precio="129.990"
        />
      </Row>
    </Container>
  );
}

export default App;
