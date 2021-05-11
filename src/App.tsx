import './App.css';
import InboxPage from "components/pages/InboxPage";
import ThreadPage from "components/pages/ThreadPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from 'state/reducers/dataReducer';

const store = configureStore({
  reducer: {
    data: dataReducer
  }
});

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/inbox">
              <InboxPage/>
            </Route>
            <Route path='/thread/:threadId'>
              <ThreadPage/>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
