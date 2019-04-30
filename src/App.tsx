import * as React from 'react';

import style from './App.css';
// import Poker from './components/poker/poker'
// import { POKER } from './common/constants'
import Screen from './components/screen/Screen'

class App extends React.Component {
  public render() {
    return (
      <div className={style.App}>
        <Screen  />
      </div>
    );
  }
}

export default App;
