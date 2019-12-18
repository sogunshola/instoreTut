import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import ToolBar from '../components/ToolBar';
import CartegoryCard from '../components/CartegoryCard';
import CarouselSlider from '../components/CarouselSlider';

interface Props {
    
}
interface State {
    categories: any
}

class HomeScreen extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            categories: [
                {
                    id: 1,
                    title: 'Grocery',
                    icon: 'local-grocery-store',
                },
                {
                    id: 2,
                    title: 'Drugs',
                    icon: 'gamepad',
                },
                {
                    id: 3,
                    title: 'Pets',
                    icon: 'pets',
                },
                {
                    id: 4,
                    title: 'Games',
                    icon: 'gamepad',
                },
                {
                    id: 5,
                    title: 'Toys',
                    icon: 'toys',
                },
            ]
        }
    }

    render() {
        return (
            <Box f={1} bg="greyLightest">
                <ToolBar title="InStore"/>
                <Box h={130} center>
                    <CarouselSlider />
                </Box>

                <Box f={1}>
                <FlatList
                    data={this.state.categories}
                    renderItem={({ item }) => <CartegoryCard category={item}/>}
                    keyExtractor={(item: any) => item.id}
                    numColumns={3}
                />
                </Box>
            </Box>
        )
    }
}

export default HomeScreen;