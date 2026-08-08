/* MONSTER BATTLE LOGIC */
(function(App){
const bank=[
 {q:'If I ___ more free time, I would learn Japanese.',a:['have','had','will have','would have'],c:1,e:'The second conditional uses if + Past Simple.'},
 {q:'I ___ this film three times.',a:['saw','have seen','am seeing','see'],c:1,e:'Present Perfect describes life experience.'},
 {q:'We ___ to Paris last summer.',a:['have gone','went','go','were going'],c:1,e:'Use Past Simple with a finished past time.'},
 {q:'While I ___ home, it started to rain.',a:['walked','was walking','have walked','am walking'],c:1,e:'Past Continuous describes the longer action.'},
 {q:'If you study hard, you ___ the exam.',a:['pass','will pass','would pass','passed'],c:1,e:'First conditional: if + present, will + verb.'},
 {q:'You ___ wear a seat belt. It is the law.',a:['might','must','could','would'],c:1,e:'Must expresses strong obligation.'},
 {q:'My new phone is ___ than my old one.',a:['more fast','fastest','faster','the faster'],c:2,e:'Short adjectives take -er.'},
 {q:'The new bridge ___ in 2022.',a:['built','was built','has built','is building'],c:1,e:'Past passive: was/were + past participle.'},
 {q:'She enjoys ___ mystery novels.',a:['read','to reading','reading','to reads'],c:2,e:'Enjoy is followed by a gerund.'},
 {q:'That is the boy ___ won the competition.',a:['which','whose','who','where'],c:2,e:'Who refers to people.'},
 {q:'Have you finished your homework ___?',a:['already','yet','ever','since'],c:1,e:'Yet is common in Present Perfect questions.'},
 {q:'I ___ my keys, so I cannot open the door.',a:['lost','have lost','was losing','lose'],c:1,e:'The present result makes Present Perfect natural.'},
 {q:'If I were you, I ___ apologise.',a:['will','would','can','have'],c:1,e:'Second conditional uses would in the result.'},
 {q:'This is the café ___ we first met.',a:['who','which','where','whose'],c:2,e:'Where refers to a place.'},
 {q:'You ___ see a doctor if the pain continues.',a:['should','must not','would have','used'],c:0,e:'Should gives advice.'},
 {q:'The emails ___ every morning.',a:['check','are checked','checked','are checking'],c:1,e:'Present passive: am/is/are + past participle.'},
 {q:'He promised ___ me after class.',a:['helping','help','to help','to helping'],c:2,e:'Promise is followed by to + infinitive.'},
 {q:'When I called, they ___ dinner.',a:['had','have had','were having','are having'],c:2,e:'The action was in progress when you called.'}
];
App.quizEngine=function(id,questions,opts={}){let round=App.pick(questions,10),i=0,lives=3,correct=0,score=0,locked=false;const root=document.querySelector('#game-content');
 function render(){let x=round[i],hp=Math.max(0,100-correct*10);root.innerHTML=`<section class="game-stage"><div class="hud"><div><span>Score</span><strong>${score}</strong></div><div><span>Question</span><strong>${i+1} / 10</strong></div><div><span>Lives</span><strong>${'❤️'.repeat(lives)||'—'}</strong></div><div><span>${id==='battle'?'Monster HP':'Progress'}</span><strong>${id==='battle'?hp+'%':correct+' correct'}</strong></div></div><div class="progress"><i style="width:${i*10}%"></i></div><div class="monster-row">${opts.scene?`<div class="scene" role="img" aria-label="${x.alt||'Picture clue'}">${x.scene}</div>`:`<img id="enemy" src="images/grammar-monster.png" alt="Grammar Monster">`}<div class="question-box"><span class="eyebrow">${opts.label||'CHOOSE THE CORRECT ANSWER'}</span><h2>${x.q}</h2><div class="answers">${x.a.map((v,n)=>`<button class="answer" data-answer="${n}"><b>${String.fromCharCode(65+n)}.</b> ${v}</button>`).join('')}</div><div class="feedback" aria-live="polite"></div></div></div></section>`;root.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>answer(+b.dataset.answer))}
 function answer(n){if(locked)return;locked=true;let x=round[i],ok=n===x.c,buttons=[...root.querySelectorAll('[data-answer]')];buttons[n].classList.add(ok?'correct':'wrong');buttons[x.c].classList.add('correct');if(ok){correct++;let pts=100;score+=pts;App.correct(pts);App.sound('correct');if(document.querySelector('#enemy'))document.querySelector('#enemy').classList.add('damage')}else{lives--;App.wrong();App.sound('wrong')}root.querySelector('.feedback').innerHTML=`<b>${ok?App.positive():App.negative()}</b> ${x.e}`;setTimeout(()=>{i++;if(lives<=0)return App.result(id,score,correct,10,false);if(i>=10)return App.result(id,score,correct,10,true);locked=false;render()},1250)}render()};
App.games.battle={start:()=>App.quizEngine('battle',bank,{label:'GRAMMAR ATTACK'})};
})(window.EMA);
