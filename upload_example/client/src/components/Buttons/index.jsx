import React from 'react'
import styles from './styles.module.css';

const Buttons = props =>
  <div className={styles.buttons}>

    <div className={styles.upload_btn_wrapper}>
      <label htmlFor='single'>
        <button className={styles.btn}>
          Upload a file
        </button>
      </label>
      <input type="file" id="single" name="single" onChange={props.onChange} />
    </div>

    <div className={styles.upload_btn_wrapper}>
      <button className={styles.btn}>
        Upload multiple files
      </button>
      <input type='file' id='multi' onChange={props.onChange} multiple />
    </div>
  </div>

export default Buttons;