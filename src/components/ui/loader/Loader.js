import React from 'react';
import styles from "./Loader.module.css";

export default function Loader(props) {
  let color = props.color;
  if (!color) color = props.colour; // typo

  let loader = (
    <div className={[styles.ldsEllipsis,color].join(' ')}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )

  if (props.pad) {
    loader = (
      <div style={{padding: '2.7rem'}}>
        {loader}
      </div>
    )
  }

  if (props.center) {
    return (
      <div className={styles.Container}>
        {loader}
      </div>
    )
  } else {
    return loader;
  }
}
