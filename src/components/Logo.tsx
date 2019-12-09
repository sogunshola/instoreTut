import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { Image } from 'react-native';

import { images } from '../constant/images';

class Logo extends Component{
    state={}

    render() {
        return (
            <Box center>
                <Box mb="sm">
                    <Image source={images.logo} />
                </Box>
                <Text size="xxl">In
                    <Text size="xxl" color="green">
                        Store
                    </Text>
                </Text>
                <Text size="sm">easy grocery shopping.</Text>
            </Box>
        )
    }
}

export default Logo;