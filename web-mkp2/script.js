const io=new IntersectionObserver(es=>{es.forEach((e,i)=>{if(e.isIntersecting){e.target.style.transitionDelay=(i%4)*80+'ms';e.target.classList.add('visible');io.unobserve(e.target)}})},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const nav=document.getElementById('mainNav');
const onScroll=()=>nav.classList.toggle('scrolled',window.scrollY>40);
window.addEventListener('scroll',onScroll);onScroll();
document.getElementById('hamburger').addEventListener('click',()=>nav.classList.toggle('menu-open'));
const carrusel=document.getElementById('carrusel'),dots=document.querySelectorAll('.carrusel__dot');
if(carrusel&&dots.length){const w=()=>(carrusel.querySelector('.carrusel__item')?.offsetWidth||280)+12;
carrusel.addEventListener('scroll',()=>{const i=Math.round(carrusel.scrollLeft/w());dots.forEach((d,j)=>d.classList.toggle('active',j===i))});
dots.forEach((d,i)=>d.addEventListener('click',()=>carrusel.scrollTo({left:i*w(),behavior:'smooth'})))}
const lb=document.getElementById('lightbox');
if(lb){const li=document.getElementById('lightboxImg'),close=()=>lb.classList.remove('open');
document.querySelectorAll('.galeria__cell,.carrusel__item').forEach(c=>c.addEventListener('click',()=>{const im=c.querySelector('img');if(im){li.src=im.src;lb.classList.add('open')}}));
document.getElementById('lightboxClose').addEventListener('click',close);
lb.addEventListener('click',e=>{if(e.target===lb)close()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')close()})}
