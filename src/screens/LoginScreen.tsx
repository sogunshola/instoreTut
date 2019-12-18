import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { Animated, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { LoginManager, GraphRequest, GraphRequestManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

import { NavigationService } from '../api/NavigationService';
import { loginUser } from '../store/domains/action';


import Logo from '../components/Logo';
import Loginbutton from '../components/LoginButton';

interface Props {
    user: any
    loginUser: any
}
interface State {
    opacity: any
    position: any
    disabled: boolean
}

const mapStateToProps = (state: any) => ({
    user: state.user,
})

const mapDispatchToProps = {
    loginUser,
};

class LoginScreen extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            opacity: new Animated.Value(0),
            position: new Animated.Value(0),
            disabled: false,
        }
    }

    componentDidMount() {
        Animated.parallel([
            Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 200,
            delay: 100
        }), 
        Animated.timing(this.state.position, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        })]).start();

        // console.log(this.props)
    }

    onLoginPress = () => {
        console.log(this.props.user);
        NavigationService.navigate('Home');
    }

    onGooglePress = async () => {
        try {
            GoogleSignin.configure();
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.props.loginUser(userInfo.idToken, 'GOOGLE');
            // this.setState({userInfo});
            console.log(userInfo);
        } catch (error) {
            console.log(error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    async facebookLogin() {
        // const infoRequest = new GraphRequest('/me', {
        //     httpMethod: 'GET',
        //     version: 'v2.5',
        //     parameters: {
        //         'fields': {
        //             'string' : 'email,name,friends'
        //         }
        //     }
        // }, (err, res) => {
        //     /* if(res) {
        //         this.setState({userInfo: {
        //             email: res.email,
        //             familyName: res.name,
        //             givenName: res.name,
        //             id: res.id,
        //             photo: null
        //         }});
        //         console.log(this.state.userInfo);
        //     } */
        //     console.log(err, res);
        // });

        LoginManager
            .logInWithPermissions(
                ['public_profile', 'email']
            )
            .then(async (result) => {
                if (result.isCancelled) {
                    console.log('Login cancelled')
                } else {
                    console.log(
                        'Login success with permissions: ' + result.grantedPermissions.toString()
                    )
                    // new GraphRequestManager().addRequest(infoRequest).start();
                    var data = await AccessToken.getCurrentAccessToken();
                    const { accessToken } = data
                    await loginUser(accessToken, 'FACEBOOK');
                }
            }, function (error) {
                console.log('Login fail with error: ' + error)
            })
    }

    render() {
        const {opacity} = this.state;
        const logoTranslate = this.state.position.interpolate({
            inputRange: [0, 1],
            outputRange: [150, 0]
        })
        return (
            <KeyboardAvoidingView style={{flex: 1, alignContent:"center"}} behavior="padding">
                <Animated.View style={{flex: 1, transform: [{
                    translateY: logoTranslate,
                }]}}>
                    <Box f={1} center>
                        <Logo/>
                    </Box>
                </Animated.View>
                <Animated.View style={{flex: 0.9, width: '100%', opacity}}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            autoCompleteType="email"
                            keyboardType="email-address"
                            underlineColorAndroid='transparent'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            autoCompleteType="password"
                            underlineColorAndroid='transparent'
                            secureTextEntry={true}
                        />
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onLoginPress}>
                            <Text center color='white' bold>
                                Login
                            </Text>
                        </TouchableOpacity>
                    <Loginbutton onPress={this.onGooglePress} type="google">Continue with Google</Loginbutton>
                    <Loginbutton onPress={this.facebookLogin} type="facebook">Continue with Facebook</Loginbutton>
                </Animated.View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        backgroundColor: '#FFFFFF',
        paddingLeft: 10,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    buttonContainer: {
        backgroundColor: '#4caf50',
        paddingVertical: 10,
        marginLeft: 15,
        marginRight: 15,
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (LoginScreen);