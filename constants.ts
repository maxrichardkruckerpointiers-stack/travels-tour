import { Experience, Testimonial, MapPoint } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    title: "Walled City Walking Tour",
    category: "Cultural",
    image: "https://picsum.photos/id/1015/800/600",
    price: "$25 USD",
    duration: "3 Hours",
    description: "Explore the historic colonial streets, plazas, and colorful balconies of the UNESCO World Heritage site.",
    rating: 4.9
  },
  {
    id: 2,
    title: "Rosario Islands Day Trip",
    category: "Beach",
    image: "https://picsum.photos/id/1043/800/600",
    price: "$65 USD",
    duration: "8 Hours",
    description: "Crystal clear waters, white sand beaches, and snorkeling in the Caribbean coral reefs.",
    rating: 4.8
  },
  {
    id: 3,
    title: "Chiva Rumbera Party Bus",
    category: "Nightlife",
    image: "https://picsum.photos/id/1060/800/600",
    price: "$20 USD",
    duration: "4 Hours",
    description: "Experience the vibrant local nightlife on a traditional colorful bus with live music and drinks.",
    rating: 4.5
  },
  {
    id: 4,
    title: "Street Food & Market Tour",
    category: "Gastronomy",
    image: "https://picsum.photos/id/1081/800/600",
    price: "$40 USD",
    duration: "3 Hours",
    description: "Taste local delicacies like Arepas de Huevo and tropical fruits at the Bazurto Market.",
    rating: 4.9
  },
  {
    id: 5,
    title: "Sunset Sailing Catamaran",
    category: "Nightlife",
    image: "https://picsum.photos/id/1050/800/600",
    price: "$55 USD",
    duration: "2 Hours",
    description: "Watch the sun dip below the horizon while sailing the Cartagena bay with cocktails.",
    rating: 4.7
  },
  {
    id: 6,
    title: "San Felipe Castle History",
    category: "Cultural",
    image: "https://picsum.photos/id/1035/800/600",
    price: "$30 USD",
    duration: "2.5 Hours",
    description: "Discover the secrets of the greatest fortress ever built by the Spanish in the Americas.",
    rating: 4.8
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "New York, USA",
    comment: "Cartagena is purely magical. The walking tour helped us understand the rich history. Highly recommend!",
    avatar: "https://picsum.photos/id/1027/100/100",
    rating: 5
  },
  {
    id: 2,
    name: "Mateo Rodriguez",
    location: "Madrid, Spain",
    comment: "The Rosario Islands were breathtaking. The logistics were handled perfectly by the team.",
    avatar: "https://picsum.photos/id/338/100/100",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Chen",
    location: "Toronto, Canada",
    comment: "Felt very safe and welcomed. The food tour was the highlight of our trip!",
    avatar: "https://picsum.photos/id/64/100/100",
    rating: 4
  }
];

export const MAP_POINTS: MapPoint[] = [
  {
    id: 1,
    title: "Clock Tower",
    description: "The iconic main entrance to the walled city.",
    top: "40%",
    left: "45%",
    image: "https://picsum.photos/id/122/200/150"
  },
  {
    id: 2,
    title: "Castillo San Felipe",
    description: "Massive fortress dominating the city skyline.",
    top: "30%",
    left: "60%",
    image: "https://picsum.photos/id/134/200/150"
  },
  {
    id: 3,
    title: "Getsemani",
    description: "The cool, artistic neighborhood full of murals.",
    top: "55%",
    left: "50%",
    image: "https://picsum.photos/id/149/200/150"
  },
  {
    id: 4,
    title: "Bocagrande",
    description: "Modern skyline and popular city beaches.",
    top: "70%",
    left: "30%",
    image: "https://picsum.photos/id/160/200/150"
  }
];