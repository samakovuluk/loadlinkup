import Pricing from 'components/Pricing';
import { getActiveProductsWithPrices } from 'utils/supabase-client';
import { Product } from 'types';
import { GetStaticPropsResult } from 'next';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Cta from '@/components/Cta';
import Faq from '@/components/Faq';

interface Props {
  products: Product[];
}

export default function PricingPage({ products }: Props) {
  return(
   <div>
    <Hero></Hero>
    <Cta></Cta>
    <Features></Features>
    <Pricing products={products} />
    <Faq></Faq>
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
