import React, { Component } from 'react';
import { Text, View, StyleSheet ,Button,Platform} from 'react-native';
import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';
import {Card} from 'react-native-elements';

const Icon = ({ icon, item, background }) => (
    <FontAwesome
        name={icon}
        size={40}
        color={
            item.iconColor || (!item.background || !background ? '#3498db' : '#fff')
        }
        style={item.styleIcon}
    />
);


const data = [
    {   
        name: 'Assign Points',
        background: '#0b51bf',
        icon: (item, background) => Icon({ icon: 'certificate', item, background }),
        iconColor: 'white',
        rippleColor: '#000',
    },
    {
        name: 'Resolve Tickets',
        background: '#0b51bf',
        icon: (item, background) => Icon({ icon: 'check', item, background }),
        styleIcon: { color: 'white' },
    },
    {
        name: 'Student Performance Review',
        background: '#0b51bf',
        icon: (item, background) => Icon({ icon: 'star', item, background }),
    },
    {
        name: 'Sort and Filter Certificates',
        background: '#0b51bf',
        icon: (item, background) => Icon({ icon: 'filter', item, background }),
        styleName: { color: 'white', fontWeight: 'bold' },
    },
   
];

    

const DashboardScreen =()=> {
    const card = ({ name }) => console.log('Card: ' + name);
   
    return (
       
        <View style={styles.container}>
             

            <View style={{marginTop:80}}>
            <Card >
 
  <Card.Title style={{marginLeft:-180}}>Welcome!First Name</Card.Title>
  <Card.Image style={{height:70,width:40,marginLeft:300,marginTop:5,marginBottom:-30,position:'relative'}}source={require('../assets/user.png')} />
  
  
  <Button
    icon={<Icon name='check' color='red' />}
    Style={{borderRadius: 0,marginRight:50}}
    title='VIEW ' />
</Card></View>
            
            <Dashboard style={{marginTop:50}}
                data={data}
                background={true}
                card={card}
                column={2}
                rippleColor={'#3498db'}
            /></View>
       
    );
}

export default DashboardScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        
    },
});