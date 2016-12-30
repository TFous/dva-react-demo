import styles from './List.css';
import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import ListComponent from '../components/List/List';

function List({ location }) {
  return (
  <MainLayout location={location}>
    <div className={styles.red}>
      <p>这里是list</p>
      <ListComponent></ListComponent>
    </div>
  </MainLayout>

  );
}

export default connect()(List);
