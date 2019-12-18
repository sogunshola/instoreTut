import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import ToolBar from '../components/ToolBar';

interface Props {
    
}
interface State {
    
}

class StoreScreen extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Box f={1}>
                <ToolBar title="Store"/>
                <Box f={1} center>
                    <Text>Store Screen</Text>
                </Box>
            </Box>
        )
    }
}

export default StoreScreen;