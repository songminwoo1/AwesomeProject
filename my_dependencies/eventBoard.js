import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';

import Topper from './topper';
import SubTopper from './sub_topper';
import BoardItems from './boardItems';


//messy section - implementing board initial refresh
var isRefreshed = false;
//messy section end.

const bottomButtonText = {
    a: "_",
    ah: "ㅡ",
    b: "_",
    bh: "ㅡ",
    c: "_",
    ch: "ㅡ",
}

class EventBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemTableA:  [],

            itemTableB:  [],

            itemTableC:  [],

            page: boardStyles.bbsb,

            bottomA: bottomButtonText.a,
            bottomB: bottomButtonText.bh,
            bottomC: bottomButtonText.c,
        }
    }

    setA = (data) => {
        this.setState({itemTableA: data});
    }

    setB = (data) => {
        this.setState({itemTableB: data});
    }

    setC = (data) => {
        this.setState({itemTableC: data});
    }

    _BoardRefresh = (cat) => {
        let request = new XMLHttpRequest();
        request.onload = () => {
            let responseObj = request.response;
            let parsed_response = JSON.parse(responseObj);
            if (parsed_response.exit_code == 1) {
                if (cat == 'taxi') {
                    this.setA(parsed_response.data);
                }else if (cat == 'food') {
                    this.setB(parsed_response.data);
                }else if (cat == 'purchase') {
                    this.setC(parsed_response.data);
                }
            }else {
                alert(responseObj); //print out response.
            }
        };
        
        request.open('POST', 'http://13.115.154.88:5000/resource');
        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("data-type", "json");
        request.setRequestHeader("data", "my_test_data_section");
        request.setRequestHeader("output", "json");
        request.send(JSON.stringify({
            'function-name': 'GetBoardList',
            'argument': {
                'search-word': '',
                'category': cat,
                'place': '##ALL##',
                'period-start': 0,
                'period-end': 0,
                'event-start': 0,
                'num-event': 20
            },
            'user-info': {
                'email': this.props.email,
                'password': this.props.password
            }
        }));
    }
    _GetTableXHR = () => {
        let request = new XMLHttpRequest();
        request.onload = function() {
            let responseObj = request.response;
            alert(responseObj); //print out response.
        };
        
        request.open('POST', 'http://13.115.154.88:5000/resource');
        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("data-type", "json");
        request.setRequestHeader("data", "my_test_data_section");
        request.setRequestHeader("output", "json");
        request.send(JSON.stringify({
            'admin-func': 'GetTableEntries',
            'admin-pwd': 'b{!8<cEQi-H;HK7$zndb\\$iGev[A@w.41xJi!Z2:FJmqeQ{ #sc@2:1tA.U!wiKa)QzkI;/e>qGJSh-xyPE{Wp+K0,ztr?J{8-*@C.>40(amq3f.RLm.]P9m}N=C{:J\\ISOu%7,?]2|\\rnrBFa5kA-hfT#fS(AA.aSFTT[R9cA/&?roWh^}e=wEVkg4VAIlCe6[6SEwlIBW&If=Ym<+J1ojK/&TMb,+H</\\4O7k_2i?@_VC fo<.lV\\Gg41/x92A7##vUgDTl?Pq%~gq4?y<at/k0#Zy&A/cad% t,AZ,ZUF?UQkpNNK-hVv\\8P6SD[^cdiIs\\Hk_DRX.\\#*L)%\\-#)w2~?$G5RD5^e{>Gi-|dqwCO$lVqsWT+;&C!CYuT#G#>:1t#yQ5{GgL&)9 t6wSs)9Nm,|:6YQGW<B!j fCl0eMelBFQ$?Wg9)?xg=uEC)ZCoOURQd63,!krZ[2%gYKx2]KNAd>va}&3I08P+pWc_B~*4W;aHtu;|Cwjm.o}#Pt|YRsXS,f8lIUerSMQw|-=BrTNN|{Y_2GGWHmS5o(fW9rCvHF~R6mR}tAdpE]R3n?)@Y#c(U.dylrLRJ?)>BpB8eD@SW[B|6 [CjCOo9Zua}]Hi&Gpmj& j591*Nb@m!2 TV3,DqRf+e05#9A 06*$T8(lL|NZ?c{8BCmJz|w@tq,@.dHVi)zUj=- |@c@SSK~|r#xOaA|oF *(Rc;zWckVeiQ5EfP:.x8P-{%vWytoG_zc?}K3[j/9kde661:z,;LswVu2sjqT2+9hXN~TBkG0jXiS|zCu#Jo|/Y9b[w4KpX2ec| oBCs}9u(,<\\mag6) ZG7R5u^!8-G~)DDMY ]!C?0O!_YrFs(74Qie3>SQL+pwrLwMf]{t!dGYG!<wN0k\\}Zid:Zlu+d[18cYKNFH]gUxNICIT9x4^R/j [\\*PW2:8@L2#93,f}xC<Q[i1jBOV _=NpGfiDsVJ}$&Dv5wVbr~&Q^j4s|U5Mi@LfbI,c$I)X9F',
            'argument': {
                'table': 'UserInfo'// 'PostingBoard' 'Register' 'UserInfo'
            }
        }));
    }

    _GetBoardListXHR = () => {
        let request = new XMLHttpRequest();
        request.onload = function() {
            let responseObj = request.response;
            alert(responseObj); //print out response.
        };
        
        request.open('POST', 'http://13.115.154.88:5000/resource');
        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("data-type", "json");
        request.setRequestHeader("data", "my_test_data_section");
        request.setRequestHeader("output", "json");
        request.send(JSON.stringify({
            'function-name': 'GetBoardList',
            'argument': {
                'category': string,
                'event-start': int,
                'num-event': int,
                'period-start': double,
                'period-end': double,
                'place': string,
                'text': string,
        },
            'user-info': {
                'email': string,
                'password': string,
            }
        }));
    }

    _InitTable = () => {
        let request = new XMLHttpRequest();
        request.onload = function() {
            let responseObj = request.response;
            alert(responseObj); //print out response.
        };
        
        request.open('POST', 'http://13.115.154.88:5000/resource');
        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("data-type", "json");
        request.setRequestHeader("data", "my_test_data_section");
        request.setRequestHeader("output", "json");
        request.send(JSON.stringify({
            'admin-func': 'InitTable',
            'admin-pwd': 'b{!8<cEQi-H;HK7$zndb\\$iGev[A@w.41xJi!Z2:FJmqeQ{ #sc@2:1tA.U!wiKa)QzkI;/e>qGJSh-xyPE{Wp+K0,ztr?J{8-*@C.>40(amq3f.RLm.]P9m}N=C{:J\\ISOu%7,?]2|\\rnrBFa5kA-hfT#fS(AA.aSFTT[R9cA/&?roWh^}e=wEVkg4VAIlCe6[6SEwlIBW&If=Ym<+J1ojK/&TMb,+H</\\4O7k_2i?@_VC fo<.lV\\Gg41/x92A7##vUgDTl?Pq%~gq4?y<at/k0#Zy&A/cad% t,AZ,ZUF?UQkpNNK-hVv\\8P6SD[^cdiIs\\Hk_DRX.\\#*L)%\\-#)w2~?$G5RD5^e{>Gi-|dqwCO$lVqsWT+;&C!CYuT#G#>:1t#yQ5{GgL&)9 t6wSs)9Nm,|:6YQGW<B!j fCl0eMelBFQ$?Wg9)?xg=uEC)ZCoOURQd63,!krZ[2%gYKx2]KNAd>va}&3I08P+pWc_B~*4W;aHtu;|Cwjm.o}#Pt|YRsXS,f8lIUerSMQw|-=BrTNN|{Y_2GGWHmS5o(fW9rCvHF~R6mR}tAdpE]R3n?)@Y#c(U.dylrLRJ?)>BpB8eD@SW[B|6 [CjCOo9Zua}]Hi&Gpmj& j591*Nb@m!2 TV3,DqRf+e05#9A 06*$T8(lL|NZ?c{8BCmJz|w@tq,@.dHVi)zUj=- |@c@SSK~|r#xOaA|oF *(Rc;zWckVeiQ5EfP:.x8P-{%vWytoG_zc?}K3[j/9kde661:z,;LswVu2sjqT2+9hXN~TBkG0jXiS|zCu#Jo|/Y9b[w4KpX2ec| oBCs}9u(,<\\mag6) ZG7R5u^!8-G~)DDMY ]!C?0O!_YrFs(74Qie3>SQL+pwrLwMf]{t!dGYG!<wN0k\\}Zid:Zlu+d[18cYKNFH]gUxNICIT9x4^R/j [\\*PW2:8@L2#93,f}xC<Q[i1jBOV _=NpGfiDsVJ}$&Dv5wVbr~&Q^j4s|U5Mi@LfbI,c$I)X9F',
            'argument': {
                'table': 'UserInfo',
            }
        }));
    }

    GotoPageA = () => {
        this._BoardRefresh('taxi');
        this.setState({page: boardStyles.bbsa, bottomA: bottomButtonText.ah, bottomB: bottomButtonText.b, bottomC: bottomButtonText.c});
    }
    GotoPageB = () => {
        this._BoardRefresh('food');
        this.setState({page: boardStyles.bbsb, bottomA: bottomButtonText.a, bottomB: bottomButtonText.bh, bottomC: bottomButtonText.c});
    }
    GotoPageC = () => {
        this._BoardRefresh('purchase');
        this.setState({page: boardStyles.bbsc, bottomA: bottomButtonText.a, bottomB: bottomButtonText.b, bottomC: bottomButtonText.ch});
    }

    render() {
        if(this.props.page == "event-board") {
            if (!isRefreshed) {
                isRefreshed = true;
                this._BoardRefresh('food');
                this._BoardRefresh('taxi');
                this._BoardRefresh('purchase');
            }
            return (
                <View style={boardStyles.container}>
                    <View style={boardStyles.over_topper}>{}</View>
                    <Topper mainPageFunc = {this.props.mainPageFunc} userPageFunc = {this.props.userPageFunc} toSearch = {this.props.toSearch} toEventCreation = {this.props.toEventCreation}>{}</Topper>

                    <View style={[boardStyles.board_body_scroller, this.state.page]}>
                        <View style={boardStyles.board_body}>
                            <View style={boardStyles.sub_topper}>
                                <SubTopper>{}</SubTopper>
                            </View>
                            <BoardItems itemTable={this.state.itemTableA} eventPageFunc = {this.props.eventPageFunc}/>
                        </View>
                        <View style={boardStyles.board_body}>
                            <View style={boardStyles.sub_topper}>
                                <SubTopper>{}</SubTopper>
                            </View>
                            <BoardItems itemTable={this.state.itemTableB} eventPageFunc = {this.props.eventPageFunc}/>
                        </View>
                        <View style={boardStyles.board_body}>
                            <View style={boardStyles.sub_topper}>
                                <SubTopper>{}</SubTopper>
                            </View>
                            <BoardItems itemTable={this.state.itemTableC} eventPageFunc = {this.props.eventPageFunc}/>
                        </View>
                    </View>
                    
                    <View style={boardStyles.footer}>
                        <TouchableOpacity onPress={this.GotoPageA} style={boardStyles.bbb_button}>
                            <Text style={boardStyles.bigBlue}>{this.state.bottomA}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.GotoPageB} style={boardStyles.bbb_button}>
                            <Text style={boardStyles.bigBlue}>{this.state.bottomB}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.GotoPageC} style={boardStyles.bbb_button}>
                            <Text style={boardStyles.bigBlue}>{this.state.bottomC}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }else {
            return(
                <View style={boardStyles.hidden}>
                </View>
            );
        }
    }
}

const boardStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        minWidth: Dimensions.get('window').width,
        minHeight: Dimensions.get('window').height,
    },
    hidden: {
        display: 'none',
    },
    board_body_scroller: {
        flex: 23,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'flex-start', //this is the page controller.
    },
    bbsa: {
        justifyContent: 'flex-start'
    },
    bbsb: {
        justifyContent: 'center'
    },
    bbsc: {
        justifyContent: 'flex-end'
    },
    bbb_button: {
        width: '20%',
        height: '100%',
        alignItems: 'center',
    },
    board_body: {
        height: '100%',
        width: Dimensions.get('window').width,
    },
    over_topper: {
        flex: 0.2,
        margin: 0,
    },
    sub_topper: {
        width: '100%',
        flex: 3,
        padding: 10,
        paddingBottom: 5,
        margin: 0,
    },
    body: {
        flex: 22,
        flexDirection: 'column',
        alignItems: 'center',
    },
    footer: {
        borderTopWidth: 0.5,
        borderTopColor: '#555',
        flex: 2.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    //temporary
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

export default EventBoard;