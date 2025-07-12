// AboutB.js

import React from 'react';
import Image from 'next/image';
import css from '../../styles/AboutB.module.css';

export default function AboutB() {
  return (
    <div className={css.PartieContainer}>
      <Image src="/x1.png" alt="aboutb-flower" width={400} height={200} />
      <p className={css.subheading}>
       <br></br> <br></br>
        Make CASA FLEURS ET DÉCO your first choice for flowers.
      </p>
    </div>
  );
}
