import React from 'react';
import GlobalSVGSelector from '../../assets/icons/global/GlobalSVGSelector';
import styles from './Header.module.scss';
import Select from 'react-select';

const options = [
  { value: 'Kielce', label: 'Kielce' },
  { value: 'Warszawa', label: 'Warszawa' },
  { value: 'Krakow', label: 'Krakow' },
];

const colorstyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: 'rgba(71, 147, 255, 0.2)',
    width: '194px',
    height: '37px',
    borderRadius: '10px',
    color: 'white',
    marginLeft: '20px',
    border: 'none',
    zIndex: '100',
  }),
};

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSVGSelector id='header-logo' />
        </div>
        <div className={styles.title}>React Weather</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.change_theme}>
          <GlobalSVGSelector id='change-theme' />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colorstyles}
          options={options}
        />
      </div>
    </header>
  );
};

export default Header;
