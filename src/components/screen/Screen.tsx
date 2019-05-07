import * as React from 'react';
// import c from 'classnames'

import style from './screen.css';
import SelfPokers from '../self-pokers/self-pokers';
import OtherPlayer from '../other-player/other-player';
import Mybtn from '../my-btn/myBtn';
import { ROLE, COMPLETE_POKERS } from '../../common/constants';
import { IPoker } from '../../common/commonTypes';


interface IState {
  leftPokers: IPoker[];
  rightPokers: IPoker[];
  selfPokers: IPoker[];
  bottomPokers: IPoker[];
}

export default class Screen extends React.PureComponent<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      leftPokers: [],
      rightPokers: [],
      selfPokers: [],
      bottomPokers: [],
    };
  }
  public render() {
    const { leftPokers, rightPokers, selfPokers } = this.state;
    return (
      <div className={style.screen}>
        <div className={style.public}>
          <div className={style.left}>
            <OtherPlayer role={ROLE.NM_1} pokers={leftPokers}/>
          </div>
          <div className={style.center}>center</div>
          <div className={style.right}>
            <OtherPlayer role={ROLE.NM_2} pokers={rightPokers} />
          </div>
        </div>
        <div className={style.self}>
          <Mybtn >出牌</Mybtn>
          <Mybtn >取消</Mybtn>
          <SelfPokers pokers={selfPokers} />
        </div>
      </div>
    );
  }

  public componentDidMount = () => {
    this.licensing();
  }

  private licensing = (): void => { // 发牌
    const pokers = this.generate();
    const leftPokers = pokers.slice(0, 17);
    const rightPokers = pokers.slice(17, 34);
    const selfPokers = pokers.slice(34, 51);
    const bottomPokers = pokers.slice(51);

    this.setState({
      leftPokers,
      rightPokers,
      selfPokers,
      bottomPokers,
    })
  }

  private generate = (): IPoker[] => { // 洗牌
    return COMPLETE_POKERS.sort(() => {
      return Math.random() - 0.5;
    });
  }
}
