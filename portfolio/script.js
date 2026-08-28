// header scroll state
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  // mobile menu
  const burger = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  burger.addEventListener('click', () => mobileMenu.classList.add('open'));
  mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

  // scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:0.15});
  reveals.forEach(el => io.observe(el));

  // lightweight hero particle field (skip on small screens / reduced motion)
  const canvas = document.getElementById('hero-canvas');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (canvas && !reduceMotion && window.innerWidth > 720) {
    const ctx = canvas.getContext('2d');
    let W, H, particles;
    const COLOR = '57,69,43';

    function resize(){
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }
    function init(){
      resize();
      const count = Math.min(70, Math.floor(W*H/16000));
      particles = Array.from({length:count}, () => ({
        x: Math.random()*W, y: Math.random()*H,
        vx: (Math.random()-0.5)*0.25, vy:(Math.random()-0.5)*0.25,
        r: Math.random()*1.8+0.6
      }));
    }
    let mouse = {x:-9999,y:-9999};
    canvas.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top;
    });
    canvas.addEventListener('mouseleave', () => { mouse.x=-9999; mouse.y=-9999; });

    function step(){
      ctx.clearRect(0,0,W,H);
      for(const p of particles){
        p.x += p.vx; p.y += p.vy;
        if(p.x<0||p.x>W) p.vx*=-1;
        if(p.y<0||p.y>H) p.vy*=-1;
        const dx = p.x-mouse.x, dy = p.y-mouse.y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if(dist < 140){
          p.x += dx/dist*0.6; p.y += dy/dist*0.6;
        }
      }
      for(let i=0;i<particles.length;i++){
        for(let j=i+1;j<particles.length;j++){
          const a=particles[i], b=particles[j];
          const d = Math.hypot(a.x-b.x, a.y-b.y);
          if(d < 130){
            ctx.strokeStyle = `rgba(${COLOR},${0.14*(1-d/130)})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
          }
        }
        ctx.fillStyle = `rgba(${COLOR},0.5)`;
        ctx.beginPath(); ctx.arc(particles[i].x, particles[i].y, particles[i].r, 0, Math.PI*2); ctx.fill();
      }
      requestAnimationFrame(step);
    }
    init();
    window.addEventListener('resize', init);
    requestAnimationFrame(step);
  }
