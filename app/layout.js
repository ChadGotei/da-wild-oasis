import '@/app/_styles/globals.css';
import Header from "@/app/_components/Header";
import { Josefin_Sans } from '@next/font/google';
import { ReservationProvider } from './_components/ReservationContext';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: {
    template: '%s | The Wild Oasis',
    default: 'Welcome | The Wild Oasis'
  },
  description: "Luxurious cabin hotel located in the heart of Italian Dolomites, surrounded by beautiful mountain and dark forests.",
};

function layout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased relative`}>
        <Header />

        <div className='flex-1 px-4 md:px-8 py-6 md:py-12'>
          <main className='max-w-7xl mx-auto w-full'>
            <ReservationProvider>
              {children}
            </ReservationProvider>
          </main>
        </div>

      </body>
    </html>
  )
}

export default layout;
