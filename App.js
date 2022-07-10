import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from './app/screens/RegistrationScreen';
import LoginScreen from './app/screens/LoginScreen';
import StudentDashboard from './app/screens/StudentDashboard';
import TeacherDashboardScreen from './app/screens/TeacherDashboardScreen';

import TeacherLogin from './app/screens/TeacherLogin';
function HomeScreen({ navigation }) {
  return (
    <View  style={{backgroundColor:'white',flex:1}}>
        
      <Text style={{fontSize:36,marginTop:150,marginLeft:100,color:'#000080'}}>Point Plus+</Text>
      <View style={{flexDirection:'row',marginTop:300,marginLeft:50}}><Button style={{marginLeft:100}}
        title="Login as Teacher"
        onPress={() => navigation.navigate('TeacherLogin')}
      /><View style={{width:20,height:20}} />
      <Button style={{marginLeft:10}}
        title="Login as Student"
        onPress={() => navigation.navigate('Login')}
      /></View>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen 
   name="Point Plus" component={HomeScreen} options={{
          title: '',
          
            headerShown: false,
        
         
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TeacherLogin" component={TeacherLogin} />
        <Stack.Screen name="Register" component={RegistrationScreen} />
        <Stack.Screen name="TeacherDashboardScreen" component={TeacherDashboardScreen} />
        <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
