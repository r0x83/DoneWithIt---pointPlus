
import React, {useState} from 'react';
 

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
 
//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
 
const HomeScreen = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);
 
  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };
  
  const renderSkipButton = () => {
    return (
      <Button >Continue</Button>
    );
  };
 
  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>
          {item.title}
        </Text>
       
            {
            item.key=='s1' && (
             <TouchableOpacity style={{borderRadius:10,backgroundColor:'#20d2bb',height:50,paddingLeft:24,paddingTop:12,width:170,marginTop:-150}}
               onPress={() => navigation.navigate('StudentLogin')}>
                 <Text style={{color:'white',fontWeight:'bold'}}>{"Login As Student"}</Text>
             </TouchableOpacity>
            )
        }

       
        {
            item.key=='s2' && (
              <TouchableOpacity style={{borderRadius:10,backgroundColor:'#3395ff',height:50,paddingLeft:24,paddingTop:12,width:170,marginTop:-150}}
              onPress={() => navigation.navigate('TeacherLogin')}>
                <Text style={{color:'white',fontWeight:'bold'}}>{"Login As Teacher"}</Text>
            </TouchableOpacity>
            )
        }
      </View>
    );
    
    
  };
   const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip
              from any slide or Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showNextButton={false}
          showDoneButton={false}
          onSkip={onSkip}
          
          bottomButton={true}
          renderNextButton={_renderNextButton}
        />
      )}
    </>
  );
};
 
export default HomeScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 35,
    color: 'purple',
    textAlign: 'center',
    marginBottom: 100,
    fontWeight: 'bold',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor:'red',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
 
const slides = [
  {
    key: 's1',
    
    title: 'Point Plus+',
    image: {
      uri:
      'https://cdn-icons-png.flaticon.com/512/3068/3068421.png',
    },
    backgroundColor: 'white',
     
  },
  {
    key: 's2',
    title: 'Point Plus+',
   
    image: {
      uri:
        'https://cdn-icons-png.flaticon.com/512/1995/1995539.png',
    },
    backgroundColor: 'white'
  },
  
 
];
