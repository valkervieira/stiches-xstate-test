import LottieLoader from 'react-lottie-loader';
import construction from 'public/lotties/6873-under-maintenance.json';
import { css } from 'stiches.config';

export const ConstructionTemplate = () => {
  return (
    <LottieLoader
      animationData={construction}
      className={css({
        width: '200px',
        height: '200px',
      })()}
    />
  );
};
