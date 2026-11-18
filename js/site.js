(function(){
  var pg=document.getElementById('pg');
  function p(){var h=document.documentElement.scrollHeight-innerHeight;pg.style.width=(h>0?scrollY/h*100:0)+'%'}
  addEventListener('scroll',p,{passive:true});p();
  document.querySelectorAll('section h2,.offer article,.case div,.steps div,.tools div,.pr div,.owasp li,.gl div,.path div,.stack div').forEach(function(el,i){el.classList.add('rv',i%2?'rr':'rl')});
  var els=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(e){e.forEach(function(i){if(i.isIntersecting){i.target.classList.add('on');io.unobserve(i.target)}})},{threshold:.12});els.forEach(function(el){io.observe(el)})}else{els.forEach(function(el){el.classList.add('on')})}
  if(!matchMedia('(prefers-reduced-motion:reduce)').matches)document.querySelectorAll('.run .tr').forEach(function(t){Array.prototype.slice.call(t.children).forEach(function(c){var k=c.cloneNode(true);k.setAttribute('aria-hidden','true');t.appendChild(k)})});
  document.querySelectorAll('.run').forEach(function(run){
    var tr=run.firstElementChild,dir=run.classList.contains('rev')?-1:1,reduced=matchMedia('(prefers-reduced-motion:reduce)').matches,pos=0,wait=0,hover=false,drag=false,sx=0,ss=0,moved=0,ready=false;
    var w=document.createElement('div');w.className='rw';run.parentNode.insertBefore(w,run);w.appendChild(run);
    ['l','r'].forEach(function(k){var b=document.createElement('button');b.className='rb '+k;b.type='button';b.setAttribute('aria-label',k==='l'?'Previous pictures':'Next pictures');b.textContent=k==='l'?'\u2039':'\u203A';b.addEventListener('click',function(){wait=performance.now()+3000;run.scrollBy({left:(k==='l'?-1:1)*Math.min(360,run.clientWidth*.8),behavior:'smooth'})});w.appendChild(b)});
    function half(){return reduced?0:tr.scrollWidth/2}
    run.addEventListener('scroll',function(){pos=run.scrollLeft;var h=half();if(!h)return;if(run.scrollLeft>=h)run.scrollLeft-=h;else if(run.scrollLeft<=0)run.scrollLeft+=h},{passive:true});
    ['touchstart','wheel'].forEach(function(n){run.addEventListener(n,function(){wait=performance.now()+3000},{passive:true})});
    run.addEventListener('mouseenter',function(){hover=true});run.addEventListener('mouseleave',function(){hover=false});
    run.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;drag=true;sx=e.clientX;ss=run.scrollLeft;moved=0;run.style.cursor='grabbing'});
    addEventListener('pointermove',function(e){if(!drag)return;var dx=e.clientX-sx;moved=Math.max(moved,Math.abs(dx));run.scrollLeft=ss-dx});
    addEventListener('pointerup',function(){if(drag){drag=false;run.style.cursor='grab';wait=performance.now()+2000}});
    run.addEventListener('click',function(e){if(moved>6){e.stopPropagation();e.preventDefault();moved=0}},true);
    function step(){
      if(!reduced){
        if(!ready&&tr.scrollWidth>run.clientWidth){ready=true;if(dir<0)run.scrollLeft=half();pos=run.scrollLeft}
        if(ready&&!hover&&!drag&&performance.now()>wait){if(Math.abs(run.scrollLeft-pos)>3)pos=run.scrollLeft;pos+=dir*.7;run.scrollLeft=pos}
      }
      requestAnimationFrame(step)
    }
    step();
  });
  document.querySelectorAll('[data-pic]').forEach(function(el){var m=document.querySelectorAll(el.getAttribute('data-pic'))[+el.getAttribute('data-i')||0];if(m){var c=m.cloneNode(true);c.removeAttribute('loading');el.appendChild(c)}else el.remove()});
  (function(){var t=document.getElementById('st');if(!t)return;var s=[].slice.call(t.children),dots=document.getElementById('sd'),cur=0,reduced=matchMedia('(prefers-reduced-motion:reduce)').matches,wait=0,hov=false,drag=false,sx=0,ss=0;
    function pos(i){return s[i].offsetLeft-(t.clientWidth-s[i].clientWidth)/2}
    function go(i,u){i=(i+s.length)%s.length;if(u)wait=performance.now()+6000;t.scrollTo({left:pos(i),behavior:'smooth'})}
    s.forEach(function(_,i){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Slide '+(i+1));b.onclick=function(){go(i,true)};dots.appendChild(b)});
    function mark(){var c=t.scrollLeft+t.clientWidth/2,b=0,d=1e9;s.forEach(function(e,i){var x=Math.abs(e.offsetLeft+e.clientWidth/2-c);if(x<d){d=x;b=i}});cur=b;[].forEach.call(dots.children,function(e,i){e.className=i===b?'on':''})}
    t.addEventListener('scroll',mark,{passive:true});mark();
    document.querySelectorAll('#slides [data-d]').forEach(function(b){b.onclick=function(){go(cur+ +b.getAttribute('data-d'),true)}});
    ['touchstart','wheel','keydown'].forEach(function(n){t.addEventListener(n,function(){wait=performance.now()+6000},{passive:true})});
    t.addEventListener('mouseenter',function(){hov=true});t.addEventListener('mouseleave',function(){hov=false});
    t.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;drag=true;sx=e.clientX;ss=t.scrollLeft;t.style.scrollSnapType='none';t.style.cursor='grabbing'});
    addEventListener('pointermove',function(e){if(drag)t.scrollLeft=ss-(e.clientX-sx)});
    addEventListener('pointerup',function(){if(!drag)return;drag=false;t.style.scrollSnapType='';t.style.cursor='';go(cur,true)});
    if(!reduced)setInterval(function(){if(!hov&&!drag&&performance.now()>wait&&document.visibilityState==='visible')go(cur+1)},4500);
  })();
  var lb=document.getElementById('lb');
  document.addEventListener('click',function(e){var m=e.target.closest('figure.media img,figure.media video');if(!m)return;lb.innerHTML='';var c=m.cloneNode(true);if(c.tagName==='VIDEO'){c.controls=true;c.autoplay=true}c.style.cursor='default';lb.appendChild(c);lb.showModal()});
  lb.addEventListener('click',function(e){if(e.target===lb){lb.close();lb.innerHTML=''}});
})();
(function(){var T=document.getElementById('term');if(!T)return;
var P=[['EUR/USD',1.0842,4],['XAU/USD',2634.5,2],['Volatility 75',412380,1],['Boom 1000',9876.5,2]],cv=[].slice.call(T.querySelectorAll('canvas')),px=[].slice.call(T.querySelectorAll('.px')),reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
function nx(v,b){var s=b*.0011,c=v+(Math.random()-.5)*2*s;return[v,Math.max(v,c)+Math.random()*s*.5,Math.min(v,c)-Math.random()*s*.5,c]}
var D=P.map(function(p){var a=[],v=p[1];for(var i=0;i<34;i++){var c=nx(v,p[1]);a.push(c);v=c[3]}return a});
function css(n){return getComputedStyle(document.documentElement).getPropertyValue(n).trim()}
function draw(){var up=css('--up'),dn=css('--down'),ln=css('--line'),bg=css('--bg');D.forEach(function(a,j){var c=cv[j],x=c.getContext('2d'),mn=1e18,mx=-1e18;
 a.forEach(function(k){mn=Math.min(mn,k[2]);mx=Math.max(mx,k[1])});
 var y=function(v){return 140-(v-mn)/(mx-mn||1)*125};
 x.fillStyle=bg;x.fillRect(0,0,300,150);x.strokeStyle=ln;x.lineWidth=1;for(var g=1;g<4;g++){x.beginPath();x.moveTo(0,g*37.5);x.lineTo(300,g*37.5);x.stroke()}
 a.forEach(function(k,i){var cx=6+i*8.7,u=k[3]>=k[0];x.strokeStyle=x.fillStyle=u?up:dn;x.beginPath();x.moveTo(cx,y(k[1]));x.lineTo(cx,y(k[2]));x.stroke();x.fillRect(cx-3,y(Math.max(k[0],k[3])),6,Math.max(2,Math.abs(y(k[0])-y(k[3]))))});
 var l=a[a.length-1][3],u=l>=a[0][0];x.setLineDash([4,4]);x.strokeStyle=u?up:dn;x.beginPath();x.moveTo(0,y(l));x.lineTo(300,y(l));x.stroke();x.setLineDash([]);
 px[j].textContent=l.toFixed(P[j][2]);px[j].style.color=u?up:dn})}
draw();
if(!reduce)setInterval(function(){if(document.hidden)return;var r=T.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;D.forEach(function(a){a.shift();a.push(nx(a[a.length-1][3],P[D.indexOf(a)][1]))});draw()},450);
})();
