import React from 'react';
import styles from './ThisDayInfo.module.scss';
import clouds from '../../../../assets/images/image 1clouds.png';
import GlobalSVGSelector from '../../../../assets/icons/global/GlobalSVGSelector';
import ThisDayItem from './ThisDayItem';

type Props = {};

export type itemsType = {
  svg: string;
  params: string;
  result: string;
};

export const items: itemsType[] = [
  { svg: 'temp', params: 'Температура', result: '20° - ощущается как 17°' },
  {
    svg: 'preassure',
    params: 'Давление  ',
    result: '765 мм ртутного столба - нормальное',
  },
  { svg: 'precipitation', params: 'Осадки', result: 'Без осадков' },
  { svg: 'wind', params: 'Ветер', result: '3 м/с юго-запад - легкий ветер' },
];

const ThisDayInfo = (props: Props) => {
  return (
    <div className={styles.this__day_info}>
      <div className='this__day_info_items'>
        {items.map((element: itemsType, index: number) => (
          <ThisDayItem {...element} key={index} />
        ))}
        <img src={clouds} alt='' />
      </div>
    </div>
  );
};

export default ThisDayInfo;
