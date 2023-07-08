import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop4.module.css';

interface Props {
  className?: string;
}
/* @figmaId 21:3 */
export const Desktop4: FC<Props> = memo(function Desktop4(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle13}></div>
      <div className={classes.blockchainVectorLogoRemovebgPr}></div>
      <div className={classes.image4}></div>
      <div className={classes.image3}></div>
      <div className={classes.image2}></div>
    </div>
  );
});
