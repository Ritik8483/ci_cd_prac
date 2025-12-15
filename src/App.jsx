import { Provider } from 'react-redux'
import './App.css'
import GraphQL from './components/GraphQL'
import ReduxComponent from './components/ReduxComponent'
import UseEffect from './components/UseEffect'
import store from './redux/store/store'

function App() {

  return (
    <>
    <Provider store={store} >
      <h1>App Component</h1>
      {/* <GraphQL/> */}
      {/* <UseEffect/> */}
      <ReduxComponent/>
      </Provider>
    </> 
  )
}

export default App


