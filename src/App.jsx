import { Provider } from 'react-redux';
import { store } from './store/store';

import './global.css';
import { Main } from './components/Main/Main';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
