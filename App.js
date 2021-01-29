
import React from "react";
import {Provider} from "react-redux";
import store from './components/redux/store'
import AppContainer from "./components/navigation/navigation";


 function App() {
  return (
    <Provider store={store}>
<AppContainer/> 
    </Provider>
  );
}
 
export default App;