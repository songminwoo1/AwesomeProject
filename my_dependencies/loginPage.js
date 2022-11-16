import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {Dimensions} from 'react-native';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_loggedin: false,
            page: 'login' // 'loginAgain' 'loginError' 'unknownUser' 'signin' 'signinFail' 'signinSending' 'verify' 'verifyFail' 'loggedin'
        }
    }

    email = "";
    password = "";
    password2 = "";
    username = "";
    verifyCode = "";

    onChangeEmail = (text) => {
        this.email = text;

    }
    onChangePassword = (text) => {
        this.password = text;
    }
    onChangePassword2 = (text) => {
        this.password2 = text;
    }
    onChangeUserName = (text) => {
        this.username = text;
    }
    onChangeVFC = (text) => {
        this.verifyCode = text;
    }

    tryLogin = () => {
        this._LoginXHR(this.email, this.password);
    }

    onLoginError = () => {
        this.setState({page: 'loginError'});
    }

    onLoginSuccess = () => {
        this.setState({page: 'loggedin'});
    }

    onUserNotExist = () => {
        this.setState({page: 'unknownUser'});
    }

    toSignin = () => {
        this.setState({page: 'signin'});
    }

    trySignin = () => {
        this._RegisterXHR(this.email, this.password, this.password2, this.username);
    }

    toSigninFail = () => {
        this.setState({page: 'signinFail'});
    }

    toVerify = () => {
        this.setState({page: 'verify'});
    }
    toVerifyFail = () => {
        this.setState({page: 'verifyFail'});
    }

    toSigninSending = () => {
        if (this.state.page == 'signin' || this.state.page == 'signinFail'){
            this.setState({page: 'signinSending'});
        }
    }

    toLogin = () => {
        this.setState({page: 'login'});
    }

    toLoggedin = () => {
        this.setState({page: 'loggedin'});
    }

    toLoginAgain = () => {
        this.setState({page: 'loginAgain'});
    }

    _LoginXHR = (email, password) => {
        let request = new XMLHttpRequest();
        request.onload = () => {
            let responseObj = request.response;
            //alert(responseObj); //print out response.
            let parsed_response = JSON.parse(responseObj);
            if (parsed_response.error_msg == 'Login: Ask to Register') {
                this.onUserNotExist();
            }else if(parsed_response.exit_code == 0) {
                this.onLoginError();
            }else if(parsed_response.exit_code == 1) {
                this.toLoggedin();
                this.props.set_email_pw(this.email, this.password);
                this.props.mainPageFunc();
            }
        };
        
        request.open('POST', 'http://13.115.154.88:5000/resource');
        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("data-type", "json");
        request.setRequestHeader("data", "my_test_data_section");
        request.setRequestHeader("output", "json");
        request.send(JSON.stringify({
            'function-name': 'Login',
            'user-info': {
                'email': email,
                'password': password,
            }
        }
        ));
    }

    _RegisterXHR = (email, password1, password2, username) => {
        let request = new XMLHttpRequest();
        request.onload = () => {
            let responseObj = request.response;
            //alert(responseObj); //print out response.
            let parsed_response = JSON.parse(responseObj);
            if(parsed_response.exit_code == 1) {
                this.toVerify();
            } else {
                this.toSigninFail();
            }
        };
        
        request.open('POST', 'http://13.115.154.88:5000/resource');
        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("data-type", "json");
        request.setRequestHeader("data", "my_test_data_section");
        request.setRequestHeader("output", "json");
        request.send(JSON.stringify({
            'function-name': 'Register',
            'user-info': {
                'email': email,
                'password1': password1,
                'password2': password2,
                'username': username,
            }
        }));
        this.toSigninSending();
    }

    checkVFC = () => {
        this._VFCCheckXHR(this.verifyCode);
    }
    
    _VFCCheckXHR = (vfc) => {
        let request = new XMLHttpRequest();
        request.onload = () => {
            let responseObj = request.response;
            //alert(responseObj); //print out response.
            let parsed_response = JSON.parse(responseObj);
            if(parsed_response.exit_code == 1) {
                this.toLoginAgain();
            } else {
                this.toVerifyFail();
            }
        };
        
        request.open('POST', 'http://13.115.154.88:5000/resource');
        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("data-type", "json");
        request.setRequestHeader("data", "my_test_data_section");
        request.setRequestHeader("output", "json");
        request.send(JSON.stringify({
            'function-name': 'RegisterVerify',
            'user-info': {
                'email': this.email, 
                'password': this.password, 
                'username': this.username,
                'code': vfc
            }
        }));
    }
    
    render() {
        if(this.props.page == "user-page"){
            if (this.state.page == 'loggedin') {
                return (
                    <View style={pageStyles.container}>
                        <View style={pageStyles.center}>
                            <Text style={pageStyles.title}>
                                KaiShare User
                            </Text>
                            <View style={pageStyles.inputArea}>
                                <Text style={pageStyles.input}>{this.email}</Text>
                            </View>
                        </View>
                    </View>
                );
            }else if (this.state.page == 'login') {
                return (
                    <View style={pageStyles.container}>
                        <View style={pageStyles.center}>
                            <Text style={pageStyles.title}>
                                KaiShare Login
                            </Text>
                            <View style={pageStyles.inputArea}>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    textContentType={'emailAddress'}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangeEmail(newText)}
                                    placeholder="Email"
                                    keyboardType="default"
                                />
                                <View style={pageStyles.hr}/>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangePassword(newText)}
                                    placeholder="Password"
                                    keyboardType="default"
                                />
                            </View>
                            <TouchableOpacity onPress={this.tryLogin} >
                                <Text style={pageStyles.button}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            }else if (this.state.page == 'loginAgain') {
                return (
                    <View style={pageStyles.container}>
                        <View style={pageStyles.center}>
                            <Text style={pageStyles.title}>
                                KaiShare Login
                            </Text>
                            <Text style={pageStyles.signinmsg}>
                                Email Verification Success! now please login.
                            </Text>
                            <View style={pageStyles.inputArea}>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    textContentType={'emailAddress'}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangeEmail(newText)}
                                    placeholder="Email"
                                    keyboardType="default"
                                />
                                <View style={pageStyles.hr}/>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangePassword(newText)}
                                    placeholder="Password"
                                    keyboardType="default"
                                />
                            </View>
                            <TouchableOpacity onPress={this.tryLogin} >
                                <Text style={pageStyles.button}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            }else if (this.state.page == 'loginError') {
                return (
                    <View style={pageStyles.container}>
                        <View style={pageStyles.center}>
                            <Text style={pageStyles.title}>
                                KaiShare Login
                            </Text>
                            <View style={pageStyles.inputArea}>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    textContentType={'emailAddress'}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangeEmail(newText)}
                                    placeholder="Email"
                                    keyboardType="default"
                                />
                                <View style={pageStyles.hr}/>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangePassword(newText)}
                                    placeholder="Password"
                                    keyboardType="default"
                                />
                            </View>
                            <Text style={pageStyles.signinmsg}>
                                Wrong email/password (not kaist email?)
                            </Text>
                            <TouchableOpacity onPress={this.tryLogin} >
                                <Text style={pageStyles.button}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            }else if (this.state.page == 'unknownUser'){
                return (
                    <View style={pageStyles.container}>
                        <View style={pageStyles.center}>
                            <Text style={pageStyles.title}>
                                KaiShare Login
                            </Text>
                            <View style={pageStyles.inputArea}>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    textContentType={'emailAddress'}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangeEmail(newText)}
                                    placeholder="Email"
                                    keyboardType="default"
                                />
                                <View style={pageStyles.hr}/>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangePassword(newText)}
                                    placeholder="Password"
                                    keyboardType="default"
                                />
                            </View>
                            <Text style={pageStyles.signinmsg}>
                                Email not exist. Or do you want to sign in?
                            </Text>
                            <TouchableOpacity onPress={this.tryLogin} >
                                <Text style={pageStyles.button}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.toSignin} >
                                <Text style={pageStyles.button}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            }else if (this.state.page == 'signin') {
                return (
                    <View style={pageStyles.container}>
                        <View style={pageStyles.center}>
                            <Text style={pageStyles.title}>
                                KaiShare Login
                            </Text>
                            <View style={pageStyles.inputArea}>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    textContentType={'emailAddress'}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangeEmail(newText)}
                                    placeholder="Email"
                                    keyboardType="default"
                                />
                                <View style={pageStyles.hr}/>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangePassword(newText)}
                                    placeholder="Password"
                                    keyboardType="default"
                                />
                                <View style={pageStyles.hr}/>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangePassword2(newText)}
                                    placeholder="Password(repeat)"
                                    keyboardType="default"
                                />
                                <View style={pageStyles.hr}/>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangeUserName(newText)}
                                    placeholder="UserName"
                                    keyboardType="default"
                                />
                            </View>
                            <TouchableOpacity onPress={this.trySignin} >
                                <Text style={pageStyles.button}>Sign in</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.toLogin} >
                                <Text style={pageStyles.button}>Return to Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            }else if (this.state.page == 'signinSending') {
                return (
                    <View style={pageStyles.container}>
                        <View style={pageStyles.center}>
                            <Text style={pageStyles.title}>
                                KaiShare Login
                            </Text>
                            <View style={pageStyles.inputArea}>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    textContentType={'emailAddress'}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangeEmail(newText)}
                                    placeholder="Email"
                                    keyboardType="default"
                                />
                                <View style={pageStyles.hr}/>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangePassword(newText)}
                                    placeholder="Password"
                                    keyboardType="default"
                                />
                                <View style={pageStyles.hr}/>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangePassword2(newText)}
                                    placeholder="Password(repeat)"
                                    keyboardType="default"
                                />
                                <View style={pageStyles.hr}/>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangeUserName(newText)}
                                    placeholder="UserName"
                                    keyboardType="default"
                                />
                            </View>
                            <Text style={pageStyles.signinmsg}>
                                Processing... please wait
                            </Text>
                        </View>
                    </View>
                );
            }else if (this.state.page == 'signinFail') {
                return (
                    <View style={pageStyles.container}>
                        <View style={pageStyles.center}>
                            <Text style={pageStyles.title}>
                                KaiShare Login
                            </Text>
                            <View style={pageStyles.inputArea}>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    textContentType={'emailAddress'}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangeEmail(newText)}
                                    placeholder="Email"
                                    keyboardType="default"
                                />
                                <View style={pageStyles.hr}/>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangePassword(newText)}
                                    placeholder="Password"
                                    keyboardType="default"
                                />
                                <View style={pageStyles.hr}/>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangePassword2(newText)}
                                    placeholder="Password(repeat)"
                                    keyboardType="default"
                                />
                                <View style={pageStyles.hr}/>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangeUserName(newText)}
                                    placeholder="UserName"
                                    keyboardType="default"
                                />
                            </View>
                            <Text style={pageStyles.signinmsg}>
                                Please check your input again.
                            </Text>
                            <TouchableOpacity onPress={this.trySignin} >
                                <Text style={pageStyles.button}>Sign in</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.toLogin} >
                                <Text style={pageStyles.button}>Return to Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            }else if (this.state.page == 'verify') {
                return (
                    <View style={pageStyles.container}>
                        <View style={pageStyles.center}>
                            <Text style={pageStyles.title}>
                                Email Verification
                            </Text>
                            <Text style={pageStyles.signinmsg}>
                                Check your email inbox for verification code
                            </Text>
                            <View style={pageStyles.inputArea}>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangeVFC(newText)}
                                    placeholder="enter verification code"
                                    keyboardType="default"
                                />
                            </View>
                            <TouchableOpacity onPress={this.checkVFC} >
                                <Text style={pageStyles.button}>Check</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.toLogin} >
                                <Text style={pageStyles.button}>Return to Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            }else if (this.state.page == 'verifyFail') {
                return (
                    <View style={pageStyles.container}>
                        <View style={pageStyles.center}>
                            <Text style={pageStyles.title}>
                                Email Verification
                            </Text>
                            <Text style={pageStyles.signinmsg}>
                                Wrong Verification Code!
                            </Text>
                            <View style={pageStyles.inputArea}>
                                <TextInput
                                    editable={true}
                                    maxLength={40}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangeVFC(newText)}
                                    placeholder="enter verification code"
                                    keyboardType="default"
                                />
                            </View>
                            <TouchableOpacity onPress={this.checkVFC} >
                                <Text style={pageStyles.button}>Check</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.toLogin} >
                                <Text style={pageStyles.button}>Return to Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            }
        }else{
            return (
                <View style={pageStyles.hidden}>
                </View>
            );
        }
    }
}

const pageStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        minWidth: Dimensions.get('window').width,
        minHeight: Dimensions.get('window').height,
        justifyContent: 'center',
    },
    hidden: {
        display: 'none',
    },
    center: {
        backgroundColor: "#d0f0ff",
    },
    title: {
        color: 'blue',
        fontSize: 35,
        textAlign: 'center',
        margin: 15,
    },
    input: {
        fontSize: 20,
        textAlign: 'center',
    },
    hr: {
        borderWidth: 0.5,
        borderColor: 'gray',
        marginVertical: 5,
    },
    inputArea: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginHorizontal: 50,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginBottom: 10,
    },
    signinmsg: {
        textAlign: 'center',
        color: '#229',
        paddingBottom: 10,
    },
    button: {
        borderWidth: 0.5,
        borderRadius: 5,
        color: "#666",
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
        marginHorizontal: '30%',
    },
});

export default UserPage;