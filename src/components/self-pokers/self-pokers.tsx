import * as React from 'react';
// import c from 'classnames'

import style from './self-pokers.css';
import { IPoker, IPokerWithSelected } from '../../common/commonTypes';
import MutiPokers from '../muti-pokers/muti-pokers';

interface IProps {
  pokers: IPoker[];
}

interface IState {
  pokersWithSelected: IPokerWithSelected[];
}

export default class SelfPokers extends React.PureComponent<IProps, IState> {
  public static  defaultProps = {
    pokers: [],
  };

  public state = {
    pokersWithSelected: [] as IPokerWithSelected[],
  };

  public render() {
    const pokersWithSelected = this.props.pokers.map(p => {
      console.log(p);
      return { poker: p, selected: false };
    });

    return (
      <div className={style.selfPokers}>
        <MutiPokers pokersWithSelect={pokersWithSelected} onSelect={this.handleSelect} />
      </div>
    );
  }

  private handleSelect = (selectedPWS: IPokerWithSelected): void => {
    const { pokersWithSelected } = this.state;
    const selectedPoker = selectedPWS.poker;

    const newPws = pokersWithSelected.map(pws => {
      const p = pws.poker;
      if (p.value === selectedPoker.value && p.type === selectedPoker.type) {
        pws.selected = selectedPWS.selected;
      }
      return pws;
    });

    this.setState({ pokersWithSelected: newPws });
  }

}
