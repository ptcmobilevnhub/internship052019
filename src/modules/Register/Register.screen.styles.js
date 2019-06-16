import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    imageRegister:{
        flex:1,
        overflow: 'hidden',
        width:'100%',
    },
    textTittle:{
        paddingHorizontal:30,
        marginTop: 38.5,
        fontSize: 25,
        color:"#353B50"
    },
    inputPhoneContainer:{
        margin:30,
        alignItems :'center',
        flexDirection:'row'
    },
    textPhoneArea:{
        flex:1,
        paddingLeft:20,
        fontSize:15,
    },
    inputPhone:{
        backgroundColor:'#f8f8f8',
        elevation: 10,
        marginLeft:40,
        flex:6,
        height: 53,
        fontSize:15,
    },
    textLinkSocial:{
        marginLeft: 30,
        marginBottom: 30,
        color:'#2697AC',
        fontSize: 15,
    }
});

export default styles;