import 'styles/main.css';
import 'styles/chrome-bug.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { useRouter } from 'next/router'

import Layout from 'components/Layout';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { AppProps } from 'next/app';
import { MyUserContextProvider } from 'utils/useUser';
import type { Database } from 'types_db';
import DashboardLayout from '../components/dashbaord/DashboardLayout';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient<Database>()
  );
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);
  const pathname = router.pathname;
  console.log(router.pathname)
  return (
    <div className="">
      <SessionContextProvider supabaseClient={supabaseClient}>
        <MyUserContextProvider>
          { pathname.startsWith('/dashboard') ? (
            <DashboardLayout>
              <Component {...pageProps} />
            </DashboardLayout>       
          ) : 
          <Layout>
            <Component {...pageProps} />
          </Layout>
          }
         
        </MyUserContextProvider>
      </SessionContextProvider>
    </div>
  );
}
