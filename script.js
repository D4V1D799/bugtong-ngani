/* ========= RIDDLES (with synonyms/alt answers where useful) ========= */
const BASE = [
  { q:'Walang lapis, walang pluma, sumusulat ng maganda', a:'typewriter', c:'Bagay', alts:['makinilya'] },
  { q:'Puting prutas na parang kuwintas, berde at rosas ang kinadenang balat', a:'kamatsile', c:'Pagkain', alts:['camachile','manila tamarind'] },
  { q:'Sanga-sanga, buku-buko, nagbubulaklak ay di nagbubuko, naglalaman walang buto', a:'kamote', c:'Pagkain', alts:['sweet potato'] },
  { q:'Katawan at sanga, may mga bunga', a:'kamyas', c:'Pagkain', alts:['iba','bilimbi'] },
  { q:'Tumatakbong bahay, tinutulak-tulak', a:'kariton', c:'Bagay', alts:['pushcart','tulak cart'] },
  { q:'Lupa at buhangin ay sakay nito', a:'kartilya', c:'Bagay', alts:['wheelbarrow','barrow'] },
  { q:'Walang ulo, walang mata, may bibig na umaariba, at isang tengang bubuka-buka', a:'kawali', c:'Bahay', alts:['pan','frying pan'] },
  { q:'Dalawang bunduk-bundukan, di maabot ng may katawan', a:'kilay', c:'Katawan', alts:['eyebrows'] },
  { q:'Apoy na iginuhit, isinulat sa langit', a:'kidlat', c:'Kalikasan', alts:['lightning'] },
  { q:'Malaking supot ni Mang Jacob, kung sisidlan ay pataob', a:'kulambo', c:'Bahay', alts:['mosquito net'] },
  { q:'Baka ko sa Pandakan, ang unga’y nakararating kahit saan', a:'kulog', c:'Kalikasan', alts:['thunder'] },
  { q:'Walang bintanang makikita, pinto ay laging bukas', a:'kuweba', c:'Kalikasan', alts:['yungib','cave'] },
  { q:'Binili ko nang binili, pagkatapos ay ipinambigti', a:'kurbata', c:'Bagay', alts:['necktie','tie'] },
  { q:'Hinahatak sa ikailaliman, walang kamay na nakatangan', a:'kumunoy', c:'Kalikasan', alts:['quicksand'] },
  { q:'Lumalakad habang bata pa, nakaupo kapag malaki na; minamatamis kapag nasa gulang na', a:'kundol', c:'Pagkain', alts:['winter melon'] },
  { q:'Ako’y lagi mong sinasamahan, kanan kong kamay ay kaibigan', a:'kutsara', c:'Bahay', alts:['spoon'] },
  { q:'Naka-upo na ang anak, gumagapang pa ang ina', a:'kalabasa', c:'Pagkain', alts:['squash','pumpkin'] },
  { q:'Mabilog ang mata, pinaka-matalino sa tingin ng iba', a:'kwago', c:'Hayop', alts:['owl'] },
  { q:'Eto na si Ingkong, naka-upo sa lusong', a:'kasoy', c:'Pagkain', alts:['cashew'] },
  { q:'Koronang mapula ay laging nakakabit sa ulo', a:'palong', c:'Hayop', alts:['manok','rooster comb'] },
  { q:'Hayan na si Katoto, dala-dala ang kubo', a:'pagong', c:'Hayop', alts:['turtle'] },
  { q:'Mukha’y parang tao, mataas lumukso, mabilis tumakbo', a:'matsing', c:'Hayop', alts:['unggoy','monkey'] },
  { q:'Batingaw ng bayan, kulay ay may kapulahan', a:'makopa', c:'Pagkain', alts:['macopa','wax apple'] },
  { q:'Berdeng kumot ng kalikasan, bumabalot sa pusalian', a:'lumot', c:'Kalikasan', alts:['moss'] },
  { q:'May pinto walang bintana, kinakahig upang magawa', a:'lungga', c:'Kalikasan', alts:['burrow','hole'] },
  { q:'Baston ng engkantada, nagniningning sa ganda', a:'lusis', c:'Bagay', alts:['sparkler'] },
  { q:'Bundok na bibitin-bitin, tinatangay ng hangin', a:'ulap', c:'Kalikasan', alts:['cloud'] },
  { q:'Bahay ni Pedrito, walang pinto, puro kwarto', a:'kawayan', c:'Kalikasan', alts:['bamboo'] },
  { q:'May dila ngunit ayaw magsalita; kambal sila at laging magkasama', a:'tali ng sapatos', c:'Bagay', alts:['sintas','shoelace'] },
  { q:'Utusan kong si Pedrito, palaging mainit ang ulo', a:'plantsa', c:'Bagay', alts:['plancha','iron'] },
  { q:'Katawan ay bala, bituka ay paminta', a:'papaya', c:'Pagkain' },
  { q:'Hindi hari, hindi pari, ang suot ay sari-sari', a:'sampayan', c:'Bahay', alts:['clothesline'] },
  { q:'Kapirasong lupa, napapaligiran ng sapa', a:'pulo', c:'Kalikasan', alts:['isla','island'] },
  { q:'Sundalong negro, nakatayo sa kanto', a:'poste', c:'Bagay', alts:['post','electric post'] },
  { q:'Kung bayaan ay nabubuhay, kung himasin ay namamatay', a:'makahiya', c:'Kalikasan' },
  { q:'Baston ni Adan, hindi mabilang-bilang', a:'ulan', c:'Kalikasan', alts:['rain'] },
  { q:'Lumalangoy sa ilug-ilugan, puting-puti ang kasuotan', a:'gansa', c:'Hayop', alts:['goose'] },
  { q:'Walang itak, walang kampit, gumagawa ng bahay sa pagkakakapit', a:'gagamba', c:'Hayop', alts:['spider'] },
  { q:'Dalawang magkaibigan, may talim ang tiyan, nagkakagatan di nasasaktan', a:'gunting', c:'Bagay', alts:['scissors'] },
  { q:'Tinaga ko ang puno, sa dulo nagdurugo', a:'gumamela', c:'Kalikasan', alts:['hibiscus'] },
  { q:'Dumaan si Ulikba, ang mga tao’y nahiga', a:'gabi', c:'Kalikasan', alts:['night'] },
  { q:'Mga eroplano sa kalawakan, dumadapo sa mga puno sa kagubatan', a:'ibon', c:'Hayop', alts:['bird'] },
  { q:'Dalawang balon, lalim ay paahon', a:'ilong', c:'Katawan', alts:['nose'] },
  { q:'Bahay ni Nano, walang bintana, walang pinto', a:'itlog', c:'Pagkain', alts:['egg'] },
  { q:'Kinain ang isa, itinapon ang dalawa', a:'tulya', c:'Pagkain', alts:['clam'] },
  { q:'Hindi akin, hindi sa iyo, ari ng lahat ng tao', a:'mundo', c:'Bagay', alts:['world'] },
  { q:'Isang hukbong sundalo, dikit-dikit ang mga ulo', a:'walis', c:'Bahay', alts:['broom'] },
  { q:'Tag-ulan o tag-araw, hanggang tuhod ang salawal', a:'manok', c:'Hayop', alts:['chicken','rooster'] },
  { q:'Bisitang hindi inaasahan, nauuna sa hapag-kainan', a:'langaw', c:'Hayop', alts:['fly'] },
  { q:'Limang magkakapatid, iisa ang dibdib', a:'kamay', c:'Katawan', alts:['hand'] },
];

/* ========= STATE ========= */
let deck = [];
let idx = 0;
let score = { ok:0, close:0, wrong:0, skip:0 };

/* ========= DOM ========= */
const question = document.getElementById('question');
const answerTxt = document.getElementById('answer');
const feedback = document.getElementById('feedback');
const input = document.getElementById('answerInput');

const startBtn = document.getElementById('startBtn');
const submitBtn = document.getElementById('submitBtn');
const hintBtn = document.getElementById('hintBtn');
const showBtn = document.getElementById('showBtn');
const correctBtn = document.getElementById('correctBtn');
const skipBtn = document.getElementById('skipBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const scoreOkEl = document.getElementById('scoreOk');
const scoreCloseEl = document.getElementById('scoreClose');
const scoreWrongEl = document.getElementById('scoreWrong');
const scoreSkipEl = document.getElementById('scoreSkip');

const counter = document.getElementById('counter');
const progress = document.getElementById('progressBar');

const categorySel = document.getElementById('category');
const orderSel = document.getElementById('order');
const themeToggle = document.getElementById('themeToggle');

const modal = document.getElementById('resultsModal');
const rOk = document.getElementById('rOk');
const rClose = document.getElementById('rClose');
const rWrong = document.getElementById('rWrong');
const rSkip = document.getElementById('rSkip');
const rAcc = document.getElementById('rAcc');
const restartBtn = document.getElementById('restartBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

/* ========= UTILS ========= */
function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } }
const norm = s => (s||'').toLowerCase()
  .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
  .replace(/[^\p{L}\p{N}\s]/gu,' ')
  .replace(/\s+/g,' ').trim();

// Levenshtein distance
function lev(a,b){
  const m=a.length,n=b.length;
  const dp=Array.from({length:m+1},()=>Array(n+1).fill(0));
  for(let i=0;i<=m;i++) dp[i][0]=i;
  for(let j=0;j<=n;j++) dp[0][j]=j;
  for(let i=1;i<=m;i++){
    for(let j=1;j<=n;j++){
      const cost=a[i-1]===b[j-1]?0:1;
      dp[i][j]=Math.min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+cost);
    }
  }
  return dp[m][n];
}
function similarity(a,b){
  if(!a||!b) return 0;
  const d = lev(a,b);
  return 1 - d / Math.max(a.length,b.length);
}

function acceptable(item){
  const set = new Set([item.a, ...(item.alts||[])].map(norm));
  return set;
}

/* subtle SFX via WebAudio */
let AC;
function tone(freq=440, dur=0.12, type='sine', gain=0.06){
  AC = AC || new (window.AudioContext||window.webkitAudioContext)();
  const osc = AC.createOscillator(), g = AC.createGain();
  osc.type = type; osc.frequency.value = freq;
  g.gain.value = gain;
  osc.connect(g); g.connect(AC.destination);
  osc.start(); osc.stop(AC.currentTime + dur);
}
function playSound(kind){
  if(kind==='ok'){ tone(660,0.09); setTimeout(()=>tone(880,0.09),100); }
  else if(kind==='close'){ tone(520,0.08,'triangle'); }
  else if(kind==='bad'){ tone(220,0.12,'sawtooth',0.035); }
  else if(kind==='click'){ tone(400,0.04,'square',0.02); }
}

/* ========= RENDER ========= */
function render(){
  const item = deck[idx];
  question.textContent = item.q;
  answerTxt.textContent = item.a;
  answerTxt.hidden = true;
  input.value = '';
  feedback.textContent = '';
  feedback.className = 'feedback';

  counter.textContent = `${idx+1} / ${deck.length}`;
  progress.style.width = `${(idx/Math.max(deck.length-1,1))*100}%`;

  const disabled = deck.length===0;
  input.disabled = disabled;
  [submitBtn,hintBtn,showBtn,correctBtn,skipBtn,prevBtn,nextBtn].forEach(b=> b.disabled = disabled);
  prevBtn.disabled = disabled || idx===0;
  nextBtn.disabled = disabled || idx===deck.length-1;
}

/* ========= GAME FLOW ========= */
function applyFilterAndOrder(){
  modal.hidden = true;   // ✅ close modal when starting again
  const cat = categorySel.value;
  deck = BASE.filter(b => cat==='lahat' ? true : b.c===cat);
  if(orderSel.value==='shuffle') shuffle(deck);
  idx=0; score={ok:0,close:0,wrong:0,skip:0};
  updateScore();
  render();
}
function updateScore(){
  scoreOkEl.textContent = score.ok;
  scoreCloseEl.textContent = score.close;
  scoreWrongEl.textContent = score.wrong;
  scoreSkipEl.textContent = score.skip;
}
function endIfDone(){
  if(idx === deck.length-1 && (score.ok + score.close + score.wrong + score.skip) >= deck.length){
    rOk.textContent = score.ok;
    rClose.textContent = score.close;
    rWrong.textContent = score.wrong;
    rSkip.textContent = score.skip;
    const answered = score.ok + score.close + score.wrong;
    const acc = answered ? Math.round(100 * score.ok / answered) : 0;
    rAcc.textContent = `${acc}%`;
    modal.hidden = false;
  }
}

/* judge input */
function judge(item, guessRaw){
  const guess = norm(guessRaw);
  const good = acceptable(item);
  if(good.has(guess)) return 'ok';
  for(const ans of good){
    if(ans && (guess.includes(ans) || ans.includes(guess)) && Math.abs(ans.length - guess.length) <= 3){
      return 'ok';
    }
  }
  let best = 0;
  for(const ans of good){
    best = Math.max(best, similarity(guess, ans));
  }
  if(best >= 0.85) return 'ok';
  if(best >= 0.60) return 'close';
  return 'bad';
}

/* ========= EVENTS ========= */
startBtn.addEventListener('click', ()=>{ playSound('click'); applyFilterAndOrder(); input.focus(); });

submitBtn.addEventListener('click', ()=>{
  const item = deck[idx];
  const res = judge(item, input.value);

  if(res==='ok'){
    feedback.textContent = '✅ Tama!';
    feedback.className = 'feedback ok';
    answerTxt.hidden = false;
    playSound('ok');
    score.ok++; updateScore();
    setTimeout(()=>{
      if(idx < deck.length-1){ idx++; render(); input.focus(); }
      endIfDone();
    }, 700);
  }else if(res==='close'){
    feedback.textContent = '🟡 Malapit! Subukan pang ayusin ang baybay/sagot.';
    feedback.className = 'feedback close';
    playSound('close');
    score.close++; updateScore();
  }else{
    feedback.textContent = '❌ Hindi malapit. Puwede mong hilingin ang pahiwatig.';
    feedback.className = 'feedback bad';
    playSound('bad');
    score.wrong++; updateScore();
  }
});

input.addEventListener('keydown',(e)=>{ if(e.key==='Enter' && !submitBtn.disabled){ submitBtn.click(); } });

hintBtn.addEventListener('click', ()=>{
  const first = deck[idx].a[0].toUpperCase();
  answerTxt.hidden = false;
  answerTxt.textContent = `Pahiwatig: nagsisimula sa “${first}”`;
  setTimeout(()=>{ answerTxt.textContent = deck[idx].a; }, 1200);
  playSound('click');
});

showBtn.addEventListener('click', ()=>{ answerTxt.hidden = false; playSound('click'); });

correctBtn.addEventListener('click', ()=>{
  score.ok++; updateScore(); playSound('ok');
  if(idx < deck.length-1){ idx++; render(); } else { endIfDone(); }
});

skipBtn.addEventListener('click', ()=>{
  score.skip++; updateScore(); playSound('click');
  if(idx < deck.length-1){ idx++; render(); } else { endIfDone(); }
});

prevBtn.addEventListener('click', ()=>{ if(idx>0){ idx--; render(); playSound('click'); } });
nextBtn.addEventListener('click', ()=>{ if(idx<deck.length-1){ idx++; render(); playSound('click'); } });

else{ body.classList.remove('light'); body.classList.add('dark-bg'); themeToggle.textContent='🌙 Dark'; }
  playSound('click');
});

/* Modal controls */
restartBtn.addEventListener('click', ()=>{
  modal.hidden = true;
  applyFilterAndOrder();
});
closeModalBtn.addEventListener('click', ()=>{ modal.hidden = true; });

/* Initial */
modal.hidden = true;   // make sure it’s closed on page load
render();
