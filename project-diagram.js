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
else if(k==="react"){["Pregunta","Thought","Action","Observation","Respuesta"].forEach(function(t,i){N.push([10+i*152,108,110,t,i*1.04]);if(i<4)E.push("M"+(120+i*152)+" 130H"+(162+i*152))});
E.push("M521 108C521 20 217 20 217 108");
D=[["M10 130H728",6,0],["M521 108C521 20 217 20 217 108",3,1.5]];
X='<text x="385" y="22" style="fill:#878787;font-size:12px">Razonar → actuar → observar, hasta tener respuesta</text>'}
else if(k==="plan"){Hh=240;N=[[10,73,100,"Objetivo",0],[150,73,110,"Planner",.8],[520,73,110,"Replanner",3.2],[660,73,100,"Respuesta",4.2]];
E=["M110 95H150","M630 95H660","M575 117C575 235 205 235 205 117"];
["Paso 1","Paso 2","Paso 3"].forEach(function(t,i){var y=10+i*63,c=y+22;
N.push([340,y,110,t,1.6+i*.5]);E.push("M260 95C300 95 300 "+c+" 340 "+c);E.push("M450 "+c+"C490 "+c+" 490 95 520 95");
D.push(["M10 95H150C300 95 300 "+c+" 340 "+c+"H450C490 "+c+" 490 95 520 95H760",6,i*1.5])});
D.push(["M575 117C575 235 205 235 205 117",3,1]);
X='<text x="385" y="232" style="fill:#878787;font-size:12px">Si un paso falla o cambia el contexto, se replanifica</text>'}

else if(k==="tot"){Hh=290;N=[[10,123,100,"Problema",0],[150,123,120,"Generador",.8],[470,123,120,"Evaluador",3.2],[640,123,120,"Mejor ruta",4.2]];E=["M110 145H150","M590 145H640"];
["Pensamiento A","Pensamiento B","Pensamiento C"].forEach(function(t,i){var y=20+i*103,c=y+22;
N.push([310,y,120,t,1.6+i*.6]);E.push("M270 145C290 145 290 "+c+" 310 "+c);E.push("M430 "+c+"C455 "+c+" 455 145 470 145");
D.push(["M10 145H150H270C290 145 290 "+c+" 310 "+c+"H430C455 "+c+" 455 145 470 145H760",6,i*1.5])});
X='<text x="530" y="200" style="fill:#878787;font-size:12px">Poda de ramas débiles; se expande la mejor</text>'}
else return "";
var s='<svg class="dg" viewBox="0 0 '+W+" "+Hh+'" role="img" aria-label="Diagrama animado de la arquitectura">';
E.forEach(function(d){s+='<path class="ln" d="'+d+'"/>'});
N.forEach(function(n){s+='<g><rect x="'+n[0]+'" y="'+n[1]+'" width="'+n[2]+'" height="44" rx="12" style="animation-delay:'+n[4]+'s"/><text x="'+(n[0]+n[2]/2)+'" y="'+(n[1]+22)+'">'+n[3]+"</text></g>"});
D.forEach(function(d){s+='<circle r="4"><animateMotion dur="'+d[1]+'s" begin="'+d[2]+'s" repeatCount="indefinite" path="'+d[0]+'"/></circle>'});
return s+X+"</svg>"}
window.renderProjectDiagram=renderProjectDiagram;
})();
