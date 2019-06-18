import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    contentWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        margin: 30,
        marginTop: 0,
        fontSize: 28
    },
    input: {
        margin: 30,
        textAlign: 'center',
        backgroundColor: '#f8f8f8',
        elevation: 10,
    },
    footer:{
        flexDirection:'row-reverse', 
        margin:30
    }
})

export default styles;