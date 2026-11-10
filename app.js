const $=s=>document.querySelector(s),R=$('#res');
const F=[["maxresdefault","jpg","Максимальное (Full HD / HD)","1280×720"],["sddefault","jpg","Стандартное SD","640×480"],["hqdefault","jpg","Высокое HQ","480×360"],["mqdefault","jpg","Среднее MQ","320×180"],["default","jpg","Миниатюра","120×90"],["maxresdefault","webp","WebP максимальное","1280×720"],["sddefault","webp","WebP SD","640×480"],["hqdefault","webp","WebP HQ","480×360"],["mqdefault","webp","WebP MQ","320×180"],["hq1","jpg","Кадр из видео №1 (HQ)","480×360"],["hq2","jpg","Кадр из видео №2 (HQ)","480×360"],["hq3","jpg","Кадр из видео №3 (HQ)","480×360"],["1","jpg","Кадр №1 (мини)","120×90"],["2","jpg","Кадр №2 (мини)","120×90"],["3","jpg","Кадр №3 (мини)","120×90"]];
const getId=u=>{u=u.trim();const m=u.match(/(?:v=|youtu\.be\/|shorts\/|embed\/|live\/|\/v\/)([\w-]{11})/);return m?m[1]:/^[\w-]{11}$/.test(u)?u:null};
const url=(id,n,e)=>`https://i.ytimg.com/${e=='webp'?'vi_webp':'vi'}/${id}/${n}.${e}`;
function show(id){save(id);R.innerHTML='';F.forEach(([n,e,t,s])=>{const u=url(id,n,e),c=document.createElement('article');c.className='card';
c.innerHTML=`<div class="im"><img loading="lazy" alt="Обложка YouTube ${s} ${e.toUpperCase()}" src="${u}"></div><div class="i"><b>${t}</b><small>${s} · ${e.toUpperCase()}</small><small class="st"></small><div class="row"><a class="btn dl" href="${u}" target="_blank" rel="noopener" download>Скачать</a><button class="btn s cp" type="button">Ссылка</button></div></div>`;
const im=c.querySelector('img'),st=c.querySelector('.st');
im.onload=()=>{st.textContent=`Реально: ${im.naturalWidth}×${im.naturalHeight}`;if(im.naturalWidth<=120&&!/^(default|\d)$/.test(n)){c.classList.add('miss');st.textContent='Такого размера у видео нет'}};
im.onerror=()=>{im.parentNode.textContent='Превью не загрузилось (возможно, YouTube заблокирован). Кнопка «Скачать» всё равно работает — откройте ссылку напрямую.'};
c.querySelector('.dl').onclick=ev=>{ev.preventDefault();fetch(u).then(r=>{if(!r.ok)throw 0;return r.blob()}).then(b=>{const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=`youtube-${id}-${n}.${e}`;a.click()}).catch(()=>window.open(u,'_blank'))};
c.querySelector('.cp').onclick=ev=>{navigator.clipboard&&navigator.clipboard.writeText(u).then(()=>ev.target.textContent='Скопировано ✓')};
R.appendChild(c)});R.scrollIntoView({behavior:'smooth'})}
$('#f').onsubmit=e=>{e.preventDefault();const id=getId($('#u').value);$('#err').textContent=id?'':'Не удалось найти ID видео. Вставьте полную ссылку на YouTube.';if(id)show(id)};
const K='ytp_hist',HB=$('#hist'),HL=$('#hl');
const ld=()=>{try{return JSON.parse(localStorage.getItem(K))||[]}catch(e){return[]}};
function save(id){try{const h=ld().filter(x=>x!==id);h.unshift(id);localStorage.setItem(K,JSON.stringify(h.slice(0,24)))}catch(e){}rh()}
function rh(){const h=ld();HB.hidden=!h.length;HL.innerHTML='';h.forEach(id=>{const b=document.createElement('button');b.type='button';b.className='hi';b.setAttribute('aria-label','Открыть обложки видео '+id);b.innerHTML=`<img loading="lazy" alt="Обложка из истории" src="${url(id,'mqdefault','jpg')}">`;b.onclick=()=>{$('#u').value='https://youtu.be/'+id;show(id)};HL.appendChild(b)})}
$('#hc').onclick=()=>{try{localStorage.removeItem(K)}catch(e){}rh()};rh();
const q=new URLSearchParams(location.search).get('v');if(q&&getId(q)){$('#u').value=q;show(getId(q))};
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||
[]).push(arguments)};
m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)
[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym")
ym(114162571, "init", {
id:114162571,
clickmap:true,
trackLinks:true,
accurateTrackBounce:true
});
