import React, { Component } from 'react';
import { Box } from 'react-native-design-utility';
import Logo from '../components/Logo';

interface Props {
    navigation: any
}
interface State {
    
}

class SplashScreen extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.checkAuth();
    }

    checkAuth = () => {
        setTimeout(() => {
            this.props.navigation.navigate('Auth');
        }, 2000)
    }

    render() {
        return (
            <Box f={1} center>
                <Logo />
            </Box>
        )
    }
}

export default SplashScreen;