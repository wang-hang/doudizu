import * as React from 'react';
// import c from 'classnames'

import style from './muti-pokers.css';
import { IPoker } from '../../common/commonTypes';
import Poker from '../poker/poker';

interface IProps {
  pokers?: IPoker[];
}

export default class MutiPokers extends React.PureComponent<IProps> {
  public static  defaultProps = {
    pokers: [],
  };

  public render() {
    const pokerContainerStyle: React.CSSProperties = {
      width: `${(this.props.pokers!.length - 1) * 50 + 100}px`,
    };

    return (
      <div className={style.mutiPokers}>
        <div className={style.pokerContainer} style={pokerContainerStyle} >
          {this.renderPokers()}
        </div>
      </div>
    );
  }

  private renderPokers = (): JSX.Element[]  => {
    return this.props.pokers!.map((p, idx) => {
      const offsetLeft: number = idx * 80;

      const pokerStyle: React.CSSProperties = { left: `-${offsetLeft}px` };
      return (
        <Poker
          value={p.value}
          type={p.type}
          isBack={false}
          key={`${p.type}/${p.value}`}
          style={pokerStyle}
        />
      );
    });
  }
}
