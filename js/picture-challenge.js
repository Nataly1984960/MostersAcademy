/* PICTURE CHALLENGE — image-based B1 vocabulary */
(function(App){
const bank=[
 {image:'images/picture-challenge/miss-a-bus.webp',icon:'🚌',alt:'A teenager running after a bus that is leaving.',question:'Which phrase best describes the picture?',answers:['catch a bus','miss a bus','drive a bus','wait for a bus'],correctAnswer:1,explanation:'Miss a bus means to arrive too late to get on it.'},
 {image:'images/picture-challenge/2.webp',icon:'🌙',alt:'A very tired teenager studying at a desk.',question:'How does the teenager feel?',answers:['confused','relaxed','exhausted','surprised'],correctAnswer:2,explanation:'Exhausted means extremely tired.'},
 {image:'images/picture-challenge/3.webp',icon:'💻',alt:'A teenage boy working on a laptop at his desk.',question:'What is he doing?',answers:['charging his phone','working on a laptop','watching television','fixing a computer'],correctAnswer:1,explanation:'Work on a laptop means to use a laptop to complete a task, project or piece of work.'},
 {image:'images/picture-challenge/4.webp',icon:'🚗',alt:'A teenager sitting in a car in a long traffic jam.',question:'What is happening?',answers:['They are getting lost.','They are driving too fast.','They are stuck in traffic.','They are looking for parking.'],correctAnswer:2,explanation:'Be stuck in traffic means you cannot move or can only move very slowly because there are too many vehicles.'},
 {image:'images/picture-challenge/5.webp',icon:'💧',alt:'A teenage girl taking care of her younger brother.',question:'What is the girl doing?',answers:['arguing with her brother','waiting for her brother','looking after her brother','picking up her brother'],correctAnswer:2,explanation:'Look after someone means to take care of them.'},
 {image:'images/picture-challenge/6.webp',icon:'↔',alt:'A teenager choosing between two different activities.',question:'What does the teenager need to do?',answers:['change their mind','make a decision','make a mistake','take a break'],correctAnswer:1,explanation:'Make a decision means to choose what you are going to do.'},
 {image:'images/picture-challenge/7.webp',icon:'💬',alt:'Two teenage friends having a disagreement.',question:'What are the friends doing?',answers:['making a plan','telling a joke','having a celebration','having an argument'],correctAnswer:3,explanation:'Have an argument means to disagree with someone, often angrily.'},
 {image:'images/picture-challenge/8.webp',icon:'🏅',alt:'A teenager performing in a youth competition.',question:'What is the teenager doing?',answers:['watching a performance','taking part in a competition','organising a party','attending a lesson'],correctAnswer:1,explanation:'Take part in something means to participate in it.'},
 {image:'images/picture-challenge/9.webp',icon:'♻',alt:'Teenagers collecting rubbish in a park.',question:'What are the teenagers trying to do?',answers:['decorate the park','explore the countryside','protect the environment','prepare for a picnic'],correctAnswer:2,explanation:'Protect the environment means to help keep nature and the planet safe and clean.'},
 {image:'images/picture-challenge/10.webp',icon:'📱',alt:'Two teenage friends talking to each other by video call.',question:'What are the friends doing?',answers:['losing touch','meeting in person','sharing a room','keeping in touch'],correctAnswer:3,explanation:'Keep in touch means to continue communicating with someone.'},
 {image:'images/picture-challenge/11.webp',icon:'🧳',alt:'A teenager putting clothes into a suitcase before a trip.',question:'What is the teenager doing?',answers:['unpacking shopping','packing a suitcase','cleaning the bedroom','choosing new clothes'],correctAnswer:1,explanation:'Pack a suitcase means to put the things you need for a trip into your suitcase.'},
 {image:'images/picture-challenge/12.webp',icon:'📲',alt:'A disappointed teenager looking at a smartphone.',question:'How does the teenager feel?',answers:['proud','frightened','disappointed','relaxed'],correctAnswer:2,explanation:'Disappointed means unhappy because something was not as good as you hoped or expected.'}
];

const assetVersion=Date.now();

function loadPictures(){
 document.querySelectorAll('.picture-image[data-picture-src]:not([data-ready])').forEach(img=>{
   const fallback=img.nextElementSibling;
   img.dataset.ready='true';
   img.addEventListener('load',()=>{img.hidden=false;fallback.hidden=true},{once:true});
   img.addEventListener('error',()=>{img.hidden=true;fallback.hidden=false},{once:true});
   const separator=img.dataset.pictureSrc.includes('?')?'&':'?';
   img.src=`${img.dataset.pictureSrc}${separator}v=${assetVersion}`;
 });
}

function picture(x){
 setTimeout(loadPictures,0);
 return `<div class="picture-media">
   <img class="picture-image" data-picture-src="${x.image}" alt="${x.alt}" hidden>
   <div class="picture-fallback" role="img" aria-label="${x.alt}">
     <b aria-hidden="true">${x.icon}</b><span>PICTURE CHALLENGE</span><small>Final illustration coming soon</small>
   </div>
 </div>`;
}

const questions=bank.map(item=>({
 image:item.image,icon:item.icon,alt:item.alt,
 q:item.question,a:item.answers,c:item.correctAnswer,e:item.explanation
}));

App.games.picture={start:()=>App.quizEngine('picture',questions,{visual:picture,label:'LOOK • THINK • CHOOSE'})};
})(window.EMA);
