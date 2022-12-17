import Pricing from 'components/Pricing';
import { getActiveProductsWithPrices } from 'utils/supabase-client';
import { Product } from 'types';
import { GetStaticPropsResult } from 'next';
import Hero from '@/components/Hero';
import Features from '@/components/Features';

interface Props {
  products: Product[];
}

export default function PricingPage({ products }: Props) {
  return(
   <div>
    <Hero></Hero>
    <Features></Features>
    <Pricing products={products} />
  </div>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const products = await getActiveProductsWithPrices();

  return {
    props: {
      products
    },
    revalidate: 60
  };
}
