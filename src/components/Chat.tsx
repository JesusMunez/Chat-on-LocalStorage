import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import LinkClip from '../img/LinkClip.png'
import Smiley from '../img/Smiley.png'

const Chat = () => {
    const { room } = useParams()
    const location = useLocation()
    // console.log(location)
    const data: any = localStorage.getItem(`${room}`)
    const dataPars = JSON.parse(data)
    const [value, setValue] = useState('')
    const [chat, setChat] = useState<any[]>(dataPars || [])
    console.log(dataPars)
    // const messages: any[] = []
    const [messages, setMessages] :any[] = useState(dataPars || [])
    const sendMessage = () => {
        if (value !== '') {
            messages.push({
                id: Date.now(),
                name: location.state.login,
                date: new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"}),
                text: value
            })
            localStorage.setItem(`${room}`, JSON.stringify(messages))
            const x: any = localStorage.getItem(`${room}`)
            const ch = JSON.parse(x)
            setChat(ch)
        }        
    }
    console.log(chat)
    return (
        <>
            <ChatName>Room: {room} </ChatName>
            <div>
                Chat
            </div>
            <ChatArea>
                {chat.map(item => 
                    location.state.login === item.name ? 
                    <div key={item.id}>
                        {item.date} {item.name}
                        <MyMessage>
                            {item.text}
                        </MyMessage>
                    </div>
                    :
                    <div key={item.id}>
                        {item.date} {item.name}
                        <TheirMessage>
                            {item.text}
                        </TheirMessage>
                    </div>)}
            </ChatArea>
            <BottomContainer>
                <InputContainer>
                    <img src={LinkClip} alt='clip' width='32px' height='32px'/>
                    <InputMessage value={value} onChange={e => setValue(e.target.value)} placeholder="Написать сообщение..." />
                    
                    <img src={Smiley} alt='smiley' width='32px' height='32px'/>
                </InputContainer>
                {/* <InputMessage value={value} onChange={e => setValue(e.target.value)} placeholder="Написать сообщение..." />
                <img src={LinkClip} alt='clip' />
                <img src={Smiley} alt='clip' /> */}
                <BtnSend onClick={sendMessage} >Отправить</BtnSend>
            </BottomContainer>
        </>
    );
};

export default Chat;

const ChatName = styled.div`
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
`

const ChatArea = styled.div`
    width: 100%;
    height: 80vh;
    overflow-y: auto;
    background: #F0F4FA;
`

const BottomContainer = styled.div`
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const InputMessage = styled.input`
    
    width: 85%;
    height: 50px;
    background: #EAF2FE;
    border: none;
    border-radius: 10px;
    /* padding-left: 10px; */
    font-size: 16px;    
    &:focus {
        outline: none;
    }
    ::placeholder{
        color: #709CE6;
    }
`

const BtnSend = styled.button`
    padding: 16px 18px;
    border-radius: 10px;
    border: none;
    background: #5B96F7;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
`

const MyMessage = styled.div`
    margin-top: 10px;
    margin-left: auto;
    margin-right: 10px;
    width: 10%;
    padding: 13px 20px 13px 20px;
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
    background: #5B96F7;
    border-radius: 16px;
`

const TheirMessage = styled.div`
    margin-top: 10px;
    margin-left: 10px;
    width: 10%;
    padding: 13px 20px 13px 20px;    
    font-weight: 600;
    font-size: 14px;
    color: #696969;
    background: #fff;
    border-radius: 16px;
    word-wrap: break-word;
`

const InputContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    height: 50px;
    background: #EAF2FE;
    border-radius: 10px;
`