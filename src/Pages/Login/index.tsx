import { Form } from './styles';

const Login: React.FC = () => {
    return ( <Form >
        <input placeholder="Login" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
    </Form>)
}

export default Login;