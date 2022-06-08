
import AppCoctel from './components/AppCotel';
import { CoctelProvider } from './context/CoctelContext';

function App() {

  return (
    <CoctelProvider>
      <AppCoctel/>
    </CoctelProvider>
  )
}

export default App
