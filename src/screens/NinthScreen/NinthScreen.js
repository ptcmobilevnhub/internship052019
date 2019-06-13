import React, { Component } from "react";
import { View, Text, Image, FlatList, ImageBackground } from "react-native";
import { IMAGES, FONTS } from "../../../assets";
import Header from "../../components/Header";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";

class NinthScreen extends Component {
  constructor(props) {
    super(props);

    this.savedAddresses = [
      {
        icon: IMAGES.iconOffice,
        title: "Office",
        address: "BDlive24,Road 8 Niketon, gulshan, 1000"
      },
      {
        icon: IMAGES.iconHome,
        title: "Home ",
        address: "BDlive24,Road 8 Niketon, gulshan, 1000"
      }
    ];

    this.nearbyData = [
      {
        id: "6516",
        image: IMAGES.pizza,      
        title: "Grandiose Restaurant",
        address: "Airport Road Khilkhet,1229"
      },
      {
        id: "2064",
        image: IMAGES.pizza1,
        title: "Grandiose Restaurant 123",
        address: "Airport Road Khilkhet,1229"
      },
      {
        id: "5065",
        image: IMAGES.pizza2,
        title: "Grandiose Restaurant 123",
        address: "Airport Road Khilkhet,1229"
      },
      {
        id: "6969",
        image: IMAGES.pizza3,
        title: "Grandiose Restaurant 123",
        address: "Airport Road Khilkhet,1229"
      }
    ];

    this.friendNearbyData = [
      {
        id: "2319",
        avatar: "https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/35547719_971388159701840_1279744102082019328_n.jpg?_nc_cat=111&_nc_oc=AQnXFnLRMYrZwi6zUqErJqU_8y6zV74XJOv8aLwW4RLR5D3Rqj_dfokU2xkm0v86npM&_nc_ht=scontent.fsgn5-3.fna&oh=c505005efe0b3a15ac2d988095eee731&oe=5D99D025",
        firstName: "Smirk",
        lastName: "Dhanmondi",
        age: 32
      },
      {
        id: "2320",
        avatar: "https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/35547719_971388159701840_1279744102082019328_n.jpg?_nc_cat=111&_nc_oc=AQnXFnLRMYrZwi6zUqErJqU_8y6zV74XJOv8aLwW4RLR5D3Rqj_dfokU2xkm0v86npM&_nc_ht=scontent.fsgn5-3.fna&oh=c505005efe0b3a15ac2d988095eee731&oe=5D99D025",
        firstName: "Rayhan",
        lastName: "Dhanmondi",
        age: 32
      },
      {
        id: "2321",
        avatar: "https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/35547719_971388159701840_1279744102082019328_n.jpg?_nc_cat=111&_nc_oc=AQnXFnLRMYrZwi6zUqErJqU_8y6zV74XJOv8aLwW4RLR5D3Rqj_dfokU2xkm0v86npM&_nc_ht=scontent.fsgn5-3.fna&oh=c505005efe0b3a15ac2d988095eee731&oe=5D99D025",
        firstName: "Farhana",
        lastName: "Dhanmondi",
        age: 32
      },
      {
        id: "2322",
        avatar: "https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/35547719_971388159701840_1279744102082019328_n.jpg?_nc_cat=111&_nc_oc=AQnXFnLRMYrZwi6zUqErJqU_8y6zV74XJOv8aLwW4RLR5D3Rqj_dfokU2xkm0v86npM&_nc_ht=scontent.fsgn5-3.fna&oh=c505005efe0b3a15ac2d988095eee731&oe=5D99D025",
        firstName: "Bethony",
        lastName: "Dhanmondi",
        age: 32
      }
    ];
  }

  renderHeader = () => {
    const { navigation } = this.props;
    return (
      <View>
        <Header
          navigation={navigation}
          place='EighthScreen'
          HeaderLeft={<Image source={IMAGES.arrowLeftBlack} />}
          HeaderRight={
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={styles.name}>Shadhin</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center"
                  }}
                >
                  <Text style={styles.number}>4.89</Text>
                  <Icon name="star" />
                </View>
              </View>
              <Image
                style={{ width: 35, height: 35, marginLeft: 17 }}
                source={IMAGES.iconMen}
              />
            </View>
          }
        />
      </View>
    );
  };

  renderSavedAddressesSection = () => {
    return (
      <View>
        <Text style={styles.savedAddressTitle}>
          Where would you like to go !
        </Text>
        {this.savedAddresses.map(item => (
          <View style={styles.savedAddressesItemContainer} key={item.title}>
            <View style={styles.savedAddressesItemIconContainer}>
              <Image style={styles.savedAddressesItemIcon} source={item.icon} />
            </View>

            <View>
              <Text style={styles.savedAddressesItemTitle}>{item.title}</Text>
              <Text style={styles.savedAddressesItemAddress}>
                {item.address}
              </Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  renderNearBySection = () => {
    return (
      <View>
        <Text style={styles.nearbyTitle}>Nearby Restaurants</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={this.nearbyData}
          renderItem={this.renderNearByItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  renderNearByItem = ({ item }) => {
    return (
      <View
        style={{
          width: 300,
          height: 180,
          marginRight: 16,
        }}
      >
        <ImageBackground
          source={item.image}
          style={{ width: 300, height: 180, borderRadius: 10 }}
          imageStyle={{ borderRadius: 10 }}
        >
          <View style={styles.nearbyContainer}>
            <Text style={styles.nearbyItemTitle}>{item.title}</Text>
            <Text style={styles.nearbyItemAddress}>{item.address}</Text>
          </View>
          
        </ImageBackground>
      </View>
    );
  };

  renderFriendNearBySection = () => {
    return (
      <View>
        <Text style={styles.friendNearbyTitle}>Friend nearby you</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.friendNearbyData}
          renderItem={this.renderFriendNearByItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  renderFriendNearByItem = ({ item }) => {
    return (
      <View
        style={styles.friendNearbyContainer}
      >
        <Image source={{ uri: item.avatar}} style={styles.avatarFriend}/>
        <Text style={styles.friendNearbyItemTitle}>{item.firstName}</Text>
        <Text style={styles.friendNearbyItemDetail}>{`${item.lastName} ${item.age}`}</Text>
      </View>
    );
  };

  renderTabNavigator = () => {
    return (
      <View style={styles.tabContainer}>
        <Image source={IMAGES.iconMoto}/>
        <Image source={IMAGES.iconFood}/>
        <Image source={IMAGES.iconGroup}/>
        <Image source={IMAGES.iconMessage}/>
        <Image source={IMAGES.iconMore}/>
      </View>
    );
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.renderHeader()}
          {this.renderSavedAddressesSection()}
          {this.renderNearBySection()}
          {this.renderFriendNearBySection()}
          {/* {this.renderTabNavigator()} */}
        </View>
      </ScrollView>
    );
  }
}

export default NinthScreen;
