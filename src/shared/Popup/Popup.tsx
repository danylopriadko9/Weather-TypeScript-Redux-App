import React from 'react';
import GlobalSVGSelector from '../../assets/icons/global/GlobalSVGSelector';
import {
  items,
  itemsType,
} from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import ThisDayItem from '../../pages/Home/components/ThisDayInfo/ThisDayItem';
import styles from './Popup.module.scss';

type Props = {};

const Popup = (props: Props) => {
  return (
    <>
      <div className={styles.blur}></div>
      <div className={styles.popup}>
        <div className={styles.day}>
          <span className={styles.temp}>20°</span>
          <span className={styles.day__day}>Среда</span>
          <GlobalSVGSelector id='sun' />
          <span className={styles.day__inf}>Время: 01:54</span>
          <span className={styles.day__inf}>Город: Kielce</span>
        </div>
        <div className={styles.this__day_info}>
          <div className='this__day_info_items'>
            {items.map((element: itemsType, index: number) => (
              <ThisDayItem {...element} key={index} />
            ))}
          </div>
        </div>
        <div className={styles.close}>
          <GlobalSVGSelector id='close' />
        </div>
      </div>
    </>
  );
};

export default Popup;
