import { IPoker } from './commonTypes';

export enum POKER_TYPES {
  meihua = '♣',
  fangpian = '️️️️️️♦️',
  heitao = '♠️',
  hongtao = '♥️',
  joker = 'JOKER',
}

export enum POKER_VALUES {
  JOKER_SMALL = '小王',
  JOKER_BIG = '大王',
  _3 = '3',
  _4 = '4',
  _5 = '5',
  _6 = '6',
  _7 = '7',
  _8 = '8',
  _9 = '9',
  _10 = '10',
  J = 'J',
  Q = 'Q',
  K = 'K',
  A = 'A',
  _2 = '2',
}

export const  POKER_MAP = {
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'J': 11,
  'Q': 12,
  'K': 13,
  'A': 14,
  '2': 15,
  '小王': 16,
  '大王': 17,
};

export enum ROLE {
  DZ = 'dizhu',
  NM_1 = 'nongmin-1',
  NM_2 = 'nongmin-2',
}

export const POKER_COUNT = 54; // 扑克牌总数

// 省的每次都计算
export const COMPLETE_POKERS: IPoker[] = JSON.parse('[{"type":"♣","value":"3"},{"type":"♣","value":"4"},{"type":"♣","value":"5"},{"type":"♣","value":"6"},{"type":"♣","value":"7"},{"type":"♣","value":"8"},{"type":"♣","value":"9"},{"type":"♣","value":"10"},{"type":"♣","value":"J"},{"type":"♣","value":"Q"},{"type":"♣","value":"K"},{"type":"♣","value":"A"},{"type":"♣","value":"2"},{"type":"♠️","value":"3"},{"type":"♠️","value":"4"},{"type":"♠️","value":"5"},{"type":"♠️","value":"6"},{"type":"♠️","value":"7"},{"type":"♠️","value":"8"},{"type":"♠️","value":"9"},{"type":"♠️","value":"10"},{"type":"♠️","value":"J"},{"type":"♠️","value":"Q"},{"type":"♠️","value":"K"},{"type":"♠️","value":"A"},{"type":"♠️","value":"2"},{"type":"♥️","value":"3"},{"type":"♥️","value":"4"},{"type":"♥️","value":"5"},{"type":"♥️","value":"6"},{"type":"♥️","value":"7"},{"type":"♥️","value":"8"},{"type":"♥️","value":"9"},{"type":"♥️","value":"10"},{"type":"♥️","value":"J"},{"type":"♥️","value":"Q"},{"type":"♥️","value":"K"},{"type":"♥️","value":"A"},{"type":"♥️","value":"2"},{"type":"️️️️️️♦️","value":"3"},{"type":"️️️️️️♦️","value":"4"},{"type":"️️️️️️♦️","value":"5"},{"type":"️️️️️️♦️","value":"6"},{"type":"️️️️️️♦️","value":"7"},{"type":"️️️️️️♦️","value":"8"},{"type":"️️️️️️♦️","value":"9"},{"type":"️️️️️️♦️","value":"10"},{"type":"️️️️️️♦️","value":"J"},{"type":"️️️️️️♦️","value":"Q"},{"type":"️️️️️️♦️","value":"K"},{"type":"️️️️️️♦️","value":"A"},{"type":"️️️️️️♦️","value":"2"},{"type":"JOKER","value":"大王"},{"type":"JOKER","value":"小王"}]') // tslint:disable-line