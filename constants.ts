import { MenuItem, Testimonial, GalleryImage } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Antipasti (From Image)
  {
    id: 'a1',
    name: 'Antipasto Misto Caldo',
    description: 'A warm selection of chef\'s seasonal appetizers featuring traditional Italian flavors.',
    price: '€ 16,00',
    category: 'Antipasti',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a2',
    name: 'Selezione di Carpacci di Carne',
    description: 'Fine selection of raw meat carpaccio, served with lemon vinaigrette and aromatic herbs.',
    price: '€ 16,00',
    category: 'Antipasti',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a3',
    name: 'Selezione di Salumi e Formaggi',
    description: '(Presidi Slow Food) A curated board of premium cured meats and artisanal cheeses.',
    price: '€ 24,00',
    category: 'Antipasti',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'a4',
    name: 'Prosciutto Serrano',
    description: 'High-quality Spanish dry-cured ham, thinly sliced.',
    price: '€ 15,00',
    category: 'Antipasti',
    image: 'https://images.unsplash.com/photo-1651978595428-b79169f223a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a5',
    name: 'Prosciutto Crudo d\'Oca',
    description: 'Stagionato e affumicato. Aged and smoked goose breast delicacy.',
    price: '€ 38,00',
    category: 'Antipasti',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a6',
    name: 'Tartare di Fassona Piemontese',
    description: 'With low-temperature cooked artichoke and crispy guanciale.',
    price: '€ 18,00',
    category: 'Antipasti',
    image: 'https://images.unsplash.com/photo-1550367363-ea12860cc124?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'a7',
    name: 'Tartare di Agnello Presalè',
    description: 'Lamb tartare served with Tropea onion and Taggiasca olives.',
    price: '€ 18,00',
    category: 'Antipasti',
    image: 'https://images.unsplash.com/photo-1651978595428-b79169f223a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a8',
    name: 'Bocconcini di Tartare',
    description: 'Fassona beef bites wrapped in Pantanegra lard and pistachio.',
    price: '€ 12,00',
    category: 'Antipasti',
    image: 'https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a9',
    name: 'Bruschetta Prosciutto e Carciofo',
    description: 'Crispy bread topped with Iberian ham and artichoke (2 pieces).',
    price: '€ 10,00',
    category: 'Antipasti',
    image: 'https://images.unsplash.com/photo-1543992321-cefacfc2322e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a10',
    name: 'Mini Panino Wagyu',
    description: 'Gourmet slider bun filled with premium Wagyu beef.',
    price: '€ 5,00',
    category: 'Antipasti',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a11',
    name: 'Carciofi con Pecorino Romano',
    description: 'Prepared artichokes served with shavings of Pecorino Romano cheese.',
    price: '€ 7,00',
    category: 'Antipasti',
    image: 'https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },

  // Primi / Pasta (From Image)
  {
    id: 'p1',
    name: 'Gnocchetti Gorgonzola e Noci',
    description: 'Soft potato gnocchi served in a rich gorgonzola cheese sauce with walnut crumble.',
    price: '€ 12,00',
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p2',
    name: 'Tonnarelli al Ragù di Chianina',
    description: 'Thick fresh spaghetti served with a robust Chianina beef meat sauce.',
    price: '€ 12,00',
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p3',
    name: 'Paccheri Castelmagno e Asparagi',
    description: 'Large tube pasta tossed with Castelmagno cheese and fresh asparagus.',
    price: '€ 12,00',
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1597393353365-9d4366392fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p4',
    name: 'Fettuccine Ragù di Coniglio',
    description: 'Homemade fettuccine with rabbit sauce and Taggiasca olives.',
    price: '€ 14,00',
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'p5',
    name: 'Fettuccine Ragù di Anatra',
    description: 'Homemade fettuccine with duck sauce and Raschera cheese fondue.',
    price: '€ 14,00',
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },

  // Mains (Existing kept for fullness)
  {
    id: 'm1',
    name: 'Osso Buco alla Milanese',
    description: 'Braised veal shank cooked with white wine and vegetables, served with saffron risotto.',
    price: '€ 32,00',
    category: 'Main Courses',
    image: 'https://images.unsplash.com/photo-1544510808-91bcbee1df55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm2',
    name: 'Bistecca alla Fiorentina',
    description: '1kg T-bone steak, dry-aged for 30 days, grilled over charcoal and served with roasted potatoes.',
    price: '€ 75,00',
    category: 'Main Courses',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  // Seafood (Existing kept for fullness)
  {
    id: 's1',
    name: 'Polpo alla Griglia',
    description: 'Grilled Mediterranean octopus served on a bed of chickpea purée and rosemary oil.',
    price: '€ 28,00',
    category: 'Seafood',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's2',
    name: 'Branzino al Sale',
    description: 'Whole sea bass baked in a sea salt crust, served tableside with lemon and virgin oil.',
    price: '€ 34,00',
    category: 'Seafood',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  // Desserts (Existing kept for fullness)
  {
    id: 'd1',
    name: 'Tiramisù Classico',
    description: 'Layers of espresso-soaked savoiardi biscuits and sweet mascarpone cream, dusted with cocoa.',
    price: '€ 10,00',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'd2',
    name: 'Panna Cotta ai Frutti di Bosco',
    description: 'Silky vanilla bean pudding topped with a fresh wild berry coulis.',
    price: '€ 10,00',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  // Wines
  {
    id: 'w1',
    name: 'Chianti Classico Riserva',
    description: 'Tuscany, 2018. Notes of cherry, earth, and cedar. Full-bodied.',
    price: '€ 45,00',
    category: 'Wines',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'w2',
    name: 'Barolo DOCG',
    description: 'Piedmont, 2016. The "King of Wines". Complex, tannic, and floral.',
    price: '€ 85,00',
    category: 'Wines',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Alessandro Rossi',
    role: 'Food Critic',
    content: 'An absolute gem. The truffle pasta transported me straight to the hills of Umbria. Impeccable service and atmosphere.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    role: 'Traveler',
    content: 'The highlight of our trip to Italy. The wine selection is extensive and the staff treated us like family. Highly recommend the Osso Buco.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Marco & Giulia',
    role: 'Local Couple',
    content: 'Our favorite spot for anniversary dinners. La Baita never disappoints. Elegance and tradition in every bite.',
    rating: 5
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { 
    id: 'g1', 
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80', 
    caption: 'Main Dining Hall', 
    size: 'large',
    category: 'Interior'
  },
  { 
    id: 'g2', 
    url: 'https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    caption: 'Chef at Work', 
    size: 'medium',
    category: 'Culinary'
  },
  { 
    id: 'g3', 
    url: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    caption: 'Private Wine Cellar', 
    size: 'medium',
    category: 'Interior'
  },
  { 
    id: 'g4', 
    url: 'https://images.unsplash.com/photo-1631100732613-6b65da9a343d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', 
    caption: 'Table Setting', 
    size: 'small',
    category: 'Atmosphere'
  },
  { 
    id: 'g5', 
    url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80', 
    caption: 'Handmade Pasta', 
    size: 'large',
    category: 'Culinary'
  },
  { 
    id: 'g6', 
    url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    caption: 'Terrace View', 
    size: 'medium',
    category: 'Atmosphere'
  },
  {
    id: 'g7',
    url: 'https://images.unsplash.com/photo-1625862577363-1c5e5a0f0e43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    caption: 'Evening Ambiance',
    size: 'medium',
    category: 'Atmosphere'
  },
  {
    id: 'g8',
    url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    caption: 'Signature Salad',
    size: 'small',
    category: 'Culinary'
  },
  {
    id: 'g9',
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    caption: 'Fine Dining Service',
    size: 'medium',
    category: 'Interior'
  }
];