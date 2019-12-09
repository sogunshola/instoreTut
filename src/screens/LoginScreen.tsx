import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity, Image } from 'react-native';


import Logo from '../components/Logo';
import LoginButton from '../components/LoginButton';

interface Props {
    
}
interface State {
    
}

class LoginScreen extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Box f={1} center>
                <Box f={1} center>
                    <Logo/>
                </Box>
                <Box f={0.9} w="100%">
                    <LoginButton type="google">Continue with Google</LoginButton>
                    <LoginButton type="facebook">Continue with Facebook</LoginButton>
                </Box>
            </Box>
        )
    }
}

export default LoginScreen;