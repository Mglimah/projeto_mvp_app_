import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Auth = createNativeStackNavigator();

import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword';

const AuthRoutes = () => {
    return (
        <Auth.Navigator
            initialRouteName="Login"
            headerMode= 'none'
            screenOptions={
                {
                    headerShown:false
                }
            }>
            <Auth.Screen name="Login" component={Login}/>
            <Auth.Screen name="ForgotPassword" component={ForgotPassword}/>
        </Auth.Navigator>
    )
}

export default AuthRoutes;