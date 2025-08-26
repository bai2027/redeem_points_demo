import type Hotel from '@/domain/entities/Hotel'
import Thumbnails from '@/infra/store/thumbs/thumbs.json'

const hotelsMock = [
  {
    id: 1,
    title: 'Morning Brew Cafe',
    subtitle: 'Redeem your points for artisan coffee and pastries',
    description: 'Our cafe offers premium coffee blends and fresh baked goods. Earn points with every purchase and redeem for free items!',
    address: '1234 Sunset Blvd, Sunset Beach, CA',
    rating: {
      votesCount: '2.4K',
      rating: 4.6,
      stars: 4,
    },
    ratingsCount: Math.floor(Math.random() * 9801) + 200,
    award: {
      name: 'Best Coffee',
      section: 'Downtown',
    },
    chart: {
      place: 3,
      category: 'Downtown',
    },
    price: Math.floor(Math.random() * 311) + 90,
    picture: '/pics/hotel-1.jpg',
    rooms: [
      {
        id: 1,
        title: 'Free Espresso',
        subtitle: 'Redeem 100 points for a single shot',
        // price: Math.floor(Math.random() * 951) + 50,
        price: 100,
        picture: '/pics/room-1-1.jpg',
      },
      {
        id: 2,
        title: 'Breakfast Combo',
        subtitle: '150 points for coffee + pastry',
        // price: Math.floor(Math.random() * 951) + 50,
        price: 150,
        picture: '/pics/room-1-2.jpg',
      },
    ],
  },
  {
    id: 2,
    title: 'Urban Grind Coffee',
    subtitle: 'Specialty drinks and loyalty rewards',
    description: 'A modern coffee shop where every purchase brings you closer to free rewards. Try our seasonal specials!',
    address: '5678 Mountain Rd, Mountain View, CO',
    rating: {
      votesCount: '1.7K',
      rating: 4.3,
      stars: 4,
    },
    ratingsCount: Math.floor(Math.random() * 9801) + 200,
    award: {
      name: 'Barista Award',
      section: 'Westside',
    },
    chart: {
      place: 1,
      category: 'Westside',
    },
    price: Math.floor(Math.random() * 311) + 90,
    picture: '/pics/hotel-2.jpg',
    rooms: [
      {
        id: 1,
        title: 'Free Latte',
        subtitle: '120 points for any size',
        // price: Math.floor(Math.random() * 951) + 50,
        price: 120,
        picture: '/pics/room-2-1.jpg',
      },
      {
        id: 2,
        title: 'Lunch Special',
        subtitle: '200 points for sandwich + drink',
        // price: Math.floor(Math.random() * 951) + 50,
        price: 200,
        picture: '/pics/room-2-2.jpg',
      },
      {
        id: 3,
        title: 'Seasonal Special',
        subtitle: 'Limited-time offer - ask barista',
        // price: Math.floor(Math.random() * 951) + 50,
        price: 180,
        picture: '/pics/room-2-3.jpg',
      },
    ],
  },
  {
    id: 3,
    title: 'The Bean Counter',
    subtitle: 'Where every bean and point counts',
    description: 'Cozy neighborhood cafe with a robust rewards program. Earn double points on Fridays!',
    address: '1234 Ocean Blvd, Seaside, CA',
    rating: {
      votesCount: '2.3K',
      rating: 4.5,
      stars: 4.5,
    },
    ratingsCount: Math.floor(Math.random() * 9801) + 200,
    award: {
      name: 'Community Favorite',
      section: 'North District',
    },
    chart: {
      place: 2,
      category: 'North District',
    },
    price: Math.floor(Math.random() * 311) + 90,
    picture: '/pics/hotel-3.jpg',
    rooms: [
      {
        id: 1,
        title: 'Free Cappuccino',
        subtitle: '150 points for handcrafted drink',
        // price: Math.floor(Math.random() * 951) + 50,
        price: 150,
        picture: '/pics/room-3-1.jpg',
      },
      {
        id: 2,
        title: 'Bakery Bundle',
        subtitle: '250 points for 3 pastries',
        // price: Math.floor(Math.random() * 951) + 50,
        price: 250,
        picture: '/pics/room-3-2.jpg',
      },
      {
        id: 3,
        title: 'Barista Experience',
        subtitle: '500 pts for a coffee brewing workshop',
        // price: Math.floor(Math.random() * 951) + 50,
        price: 500,
        picture: '/pics/room-3-3.jpg',
      },
    ],
  },
  {
    id: 4,
    title: 'City Roasters',
    subtitle: 'Downtown coffee bar with premium rewards',
    description: 'A bustling urban cafe serving single-origin coffees. Redeem points for exclusive reserve blends.',
    address: '4567 Main St, City Center, NY',
    rating: {
      votesCount: '1.2K',
      rating: 4.1,
      stars: 4,
    },
    ratingsCount: Math.floor(Math.random() * 9801) + 200,
    award: {
      name: 'Best Cafe',
      section: 'City Center',
    },
    chart: {
      place: 3,
      category: 'City Center',
    },
    price: Math.floor(Math.random() * 311) + 90,
    picture: '/pics/hotel-4.jpg',
    rooms: [
      {
        id: 1,
        title: 'Reserve Pour-Over',
        subtitle: '200 points for our specialty brew',
        // price: Math.floor(Math.random() * 951) + 50,
        price: 200,
        picture: '/pics/room-4-1.jpg',
      },
      {
        id: 2,
        title: 'Barista\'s Choice',
        subtitle: '175 points for today\'s featured drink',
        // price: Math.floor(Math.random() * 951) + 50,
        price: 175,
        picture: '/pics/room-4-2.jpg',
      },
      {
        id: 3,
        title: 'Coffee + Muffin',
        subtitle: '150 points for morning combo',
        // price: Math.floor(Math.random() * 951) + 50,
        price: 150,
        picture: '/pics/room-4-3.jpg',
      },
    ],
  },
  {
    id: 5,
    title: 'Sweet Oasis Bakery',
    subtitle: 'Redeem points for artisanal pastries',
    description: 'A desert-themed bakery with decadent treats. Earn points faster on our signature items.',
    address: '7890 Desert Rd, Desert Oasis, AZ',
    rating: {
      votesCount: '1.5K',
      rating: 4.4,
      stars: 4.5,
    },
    ratingsCount: Math.floor(Math.random() * 9801) + 200,
    award: {
      name: 'Best Bagels',
      section: 'Bakery',
    },
    chart: {
      place: 4,
      category: 'Bakery',
    },
    price: Math.floor(Math.random() * 311) + 90,
    picture: '/pics/hotel-5.jpg',
    rooms: [
      {
        id: 1,
        title: 'Free Croissant',
        subtitle: '125 points for buttery perfection',
        // price: Math.floor(Math.random() * 951) + 50,
        price: 125,
        picture: '/pics/room-5-1.jpg',
      },
      {
        id: 2,
        title: 'Cake Slice',
        subtitle: '225 points for daily selection',
        // price: Math.floor(Math.random() * 951) + 50,
        price: 225,
        picture: '/pics/room-5-2.jpg',
      },
    ],
  },
  {
    id: 6,
    title: 'Tropical Blend Cafe',
    subtitle: 'Exotic drinks with point redemptions',
    description: 'Sip island-inspired coffees and smoothies. Seasonal specials earn bonus points.',
    address: '1234 Palm Tree Blvd, Tropical Island',
    rating: {
      votesCount: '3.5K',
      rating: 4.8,
      stars: 5,
    },
    ratingsCount: Math.floor(Math.random() * 9801) + 200,
    award: {
      name: 'Best Vibe',
      section: 'Specialty Beverages',
    },
    chart: {
      place: 1,
      category: 'Specialty Beverages',
    },
    price: Math.floor(Math.random() * 311) + 90,
    picture: '/pics/hotel-6.jpg',
    rooms: [
      {
        id: 1,
        title: 'Coconut Cold Brew',
        subtitle: '180 points for tropical favorite',
        // price: Math.floor(Math.random() * 951) + 50,
        price: 180,
        picture: '/pics/room-6-1.jpg',
      },
      {
        id: 2,
        title: 'Smoothie Bowl',
        subtitle: '300 points for acai blend',
        // price: Math.floor(Math.random() * 951) + 50,
        price: 300,
        picture: '/pics/room-6-2.jpg',
      },
      {
        id: 3,
        title: 'Iced Matcha',
        subtitle: '200 points for green tea delight',
        // price: Math.floor(Math.random() * 951) + 50,
        price: 200,
        picture: '/pics/room-6-3.jpg',
      },
    ],
  },
  {
    id: 7,
    title: 'Heritage Coffeehouse',
    subtitle: 'Traditional recipes, modern rewards',
    description: 'A historic cafe preserving classic brewing methods. Loyalty members get access to rare beans.',
    address: '7890 Main St, Historic Town, MA',
    rating: {
      votesCount: '1.2K',
      rating: 4.1,
      stars: 4,
    },
    ratingsCount: Math.floor(Math.random() * 9801) + 200,
    award: {
      name: 'Best Brew',
      section: 'Old Town',
    },
    chart: {
      place: 3,
      category: 'Old Town',
    },
    price: Math.floor(Math.random() * 311) + 90,
    picture: '/pics/hotel-7.jpg',
    rooms: [
      {
        id: 1,
        title: 'Turkish Coffee',
        subtitle: '150 points for historic preparation',
        // price: Math.floor(Math.random() * 951) + 50,
        price: 150,
        picture: '/pics/room-7-1.jpg',
      },
      {
        id: 2,
        title: 'Antique Tea Set',
        subtitle: '500 points for collectible service',
        // price: Math.floor(Math.random() * 951) + 50,
        price: 500,
        picture: '/pics/room-7-2.jpg',
      },
    ],
  },
]

/**
 * Add picture thumb to an entity based on the picture name
 *
 * @param entity - something with "picture" property
 */
function addThumb<T extends { picture: string }>(entity: T): T & { pictureThumb: string } {
  const pictureName = entity.picture.split('/').pop() as keyof typeof Thumbnails.thumbs

  return {
    ...entity,
    pictureThumb: Thumbnails.thumbs[pictureName],
  }
}

/**
 * Add picture thumbs to hotels based on the picture name
 */
function addThumbs(hotels: Hotel[]): Hotel[] {
  return hotels.map((hotel) => {
    /**
     * Add picture thumb to rooms as well
     */
    hotel.rooms = hotel.rooms.map(addThumb)

    return addThumb(hotel)
  })
}

export const hotels = addThumbs(hotelsMock)
