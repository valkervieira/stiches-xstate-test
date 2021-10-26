import { ConstructionTemplate } from '@templates/Construction';
import { Layout } from '@templates/Layout';
// import { DocsTemplate } from '@templates/Docs';

export const Docs = (): JSX.Element => {
  return (
    <Layout>
      <ConstructionTemplate />
    </Layout>
  );
};

export default Docs;
