function toggleMenu(){document.getElementById('sidebar')?.classList.toggle('open')}
document.addEventListener('click',e=>{const s=document.getElementById('sidebar');if(window.innerWidth<=820&&s?.classList.contains('open')&&!s.contains(e.target)&&!e.target.closest('.mobile-toggle'))s.classList.remove('open')});

/* ---------- KR OFFICIAL Achievements ---------- */
const KR_GAMES = [
  {id:'KR001', name:'Sudoku', icon:'🧩', href:'games/sudoku.html'},
  {id:'KR002', name:'Blackjack Collection', icon:'🃏', href:'games/blackjack.html'},
  {id:'KR003', name:'Mine Swiper', icon:'💣', href:'games/minesweeper.html'},
  {id:'KR004', name:'Othello Collection', icon:'⚫', href:'games/othello.html'},
  {id:'KR006', name:'Numerical Reasoning', icon:'🔢', href:'games/number-guess.html'},
  {id:'KR007', name:'Sig Project 2026', icon:'🚀', href:'games/shooting.html'}
];
function krData(){
  try{ return JSON.parse(localStorage.getItem('kr_achievements')||'{}'); }catch(e){ return {}; }
}
function krUnlock(id){
  try{
    const data = krData();
    if(!data[id]){ data[id]=Date.now(); localStorage.setItem('kr_achievements', JSON.stringify(data)); }
  }catch(e){}
}
function krProgressCount(){ return Object.keys(krData()).length; }
