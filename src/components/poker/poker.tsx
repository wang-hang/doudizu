import * as React from 'react'

import style from './poker.css'
import { POKER } from '../../common/constants'
import c from 'classnames'

interface IProps {
  value: string
  type: POKER

}

export default class Poker extends React.PureComponent<IProps>{
  public render() {

    return (
      <div className={style.poker}>
        <div className={c(style.pokerValue, style.lt)}>{this.props.value}</div>
        <div className={style.pokerType}>
          <span>{this.props.type}</span>
        </div>
        <div className={c(style.pokerValue, style.rb)}>{this.props.value}</div>
      </div>
    )
  }
}