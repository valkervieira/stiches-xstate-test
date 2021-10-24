import { Layout } from '@templates/Layout';
import { HomeTemplate } from '@templates/Home';

export const Home = (): JSX.Element => {
  return (
    <Layout>
      <HomeTemplate />
    </Layout>
  );
};

export default Home;
