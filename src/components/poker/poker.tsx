import * as React from 'react';

import style from './poker.css';
import { POKER_TYPES, POKER_VALUES } from '../../common/constants';
import { IPoker } from '../../common/commonTypes';
import c from 'classnames';

interface IProps extends IPoker{
  isBack: boolean;
  style?: React.CSSProperties;
  onSelect: ({ poker, select }: { poker: IPoker, select: boolean }) => void;
}

interface IState {
  selected: boolean;
}

export default class Poker extends React.PureComponent<IProps, IState> {
  public state = {
    selected: false,
  };

  public render() {
    const pokerEl = ( // 正面扑克
      <div className={style.poker} style={this.props.style} onClick={this.handleClick}>
        <div className={style.lt}>
          <div className={c(style.pokerValue)}>{this.props.value}</div>
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
      <div
        className={c(style.poker, style.joker, jokerCls)}
        style={this.props.style}
        onClick={this.handleClick}
      >
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

  private handleClick = () => {
    const select = !this.state.selected;
    const poker = { value: this.props.value, type: this.props.type };
    this.setState({ selected: select });

    this.props.onSelect({poker, select});
  }
}
