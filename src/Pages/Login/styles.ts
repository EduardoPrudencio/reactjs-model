import styled from 'styled-components';
import { shade } from 'polished';

export const Form = styled.form`
    margin: 0 auto;
    background-color: #FFF;
    max-width: 300px;
    height: 400px;
    padding: 10px 10px;

    input {
        height: 40px;
        width: 100%;
        margin-top: 10px;
        padding: 0 10px;
        border-width: 1px;
        border-radius: 5px;
    }

    button {
        width: 100%;
        height: 40px;
        margin-top: 20px;
        border: 0;
        border-radius: 5px;
        color: #FFF;
        background-color: #3498DB;

        &:hover {
            background-color: ${shade(0.2, '#3498DB')};
        }
    }
`;