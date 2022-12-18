import Link from 'next/link';
import s from './Navbar.module.css';
import { Button, DarkThemeToggle, Navbar } from "flowbite-react";
import Logo from 'components/icons/Logo';
import { useRouter } from 'next/router';
import { useUser } from 'utils/useUser';
import Image from "next/image";
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Features from '../../Features';


export default function() {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();
  return (
    <Navbar fluid>
        <Navbar.Brand href="/">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Carrierify Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Carrierify</span>
        </Navbar.Brand>

       
        <div className="flex md:order-2">
        
          <button id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
              <svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
              <svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </button>
          {user? <Button className='ml-2 mr-2'><a href='/account'>Open Dashboard</a>
          </Button> :(<Button className='ml-2 mr-2'><a href='/signin'>Get started</a></Button>) }
          
          <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <Navbar.Collapse className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/#cta">About</Navbar.Link>
          <Navbar.Link href="/#features">Features</Navbar.Link>
          <Navbar.Link href="/#pricing">Pricing</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
  )

  /*

{user ? (
              <span
                className={s.link}
                onClick={async () => {
                  await supabaseClient.auth.signOut();
                  router.push('/signin');
                }}
              >
                Sign out
              </span>
            ) : (
              <Link href="/signin">
                <a className={s.link}>Sign in</a>
              </Link>
            )}
  */
};