import React from 'react'
import { View, Text } from 'react-native'
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
const GOOGLE_PLACES_API_KEY = ''; // never save your real api key in a snack!

const SearchBar = ({ cityHandler }) => {
  return (
    <View style={{marginTop: 15, flexDirection: "row"}}>
      <GooglePlacesAutocomplete
      query = {{key: "AIzaSyDScTV45ihCxNMtETmOJwXZZ7gqEzxAKuU"}}
      onPress={(data, details = null) => {
        const city = data.description.split(',')[0]
        cityHandler(city);
      }}
       placeholder="Search"
       styles={{
         textInput: {
           backgroundColor: "#eee",
           borderRadius: 20,
           fontWeight: "700",
           marginTop: 7,
         },
         textInputContainer: {
           backgroundColor: "#eee",
           borderRadius: 50,
           flexDirection: "row",
           alignItems: "center",
           marginRight: 10,
         },
       }}

       renderLeftButton={() => (
         <View style={{ marginLeft: 10}}>
            <Ionicons name='location-sharp' size={24} />
         </View>
       )}
       renderRightButton={() => (
         <View
          style={
            {
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center"
            }
          }
         >
              <AntDesign 
                name="clockcircle" 
                size={11}
                style={{ marginRight: 6 }}
              />
            <Text>Search</Text>
         </View>
       )}
      />
    </View> 
  );
};


export default SearchBar;