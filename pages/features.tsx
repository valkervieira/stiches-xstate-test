import { Layout } from '@templates/Layout';
// import { FeaturesTemplate } from '@templates/Features';
import { ConstructionTemplate } from '@templates/Construction';

export const Features = (): JSX.Element => {
  return (
    <Layout>
      <ConstructionTemplate />;
    </Layout>
  );
};

export default Features;
