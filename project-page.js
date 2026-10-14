(function(){
var p=window.PROJECTS[document.body.dataset.project];
var root=document.getElementById("project-content");
function esc(value){return String(value).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function list(items){return "<ul>"+items.map(function(item){return "<li>"+esc(item)+"</li>"}).join("")+"</ul>"}
function imageSection(title,images){return "<h4>"+esc(title)+"</h4><div class=\"project-gallery\">"+images.map(function(image){return '<figure><img src="'+esc(image[0])+'" alt="'+esc(image[1])+'" loading="lazy" decoding="async"><figcaption>'+esc(image[2])+"</figcaption></figure>"}).join("")+"</div>"}
if(!p||!root){console.error("No se pudo cargar el contenido del proyecto.");return}
document.title=p.t+" — Juan Iglesias González";
var content='<a class="back" href="index%20.html#proyectos">← Volver a proyectos</a><p class="eyebrow">'+esc(p.cat)+'</p><h1 class="serif">'+esc(p.t)+'</h1>';
content+='<h4>Descripción</h4>'+p.d.map(function(item){return "<p>"+esc(item)+"</p>"}).join("");
if(p.obj)content+="<h4>Objetivo del proyecto</h4>"+list(p.obj);
if(p.roles)content+='<h4>Roles dentro del proyecto</h4>'+p.roles.map(function(role){return '<div class="rl"><b>'+esc(role[0])+"</b>"+list(role[1])+"</div>"}).join("");
if(p.arch)content+='<h4>Arquitectura</h4><p>'+esc(p.arch)+"</p>"+window.renderProjectDiagram(document.body.dataset.project);
if(p.architectureImages)content+=imageSection("Arquitectura visual",p.architectureImages);
if(p.steps)content+='<div class="flow">'+p.steps.map(function(step){return "<div><b>"+esc(step[0])+"</b> — "+esc(step[1])+"</div>"}).join("")+"</div>";
if(p.flow)content+="<h4>Flujo de ejecución</h4>"+list(p.flow);
content+='<h4>Tecnologías</h4><div class="tags">'+p.tech.map(function(tech){return '<span class="tag">'+esc(tech)+"</span>"}).join("")+"</div>";
if(p.fn)content+="<h4>Funcionalidades</h4>"+list(p.fn);
if(p.uses)content+="<h4>Casos de uso</h4>"+list(p.uses);
if(p.ext)content+="<h4>Arquitectura extensible</h4><p>"+esc(p.ext)+"</p>";
if(p.resultImages)content+=imageSection("Resultados e imágenes",p.resultImages);
if(p.links)content+='<h4>Proyecto</h4><ul>'+p.links.map(function(link){return '<li><a href="'+esc(link[1])+'" target="_blank" rel="noopener noreferrer">'+esc(link[0])+" ↗</a></li>"}).join("")+"</ul>";
root.innerHTML=content;
var lightbox=document.createElement("dialog");
lightbox.className="image-lightbox";
lightbox.setAttribute("aria-label","Vista ampliada de imagen");
lightbox.innerHTML='<button class="image-lightbox-close" type="button" aria-label="Cerrar imagen ampliada">×</button><img alt=""><p></p>';
document.body.appendChild(lightbox);
var lightboxImage=lightbox.querySelector("img"),lightboxCaption=lightbox.querySelector("p");
root.addEventListener("click",function(event){
var image=event.target.closest(".project-gallery img");
if(!image)return;
lightboxImage.src=image.currentSrc||image.src;
lightboxImage.alt=image.alt;
lightboxCaption.textContent=image.closest("figure").querySelector("figcaption").textContent;
lightbox.showModal();
});
lightbox.querySelector(".image-lightbox-close").addEventListener("click",function(){lightbox.close()});
lightbox.addEventListener("click",function(event){if(event.target===lightbox)lightbox.close()});
lightbox.addEventListener("keydown",function(event){if(event.key==="Escape"){event.preventDefault();lightbox.close()}});
})();
