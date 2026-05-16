export interface Course {
  id: string;
  title: string;
  price: number;
  description: string;
  features: string[];
  category: 'free' | 'paid' | 'recorded';
  image?: string;
  duration?: string;
}

export const courses: Course[] = [
  {
    id: 'boss-masterclass',
    title: 'BOSS Masterclass',
    price: 9999,
    description: 'Our flagship comprehensive English communication program',
    features: [
      '52 live sessions over 6 months',
      '1-on-1 personalized coaching',
      'Access to all recorded content',
      'Private community access',
      'Certification on completion',
      'Lifetime content updates'
    ],
    category: 'paid',
    duration: '6 months'
  },
  {
    id: 'spoken-foundation',
    title: 'Spoken Foundation',
    price: 4999,
    description: 'Build a strong base for English speaking confidence',
    features: [
      '24 live sessions over 3 months',
      'Small group practice (max 10)',
      'Recording access for 1 year',
      'Basic grammar & vocabulary training',
      'Weekly assignments & feedback'
    ],
    category: 'paid',
    duration: '3 months'
  },
  {
    id: 'business-english',
    title: 'Business English Pro',
    price: 7999,
    description: 'Master professional English for the corporate world',
    features: [
      '32 live business sessions',
      'Mock interviews & presentations',
      'Email & report writing training',
      'Industry-specific vocabulary',
      '1-on-1 career coaching call'
    ],
    category: 'paid',
    duration: '4 months'
  },
  {
    id: 'accent-training',
    title: 'Accent Training',
    price: 2999,
    description: 'Perfect your pronunciation and sound more native',
    features: [
      '16 focused pronunciation sessions',
      'Accent analysis & correction',
      'Shadowing exercises library',
      'Speech pattern training',
      'Recording & self-assessment tools'
    ],
    category: 'paid',
    duration: '2 months'
  },
  {
    id: 'free-basics',
    title: 'English Basics - Free',
    price: 0,
    description: 'Start your English journey with our free foundational course',
    features: [
      '10 video lessons',
      'Basic vocabulary lists',
      'Grammar starter guide',
      'Community forum access'
    ],
    category: 'free'
  },
  {
    id: 'recorded-bundle',
    title: 'Recorded Course Bundle',
    price: 3999,
    description: 'Access to all our recorded premium courses',
    features: [
      '200+ hours of recorded content',
      'All course materials & PDFs',
      'Self-paced learning',
      'Quiz & assessment access'
    ],
    category: 'recorded',
    duration: 'Lifetime'
  }
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    course: 'BOSS Masterclass',
    rating: 5,
    text: 'My English has transformed completely. I went from struggling to speak in meetings to leading presentations confidently. The method really works!',
    date: '2024-12-15'
  },
  {
    id: '2',
    name: 'Raj Patel',
    course: 'Business English Pro',
    rating: 5,
    text: 'Got promoted to regional manager within 3 months of completing the course. The business communication skills were exactly what I needed.',
    date: '2024-11-20'
  },
  {
    id: '3',
    name: 'Emily Chen',
    course: 'Spoken Foundation',
    rating: 4,
    text: 'Great foundation course. The small group format meant I got lots of speaking practice. Highly recommend for beginners.',
    date: '2024-10-05'
  },
  {
    id: '4',
    name: 'Michael Thompson',
    course: 'Accent Training',
    rating: 5,
    text: 'Finally working on my pronunciation after 10 years of avoiding it. The accent training gave me the tools to improve significantly.',
    date: '2024-09-18'
  },
  {
    id: '5',
    name: 'Ana Rodriguez',
    course: 'BOSS Masterclass',
    rating: 5,
    text: 'Charles William\'s approach is different. He teaches you to think in English, not just translate. That made all the difference for me.',
    date: '2024-08-22'
  },
  {
    id: '6',
    name: 'David Kim',
    course: 'Recorded Course Bundle',
    rating: 4,
    text: 'The self-paced format fit perfectly with my busy schedule. Great content quality and comprehensive coverage of topics.',
    date: '2024-07-30'
  }
];