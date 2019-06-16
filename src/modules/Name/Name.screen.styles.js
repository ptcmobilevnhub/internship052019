import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    contentWrapper:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
    },
    title:{
        margin:30,
        marginTop:0,
        fontSize:28
    },
    input:{
        margin:30,
        textAlign:'center',
        backgroundColor:'#f8f8f8',
        elevation: 10,
    },

})

export default styles;