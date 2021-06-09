import logo from './logo.svg';
import './App.css';
import list from "./List";
import React from "react";
import { Navbar,Container,Card,Row,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List';
import { Button } from '@material-ui/core';

const Fun = (val) => {
  return(
    <>


<div className="css">

    <Card style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body style={{padding:10}}>
      <Card.Title className="title" style={{fontSize: 18,fontFamily:'sans', fontWeight: 'bold'}}>{val.name}</Card.Title>
      {/* <Card.Text> */}
     <iframe width="200" height="150" src="//ok.ru/videoembed/2337458883267" frameborder="0" allow="autoplay" allowfullscreen="true"></iframe>
      {/* </Card.Text> */}
      {/* <Button className="btn">Go somewhere</Button> */}
      <Button variant="outlined" href={val.link} style={{marginLeft: 45, height: 30}} className="btn">
  Download
</Button>
    </Card.Body>
  </Card>
</div>
   




    </>
  )

}



function App() {
  return (
    <>
      <Navbar className="nav" fixed="top" expand="lg" variant="light" bg="light">
  <Container>
    <Navbar.Brand href="#" >Kurulus Osman</Navbar.Brand>
  </Container>
</Navbar>
{List.map(Fun)}
    </>
  );
}

export default App;
