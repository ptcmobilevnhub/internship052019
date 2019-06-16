import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
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
    searchWrapper: {
        marginHorizontal: 30,
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 10,
        flexDirection: 'row'
    },
    searchInput: {
        flex: 1,
        marginRight: 22,
        backgroundColor: 'white',
        elevation: 1
    },
    discoveryIcon: {
        flex: 0,
        width: 13,
        height: 13,
        backgroundColor: 'black',
        marginHorizontal: 22,
        marginVertical: 30
    },
    addressSection: {
        marginHorizontal: 30,
        backgroundColor: 'white',
        borderBottomEndRadius: 6,
        borderBottomStartRadius: 6
    },
    addressItem: {
        marginVertical: 12,
        flexDirection: 'row'
    },
    addressIcon: {
        width: 16,
        height: 16,
        marginHorizontal: 20,
        marginTop: 5,
    },
    addressTextWrapper: {
        flex: 1,
    },
    addressTextTitle: {
        color: 'black',
        fontSize: 16
    },
    addressTextDetail: {
        fontSize: 13
    },
    header: {
        height: 95,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    logo: {
        margin: 30
    }
})

export default styles;