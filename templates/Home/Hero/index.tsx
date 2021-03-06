import { Image } from '@components/Image';
import HeroImage from '@images/home/hero.webp';
import * as styles from './styles';

export const Hero = (): JSX.Element => {
  return (
    <section role="region">
      <figure className={styles.imageContainer()}>
        <Image
          src={HeroImage}
          alt="Hero image something something"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
        />
      </figure>
    </section>
  );
};
