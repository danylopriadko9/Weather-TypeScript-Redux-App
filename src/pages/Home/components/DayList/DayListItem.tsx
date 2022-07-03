import React from 'react';
import GlobalSVGSelector from '../../../../assets/icons/global/GlobalSVGSelector';
import { Day } from './DayList';
import styles from './DayList.module.scss';

type Props = {};

const DayListItem = ({
  day,
  day_info,
  icon_id,
  temp_day,
  temp_night,
  info,
}: Day) => {
  return (
    <div className={styles.day__list_item}>
      <span className={styles.day}>{day}</span>
      <span className={styles.day__info}>{day_info}</span>
      <GlobalSVGSelector id={icon_id} />
      <span>{temp_day}</span>
      <span className={styles.day__info}>{temp_night}</span>
      <span className={styles.day__info}>{info}</span>
    </div>
  );
};

export default DayListItem;
