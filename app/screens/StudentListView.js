import React from 'react';
 import UserAvatar from 'react-native-user-avatar';
import { Alert, View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
 
export default function StudentListView({navigation}) {
 
  const Languages  = [
    {
      id: 1,
      name: 'Jim Halpert',
    },
    {
      id: 2,
      name: 'Dwight Schrute',
    },
    {
      id: 3,
      name: 'Michael Scott',
    },
    {
      id: 4,
      name: 'Pam Beasley',
    },
    {
      id: 5,
      name: 'James Bond',
    },
    {
      id: 6,
      name: 'Chandler Bing',
    },
    {
      id: 7,
      name: 'Andy Bernard',
    },
    {
      id: 8,
      name: 'John Peter',
    },
    {
      id: 9,
      name: 'John Wick',
    },
    {
      id: 10,
      name: 'David Wallace',
    }
  ];
 
  const getItem = (name) => {
 
    Alert.alert(name);
 
  }
 
  const ItemRender = ({ name }) => (
    <View style={styleSheet.item}>
    <UserAvatar size={30}  name={name} style={{
width: 50,
height: 50,
borderRadius: 25,
overflow:'hidden'
}} />
      <Text style={styleSheet.itemText} onPress={() => navigation.navigate('ViewActivityPoints')} >{name}</Text>
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
    flexDirection:"row"
  },
  
 
  itemText: {
    fontSize: 24,
    color: 'black',
    marginLeft:15,
    marginTop:10
  }
 
});