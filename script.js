const GH="https://github.com/Labiba-Rahman-Oroni";
const skills={"Languages":["JavaScript","Python","C++","PHP","SQL","R"],"Frontend":["React.js","HTML5","CSS3","Tailwind CSS","Vite","Responsive Design"],"Backend & Databases":["Node.js","Express.js","REST APIs","MySQL","Authentication","RBAC"],"Tools & Practices":["Git","GitHub","Postman","VS Code","Scrum","Debugging"],"Data & ML":["Pandas","NumPy","Matplotlib","Machine Learning"],"Design":["Canva","Adobe Photoshop","Adobe Illustrator"]};
const projects=[
{n:"NilMoni E-Commerce",c:"Full-stack · Founder project",g:"linear-gradient(135deg,#7c3aed,#be185d)",d:"Full-stack e-commerce website connected to my jewellery business.",t:["React.js","Node.js","Express.js","MySQL"],f:["Product listings","Order processing","Inventory management","Responsive interfaces"],r:"Built and maintain the site; also manage orders, inventory, and digital marketing.",u:GH+"/Nil-Moni",exact:1},
{n:"FBMS",c:"Team project · Full-stack",g:"linear-gradient(135deg,#1d4ed8,#0891b2)",d:"Team-based system for franchise brand assets, marketing campaigns, and branch operations, developed for CSE470 (Software Engineering) at BRAC University.",t:["React.js","Node.js","Express.js","MySQL"],f:["Brand asset management","Campaign management","Branch operations","Backend APIs","RBAC"],r:"Team project for CSE470. This repository is my fork of the team's original project.",u:GH+"/FBMS-franchise-brand-management-system-",exact:1},
{n:"MIMS",c:"Healthcare · Database-driven",g:"linear-gradient(135deg,#0f766e,#2563eb)",d:"Database-driven healthcare application for doctor appointments, prescriptions, and patient records.",t:["JavaScript","Database Systems"],f:["Doctor appointments","Prescriptions","Patient records"],r:"Database-driven healthcare management project covering appointments, prescriptions, and patient records.",u:GH+"/MIMS",exact:1},
{n:"Disease Type Prediction",c:"Machine learning",g:"linear-gradient(135deg,#6d28d9,#2563eb)",d:"CSE422 AI project: a multiclass disease-category (A/B/C) classifier comparing several algorithms.",t:["Python","Machine Learning","Jupyter Notebook"],f:["KNN","Decision Trees","Logistic Regression","Naive Bayes","Neural Networks"],r:"CSE422 AI project comparing several classifiers to predict patient disease types.",u:GH+"/Disease-Type-Prediction-ML",exact:1},
{n:"BookLoop",c:"Marketplace concept",g:"linear-gradient(135deg,#b45309,#7c3aed)",d:"Online marketplace concept for exchanging and trading books.",t:["JavaScript"],f:["Concept: book exchange and trading"],r:"Smart online book exchange and marketplace project.",u:GH+"/BookLoop",exact:1},
{n:"Tic-Tac-Toe",c:"Python · Practice project",g:"linear-gradient(135deg,#334155,#0e7490)",d:"My first fun Python project: a simple, beginner-friendly Tic-Tac-Toe game created while learning Python and practising basic coding logic.",t:["Python"],f:["Game logic practice"],r:"Personal practice project, kept in my MINI_PROJECTS repository.",u:GH+"/MINI_PROJECTS",exact:1},
{n:"Face Recognition Project",c:"Computer vision",g:"linear-gradient(135deg,#0e7490,#4338ca)",d:"A face recognition project. The repository is public but no code has been uploaded yet.",t:[],f:["Face recognition"],r:"Repository created; code is still to be uploaded.",u:GH+"/face-recognition-project"},
{n:"GCI World Assignment",c:"Data science · Coursework",g:"linear-gradient(135deg,#be123c,#4338ca)",d:"Assignment for the Global Consumer Intelligence (GCI World) data science course, University of Tokyo Matsuo-Iwasawa Laboratory.",t:["Jupyter Notebook"],f:["Course assignment notebook"],r:"Coursework submitted during the (in-progress) GCI World course.",u:GH+"/GCI-World-Assignment"},
{n:"Number Guessing Game",c:"Python · Practice project",g:"linear-gradient(135deg,#0f766e,#4338ca)",d:"Python number-guessing game with balanced difficulty: a 1–100 range with 7 attempts, which a binary-search strategy can always solve.",t:["Python"],f:["Range 1–100 with 7 attempts","Difficulty balanced around binary search","Easy mode with a smaller range"],r:"Personal Python project in my GitHub repositories.",u:GH+"/Number-Guessing-Game",exact:1},
{n:"CSE423 Computer Graphics",c:"Coursework · Python",g:"linear-gradient(135deg,#1e3a8a,#7c3aed)",d:"Coursework for CSE423 (Computer Graphics) at BRAC University, including three assignments, project work, source code, implementations, and documentation.",t:["Python"],f:["Three assignments","Project work","Source code and implementations","Related documentation"],r:"Course work for CSE423 at BRAC University.",u:GH+"/CSE423-Computer-Graphics-Coursework",exact:1},
{n:"JATRIVA",c:"AI travel planning · Web",g:"linear-gradient(135deg,#0369a1,#16a34a)",d:"AI-powered global travel planning platform that helps travellers discover destinations, create personalised itineraries, and manage travel budgets for domestic and international trips.",t:["CSS"],f:["Destination discovery","Personalised itineraries","Travel budget management","Domestic and international trips"],r:"Project in my GitHub repositories.",u:GH+"/JATRIVA",exact:1}];
const T=(c,n)=>Array(n).fill(`<i class="t ${c}"></i>`).join(""),C=a=>a.map(x=>`<span class="c">${x}</span>`).join(""),X="background:rgba(255,255,255,.1);border-radius:6px;height:34px;display:grid;place-items:center";
const mk={"NilMoni E-Commerce":`<div class="mw"><i class="w6"></i>${T("g",3)}<i class="w4"></i><i class="w8"></i></div>`,
"FBMS":`<div class="mw"><i class="t v" style="flex:0 0 18%;height:92px"></i><div style="flex:1;display:grid;gap:6px;align-content:start"><i class="w6"></i><i class="t"></i><i class="w8"></i></div></div>`,
"MIMS":`<div class="mw"><i class="w4"></i><i class="r"></i><i class="r"></i><i class="r"></i><i class="r"></i></div>`,
"Disease Type Prediction":`<div class="mw">${C(["Data","Preprocess","Train","Compare"])}${C(["KNN","Trees","LogReg","NB","NN"])}</div>`,
"BookLoop":`<div class="mw"><i style="height:12px;border-radius:8px"></i>${T("a",4)}</div>`,
"Tic-Tac-Toe":`<div class="mw" style="display:grid;grid-template-columns:repeat(3,40px);gap:4px;justify-content:center;align-content:center;font:700 1.1rem monospace">${["X","O","X","","X","O","O","","X"].map(x=>`<b style="${X}">${x}</b>`).join("")}</div>`,
"Face Recognition Project":`<div class="mw" style="justify-content:center;align-content:center"><i style="flex:0 0 60px;height:60px;border-radius:50%;border:2px dashed #67e8f9;background:none"></i></div>`,
"GCI World Assignment":`<div class="mw">${C(["Notebook","Analysis"])}<i class="w8"></i><i class="w6"></i><i class="t"></i></div>`,
"Number Guessing Game":`<div class="mw">${C(["1–100","7 attempts"])}<i class="w6"></i><i class="w4"></i></div>`,
"CSE423 Computer Graphics":`<div class="mw">${C(["Assignment 1","Assignment 2","Assignment 3"])}<i class="t"></i><i class="w8"></i></div>`,
"JATRIVA":`<div class="mw">${C(["Itinerary","Budget"])}${T("g",3)}<i class="w8"></i></div>`};
projects.forEach(p=>p.m=mk[p.n]);
const $=s=>document.querySelector(s);
$("#yr").textContent=new Date().getFullYear();
$("#sk").innerHTML=Object.entries(skills).map(([k,v])=>`<div class="glass"><h3>${k}</h3>${v.map(x=>`<span class="chip">${x}</span>`).join("")}</div>`).join("");
$("#pj").innerHTML=projects.map((p,i)=>`<article class="glass pc" tabindex="0" data-i="${i}" role="button" aria-label="${p.n} details"><div class="pv" style="background:${p.g}"><span class="pl">${p.c.toUpperCase()}</span>${p.m||""}</div><div class="pb"><h3 style="margin:0">${p.n}</h3><p>${p.d}</p><div>${p.t.map(x=>`<span class="chip">${x}</span>`).join("")}</div><div class="row"><span class="btn sm">Details</span>${p.u?`<a class="btn sm" href="${p.u}" target="_blank" rel="noopener">GitHub repo</a>`:`<span class="btn sm" style="opacity:.6">Private repo</span>`}</div></div></article>`).join("");
const dg=$("#dg");
function open(i){const p=projects[i];$("#dgc").innerHTML=`<div class="sub">${p.c.toUpperCase()}</div><h2>${p.n}</h2><p style="color:var(--mut)">${p.d}</p><div>${p.t.map(x=>`<span class="chip">${x}</span>`).join("")}</div><h3>Key features</h3><ul>${p.f.map(x=>`<li>${x}</li>`).join("")}</ul><h3>My contribution</h3><p class="note">${p.r}</p>${p.u?`<p><a class="btn p sm" href="${p.u}" target="_blank" rel="noopener">View on GitHub ↗</a></p>`:""}`;dg.showModal()}
document.querySelectorAll(".pc").forEach(c=>{c.addEventListener("click",e=>{if(!e.target.closest("a"))open(c.dataset.i)});c.addEventListener("keydown",e=>{if(e.key==="Enter")open(c.dataset.i)})});
$("#dx").onclick=()=>dg.close();dg.addEventListener("click",e=>{if(e.target===dg)dg.close()});
// nav
const lk=$("#lk"),bg=$("#bg");bg.onclick=()=>{const o=lk.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
lk.querySelectorAll("a").forEach(a=>a.onclick=()=>lk.classList.remove("open"));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")}),{threshold:.1});document.querySelectorAll(".rv").forEach(x=>io.observe(x));
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)lk.querySelectorAll("a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});document.querySelectorAll("header,section").forEach(s=>so.observe(s));
// typing roles
const roles=["Full-Stack Developer","Software Development Enthusiast","CSE Student","Problem Solver"],rm=matchMedia("(prefers-reduced-motion: reduce)").matches;
if(!rm){let ri=0,ci=roles[0].length,del=true;const el=$("#role");(function t(){const w=roles[ri];ci+=del?-1:1;el.textContent=w.slice(0,ci);let d=del?35:70;if(!del&&ci===w.length){del=true;d=1600}else if(del&&ci===0){del=false;ri=(ri+1)%roles.length;d=300}setTimeout(t,d)})()}
// form
$("#cf").addEventListener("submit",e=>{e.preventDefault();const n=$("#n").value.trim(),m=$("#m").value.trim(),em=$("#e").value.trim();
$("#en").textContent=n?"":"Please enter your name.";$("#ee").textContent=/^\S+@\S+\.\S+$/.test(em)?"":"Please enter a valid email.";$("#em").textContent=m.length>=10?"":"Message should be at least 10 characters.";
if(!n||!/^\S+@\S+\.\S+$/.test(em)||m.length<10){$("#st").className="err";$("#st").textContent="Please fix the highlighted fields.";return}
$("#st").className="err ok";$("#st").textContent="Opening your email app. The message is sent only when you press send there.";
location.href=`mailto:labibarahman.pro@gmail.com?subject=${encodeURIComponent("Portfolio message from "+n)}&body=${encodeURIComponent(m+"\n\nReply to: "+em)}`});
// 3D
(function(){const host=$("#scene");let r;try{const c=document.createElement("canvas");if(!(c.getContext("webgl")||c.getContext("experimental-webgl"))||!window.THREE)throw 0;
r=new THREE.WebGLRenderer({antialias:true,alpha:true});}catch(e){$("#fb").style.display="grid";return}
r.setPixelRatio(Math.min(devicePixelRatio,2));host.appendChild(r.domElement);
const s=new THREE.Scene(),cam=new THREE.PerspectiveCamera(45,1,.1,100);cam.position.set(0,.6,7);
s.add(new THREE.AmbientLight(0x6b7cff,.6));const k=new THREE.PointLight(0x22d3ee,2.2,30);k.position.set(4,4,5);s.add(k);const k2=new THREE.PointLight(0x8b5cf6,1.8,30);k2.position.set(-5,-2,3);s.add(k2);
const g=new THREE.Group();s.add(g);
const mm=(c,m=.8,ro=.3)=>new THREE.MeshStandardMaterial({color:c,metalness:m,roughness:ro});
const base=new THREE.Mesh(new THREE.BoxGeometry(2.6,.12,1.7),mm(0x1b2442));base.position.y=-.5;g.add(base);
const scr=new THREE.Group();scr.position.set(0,-.44,-.85);scr.rotation.x=-.22;g.add(scr);
const lid=new THREE.Mesh(new THREE.BoxGeometry(2.6,1.6,.08),mm(0x151d38));lid.position.y=.8;scr.add(lid);
const dsp=new THREE.Mesh(new THREE.PlaneGeometry(2.4,1.42),new THREE.MeshBasicMaterial({color:0x0b1a3a}));dsp.position.set(0,.8,.05);scr.add(dsp);
[[.3,0x22d3ee],[.1,0x3b82f6],[-.1,0x8b5cf6],[-.3,0x22d3ee]].forEach(([y,c],i)=>{const b=new THREE.Mesh(new THREE.PlaneGeometry(1.0+i%2*.5,.07),new THREE.MeshBasicMaterial({color:c}));b.position.set(-.5+i%2*.2,.8+y,.06);scr.add(b)});
const keys=new THREE.Mesh(new THREE.PlaneGeometry(2.2,.9),new THREE.MeshStandardMaterial({color:0x0e1530,metalness:.5,roughness:.6}));keys.rotation.x=-Math.PI/2;keys.position.set(0,-.43,.1);g.add(keys);
const rings=[];[[2.4,.012,0x22d3ee,.5],[3.0,.01,0x8b5cf6,-1.1],[3.6,.008,0x3b82f6,.2]].forEach(([R,t,c,tilt])=>{const m=new THREE.Mesh(new THREE.TorusGeometry(R,t,8,120),new THREE.MeshBasicMaterial({color:c,transparent:true,opacity:.6}));m.rotation.x=Math.PI/2+tilt*.4;m.rotation.y=tilt;g.add(m);rings.push(m)});
const sh=[new THREE.OctahedronGeometry(.22),new THREE.IcosahedronGeometry(.2),new THREE.TorusKnotGeometry(.14,.05,40,8),new THREE.BoxGeometry(.28,.28,.28)];const fl=[];
sh.forEach((geo,i)=>{const m=new THREE.Mesh(geo,mm([0x22d3ee,0x8b5cf6,0x3b82f6,0x67e8f9][i],.6,.25));m.userData={a:i*1.6,R:2.6+i*.25,y:(i-1.5)*.55};g.add(m);fl.push(m)});
const N=400,pa=new Float32Array(N*3);for(let i=0;i<N*3;i++)pa[i]=(Math.random()-.5)*14;const pg=new THREE.BufferGeometry();pg.setAttribute("position",new THREE.BufferAttribute(pa,3));
const pts=new THREE.Points(pg,new THREE.PointsMaterial({size:.035,color:0x93c5fd,transparent:true,opacity:.8}));s.add(pts);
let mx=0,my=0;addEventListener("pointermove",e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
function rs(){const w=host.clientWidth,h=host.clientHeight;r.setSize(w,h);cam.aspect=w/h;cam.updateProjectionMatrix()}rs();addEventListener("resize",rs);
let vis=true;new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(host);const clk=new THREE.Clock();
(function loop(){requestAnimationFrame(loop);if(!vis)return;const t=rm?0:clk.getElapsedTime();
g.rotation.y+=((mx*.8+Math.sin(t*.4)*.25)-g.rotation.y)*.05;g.rotation.x+=((my*.4)-g.rotation.x)*.05;g.position.y=Math.sin(t)*.12;
rings.forEach((m,i)=>m.rotation.z=t*(.15+i*.08));fl.forEach(m=>{const u=m.userData,a=u.a+t*.5;m.position.set(Math.cos(a)*u.R,u.y+Math.sin(t+u.a)*.15,Math.sin(a)*u.R);m.rotation.x=t;m.rotation.y=t*.7});
pts.rotation.y=t*.02;r.render(s,cam)})();})();
