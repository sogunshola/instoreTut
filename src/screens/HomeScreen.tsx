import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';

interface Props {
    
}
interface State {
    
}

class HomeScreen extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Box>
                <Text>Home Screen</Text>
            </Box>
        )
    }
}

export default HomeScreen;