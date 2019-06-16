import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    
    titleWrapper:{
        margin:30,
        marginTop: 50,
        marginRight:70,
        color:"#353B50", 
        fontSize: 18
    },
    titleQuestion:{
        color: '#25B7DD',
        fontSize: 18
    },

    phoneWrapper:{
        marginHorizontal:30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    phoneInput:{
        flex:1,
        height:50,
        textAlign: 'center',
    },

    footerWrapper:{
        alignItems:'center',
        margin:30,
        flexDirection: 'row',
        justifyContent:'space-between'
    }
})

export default styles;