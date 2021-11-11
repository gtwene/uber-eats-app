import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url: "https://www.cdc.gov/foodnet/images/GettyImages-533834088-food.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    services: 1244,
    rating: 4.5,
  },
  {
  name: "Beniana",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/1200px-Barbieri_-_ViaSophia25668.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    services: 1244,
    rating: 4.5,
  },
  {
    name: "India's Grill",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/1200px-Barbieri_-_ViaSophia25668.jpg",
    categories: ["Indian", "Bar"],
    price: "$$",
    services: 1244,
    rating: 4.9,
  }
];

export default function RestaurantItems(props){
  return(
  <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
  
    {props.restaurantData.map((restaurant, index) => (
    <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: "white"}}>
        <RestaurantImage image={restaurant.image_url} />
        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
    </View> 
  ))}
  </TouchableOpacity>
  )
}

const RestaurantImage = (props) => (
  <>
  <Image source={{
    uri: props.image,
  }} 

  style={{ width: "100%", height: 180 }}
  
/> 
<TouchableOpacity style={{ position: 'absolute', right: 20, top: 20}}>
  <MaterialCommunityIcons name='heart-outline' size={25} color="#fff" />
</TouchableOpacity>
</>
);


const RestaurantInfo = (props) => (
  <View 
    style={{ 
      flexDirection: "row", 
      justifyContent: "space-between", 
      alignItems: "center", 
      marginTop: 10
    }}
  >
    <View>
        <Text style={{ fontSize: 15, fontWeight: "bold"}}> 
            {props.name}
        </Text>
        <Text style={{ fontSize: 13, color: 'grey' }}>30-45 - min</Text>
     </View>
     <View 
      style={{ 
        backgroundColor: "#eee", 
        height: 30, 
        width: 30, 
        alignItems: "center",
        justifyContent: "cemter",
        borderRadius: 15
      }}
    >
        <Text>{props.rating}</Text>
     </View>
  </View>
)