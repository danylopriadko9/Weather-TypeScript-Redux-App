import React from 'react';
import DayList from './components/DayList/DayList';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';
import styles from './Home.module.scss';

type Props = {};

const Home: React.FC = (props: Props) => {
  return (
    <div className={styles.home}>
      <div className={styles.this__day_informations}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <DayList />
    </div>
  );
};

export default Home;
