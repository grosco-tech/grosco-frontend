// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
// import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './index.css';
import { Outlet } from 'react-router-dom';

// const fontHeading = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-heading',
// });

const fontHeading = {
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
};

// const fontBody = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-body',
// });

const fontBody = {
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
};

export default function Layout() {
  return (
    <>
      <div
        className={cn('antialiased', fontHeading.variable, fontBody.variable)}>
        <Outlet />
      </div>
    </>
  );
}
