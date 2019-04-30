import * as React from 'react';
// import c from 'classnames'

import style from './screen.css';
import SelfPokers from '../self-pokers/self-pokers';
import { POKER_TYPES, POKER_VALUES } from '../../common/constants';
import { IPoker } from '../../common/commonTypes';

const mockData: IPoker[] = [
  {
    value: POKER_VALUES._2,
    type: POKER_TYPES.fangpian,
  },
  {
    value: POKER_VALUES._3,
    type: POKER_TYPES.fangpian,
  },
  {
    value: POKER_VALUES._4,
    type: POKER_TYPES.fangpian,
  },
  {
    value: POKER_VALUES.JOKER_BIG,
    type: POKER_TYPES.joker,
  },
];

export default class Screen extends React.PureComponent {
  public render() {
    return (
      <div className={style.screen}>
        <div className={style.public}>
          <div className={style.left}>left</div>
          <div className={style.center}>center</div>
          <div className={style.right}>right</div>
        </div>
        <div className={style.self}>
          <SelfPokers pokers={mockData} />
        </div>
      </div>
    )
  }
}