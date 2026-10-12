// Dynamic Review Combinator logic - ENGLISH + HINGLISH, SMART BRAND-SPECIFIC & GENERALIZED, SEO OPTIMIZED & STRICT NON-REPEATING

// ---------------- 5-STAR TEMPLATE POOLS ----------------

// INTROS (5-Star) - Generic (45 items - English & Hinglish)
const intros5_generic = [
  "Absolutely amazing experience!",
  "Bahut hi shandaar service aur badhiya experience!",
  "I am beyond impressed.",
  "Wow, what a fantastic visit.",
  "This is exactly what I was looking for.",
  "Exceeded all my expectations completely.",
  "Such a wonderful and smooth experience.",
  "Five stars simply isn't enough.",
  "Sach me ek number service mili yahan!",
  "I don't usually write reviews, but I had to.",
  "Top-notch service from start to finish!",
  "Everything was absolutely perfect today.",
  "Bohot hi cooperative aur polite staff hai yahan ka.",
  "I am so glad I decided to come here.",
  "Absolutely flawless from start to finish.",
  "Hands down the best decision I made today.",
  "Superb quality and excellent customer care.",
  "Incredible attention to detail.",
  "A perfect 10/10 experience.",
  "Could not have asked for a better experience!",
  "Paisa vasool experience raha yahan!",
  "Truly exceptional service and quality.",
  "Came here on a recommendation and loved it!",
  "Everything here was top quality and hassle-free.",
  "I am a very, very happy customer today.",
  "Such polite staff and outstanding hospitality.",
  "Very pleasant and satisfying visit.",
  "Best experience I have had in a long time!",
  "Unmatched quality and wonderful attitude.",
  "Honest, reliable, and super professional.",
  "Aankh band karke trust kar sakte hain inpar!",
  "Leaving this review with a big smile!",
  "Just visited today and had to give full stars.",
  "From entry to exit, everything was seamless.",
  "Worth every single rupee spent here.",
  "They truly value their customers.",
  "Extremely well-managed and reliable place.",
  "Bohot hi honest aur trustworthy log hain.",
  "You will not be disappointed visiting here.",
  "So refreshing to see such dedication to quality.",
  "Consistently great service every single time.",
  "Highest recommendation possible!",
  "A truly wonderful spot with great value.",
  "Super efficient and very polite team.",
  "Dil khush ho gaya yahan ki service dekh kar!"
];

// INTROS (5-Star) - Chartered Accountant (CA) (40 items - English & Hinglish)
const intros5_ca = [
  "Very professional and trustworthy service!",
  "Bohot hi knowledgeable aur cooperative CA hain!",
  "Extremely satisfied with their tax guidance.",
  "Best decision for my business finances!",
  "Highly knowledgeable and helpful team.",
  "Prompt and accurate financial service.",
  "Super smooth experience from start to finish!",
  "Relieved my tax stress completely!",
  "Tax aur GST ke saare doubts ek jhatke me clear ho gaye!",
  "Outstanding guidance and compliance support.",
  "Top-rated financial consultation!",
  "A true expert in tax and auditing.",
  "Saved us valuable time and avoided tax penalties.",
  "Honest, transparent, and prompt financial advice.",
  "Very responsive and skilled CA firm.",
  "Had complex tax doubts and they resolved everything.",
  "Extremely efficient handling of all our paperwork.",
  "The most dependable accounting professional around.",
  "Notice aane ke baad bohot tension thi, inhone sab sambhal liya!",
  "Very patient in explaining tax laws clearly.",
  "Flawless handling of our annual filings.",
  "Came here for business advice and got 10/10 support.",
  "Very polite, ethical, and knowledgeable team.",
  "Takes care of every single compliance on time.",
  "High level of integrity and professional expertise.",
  "No hidden fees and completely transparent work.",
  "Smooth and seamless consultation experience.",
  "Always available to guide on financial queries.",
  "GST registration bohot hi fast aur smooth tareeqe se ho gaya!",
  "Great relief having them manage our tax matters.",
  "Solved our GST issues in record time.",
  "Best Chartered Accountant firm we have worked with.",
  "Super clear and accurate financial consultation.",
  "Very thorough and meticulous in auditing.",
  "Exceptional knowledge of the latest tax laws.",
  "Helped our startup get registered without any pain.",
  "My trusted financial advisor for life.",
  "Made tax filing totally stress-free for us.",
  "Bilkul sahi advice mili business ke liye!",
  "Top professional service for business owners."
];

// INTROS (5-Star) - Mobile Shop (General / Any client - 40 items)
const intros5_mobile = [
  "Hands down the best mobile store around!",
  "Bohot hi badhiya deals aur 100% genuine phones!",
  "Super fast service and 100% genuine products!",
  "Got the best deal on my new phone!",
  "Extremely happy with my shopping experience!",
  "Top-notch service and honest guidance!",
  "Best place for Apple phones and Samsung flagships!",
  "The owner and staff here are extremely humble and helpful!",
  "Unbeatable collection of accessories and perfumes!",
  "Best mobile buying experience ever!",
  "Highly satisfied with their customer service!",
  "Awesome collection of latest iPhones and premium phones!",
  "Walked in for a phone and left with an amazing deal!",
  "The staff treats customers with genuine respect.",
  "Super genuine products with official company warranty.",
  "iPhone covers ka itna bada collection pehle kabhi nahi dekha!",
  "Unbelievable variety of iPhone covers and protectors.",
  "Found the exact phone model I was looking for!",
  "Honest pricing and no false promises.",
  "Quickest and smoothest phone buying experience!",
  "The owners here are extremely humble and helpful.",
  "Great collection of premium phones and accessories.",
  "My go-to store for all mobile purchases!",
  "Surprised by their amazing perfume collection too!",
  "Transferred all my old phone data with zero hassle.",
  "100% authentic Apple and Samsung devices.",
  "Got genuine accessories at very fair prices.",
  "The customer support here is unmatched.",
  "Very transparent and competitive pricing.",
  "Never seen such a wide variety of mobile covers!",
  "Ek number store hai bhai, rate bhi ekdum sahi lagaaye!",
  "Friendly atmosphere and very knowledgeable staff.",
  "Superb store layout and top-notch gadgets.",
  "Bought my dream phone today with zero stress.",
  "Excellent guidance without any pushy sales tactics.",
  "Best gadget shopping experience in the area.",
  "Extremely fast billing and polite behavior.",
  "Full 5 stars for honesty and product authenticity.",
  "Bina kisi jhanjhat ke data transfer aur screen guard lagwa ke diya!",
  "Branded perfumes aur covers ka collection dekh kar dil khush ho gaya!",
  "Bohot hi cooperative staff aur 100% original gadgets!",
  "So happy I chose this store over online shopping!"
];

// INTROS (5-Star) - Specifically for Brand Express (Includes Rohit & Monish)
const intros5_brand_express = [
  ...intros5_mobile,
  "Rohit bhai aur Monish bhai ka nature bohot hi helpful hai!",
  "Special thanks to Rohit and Monish for the amazing deal!",
  "Rohit bhai guided me so well for my new iPhone!",
  "Monish bhai gave us the best price and original warranty!"
];

// INTROS (5-Star) - Hotel / Stay (40 items - English & Hinglish)
const intros5_hotel = [
  "Best spot if you are coming to Kedarnath!",
  "Pahado me itna shandar hotel aur swadisht khana milna kamaal hai!",
  "Awesome location and super peaceful environment!",
  "Highly recommended halt spot for Kedarnath Yatra!",
  "Best value for money stay and food on Kedarnath route!",
  "Super peaceful environment and great location!",
  "Must-visit spot on your way to Kedarnath!",
  "Great experience and pocket-friendly prices!",
  "Kedarnath jaate waqt yahan rukna sabse badhiya decision raha!",
  "Wonderful atmosphere and perfect location!",
  "Top-class hospitality on Kedarnath road!",
  "Amazing place to rest, eat, and refresh!",
  "Stopped here on our yatra and loved everything!",
  "Very cozy stay with stunning mountain views.",
  "Hot water and warm food made our journey so comfortable.",
  "Truly refreshing halt along the Kedarnath highway.",
  "Home-like comfort and very humble hospitality.",
  "Extremely polite staff and clean surroundings.",
  "Ghar jaisi thali aur 24 ghante garam paani mila!",
  "Made our Kedarnath trip so much easier and relaxing.",
  "Safe parking and peaceful ambiance for families.",
  "Hot tea and fresh meals after a long drive was heavenly.",
  "Super hygienic rooms and very reasonable rates.",
  "One of the best stopovers on this entire route.",
  "Very supportive staff with honest route guidance.",
  "Could not have found a better stay during our trip.",
  "Delicious food, neat rooms, and perfect location.",
  "Ideal rest stop for pilgrims and tourists alike.",
  "Felt so welcomed by the owner and the team.",
  "Clean washrooms and 24/7 hot water facility.",
  "Quiet, serene, and scenic surroundings all around.",
  "Budget-friendly stay with premium hospitality.",
  "Yatra ke dauran sabse safe aur comfortable halt!",
  "Will definitely be our regular halt for every yatra.",
  "Hot fresh food served with genuine warmth.",
  "Completely safe and family-friendly atmosphere.",
  "Great relief finding such a clean spot in the hills.",
  "Superb mountain halt experience!",
  "Kifayati rate aur bohot hi shant vatavaran!"
];

// INTROS (5-Star) - Shopping Mall / Family Wear (45 items - English & Hinglish)
const intros5_mall = [
  "Best complete family shopping experience!",
  "Poori family ki shopping ke liye sabse best mall!",
  "One-stop destination for all our family clothing needs!",
  "Huge variety and top quality collection!",
  "Amazing shopping mall with great prices!",
  "Hands down the best family shopping store in town!",
  "Superb collection for weddings and daily wear!",
  "Loved the variety and warm customer service!",
  "Unmatched collection under one single roof!",
  "Had such a delightful shopping experience here!",
  "I recently went for family shopping and was so impressed!",
  "Honestly one of the finest clothing malls around!",
  "Came here with my parents for wedding shopping and loved it!",
  "Just finished our festive shopping and could not be happier!",
  "You will find literally everything you need under one roof!",
  "Really impressed by the sheer variety and fabric quality!",
  "A true paradise for ethnic and formal clothing lovers!",
  "Such a pleasant shopping environment with cooperative staff!",
  "Our family's go-to store for all clothing needs!",
  "I rarely write reviews, but this place genuinely earned 5 stars!",
  "Phenomenal collection and even better customer service!",
  "From ethnic wear to shirting-suiting, everything was top-tier!",
  "If you want genuine quality at fair prices, come straight here!",
  "Never seen such an organized and well-stocked family mall!",
  "Super happy with our festive shopping haul today!",
  "Came here on a friend's recommendation and it exceeded expectations!",
  "A truly 10/10 shopping experience for the whole family!",
  "Was looking for traditional wear and found so many options!",
  "Outstanding collection, courteous staff, and reasonable rates!",
  "Worth every single rupee spent here on our clothes!",
  "The best place to shop without running from shop to shop!",
  "So glad we decided to visit this family shopping mall!",
  "The customer service here sets a whole new benchmark!",
  "Found exactly what I had been searching for everywhere!",
  "Mind-blowing range of fabrics and ready-made clothes!",
  "The suiting and shirting section here is simply unmatched!",
  "My entire family found their favorite outfits in one visit!",
  "Top-class shopping ambiance and wide variety for all ages!",
  "Extremely polite staff who showed designs with great patience!",
  "Best wedding shopping destination in the city!",
  "Ek hi chat ke neeche har type ke kapde mil gaye, time bach gaya!",
  "Fabric ki quality aur designs ek se badhkar ek hain!",
  "Puri family ke sabhi kapde yahi se liye, zabardast collection!",
  "Super organized store with trendy and traditional collections!"
];

// INTROS (5-Star) - Jewellery (Gold & Diamond) (50 items - English & Hinglish)
const intros5_jewellery = [
  "Exceptional gold and diamond jewellery showroom!",
  "Bahut hi shaandaar aur bharosemand jewellers!",
  "Best jewellery shopping experience for our family!",
  "Unmatched designs and 100% certified purity!",
  "Most trusted jeweller in town!",
  "Had the most delightful jewellery buying experience!",
  "Came here for wedding jewellery and totally amazed!",
  "Stunning diamond collection and pure hallmarked gold!",
  "A true paradise for gold and diamond lovers!",
  "Extremely satisfied with our jewellery purchase today!",
  "Honest rates, clear billing, and certified hallmark gold!",
  "The craft and finishing on their jewellery is breathtaking!",
  "Found the dream bridal jewellery set for my wedding!",
  "Super polite staff and very honest billing!",
  "Such a luxurious showroom ambiance and genuine hospitality!",
  "High purity standards and mind-blowing craftsmanship!",
  "Purchased our engagement diamond ring here and we love it!",
  "The best gold and diamond showroom without a doubt!",
  "Always our first and only choice for buying gold!",
  "Completely transparent making charges and certified diamonds!",
  "Fell in love with their antique gold and diamond collection!",
  "Superb collection of both traditional and modern jewellery!",
  "A 10/10 experience buying hallmarked gold jewellery!",
  "Honest, reliable, and authentic jewellers!",
  "Felt so confident and happy buying gold here!",
  "Great variety of lightweight daily wear and heavy bridal sets!",
  "The design finishing and sparkle of the diamonds is incredible!",
  "Warm hospitality and very patient sales executives!",
  "Honest gold rates and wonderful shopping experience!",
  "I rarely review, but this jewellery store truly deserves 5 stars!",
  "Beautiful showroom with endless unique designs!",
  "Everything from billing to hallmarking is so crystal clear!",
  "A memorable shopping visit for our anniversary!",
  "Very trustworthy and well-reputed jewellery brand!",
  "Top-notch customer care and complete peace of mind!",
  "The most sparkling diamond collection I have ever seen!",
  "100% BIS Hallmarked gold aur transparent billing mili yahan!",
  "Shadi ki poori jewellery yahin se banwayi, sabne bohot tareef ki!",
  "Gold jewellery par sabse accha rate aur accurate purity mili!",
  "Staff ka behaviour bohot hi humble aur cooperative tha!",
  "Designs itne pyare the ki choose karna mushkil ho gaya!",
  "Diamond jewellery ki shine aur finishing lajawab hai!",
  "Purity aur trust ke mamle me number one showroom hai!",
  "HUID hallmark aur authentic certificate ke sath jewellery mili!",
  "Bridal sets ka collection dekh kar dil khush ho gaya!",
  "Kundan aur temple jewellery ke unique designs hain yahan!",
  "Aankh band karke sona khareed sakte hain yahan se!",
  "Transparent making charges aur clear billing, zero hidden cost!",
  "Dhanteras aur festive shopping ke liye sabse best jewellers!",
  "Humari poori family ka trusted jeweller hai ye saalo se!"
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
  "{brand} me aakar sach me bohot accha laga, customer satisfaction ka pura dhyan rakhte hain.",
  "Quality aur pricing dono hi mamle me {brand} best laga mujhe.",
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
  "{brand} has been managing our accounts and tax filings for years, always providing top-tier professional advice.",
  "Income tax notice aane par bohot tension me the, par {brand} ne poora case study karke bina kisi issue ke resolve karwaya.",
  "GST return aur annual auditing {brand} bilkul deadline se pehle complete kar dete hain. Superb service!",
  "Helped our partnership firm resolve pending assessment notices with complete accuracy and timely submission."
];

// BODIES (5-Star) - Mobile Shop (General / Any client - NO NAMES)
const bodies5_mobile = [
  "Purchased my new Apple iPhone from {brand}. The team guided me patiently and gave me an amazing deal with original accessories!",
  "Best shop for Apple lovers! The staff at {brand} was super helpful in recommending the right iPhone cover and tempered glass from their huge variety.",
  "Got the best price for my Samsung Ultra flagship phone at {brand}. Very polite and knowledgeable owner!",
  "I went to {brand} to buy a new phone and the team helped me choose between Samsung premium segment and iPhone. Highly honest service!",
  "Found an amazing premium branded perfume along with my new iPhone purchase at {brand}. Really loved the experience!",
  "Bought the latest Samsung Galaxy flagship from {brand}. Got a great discount and genuine brand warranty!",
  "The staff at {brand} showed me an unbelievable variety of Apple iPhone covers and premium accessories. Top quality store!",
  "The owner at {brand} is extremely polite and customer-focused. Helped me pick an awesome Apple phone and a premium branded perfume.",
  "If you want authentic Apple products or Samsung premium phones, go straight to {brand}!",
  "The team at {brand} made my phone buying experience so smooth. They even set up my new iPhone and data transfer in minutes.",
  "The team at {brand} is running the best mobile shop! Got an amazing deal on my new iPhone along with a fantastic branded perfume.",
  "Special thanks to the owners and staff at {brand} for giving me the best deal on Samsung premium segment phone and custom Apple covers.",
  "The staff at {brand} is super courteous and well-trained. They showed me a huge collection of iPhone covers and fast chargers patiently.",
  "Great customer service by the team at {brand}! They helped me select a premium Samsung phone and a lovely branded perfume.",
  "The staff at {brand} made sure I got 100% genuine accessories for my Apple phone with official brand warranty.",
  "Purchased my new Apple iPhone from {brand}. They have an incredible variety of iPhone covers, chargers, and even premium branded perfumes!",
  "{brand} has the best collection of Samsung premium segment phones and Apple devices in the market.",
  "If you own an iPhone, {brand} is a paradise! They have all varieties of Apple covers, screen guards, and premium accessories.",
  "Got my new Apple phone from {brand} along with an awesome branded perfume. Everything is 100% authentic with official warranty.",
  "{brand} se naya iPhone liya, data pura transfer karwaya aur premium perfume bhi mila. Awesome experience!",
  "{brand} ne Samsung flagship phone par genuine warranty ke sath best rate diya. Cover aur tempered glass bhi original mila.",
  "Best mobile store! {brand} offers top-quality accessories, genuine Apple products, and Samsung flagships at competitive rates.",
  "Surprised to find an amazing collection of premium branded perfumes alongside latest Apple and Samsung phones at {brand}!",
  "Found the perfect cover for my iPhone at {brand}. They have the largest variety of Apple accessories in the city."
];

// BODIES (5-Star) - Specifically for Brand Express (Includes Rohit & Monish natural mix)
const bodies5_brand_express = [
  "Purchased my new Apple iPhone from {brand}. Rohit bhai guided me patiently and gave me an amazing deal with original accessories!",
  "Best shop for Apple lovers! Rohit at {brand} was super helpful in recommending the right iPhone cover and tempered glass from their huge variety.",
  "Rohit at {brand} gave me the best price for my Samsung Ultra flagship phone. Very polite and knowledgeable owner!",
  "I went to {brand} to buy a new phone and Rohit helped me choose between Samsung premium segment and iPhone. Highly honest service!",
  "Rohit suggested a great premium branded perfume along with my new iPhone purchase at {brand}. Really loved the experience!",
  "Bought the latest Samsung Galaxy flagship from {brand}. Monish bhai gave me a great discount and genuine brand warranty!",
  "Monish at {brand} showed me an unbelievable variety of Apple iPhone covers and premium accessories. Top quality store!",
  "Monish bhai is extremely polite and customer-focused. He helped me pick an awesome Apple phone and a premium branded perfume at {brand}.",
  "If you want authentic Apple products or Samsung premium phones, go straight to {brand} and meet Monish!",
  "Monish made my phone buying experience so smooth at {brand}. He even set up my new iPhone and data transfer in minutes.",
  "Rohit and Monish at {brand} are running the best mobile shop! Got an amazing deal on my new iPhone along with a fantastic branded perfume.",
  "Special thanks to Rohit bhai and Monish bhai at {brand} for giving me the best deal on Samsung premium segment phone and custom Apple covers.",
  "The staff at {brand} is super courteous and well-trained. They showed me a huge collection of iPhone covers and fast chargers patiently.",
  "Great customer service by the team at {brand}! They helped me select a premium Samsung phone and a lovely branded perfume.",
  "The staff at {brand} made sure I got 100% genuine accessories for my Apple phone with official brand warranty.",
  "Purchased my new Apple iPhone from {brand}. They have an incredible variety of iPhone covers, chargers, and even premium branded perfumes!",
  "{brand} has the best collection of Samsung premium segment phones and Apple devices in the market.",
  "If you own an iPhone, {brand} is a paradise! They have all varieties of Apple covers, screen guards, and premium accessories.",
  "Got my new Apple phone from {brand} along with an awesome branded perfume. Everything is 100% authentic with official warranty.",
  "{brand} se naya iPhone liya, Rohit bhai ne data pura transfer karwaya aur premium perfume bhi suggest kiya. Awesome experience!",
  "Monish bhai ne Samsung flagship phone par genuine warranty ke sath best rate diya. Cover aur tempered glass bhi original mila.",
  "Best mobile store! {brand} offers top-quality accessories, genuine Apple products, and Samsung flagships at competitive rates.",
  "Surprised to find an amazing collection of premium branded perfumes alongside latest Apple and Samsung phones at {brand}!",
  "Found the perfect cover for my iPhone at {brand}. They have the largest variety of Apple accessories in the city."
];

const bodies5_hotel = [
  "If you are coming to Kedarnath, {brand} is a must-visit spot on the way! Beautiful environment, very peaceful location, and extremely reasonable prices.",
  "{brand} has an awesome environment and great scenic location right on the Kedarnath route. Highly recommended if you are traveling for Kedarnath Yatra!",
  "Stopped at {brand} while heading to Kedarnath. The location is super convenient, pricing is budget-friendly, and the atmosphere is so relaxing.",
  "Awesome environment, clean rooms, and very pocket-friendly prices at {brand}. If you are coming towards Kedarnath, definitely visit this place!",
  "One of the best spots to stay and refresh on the Kedarnath trip! {brand} offers great location, warm hospitality, and very reasonable rates for both stay and food.",
  "{brand} is located at such a beautiful and convenient location along Kedarnath Road. Very peaceful environment and food/room prices are super affordable.",
  "If you are planning your Kedarnath Yatra, {brand} is a perfect stopover. Great natural environment, friendly staff, and very good pricing.",
  "Superb location and very pleasant environment at {brand}. Prices are totally worth it and reasonable for travelers going towards Kedarnath.",
  "Great experience at {brand}! Location is top-notch, environment is clean and cozy, and rates are very genuine for Kedarnath visitors.",
  "{brand} is an ideal visit spot if you are traveling to Kedarnath. Lovely surroundings, budget-friendly stay & dining, and very good location.",
  "Kedarnath yatra ke raste par {brand} sabse acchi jagah hai. Khana ekdum fresh tha, 24 ghante garam paani mila aur rate bhi bilkul sahi the.",
  "Kamre bohot saaf suthre the aur location bohot hi shaandaar hai {brand} ki. Staff ne Kedarnath yatra ki poori jaankari bhi di.",
  "Peaceful environment, easily accessible location, and very reasonable prices at {brand}. Must-visit spot for everyone coming to Kedarnath!",
  "Clean and hygienic environment with amazing scenic views at {brand}. Highly recommended halt spot for Kedarnath pilgrims!"
];

const bodies5_mall = [
  "Visited {brand} with my whole family. They have an incredible collection of ethnic wear, mens wear, and ladies wear all under one roof!",
  "Best shopping mall for wedding and festive shopping! {brand} has a mind-blowing collection of designer ethnic wear, lehengas, and suits.",
  "Bought shirting and suiting fabric along with formal menswear from {brand}. The fabric quality is top-notch and prices are very reasonable.",
  "{brand} is a true one-stop destination! Found trendy ladies wear, latest mens collection, and perfect matching accessories easily.",
  "The ethnic wear section at {brand} is outstanding. Beautiful traditional outfits for both men and women at great affordable rates.",
  "Superb variety of shirting and suiting brands at {brand}. The staff was very patient and helped me pick the best fabric.",
  "Loved the entire collection at {brand}! From casual mens wear to designer ladies wear and accessories, everything is available under one roof.",
  "We did all our festive shopping from {brand}. Excellent quality ethnic wear, vast shirting-suiting section, and very polite staff.",
  "{brand} has the best collection in {city}! Great range of accessories, stylish menswear, and elegant ladies wear with very affordable pricing.",
  "Whenever we need new clothes for any function, {brand} is our first choice. Complete family mall with ethnic wear, menswear, ladies wear, and accessories.",
  "Great experience shopping at {brand}! Huge variety in mens formal shirting and suiting, and my family loved the ladies ethnic collection.",
  "Shadi aur function ke liye {brand} se shirting-suiting aur ethnic dresses li. Fabric bohot premium hai aur rate bhi bilkul reasonable.",
  "Ghar ke sabhi logon ke kapde {brand} me mil gaye. Ladies section me itne pyare designs the ki sab khush ho gaye.",
  "From modern daily wear to traditional ethnic outfits and accessories, {brand} has everything for the entire family!"
];

const bodies5_jewellery = [
  "Purchased 916 BIS hallmarked bridal gold jewellery from {brand}. The purity is 100% verified and the intricate craftsmanship is just breathtaking!",
  "Bought our diamond engagement rings and a solitaire pendant from {brand}. All diamonds are certified, sparkling, and reasonably priced.",
  "{brand} has the most stunning collection of antique temple jewellery, Kundan, and modern gold designs. Complete transparent billing with HUID hallmarking.",
  "Purchased gold jewellery from {brand} with 100% genuine testing. Very transparent wastage and making charges.",
  "The staff at {brand} is remarkably patient and respectful. They showed us dozens of gold necklace and bangle designs until we found the perfect one.",
  "Bought lightweight diamond earrings and a daily wear gold chain from {brand}. Finishing is supreme and designs are super trendy.",
  "Did all our daughter's wedding jewellery shopping from {brand}. The bridal necklace, matha patti, and kadas were the center of attraction!",
  "If you are looking for certified diamond jewellery or genuine hallmarked gold, {brand} is the most reliable and honest showroom.",
  "The custom jewellery making at {brand} is exceptional! They crafted our necklace set exactly as per our custom reference on time.",
  "{brand} offers an extensive collection of mangalsutras, gold chains, and certified diamond rings at genuine market rates.",
  "I really appreciate the transparency in gold purity testing and competitive making charges at {brand}. Full peace of mind.",
  "From heavy traditional bridal jewellery to sleek modern diamond bracelets, {brand} has everything under one roof.",
  "Purchased a certified diamond necklace from {brand}. The cut, clarity, and shine are extraordinary, and the pricing was very fair.",
  "The owners and staff at {brand} treat every customer like royalty. Welcoming environment and 100% authentic hallmarked gold.",
  "Always buy our Dhanteras and Akshaya Tritiya gold from {brand}. Consistent purity, trustworthy weight, and wonderful designs.",
  "The Polki and uncut diamond collection at {brand} is royal and magnificent. Every piece looks like a royal heirloom.",
  "Got the exact diamond carat certificate and laser HUID hallmark on our gold ornaments at {brand}. Highly ethical jewellers.",
  "Loved the variety of gold bangles, kadas, and Italian chains at {brand}. High quality polish and durable build.",
  "{brand} se bridal set aur mangalsutra khareeda. Finishing ekdum perfect hai aur 100% 916 BIS hallmark milta hai.",
  "{brand} ne bilkul transparent weighing aur honest gold rate diya. Making charges bhi bohot genuine the.",
  "Diamond ring purchase ki {brand} se, certificate ke sath diamonds ki clarity aur shine lajawab hai.",
  "Staff ne bohot patience ke sath har ek jewellery design dikhaya. Aisa warm atmosphere kisi aur showroom me nahi dekha."
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

// OUTROS (5-Star) - English & Hinglish
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
  "A must-visit location in {city}.",
  "{city} me aisi quality aur service milna sach me badi baat hai!",
  "Har kisi ko {city} me yahan zaroor aana chahiye!",
  "Agli baar {city} aane par fir se yahin visit karunga.",
  "100% recommended spot for all {city} locals!",
  "Thank you so much to the whole team in {city}!",
  "Best experience in {city}, full 5 stars!",
  "{city} ka sabse trusted aur genuine spot hai ye!",
  "Proud to support such an honest business in {city}.",
  "Top-class standards right here in {city}!"
];

const outros5_ca = [
  "Highly recommended for anyone needing tax or accounting help in {city}!",
  "Best Chartered Accountant services you can get in {city}.",
  "If you are looking for a reliable CA in {city}, definitely contact them.",
  "The premier choice for business taxation and auditing in {city}.",
  "I will definitely continue using their services here in {city}.",
  "A must-visit firm for any business owner in {city}.",
  "{city} me taxation aur GST ke liye inse behtar koi CA nahi hai!",
  "Agar business me tax tension se bachna hai toh {city} me inhi se consult karein.",
  "Truly top-rated financial and legal advisor in {city}.",
  "Best CA firm in {city} for peace of mind and accurate filings.",
  "Lifetime client ban gaya hoon inka {city} me!",
  "Full 5 stars for ethical and timely accounting in {city}."
];

const outros5_mobile = [
  "Easily the best mobile shop in {city}!",
  "If you want an iPhone, Samsung flagship, or premium perfume in {city}, go straight to them!",
  "Highly recommended mobile store for all {city} locals.",
  "Best prices and deals on Apple phones and accessories in all of {city}.",
  "Will definitely buy my next phone and perfumes from them in {city}!",
  "The most trusted mobile store in {city}.",
  "{city} me naya phone ya accessories leni ho toh bas {brand} aana chahiye!",
  "Online se bhi behtar deals aur genuine products milte hain yahan in {city}.",
  "Best gadget store in {city}, 100% recommendation!",
  "Next time bhi saare gadgets yahin se khareedunga in {city}!",
  "Apple aur Samsung lovers ke liye {city} ki number one dukaan!"
];

const outros5_brand_express = [
  ...outros5_mobile,
  "Rohit bhai aur Monish bhai ka service {city} me sabse best hai!",
  "Rohit and Monish make sure you get 100% genuine products in {city}!"
];

const outros5_hotel = [
  "If you are coming to Kedarnath, definitely visit them in {city}!",
  "Must-visit spot for anyone traveling on the Kedarnath route near {city}!",
  "Best location and budget-friendly pricing in {city}!",
  "Five stars for the location, environment, and rates in {city}!",
  "Superb stopover in {city}, do visit!",
  "Will definitely stop here again whenever we come to {city}!",
  "Kedarnath yatra par aane wale sabhi yatriyon ke liye {city} me best halt hai!",
  "Pahado ke suhane safar me {city} ka sabse accha hotel aur restaurant!",
  "Next Kedarnath trip par bhi pakka yahin rukenge in {city}!",
  "Ghar jaisa mahol aur safe stay in {city}!",
  "Full 5 stars for the warm hospitality in {city}!"
];

const outros5_mall = [
  "Easily the best family shopping mall in {city}!",
  "Highly recommended for all your family clothing and wedding shopping in {city}!",
  "The ultimate shopping destination for ethnic and western wear in {city}.",
  "Will definitely visit again for our next festival shopping in {city}!",
  "Best clothing mall with reasonable prices in all of {city}.",
  "A must-visit shopping mall for families in {city}!",
  "10/10 recommendation for anyone looking for great clothes in {city}!",
  "Proud to have such an amazing family shopping store right here in {city}.",
  "Puri family ke kapdo ke liye {city} ka sabse behtareen mall!",
  "Shadi aur tyohar ki shopping ke liye {city} me sabse top recommendation!",
  "Agli baar bhi kapde lene {city} me yahin aayenge!",
  "Kahin aur jaane ki zaroorat hi nahi hai in {city}!"
];

const outros5_jewellery = [
  "Easily the most trusted gold and diamond jewellery showroom in {city}!",
  "Highly recommended for all your wedding and festive jewellery shopping in {city}!",
  "The premier destination for certified diamonds and hallmarked gold in {city}.",
  "Will definitely buy all our future family jewellery from them in {city}!",
  "Best jewellers in {city} with genuine purity and transparent making charges.",
  "A must-visit jewellery showroom for every bride in {city}!",
  "Five stars for the purity, designs, and hospitality in {city}!",
  "The most reputable and reliable jewellery brand in all of {city}.",
  "{city} me gold aur diamond khareedne ke liye sabse bharosemand jagah!",
  "Shadi ki jewellery ke liye {city} me inke designs ka koi muqabla nahi!",
  "100% genuine hallmark aur best rate in {city}!",
  "Ab se hamari family ki saari jewellery shopping bas {city} me yahin se hogi!",
  "Aankh band karke trust kar sakte hain inpar in {city}!",
  "Purity, designs aur hospitality me {city} ka number one jeweller!"
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
  "Overall, I'm satisfied.",
  "Had a good shopping time here.",
  "Smooth experience and helpful staff.",
  "Pretty satisfied with my visit today.",
  "Good quality options available.",
  "Dependable service and fair prices."
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
  "Bought an iPhone cover and fast charger from {brand}. The staff was polite and gave good suggestions.",
  "Good collection of Samsung premium segment phones and Apple accessories at {brand}. Very helpful staff.",
  "Got my new Apple phone and a nice branded perfume at {brand}. Decent experience overall.",
  "{brand} has a really good variety of Apple phone covers and accessories in {city}.",
  "Friendly team at {brand}. Good deals on Samsung flagships and Apple devices."
];

const bodies4_brand_express = [
  ...bodies4_mobile,
  "Bought an iPhone cover from {brand}. Rohit and the staff were polite and gave good suggestions.",
  "Good collection of Samsung premium segment phones at {brand}. Monish was helpful."
];

const bodies4_hotel = [
  "Good clean environment and pocket-friendly prices at {brand}. Location is very convenient on the Kedarnath route near {city}.",
  "Decent stay and dining option near {city}. Peaceful location, good environment, and affordable rates.",
  "{brand} offers nice environment and good food at reasonable prices along the {city} Kedarnath route."
];

const bodies4_mall = [
  "Good collection of ethnic wear and menswear at {brand}. Nice family shopping experience in {city}.",
  "Found good shirting and suiting fabric at {brand}. Staff was helpful and prices were reasonable.",
  "{brand} has a nice variety of ladies wear, accessories, and menswear under one roof in {city}.",
  "Decent collection of clothes and courteous staff at {brand} in {city}."
];

const bodies4_jewellery = [
  "Good collection of hallmarked gold and certified diamond jewellery at {brand}. Courteous staff and transparent billing in {city}.",
  "Purchased gold earrings and chain from {brand}. Purity was checked and designs were quite nice.",
  "Good collection of diamond rings and gold ornaments at {brand} in {city}."
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

const outros4_hotel = [
  "Good visit spot near {city} on Kedarnath trip.",
  "Recommended stop for travelers visiting {city} and Kedarnath.",
  "Nice stay and food spot with good pricing in {city}."
];

const outros4_mall = [
  "Good family shopping store in {city}.",
  "Recommended for festival and wedding shopping in {city}.",
  "Nice clothing collection and dependable store in {city}."
];

const outros4_jewellery = [
  "Good jeweller to visit in {city}.",
  "Recommended jewellery store in {city}.",
  "Dependable gold and diamond showroom in {city}."
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
  const brandLower = brand.toLowerCase();
  const isBrandExpress = brandLower.includes('brand express') || brandLower.includes('brand xpress') || brandLower.includes('brandexpress');

  let cat = 'generic';
  if (typeStr.includes('ca') || typeStr.includes('accountant') || typeStr.includes('tax') || typeStr.includes('gst') || typeStr.includes('audit')) {
    cat = 'ca';
  } else if (typeStr.includes('jewel') || typeStr.includes('gold') || typeStr.includes('diamond') || brandLower.includes('jewel') || brandLower.includes('gold') || brandLower.includes('diamond') || brandLower.includes('ornament')) {
    cat = 'jewellery';
  } else if (typeStr.includes('mobile') || typeStr.includes('phone') || typeStr.includes('cell')) {
    cat = 'mobile';
  } else if (typeStr.includes('mall') || brandLower.includes('mall') || typeStr.includes('shopping') || brandLower.includes('shopping') || typeStr.includes('suiting') || typeStr.includes('shirting')) {
    cat = 'mall';
  } else if (typeStr.includes('hotel') || typeStr.includes('room') || typeStr.includes('stay') || typeStr.includes('resort') || typeStr.includes('lodge') || typeStr.includes('guest house') || typeStr.includes('bhoomi') || typeStr.includes('dhaba')) {
    cat = 'hotel';
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
      introsPool = isBrandExpress ? intros5_brand_express : intros5_mobile;
      bodiesPool = isBrandExpress ? bodies5_brand_express : bodies5_mobile;
      outrosPool = isBrandExpress ? outros5_brand_express : outros5_mobile;
    } else if (cat === 'hotel') {
      introsPool = intros5_hotel;
      bodiesPool = bodies5_hotel;
      outrosPool = outros5_hotel;
    } else if (cat === 'mall') {
      introsPool = intros5_mall;
      bodiesPool = bodies5_mall;
      outrosPool = outros5_mall;
    } else if (cat === 'jewellery') {
      introsPool = intros5_jewellery;
      bodiesPool = bodies5_jewellery;
      outrosPool = outros5_jewellery;
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
      bodiesPool = isBrandExpress ? bodies4_brand_express : bodies4_mobile;
      outrosPool = outros4_mobile;
    } else if (cat === 'hotel') {
      bodiesPool = bodies4_hotel;
      outrosPool = outros4_hotel;
    } else if (cat === 'mall') {
      bodiesPool = bodies4_mall;
      outrosPool = outros4_mall;
    } else if (cat === 'jewellery') {
      bodiesPool = bodies4_jewellery;
      outrosPool = outros4_jewellery;
    }
  }

  let text = "";
  if (rating === 5 || rating === 4) {
    const keyPrefix = `review_cycle_${rating}__${cat}${isBrandExpress ? '_bx' : ''}`;
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