import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Box, NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View, Button } from 'react-native';


import Home from './src/Components/Home';
import Details from './src/Components/Details';
import UsersProvider from './src/Context/context'



const Default = createNativeStackNavigator()
export default function App() {
  return (
    <UsersProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Default.Navigator>
            <Default.Screen
              name="home"
              component={Home}
            />
            <Default.Screen
              name="details"
              component={Details}
            />
          </Default.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </UsersProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export const Test=(props)=>{
//   return(
//   <Box>
//     <Button title='click me' 
//     onPress={()=>{
//       props.navigation.navigate({name:"details"})
//     }}>
//       <Text>
//         Click me
//       </Text>
//     </Button>
//   </Box>
//   )
// }
