import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux'

function App() {

  const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state -1
      case 'ZERO':
        return 0
      default:
      return state
    }
  }

  const store = createStore(counterReducer)

  store.dispatch({ type: 'INCREMENT' })

  

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
