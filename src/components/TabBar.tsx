import React, { PureComponent } from 'react'
import { Box } from 'react-native-design-utility';
import TabItem from '../components/TabItem';

interface Props {
    navigation?: any;
}
interface State {
    
}

class TabBar extends PureComponent<Props, State> {
    render() {
        const { navigation } = this.props;
        const { routes, index } = navigation.state;
        return (
            <Box h={60} bg="white" dir="row">
                {routes.map((route, i) => (
                    <TabItem key={route.routeName} {...route} navigation={this.props.navigation} isActive={index === i} />
                ))}
            </Box>
        )
    }
}

export default TabBar;