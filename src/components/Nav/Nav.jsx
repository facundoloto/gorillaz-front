import { Navbar, Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "nes.css/css/nes.min.css";
import "./Nav.css";
import Logo from './logo.png';

export function NavbarGorillaz() {
  return (
    <div class="Navbar-gorillaz">
  
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/exmember">Ex-Member</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/disks">Discography</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>

    </div>
  );
};