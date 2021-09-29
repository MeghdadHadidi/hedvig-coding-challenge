import { PerilsPage } from "@/views"
import { createInitialState, reducer, StoreProvider } from "./store"

import './App.css'

const initialState = createInitialState()

function App() {
  return (
    <div className="light">
      <StoreProvider initialState={initialState} reducer={reducer}>
        <PerilsPage />
      </StoreProvider>
    </div>
  )
}

export default App
