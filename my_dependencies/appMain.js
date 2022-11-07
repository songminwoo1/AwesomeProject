import React from 'react';
import { StyleSheet, View, BackHandler} from 'react-native';
import EventBoard from './eventBoard';
import UserPage from './loginPage';
import EventPage from './EventPage';

class AppMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: styles.pageMain,
            title_text: "",
            body_text: "",
            posttime: "",
        }
    }
    MoveToUserPage = () => {
        this.setState({page: styles.pageUser});
    }
    MoveToMainPage = () => {
        this.setState({page: styles.pageMain});
    }
    MoveToEventPage = (props) => {
        this.setState({page: styles.pageEvent, title_text: props.title_text, body_text: props.body_text, posttime: props.posttime});
    }

    //Back Handler
    backAction = () => {
        if(this.state.page == styles.pageMain) {
            return false;
        }
        this.MoveToMainPage();
        return true;
    };

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }

    render() {
        return (
            <View style={this.state.page}>
              <EventBoard mainPageFunc = {this.MoveToMainPage} userPageFunc = {this.MoveToUserPage} eventPageFunc = {this.MoveToEventPage}/>
              <UserPage />
              <EventPage ev_title={this.state.title_text} ev_body={this.state.body_text} ev_time={this.state.posttime}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pageMain: {
        justifyContent: 'flex-start',
    },
    pageUser: {
        justifyContent: 'center',
    },
    pageEvent: {
        justifyContent: 'flex-end',
    },
});

  
export default AppMain;