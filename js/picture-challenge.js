/* PICTURE CHALLENGE — visual B1 vocabulary */
(function(App){const bank=[
{scene:'🏃‍♀️ 🚌💨',alt:'A teenager arriving after a bus has left',q:'Which phrase best describes this picture?',a:['catch a bus','miss a bus','drive a bus','repair a bus'],c:1,e:'Miss a bus means to arrive too late to get on it.'},
{scene:'💻 🔋❌',alt:'A laptop with an empty battery',q:'What does the laptop need?',a:['a screen','a password','a charger','a printer'],c:2,e:'A charger gives power to a battery.'},
{scene:'😰 🎤 👥',alt:'A nervous speaker in front of people',q:'How does the speaker probably feel?',a:['relaxed','nervous','bored','proud'],c:1,e:'Nervous means worried or afraid about what may happen.'},
{scene:'📚 🌙 ☕',alt:'A student studying late at night',q:'What is the student doing?',a:['taking a break','revising for an exam','missing a lesson','giving a speech'],c:1,e:'Revise means to study again before an exam.'},
{scene:'🤝 😊 😊',alt:'Two friends making peace',q:'They had an argument, but now they have ___.',a:['fallen out','made up','given up','grown up'],c:1,e:'Make up means to become friendly again after an argument.'},
{scene:'🎸 🎶 🛏️',alt:'A guitar beside a bed',q:'Which hobby is shown?',a:['collecting stamps','playing an instrument','doing puzzles','taking photos'],c:1,e:'A guitar is a musical instrument.'},
{scene:'🌳 🗑️ ♻️',alt:'Rubbish being recycled in a park',q:'What action helps the environment?',a:['wasting energy','dropping litter','recycling waste','cutting trees'],c:2,e:'Recycling turns used materials into new products.'},
{scene:'🥗 💧 🍎',alt:'Salad water and fruit',q:'Which phrase describes this meal?',a:['fast food','a balanced diet','a sweet snack','a takeaway'],c:1,e:'A balanced diet includes different healthy foods.'},
{scene:'🏙️ 🚦 🚗',alt:'Traffic in a busy city',q:'What city problem is shown?',a:['traffic congestion','public transport','green space','street market'],c:0,e:'Traffic congestion means too many vehicles moving slowly.'},
{scene:'🤒 🌡️ 🛏️',alt:'A sick person with a thermometer',q:'The person should probably ___.',a:['stay up late','get some rest','skip breakfast','work out'],c:1,e:'Get some rest means relax or sleep to recover.'},
{scene:'✈️ 🧳 🌍',alt:'A suitcase near an aeroplane',q:'What is the traveller doing?',a:['going abroad','staying at home','commuting','moving house'],c:0,e:'Go abroad means travel to another country.'},
{scene:'📱 📶 ❌',alt:'A phone without a network signal',q:'What is the problem?',a:['The screen is cracked.','There is no signal.','The battery is full.','The app is updated.'],c:1,e:'No signal means the phone cannot connect to a mobile network.'},
{scene:'🎨 🖼️ 👀',alt:'A person looking at art in a gallery',q:'Where is this person?',a:['at an exhibition','at a stadium','at a pharmacy','at a factory'],c:0,e:'An exhibition is a public show of art or other objects.'},
{scene:'🌧️ ☂️ 😄',alt:'A cheerful person under an umbrella',q:'Which adjective best describes the person?',a:['miserable','cheerful','exhausted','embarrassed'],c:1,e:'Cheerful means happy and positive.'}
];App.games.picture={start:()=>App.quizEngine('picture',bank,{scene:true,label:'LOOK • THINK • CHOOSE'})};})(window.EMA);
