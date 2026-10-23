
export type NocturneEvent = {
  id: string;
  title: string;
  date: string;
  venue: string;
  lineup: string[];
  desktopImage: string;
  mobileImage?: string;
  ticketUrl?: string;
  imagePosition?: string;
};


export const events: NocturneEvent[] = [
  {
    id: 'halloween-2026',
    title: 'HALLOWEEN',
    date: '2026-10-31',
    venue: 'Venue TBA',
    lineup: ['Artist TBA', 'Artist TBA'],
    desktopImage: '/img/raves-artwork/desktop/nocturne_hard_dnb_november_2026-desktop.jpg',
    mobileImage: '/img/raves-artwork/mobile/nocturne_hard_dnb_november_2026-mobile.jpg',
    ticketUrl: 'https://ra.co/events/2243135',
  },
  {
    id: 'night-shift',
    title: 'NIGHT SHIFT',
    date: '2026-11-21',
    venue: 'Venue TBA',
    lineup: ['Artist TBA', 'Artist TBA'],
    desktopImage: '/img/raves-artwork/desktop/nocturne_hard_dnb_november_2026-desktop.jpg',
    mobileImage: '/img/raves-artwork/mobile/nocturne_hard_dnb_november_2026-mobile.jpg',
    ticketUrl: 'https://ra.co/events/',
  },
  {
    id: 'after-hours',
    title: 'AFTER HOURS',
    date: '2026-12-12',
    venue: 'Venue TBA',
    lineup: ['Artist TBA', 'Artist TBA'],
    desktopImage: '/img/raves-artwork/desktop/nocturne_hard_dnb_november_2026-desktop.jpg',
    mobileImage: '/img/raves-artwork/mobile/nocturne_hard_dnb_november_2026-mobile.jpg',
    ticketUrl: 'https://ra.co/events/',
  },
  {
    id: 'last-entry',
    title: 'LAST ENTRY',
    date: '2026-08-15',
    venue: 'Melbourne',
    lineup: ['Artist A', 'Artist B'],
    desktopImage: '/img/raves-artwork/desktop/nocturne_hard_dnb_november_2026-desktop.jpg',
    mobileImage: '/img/raves-artwork/mobile/nocturne_hard_dnb_november_2026-mobile.jpg',
    ticketUrl: 'https://ra.co/events/',
  },
  {
    id: 'no-sleep',
    title: 'NO SLEEP',
    date: '2026-07-04',
    venue: 'Melbourne',
    lineup: ['Artist C', 'Artist D'],
    desktopImage: '/img/raves-artwork/desktop/nocturne_hard_dnb_november_2026-desktop.jpg',
    mobileImage: '/img/raves-artwork/mobile/nocturne_hard_dnb_november_2026-mobile.jpg',
    ticketUrl: 'https://ra.co/events/',
  },
];
