import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'; 
import store from './redux/store';
import Album from './components/album/Album';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Thumbnails from './components/thumbnail/Thumbnail';
import Header from './components/header/Header.js';

function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header/>
          <Switch>
            <Route path="/" exact component={Album}/>
            <Route path="/photos" exact component={Thumbnails}/>
            <Redirect to='/'/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
