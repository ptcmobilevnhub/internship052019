import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between'
    },
    contentWrapper:{
        flexDirection:'row',
        justifyContent:'center'
    },
    gender:{
        margin:10,
    },
    genderChosen:{
        borderWidth:2,
        borderRadius:49,
        elevation:10,
        borderColor:'#a8c2ed'
    },
    imageWrapper:{
        width:95, 
        height:94,
    },
    imageGender:{
        width:'100%'
    }
})

export default styles;