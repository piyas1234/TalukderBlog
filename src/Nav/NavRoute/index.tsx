import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function NavRoute() {
  const nav = [
    {
      id: 1,
      name: "home",
      route: "/",
      color: "white",
    },
    {
      id: 23,
      name: "Blog",
      route: "/blog",
      color: "white",
    },{
      id: 2,
      name: "LiveClass",
      route: "/class",
      color: "white",
    },
    {
      id: 3,
      name: "NCERT BOOKS",
      route: "/books",
      color: "white",
    },
    {
      id: 4,
      name: "Solutions",
      route: "/solution",
      color: "white",
    },
    {
      id: 5,
      name: "Vedio",
      route: "/vedio",
      color: "white",
    },
    {
      id: 6,
      name: "Admin",
      route: "/user",
      color: "white",
       
    },
{
      id: 6,
      name: "login",
      route: "/login",
      color: "white",
       
    },

{
      id: 7,
      name: "Install NoW",
      route: "/install",
      color: "white",
      backgroud: "bg-success",
    },



  ];
  const navbody = {
    backgroundColor: "#8000ff",
    boxShadow: "10px 10px 10px 10px #4d0066",
  };
  const navlink = {
    background: "#2B2B2B",
    boxShadow: "3px 3px 3px 3px  #4d0066",
    color: "white",
    fontWight: "bold",
    padding: "10px",
    marginLeft: "30px",
    border: "1px double transparent",
    borderColor: "white",
  };
  return (
    <div>
      <Navbar style={navbody} expand="lg">
        <Navbar.Brand style={navlink}>Talukder Blog </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ml-auto my-2">
            {nav &&
              nav.map((item) => (
                <NavLink
                  style={navlink}
                  exact
                  to={item.route}
                  className={"rounded" + " " + item.backgroud}
                  activeClassName="bg-info"
                >
                  {item.name}
                </NavLink>
              ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavRoute;
