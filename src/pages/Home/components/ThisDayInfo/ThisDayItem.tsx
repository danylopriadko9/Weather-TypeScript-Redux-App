import React from 'react';
import GlobalSVGSelector from '../../../../assets/icons/global/GlobalSVGSelector';
import { itemsType } from './ThisDayInfo';
import styles from './ThisDayInfo.module.scss';

const ThisDayItem = ({ svg, params, result }: itemsType) => {
  return (
    <>
      <div className={styles.item__info_container}>
        <div className={styles.icon}>
          <GlobalSVGSelector id={svg} />
        </div>
        <span className={styles.params}>{params}</span>
        <span>{result}</span>
      </div>
    </>
  );
};

export default ThisDayItem;
