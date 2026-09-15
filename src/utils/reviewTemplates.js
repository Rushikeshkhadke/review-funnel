export const reviewTemplates = {
  'Clothing/Saree': {
    5: [
      'Visited [brand_name] in [city] today! Amazing saree collection and fantastic fabric quality. The staff was super helpful.',
      'Best shopping experience at [brand_name]! Great variety of designer sarees and traditional wear in [city]. Highly recommended!',
      'Loved the collection at [brand_name]! High quality material, fair pricing, and very friendly staff in [city].',
      'Extremely satisfied with my purchase from [brand_name]! Beautiful saree designs and very polite staff in [city].',
      'The best saree showroom in [city]! Huge variety, premium fabrics, and excellent customer service at [brand_name].',
      'Wonderful saree collection at [brand_name]! Found exactly what I was looking for. Will definitely visit again in [city].'
    ],
    4: [
      'Nice experience at [brand_name]! Good range of saree options and nice atmosphere in [city].',
      'Really liked the saree designs at [brand_name]. Good quality and polite customer service.',
      'Good saree collection in [city] at [brand_name]. Fair prices and helpful sales executive.'
    ],
    3: [
      'Decent collection at [brand_name] in [city]. Fair prices and helpful staff.'
    ]
  },
  'Restaurant': {
    5: [
      'Delicious food and outstanding service at [brand_name] in [city]! Will definitely come back again with family.',
      'Must try spot in [city]! [brand_name] serves incredible food with top-notch hygiene and ambiance.',
      'Had an extraordinary dinner at [brand_name]! Great taste, fast service, and fantastic staff in [city].',
      'Hands down the best place to eat in [city]! [brand_name] never disappoints with its authentic flavor.',
      'Amazing food quality and friendly hospitality at [brand_name]. Highly recommend visiting here in [city]!'
    ],
    4: [
      'Great meal at [brand_name]! Fresh ingredients and quick service in [city].',
      'Enjoyed dining at [brand_name]. Tasty food and good ambiance in [city].',
      'Good food quality at [brand_name]. Service was prompt and staff was courteous.'
    ],
    3: [
      'Good food at [brand_name] in [city]. Decent portion sizes and service.'
    ]
  },
  'Mobile Shop': {
    5: [
      'Bought a new phone from [brand_name] in [city]! Best deals in town and super knowledgeable staff.',
      'Great service at [brand_name]! They helped me transfer all my data seamlessly. Highly recommend!',
      'Best mobile shop in [city]! [brand_name] offers genuine products, best discounts, and super helpful staff.',
      'Fantastic experience buying my new phone at [brand_name] in [city]. Quick service and original accessories!'
    ],
    4: [
      'Very good phone collection and accessories at [brand_name] in [city]. Good prices.',
      'Prompt service and honest advice at [brand_name]. Satisfied customer!',
      'Good variety of mobile brands and accessories at [brand_name] in [city].'
    ],
    3: [
      'Decent service at [brand_name] in [city]. Good range of products available.'
    ]
  },
  'Cafe': {
    5: [
      'Best coffee spot in [city]! Loved the ambiance and fresh snacks at [brand_name]. Perfect place to chill.',
      'Amazing coffee and lovely vibe at [brand_name]! Quick service and friendly staff in [city].',
      'Awesome cozy cafe in [city]! [brand_name] has great food, amazing beverages, and very peaceful music.',
      'Loved the ambiance and delicious snacks at [brand_name]. The best place to hangout with friends in [city]!'
    ],
    4: [
      'Nice cozy cafe in [city]! Good coffee and peaceful environment at [brand_name].',
      'Great taste and reasonable pricing at [brand_name]. Would visit again.',
      'Good hangout spot in [city] at [brand_name]. Friendly staff and quick order processing.'
    ],
    3: [
      'Decent place for a quick coffee in [city] at [brand_name].'
    ]
  },
  'Salon': {
    5: [
      'Got a styling at [brand_name] in [city] and it turned out amazing! Super skilled professionals.',
      'Highly professional service at [brand_name]! Clean, hygienic, and relaxing atmosphere in [city].',
      'The best salon experience in [city]! [brand_name] staff is extremely courteous and talented.',
      'Superb haircut and skin care service at [brand_name]! Left feeling completely satisfied and refreshed.'
    ],
    4: [
      'Good grooming service at [brand_name]. Polite staff and good quality products used in [city].',
      'Satisfied with the service at [brand_name]. Very neat and professional.',
      'Nice service and friendly behavior by staff at [brand_name] in [city].'
    ],
    3: [
      'Decent salon experience at [brand_name] in [city]. Good basic services.'
    ]
  },
  'Grocery': {
    5: [
      'Always fresh stock and clean store at [brand_name] in [city]! Quick checkout and great discount offers.',
      'Best local grocery store in [city]! [brand_name] has everything you need under one roof.',
      'Super convenient and well-stocked store! [brand_name] staff in [city] is very polite and helpful.'
    ],
    4: [
      'Well organized store with good pricing at [brand_name] in [city]. Polite staff.',
      'Good variety of daily essentials at [brand_name]. Easy shopping experience.'
    ],
    3: [
      'Decent grocery store in [city]. Good availability of daily items at [brand_name].'
    ]
  },
  'Other': {
    5: [
      'Excellent experience with [brand_name] in [city]! Top quality service and very professional team.',
      'Highly satisfied with [brand_name]! Friendly staff, great value, and super smooth experience.',
      'Truly outstanding service at [brand_name] in [city]. Will definitely recommend to everyone!'
    ],
    4: [
      'Very good service at [brand_name] in [city]. Reliable and polite staff.',
      'Had a pleasant experience with [brand_name]. Would recommend to others.'
    ],
    3: [
      'Satisfactory service at [brand_name] in [city]. Good overall.'
    ]
  }
};

export function getRandomReview(businessType, stars, brandName, city) {
  const category = reviewTemplates[businessType] || reviewTemplates['Other'];
  const starReviews = category[stars] || category[5];
  const randomIndex = Math.floor(Math.random() * starReviews.length);
  let template = starReviews[randomIndex];

  return template
    .replace(/\[brand_name\]/g, brandName || 'this store')
    .replace(/\[city\]/g, city || 'our area');
}