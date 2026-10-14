(function(){
function renderProjectDiagram(k){var N=[],E=[],D=[],X='',W=770,Hh=190;
if(k==="agent"){["Usuario","LLM","Planner","Tools","Evaluación","Respuesta"].forEach(function(t,i){N.push([10+i*130,108,100,t,i*1.04])});
E=["M110 130H140","M240 130H270","M370 130H400","M500 130H530","M630 130H660","M580 108C580 20 190 20 190 108"];
D=[["M10 130H760",6,0],["M580 108C580 20 190 20 190 108",3,1.5]];
X='<text x="385" y="22" style="fill:#878787;font-size:12px">¿Faltan acciones? El agente repite el ciclo</text>'}
else if(k==="erp"){Hh=290;N=[[10,123,100,"Usuario",0],[190,123,130,"Orquestador",.8]];E=["M110 145H190"];
[["Operaciones","ERP · MySQL"],["Predicciones","Modelos ML · BERT"],["Análisis","LLM · Tool Calling"],["Chat","LLM · Conversación"]].forEach(function(d,i){var y=10+i*70,c=y+22;
N.push([400,y,130,d[0],(i*1.5+3.2)%6]);N.push([610,y,150,d[1],(i*1.5+5.3)%6]);
E.push("M320 145C360 145 360 "+c+" 400 "+c);E.push("M530 "+c+"H610");
D.push(["M110 145H320C360 145 360 "+c+" 400 "+c+"H610",6,i*1.5])})}
else return "";
var s='<svg class="dg" viewBox="0 0 '+W+" "+Hh+'" role="img" aria-label="Diagrama animado de la arquitectura">';
E.forEach(function(d){s+='<path class="ln" d="'+d+'"/>'});
N.forEach(function(n){s+='<g><rect x="'+n[0]+'" y="'+n[1]+'" width="'+n[2]+'" height="44" rx="12" style="animation-delay:'+n[4]+'s"/><text x="'+(n[0]+n[2]/2)+'" y="'+(n[1]+22)+'">'+n[3]+"</text></g>"});
D.forEach(function(d){s+='<circle r="4"><animateMotion dur="'+d[1]+'s" begin="'+d[2]+'s" repeatCount="indefinite" path="'+d[0]+'"/></circle>'});
return s+X+"</svg>"}
window.renderProjectDiagram=renderProjectDiagram;
})();
