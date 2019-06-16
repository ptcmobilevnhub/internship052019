import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    context: {
        marginLeft: 30
    },
    title: { 
        color: 'black', 
        fontSize: 22, 
        marginBottom: 7 
    },

    addressItem: { 
        marginBottom: 4, 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    addressIcon: { 
        marginRight: 7, 
        width: 33, 
        height: 33, 
        borderRadius: 5, 
        backgroundColor: '#d5dce0' 
    },
    addressTitle: { 
        fontSize: 18, 
        color: 'black' 
    },
    addressDetail: { 
        fontSize: 13.4, 
        color: '#858585' 
    },


    restaurantText: { 
        fontSize: 18, 
        color: 'black', 
        marginTop: 7 
    },

    restaurantItem: {
        marginRight: 15, 
        marginTop: 10, 
        marginBottom: 15, 
        width: 300, 
        height: 156,
        borderRadius: 10, 
        overflow: 'hidden', 
        backgroundColor: '#f8f8f8', 
        elevation: 10
    },
    restaurantDetail: { 
        flex: 1, 
        justifyContent: 'flex-end', 
        marginLeft: 19, 
        marginBottom: 15 
    },

    restaurantName: { 
        fontSize: 18, 
        color: 'white' 
    },
    restaurantAddress: { 
        fontSize: 14, 
        marginTop: 4, 
        color: 'white' 
    },

    friendWrapper: {
        height: 210
    },
    friendText: { 
        fontSize: 18, 
        color: 'black' 
    },

    friendItem: {
        width: 120, 
        height: 160, 
        marginRight: 15, 
        marginBottom: 15, 
        marginTop: 7,
        borderRadius: 7, 
        backgroundColor: 'white', 
        elevation: 5
    },

    friendAvatar: { 
        marginTop: 15, 
        marginLeft: 15, 
        borderRadius: 5, 
        width: 34, 
        height: 34, 
        backgroundColor: '#d5dce0' 
    },
    frinedName: {
        marginLeft: 15, 
        marginTop: 23,
        color: 'black', 
        fontSize: 18
    },

    friendAddress: { 
        marginLeft: 15, 
        marginTop: 5, 
        fontSize: 13.4 
    },
    tabWrapper: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    tabItem: {
        width: 30,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#7ac4ef'
    },
})

export default styles;