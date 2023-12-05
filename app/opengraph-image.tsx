import { Metadata } from 'next'; // if using TypeScript
 
export const metadata: Metadata = {
  openGraph: {
    title: "Matthew Younatan's Portfolio",
    description: "Software Engineer with 3+ years experience currently working as a Blockchain Engineer.",
    url: 'https://www.younatan.ca/',
    siteName: 'younatan.ca',
    images: [
      {
        url: 'https://www.younatan.ca/base-westie.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://www.younatan.ca/base-westie.png',
        width: 1800,
        height: 1600,
        alt: 'Matthew Younatan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};
 
export default function Page() {}