import { Container,
    ContainerIcon,
    Form, 
    InputBox, 
    ContainerInput, 
    ContainerIconInput } 
    from './styles';
import {SiReact} from  'react-icons/si';
import {BiUser, BiLock} from  'react-icons/bi';
import { Link } from 'react-router-dom';


const Login: React.FC = () => {
    return ( <Container> 
        <ContainerIcon>
        <SiReact size={70}/>
        </ContainerIcon>
        <Form>

        <ContainerInput>
            <InputBox>
                <ContainerIconInput>
                    <BiUser size={30} />
                </ContainerIconInput>
                <input placeholder="Login" />
            </InputBox>

            <InputBox>
                <ContainerIconInput>
                    <BiLock size={25} />
                </ContainerIconInput>
                <input type="password" placeholder="Password" />
            </InputBox>
        </ContainerInput>

        <Link to="">Esqueci a senha</Link>
        <button type="submit">Login</button>
    </Form>
    </Container>)
}

export default Login;