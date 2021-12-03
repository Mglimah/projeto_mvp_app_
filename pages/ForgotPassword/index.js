import React, { useContext,useState } from 'react';
import { Text } from 'react-native';

import { UsuarioContext } from '../../contexts/user';

import { 
        Container,
        Input,
        BotaoSubmit,
        BotaoSubmitTexto,
        Text1
      } from './styles';

const ForgotPassword = () => {

    const {passwordReset} = useContext(UsuarioContext);

    const [email,setEmail] = useState("")

    return (
      <Container>
        <Text1>Esqueceu sua senha?</Text1>
        <Input 
          placeholder="Digite seu email"
          value={email}
          onChangeText={text=>setEmail(text)}
          />

        <BotaoSubmit onPress={()=>{passwordReset(email)}}>
            <BotaoSubmitTexto>Enviar email</BotaoSubmitTexto>
        </BotaoSubmit>
      </Container>
    )
}

export default ForgotPassword; 