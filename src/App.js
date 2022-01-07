 
import logo from './logo.svg';
import './App.css';
// import list from "./List";
import React from "react";
import { Navbar,Container,Card,Row,Col, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {List,KU_S1,KU_S3,ER_S1,ER_S2,ER_S3,ER_S4,ER_S5} from './List';
import { Button } from '@material-ui/core';

const Fun = (val) => {
  return(
    <>


<div className="css1">
    <Card style={{ width: '18rem',backgroundColor:"#ecf0f1",border:"none" }}>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body style={{padding:10}}>
      <Card.Title className="title" style={{fontSize: 18,fontFamily:'sans', fontWeight: 'bold'}}>{val.name}</Card.Title>
      {/* <Card.Text> */}
     <iframe width="200" height="150" src={val.src} frameborder="0" allow="autoplay" allowfullscreen="true"></iframe>
      {/* </Card.Text> */}
      {/* <Button className="btn">Go somewhere</Button> */}
      <Button variant="outlined" href={val.link} style={{marginLeft: '2rem', height: 30}} className="btn">
  Download
</Button>
    </Card.Body>
  </Card>

</div>
    </>
  )

}

const Fun1 = (val) => {
  return(
    <>


<div className="css1" >
    <Card style={{ width: '18rem',backgroundColor:"#ecf0f1",border:"none" }}>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body style={{padding:10}}>
      <Card.Title className="title" style={{fontSize: 18,fontFamily:'sans', fontWeight: 'bold'}}>{val.name}</Card.Title>
      {/* <Card.Text> */}
     <iframe width="200" height="150" src={val.src} frameborder="0" allow="autoplay" allowfullscreen="true"></iframe>
      {/* </Card.Text> */}
      {/* <Button className="btn">Go somewhere</Button> */}
      <Button variant="outlined" href={val.link} style={{marginLeft: '2rem', height: 30}} className="btn">
  Download
</Button>
    </Card.Body>
  </Card>

</div>
    </>
  )

}

const Fun2 = (val) => {
  return(
    <>


<div className="css1" >
    <Card style={{ width: '18rem',backgroundColor:"#ecf0f1",border:"none" }}>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body style={{padding:10}}>
      <Card.Title className="title" style={{fontSize: 18,fontFamily:'sans', fontWeight: 'bold'}}>{val.name}</Card.Title>
      {/* <Card.Text> */}
     <iframe width="200" height="150" src={val.src} frameborder="0" allow="autoplay" allowfullscreen="true"></iframe>


      {/* </Card.Text> */}
      {/* <Button className="btn">Go somewhere</Button> */}
      <Button variant="outlined" href={val.link} style={{marginLeft: '2rem', height: 30}} className="btn">
  Download
</Button>
    </Card.Body>
  </Card>

</div>
    </>
  )

}

const Fun3 = (val) => {
  return(
    <>


<div className="css1" >
    <Card style={{ width: '18rem',backgroundColor:"#ecf0f1",border:"none" }}>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body style={{padding:10}}>
      <Card.Title className="title" style={{fontSize: 18,fontFamily:'sans', fontWeight: 'bold'}}>{val.name}</Card.Title>
      {/* <Card.Text> */}
     <iframe width="200" height="150" src={val.src} frameborder="0" allow="autoplay" allowfullscreen="true"></iframe>
      {/* </Card.Text> */}
      {/* <Button className="btn">Go somewhere</Button> */}
      <Button variant="outlined" href={val.link} style={{marginLeft: '2rem', height: 30}} className="btn">
  Download
</Button>
    </Card.Body>
  </Card>

</div>
    </>
  )

}

const Fun4 = (val) => {
  return(
    <>


<div className="css1" >
    <Card style={{ width: '18rem',backgroundColor:"#ecf0f1",border:"none" }}>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body style={{padding:10}}>
      <Card.Title className="title" style={{fontSize: 18,fontFamily:'sans', fontWeight: 'bold'}}>{val.name}</Card.Title>
      {/* <Card.Text> */}
     <iframe width="200" height="150" src={val.src} frameborder="0" allow="autoplay" allowfullscreen="true"></iframe>
      {/* </Card.Text> */}
      {/* <Button className="btn">Go somewhere</Button> */}
      <Button variant="outlined" href={val.link} style={{marginLeft: '2rem', height: 30}} className="btn">
  Download
</Button>
    </Card.Body>
  </Card>

</div>
    </>
  )

}

const Fun5 = (val) => {
  return(
    <>


<div className="css1" >
    <Card style={{ width: '18rem',backgroundColor:"#ecf0f1",border:"none" }}>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body style={{padding:10}}>
      <Card.Title className="title" style={{fontSize: 18,fontFamily:'sans', fontWeight: 'bold'}}>{val.name}</Card.Title>
      {/* <Card.Text> */}
     <iframe width="200" height="150" src={val.src} frameborder="0" allow="autoplay" allowfullscreen="true"></iframe>
      {/* </Card.Text> */}
      {/* <Button className="btn">Go somewhere</Button> */}
      <Button variant="outlined" href={val.link} style={{marginLeft: '2rem', height: 30}} className="btn">
  Download
</Button>
    </Card.Body>
  </Card>

</div>
    </>
  )

}

const Fun6 = (val) => {
  return(
    <>


<div className="css1" >
    <Card style={{ width: '18rem',backgroundColor:"#ecf0f1",border:"none" }}>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body style={{padding:10}}>
      <Card.Title className="title" style={{fontSize: 18,fontFamily:'sans', fontWeight: 'bold'}}>{val.name}</Card.Title>
      {/* <Card.Text> */}
     <iframe width="200" height="150" src={val.src} frameborder="0" allow="autoplay" allowfullscreen="true"></iframe>
      {/* </Card.Text> */}
      {/* <Button className="btn">Go somewhere</Button> */}
      <Button variant="outlined" href={val.link} style={{marginLeft: '2rem', height: 30}} className="btn">
  Download
</Button>
    </Card.Body>
  </Card>

</div>


    </>
  )

}

const Fun7 = (val) => {
  return(
    <>


<div className="css1" >
    <Card style={{ width: '18rem',backgroundColor:"#ecf0f1",border:"none" }}>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body style={{padding:10}}>
      <Card.Title className="title" style={{fontSize: 18,fontFamily:'sans', fontWeight: 'bold'}}>{val.name}</Card.Title>
      {/* <Card.Text> */}
     <iframe width="200" height="150" src={val.src} frameborder="0" allow="autoplay" allowfullscreen="true"></iframe>
      {/* </Card.Text> */}
      {/* <Button className="btn">Go somewhere</Button> */}
      <Button variant="outlined" href={val.link} style={{marginLeft: '2rem', height: 30}} className="btn">
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
      <Navbar className="nav" fixed="top" expand="lg" >
  <Container>
    <Navbar.Brand href="#" ><h4><b>Ottomon Empire</b></h4></Navbar.Brand>
  </Container>
  <Dropdown>
  <Dropdown.Toggle className="drp1" variant="secondary" style = {{backgroundColor: "#bdc3c7",color: 'black'}} id="dropdown-basic">
    Ertugrul Ghazi
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#er_s1">Season 1</Dropdown.Item>
    <Dropdown.Item href="#er_s2">Season 2</Dropdown.Item>
    <Dropdown.Item href="#er_s3">Season 3</Dropdown.Item>
    <Dropdown.Item href="#er_s4">Season 4</Dropdown.Item>
    <Dropdown.Item href="#er_s5">Season 5</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Dropdown style={{marginRight: 20, marginLeft: 20}}>
  <Dropdown.Toggle className="drp1" variant="secondary" style = {{backgroundColor: "#bdc3c7",color: 'black'}} id="dropdown-basic">
    Kurulus Osman
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#ku_s1">Season 1</Dropdown.Item>
    <Dropdown.Item href="#ku_s2">Season 2</Dropdown.Item>
    <Dropdown.Item href="#ku_s3">Season 3</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


</Navbar>

<h4 id="ku_s3" style = {{marginTop: 60,marginBottom: 0, textAlign: 'center'}}>Kurulus Osman Season 3</h4>
{KU_S3.map(Fun7)} 

<h4 id="ku_s2" className="Head"  style={{textAlign: 'center'}}>Kurulus Osman Season 2</h4>
{List.map(Fun)}

<h4 id="ku_s1" style = {{marginTop: 60,marginBottom: 0, textAlign: 'center'}}>Kurulus Osman Season 1</h4>
{KU_S1.map(Fun1)}
<h4 id="er_s1" style = {{marginTop: 60,marginBottom: 0, textAlign: 'center'}}>Ertugrul Ghazi Season 1</h4>
{ER_S1.map(Fun2)}
<h4 id="er_s2" style = {{marginTop: 60,marginBottom: 0, textAlign: 'center'}}>Ertugrul Ghazi Season 2</h4>
{ER_S2.map(Fun3)}
<h4 id="er_s3" style = {{marginTop: 60,marginBottom: 0, textAlign: 'center'}}>Ertugrul Ghazi Season 3</h4>
{ER_S3.map(Fun4)}
<h4 id="er_s4" style = {{marginTop: 60,marginBottom: 0, textAlign: 'center'}}>Ertugrul Ghazi Season 4</h4>
{ER_S4.map(Fun5)}
<h4 id="er_s5" style = {{marginTop: 60,marginBottom: 0, textAlign: 'center'}}>Ertugrul Ghazi Season 5</h4>
{ER_S5.map(Fun6)}

    </>
  );
}

export default App;
