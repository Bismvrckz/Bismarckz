import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Button1 } from "../Button/index";

function Navigation() {
  return (
    <Navbar color="info" dark expand="md">
      <NavbarBrand className="text-light" tag={Link} to="/">
        TokoMarket
      </NavbarBrand>
      <Nav className="d-flex" navbar>
        <Button tag={Link} className="mx-1" to="/Login">
          Login
        </Button>
        <Button tag={Link} className="mx-1" to="/register">
          Register
        </Button>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
