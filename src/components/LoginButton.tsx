import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { Image, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons';

import { images } from '../constant/images';

interface Props {
    type: string
}
interface State {
    
}

class Logo extends Component<Props, State>{
    constructor(props: Props){
        super(props);
    }

    bgColor = type => {
        switch (type) {
            case 'google':
                return 'googleBlue';
            case 'facebook':
                return 'facebookBlue';
            default:
                return 'white';
        }
    }

    render() {
        return (
            <TouchableOpacity>
                <Box dir="row" align="center" shadow={1} bg={this.bgColor(this.props.type)} w="80%" self="center" p="2xs" radius="xs" mb="sm">
                    <Box mr="sm">
                        <Box bg="white" h={32} w={32} radius="xs" center>
                            <Image source={this.props.type === 'google' ? images.googleColorIcon : images.logo}/>
                        </Box>
                    </Box>
                    <Box>
                        <Text size="md" color="white">{this.props.children}</Text>
                    </Box>
                </Box>
            </TouchableOpacity>
        )
    }
}

export default Logo;