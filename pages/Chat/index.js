import React, {useContext, useState, useEffect} from "react";

import firebaseApp from "../../services/firebase";

import { UsuarioContext } from "../../contexts/user";


import {
    getFirestore,
    addDoc,
    collection,
    onSnapshot,
    query,
    orderBy,
    Timestamp,
} from 'firebase/firestore';

import { 
    Container, 
    Button,
    Message,
    ContainerChat,
    ContainerMsg,
    Input,
    ContainerMsgBox,
    IconEnvia
} from "./styles";

import IconImg from '../../assets/direction.png';

const Chat = () => {

    const [messages,setMessages] = useState([]);
    const [text,setText] = useState('');

    const {user} = useContext(UsuarioContext);

    useEffect(()=>{
        const unsub = onSnapshot(query(collection(db,"mensagens"),orderBy('date')),
        (QuerySnapshot)=>{
            const tmp = [];
            QuerySnapshot.forEach(async(document)=>{
                tmp.push({
                    id:document.id,
                    ...document.data()
                })
            })

            setMessages(tmp);
        })

        return ()=>{
            unsub()
        }
    },[])

    const db = getFirestore(firebaseApp);


    async function handleMessage(text){
        try{
            await addDoc(collection(db,'mensagens'),{
                lido:false,
                date:Timestamp.fromDate(new Date()),
                owner:user.email,
                mensagem:text,
            })
        }catch(err){
            console.log('err',err)
        }
    }

    const anotherFunc = (val) =>{
        setText('');
    }

    return (
        <Container>
            <ContainerChat>
                {messages.map((item)=>(
                    <ContainerMsgBox variavel={item.owner == user.email}>
                        <Message key={item.id}>{item.mensagem}</Message>
                    </ContainerMsgBox>
                ))}
            </ContainerChat>
            <ContainerMsg>
                <Input
                    value={text}
                    placeholder="Digite sua mensagem"
                    onChangeText={text=>setText(text)}
                />
                <Button onPress={()=>{handleMessage(text), anotherFunc(text)}}>
                        <IconEnvia source={IconImg} />
                </Button>
            </ContainerMsg>
        </Container>
    )
}

export default Chat;