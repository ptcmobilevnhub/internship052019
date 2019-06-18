import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between'
    },
    content:{
        flexDirection:'row',
        alignItems:'center',
    },
    avatar:{
        margin:30,
        marginRight:25,
        width:120,
        height:120, 
        alignItems:"center",
        justifyContent:'center'
    },
    text:{
        flex: 1,
        fontSize:25,
        paddingRight:30
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    footer:{
        flexDirection:'row-reverse', 
        margin:30
    }

})

export default styles;