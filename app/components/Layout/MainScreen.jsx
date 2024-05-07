import React from 'react';
import { View, StyleSheet, Text  } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from '../HOME/HomeScreen';
import BottomMenu from './BottomMenu';
import LeftMenu from './LeftMenu';
import CompteScreen from '../Compte/CompteScreen';
import ParametreScreen from '../Parametre/ParametreScreen';
import { AntDesign } from "@expo/vector-icons";


const Drawer = createDrawerNavigator();

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Drawer.Navigator  drawerContent={(props) => <LeftMenu {...props} />} initialRouteName="Home" >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Compte"
          component={CompteScreen}
          options={{ headerShown: false } }
        />
        <Drawer.Screen
          name="Parametre"
          component={ParametreScreen}
          options={{ 
            title: null,
            headerLeft: (props) => (
              <View style={styles.headerContainer}>
                <AntDesign
                  name="left"
                  size={20}
                  color="black"
                  style={{ margin: 10 }}
                  onPress={props.onPress}
                />
                <Text style={styles.paraTitle}>Paramètre</Text>
              </View>
            ),
          }}
        />
      </Drawer.Navigator>
      <BottomMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fd",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  paraTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default MainScreen;