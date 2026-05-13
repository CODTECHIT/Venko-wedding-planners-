import pkg848 from "@/assets/pkg-848.jpg";
import pkg853 from "@/assets/pkg-853.jpg";
import pkg847 from "@/assets/pkg-847.jpg";
import pkg850 from "@/assets/pkg-850.jpg";
import pkg849 from "@/assets/pkg-849.jpg";
import pkg852 from "@/assets/pkg-852.jpg";
import pkg851 from "@/assets/pkg-851.jpg";
import pkg854 from "@/assets/pkg-854.jpg";
import pkg855 from "@/assets/pkg-855.jpg";
import pkg857 from "@/assets/pkg-857.jpg";
import pkg858 from "@/assets/pkg-858.jpg";
import pkg856 from "@/assets/pkg-856.jpg";
import pkg860 from "@/assets/pkg-860.jpg";
import pkg861 from "@/assets/pkg-861.jpg";
import pkg862 from "@/assets/pkg-862.jpg";
import pkg859 from "@/assets/pkg-859.jpg";
import pkg864 from "@/assets/pkg-864.jpg";
import pkg865 from "@/assets/pkg-865.jpg";
import pkg863 from "@/assets/pkg-863.jpg";
import resortWeddingImg from "@/assets/resort-wedding.png";


export interface Package {
  id: number;
  type: string;
  price: number;
  originalPrice: number;
  pax: string;
  includes: string[];
  image: string;
}

export const packages: Package[] = [
  {
    id: 848, type: "Muhurat Package", price: 1879999, originalPrice: 2000000, pax: "1000 Muhurat Pax", image: pkg848,
    includes: ["Mandap Decoration", "Breakfast", "Lunch", "Traditional Videographer", "Candid Video", "Basic Album", "Entrance Name Board", "Sound", "Stage", "DJ", "Venue", "Walk Path", "Haldi Decoration", "Dinner", "Traditional Photographer", "Candid Photo", "Drone", "Pre wedding shoot", "Bridal Makeup", "Light", "Photo Booth", "Anchor", "Purohit", "Rooms"]
  },
  {
    id: 853, type: "Reception Package", price: 914999, originalPrice: 945000, pax: "400 Reception Pax", image: pkg853,
    includes: ["Reception Decoration", "Lunch", "Traditional Photographer", "Candid Photo", "Basic Album", "Sound", "Light", "DJ", "Dinner", "Breakfast", "Traditional Videographer", "Candid Video", "Entrance Name Board", "Bridal Makeup", "Stage", "Anchor"]
  },
  {
    id: 847, type: "Reception Package", price: 535999, originalPrice: 600000, pax: "500 Reception Pax", image: pkg847,
    includes: ["Reception Decoration", "Dinner", "Traditional Photographer", "Candid Photo", "Drone", "Entrance Name Board", "Stage", "DJ", "Venue", "Breakfast", "Lunch", "Traditional Videographer", "Candid Video", "Basic Album", "Sound", "Light", "Anchor"]
  },
  {
    id: 850, type: "Engagement Package", price: 398999, originalPrice: 450000, pax: "350 Engagement Pax", image: pkg850,
    includes: ["Engagement Decoration", "Dinner", "Traditional Photographer", "Candid Photo", "Drone", "Entrance Name Board", "Sound", "DJ", "Venue", "Breakfast", "Lunch", "Traditional Videographer", "Candid Video", "Basic Album", "Bridal Makeup", "Stage", "Anchor", "Purohit"]
  },
  {
    id: 849, type: "Muhurat Package", price: 7259999, originalPrice: 7500000, pax: "1500 Muhurat Pax", image: pkg849,
    includes: ["Mandap Decoration", "Haldi Decoration", "Dinner", "Traditional Photographer", "Candid Photo", "Drone", "Pre wedding shoot", "Bridal Makeup", "Light", "DJ", "Anchor", "Purohit", "Walk Path", "Sangeet Decoration", "Breakfast", "Lunch", "Traditional Videographer", "Candid Video", "Basic Album", "Entrance Name Board", "Sound", "Stage", "Photo Booth", "Venue", "Rooms", "Ganga Aarti"]
  },
  {
    id: 852, type: "Reception Package", price: 537999, originalPrice: 585000, pax: "300 Reception Pax", image: pkg852,
    includes: ["Reception Decoration", "Traditional Photographer", "Candid Photo", "Basic Album", "Stage", "Photo Booth", "Light", "Anchor", "Lunch", "Traditional Videographer", "Candid Video", "Sound", "DJ", "Bridal Makeup", "Entrance Name Board", "Venue"]
  },
  {
    id: 851, type: "Muhurat Package", price: 285999, originalPrice: 300000, pax: "200 Muhurat Pax", image: pkg851,
    includes: ["Mandap Decoration", "Traditional Photographer", "Candid Photo", "Basic Album", "Sound", "DJ", "Light", "Haldi Decoration", "Lunch", "Traditional Videographer", "Candid Video", "Bridal Makeup", "Stage", "Purohit", "Dinner"]
  },
  {
    id: 854, type: "Reception Package", price: 2847999, originalPrice: 2896000, pax: "700 Reception Pax", image: pkg854,
    includes: ["Reception Decoration", "Traditional Photographer", "Dinner", "Candid Video", "Basic Album", "Sound", "DJ", "Venue", "Light", "Lunch", "Traditional Videographer", "Candid Photo", "Drone", "Entrance Name Board", "Stage", "Anchor", "Bridal Makeup", "Photo Booth"]
  },
  {
    id: 855, type: "Muhurat Package", price: 14899999, originalPrice: 15800000, pax: "1500 Muhurat Pax", image: pkg855,
    includes: ["Mandap Decoration", "Lunch", "Traditional Videographer", "Candid Photo", "Drone", "Pre wedding shoot", "Bridal Makeup", "Light", "Photo Booth", "Anchor", "Venue", "Purohit", "Sangeet Decoration", "Haldi Decoration", "Dinner", "Traditional Photographer", "Candid Video", "Basic Album", "Entrance Name Board", "Sound", "Stage", "DJ", "Honeymoon Package", "Rooms", "Walk Path", "Breakfast", "Ganga Aarti"]
  },
  {
    id: 857, type: "Muhurat & Reception Package", price: 1154999, originalPrice: 1200000, pax: "700 Muhurat Pax / 400 Reception Pax", image: pkg857,
    includes: ["Mandap Decoration", "Breakfast", "Dinner", "Traditional Photographer", "Candid Photo", "Basic Album", "Pre wedding shoot", "Sound", "Photo Booth", "DJ", "Purohit", "Reception Decoration", "Haldi Decoration", "Lunch", "Traditional Videographer", "Candid Video", "Entrance Name Board", "Bridal Makeup", "Light", "Stage", "Anchor", "Venue"]
  },
  {
    id: 858, type: "Muhurat & Reception Package", price: 835999, originalPrice: 875000, pax: "1000 Muhurat Pax / 500 Reception Pax", image: pkg858,
    includes: ["Mandap Decoration", "Haldi Decoration", "Engagement Decoration", "Dinner", "Traditional Videographer", "Candid Video", "Pre wedding shoot", "Bridal Makeup", "Stage", "Photo Booth", "Anchor", "Walk Path", "Reception Decoration", "Breakfast", "Lunch", "Traditional Photographer", "Candid Photo", "Basic Album", "Entrance Name Board", "Sound", "Light", "DJ", "Purohit"]
  },
  {
    id: 856, type: "Muhurat & Reception Package", price: 8537999, originalPrice: 8596000, pax: "1000 Muhurat Pax / 500 Reception Pax", image: pkg856,
    includes: ["Mandap Decoration", "Haldi Decoration", "Dinner", "Traditional Photographer", "Candid Photo", "Drone", "Pre wedding shoot", "Bridal Makeup", "Stage", "DJ", "Anchor", "Purohit", "Reception Decoration", "Breakfast", "Lunch", "Traditional Videographer", "Candid Video", "Basic Album", "Entrance Name Board", "Sound", "Light", "Photo Booth", "Venue", "Walk Path"]
  },
  {
    id: 860, type: "Muhurat Package", price: 235999, originalPrice: 280000, pax: "300 Muhurat Pax", image: pkg860,
    includes: ["Mandap Decoration", "Dinner", "Traditional Photographer", "Candid Photo", "Entrance Name Board", "DJ", "Light", "Lunch", "Breakfast", "Traditional Videographer", "Basic Album", "Stage", "Sound"]
  },
  {
    id: 861, type: "Reception Package", price: 289999, originalPrice: 325000, pax: "300 Reception Pax", image: pkg861,
    includes: ["Reception Decoration", "Dinner", "Traditional Photographer", "Candid Photo", "Basic Album", "Stage", "Light", "Lunch", "Breakfast", "Traditional Videographer", "Entrance Name Board", "Sound", "DJ"]
  },
  {
    id: 862, type: "Muhurat Package", price: 205999, originalPrice: 235000, pax: "Muhurat Pax", image: pkg862,
    includes: ["Mandap Decoration", "Entrance Name Board", "Stage", "Haldi Decoration", "Light", "Bridal Makeup"]
  },
  {
    id: 859, type: "Engagement Package", price: 415999, originalPrice: 450000, pax: "300 Engagement Pax", image: pkg859,
    includes: ["Engagement Decoration", "Dinner", "Traditional Photographer", "Candid Photo", "Basic Album", "Sound", "DJ", "Light", "Photo Booth", "Walk Path", "Breakfast", "Lunch", "Traditional Videographer", "Candid Video", "Entrance Name Board", "Stage", "Bridal Makeup", "Anchor", "Purohit", "Venue"]
  },
  {
    id: 864, type: "Muhurat & Reception Package", price: 359999, originalPrice: 420000, pax: "Muhurat Pax / Reception Pax", image: pkg864,
    includes: ["Mandap Decoration", "Haldi Decoration", "Sound", "Light", "Walk Path", "Reception Decoration", "Entrance Name Board", "Stage", "DJ"]
  },
  {
    id: 865, type: "Photography Package", price: 215999, originalPrice: 250000, pax: "Photography Pax", image: pkg865,
    includes: ["Traditional Videographer", "Candid Photo", "Drone", "Pre wedding shoot", "Traditional Photographer", "Candid Video", "Basic Album"]
  },
  {
    id: 863, type: "Reception Package", price: 195999, originalPrice: 225000, pax: "Reception Pax", image: pkg863,
    includes: ["Reception Decoration", "Bridal Makeup", "Stage", "Photo Booth", "Entrance Name Board", "Light", "Walk Path"]
  },
  {
    id: 866, type: "Resort Wedding Package", price: 650000, originalPrice: 700000, pax: "150 Members", image: resortWeddingImg,
    includes: ["Resort Venue", "Mandap Decoration", "Buffet Lunch & Dinner", "Traditional Photographer", "Candid Photo", "Sound & DJ", "Light Decoration", "Rooms for Guest", "Wedding Planner"]
  },
];

export const typeOrder = [
  "Muhurat Package",
  "Reception Package",
  "Muhurat & Reception Package",
  "Engagement Package",
  "Photography Package",
  "Resort Wedding Package",
];

export function formatPrice(price: number): string {
  return "₹" + price.toLocaleString("en-IN");
}

export function getDiscount(original: number, price: number): number {
  return Math.round(((original - price) / original) * 100);
}
