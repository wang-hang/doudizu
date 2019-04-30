import * as React from 'react';
import * as style from './App.css';

import logo from './logo.svg';
// import Poker from './components/poker/poker'
// import { POKER } from './common/constants'

class App extends React.Component {
  public render() {
    return (
      <div className={style.App}>
        <header className={style.header}>
          <img src={logo} className={style.logo} alt="logo" />
          <h1 className={style.title}>You know nothing John Snow</h1>
        </header>
      </div>
    );
  }
}

export default App;
