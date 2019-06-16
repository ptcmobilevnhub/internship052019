import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    content:{
        flex:1,
    },
    mapsContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    searchWrapper:{
        marginHorizontal:30, 
        alignItems:'center',
        backgroundColor:'white', 
        elevation:10, 
        flexDirection:'row'
    },
    searchInput:{
        flex:1, 
        marginRight:22, 
        backgroundColor: 'white', 
        elevation: 1
    },
    discoveryIcon:{
        flex:0, 
        width:13, 
        height:13,
        backgroundColor:'black', 
        marginHorizontal:22, 
        marginVertical:30
    },

})

export default styles;