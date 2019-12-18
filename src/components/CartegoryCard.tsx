import React, { PureComponent } from 'react'
import { StyleSheet } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { Card, Icon } from 'react-native-material-ui';

interface Props {
    navigation?: any;
    category: any
}
interface State {
    
}

class CartegoryCard extends PureComponent<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {}
    }


    render() {
        const { category } = this.props;
        return (
            <Box w={1/2}>
                <Card style={{
                    container: styles.card,
                    }}>
                        {category.icon && (
                            <Box>
                                <Icon name={category.icon}  size={30} />
                            </Box>
                        )}
                        <Box>
                            <Text size="sm" center capitalizeEach color="greyDarker">{category.title}</Text>
                        </Box>
                </Card>
            </Box>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        // width: "100%",
        height: 100,
        alignItems: "center",
        flex: 1
    }
})

export default CartegoryCard;