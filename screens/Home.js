import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'

const YELP_API_KEY = "lQSer_OwsMzRJNlflSPuHcmRIm8m0i8LWw4eBNUBfRk98qaAjZXfT_Xs4Jv9wGuVhzI2Li5ESOYlVrf99aeJ2KXy_XWftkvvMlBLj2E_NMFCBUXjLJOIBWfjYyRTYXYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants)
  const [ city, setCity ] = React.useState("37.773972", "-122.431297");
  const [activeTab, setActiveTab] = React.useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=${city}&longitude=${city}
`;


  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    }}

    return fetch(yelpUrl, apiOptions)
    .then((res) => res.json())
    .then(json => setRestaurantData(json.businesses));
};

useEffect(() => {
  getRestaurantsFromYelp();
}, [city])

  return (
    <SafeAreaView style={{ backgroundColor: "#eee" }} >
      <View style={{ backgroundColor: "white", padding: 15 }}>   
         <HeaderTabs /> 
         <SearchBar  cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData = {restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}