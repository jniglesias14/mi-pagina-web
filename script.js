(function(){
var SRC="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
var $=function(s){return document.querySelector(s)},$$=function(s){return [].slice.call(document.querySelectorAll(s))};
var tg=function(a){return a.map(function(t){return '<span class="tag">'+t+'</span>'}).join("")};
var ul=function(a){return '<ul>'+a.map(function(x){return '<li>'+x+'</li>'}).join("")+'</ul>'};
$$("[data-t]").forEach(function(e){e.innerHTML=tg(e.dataset.t.split(","))});

// ---- datos de proyectos ----
var P=window.PROJECTS;
var F=[["agent","c7","linear-gradient(135deg,#1c2b3a,#4E85BF 60%,#0d1218)","Arquitectura de agente inteligente basada en LLMs y LangGraph capaz de interpretar objetivos, planificar acciones, mantener el contexto y utilizar herramientas externas para resolver tareas de forma autónoma.","★ Proyecto destacado · Ver arquitectura del agente"],
["erp","c5","linear-gradient(160deg,#2b2b2b,#89AACC 70%,#111)","Sistema inteligente integrado con un ERP que utiliza LLMs, agentes y LangGraph para interpretar lenguaje natural, ejecutar herramientas y automatizar operaciones reales sobre pedidos y procesos empresariales.","Asistente clásico · Ver arquitectura y sistema completo"],
["rag","c5","linear-gradient(200deg,#3a2a22,#c08a62 60%,#120d0a)",P.rag.d[0],"Ver arquitectura RAG"],
["f1","c7","linear-gradient(120deg,#122019,#4f8a6c 55%,#0a0f0c)",P.f1.d[0],"Trabajo de Fin de Máster"]];
var fe=$("#feat");
var files={agent:"proyecto-ai-agent.html",erp:"proyecto-erp-order-assistant.html",rag:"proyecto-rag-document-assistant.html",f1:"proyecto-formula-1.html"};
F.forEach(function(f){var p=P[f[0]];var b=document.createElement("a");b.className="card rev "+f[1];b.href=files[f[0]];
b.innerHTML='<div class="bg" style="background:'+f[2]+'"></div><span class="cat">'+p.cat+'</span><h3 class="serif">'+p.t+'</h3><p>'+f[3]+'</p><div class="tags">'+tg(p.tech)+'</div><span class="more">'+f[4]+' →</span>';
fe.appendChild(b)});
var M=[["algoritmos","AI SYSTEM","Algoritmos Agénticos","Implementación de algoritmos agénticos (ReAct, Plan-and-Execute, Tree of Thoughts y Multi-Agent) con sus arquitecturas, en notebooks reproducibles.","Python · LangGraph · LLMs · FastAPI · Jupyter"],
["chat","NLP / AI","Support Chatbot","Motor conversacional de IA para clasificar intenciones, responder en tiempo real e integrarse con aplicaciones empresariales.","Python · FastAPI · PyTorch · BERT · PHP · MySQL"],
["vacation","WEB","Vacation Management System","Plataforma para solicitudes, aprobaciones y planificación de vacaciones con control de disponibilidad e informes para RRHH.","PHP · CodeIgniter · MySQL · JavaScript"],
["tasks","WEB","Employee Task Management System","Sistema para asignar tareas, controlar prioridades y fechas límite y monitorizar el trabajo de equipos.","PHP · CodeIgniter · MySQL · ERP"],
["docs","WEB","Congress Documentation Management System","Gestión centralizada y segura de documentación, versiones, permisos y procesos de congresos y eventos.","PHP · CodeIgniter · MySQL"],
["mobile","MOBILE","Mobile Threat Analysis Platform","Aplicación Android para visualizar análisis de seguridad, comparar riesgos y procesar APKs.","Kotlin · Android SDK · APIs · MySQL"],
["importer","AUTOMATION","ERP Data Import Automation Platform","Automatización de cargas masivas de Excel a ERP con validación, transformación y trazabilidad.","PHP · CodeIgniter · Excel · ERP"]];
var miniFiles={algoritmos:"proyecto-algoritmos-agenticos.html",chat:"proyecto-support-chatbot.html",vacation:"proyecto-vacaciones.html",tasks:"proyecto-gestion-tareas.html",docs:"proyecto-gestion-documentacion.html",mobile:"proyecto-app-uva.html",importer:"proyecto-importador-erp.html"};
$("#mini").innerHTML=M.map(function(m){return '<a class="rev" href="'+miniFiles[m[0]]+'"><span class="cat">'+m[1]+'</span><h4>'+m[2]+'</h4><p>'+m[3]+'</p><p style="margin-top:10px;color:#c8c8c8">'+m[4]+'</p></a>'}).join("");

// ---- diagramas animados ----
function dg(k){return window.renderProjectDiagram(k)}
// ---- modal ----
function open(k){var p=P[k],h='<button class="x" aria-label="Cerrar" onclick="document.getElementById(\'dlg\').close()">×</button><p class="eyebrow">'+p.cat+'</p><h2 class="serif">'+p.t+'</h2>';
h+='<h4>Descripción</h4>'+p.d.map(function(x){return '<p>'+x+'</p>'}).join("");
if(p.obj)h+='<h4>Objetivo del proyecto</h4>'+ul(p.obj);
if(p.roles)h+='<h4>Roles dentro del proyecto</h4>'+p.roles.map(function(r){return '<div class="rl"><b>'+r[0]+'</b>'+ul(r[1])+'</div>'}).join("");
if(p.arch)h+='<h4>Arquitectura</h4><p>'+p.arch+'</p>'+dg(k)+'<div class="flow">'+p.steps.map(function(s){return '<div><b>'+s[0]+'</b> — '+s[1]+'</div>'}).join("")+'</div>';
if(p.diagrams)h+=p.diagrams.map(function(d){return '<h4>'+d[0]+'</h4>'+dg(d[1])+(d[2]?'<p><a href="'+d[2]+'" target="_blank" rel="noopener">Ver código en GitHub ↗</a></p>':'')}).join("");
if(p.flow)h+='<h4>Flujo de ejecución</h4>'+ul(p.flow);
h+='<h4>Tecnologías</h4><div class="tags" style="margin-top:0">'+tg(p.tech)+'</div>';
if(p.fn)h+='<h4>Funcionalidades</h4>'+ul(p.fn);
if(p.uses)h+='<h4>Casos de uso</h4>'+ul(p.uses);
if(p.ext)h+='<h4>Arquitectura extensible</h4><p>'+p.ext+'</p>';
if(p.gal)h+='<h4>Galería del proyecto</h4><p>Capturas del funcionamiento del sistema. Aquí irán tus imágenes reales.</p><div class="gal">'+p.gal.map(function(g){return '<div>'+g+'</div>'}).join("")+'</div>';
if(p.links)h+='<h4>Proyecto</h4><ul>'+p.links.map(function(l){return '<li><a href="'+l[1]+'" target="_blank" rel="noopener">'+l[0]+' ↗</a></li>'}).join("")+'</ul>';
$("#dc").innerHTML=h;$("#dlg").showModal()}
$("#dlg").addEventListener("click",function(e){if(e.target===this)this.close()});

// ---- habilidades ----
var S=[["Lenguajes",[["Python","Avanzado"],["Java","Intermedio"],["PHP","Avanzado"],["Kotlin","Avanzado"],["Dart / Flutter","Intermedio"],["HTML / CSS / JS","Avanzado"]]],
["Bases de datos",[["MySQL","Avanzado"],["SQLite","Avanzado"],["Oracle SQL","Intermedio"],["Firebase","Intermedio"]]],
["IA & Data",[["Machine Learning","Avanzado"],["LLM Applications","Avanzado"],["AI Agents","Avanzado"],["LangGraph","Avanzado"],["RAG","Avanzado"],["LangChain","Avanzado"],["Deep Learning","Intermedio-Alto"],["NLP","Avanzado"],["Computer Vision","Intermedio"],["Pandas / NumPy","Avanzado"]]],
["Arquitectura & herramientas",[["AWS","En preparación"],["FastAPI",""],["APIs REST",""],["Tool Calling",""],["System Design",""],["Arquitectura backend",""],["Git / GitHub",""],["CodeIgniter",""],["ERPs",""]]],
["Soft skills",[["Autonomía",""],["Resolución de problemas",""],["Pensamiento analítico",""],["Adaptabilidad",""],["Trabajo en equipo",""],["Comunicación técnica",""]]]];
$("#sk").innerHTML=S.map(function(g){return '<div class="rev"><h3 class="serif">'+g[0]+'</h3><ul>'+g[1].map(function(i){return '<li>'+i[0]+'<span>'+i[1]+'</span></li>'}).join("")+'</ul></div>'}).join("");

// ---- video ----
$$("[data-hls]").forEach(function(v){try{if(window.Hls&&Hls.isSupported()){var h=new Hls();h.loadSource(SRC);h.attachMedia(v)}else if(v.canPlayType("application/vnd.apple.mpegurl")){v.src=SRC}}catch(e){}});
// ---- loader ----
var words=["Diseñar","Crear","Automatizar"],wi=0,lw=$("#lw");
var wt=setInterval(function(){wi=(wi+1)%3;lw.style.opacity=0;lw.style.transform="translateY(20px)";setTimeout(function(){lw.textContent=words[wi];lw.style.transition="none";lw.style.transform="translateY(-20px)";void lw.offsetWidth;lw.style.transition="all .4s";lw.style.opacity=1;lw.style.transform="none"},200)},900);
var t0=performance.now();
function tick(n){var p=Math.min((n-t0)/2700,1),c=Math.round(p*100);$("#lc").textContent=String(c).padStart(3,"0");$("#lb2").style.transform="scaleX("+c/100+")";
if(p<1)requestAnimationFrame(tick);else setTimeout(function(){clearInterval(wt);var l=$("#loader");l.style.opacity=0;setTimeout(function(){l.remove()},500);enter()},400)}
requestAnimationFrame(tick);
function enter(){if(!window.gsap)return;gsap.timeline({defaults:{ease:"power3.out"}}).fromTo(".name-reveal",{opacity:0,y:50},{opacity:1,y:0,duration:1.2},.1).fromTo(".blur-in",{opacity:0,filter:"blur(10px)",y:20},{opacity:1,filter:"blur(0px)",y:0,duration:1,stagger:.1},.3)}
if(window.gsap)gsap.set([".name-reveal",".blur-in"],{opacity:0});
var roles=["agentes de IA","sistemas RAG","arquitecturas LLM","APIs con FastAPI"],ri=0,re=$("#role");
setInterval(function(){ri=(ri+1)%4;var n=re.cloneNode();n.textContent=roles[ri];re.replaceWith(n);re=n},2200);
// ---- espectáculo ----
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
// red neuronal interactiva
var cv=$("#net"),cx=cv.getContext("2d"),W=0,H=0,pts=[],mo={x:-999,y:-999},vis=true,hero=$("#home");
function rs(){var r=cv.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);W=r.width;H=r.height;cv.width=W*d;cv.height=H*d;cx.setTransform(d,0,0,d,0,0);var n=Math.min(110,Math.round(W*H/15000));pts=[];for(var i=0;i<n;i++)pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45})}
rs();addEventListener("resize",rs);
hero.addEventListener("mousemove",function(e){var r=cv.getBoundingClientRect();mo.x=e.clientX-r.left;mo.y=e.clientY-r.top});
hero.addEventListener("mouseleave",function(){mo.x=mo.y=-999});
new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(hero);
function draw(){if(vis){cx.clearRect(0,0,W,H);for(var i=0;i<pts.length;i++){var p=pts[i];if(!rm){p.x+=p.vx;p.y+=p.vy}if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
var mx=p.x-mo.x,my=p.y-mo.y,md=Math.sqrt(mx*mx+my*my);if(md<150&&md>1){p.x+=mx/md*.8;p.y+=my/md*.8}
cx.fillStyle="rgba(137,170,204,.85)";cx.beginPath();cx.arc(p.x,p.y,1.6,0,6.3);cx.fill();
for(var j=i+1;j<pts.length;j++){var q=pts[j],dx=p.x-q.x,dy=p.y-q.y,d=Math.sqrt(dx*dx+dy*dy);if(d<125){cx.strokeStyle="rgba(78,133,191,"+(1-d/125)*.5+")";cx.lineWidth=1;cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(q.x,q.y);cx.stroke()}}
if(md<190){cx.strokeStyle="rgba(245,245,245,"+(1-md/190)*.6+")";cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(mo.x,mo.y);cx.stroke()}}}
if(!rm)requestAnimationFrame(draw)}
draw();
// terminal del agente
var tl=["$ agent.run('Crea el pedido del cliente 482 y envíalo por email')","→ plan: [buscar_cliente, crear_pedido, enviar_email]","✓ tool_call: crear_pedido(cliente=482) → OK","✓ tool_call: enviar_email(pdf) → OK","✓ Respuesta final generada"];
var tm=document.createElement("div");tm.className="term blur-in";tm.innerHTML='<div class="tb"><i></i><i></i><i></i></div><pre id="tp"></pre>';$(".hc").appendChild(tm);
var tp=$("#tp"),li=0,ci=0,buf="";
function ty(){if(li>=tl.length){setTimeout(function(){buf="";li=0;ci=0;ty()},3500);return}
var s=tl[li];if(ci<=s.length){tp.textContent=buf+s.slice(0,ci)+"▌";ci++;setTimeout(ty,li===0?32:14)}else{buf+=s+"\n";li++;ci=0;setTimeout(ty,li===1?700:380)}}
if(rm){tp.textContent=tl.join("\n")}else ty();
// marquee de tecnologías
var tk=["Python","LangGraph","LLMs","AI Agents","RAG","LangChain","FastAPI","Tool Calling","PyTorch","NLP","MLOps","AWS","MySQL","Kotlin"],ts="";
for(var k=0;k<2;k++)tk.forEach(function(t){ts+="<span>"+t+"</span><span>✦</span>"});$("#strip").innerHTML=ts;
// brillo del cursor + barra de progreso
addEventListener("mousemove",function(e){document.documentElement.style.setProperty("--gx",e.clientX+"px");document.documentElement.style.setProperty("--gy",e.clientY+"px")},{passive:true});
addEventListener("scroll",function(){var h=document.documentElement.scrollHeight-innerHeight;$("#prog").style.transform="scaleX("+(h>0?scrollY/h:0)+")"},{passive:true});
// tarjetas 3D con foco de luz
$$(".card,.stat,.sk>div,.mini div").forEach(function(el){el.classList.add("tilt");el.addEventListener("mousemove",function(e){var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;el.style.setProperty("--mx",x*100+"%");el.style.setProperty("--my",y*100+"%");if(!rm&&el.classList.contains("in"))el.style.transform="perspective(900px) rotateX("+((.5-y)*6)+"deg) rotateY("+((x-.5)*8)+"deg)"});el.addEventListener("mouseleave",function(){el.style.transform=""})});
// botones magnéticos
$$(".btn").forEach(function(b){b.addEventListener("mousemove",function(e){var r=b.getBoundingClientRect();b.style.transform="translate("+((e.clientX-r.left-r.width/2)*.2)+"px,"+((e.clientY-r.top-r.height/2)*.3)+"px) scale(1.05)"});b.addEventListener("mouseleave",function(){b.style.transform=""})});
// contadores
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var m=e.target.textContent.match(/^(\d+)(.*)$/);if(!m)return;var n=+m[1],t0=performance.now();(function f(t){var p=Math.min((t-t0)/1400,1);e.target.textContent=Math.round(n*(1-Math.pow(1-p,3)))+m[2];if(p<1)requestAnimationFrame(f)})(t0)})},{threshold:.6});
$$(".stat b").forEach(function(b){co.observe(b)});
// ---- transiciones entre secciones ----
$$('#perfil,#experiencia,#proyectos,#formacion,#habilidades').forEach(function(s){s.classList.add('sx')});
var so=new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle('on',e.isIntersecting||e.boundingClientRect.top<0)})},{threshold:.06});
$$('.sx').forEach(function(s){so.observe(s)});
addEventListener('scroll',function(){var y=scrollY;if(y<innerHeight*1.2){var h=$('.hc');h.style.transform='translateY('+y*.25+'px)';h.style.opacity=Math.max(0,1-y/(innerHeight*.8))}},{passive:true});
var wp=document.createElement('div');wp.id='wipe';wp.innerHTML='<span class="serif"></span>';document.body.appendChild(wp);
var NM={'#home':'Inicio','#perfil':'Perfil','#experiencia':'Experiencia','#proyectos':'Proyectos','#formacion':'Formación','#habilidades':'Habilidades','#contacto':'Contacto'},busy=false;
$$('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var id=a.getAttribute('href'),t=id.length>1?$(id):null;if(!t||rm||busy)return;e.preventDefault();busy=true;wp.firstChild.textContent=NM[id]||'';wp.className='in';
setTimeout(function(){var d=document.documentElement;d.style.scrollBehavior='auto';scrollTo(0,t.offsetTop);d.style.scrollBehavior='';wp.className='out';setTimeout(function(){wp.className='';busy=false},700)},600)})});
var pill=$("#pill");addEventListener("scroll",function(){pill.classList.toggle("s",scrollY>100)},{passive:true});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{rootMargin:"0px 0px -80px 0px"});
$$(".rev").forEach(function(e){io.observe(e)});
var mq=$("#mq"),inner="";for(var i=0;i<10;i++)inner+="CONSTRUYENDO EL FUTURO • ";
mq.innerHTML="<span>"+inner+"</span><span>"+inner+"</span>";
if(window.gsap)gsap.to(mq,{xPercent:-50,duration:50,ease:"none",repeat:-1});
var links=$$(".nl[href^='#']"),ids=["home","experiencia","proyectos","formacion","habilidades"];
addEventListener("scroll",function(){var y=scrollY+200,a=null;ids.forEach(function(id){if($("#"+id).offsetTop<=y)a=id});links.forEach(function(l){l.classList.toggle("on",l.getAttribute("href")==="#"+a)})},{passive:true});
})();
