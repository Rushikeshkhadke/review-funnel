// Dynamic Review Combinator logic - STRICT SEO OPTIMIZED & STRICT NON-REPEATING

const intros5 = [
  "Absolutely amazing experience!",
  "I am beyond impressed.",
  "Wow, what a fantastic visit.",
  "This is exactly what I was looking for.",
  "Exceeded all my expectations completely.",
  "Such a wonderful and smooth experience.",
  "Five stars simply isn't enough.",
  "I don't usually write reviews, but I had to.",
  "A truly exceptional and premium feel.",
  "Top-notch service from start to finish!",
  "Everything was absolutely perfect today.",
  "I can't stop raving about my visit.",
  "One of the best experiences I've had recently.",
  "I am a very, very happy customer.",
  "I am so glad I decided to come here.",
  "What a completely delightful experience.",
  "Absolutely flawless from start to finish.",
  "Hands down the best decision I made today.",
  "This place is simply incredible.",
  "Superb quality and excellent customer care.",
  "I rarely leave reviews, but this was a must.",
  "Incredible attention to detail.",
  "A perfect 10/10 experience.",
  "I'm completely blown away by the quality.",
  "Perfection at its absolute finest."
];

const bodies5 = [
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
  "I felt so valued as a customer at {brand}, they are a prime example of a great {businessType}.",
  "{brand} has completely won me over with their amazing work and dedication to this {businessType}.",
  "I am constantly amazed by the consistency at {brand}, easily my favorite {businessType}.",
  "They make everything so easy and enjoyable, {brand} is a perfectly managed {businessType}.",
  "The attention to detail at {brand} is spectacular, unlike any other {businessType}.",
  "Such a well-managed and premium {businessType}, {brand} never disappoints.",
  "I have nothing but high praise for the entire team at {brand} and how they run this {businessType}.",
  "The energy and customer service at {brand} is just great, a highly recommended {businessType}.",
  "From the moment I walked in, {brand} proved why they are a leading {businessType}.",
  "The folks at {brand} are incredibly welcoming and skilled at running this {businessType}.",
  "{brand} completely transformed my expectations of what a {businessType} should be.",
  "Every single detail was handled perfectly by the staff at {brand}, a magnificent {businessType}.",
  "I have zero complaints about {brand}, they operate a flawless {businessType}.",
  "The dedication to quality at {brand} makes them the ultimate {businessType}."
];

const outros5 = [
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
  "Don't hesitate to check them out if you live in {city}.",
  "A must-visit location in {city}.",
  "I'm already planning my next trip back to {city} just for this.",
  "You won't find anything better in {city}.",
  "Easily my new favorite spot in {city}.",
  "Thank you for elevating the standard in {city}!",
  "I'll be bringing my whole family here in {city} next time.",
  "So happy I found this amazing place in {city}.",
  "They have earned a lifetime customer from {city}.",
  "Definitely the highlight of my day in {city}.",
  "Go see them in {city}, you will absolutely love it.",
  "Superb! Highly recommend to all {city} locals.",
  "The best addition to {city} in a long time.",
  "Proud to support such a great local business in {city}.",
  "Thanks again to the wonderful team here in {city}!"
];

// 4-star components
const intros4 = [
  "Great experience overall.",
  "Very good service today.",
  "I really enjoyed my visit.",
  "A solid and reliable choice.",
  "I was quite happy with everything.",
  "Nice place with good vibes.",
  "Glad I stopped by.",
  "A very pleasant experience.",
  "Good value and polite service.",
  "I had a nice time.",
  "Pretty impressive setup.",
  "Overall, I'm satisfied.",
  "Good quality work.",
  "A dependable option.",
  "I liked it a lot.",
  "Very nice atmosphere.",
  "Good customer service.",
  "I have positive things to say.",
  "A well-run establishment.",
  "Quite good overall."
];

const bodies4 = [
  "Overall, {brand} is a very solid {businessType} with great service.",
  "I had a really good time at {brand}, they run a very dependable {businessType}.",
  "The quality at {brand} is great, making it a very strong {businessType} choice.",
  "I appreciate the hard work the team at {brand} puts into this {businessType}.",
  "It's a nice {businessType} and {brand} met almost all my expectations.",
  "Good quality and decent pricing make {brand} a competitive {businessType}.",
  "I had a few minor gripes, but {brand} handled everything well for a {businessType}.",
  "The team at {brand} is very professional and courteous in managing their {businessType}.",
  "{brand} provides a very reliable and friendly {businessType} experience.",
  "I was happy with the outcome at {brand}, a very decent {businessType}.",
  "They do a good job running this {businessType} at {brand}.",
  "I felt well taken care of at {brand}, they are a good {businessType}.",
  "It's nice to have a good {businessType} like {brand} operating so smoothly.",
  "The experience at {brand} was smooth and enjoyable for this type of {businessType}.",
  "I liked the overall setup and service at {brand}, a capable {businessType}.",
  "They are quite consistent at {brand}, making them a safe {businessType} to choose.",
  "Good environment and nice people at {brand}, a welcoming {businessType}.",
  "I was satisfied with what {brand} offered as a {businessType}.",
  "A very decent {businessType} option, {brand} is doing things right.",
  "I enjoyed the services provided by {brand}, a respectable {businessType}."
];

const outros4 = [
  "A great addition to {city}.",
  "Definitely worth visiting when you are in {city}.",
  "One of the better options available in {city}.",
  "Would definitely return next time I'm in {city}.",
  "I recommend giving them a try in {city}.",
  "Good job guys, glad to have you in {city}.",
  "I will be back when I visit {city} again.",
  "A solid 4-star experience in {city}.",
  "Keep up the good work in {city}.",
  "Very good choice for {city} locals.",
  "Nice to have them in {city}.",
  "Worth a visit if you are driving through {city}.",
  "I'm a happy customer from {city}.",
  "Thanks for the good service in {city}.",
  "I would suggest this to others in {city}.",
  "Overall very nice spot in {city}.",
  "Good quality for the price in {city}.",
  "Satisfied with my visit to this {city} location.",
  "Will likely visit again while in {city}.",
  "Glad I went to this place in {city}."
];

// 3-star templates
const threeStarTemplates = [
  "It was okay. {brand} is an average {businessType} in {city}.",
  "Decent experience at {brand}, but nothing special for {city}.",
  "Average service at {brand} in {city}. Has potential.",
  "It was fine. {brand} met basic expectations for a {businessType} in {city}.",
  "Not bad, but not great either. {brand} is just okay in {city}."
];

const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

// Gets a non-repeating item using a shuffled bag in localStorage
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
  const type = businessType ? businessType.toLowerCase() : 'business';

  let text = "";

  if (rating === 5) {
    const intro = getNonRepeatingRandom(intros5, 'review_cycle_5_intros');
    const body = getNonRepeatingRandom(bodies5, 'review_cycle_5_bodies');
    const outro = getNonRepeatingRandom(outros5, 'review_cycle_5_outros');
    text = `${intro} ${body} ${outro}`;
  } else if (rating === 4) {
    const intro = getNonRepeatingRandom(intros4, 'review_cycle_4_intros');
    const body = getNonRepeatingRandom(bodies4, 'review_cycle_4_bodies');
    const outro = getNonRepeatingRandom(outros4, 'review_cycle_4_outros');
    text = `${intro} ${body} ${outro}`;
  } else {
    text = getNonRepeatingRandom(threeStarTemplates, 'review_cycle_3_all');
  }

  // Replace variables globally
  text = text.replace(/{brand}/g, brand);
  text = text.replace(/{businessType}/g, type);
  text = text.replace(/{city}/g, location);

  return text;
};