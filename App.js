import { NativeRouter } from 'react-router-native';
import Main from './src/pages/Main';
import { CartProvider } from './src/context/CartContext';

export default function App() {
  return (
    <>
      <CartProvider>
        <NativeRouter>
          <Main />
        </NativeRouter>
      </CartProvider>
    </>
  );
}
