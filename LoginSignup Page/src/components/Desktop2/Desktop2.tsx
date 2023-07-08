import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop2.module.css';
import { SearchLogoIcon } from './SearchLogoIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 5:41 */
export const Desktop2: FC<Props> = memo(function Desktop2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle2}></div>
      <div className={classes.whatDoYouWantHelpWith}>What Do You Want Help With?</div>
      <div className={classes.searchLogo}>
        <SearchLogoIcon className={classes.icon} />
      </div>
      <div className={classes.filter}>Filter</div>
      <div className={classes.flexiHire}>FlexiHire.</div>
      <div className={classes.rectangle12}></div>
      <div className={classes._2023FlexiHireGlobalIncPrivacyP}>2023 FlexiHire* Global Inc. • Privacy Poliicy</div>
      <div className={classes.iPhone81}>
        <div className={classes.rectangle11}></div>
        <div className={classes.rectangle5}></div>
        <div className={classes.image5}></div>
        <div className={classes.byEnteringEmailYouAgreeToOurTe}>
          By entering email, you agree to our terms and condition.
        </div>
        <div className={classes.rectangle10}></div>
        <div className={classes.continue}>Continue</div>
        <div className={classes.rectangle9}></div>
        <div className={classes.enterYourEmail}>Enter your email</div>
        <div className={classes.line2}></div>
        <div className={classes.line3}></div>
        <div className={classes.or}>or</div>
        <div className={classes.rectangle8}></div>
        <div className={classes.continueWithApple}>Continue with Apple</div>
        <div className={classes.image1}></div>
        <div className={classes.rectangle7}></div>
        <div className={classes.continueWithGoogle}>Continue with Google</div>
        <div className={classes.kisspngGoogleLogoLogoLogo5ade7}></div>
        <div className={classes.rectangle6}></div>
        <div className={classes.continueWithFacebook}>Continue with Facebook</div>
        <div className={classes.pinClipart1}></div>
      </div>
    </div>
  );
});
