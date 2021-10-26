import { Image } from '@components/Image';
import * as styles from './styles';

export const Hero = (): JSX.Element => {
  return (
    <section role="region">
      <figure className={styles.imageContainer()}>
        <Image
          src="/images/home/hero.jpg"
          alt="Hero image something something"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAQAAAADBAMAAABG2rP1AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACRQTFRFl1gdglUlQTk1HygxelAfeksahksdXzgZWjohVjYcOB4OKB4a6fXF4wAAABFJREFUeJxjYFRmcE1n6FwNAAW4AgUkXz7wAAAAAElFTkSuQmCC"
        />
      </figure>
    </section>
  );
};
