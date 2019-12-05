import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';

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
                <Text>Login Screen</Text>
            </Box>
        )
    }
}

export default LoginScreen;