import {useState, useEffect} from 'react';
import { Container,
    ContainerIcon,
    Form, 
    InputBox, 
    ContainerInput, 
    ContainerIconInput,
    ButtonForgotPassWord,
} 
    from './styles';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {SiReact} from  'react-icons/si';
import {BiUser, BiLock} from  'react-icons/bi';


const Login: React.FC = () => {

    const saveAccessDataSaved = localStorage.getItem('@EstudoReactNative:saveData') !== null  && 
    localStorage.getItem('@EstudoReactNative:saveData') === 'true';

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [saveAccessData, setSaveAccessData] = useState(saveAccessDataSaved);


    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(saveAccessData) {
            localStorage.setItem('@EstudoReactNative:login', login);
            localStorage.setItem('@EstudoReactNative:password', password);
            localStorage.setItem('@EstudoReactNative:saveData', saveAccessData.toString());
        }

        if (!saveAccessData){
            localStorage.removeItem('@EstudoReactNative:login');
            localStorage.removeItem('@EstudoReactNative:password');
        }
    };

    useEffect (() => {
        const loginStoage = localStorage.getItem('@EstudoReactNative:login');
        const passwordStorage = localStorage.getItem('@EstudoReactNative:password');

        if (saveAccessData && loginStoage !== null && passwordStorage !== null) {
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

        <FormControlLabel
                control={<Checkbox
                color="primary"
                checked={saveAccessData}
                onChange={() => setSaveAccessData(!saveAccessData)}
                />}
               
                label="Salvar login e senha"
          />

        <button type="submit">Entrar</button>
    </Form>
    <ButtonForgotPassWord>
        Esqueci a senha
    </ButtonForgotPassWord>
    </Container>)
}

export default Login;