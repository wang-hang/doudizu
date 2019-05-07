import * as React from 'react';

import style from './myBtn.css';

interface IProp {
  type?: 'default' | 'primary';
  onClick?: () => void;
  style?: React.CSSProperties;
}

class MyBtn extends React.PureComponent<IProp> {
  public render = () => {
    return (
      <button className={style.myBtn}>{this.props.children}</button>
    );
  }
}

export default MyBtn;
