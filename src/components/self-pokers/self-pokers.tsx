import * as React from 'react';
// import c from 'classnames'

import style from './self-pokers.css';
import { IPoker } from '../../common/commonTypes';
import MutiPokers from '../muti-pokers/muti-pokers';

interface IProps {
  pokers?: IPoker[];
}

export default class SelfPokers extends React.PureComponent<IProps> {
  public static  defaultProps = {
    pokers: [],
  };

  public render() {
    return (
      <div className={style.selfPokers}>
        <MutiPokers pokers={this.props.pokers} />
      </div>
    );
  }

}
