import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import EmojiPicker from 'emoji-picker-react'

import LinkClip from '../img/LinkClip.png'
import Smiley from '../img/Smiley.png'

const Chat = () => {
    const { room } = useParams()
    const location = useLocation()
    const [showPicker, setShowPicker] = useState(false)
    // console.log(location)
    const data: any = localStorage.getItem(`${room}`)
    const dataPars = JSON.parse(data)
    const [value, setValue] = useState('')
    const [chat, setChat] = useState<any[]>(dataPars || [])
    console.log(dataPars)
    // const messages: any[] = []
    const [messages, setMessages] :any[] = useState(dataPars || [])

    const onEmojiClick = (emojiData: any, event: any) => {
        setValue(prevInput => prevInput + emojiData.emoji);
        setShowPicker(false)
    }

    React.useEffect(() => {    
        window.addEventListener('storage', () => {          
            const x: any = localStorage.getItem(`${room}`)
            const ch = JSON.parse(x)
            setChat(ch)  
        });       
    }, )

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
            setValue('')
        }        
    }
    console.log(chat)
    return (
        <>
            <ChatName>Room: {room} </ChatName>
            {/* <div>
                Chat
            </div> */}
            <ChatArea>
                {chat.map(item => 
                    location.state.login === item.name ? 
                    <div key={item.id}>
                        {item.date}
                        <MyMessage>
                            {item.text}
                        </MyMessage>
                    </div>
                    :
                    <div key={item.id}>
                        {item.date} {item.name}:
                        <TheirMessage>
                            {item.text}
                        </TheirMessage>
                    </div>)}
                    {/* {showPicker && <EmojiPicker onEmojiClick={onEmojiClick}/>} */}
                    
            </ChatArea>
            
            <BottomContainer>
                <InputContainer>
                    <img src={LinkClip} alt='clip' width='32px' height='32px'/>
                    <InputMessage value={value} onChange={e => setValue(e.target.value)} placeholder="Написать сообщение..." />
                    
                    <ImgIcon src={Smiley} alt='smiley' 
                        onClick={() => setShowPicker(val => !val) }/>
                    {/* {showPicker && <EmojiPicker onEmojiClick={onEmojiClick}/>} */}
                    <EmojiContainer>
                        {showPicker && <EmojiPicker onEmojiClick={onEmojiClick}/>}
                    </EmojiContainer>
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
    position: relative;
    width: 100%;
    height: 85vh;
    padding-bottom: 15px;
    overflow-y: auto;
    background: #F0F4FA;
`

const BottomContainer = styled.div`
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    word-wrap: break-word;
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

const ImgIcon = styled.img`
    width: 32px;
    height: 32px;
    cursor: pointer;
`

const EmojiContainer = styled.div`
    position: absolute;  
    margin-bottom: 60px;
    margin-left: 55%;
    bottom: 0;
    left: 100;
`