import React, {Component} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import logo from '../logo.svg';
import {Route, Switch, HashRouter} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand={"lg"} bg={"dark"} variant={"dark"}>
          <Container>
            <Navbar.Brand href={"/reactjs-tutorial/#/"}>
              <img
                src={logo}
                height={30}
                width={30}
                className={"d-inline-block align-top"}
                alt={"Logo"}
              /> ReactJS
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={"responsive-navbar-nav"}/>
            <Navbar.Collapse id={"responsive-navbar-nav"}>
              <Nav className={"mr-auto"}>
                <Nav.Link href={"/reactjs-tutorial/#/"}> Home </Nav.Link>
                <Nav.Link href={"/reactjs-tutorial/#/about"}> About us </Nav.Link>
                <Nav.Link href={"/reactjs-tutorial/#/contacts"}> Contacts </Nav.Link>
                <Nav.Link href={"/reactjs-tutorial/#/blog"}> Blog </Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type={"text"}
                  placeholder={"Search"}
                  className={"mr-sm-2"}
                />
                <Button variant={"outline-info"}>Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <HashRouter basename={"reactjs-tutorial/#/"}>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/contacts"} component={Contacts} />
            <Route exact path={"/blog"} component={Blog} />
          </Switch>
        </HashRouter>
      </>
    );
  }
}

export default Header;