import React, { Component } from 'react';
import { Text, View, StyleSheet ,Button,Platform,TouchableOpacity} from 'react-native';
import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';
import {Card,Icon} from 'react-native-elements';
 

const TeacherDashboardScreen =()=> {
    
    return (
       
        <View style={styles.container}>
             

            <View style={{marginTop:30}}>
            <Card >
 <View>
  <Card.Title style={{marginLeft:-180}}>Welcome!First Name</Card.Title></View>
  <View><Card.Image style={{height:70,width:70,marginLeft:280}}source={require('../assets/user.png')} />
  </View>
  
 
</Card></View><View style={{flexDirection:'row',marginLeft:7,marginTop:50}}>
           <TouchableOpacity ><Card containerStyle={{width:170,height:170,borderRadius:15,backgroundColor:'#3173de'}}>
           <Icon
  name='award' type='font-awesome-5' size={40}/>
  <Card.Title style={{marginTop:20,fontSize:18,color:'white'}}>Assign Points</Card.Title></Card></TouchableOpacity>
           <TouchableOpacity style={{color:'white'}}><Card containerStyle={{width:170,height:170,borderRadius:15,backgroundColor:'#3173de'}}>
           <Icon
  name='check' type='font-awesome-5' size={40}/>
  <Card.Title style={{marginTop:20,fontSize:18,color:'white'}}>Resolve Tickets</Card.Title></Card></TouchableOpacity></View>
           <View style={{flexDirection:'row',marginLeft:7,marginTop:50}}>
           <TouchableOpacity><Card containerStyle={{width:170,height:170,borderRadius:15,backgroundColor:'#3173de'}}>
           <Icon
  name='star' type='font-awesome-5' size={45}/>
  <Card.Title style={{marginTop:20,fontSize:18,color:'white'}}>Student Performance Review</Card.Title></Card></TouchableOpacity>
           <TouchableOpacity><Card containerStyle={{width:170,height:170,borderRadius:15,backgroundColor:'#3173de'}}>
           <Icon
  name='filter' type='font-awesome-5' size={40}/>
  <Card.Title style={{marginTop:20,fontSize:18,color:'white'}}>Sort and Filter Certificates</Card.Title></Card></TouchableOpacity></View>
            </View>
       
    );
}

export default TeacherDashboardScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        
    },
});