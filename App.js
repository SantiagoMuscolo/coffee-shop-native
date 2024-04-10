
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartProvider } from './src/context/CartContext';
import ProductsList from './src/pages/ProductsList';
import ProductDetail from './src/pages/ProductDetail';
import Cart from './src/pages/Cart';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Home" component={ProductsList} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </>
  );
}
