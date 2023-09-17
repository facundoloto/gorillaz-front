import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "nes.css/css/nes.min.css";
import "./Nav.css";
import Logo from './logo.png';

export function NavbarGorillaz() {
  const navigate = useNavigate();
  // const changeRoute = async (route) => {
  //   return navigate(route)
  // };

  return (
    <div className="Navbar-gorillaz">

      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <button onClick={() => navigate('/')}>Home</button>
        </Nav.Item>
        <Nav.Item>
          <button onClick={() => navigate('/exmember')}>Ex-Member</button>
        </Nav.Item>
        <Nav.Item>
          <button onClick={() => navigate('/disk')}>disk</button>
        </Nav.Item>
      </Nav>

    </div>
  );
};
