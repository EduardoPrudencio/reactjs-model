import {useState, useEffect} from 'react';
import { Container,
    ContainerIcon,
    Form, 
    InputBox, 
    ContainerInput, 
    ContainerIconInput,
    ButtonForgotPassWord 
} 
    from './styles';
import {SiReact} from  'react-icons/si';
import {BiUser, BiLock} from  'react-icons/bi';


const Login: React.FC = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem('@EstudoReactNative:login', login);
        localStorage.setItem('@EstudoReactNative:password', password);
        console.log('Login e senha ',login,' ', password)
    };

    useEffect (() => {
        const loginStoage = localStorage.getItem('@EstudoReactNative:login');
        const passwordStorage = localStorage.getItem('@EstudoReactNative:password');

        if (loginStoage !== null && passwordStorage !== null) {
            setLogin(loginStoage);
            setPassword(passwordStorage);
        }

    },[])

    return ( <Container> 
        <ContainerIcon>
        <SiReact size={70}/>
        </ContainerIcon>
        <Form onSubmit={handleFormSubmit}>

        <ContainerInput>
            <InputBox>
                <ContainerIconInput>
                    <BiUser size={30} />
                </ContainerIconInput>

                <input placeholder="Login" 
                value={login}
                onChange={e => setLogin(e.target.value)}
                />

            </InputBox>

            <InputBox>
                <ContainerIconInput>
                    <BiLock size={25} />
                </ContainerIconInput>

                <input type="password" placeholder="Password"
                value={password}
                onChange = {e => setPassword(e.target.value)} />

            </InputBox>

        </ContainerInput>

        <button type="submit">Entrar</button>
    </Form>
    <ButtonForgotPassWord>
        Esqueci a senha
    </ButtonForgotPassWord>
    </Container>)
}

export default Login;