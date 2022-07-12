import React, { Component } from 'react';
import { Text, View, StyleSheet ,Button,Platform,TouchableOpacity} from 'react-native';
import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';
import {Card,Icon} from 'react-native-elements';
 

const StudentDashboard =({navigation})=> {
    
    return (
       
        <View style={styles.container}>
             

            <View style={{marginTop:30}}>
            <Card >
 <View>
  <Card.Title style={{marginLeft:-180}}>Welcome!First Name</Card.Title></View>
  <View><Card.Image style={{height:70,width:70,marginLeft:280}}source={require('../assets/user.png')} />
  </View>
  
 
</Card></View><View style={{flexDirection:'row',marginLeft:7,marginTop:50}}>
           <TouchableOpacity  onPress={() => navigation.navigate('EnterDetails')}><Card containerStyle={{width:170,height:170,borderRadius:15,backgroundColor:'#e8e7e6'}}>
           <Icon
  name='upload' type='font-awesome-5' size={40}/>
  <Card.Title style={{marginTop:20,fontSize:18,color:'#4f4e4c'}}>Upload Certificates</Card.Title></Card></TouchableOpacity>
           <TouchableOpacity style={{color:'white'}}><Card containerStyle={{width:170,height:170,borderRadius:15,backgroundColor:'#e8e7e6'}}>
           <Icon
  name='list' type='font-awesome-5' size={40} iconStyle={{color:'blue'}}/>
  <Card.Title style={{marginTop:20,fontSize:18,color:'#4f4e4c'}}>View Certificates</Card.Title></Card></TouchableOpacity></View>
           <View style={{flexDirection:'row',marginLeft:7,marginTop:50}}>
           <TouchableOpacity><Card containerStyle={{width:170,height:170,borderRadius:15,backgroundColor:'#e8e7e6'}}>
           <Icon
  name='hand-paper' type='font-awesome-5' size={45} iconStyle={{color:'#f7d497'}}/>
  <Card.Title style={{marginTop:20,fontSize:18,color:'#4f4e4c'}}>Raise Ticket</Card.Title></Card></TouchableOpacity>
           <TouchableOpacity><Card containerStyle={{width:170,height:170,borderRadius:15,backgroundColor:'#e8e7e6'}}>
           <Icon
  name='trophy' type='font-awesome-5' size={40} iconStyle={{color:'#d1b202'}}/>
  <Card.Title style={{marginTop:20,fontSize:18,color:'#4f4e4c'}}>View Activity Points</Card.Title></Card></TouchableOpacity></View>
            </View>
       
    );
}

export default StudentDashboard;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        
    },
});