const defaultDecisions = [
 {id:"high-interest-card",title:"Pay down the high-interest card while preserving our buffer",text:"Keep at least $18,000 in emergency savings and make a defined $750 extra payment to Rewards Credit before reassessing.",next:"Schedule the $750 extra payment, then review the next statement and cash buffer.",done:false},
 {id:"duplicate-streaming",title:"Close the obsolete streaming subscription",text:"Morgan confirmed Harbor Stream Classic is the older duplicate and no longer needed.",next:"Confirm no further charge appears.",done:true},
 {id:"family-trip",title:"Fund the family trip without new card debt",text:"$4,200 is already set aside toward a $6,000 trip target, leaving a $1,800 gap.",next:"Continue the $200 monthly transfer and review the gap in three months.",done:false},
 {id:"emergency-fund",title:"Protect the emergency buffer",text:"$18,750 is currently saved toward a $30,000 emergency-fund target.",next:"Keep the $350 monthly transfer while preserving flexibility for card payoff.",done:false},
 {id:"getting-organized",title:"Choose one clear financial step each week",text:"Use Today to focus on one decision or confirmation at a time instead of trying to organize everything at once.",next:"Review the duplicate subscription completion, then return to the card-payment decision.",done:false}
];
let decisions;
try{decisions=JSON.parse(localStorage.getItem("covarify-brian-decisions"))||structuredClone(defaultDecisions)}catch(e){decisions=structuredClone(defaultDecisions)}
const save=()=>localStorage.setItem("covarify-brian-decisions",JSON.stringify(decisions));

const accountData={
 checking:{title:"Everyday Checking",institution:"Northstar Demo Bank",mask:"1842",balance:"$8,420.56",details:[["Available balance","$7,980.56"],["Last updated","August 30, 2026"],["Role","Primary household cash flow"],["Confidence","Current"]]},
 emergency:{title:"Emergency Savings",institution:"Northstar Demo Bank",mask:"7721",balance:"$18,750.00",details:[["Goal target","$30,000"],["Progress","62.5%"],["Monthly transfer","$350"],["Why it matters","Household security and flexibility"]]},
 travel:{title:"Family Travel Savings",institution:"Northstar Demo Bank",mask:"3380",balance:"$4,200.00",details:[["Goal target","$6,000"],["Remaining gap","$1,800"],["Monthly transfer","$200"],["Uncertainty","Balance timestamp is 7 days old"]]},
 rewards:{title:"Rewards Credit",institution:"Harbor Demo Credit",mask:"4242",balance:"$6,480.32",details:[["Credit limit","$15,000"],["Utilization","43.2%"],["Scenario APR","24.99%"],["Recommended next step","$750 extra payment while preserving $18,000 buffer"]]},
 intro:{title:"Intro Rate Credit",institution:"Harbor Demo Credit",mask:"1881",balance:"$1,225.10",details:[["Credit limit","$8,000"],["Scenario APR","0% promotional"],["Priority","Below high-interest card"],["Caution","Promotion end date must be confirmed"]]},
 mortgage:{title:"Home Mortgage",institution:"Pioneer Demo Lending",mask:"9001",balance:"$287,400.00",details:[["Monthly payment","$2,490"],["Scenario rate","4.125%"],["Status","Current"],["Evidence","Linked synthetic mortgage statement in Vault"]]},
 auto:{title:"Family Auto Loan",institution:"Pioneer Demo Lending",mask:"5510",balance:"$16,850.00",details:[["Monthly payment","$478"],["Scenario rate","5.90%"],["Status","Current"],["Purpose","Family transportation"]]}
};

const docs={
 mortgage:{title:"DEMO Mortgage Statement",rows:[["Household","Carter Demo Household"],["Identifier","DEMO-MTG-9001"],["Servicer","Pioneer Demo Lending"],["Current principal","$287,400.00"],["Monthly payment","$2,490.00"],["Interest rate","4.125%"],["Property location","Example Township, New Jersey"]]},
 insurance:{title:"DEMO Auto Insurance Declarations",rows:[["Household","Carter Demo Household"],["Policy","DEMO-AUTO-POLICY-5510"],["Carrier","Harbor Demo Protection"],["Effective date","August 30, 2026"],["Renewal date","August 30, 2027"],["Annual premium","$2,148.00"],["Covered asset","DEMO family vehicle"]]},
 benefits:{title:"DEMO Employee Benefits Summary",rows:[["Employee","Morgan Carter"],["Employer","DEMO Employer A"],["Plan year","2026"],["Enrollment","Family coverage"],["Medical plan","DEMO-PPO-FAMILY"],["Retirement match","4% after eligibility"],["Member identifier","DEMO-MEMBER-MORGAN"]]}
};

function nav(screen){
 document.querySelectorAll(".screen").forEach(x=>x.classList.toggle("active",x.id==="screen-"+screen));
 document.querySelectorAll(".nav-btn[data-screen]").forEach(x=>x.classList.toggle("active",x.dataset.screen===screen));
 document.querySelector(".app-frame").scrollIntoView({behavior:"smooth",block:"start"});
}
document.querySelectorAll("[data-screen]").forEach(b=>b.addEventListener("click",()=>nav(b.dataset.screen)));
document.querySelectorAll("[data-nav]").forEach(b=>b.addEventListener("click",()=>nav(b.dataset.nav)));

function renderDecisions(){
 const list=document.getElementById("decisionList");
 list.innerHTML=decisions.map(d=>`<article class="decision ${d.done?"done":""}" id="decision-${d.id}"><span class="badge ${d.done?"done":"active"}">${d.done?"completed":"active"}</span><h3>${d.title}</h3><div class="decision-text">${d.text}</div><div class="next"><strong>Next step:</strong> ${d.next}</div><div class="action-row"><button class="action" data-toggle-decision="${d.id}">${d.done?"Reopen":"Mark complete"}</button>${d.id==="high-interest-card"?'<button class="action" data-ask="What should I do next?">Ask about this</button>':""}</div></article>`).join("");
 document.querySelectorAll("[data-toggle-decision]").forEach(b=>b.addEventListener("click",()=>toggleDecision(b.dataset.toggleDecision)));
 document.querySelectorAll("[data-ask]").forEach(b=>b.addEventListener("click",()=>ask(b.dataset.ask)));
 const open=decisions.filter(d=>!d.done).length;
 document.getElementById("todayCount").textContent=open+" open";
 const stream=decisions.find(d=>d.id==="duplicate-streaming");
 const todo=document.getElementById("todo-stream");
 if(todo){todo.classList.toggle("done",stream.done);todo.querySelector("button").textContent=stream.done?"Reopen":"Mark done";}
}
function toggleDecision(id){const d=decisions.find(x=>x.id===id);if(!d)return;d.done=!d.done;save();renderDecisions();}
document.addEventListener("click",e=>{
 const b=e.target.closest("[data-toggle-decision]"); if(b && !b.closest("#decisionList"))toggleDecision(b.dataset.toggleDecision);
 const jump=e.target.closest("[data-jump-decision]"); if(jump){nav("decisions");setTimeout(()=>document.getElementById("decision-"+jump.dataset.jumpDecision)?.scrollIntoView({behavior:"smooth",block:"center"}),250)}
 const askBtn=e.target.closest("[data-ask]"); if(askBtn && !askBtn.closest("#decisionList"))ask(askBtn.dataset.ask);
});

function ask(q){
 nav("ask");
 const history=document.getElementById("askHistory");
 document.getElementById("askEmpty").style.display="none";
 const user=document.createElement("div");user.className="bubble user";user.innerHTML='<div class="bubble-label">You</div>'+escapeHtml(q);history.appendChild(user);
 const a=answer(q);
 setTimeout(()=>{const bot=document.createElement("div");bot.className="bubble bot";bot.innerHTML='<div class="bubble-label">Covarify</div>'+escapeHtml(a).replace(/\n/g,"<br>");history.appendChild(bot);history.scrollTop=history.scrollHeight},180);
}
function answer(q){
 const s=q.toLowerCase();
 if(s.includes("cash")||s.includes("available"))return "You have $7,980.56 available in Everyday Checking. Across checking and savings, the household shows $31,370.56.\n\nThe Family Travel Savings balance is 7 days old, so I would treat the total as directionally current rather than perfectly real-time.";
 if(s.includes("biggest")||s.includes("expense"))return "The largest visible outflows are the $2,490 monthly mortgage, a $1,780 car repair, the $1,680 annual home-protection charge, and regular credit-card payments.\n\nI excluded internal transfers from spending so moving money between your own accounts does not look like an expense.";
 if(s.includes("connected")||s.includes("account"))return "Seven synthetic accounts are represented: Everyday Checking, Emergency Savings, Family Travel Savings, Rewards Credit, Intro Rate Credit, Home Mortgage, and Family Auto Loan.";
 if(s.includes("trip")||s.includes("vacation"))return "The family trip target is $6,000 and $4,200 is already set aside, leaving $1,800. At the current $200 monthly transfer, the gap closes in about nine months without new card debt.\n\nThe travel-savings balance is 7 days old, so confirm it before making a final commitment.";
 if(s.includes("uncertain")||s.includes("classif"))return "Two items need confirmation: a marketplace purchase with unclear purpose and an office-supply purchase that may be 60% freelance and 40% personal.\n\nCovarify should preserve that uncertainty until the user confirms it rather than silently forcing a category.";
 if(s.includes("next")||s.includes("should"))return "One clear next step: keep at least $18,000 in emergency savings and make a $750 extra payment to the 24.99% Rewards Credit balance.\n\nThen review the next statement and cash buffer before committing to another extra payment.";
 if(s.includes("debt")||s.includes("card"))return "The high-interest Rewards Credit balance is $6,480.32 at a 24.99% scenario APR. The lower-rate Intro card is $1,225.10 at a temporary 0% rate.\n\nThe household preference is not to drain savings, so the current decision is a bounded $750 extra payment, not an all-cash payoff.";
 return "I can answer from this synthetic household about cash, accounts, spending, debt, recurring costs, the family trip, and the next recommended step. I will also tell you when a balance or category is uncertain.";
}
const input=document.getElementById("askInput");
document.getElementById("askSend").addEventListener("click",()=>{if(input.value.trim()){ask(input.value.trim());input.value=""}});
input.addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();document.getElementById("askSend").click()}});
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}

document.querySelectorAll("[data-account]").forEach(b=>b.addEventListener("click",()=>{
 const a=accountData[b.dataset.account];
 document.getElementById("accountTitle").textContent=a.title;
 document.getElementById("accountBody").innerHTML=`<p class="eyebrow">${a.institution} - ${a.mask}</p><div style="font-size:38px;font-weight:850;letter-spacing:-.04em">${a.balance}</div><div class="stack">${a.details.map(r=>`<div class="stack-row"><strong>${r[0]}</strong><span>${r[1]}</span></div>`).join("")}</div><div class="boundary">Synthetic account only - no Plaid connection or live financial institution.</div>`;
 openModal("accountModal");
}));
document.querySelectorAll("[data-doc]").forEach(b=>b.addEventListener("click",()=>{
 const d=docs[b.dataset.doc];
 document.getElementById("docTitle").textContent=d.title;
 document.getElementById("docBody").innerHTML=`<div class="paper"><div class="watermark">SYNTHETIC DEMO DOCUMENT - NOT A REAL FINANCIAL RECORD</div><h2>${d.title}</h2><table class="paper-table">${d.rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("")}</table><p class="small muted">Prepared solely for the Covarify technical review. No real bank, insurer, employer, person, account, policy, or address is represented.</p><div class="watermark" style="margin-top:60px;margin-bottom:0">SYNTHETIC DEMO DOCUMENT - NOT A REAL FINANCIAL RECORD</div></div>`;
 openModal("docModal");
}));
document.querySelector("[data-scroll-vault]").addEventListener("click",()=>document.getElementById("vault").scrollIntoView({behavior:"smooth"}));
document.querySelectorAll("[data-open]").forEach(b=>b.addEventListener("click",()=>openModal(b.dataset.open)));
document.querySelectorAll("[data-close]").forEach(b=>b.addEventListener("click",()=>b.closest(".modal").classList.remove("open")));
document.querySelectorAll(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)m.classList.remove("open")}));
document.addEventListener("keydown",e=>{if(e.key==="Escape")document.querySelectorAll(".modal.open").forEach(m=>m.classList.remove("open"))});
function openModal(id){document.getElementById(id).classList.add("open");document.getElementById(id).querySelector("[data-close]").focus()}

document.getElementById("resetBtn").addEventListener("click",()=>{
 decisions=structuredClone(defaultDecisions);localStorage.removeItem("covarify-brian-decisions");renderDecisions();
 document.getElementById("askHistory").innerHTML='<div class="ask-empty" id="askEmpty"><h3>Ask about the synthetic household.</h3><p>Covarify answers from the visible financial picture, explains uncertainty, and points to one next step.</p><div class="starters"><button class="starter" data-ask="How much cash do I have available?">How much cash is available?</button><button class="starter" data-ask="What were my biggest expenses?">Biggest expenses</button><button class="starter" data-ask="Which accounts are connected?">Connected accounts</button><button class="starter" data-ask="Can we afford the family trip?">Can we afford the trip?</button></div></div>';
 document.querySelectorAll("#askEmpty [data-ask]").forEach(b=>b.addEventListener("click",()=>ask(b.dataset.ask)));
 nav("today");
});
document.getElementById("printBtn").addEventListener("click",()=>window.print());
renderDecisions();