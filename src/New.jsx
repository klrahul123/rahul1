import * as React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './toy.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Python from './Python';
import Home from './Home';
import { ButtonGroup } from 'react-bootstrap';
import C from './C';
import Cplus from './Cplus';
import Java from './Java';
import Other from './Other';
import Error from './Error';
import Loginx from './Loginx';
import Signup from './Signup';
import Help from './Help';
import { BsChevronDoubleRight } from "react-icons/bs";
import {Container ,Offcanvas,Nav, Navbar } from 'react-bootstrap';
import LoginIcon from '@mui/icons-material/Login';
import HelpIcon from '@mui/icons-material/Help';
import CodeIcon from '@mui/icons-material/Code';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import HomeIcon from '@mui/icons-material/Home';

export default function New(){
    return(
        <div>
       <Navbar bg="light" expand={false}>
  <Container fluid>
     <h2 className="mami"> <BsChevronDoubleRight/>CODING HUB </h2>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end">
    <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"> <h3 className="mami">Menu</h3></Offcanvas.Title>
      </Offcanvas.Header>
      <hr /> <hr />
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3"> 
          <Nav.Link href="/"><h6 className="mamir"><HomeIcon/> Home</h6></Nav.Link>
          <Nav.Link href="/java"><h6 className="mamir"><CodeIcon/> Java</h6></Nav.Link>
          <Nav.Link href="/c"><h6 className="mamir"><CodeIcon/> C</h6></Nav.Link>
          <Nav.Link href="/c++"><h6 className="mamir"><CodeIcon/> C++</h6></Nav.Link>
          <Nav.Link href="/python"><h6 className="mamir"><CodeIcon/> Pyhton</h6></Nav.Link>
          <Nav.Link href="/login"><h6 className="mamir"><LoginIcon/> Login</h6></Nav.Link>
          <Nav.Link href="/signup"> <h6 className="mamir"><AppRegistrationRoundedIcon/> Sign-Up</h6></Nav.Link>
          <Nav.Link href="/help"> <h6 className="mamir"><HelpIcon/> Help</h6></Nav.Link>

        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>

      <Router>
      <div> 
        <div className="spe">
      <ButtonGroup className="mb-2" size="lg">
      <Link className="wele" to="/">Home</Link>
      <Link className="wele" to="/c">C</Link>
      <Link className="wele" to="/java">Java</Link>
      <Link className="wele" to="/c++">C++</Link>
      <Link className="wele" to="/python">Python</Link>
      <Link className="wele" to="/help">Help</Link>
      <Link className="weq" to="/login">Login</Link>
      <Link className="wele" to="/signup">Sign Up</Link>
      </ButtonGroup>
      </div>
        <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>
          <Route exact path="/help">
            <Help/>
          </Route>

          <Route exact path="/login">
             <Loginx/>
          </Route>
          <Route exact path="/signup">
              <Signup/>
          </Route>

          <Route exact path="/c">
            <C/>
            </Route>
            <Route exact path="/c++">
            <Cplus/>
            </Route>
          <Route path="/java">
            <Java/>
          </Route>
          
          <Route path="/python">
            <Python/>
          </Route>
          <Route path="/other">
            <Other/>
          </Route>
          <Route path="/*">
            <Error/>
          </Route>
        </Switch>
      </div>
     </Router>
    </div>
    );  
 }
