export const SITE_NAME = "GoldCard";
export const SITE_DESCRIPTION = "Premium Prepaid Cards for Every Need";

export const NAVBAR_LINKS = [
  { label: "Home", href: "/" },
  { label: "Cards", href: "/cards" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const CARD_DATA = [
  {
    cardBin: "423456",
    whiteCardType: "Premium",
    cardModel: "Gold Plus",
    cardNetwork: "Visa",
    expirationDate: "5 Years",
    price: 29.99,
    country: "US"
  },
  {
    cardBin: "523456",
    whiteCardType: "Business",
    cardModel: "Platinum",
    cardNetwork: "Mastercard",
    expirationDate: "4 Years",
    price: 34.99,
    country: "GB"
  },
  {
    cardBin: "623456",
    whiteCardType: "Standard",
    cardModel: "Classic",
    cardNetwork: "Visa",
    expirationDate: "3 Years",
    price: 19.99,
    country: "CA"
  },
  {
    cardBin: "423457",
    whiteCardType: "Premium",
    cardModel: "Elite",
    cardNetwork: "Mastercard",
    expirationDate: "5 Years",
    price: 39.99,
    country: "FR"
  },
  {
    cardBin: "523457",
    whiteCardType: "Business",
    cardModel: "Executive",
    cardNetwork: "Visa",
    expirationDate: "4 Years",
    price: 44.99,
    country: "DE"
  }
];

export const STATISTICS = [
  { label: "Active Users", value: "250K+", icon: "users" },
  { label: "Cards Issued", value: "1M+", icon: "credit-card" },
  { label: "Countries", value: "150+", icon: "globe" },
  { label: "Satisfaction", value: "98%", icon: "thumbs-up" },
];

export const CARD_CATEGORIES = [
  { name: "Travel", icon: "plane" },
  { name: "Shopping", icon: "shopping-bag" },
  { name: "Business", icon: "briefcase" },
  { name: "Student", icon: "graduation-cap" },
  { name: "Gaming", icon: "gamepad-2" },
  { name: "Gift", icon: "gift" },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frequent Traveler",
    content: "GoldCard has revolutionized how I manage my travel expenses. No more worrying about exchange rates or foreign transaction fees!",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    content: "I use GoldCard for all my business expenses. The detailed transaction history and expense categorization save me hours of accounting work.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "College Student",
    content: "As a student on a budget, GoldCard helps me manage my spending and avoid overdraft fees. The app is super intuitive too!",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const FEATURED_CARDS = [
  {
    id: 1,
    name: "Gold Plus Card",
    description: "Premium card with exclusive rewards and global acceptance",
    image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 29.99,
    features: [
      "No foreign transaction fees",
      "24/7 concierge service",
      "Travel insurance",
      "Extended warranty protection"
    ]
  },
  {
    id: 2,
    name: "Platinum Business",
    description: "Designed for business professionals with premium benefits",
    image: "https://images.pexels.com/photos/7621138/pexels-photo-7621138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 34.99,
    features: [
      "Cash back on business purchases",
      "Expense management tools",
      "Employee cards",
      "Purchase protection"
    ]
  },
  {
    id: 3,
    name: "Elite Rewards",
    description: "Maximum rewards for your everyday spending",
    image: "https://images.pexels.com/photos/7621140/pexels-photo-7621140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 39.99,
    features: [
      "5% cashback on select categories",
      "Priority airport lounge access",
      "Annual travel credit",
      "Zero liability protection"
    ]
  }
];