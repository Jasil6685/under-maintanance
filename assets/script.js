var $messages = $(".messages-content"),
  d,
  h,
  m,
  i = 0;

$(window).load(function () {
  $messages.mCustomScrollbar();
  $('<div class="message loading new"><figure class="avatar"><img src="./jas.png" /></figure><span></span></div>').appendTo($(".mCSB_container"));
  setTimeout(function () {
    insertMessage("Hello! How can I assist you?", "bot");
    $(".message.loading").remove();
    updateScrollbar();
  }, 1000);
});


$(".chat-icon").click(function () {
  $(".chat").toggleClass("chat-opened");
  if ($(".chat").hasClass("chat-opened")) {
    updateScrollbar();

  }
});





function test1() {
  $(".chat").toggleClass("chat-opened");
  if ($(".chat").hasClass("chat-opened")) {
    updateScrollbar();

  }
}


document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var notification = document.getElementById('chatNotification');
    notification.style.display = 'block';
    notification.style.animation = 'fade-in 0.5s ease-in-out';
  }, 1000);
});


function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar("scrollTo", "bottom", {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate() {
  d = new Date();
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ":" + m + "</div>").appendTo(
      $(".message:last")
    );
  }
}

function insertMessage(message, sender) {
  var $messageDiv = $(
    '<div class="message new"><figure class="avatar"><img src="./jas.png" /></figure>' +
      message +
      "</div>"
  );
  if (sender === "user") {
    $messageDiv.addClass("message-personal");
    $messageDiv.append('<figure class="avatar"><img src="./jas1.png" /></figure>');
  }
  $messageDiv.appendTo($(".mCSB_container")).addClass("new");
  setDate();
  updateScrollbar();
}

$(".message-submit").click(function () {
  var userMessage = $(".message-input").val();
  if ($.trim(userMessage) != "") {
    insertMessage(userMessage, "user");
    sendToBot(userMessage); // Send user's message to bot
    $(".message-input").val(null);
  }
});

$(window).on("keydown", function (e) {
  if (e.which == 13) {
    var userMessage = $(".message-input").val();
    if ($.trim(userMessage) != "") {
      insertMessage(userMessage, "user");
      sendToBot(userMessage); // Send user's message to bot
      $(".message-input").val(null);
    }
    return false;
  }
});

function sendToBot(userMessage) {
  var botResponse = generateBotResponse(userMessage);
  typingAnimation();
  setTimeout(function () {
    insertMessage(botResponse, "bot");
    $(".message.loading").remove(); // Remove the "loading" message after bot response
    updateScrollbar(); // Update scrollbar after removal
  }, 1000); // Delay before showing bot response
}

var hiResponses = [
  "Hello! How can I assist you?",
  "Hi there! What can I help you with?",
  "Hey! How can I be of service?"
];

var howAreYouResponses = [
  "I'm functioning well, thank you!",
  "I'm doing fine, how about you?",
  "I'm feeling good, thanks for asking!"
];

var helloResponses = [
  "Hello! How can I assist you?",
  "Hi there! What can I help you with?",
  "Hey! How can I be of service?"
];

var nameResponses = [
  "I'm a friendly bot called JAASIL!",
  "You can call me JAASIL!",
  "My name is JAASIL, here to assist you."
];

var byeResponses = [
  "Goodbye! Have a great day!",
  "Farewell! Take care!",
  "See you later! Don't hesitate to return if you need assistance."
];

var muthuResponses = [
  "muthu is idiot",
];
var arshuResponses = [
  "arshad is professional football player and singer",
];

var notSureResponses = [
  "I'm not quite sure how to respond to that.<br><br><u>please ask me questions like:-</u><br>I need create crypto airdrop <br>Some words about blockchain <br>How create website<br>etc.... ",
  "I'm sorry, I can't provide a relevant response for that. <br><br><u>please ask me questions like:-</u><br>I need create crypto airdrop , What i do ?<br>Some words about blockchain <br>How create website<br>etc.... ",
  "I'm still learning, and that's a bit beyond my knowledge. <br><br><u>please ask me questions like:-</u><br>I need create crypto airdrop , What i do ?<br>Some words about blockchain <br>How create website<br>etc.... ",
  "I'm sorry, I can't provide a relevant response for that. <br><br><u>please ask me questions like:-</u><br>I need create crypto airdrop , What i do ?<br>Some words about blockchain <br>How create website<br>etc.... "
];

var thankYouResponses = [
  "You're welcome! If you have more questions, feel free to ask.",
  "Anytime! I'm here to help.",
  "No problem! If you need further assistance, just let me know."
];

var jokeResponses = [
  "Sure, here's a joke for you: Why don't scientists trust atoms? Because they make up everything!",
  "I've got a joke for you: Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Time for a laugh: Parallel lines have so much in common. It's a shame they'll never meet."
];

var musicRecommendations = [
  "If you're in the mood for music, I recommend listening to artists like Billie Eilish, Ed Sheeran, or Coldplay.",
  "Looking for music? Check out songs by Taylor Swift, Imagine Dragons, or Adele.",
  "Music time! Enjoy tracks by Bruno Mars, Ariana Grande, or Maroon 5."
];

var movieRecommendations = [
  "If you're into action movies, you might enjoy 'Inception' or 'Mad Max: Fury Road'.",
  "For a good comedy, check out 'The Grand Budapest Hotel' or 'Superbad'.",
  "If you're in the mood for romance, 'The Notebook' and 'Pride & Prejudice' are great choices.",
  "For science fiction fans, 'Blade Runner 2049' and 'The Matrix' are must-watch films.",
  "If you enjoy animation, don't miss 'Toy Story' or 'Finding Nemo'."
];

var bookRecommendations = [
  "Looking for a mystery? 'Gone Girl' by Gillian Flynn is a page-turner.",
  "If you like fantasy, 'Harry Potter and the Sorcerer's Stone' by J.K. Rowling is a classic.",
  "For a thought-provoking read, '1984' by George Orwell is a must.",
  "If you're into romance, 'Pride and Prejudice' by Jane Austen is a timeless novel.",
  "For non-fiction enthusiasts, 'Sapiens' by Yuval Noah Harari offers fascinating insights into human history."
];

var travelTips = [
  "When traveling, make sure to pack essentials like a charger, a portable power bank, and comfortable shoes.",
  "Research local customs and traditions before visiting a new place to show respect and understanding.",
  "Consider using travel apps to find the best deals on accommodations, flights, and local activities.",
  "Keep copies of important documents like your passport and travel insurance in case of emergencies.",
  "Try local cuisine and immerse yourself in the culture for a more enriching travel experience."
];

var weatherResponses = [
  "The weather today is sunny and warm, perfect for outdoor activities!",
  "It looks like we'll have some light showers today, so don't forget your umbrella.",
  "Expect a chilly day with temperatures dropping in the evening. Make sure to dress warmly!",
  "The forecast predicts a mix of clouds and sun, so be prepared for changing conditions.",
  "It's a great day to stay indoors and cozy up with a book or a movie."
];

var foodRecommendations = [
  "Craving pizza? Try the local pizzeria 'Slice of Heaven' for some delicious options.",
  "For a healthy meal, 'Green Garden Cafe' is known for their fresh salads and smoothies.",
  "If you're in the mood for Asian cuisine, 'Sakura Sushi' has a wide variety of sushi rolls.",
  "For a classic American burger, head over to 'Burger Joint' and enjoy their juicy burgers.",
  "Looking for a fine dining experience? 'Elegant Eats' offers a gourmet menu with exquisite flavors."
];

var fitnessTips = [
  "Staying hydrated is crucial during your workout. Remember to drink water before, during, and after.",
  "Incorporate both cardio and strength training exercises for a balanced fitness routine.",
  "Proper form is essential to prevent injuries. Consider working with a personal trainer to learn the right techniques.",
  "Don't forget to stretch before and after your workout to improve flexibility and reduce muscle soreness.",
  "Rest and recovery are important. Allow your body time to recover between intense workouts."
];

var techAdvice = [
  "When choosing a new smartphone, consider factors like camera quality, battery life, and software features.",
  "For better cybersecurity, use strong and unique passwords for each online account you have.",
  "If your computer is running slow, try clearing temporary files and optimizing your storage.",
  "When shopping for a laptop, think about your needs: gaming, productivity, design, and choose accordingly.",
  "Regularly update your software and operating systems to ensure you have the latest security patches and features."
];

var healthWellnessTips = [
  "Prioritize getting enough sleep. Aim for 7-9 hours of quality sleep each night.",
  "Incorporate mindfulness techniques like meditation and deep breathing to reduce stress.",
  "Stay physically active to boost your mood and maintain overall well-being.",
  "A balanced diet rich in fruits, vegetables, whole grains, and lean proteins supports your health.",
  "Practice gratitude and positive thinking to improve your mental and emotional well-being."
];

var travelDestinations = [
  "Consider visiting Paris, known for its romantic charm and iconic landmarks.",
  "If you're an adventure enthusiast, exploring the natural beauty of New Zealand is a must.",
  "Experience the rich history of Rome and indulge in delicious Italian cuisine.",
  "For a relaxing beach getaway, the Maldives offers pristine white sands and crystal-clear waters.",
  "Explore the vibrant culture and architecture of Tokyo, Japan's bustling capital city."
];

var petAdvice = [
  "When adopting a pet, consider your lifestyle and choose a breed that matches your energy level.",
  "Regular exercise and playtime are important for keeping your pet happy and healthy.",
  "Provide proper training and socialization to ensure your pet behaves well in various situations.",
  "Regular veterinary check-ups and vaccinations are crucial for your pet's well-being.",
  "Remember that pets require love, attention, and care for their entire lives."
];

var productivityTips = [
  "Create a to-do list or schedule to prioritize tasks and stay organized throughout the day.",
  "Break your work into smaller tasks to make it more manageable and reduce overwhelm.",
  "Use the Pomodoro technique: work for 25 minutes, then take a 5-minute break to boost productivity.",
  "Minimize distractions by setting specific work hours and turning off notifications.",
  "Consider using productivity tools like task management apps to stay on track."
];

var hobbyIdeas = [
  "If you enjoy creating, try your hand at painting, crafting, or DIY projects.",
  "Exploring photography can be a great way to capture memories and express your creativity.",
  "Learn a musical instrument or start singing to indulge in the joy of music.",
  "Gardening can be therapeutic and rewarding, especially if you love being close to nature.",
  "If you're into fitness, consider taking up a new sport or outdoor activity."
];

var relationshipAdvice = [
  "Communication is key in any relationship. Make sure to express your thoughts and feelings.",
  "Show appreciation and celebrate each other's achievements to strengthen your bond.",
  "Practice active listening to truly understand your partner's perspective.",
  "Remember that compromise is essential; finding middle ground is important for a healthy relationship.",
  "Keep the romance alive by planning surprise dates and spending quality time together."
];

var sahidResponses = [
  "jasil's friend zahid",
];

var programmingTips = [
  "Practice coding regularly to improve your programming skills.",
  "Always comment your code for better readability and collaboration.",
  "Don't be afraid to ask for help or seek guidance from online communities.",
  "Learn about version control systems like Git to manage your code effectively.",
  "Stay up-to-date with the latest programming languages and technologies."
];

var blockchainInfo = [
  "Blockchain is a decentralized and distributed digital ledger technology.",
  "It's most known for its use in cryptocurrencies like Bitcoin and Ethereum.",
  "Blockchain ensures transparency, security, and immutability of data.",
  "Smart contracts on blockchain platforms automate and secure contract execution.",
  "Blockchain has applications beyond finance, including supply chain, healthcare, and more."
];

var cryptoAirdropInfo = [
  "We can create your own crypto airdrop bot (telegram bot/website)token with your required functions and project .i will help you. Use the contact section <br><br><u> What is airdrop :- </u><br>A crypto airdrop is a distribution of free tokens to holders of a specific cryptocurrency.",
  "We can create your own crypto airdrop bot (telegram bot/website)token with your required functions and project .i will help you. Use the contact section <br><br><u> What is airdrop :- </u><br>Airdrops are often used to promote new projects and increase awareness.",
  "We can create your own crypto airdrop bot (telegram bot/website)token with your required functions and project .i will help you. Use the contact section <br><br><u> What is airdrop :- </u><br>To participate in an airdrop, you usually need to hold a certain amount of the specified token.",
  "We can create your own crypto airdrop bot (telegram bot/website)token with your required functions and project .i will help you. Use the contact section <br><br><u> What is airdrop :- </u><br>Follow reputable sources to find information about upcoming airdrops.",
  "We can create your own crypto airdrop bot (telegram bot/website)token with your required functions and project .i will help you. Use the contact section <br><br><u> caution ! :- </u><br>Be cautious of scams; never share your private keys or send tokens to participate in an airdrop."
];

var telegramBotInfo = [
  "We can create your own telegram bot with your required functions and project .i will help you. Use the contact section <br><br><u> What is telegram bot:- </u><br>Telegram bots are automated programs that can interact with users on the Telegram messaging platform.",
  "We can create your own telegram bot with your required functions and project .i will help you. Use the contact section <br><br><u> What is telegram bot:- </u><br>You can create Telegram bots using the BotFather bot on Telegram.",
  "We can create your own telegram bot with your required functions and project .i will help you. Use the contact section <br><br><u> What is telegram bot:- </u><br>Telegram bots can perform various tasks, such as sending messages, providing information, and more.",
  "We can create your own telegram bot with your required functions and project .i will help you. Use the contact section <br><br><u> What is telegram bot:- </u><br>They can be integrated with external APIs to fetch data and provide real-time updates.",
  "We can create your own telegram bot with your required functions and project .i will help you. Use the contact section <br><br><u> What is telegram bot:- </u><br>Telegram bots can be used for customer support, notifications, and even games."
];

var cryptoTokenInfo = [
  "We can create your own crypto token with your required functions and project .i will help you. Use the contact section <br><br><u> What is crypto:- </u><br>Cryptocurrency tokens are digital assets built on existing blockchain platforms like Ethereum.",
  "We can create your own crypto token with your required functions and project .i will help you. Use the contact section <br><br><u> What is crypto:- </u><br>Tokens can represent various assets, including utility, security, or even ownership in a project.",
  "We can create your own crypto token with your required functions and project .i will help you. Use the contact section <br><br><u> What is crypto:- </u><br>They are often used in Initial Coin Offerings (ICOs) to raise funds for new projects.",
  "We can create your own crypto token with your required functions and project .i will help you. Use the contact section <br><br><u> What is crypto:- </u><br>Tokens can have different standards like ERC-20, ERC-721, and more, defining their functionalities.",
  "We can create your own crypto token with your required functions and project .i will help you. Use the contact section <br><br><u> What is crypto:- </u><br>Tokenization is a way to tokenize real-world assets like real estate, art, and more."
];

var websiteDevInfo = [
  "We can create your own website with your requirements and project .i will help you. Use the contact section <br><br><u> What is website:- </u><br> Website development involves designing and creating websites for online presence. ",
  "We can create your own website with your requirements and project .i will help you. Use the contact section <br><br><u> What is website:- </u><br>HTML, CSS, and JavaScript are fundamental technologies used to build websites.",
  "We can create your own website with your requirements and project .i will help you. Use the contact section <br><br><u> What is website:- </u><br>Frameworks like Bootstrap and libraries like jQuery can speed up the development process.",
  "We can create your own website with your requirements and project .i will help you. Use the contact section <br><br><u> What is website:- </u><br>Responsive design ensures that websites work well on various devices and screen sizes.",
  "We can create your own website with your requirements and project .i will help you. Use the contact section <br><br><u> What is website:- </u><br>Web developers use tools like version control, text editors, and debugging tools."
];

var jaskomInfo = [
  "Team Jaskom is a dedicated and highly skilled group of professionals who are fully committed to meeting all of your requirements. With Jsk at the helm, we guarantee the delivery of exceptional projects that cater to your unique needs. Our extensive team of developers and staff members ensures that we have the capacity to handle a wide range of projects, both large and small.",
  "Our expertise extends particularly to crypto-based projects, where we have a proven track record of success. Whether it's developing complex blockchain solutions or crafting innovative decentralized applications, we have the technical prowess to execute any project. Our developers are well-versed in various programming languages and are capable of delivering top-notch solutions that drive the crypto industry forward",
  "Team jaskom is a dedicated to fulfilling your requirements and Comprised of skilled developers and staff",
  "Team jsk is Actively engaged in developing crypto tokens ,airdrop bots and websites .Demonstrates versatility and competence in the crypto space.",
];

var jasilInfo = [
  "Yeah .., I'm Jasil P, 18 years old. I'm a blockchain and crypto enthusiast and have knowledge in some programming languages, thats it..",
  "heyy I'm Jasil P, an 18-year-old blockchain and crypto enthusiast, I am fueled by a passion for technology, constantly expanding my knowledge and skills in programming languages to actively contribute to the exciting world of digital finance"
];

var nftExplanation = [
  "NFTs (Non-Fungible Tokens) are unique digital assets that represent ownership of digital or physical items.",
  "They are indivisible and cannot be exchanged on a one-to-one basis like cryptocurrencies.",
  "NFTs have gained popularity in art, gaming, and collectibles.",
];


var goodResponses = [
  "That's wonderful to hear!",
  "I'm glad things are going well for you!",
  "It's great to know that!",
  "That's fantastic news!",
  "I'm happy for you!",
  "That's really nice!",
  "I'm pleased to hear that!",
  "That's good to know!",
  "I'm excited for you!",
  "That's a positive update!",
  
  ];
  
  var okayResponses = [
    "Gotcha!",
    "Roger that.",
    "I'm with you.",
    "Absolutely.",
    "I comprehend.",
    "Affirmative.",
    "Copy that.",
    "Yup, I hear you.",
    "Indeed.",
    "Yep, got it.",
    
    ];
    
    var contactResponses = [
      "Of course, select the contact(email) section on this website or Telegram ,As per your convenience .thanks" ,
      ];

function generateBotResponse(userInput) {
  var botResponse = "";

  var questionPatterns = [
    { pattern: /(hi|hello|hey|whats up)/i, responses: helloResponses },
    { pattern: /(how are you|what you do)/i, responses: howAreYouResponses },
    { pattern: /(what's your name|name|you)/i, responses: nameResponses },
    { pattern: /(bye|see you)/i, responses: byeResponses },
    { pattern: /(thank you|thanks)/i, responses: thankYouResponses },
    { pattern: /joke/i, responses: jokeResponses },
    { pattern: /music/i, responses: musicRecommendations },
    { pattern: /movie/i, responses: movieRecommendations },
    { pattern: /book/i, responses: bookRecommendations },
    { pattern: /travel/i, responses: travelTips },
    { pattern: /weather/i, responses: weatherResponses },
    { pattern: /food/i, responses: foodRecommendations },
    { pattern: /fitness/i, responses: fitnessTips },
    { pattern: /tech/i, responses: techAdvice },
    { pattern: /health/i, responses: healthWellnessTips },
    { pattern: /travel/i, responses: travelDestinations },
    { pattern: /pet/i, responses: petAdvice },
    { pattern: /productivity/i, responses: productivityTips },
    { pattern: /(programming|coding)/i, responses: programmingTips },
    { pattern: /blockchain/i, responses: blockchainInfo },
    { pattern: /(crypto airdrop|airdrop)/i, responses: cryptoAirdropInfo },
    { pattern: /hobby/i, responses: hobbyIdeas },
    { pattern: /relationship/i, responses: relationshipAdvice },
    { pattern: /(telegram bot|bot|bot on telegram)/i, responses: telegramBotInfo },
    { pattern: /(crypto token|cryptocurrency|crypto)/i, responses: cryptoTokenInfo },
    { pattern: /(jaskom|jsk)/i, responses: jaskomInfo },
    { pattern: /(jasil|ceo|owner|jasi|jasilp)/i, responses: jasilInfo },
    { pattern: /website/i, responses: websiteDevInfo },
    { pattern: /(NFT|NFTS)/i, responses: nftExplanation},
    { pattern: /(Musthafa|muthu)/i, responses: muthuResponses},
    { pattern: /(arshad|arshu)/i, responses: arshuResponses},
    { pattern: /(zahid|sahid|manuppa)/i, responses: sahidResponses},
    { pattern: /(okay|ok|hmm|mm|oky|done)/i, responses: okayResponses},
    { pattern: /(nice|good|doing well|great)/i, responses: goodResponses},
    { pattern: /(contact|support|help|touch|error|report|complaint)/i, responses: contactResponses},
 
  ]; 

  for (var i = 0; i < questionPatterns.length; i++) {
    var pattern = questionPatterns[i].pattern;
    var responses = questionPatterns[i].responses;

    if (pattern.test(userInput.toLowerCase())) {
      botResponse = getRandomResponse(responses);
      break;
    }
  }

  if (!botResponse) {
    botResponse = getRandomResponse(notSureResponses);
  }

  return botResponse;
}

function getRandomResponse(responses) {
  var randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

function typingAnimation() {
  $(
    '<div class="message loading new"><figure class="avatar"><img src="./jas.png" /></figure><span></span></div>'
  ).appendTo($(".mCSB_container"));
}
