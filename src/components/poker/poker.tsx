import * as React from 'react';

import style from './poker.css';
import { POKER_TYPES } from '../../common/constants';
import c from 'classnames';

interface IProps {
  value: string;
  type: POKER_TYPES;
  isBack: boolean;
  style?: React.CSSProperties;
}

export default class Poker extends React.PureComponent<IProps>{
  public render() {
    const pokerEl = ( // 正面扑克
      <div className={style.poker} style={this.props.style} >
        <div className={c(style.pokerValue, style.lt)}>{this.props.value}</div>
        <div className={c(style.pokerLittleType, style.lt)}>{this.props.type}</div>
        <div className={style.pokerType}>
          <span>{this.props.type}</span>
        </div>
        <div className={c(style.pokerLittleType, style.rb)}>{this.props.type}</div>
        <div className={c(style.pokerValue, style.rb)}>{this.props.value}</div>
      </div>
    );

    const backPoker = <div className={style.back} style={this.props.style} />; // 背面扑克

    if (this.props.isBack) {
      return backPoker;
    }
    return pokerEl;
  }
}
