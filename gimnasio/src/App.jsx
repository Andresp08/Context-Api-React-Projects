
import { GymProvider } from "./context/GymProvider"
import AppGym from "./components/AppGym"

const App = ()  => {

  return (
    <div>
      <GymProvider>
        <AppGym />
      </GymProvider>
    </div>
  )
}

export default App
