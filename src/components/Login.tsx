import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [login, setLogin] = useState('')
    const [room, setRoom] = useState('')
    const navigate = useNavigate()
    console.log(login)
    return (
        <Container>
            <Form>
                <Wrapper>
                    <Name>Имя</Name>
                    <LoginInput value={login} onChange={e => setLogin(e.target.value)} />
                </Wrapper>
                <Wrapper>
                    <Name>Комната</Name>
                    <LoginInput value={room} onChange={e => setRoom(e.target.value)} />
                </Wrapper>
                <button onClick={() => navigate(`/chat/${room}`, { state: {login}} )}>Войти</button>
            </Form>
        </Container>
    );
};

export default Login;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Form = styled.div`
    margin-top: 10%;
    padding: 40px 20px 40px 20px;
    width: 400px;
    height: 150px;
    background-color: #F0F4FA;
    border-radius: 25px;
`

const Wrapper = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`

const Name = styled.div`
    font-weight: 500;
    font-size: 22px;
`

const LoginInput = styled.input`
    width: 200px;
    height: 30px;
`