import React, { PureComponent } from 'react'
import { View, Text, FlatList, ImageBackground, ScrollView, Alert } from 'react-native'
import { IMAGES } from '../../assets'
import styles from './Discovery.screen.styles'
// import ArrowLeftHeader from '../navigation/headers/ArrowLeft.header'
// import ProfileHeader from '../navigation/headers/Profile.header'
export default class GenderScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.savedAddresses = [
            {
                icon: "",
                title: "Office",
                address: "BDlive24,Road 8 Niketon, gulshan, 1000",

            }, {
                icon: "",
                title: "Home",
                address: "BDlive24,Road 8 Niketon, gulshan, 1000",
            }

        ];
        this.nearByRestaurant = [
            {
                image: IMAGES.retaurant.food1,
                title: "Grandiose Restaurant",
                address: "Airport Road Khilkhet,1229",
            }, {
                image: IMAGES.retaurant.food2,
                title: "Test Restaurant",
                address: "Airport Road Khilkhet,1229",
            }, {
                image: IMAGES.retaurant.food3,
                title: "Test 2 Restaurant",
                address: "Airport Road Khilkhet,1229",
            }
        ];
        this.nearByFriend = [
            {
                avatar: "",
                firstname: "Smirk",
                address: "Dhanmondi",
                ages: 32
            }, {
                avatar: "",
                firstname: "Rayhan",
                address: "Dhanmondi",
                ages: 32
            }, {
                avatar: "",
                firstname: "Farhana",
                address: "Dhanmondi",
                ages: 32
            },
            {
                avatar: "",
                firstname: "Demo",
                address: "Dhanmondi",
                ages: 32
            }
        ]
    };


    _onClickBack = () => {
        this.props.navigation.goBack();
    }
    _onClickProfile = () => {
        Alert.alert(
            'Profile click',
            'Click to my profile',
            [
                { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false },
        );

    }

    renderHeader = () => {
        return null
        // return (
        //     <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:5}}>
        //         {ArrowLeftHeader({onPress: this._onClickBack})}
        //         {ProfileHeader({onPress:this._onClickProfile, name: 'Shadhin', points:4.89, image:IMAGES.profile_small})}
        //     </View>
        // )
    }

    renderTextTittle = () => {
        return (
            <Text style={styles.title}>Where would you want to go !</Text>
        )
    }

    renderListAddress = () => (
        <View>
            <FlatList
                keyExtractor={(item, index) => item.title}
                data={this.savedAddresses}
                renderItem={this.renderAddressItem} />
        </View>
    );
    renderAddressItem = ({ item }) => (
        <View style={styles.addressItem}>
            <View style={styles.addressIcon} />
            <View>
                <Text style={styles.addressTitle}>{item.title}</Text>
                <Text style={styles.addressDetail}>{item.address}</Text>
            </View>
        </View>
    )


    renderNearByRestaurant = () => (
        <View>
            <Text style={styles.restaurantText}>Nearby Restaurants</Text>
            <FlatList
                horizontal={true}
                data={this.nearByRestaurant}
                keyExtractor={(item) => item.title}
                renderItem={this.renderNearByRestaurantItem} />
        </View>
    )
    renderNearByRestaurantItem = ({ item }) => (
        <View>
            <ImageBackground style={styles.restaurantItem} source={item.image}>
                <View style={styles.restaurantDetail}>
                    <Text style={styles.restaurantName}>{item.title}</Text>
                    <Text style={styles.restaurantAddress}>{item.address}</Text>
                </View>
            </ImageBackground>
        </View>
    )
    renderNearByFriend = () => (
        <View style={styles.friendWrapper}>
            <Text style={styles.friendText}>Friend nearby you</Text>
            <FlatList
                horizontal={true}
                data={this.nearByFriend}
                keyExtractor={(item) => item.firstname}
                renderItem={this.renderNearByFriendItem} />
        </View>
    )
    renderNearByFriendItem = ({ item }) => (
        <View style={styles.friendItem}>
            <View style={styles.friendAvatar} />
            <Text style={styles.frinedName}>
                {item.firstname}
            </Text>
            <Text style={styles.friendAddress}>
                {item.address + " " + item.ages}
            </Text>


        </View>
    )

    renderTabNavigator = () => (
        <View style={styles.tabWrapper}>
            <View style={styles.tabItem} />
            <View style={styles.tabItem} />
            <View style={styles.tabItem} />
            <View style={styles.tabItem} />
            <View style={styles.tabItem} />
        </View>
    )


    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                <ScrollView style={styles.context}>
                    {this.renderTextTittle()}
                    {this.renderListAddress()}
                    {this.renderNearByRestaurant()}
                    {this.renderNearByFriend()}
                </ScrollView>
                {this.renderTabNavigator()}
            </View>
        )
    }
}
