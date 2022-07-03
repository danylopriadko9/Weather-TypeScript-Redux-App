import React from 'react';
import styles from './DayList.module.scss';

type Props = {};

const Tabs = (props: Props) => {
  return (
    <div className={styles.tabs_container}>
      <div className={styles.left_part}>
        <div className={styles.week}>На неделю</div>
        <div className={styles.ten_days}>На месяц</div>
        <div className={styles.month}>На 10 дней</div>
      </div>
      <div className={styles.cancel}>Отменить</div>
    </div>
  );
};

export default Tabs;
