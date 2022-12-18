import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from 'components/ui/Navbar';
import Footer from 'components/ui/Footer';
import { ReactNode } from 'react';
import { PageMeta } from '../../types';
import Dashboard from '../../pages/dashboard/index';
import NavbarHeader from './NavbarHeader';

interface Props {
  children: ReactNode;
  meta?: PageMeta;
}

export default function DashboardLayout({ children, meta: pageMeta }: Props) {
    const router = useRouter();
    const meta = {
        title: 'Next.js Subscription Starter',
        description: 'Brought to you by Vercel, Stripe, and Supabase.',
        cardImage: '/og.png',
        ...pageMeta
      };

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <link href="/favicon.ico" rel="shortcut icon" />
            </Head>
            <NavbarHeader></NavbarHeader>

            <main id="skip">{children}</main>

            <Footer />

        </>
    )
}