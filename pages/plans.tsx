import { ConstructionTemplate } from '@templates/Construction';
import { Layout } from '@templates/Layout';
// import { PlansTemplate } from '@templates/Plans';

export const Plans = (): JSX.Element => {
  return (
    <Layout>
      <ConstructionTemplate />;
    </Layout>
  );
};

export default Plans;
