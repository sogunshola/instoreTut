import React, { PureComponent } from 'react'
import { Image, TouchableOpacity } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { tabBarIcons } from '../constant/images';

interface Props {
    navigation?: any;
    routeName: string;
    isActive: boolean;
}

class TabBar extends PureComponent<Props> {

    handlePress = () => {
        this.props.navigation.navigate(this.props.routeName)
    }


    render() {
        const { routeName, isActive } = this.props;

        const icon = tabBarIcons[isActive ? 'active':'inactive'][routeName]
        return (
            <Box f={1} pt={10} center>
                <TouchableOpacity style={{flex: 1, justifyContent: "center", alignItems: "center"}} onPress={this.handlePress}>
                    <Box mb={3}>
                        <Image source={icon} />
                    </Box>
                    <Box>
                        <Text size="xs" ls={0.12} color="greyDark" lowercase>{routeName}</Text>
                    </Box>
                </TouchableOpacity>
            </Box>
        )
    }
}

export default TabBar;