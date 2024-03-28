import { NativeRouter } from 'react-router-native';
import Main from './src/pages/Main';

export default function App() {
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
    
  );
}
