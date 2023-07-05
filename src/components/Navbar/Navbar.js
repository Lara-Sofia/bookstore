
import './Navbar.css';
import { Button, Col, Row, Spinner } from "react-bootstrap";
import ToggleTheme from "../ui/ToggleTheme";
import { useAuth } from '../services/authentication/authentication.context';

const Navbar = () => {

    const { user, logout, isLoading } = useAuth();
    const userName = user.email.split("@")[0];
    if (isLoading) return <Spinner />
  

    const handleLogout = async() => {
        await logout();
      };

    return (
     <div className='navbar'>
            <h1>BIBLIOTECA UTN</h1>                  
      <Row className="me-2 my-4">
        <Col>
          <h4 className="text-left m-3">Hola {userName}</h4>
        </Col>
        <Col md={3} className="d-flex justify-content-end">
          <ToggleTheme />
          <Button className="ms-4" variant="primary" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </Col>
      </Row>
        </div>
    );
};

export default Navbar;

