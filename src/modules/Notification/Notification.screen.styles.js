import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between'
    },
    header:{ 
        margin:30
    },
    image:{
        width:'100%'
    },
    textTitle:{
        fontSize:28, 
        marginHorizontal:30,
    },
    textDetail:{
        fontSize:13.4, 
        marginHorizontal:30,
    },
    footer:{
        flexDirection:'row-reverse', 
        margin:30
    },
    loading:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default styles;