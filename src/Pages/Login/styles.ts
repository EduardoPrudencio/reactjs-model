import styled from 'styled-components';
import { shade } from 'polished';

const mainColor = '#3498DB';

export const Container = styled.div`
    margin: 0 auto;
    background-color: #FFF;
    border-radius: 10px;
    flex-direction: column;
    max-width: 300px;
    padding: 10px 10px;
`;

export const ContainerIcon = styled.div`
    margin: 0 auto;
    width: 72px;
    align-items: center;

    svg {
        margin-left: auto;
        color: ${mainColor};
        align-self: center;
    }
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
    border-color: ${mainColor};
    border-width: 1px;
    border-style: solid;
    border-radius: 15px;
    width: 100%;
    height: 45px;
    padding-top: 5px;
    margin-top: 10px;
`;

export const ContainerInput = styled.div`
    margin-top: 10px;
    margin-bottom: -40px;
`;

export const ContainerIconInput = styled.div`
    width: 35px; 
    height: 35px;   
    
    svg {
        color: ${mainColor};
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px;
    input {
        height: 20px;
        width: 80%;
        border: 0;
        margin-top: -5px;;
        
        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 100%;
        height: 45px;
        margin-top: 20px;
        border: 0;
        border-radius: 10px;
        color: #FFF;
        background-color: ${mainColor};
        transition: background-color 0.2s;

        &:hover {
            background-color: ${shade(0.2, mainColor)};
        }
    }

    a {
        text-decoration: none;
        color:  ${mainColor};
        font-size: 12px;;
    }
`;