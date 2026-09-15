// 50 5-star reviews
const fiveStarTemplates = [
  "Absolutely amazing experience at {brand}! The staff is super friendly and the service is top-notch. Best {businessType} in {city} without a doubt.",
  "I've been to many places in {city}, but {brand} truly stands out. The quality is exceptional!",
  "Highly recommend {brand}! They exceeded all my expectations. Will definitely be visiting this {businessType} again.",
  "Such a great vibe and excellent service at {brand}. If you are in {city}, you must check them out.",
  "Five stars! The team at {brand} really knows how to treat their customers. Truly the best {businessType} experience.",
  "I am so impressed with {brand}. Everything was perfect from start to finish. Highly recommended in {city}!",
  "Fantastic {businessType}! {brand} never disappoints. Always a great time when I visit.",
  "Words can't describe how good {brand} is. You have to experience it yourself. Top tier {businessType} in {city}.",
  "Incredible service! {brand} has definitely gained a loyal customer today.",
  "If you're looking for a reliable {businessType} in {city}, {brand} is the place to go. 10/10!",
  "Loved my visit to {brand}. The atmosphere, the quality, everything was just perfect.",
  "Best {businessType} experience I've had in a long time. {brand} is doing an amazing job in {city}.",
  "I highly recommend {brand}. Their attention to detail is unmatched.",
  "A hidden gem in {city}! {brand} is fantastic and I will be telling all my friends about it.",
  "Outstanding quality and service at {brand}. Easily my favorite {businessType} now.",
  "Always a phenomenal experience at {brand}. The staff is incredibly welcoming.",
  "I can't say enough good things about {brand}. They are the best {businessType} in the area.",
  "Superb! {brand} completely blew me away. Will be coming back to {city} just for this.",
  "Excellent {businessType}! {brand} provides consistent and high-quality service every single time.",
  "The best of the best. {brand} sets the standard for every {businessType} in {city}.",
  "I absolutely love {brand}! They always go above and beyond.",
  "Top quality service! {brand} is highly recommended if you're anywhere near {city}.",
  "What a great experience! {brand} is definitely the top {businessType} I've visited recently.",
  "Perfect execution and great customer service at {brand}. 5 stars all the way!",
  "I'm blown away by {brand}. The best {businessType} in {city}, hands down.",
  "Such a wonderful experience at {brand}. Highly professional and excellent quality.",
  "I recommend {brand} to everyone I know. Absolutely fantastic {businessType}.",
  "Great job, {brand}! Your team in {city} is doing phenomenal work.",
  "10/10 would recommend {brand}. They make everything so easy and enjoyable.",
  "A brilliant {businessType}. {brand} is my go-to place in {city}.",
  "Always exceptional. {brand} never drops their standard of excellence.",
  "Very impressed with {brand}. They truly care about their customers.",
  "Best decision I made was visiting {brand} today. Top {businessType} in {city}!",
  "Nothing but perfection at {brand}. I highly advise everyone to visit.",
  "Super happy with my experience at {brand}. The staff in {city} is awesome.",
  "They deserve more than 5 stars! {brand} is the absolute best {businessType}.",
  "A truly wonderful {businessType}. {brand} exceeds expectations every time.",
  "I'm so glad I found {brand} in {city}. It's my new favorite spot.",
  "Impeccable service at {brand}. Highly recommend them to anyone.",
  "Consistently great. {brand} is the most reliable {businessType} around.",
  "They do a fantastic job at {brand}. I am a very satisfied customer.",
  "Wow! {brand} really knows how to deliver a premium {businessType} experience.",
  "Highly satisfied with {brand}. Best place in {city}!",
  "The quality at {brand} is unmatched. A flawless experience.",
  "I love the energy and service at {brand}. Highly recommended {businessType}.",
  "If you haven't been to {brand} in {city}, you are missing out!",
  "Excellent from top to bottom. {brand} is a phenomenal {businessType}.",
  "The staff at {brand} is amazing and the service is perfect.",
  "Highly professional, super friendly, and great quality. Thanks {brand}!",
  "I will always recommend {brand}. The best {businessType} experience in {city}."
];

// 50 4-star reviews
const fourStarTemplates = [
  "Great experience at {brand}. The service was really good, and I enjoyed my time at this {businessType}.",
  "Very good {businessType} in {city}. {brand} has excellent quality, just minor room for improvement.",
  "I liked {brand} a lot. The staff was friendly and the overall experience was solid.",
  "Good value and nice atmosphere at {brand}. Would visit again when in {city}.",
  "Solid 4 stars for {brand}. A very reliable {businessType}.",
  "Really enjoyed my visit to {brand}. One of the better places in {city}.",
  "Good service overall at {brand}. I was quite satisfied with this {businessType}.",
  "Nice place! {brand} does a great job, just a bit crowded today.",
  "Very nice {businessType}. {brand} is definitely worth checking out in {city}.",
  "I had a pleasant experience at {brand}. Will likely return.",
  "Good quality and friendly staff at {brand}. Solid 4-star experience.",
  "I was happy with {brand}. A very good {businessType} overall.",
  "Great option in {city}. {brand} provides good service consistently.",
  "Nice to have a good {businessType} like {brand} nearby. Enjoyed it.",
  "Pretty good experience at {brand}. Met my expectations well.",
  "I generally really like {brand}. Good quality and nice people.",
  "Solid choice in {city}. {brand} is a good {businessType}.",
  "Satisfied with {brand}. Everything was good and well managed.",
  "Good, reliable service at {brand}. I've had good experiences here.",
  "I recommend {brand} if you're looking for a good {businessType} in {city}.",
  "Nice atmosphere and good quality at {brand}.",
  "A positive experience at {brand}. They do things well.",
  "Very decent {businessType}. {brand} is doing a good job.",
  "I enjoyed my time at {brand}. A nice addition to {city}.",
  "Good work by the team at {brand}. Happy with the service.",
  "Overall, a great experience at {brand}. Would recommend.",
  "Pretty solid {businessType}. {brand} rarely disappoints.",
  "Glad I stopped by {brand}. A very good experience.",
  "Nice quality and friendly service at {brand} in {city}.",
  "Good place. {brand} is a reliable {businessType} to visit.",
  "I had a good time at {brand}. Everything was up to par.",
  "Very satisfied with {brand}. A strong 4-star performance.",
  "Good {businessType} option in {city}. {brand} is quite nice.",
  "I appreciate the service at {brand}. They do a fine job.",
  "Well managed and good quality at {brand}.",
  "A nice experience at {brand}. I would visit this {businessType} again.",
  "Good job {brand}. You guys are doing great in {city}.",
  "Solid service and nice people at {brand}.",
  "Overall very good. {brand} is a nice {businessType}.",
  "I liked {brand}. Good quality and decent pricing.",
  "Satisfactory experience at {brand} today.",
  "Good place in {city}. {brand} met my needs well.",
  "Nice and reliable {businessType}. {brand} is good.",
  "A pleasant visit to {brand}. Friendly staff and good service.",
  "I was quite happy with {brand}. A good experience overall.",
  "Good quality at {brand}. Will be back again.",
  "Nice to see a good {businessType} like {brand} in {city}.",
  "A good solid choice. {brand} is very dependable.",
  "I enjoyed the service at {brand}. Would recommend to others.",
  "Very good overall experience at {brand}."
];

// 10 3-star reviews (just in case)
const threeStarTemplates = [
  "It was okay. {brand} is an average {businessType}.",
  "Decent experience at {brand}, but nothing special.",
  "Average service at {brand} in {city}. Has potential.",
  "It was fine. {brand} met basic expectations.",
  "Not bad, but not great either. {brand} is just okay.",
  "Fair experience at {brand}. Might give it another try.",
  "Standard {businessType}. {brand} was acceptable.",
  "Could be better, but overall an okay visit to {brand}.",
  "Service at {brand} was average today.",
  "{brand} is a typical {businessType} in {city}. Nothing exceptional."
];

// Helper to shuffle an array
const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

// Main function to get a non-repeating random review
export const getRandomReview = (businessType, rating, brandName, city) => {
  const brand = brandName || 'this place';
  const location = city || 'the area';
  const type = businessType ? businessType.toLowerCase() : 'business';

  let templates = [];
  if (rating === 5) templates = fiveStarTemplates;
  else if (rating === 4) templates = fourStarTemplates;
  else templates = threeStarTemplates;

  if (templates.length === 0) return "Great experience!";

  // Storage key specific to this rating
  const storageKey = `review_cycle_${rating}`;
  
  // Get current cycle from localStorage
  let cycle = [];
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored) cycle = JSON.parse(stored);
  } catch (e) {
    console.error("Local storage error", e);
  }

  // If cycle is empty or invalid, refill and shuffle it with indices 0 to length-1
  if (!Array.isArray(cycle) || cycle.length === 0) {
    cycle = Array.from({ length: templates.length }, (_, i) => i);
    cycle = shuffleArray(cycle);
  }

  // Pop the last index to use it
  const selectedIndex = cycle.pop();

  // Save the remaining cycle back to localStorage
  try {
    localStorage.setItem(storageKey, JSON.stringify(cycle));
  } catch (e) {}

  // Get the template and replace variables
  let text = templates[selectedIndex];
  text = text.replace(/{brand}/g, brand);
  text = text.replace(/{businessType}/g, type);
  text = text.replace(/{city}/g, location);

  return text;
};