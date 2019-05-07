import * as React from 'react';
// import c from 'classnames'

import style from './muti-pokers.css';
import { IPoker, IPokerWithSelected } from '../../common/commonTypes';
import Poker from '../poker/poker';

// pws 是pokersWithSelect的缩写

interface IProps {
  pokersWithSelect?: IPokerWithSelected[];
  onSelect: (pws: IPokerWithSelected) => void;
}

interface IState {
  selectedPokers: IPoker[];
}

export default class MutiPokers extends React.PureComponent<IProps, IState> {
  public static  defaultProps = {
    pokersWithSelect: [],
  };

  public state = {
    selectedPokers: [] as IPoker[],
  };

  public render() {
    const pokerContainerStyle: React.CSSProperties = {
      width: `${(this.props.pokersWithSelect!.length - 1) * 50}px`,
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
    return this.props.pokersWithSelect!.map((pws, idx) => {
      const offsetLeft: number = idx * 88; // 扑克向左偏移的距离
      const pokerStyle: React.CSSProperties = { left: `-${offsetLeft}px` };

      if (pws.selected) {
        pokerStyle.top = '-20px';
      } else {
        pokerStyle.top = '0px';
      }

      return (
        <Poker
          value={pws.poker.value}
          type={pws.poker.type}
          isBack={false}
          key={`${pws.poker.type}/${pws.poker.value}`}
          style={pokerStyle}
          onSelect={this.props.onSelect}
        />
      );
    });
  }
}
