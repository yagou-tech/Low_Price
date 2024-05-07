import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./app/components/SignInScreen";
import SignUpScreen from "./app/components/SignUpScreen";
import ForgetPassScreen from "./app/components/ForgetPassScreen";
import SuccessfullyScreen from "./app/components/Successfully";
import MainScreen from "./app/components/Layout/MainScreen";
import ProductDetailsScreen from "./app/components/ProductDetailsScreen";
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";
import ProductsScreen from "./app/components/ProductsScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInScreen">
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgetPassScreen"
          component={ForgetPassScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SuccessfullyScreen"
          component={SuccessfullyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={({ route }) => ({
            headerStyle: { backgroundColor: "#f5f6fd" },
            title: null,
            headerRight: (props) => (
              <View style={styles.rightContainer}>
                <View>
                  <MaterialIcons
                    name="favorite-outline"
                    size={24}
                    color="black"
                    style={{ margin: 10 }}
                    onPress={props.onPress}
                  />
                </View>
                <View>
                  <Feather
                    name="share-2"
                    size={24}
                    color="black"
                    style={{ margin: 10 }}
                    onPress={props.onPress}
                  />
                </View>
              </View>
            ),
            headerLeft: (props) => (
              <View style={styles.headerContainer}>
                <AntDesign
                  name="left"
                  size={24}
                  color="black"
                  style={{ margin: 10 }}
                  onPress={props.onPress}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="ProductsScreen"
          component={ProductsScreen}
          options={{
            title: "Tous les produits",
            headerRight: () => (
              <View style={styles.rightContainer}>
                <View style={styles.filterContainer}>
                  <AntDesign
                    name="filter"
                    size={31}
                    color="#BBBBBB"
                    style={styles.filterIcon}
                  />
                </View>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
  },
  rightContainer: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  iconContainer: {
    justifyContent: "space-around",
  },
  rightIcon: {
    flexDirection: "row",
    width: "100%",
  },
  filterContainer: {
    marginEnd: 10,
    backgroundColor: "#fff",
    height: 46,
    width:46,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 10,
  },
});
