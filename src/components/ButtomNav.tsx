import React, { PureComponent } from 'react'
import { Box } from 'react-native-design-utility';
import { BottomNavigation } from 'react-native-material-ui';
import { tabBarIcons } from '../constant/images'

interface Props {
    navigation?: any;
}
interface State {
    active: string
}

class ButtomNav extends PureComponent<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            active: 'Home'
        }
    }

    handlePress = (route: string) => {
        this.props.navigation.navigate(route);
        this.setState({active: route});
    }

    render() {
        const { navigation } = this.props;
        const { routes } = navigation.state;
        return (
            <Box h={60} bg="white">
                <BottomNavigation active={this.state.active} hidden={false} >
                    {routes.map((routes) => (
                        <BottomNavigation.Action
                        key={routes.routeName}
                        icon={tabBarIcons[routes.routeName]}
                        label={routes.routeName}
                        style={{
                            icon: {color: this.state.active === routes.routeName ? "#4caf50" : "#757575"},
                            label: {color: this.state.active === routes.routeName ? "#4caf50" : "#757575"}
                        }}
                        onPress={() => this.handlePress(routes.routeName)}
                        />
                    ))}
    </BottomNavigation>
            </Box>
        )
    }
}

export default ButtomNav;