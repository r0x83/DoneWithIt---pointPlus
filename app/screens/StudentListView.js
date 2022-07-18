import React from 'react';
 
import { Alert, View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
 
export default function App() {
 
  const Languages  = [
    {
      id: 1,
      name: 'Hindi',
    },
    {
      id: 2,
      name: 'English',
    },
    {
      id: 3,
      name: 'Spanish',
    },
    {
      id: 4,
      name: 'Bengali',
    },
    {
      id: 5,
      name: 'Russian',
    },
    {
      id: 6,
      name: 'Japanese',
    },
    {
      id: 7,
      name: 'French',
    },
    {
      id: 8,
      name: 'Italian',
    },
    {
      id: 9,
      name: 'Indonesian',
    },
    {
      id: 10,
      name: 'Dutch',
    }
  ];
 
  const getItem = (name) => {
 
    Alert.alert(name);
 
  }
 
  const ItemRender = ({ name }) => (
    <View style={styleSheet.item}>
      <Text style={styleSheet.itemText} onPress={()=> getItem(name)}>{name}</Text>
    </View>
  );
 
  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }
 
  return (
    <SafeAreaView style={styleSheet.MainContainer}>
 
      <FlatList
        data={Languages}
        renderItem={({ item }) => <ItemRender name={item.name} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemDivider}
      />

      
 
    </SafeAreaView>
  );
}
 
const styleSheet = StyleSheet.create({
  
 
  MainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
 
  
  item: {
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },
  
 
  itemText: {
    fontSize: 24,
    color: 'black'
  }
 
});