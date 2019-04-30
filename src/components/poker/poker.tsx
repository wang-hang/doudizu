import * as React from 'react';

import style from './poker.css';
import { POKER_TYPES, POKER_VALUES } from '../../common/constants';
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
        <div className={style.lt}>
          <div className={c(style.pokerValue, )}>{this.props.value}</div>
          <div className={c(style.pokerLittleType, style.lt)}>{this.props.type}</div>
        </div>
        <div className={style.pokerType}>
          <span>{this.props.type}</span>
        </div>
        <div className={style.rb}>
          <div className={c(style.pokerValue)}>{this.props.value}</div>
          <div className={c(style.pokerLittleType)}>{this.props.type}</div>
        </div>
      </div>
    );

    const backPoker = <div className={style.back} style={this.props.style} />; // 背面扑克

    const isBigJoker = this.props.value === POKER_VALUES.JOKER_BIG;
    const jokerCls = isBigJoker ? style.big : style.small;

    const JOKER = (
      <div className={c(style.poker, style.joker, jokerCls)} style={this.props.style}>
        <div className={c(style.jokerValue, style.lt)}>JOKER</div>
        <div className={style.jokerType}>王</div>
        <div className={c(style.jokerValue, style.rb)}>JOKER</div>
      </div>
    );

    if (this.props.type === POKER_TYPES.joker) { // 判断是不是大小王
      return JOKER;
    }
    if (this.props.isBack) {
      return backPoker;
    }
    return pokerEl;
  }
}
