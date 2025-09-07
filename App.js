import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
//importar pantallas 
import InicioScreen from './src/components/inicio';
import ContactoScreen from './src/components/contacto';
import BuscarScreen from './src/components/buscar';
import AcercadeScreen from './src/components/acercade';
const Tab=createBottomTabNavigator();

export default function App() {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
         <Tab.Navigator 
         screenOptions={{
          //estilos de la parte superior
          headerTitleAlign:'center', 
            headerStyle: { backgroundColor: "#004214ff" },
            headerTintColor: "#ffffffff", 
            //estilos de la parte inferior
            
            tabBarStyle: { backgroundColor: "#009b53ff" }, 
         }}>
            
          <Tab.Screen name= "Inicio" component={InicioScreen }  options={{ //optimizar este codigo para llamar funcion de manera rapida
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" size={size} color={color} />
      ), 
    }} /> 
    
          <Tab.Screen name= "Contacto" component={ContactoScreen}   
             options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="person" size={size} color={color} />
      ),
    }} />
          <Tab.Screen name= "Buscar" component={BuscarScreen}
              options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="search-outline" size={size} color={color} />
      ),
    }} />
          <Tab.Screen name= "Acerca de" component={AcercadeScreen}
           options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="document-text-outline" size={size} color={color} />
      ),
    }} />


          </Tab.Navigator> 
        </NavigationContainer>
        </GestureHandlerRootView>
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
