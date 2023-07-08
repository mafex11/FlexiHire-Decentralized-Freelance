import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop1.module.css';
import { SearchLogoIcon } from './SearchLogoIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle3}></div>
      <div className={classes.loginSignUp}>Login/SignUp</div>
      <div className={classes.hireTalent}>Hire Talent</div>
      <div className={classes.postTalent}>Post Talent</div>
      <div className={classes.payments}>Payments</div>
      <div className={classes.aboutUs}>About us</div>
      <div className={classes.decentralizedFreelancing}>Decentralized Freelancing.</div>
      <div className={classes.cryptoBasedPayments}>Crypto Based Payments.</div>
      <div className={classes.fullyAnonymous}>Fully Anonymous.</div>
      <div className={classes.rectangle4}></div>
      <div className={classes.joinNow}>Join now</div>
      <div className={classes.firstTimeInIndia}>First Time In India.</div>
      <div className={classes.rectangle2}></div>
      <div className={classes.whatDoYouWantHelpWith}>What Do You Want Help With?</div>
      <div className={classes.searchLogo}>
        <SearchLogoIcon className={classes.icon} />
      </div>
      <div className={classes.filter}>Filter</div>
      <div className={classes.flexiHire}>FlexiHire</div>
      <div className={classes.f}>F.</div>
    </div>
  );
});
