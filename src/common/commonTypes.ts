import { POKER_TYPES, POKER_VALUES } from './constants';
export interface IPoker {
  value: POKER_VALUES;
  type: POKER_TYPES;
}

export interface IPokerWithSelected {
  poker: IPoker;
  selected: boolean;
}
