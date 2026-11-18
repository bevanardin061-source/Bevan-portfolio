(function(){
  var c=document.getElementById('chart'),x=c.getContext('2d'),dpr=Math.min(window.devicePixelRatio||1,2),W,H,candles=[],reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  function css(n){return getComputedStyle(document.documentElement).getPropertyValue(n).trim()}
  function size(){var r=c.getBoundingClientRect();W=r.width;H=r.height;c.width=W*dpr;c.height=H*dpr;x.setTransform(dpr,0,0,dpr,0,0)}
  function build(){
    candles=[];var n=Math.max(1,Math.floor(W/16)),p=H*.62,seed=7;
    function rnd(){seed=(seed*9301+49297)%233280;return seed/233280}
    for(var i=0;i<n;i++){
      var o=p,d=(rnd()-.47)*H*.05;p=Math.max(H*.2,Math.min(H*.7,p-d-(H*.004)));
      candles.push({o:o,c:p,h:Math.min(o,p)-rnd()*H*.03,l:Math.max(o,p)+rnd()*H*.03});
    }
  }
  function draw(){
    x.clearRect(0,0,W,H);
    var up=css('--up'),dn=css('--down'),step=W/candles.length;
    x.globalAlpha=.5;
    for(var i=0;i<candles.length;i++){
      var k=candles[i],col=k.c<=k.o?up:dn,cx=i*step+step/2,bw=Math.max(3,step*.55);
      x.strokeStyle=col;x.fillStyle=col;x.lineWidth=1.5;
      x.beginPath();x.moveTo(cx,k.h);x.lineTo(cx,k.l);x.stroke();
      x.fillRect(cx-bw/2,Math.min(k.o,k.c),bw,Math.max(2,Math.abs(k.c-k.o)));
    }
    x.globalAlpha=1;
  }
  function advance(){
    var last=candles[candles.length-1],o=last.c,delta=(Math.random()-.5)*H*.035;
    var close=Math.max(H*.2,Math.min(H*.7,o+delta));
    candles.shift();
    candles.push({o:o,c:close,h:Math.min(o,close)-Math.random()*H*.025,l:Math.max(o,close)+Math.random()*H*.025});
  }
  function start(){size();build();draw()}
  start();
  if(!reduce)setInterval(function(){if(document.hidden)return;advance();draw()},450);
  var t;addEventListener('resize',function(){clearTimeout(t);t=setTimeout(function(){size();build();draw()},150)});
  matchMedia('(prefers-color-scheme:dark)').addEventListener('change',draw);
})();
(function(){
  var WA=document.body.getAttribute('data-whatsapp-number')||'';
  var d=document.getElementById('cd');
  if(WA){document.querySelectorAll('[data-whatsapp]').forEach(function(link){link.href='https://wa.me/'+WA+'?text='+encodeURIComponent('Hello Bevan, I found your portfolio.')})}
  else{document.querySelectorAll('[data-whatsapp]').forEach(function(link){link.removeAttribute('href');link.setAttribute('aria-disabled','true');link.style.opacity='.55'});document.getElementById('cws').textContent='Number coming soon'}
  document.querySelectorAll('[data-contact]').forEach(function(b){b.addEventListener('click',function(){d.showModal()})});
  document.getElementById('cx').addEventListener('click',function(){d.close()});
  d.addEventListener('click',function(e){if(e.target===d)d.close()});
})();
