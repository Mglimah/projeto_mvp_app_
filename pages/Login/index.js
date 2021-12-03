import React, {useContext,useState} from "react";
//import {View,Text,TouchableOpacity, Touchable} from 'react-native';

import { 
    Container,
    Logo,
    CaixaLogin,
    ContainerBotoes,
    Botao,
    BotaoTexto,
    InputTexto,
    Input,
    ForgotPasswordText,
    ContainerSubmit,
    BotaoSubmit,
    BotaoSubmitTexto
} from "./styles";

import logoImg from '../../assets/logo.png';

import { UsuarioContext } from "../../contexts/user";
import ForgotPassword from "../ForgotPassword";
import { Text, TouchableOpacity } from "react-native";

import { NavigationContainer } from '@react-navigation/native';


const Login = ({navigation}) => {

    const {signIn, signUp, signInAnonymously} = useContext(UsuarioContext);

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [currentButton,setCurrentButton] = useState('membro');

    return (
        <Container>
            <Logo source={logoImg}/>
            <CaixaLogin>
                <ContainerBotoes>
                    <Botao 
                        lastClick={currentButton == 'membro'? true:false}
                        onPress={()=>{setCurrentButton('membro')}}>
                        <BotaoTexto lastClick={currentButton == 'membro'? true:false}>Membro</BotaoTexto>
                    </Botao>

                    <Botao
                        lastClick={currentButton == 'convidado'? true:false}
                        onPress={()=>{setCurrentButton('convidado')}}>
                        <BotaoTexto lastClick={currentButton == 'convidado'? true:false}>Convidado</BotaoTexto>
                    </Botao>
                </ContainerBotoes>

                <InputTexto>E-mail</InputTexto>
                <Input
                    value={email}
                    placeholder="Digite seu email"
                    onChangeText={text=>setEmail(text)}
                />
                <InputTexto>Senha</InputTexto>
                <Input
                    value={password}
                    placeholder="Digite sua senha"
                    onChangeText={text=>setPassword(text)}
                    secureTextEntry={true}
                />

                <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
                    <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                </TouchableOpacity> 

                <ContainerSubmit>
                    <BotaoSubmit onPress={()=>{signUp(email,password)}} invert={true}>
                        <BotaoSubmitTexto invert={true}>Cadastre-se</BotaoSubmitTexto>
                    </BotaoSubmit>

                    <BotaoSubmit onPress={()=>{signIn(email,password)}}>
                        <BotaoSubmitTexto>Entrar</BotaoSubmitTexto>
                    </BotaoSubmit>
                </ContainerSubmit>

            </CaixaLogin>
        </Container>
    )
}

export default Login;