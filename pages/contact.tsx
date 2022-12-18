
import { Button } from 'flowbite-react';
import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const Contact = () => {
    

    const supabase = useSupabaseClient();

    const router = useRouter();
    const [isSent, setIsSent] = useState<boolean>();
    useEffect(() => {

    });

    const submitContactUs = async (event: any) => {
        event.preventDefault();
        console.log(event.target.email.value)
        const { data, error } = await supabase
        .from('contactus')
        .insert([
          {
            email: event.target.email.value,
            subject: event.target.subject.value,
            message: event.target.message.value
          },
        ])
        setIsSent(true);
        console.log(data)
    }

    return(
        <div>
              <section className="bg-white dark:bg-gray-900">
                         <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                             <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                             <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                        
               {
                isSent ? (
                    <section className="bg-white dark:bg-gray-900">    
                        <div className="relative p-4 text-center bg-white rounded-lg sm:p-5">
                            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                                <svg aria-hidden="true" className="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Success</span>
                            </div>
                            <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Successfully submitted.</p>
                            <a href='/' className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900">Go to Home</a>
                        </div>
                       
                 </section>
                 
                 ) : (
                            <form onSubmit={submitContactUs} action="#" className="space-y-8">
                                 <div>
                                     <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                     <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required></input>
                                 </div>
                                 <div>
                                     <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                     <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
                                     </input>
                                 </div>
                                 <div className="sm:col-span-2">
                                     <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                     <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                 </div>
                                 <Button type='submit'>Send message</Button>
                             
                             </form>
                       
                    )
                                }
                                  </div>
                         </section>
                  </div>

                  
    
    )

}

export default Contact;