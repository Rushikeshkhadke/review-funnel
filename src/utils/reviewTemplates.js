// Dynamic Review Combinator logic - CATEGORY SPECIFIC, SEO OPTIMIZED & STRICT NON-REPEATING

// ---------------- 5-STAR TEMPLATE POOLS ----------------

// INTROS (5-Star)
const intros5_generic = [
  "Absolutely amazing experience!",
  "I am beyond impressed.",
  "Wow, what a fantastic visit.",
  "This is exactly what I was looking for.",
  "Exceeded all my expectations completely.",
  "Such a wonderful and smooth experience.",
  "Five stars simply isn't enough.",
  "I don't usually write reviews, but I had to.",
  "Top-notch service from start to finish!",
  "Everything was absolutely perfect today.",
  "I am so glad I decided to come here.",
  "Absolutely flawless from start to finish.",
  "Hands down the best decision I made today.",
  "Superb quality and excellent customer care.",
  "Incredible attention to detail.",
  "A perfect 10/10 experience."
];

const intros5_ca = [
  "Very professional and trustworthy service!",
  "Extremely satisfied with their tax guidance.",
  "Best decision for my business finances!",
  "Highly knowledgeable and helpful team.",
  "Prompt and accurate financial service.",
  "Super smooth experience from start to finish!",
  "Relieved my tax stress completely!",
  "Outstanding guidance and compliance support.",
  "Top-rated financial consultation!",
  "A true expert in tax and auditing."
];

const intros5_mobile = [
  "Hands down the best mobile store around!",
  "Super fast service and 100% genuine products!",
  "Got the best deal on my new phone!",
  "Extremely happy with my shopping experience!",
  "Top-notch service and honest guidance!",
  "Best place for Apple phones and Samsung flagships!",
  "Unbeatable collection of accessories and perfumes!",
  "Best mobile buying experience ever!",
  "Highly satisfied with their customer service!",
  "Awesome collection of latest iPhones and premium phones!"
];

// BODIES (5-Star)
const bodies5_generic = [
  "I've visited many places, but {brand} is hands down the most exceptional {businessType} I have ever been to.",
  "The staff at {brand} sets a completely new standard for any {businessType}.",
  "You can tell the team at {brand} truly cares about running a top-tier {businessType}.",
  "I was blown away by the quality and professionalism {brand} delivers as a {businessType}.",
  "Finding a reliable {businessType} can be tough, but {brand} makes it look easy with their perfect service.",
  "The atmosphere, the service, the quality—{brand} nails every aspect of a great {businessType}.",
  "{brand} provided some of the best service I have ever received from any {businessType}.",
  "They went above and beyond to make sure my experience at their {businessType} was flawless, thank you {brand}.",
  "It is so refreshing to see a {businessType} run this well; {brand} truly respects their customers.",
  "The value and premium quality you get at {brand} makes them a standout {businessType}.",
  "They clearly take a lot of pride in their work, making {brand} a highly trustworthy {businessType}.",
  "I felt so valued as a customer at {brand}, they are a prime example of a great {businessType}."
];

const bodies5_ca = [
  "I was looking for GST registration and income tax return filing, and {brand} guided me through the entire process very smoothly.",
  "I had received an income tax notice recently, and {brand} helped us in figuring out all the things and resolved it without any hassle.",
  "Got my company registration, GST filing, and ROC compliances done through {brand}. Excellent financial guidance and quick response.",
  "If you need expert help with audit, tax planning, or IT returns, {brand} is the most reliable firm to consult.",
  "{brand} handles all our company compliances, GST returns, and yearly auditing with complete accuracy.",
  "Very knowledgeable CA. {brand} saved us a lot of tax legally with proper financial planning and advice.",
  "Needed urgent tax consultation for my business, and {brand} explained every single detail clearly and professionally.",
  "Super smooth experience getting my ITR filed through {brand}. No hassle at all and got maximum refund processed.",
  "From GST filing to company audit and compliances, {brand} handles all our business finances seamlessly.",
  "Extremely trustworthy CA services at {brand}. They handle all our tax compliances on time without any delay.",
  "I was worried about complex tax laws for my business, but {brand} made everything so simple and transparent.",
  "{brand} has been managing our accounts and tax filings for years, always providing top-tier professional advice."
];

const bodies5_mobile = [
  // Rohit mentions
  "Purchased my new Apple iPhone from {brand}. Rohit bhai guided me patiently and gave me an amazing deal with original accessories!",
  "Best shop for Apple lovers! Rohit at {brand} was super helpful in recommending the right iPhone cover and tempered glass from their huge variety.",
  "Rohit at {brand} gave me the best price for my Samsung Ultra flagship phone. Very polite and knowledgeable owner!",
  "I went to {brand} to buy a new phone and Rohit helped me choose between Samsung premium segment and iPhone. Highly honest service!",
  "Rohit suggested a great premium branded perfume along with my new iPhone purchase at {brand}. Really loved the experience!",
  
  // Monish mentions
  "Bought the latest Samsung Galaxy flagship from {brand}. Monish bhai gave me a great discount and genuine brand warranty!",
  "Monish at {brand} showed me an unbelievable variety of Apple iPhone covers and premium accessories. Top quality store!",
  "Monish bhai is extremely polite and customer-focused. He helped me pick an awesome Apple phone and a premium branded perfume at {brand}.",
  "If you want authentic Apple products or Samsung premium phones, go straight to {brand} and meet Monish!",
  "Monish made my phone buying experience so smooth at {brand}. He even set up my new iPhone and data transfer in minutes.",

  // Rohit & Monish combined
  "Rohit and Monish at {brand} are running the best mobile shop! Got an amazing deal on my new iPhone along with a fantastic branded perfume.",
  "Special thanks to Rohit bhai and Monish bhai at {brand} for giving me the best deal on Samsung premium segment phone and custom Apple covers.",

  // Staff mentions
  "The staff at {brand} is super courteous and well-trained. They showed me a huge collection of iPhone covers and fast chargers patiently.",
  "Great customer service by the team at {brand}! They helped me select a premium Samsung phone and a lovely branded perfume.",
  "The staff at {brand} made sure I got 100% genuine accessories for my Apple phone with official brand warranty.",

  // Product focused (Without owner/staff name)
  "Purchased my new Apple iPhone from {brand}. They have an incredible variety of iPhone covers, chargers, and even premium branded perfumes!",
  "{brand} has the best collection of Samsung premium segment phones and Apple devices in the market.",
  "If you own an iPhone, {brand} is a paradise! They have all varieties of Apple covers, screen guards, and premium accessories.",
  "Got my new Apple phone from {brand} along with an awesome branded perfume. Everything is 100% authentic with official warranty.",
  "Best mobile store! {brand} offers top-quality accessories, genuine Apple products, and Samsung flagships at competitive rates.",
  "Surprised to find an amazing collection of premium branded perfumes alongside latest Apple and Samsung phones at {brand}!",
  "Found the perfect cover for my iPhone at {brand}. They have the largest variety of Apple accessories in the city."
];

const bodies5_clothing = [
  "Purchased beautiful sarees and ethnic wear from {brand}. Amazing collection, authentic fabric, and very reasonable prices.",
  "The wedding saree and ethnic wear collection at {brand} is magnificent! Great customer service and friendly staff.",
  "Best shop for designer sarees and traditional wear. {brand} has unique designs and high quality fabric.",
  "Staff at {brand} is very patient and showed us a wide variety of sarees according to our exact budget and choice.",
  "Whenever we have any family function, {brand} is our first choice for shopping. Excellent quality sarees and dresses."
];

const bodies5_restaurant = [
  "The food quality, taste, and hygiene at {brand} is outstanding! Quick service, great menu variety, and wonderful ambiance.",
  "Had a delicious meal at {brand}. Fresh ingredients, rich flavor, and friendly staff service.",
  "{brand} serves amazing dishes with great presentation. Easily the best dining experience around.",
  "Loved the food and hospitality at {brand}. Clean hygiene, fast service, and authentic taste."
];

const bodies5_cafe = [
  "Awesome coffee, delicious snacks, and great chill vibe at {brand}. Perfect spot to hang out with friends!",
  "The coffee and food at {brand} are top quality. Very clean, cozy seating, and polite staff.",
  "Great ambiance and mouth-watering cafe food at {brand}. Highly recommended for quick bites."
];

const bodies5_salon = [
  "Got a haircut and grooming service at {brand}. Very clean equipment, skilled stylists, and relaxing experience.",
  "The staff at {brand} is professional and well-trained. Excellent hair styling and skin care services.",
  "Always satisfied with the haircut and treatment at {brand}. Hygienic, polite, and reasonable rates."
];

const bodies5_grocery = [
  "Fresh items, daily grocery essentials, and wholesale prices at {brand}. Quick billing and well-organized store.",
  "Best supermarket for all daily household needs. {brand} offers great discounts and fresh stock."
];

// OUTROS (5-Star)
const outros5_generic = [
  "If you are anywhere near {city}, you have to check them out!",
  "Easily the absolute best spot in all of {city}.",
  "Highly recommended to everyone living in or visiting {city}.",
  "I'll definitely be coming back next time I'm in {city}.",
  "A true hidden gem in {city} that everyone needs to know about!",
  "There is no better place to go in {city}.",
  "Do yourself a favor and visit them when you are in {city}.",
  "The premier choice for anyone located in {city}.",
  "I've already told all my friends in {city} about it.",
  "Will be a regular customer here in {city} from now on.",
  "A must-visit location in {city}."
];

const outros5_ca = [
  "Highly recommended for anyone needing tax or accounting help in {city}!",
  "Best Chartered Accountant services you can get in {city}.",
  "If you are looking for a reliable CA in {city}, definitely contact them.",
  "The premier choice for business taxation and auditing in {city}.",
  "I will definitely continue using their services here in {city}.",
  "A must-visit firm for any business owner in {city}."
];

const outros5_mobile = [
  "Easily the best mobile shop in {city}!",
  "If you want an iPhone, Samsung flagship, or premium perfume in {city}, go straight to them!",
  "Highly recommended mobile store for all {city} locals.",
  "Best prices and deals on Apple phones and accessories in all of {city}.",
  "Will definitely buy my next phone and perfumes from them in {city}!",
  "The most trusted mobile store in {city}."
];


// ---------------- 4-STAR TEMPLATE POOLS ----------------

const intros4_generic = [
  "Great experience overall.",
  "Very good service today.",
  "I really enjoyed my visit.",
  "A solid and reliable choice.",
  "I was quite happy with everything.",
  "Nice place with good vibes.",
  "A very pleasant experience.",
  "Good value and polite service.",
  "Good quality work.",
  "Overall, I'm satisfied."
];

const bodies4_generic = [
  "Overall, {brand} is a very solid {businessType} with great service.",
  "I had a really good time at {brand}, they run a very dependable {businessType}.",
  "The quality at {brand} is great, making it a very strong {businessType} choice.",
  "I appreciate the hard work the team at {brand} puts into this {businessType}.",
  "Good quality and decent pricing make {brand} a competitive {businessType}."
];

const bodies4_ca = [
  "Got my GST filing and income tax return done at {brand}. Good service and professional advice.",
  "Very helpful CA firm. {brand} resolved our tax query and explained compliance details well.",
  "Solid experience getting our company registration and tax planning done through {brand}.",
  "{brand} handles tax filing and accounting smoothly. Dependable firm in {city}.",
  "Good guidance on GST, income tax, and financial returns by {brand}."
];

const bodies4_mobile = [
  "Bought an iPhone cover and fast charger from {brand}. Rohit and the staff were polite and gave good suggestions.",
  "Good collection of Samsung premium segment phones and Apple accessories at {brand}. Monish was helpful.",
  "Got my new Apple phone and a nice branded perfume at {brand}. Decent experience overall.",
  "{brand} has a really good variety of Apple phone covers and accessories in {city}.",
  "Friendly team at {brand}. Good deals on Samsung flagships and Apple devices."
];

const outros4_generic = [
  "A great addition to {city}.",
  "Definitely worth visiting when you are in {city}.",
  "One of the better options available in {city}.",
  "Would definitely return next time I'm in {city}.",
  "Good job guys, glad to have you in {city}."
];

const outros4_ca = [
  "Good choice for accounting and tax needs in {city}.",
  "Recommended CA firm for business owners in {city}.",
  "Will consult them again for next year's filing in {city}."
];

const outros4_mobile = [
  "One of the better mobile shops in {city}.",
  "Recommended for buying iPhones, accessories, or perfumes in {city}.",
  "Good mobile store for all {city} residents."
];

// 3-STAR TEMPLATES
const threeStarTemplates = [
  "It was okay. {brand} is an average {businessType} in {city}.",
  "Decent experience at {brand}, but nothing special for {city}.",
  "Average service at {brand} in {city}. Has potential."
];

// SHUFFLE & NON-REPEATING HELPER
const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const getNonRepeatingRandom = (arr, storageKey) => {
  let cycle = [];
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored) cycle = JSON.parse(stored);
  } catch (e) {}

  if (!Array.isArray(cycle) || cycle.length === 0) {
    cycle = Array.from({ length: arr.length }, (_, i) => i);
    cycle = shuffleArray(cycle);
  }

  const selectedIndex = cycle.pop();

  try {
    localStorage.setItem(storageKey, JSON.stringify(cycle));
  } catch (e) {}

  return arr[selectedIndex];
};

export const getRandomReview = (businessType, rating, brandName, city) => {
  const brand = brandName || 'this place';
  const location = city || 'the area';
  const typeStr = (businessType || '').toLowerCase();

  let cat = 'generic';
  if (typeStr.includes('ca') || typeStr.includes('accountant') || typeStr.includes('tax') || typeStr.includes('gst') || typeStr.includes('audit')) {
    cat = 'ca';
  } else if (typeStr.includes('mobile') || typeStr.includes('phone') || typeStr.includes('cell')) {
    cat = 'mobile';
  } else if (typeStr.includes('saree') || typeStr.includes('clothing') || typeStr.includes('dress') || typeStr.includes('wear')) {
    cat = 'clothing';
  } else if (typeStr.includes('restaurant') || typeStr.includes('food') || typeStr.includes('dining')) {
    cat = 'restaurant';
  } else if (typeStr.includes('cafe') || typeStr.includes('coffee')) {
    cat = 'cafe';
  } else if (typeStr.includes('salon') || typeStr.includes('parlour') || typeStr.includes('barber')) {
    cat = 'salon';
  } else if (typeStr.includes('grocery') || typeStr.includes('supermarket') || typeStr.includes('mart')) {
    cat = 'grocery';
  }

  let introsPool = intros5_generic;
  let bodiesPool = bodies5_generic;
  let outrosPool = outros5_generic;

  if (rating === 5) {
    if (cat === 'ca') {
      introsPool = intros5_ca;
      bodiesPool = bodies5_ca;
      outrosPool = outros5_ca;
    } else if (cat === 'mobile') {
      introsPool = intros5_mobile;
      bodiesPool = bodies5_mobile;
      outrosPool = outros5_mobile;
    } else if (cat === 'clothing') {
      bodiesPool = bodies5_clothing;
    } else if (cat === 'restaurant') {
      bodiesPool = bodies5_restaurant;
    } else if (cat === 'cafe') {
      bodiesPool = bodies5_cafe;
    } else if (cat === 'salon') {
      bodiesPool = bodies5_salon;
    } else if (cat === 'grocery') {
      bodiesPool = bodies5_grocery;
    }
  } else if (rating === 4) {
    introsPool = intros4_generic;
    outrosPool = outros4_generic;
    bodiesPool = bodies4_generic;

    if (cat === 'ca') {
      bodiesPool = bodies4_ca;
      outrosPool = outros4_ca;
    } else if (cat === 'mobile') {
      bodiesPool = bodies4_mobile;
      outrosPool = outros4_mobile;
    }
  }

  let text = "";
  if (rating === 5 || rating === 4) {
    const keyPrefix = `review_cycle_${rating}__${cat}`;
    const intro = getNonRepeatingRandom(introsPool, `${keyPrefix}_intros`);
    const body = getNonRepeatingRandom(bodiesPool, `${keyPrefix}_bodies`);
    const outro = getNonRepeatingRandom(outrosPool, `${keyPrefix}_outros`);
    text = `${intro} ${body} ${outro}`;
  } else {
    text = getNonRepeatingRandom(threeStarTemplates, 'review_cycle_3_all');
  }

  // Format replacements
  const displayType = businessType ? businessType.toLowerCase() : 'business';
  text = text.replace(/{brand}/g, brand);
  text = text.replace(/{businessType}/g, displayType);
  text = text.replace(/{city}/g, location);

  return text;
};