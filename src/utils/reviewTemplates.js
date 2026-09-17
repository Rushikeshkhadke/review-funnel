// Dynamic Review Combinator logic to generate over 15,000 unique reviews
const intros5 = [
  "Absolutely amazing experience!",
  "I am beyond impressed.",
  "Wow, just wow.",
  "This is exactly what I was looking for.",
  "Exceeded all my expectations.",
  "Such a wonderful experience.",
  "Five stars isn't enough.",
  "I highly recommend this place.",
  "A true hidden gem.",
  "Top-notch service!",
  "Everything was absolutely perfect.",
  "I can't stop raving about this place.",
  "One of the best experiences I've had recently.",
  "Truly exceptional.",
  "I am so glad I found this place.",
  "What a fantastic visit!",
  "Absolutely flawless from start to finish.",
  "I am a very happy customer today.",
  "This place is simply incredible.",
  "Superb quality and excellent service.",
  "I rarely leave reviews, but this was a must.",
  "Hands down the best decision I made today.",
  "A completely delightful experience.",
  "I'm completely blown away.",
  "Perfection at its finest."
];

const bodies5 = [
  "The team at {brand} really knows what they're doing.",
  "I've been to many {businessType}s in {city}, but this one takes the cake.",
  "{brand} provided some of the best service I have ever received.",
  "The quality here at {brand} is unmatched anywhere else in {city}.",
  "You can tell {brand} really cares about their customers.",
  "Every detail was handled perfectly by the staff at {brand}.",
  "Finding a reliable {businessType} in {city} is hard, but {brand} is perfect.",
  "The atmosphere, the service, the quality—{brand} nails it all.",
  "I was blown away by the professionalism at {brand}.",
  "{brand} sets a new standard for any {businessType} in {city}.",
  "They went above and beyond to make sure I was satisfied.",
  "The folks at {brand} are incredibly welcoming and skilled.",
  "It is so refreshing to see a {businessType} run this well.",
  "I was treated so well by everyone at {brand}.",
  "The value and quality you get at {brand} is unbelievable.",
  "They clearly take a lot of pride in their {businessType}.",
  "I felt so valued as a customer at {brand}.",
  "The energy and vibe of this {businessType} in {city} is just great.",
  "{brand} has completely won me over with their amazing work.",
  "There is no other {businessType} in {city} I would rather go to.",
  "I am constantly amazed by the consistency at {brand}.",
  "They make everything so easy and enjoyable.",
  "The attention to detail at {brand} is truly spectacular.",
  "Such a well-managed and premium {businessType}.",
  "I have nothing but high praise for the entire team at {brand}."
];

const outros5 = [
  "Highly recommended!",
  "I will definitely be coming back.",
  "Do yourself a favor and visit them.",
  "10/10 experience.",
  "Can't wait for my next visit.",
  "Best {businessType} around!",
  "I've already told all my friends about it.",
  "Thank you for a great time!",
  "Absolutely flawless.",
  "Will be a regular customer from now on.",
  "Don't hesitate to check them out in {city}.",
  "A must-visit {businessType}.",
  "I'm already planning my next trip back.",
  "Keep up the fantastic work!",
  "You won't regret visiting.",
  "Easily my new favorite spot.",
  "Thank you {brand} for everything!",
  "I'll be bringing my family here next time.",
  "So happy I found this place.",
  "They have earned a customer for life.",
  "A flawless 5-star experience.",
  "Definitely the highlight of my day.",
  "Go see them, you will love it.",
  "Superb! Highly recommend.",
  "Thanks again to the wonderful team!"
];

// 4-star components
const intros4 = [
  "Great experience overall.",
  "Very good service.",
  "I really enjoyed my visit.",
  "A solid choice.",
  "I was quite happy with everything.",
  "Nice place with good vibes.",
  "Glad I stopped by.",
  "A very pleasant experience.",
  "Good value and service.",
  "I had a nice time.",
  "Pretty impressive.",
  "Overall, I'm satisfied.",
  "Good quality.",
  "A dependable option.",
  "I liked it a lot.",
  "Very nice atmosphere.",
  "Good customer service.",
  "I have positive things to say.",
  "A well-run establishment.",
  "Quite good overall."
];

const bodies4 = [
  "The service at {brand} was solid and the staff was friendly.",
  "I think {brand} is one of the better {businessType}s in {city}.",
  "Everything was well managed at {brand} today.",
  "I appreciate the hard work the team at {brand} puts in.",
  "It's a nice {businessType} and {brand} met my expectations.",
  "Good quality and decent pricing at {brand}.",
  "I had a few minor gripes, but {brand} handled everything well.",
  "The team at {brand} is very professional and courteous.",
  "{brand} provides a very reliable service in {city}.",
  "I was happy with the outcome at {brand}.",
  "They do a good job running this {businessType}.",
  "I felt well taken care of at {brand}.",
  "It's nice to have a good {businessType} like {brand} nearby.",
  "The experience at {brand} was smooth and enjoyable.",
  "I liked the overall setup and service at {brand}.",
  "They are quite consistent at {brand}.",
  "Good environment and nice people at {brand}.",
  "I was satisfied with what {brand} offered.",
  "A very decent {businessType} option here in {city}.",
  "I enjoyed the services provided by {brand}."
];

const outros4 = [
  "Would definitely return.",
  "I recommend giving them a try.",
  "Good job guys.",
  "I will be back.",
  "A solid 4-star experience.",
  "Keep it up.",
  "Very good.",
  "Nice addition to {city}.",
  "Worth a visit.",
  "I'm a happy customer.",
  "Thanks for the good service.",
  "I would suggest this to others.",
  "Overall very nice.",
  "Good quality for the price.",
  "Satisfied with my visit.",
  "Will likely visit again.",
  "Good work {brand}.",
  "A pleasant surprise.",
  "Glad I went.",
  "See you next time."
];

// 3-star templates (kept simple as they are rarely used in your funnel)
const threeStarTemplates = [
  "It was okay. {brand} is an average {businessType}.",
  "Decent experience at {brand}, but nothing special.",
  "Average service at {brand} in {city}. Has potential.",
  "It was fine. {brand} met basic expectations.",
  "Not bad, but not great either. {brand} is just okay."
];

// Helper to get random item from array
const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const getRandomReview = (businessType, rating, brandName, city) => {
  const brand = brandName || 'this place';
  const location = city || 'the area';
  const type = businessType ? businessType.toLowerCase() : 'business';

  let text = "";

  if (rating === 5) {
    const intro = getRandom(intros5);
    const body = getRandom(bodies5);
    const outro = getRandom(outros5);
    text = `${intro} ${body} ${outro}`;
  } else if (rating === 4) {
    const intro = getRandom(intros4);
    const body = getRandom(bodies4);
    const outro = getRandom(outros4);
    text = `${intro} ${body} ${outro}`;
  } else {
    text = getRandom(threeStarTemplates);
  }

  // Replace variables
  text = text.replace(/{brand}/g, brand);
  text = text.replace(/{businessType}/g, type);
  text = text.replace(/{city}/g, location);

  return text;
};