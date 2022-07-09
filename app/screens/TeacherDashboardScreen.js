import React, { Component } from 'react';
import { Text, View, StyleSheet ,Button,Platform} from 'react-native';
import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';
import {Card} from 'react-native-elements';

const Icon = ({ icon, item, background }) => (
    <FontAwesome
        name={icon}
        size={30}
        color={
            item.iconColor || (!item.background || !background ? '#3498db' : '#fff')
        }
        style={item.styleIcon}
    />
);


const data = [
    {   
        name: 'Assign Points',
        background:'#3173de',
        icon: (item, background) => Icon({ icon: 'award-simple', item, background }),
        iconColor: 'white',
        rippleColor: 'gold',
        
    },
    {
        name: 'Resolve Tickets',
        background: '#3173de',
        icon: (item, background) => Icon({ icon: 'check', item, background }),
        styleIcon: { color: 'white' },
        borderRadius:'50',
    },
    {
        name: 'Student Performance Review',
        background: '#3173de',
        icon: (item, background) => Icon({ icon: 'star', item, background }),
        styleIcon: { color: 'gold' },
    
    },
    {
        name: 'Sort and Filter Certificates',
        background: '#3173de',
        icon: (item, background) => Icon({ icon: 'filter', item, background }),
        styleName: { color: 'white', fontWeight: 'bold' },
       borderRadius:'3',
    },
   
];

    

const TeacherDashboardScreen =()=> {
    const card = ({ name }) => console.log('Card: ' + name);
   
    return (
       
        <View style={styles.container}>
             

            <View style={{marginTop:30}}>
            <Card >
 
  <Card.Title style={{marginLeft:-180}}>Welcome!First Name</Card.Title>
  <Card.Image style={{height:70,width:70,marginLeft:280}}source={require('../assets/user.png')} />
  
  
  
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

export default TeacherDashboardScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        
    },
});