import styled from 'styled-components/native';

export const Container = styled.View`
    background-color:#333;
    flex:1;
    align-items:center;
    justify-content:center;
    padding:0 10px
`;

export const Button = styled.TouchableOpacity`
    height:50px;
    background-color:#AE1B73;
    border-radius: 100px;
    width:15%;
    padding:5px
    justify-content:center;
    align-items:center;
`;

export const ButtonText = styled.Text`
    color:#fff;
    font-size:16px;
    font-weight:bold;
`;

export const ContainerMsgBox = styled.Text`
    background-color: ${props=> props.variavel ? "#ffa500" : "#333" };
    border: 1px solid #333;
    left: ${props=> props.variavel ? '70px': '0px' };
    width:80%;
    height:50px;
    border-radius:5px;
    font-size:12px;
    padding:6px;
    margin-bottom:25px;
    flex:1;
    align-items:center;
`;

export const Message = styled.Text`
    color: #fff;
    font-size:15px;
    margin-bottom:10px;
`;

export const MessageData = styled.Text`
    color: #fff;
    font-size:10px;
    right:10px;
    margin-bottom:20px;
`;

export const ContainerChat = styled.ScrollView`
    background-color:#AE1B73;
    height:70%;
    width:100%;
    margin-top:10px;
    margin-bottom:10px;
    border-top-right-radius:25px;
    border-top-left-radius:25px;
    border-bottom-right-radius:25px;
    border-bottom-left-radius:25px;
    padding:20px
`;

export const ContainerMsg = styled.View`
    flex-direction:row;
    margin-bottom:10px;
    padding:0 5px
`;

export const Input = styled.TextInput`
    border: 1px solid #ccc;
    width:85%;
    background-color:#fff;
    color:#333;
    height:50px;
    border-radius:300px;
    padding:0 20px;
    margin-right:5px;
`;

export const IconEnvia = styled.Image`
    height:40px;
    width:40px;
    padding:0 20px;
`;