import React, { Component } from 'react';
import { Text, View, StyleSheet ,Button,Platform,TouchableOpacity} from 'react-native';
import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';
import {Card,Icon} from 'react-native-elements';
import * as Progress from 'react-native-progress';

const StudentDashboard =({navigation})=> {
    
    return (
       
        <View style={styles.container}>
             

            <View style={{marginTop:30}}>
            <Card containerStyle={{height:150}}>
 <View>
  <Card.Title style={{marginLeft:-180}}>Welcome!First Name</Card.Title></View>
  <View style={{marginTop:35}}><Text style={{marginTop:-30}}>Activity Point Progress</Text><Progress.Bar progress={0.5} width={300} height={18}showsText={true} color={'#000080'} borderRadius={10} borderColor={'black'} marginTop={10}/>
  <Text style={{marginTop:10}}>Class:</Text>
  </View>
  
 
</Card></View><View style={{flexDirection:'row',marginLeft:7,marginTop:50}}>
           <TouchableOpacity activeOpacity={0.96}  onPress={() => navigation.navigate('EnterDetails')}><Card containerStyle={{width:170,height:170,borderRadius:15,backgroundColor:'#3395ff'}}>
           <Icon
  name='upload' type='font-awesome-5' size={40}/>
  <Card.Title style={{marginTop:20,fontSize:18,color:'#4f4e4c'}}>Upload Certificates</Card.Title></Card></TouchableOpacity>
           <TouchableOpacity activeOpacity={0.96} onPress={() => navigation.navigate('ViewCertificates')} style={{color:'white'}}><Card containerStyle={{width:170,height:170,borderRadius:15,backgroundColor:'#3395ff'}}>
           <Icon
  name='list' type='font-awesome-5' size={40} />
  <Card.Title style={{marginTop:20,fontSize:18,color:'#4f4e4c'}}>View Certificates</Card.Title></Card></TouchableOpacity></View>
           <View style={{flexDirection:'row',marginLeft:100,marginTop:50}}>
           
           <TouchableOpacity activeOpacity={0.96} onPress={() => navigation.navigate('ViewActivityPoints')}><Card containerStyle={{width:170,height:170,borderRadius:15,backgroundColor:'#3395ff'}}>
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