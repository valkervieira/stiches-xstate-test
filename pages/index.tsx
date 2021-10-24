import { HomeTemplate } from '@templates/Home';
import { Layout } from '@templates/Layout';

export const Home = (): JSX.Element => {
  return (
    <Layout>
      <HomeTemplate />
    </Layout>
  );
};

export default Home;
