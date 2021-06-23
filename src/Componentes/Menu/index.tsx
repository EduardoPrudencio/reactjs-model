import { Link } from 'react-router-dom'; 
import { Container } from './styles';

const Menu: React.FC = () => {
    return ( <Container>
        <Link to="/Home">Home</Link>
        <Link to="/Details">Details</Link>
    </Container>)
}

export default Menu;