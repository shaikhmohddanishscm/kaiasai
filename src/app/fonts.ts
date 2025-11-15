import localFont from 'next/font/local';

export const nunito = localFont({
  src: [
    {
      path: '../../public/fonts/Nunito-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Nunito-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Nunito-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-nunito',
});

export const nunitoSans = localFont({
  src: [
    {
      path: '../../public/fonts/NunitoSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NunitoSans-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-nunito-sans',
});
