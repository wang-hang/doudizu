import * as React from 'react';
import { ROLE } from '../../common/constants';
import style from './other-player.css';
import { IPoker } from 'src/common/commonTypes';

interface IProp {
  role: ROLE;
  pokers: IPoker[];
}

class OtherPlayer extends React.PureComponent<IProp> {
  public render = () => {
    return (
      <div className={style.otherPlayer}>
        <div>Role <span className={style.role}>{this.props.role}</span></div>
        <div>poker rest: <span className={style.rest}>{this.props.pokers.length}</span></div>
      </div>
    );
  }
}

export default OtherPlayer;
