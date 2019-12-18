import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import ToolBar from '../components/ToolBar';

interface Props {
    
}
interface State {
    
}

class ListScreen extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Box f={1}>
                <ToolBar title="List"/>
                <Box f={1} center>
                    <Text>List Screen</Text>
                </Box>
            </Box>
        )
    }
}

export default ListScreen;