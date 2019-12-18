import React, { PureComponent } from 'react';
import { Toolbar } from 'react-native-material-ui';
import {StyleSheet, StatusBar, View} from 'react-native';

interface Props {
    title: string;
    navigation?: any;
}


export default class extends PureComponent<Props> {
    constructor(props: Props){
        super(props);
    }
    
    render() {
        return (
            <View>
            <StatusBar barStyle="light-content" />
            <Toolbar
                style={{
                    container: styles.container
                }}
                leftElement="menu"
                centerElement={this.props.title}
                /*searchable={{
                    autoFocus: true,
                    placeholder: 'Search mechanic',
                    //onChangeText: text => this.handleSearch(text),
                }}*/
                rightElement={{
                    menu: {
                        icon: "more-vert",
                        labels: ["item 1", "item 2", "item 3"]
                    }
                }}
                // onRightElementPress={ (label) => { console.log(label) }}
                // onLeftElementPress={ () => this.props.navigation.openDrawer()}
            />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4caf50',
    }
});