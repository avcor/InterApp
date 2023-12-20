import { dealType, popularPlaceType } from '../types/PopularType';

export const dealsData: dealType[] = [
  {
    deal: 'Holiday deals',
    discount: '20% off',
    end: 'until 12 june',
  },
];

export const placesData: popularPlaceType[] = [
  {
    place: 'Moscow',
    hotels: '2 800',
    imageUrl:
      'https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=1649&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    place: 'Dubai',
    hotels: '9 800',
    imageUrl:
      'https://worldtoptop.com/wp-content/uploads/2013/07/Burj_al_arab.jpg.webp',
  },
  {
    place: 'Taskkent',
    hotels: '319',
    imageUrl:
      'https://img.traveltriangle.com/attachments/pictures/949164/original/Fountain_on_Independence_Square_in_Tashkent.jpg',
  },
  {
    place: 'Kuala Lumpur',
    hotels: '1 001',
    imageUrl:
      'https://afar.brightspotcdn.com/dims4/default/c2f4bb9/2147483647/strip/false/crop/1600x800+0+0/resize/1486x743!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F62%2F17%2F023ba750dc38b08b1f2eea203859%2Foriginal-d929018c23f2601337da3b23a05542ba.jpg',
  },
  {
    place: 'Paris',
    hotels: '3 580',
    imageUrl:
      'https://cdn.sortiraparis.com/images/80/69688/837774-que-faire-aujourd-hui-ce-a-paris-ou-en-ile-de-france.jpg',
  },
];
