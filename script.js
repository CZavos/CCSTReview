(() => {
  "use strict";
  const qs = window.QUIZ_QUESTIONS || [];
  const $ = id => document.getElementById(id);
  const STORAGE_KEY = "ccst-network-quiz-v1";
  let state = { index: 0, responses: {}, notes: {}, reviewed: {}, reviewQueue: null, queuePos: 0 };
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (saved && typeof saved === "object") state = {...state, ...saved};
  } catch (_) {}
  const activeIndex = () => state.reviewQueue ? state.reviewQueue[state.queuePos] : state.index;
  const current = () => qs[activeIndex()];
  const save = () => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); $("savedStatus").textContent = "Saved in this browser."; } catch (_) { $("savedStatus").textContent = "Browser storage unavailable; download your notes to keep them."; } };
  const correctLabel = q => {
    if (q.type === "matching") return q.pairs.map(p => `${p.left} → ${p.right}`).join("; ");
    if (q.type === "order") return q.answer.join(" → ");
    return q.answer.map(i => q.options[i]).join("; ");
  };
  const typeLabel = q => ({single:"Single answer",multi:"Choose all that apply",matching:"Matching",order:"Ordering"}[q.type] || "Question");
  function render() {
    if (!qs.length) return;
    const q = current();
    if (!q) return showSummary();
    $("summaryCard").classList.add("hidden"); $("quizCard").classList.remove("hidden");
    $("questionType").textContent = typeLabel(q);
    $("questionNumber").textContent = `Question ${q.id} of ${qs.length}`;
    $("questionPrompt").textContent = q.prompt;
    $("questionInstructions").textContent = q.type === "multi" ? "Select every correct answer." : q.type === "matching" ? "Choose the best match for each item." : q.type === "order" ? "Use the up/down controls to put the items in order." : "Select one answer.";
    $("progressText").textContent = state.reviewQueue ? `Review ${state.queuePos+1} of ${state.reviewQueue.length}` : `Question ${state.index+1} of ${qs.length}`;
    const done = Object.keys(state.reviewed).filter(k => state.reviewed[k]).length;
    $("scoreText").textContent = `Reviewed: ${done} · Correct: ${Object.values(state.responses).filter(r=>r&&r.correct).length}`;
    $("progressBar").style.width = `${(state.index+1)/qs.length*100}%`;
    $("prevBtn").disabled = state.reviewQueue ? state.queuePos===0 : state.index===0;
    $("nextBtn").textContent = state.reviewQueue ? (state.queuePos===state.reviewQueue.length-1 ? "Finish review" : "Next review →") : (state.index===qs.length-1 ? "Finish quiz" : "Next →");
    $("answerArea").innerHTML = "";
    const saved = state.responses[q.id];
    if (q.type === "matching") renderMatching(q,saved);
    else if (q.type === "order") renderOrder(q,saved);
    else renderOptions(q,saved);
    $("notesBox").value = state.notes[q.id] || "";
    $("feedbackPanel").classList.toggle("hidden", !state.reviewed[q.id]);
    if (state.reviewed[q.id]) showFeedback(q, state.responses[q.id]);
    $("checkBtn").textContent = state.reviewed[q.id] ? "Feedback shown" : "Check answer & show feedback";
    $("checkBtn").disabled = !!state.reviewed[q.id];
    $("skipBtn").textContent = state.reviewed[q.id] ? "Answer revealed" : "Skip and show answer";
    $("skipBtn").disabled = !!state.reviewed[q.id];
  }
  function renderOptions(q,saved) {
    q.options.forEach((opt,i)=>{
      const label=document.createElement("label"); label.className="option";
      if(saved && saved.selected && saved.selected.includes(i)) label.classList.add("selected");
      const input=document.createElement("input"); input.type=q.type==="multi"?"checkbox":"radio"; input.name=`q${q.id}`; input.value=i;
      input.checked=!!(saved && saved.selected && saved.selected.includes(i)); input.disabled=!!state.reviewed[q.id];
      input.addEventListener("change",()=>{if(q.type!=="multi")document.querySelectorAll(`#answerArea input[name="q${q.id}"]`).forEach(el=>el.closest(".option").classList.toggle("selected",el.checked));else label.classList.toggle("selected",input.checked);});
      const span=document.createElement("span"); span.textContent=`${String.fromCharCode(65+i)}. ${opt}`;
      label.append(input,span); $("answerArea").append(label);
    });
  }
  function renderMatching(q,saved) {
    const values = [...new Set(q.pairs.map(p=>p.right).concat(q.choices||[]))];
    q.pairs.forEach((pair,i)=>{
      const row=document.createElement("div"); row.className="matching-row";
      const prompt=document.createElement("label"); prompt.textContent=pair.left; prompt.className="match-label"; prompt.htmlFor=`match-${q.id}-${i}`;
      const select=document.createElement("select"); select.id=`match-${q.id}-${i}`; select.dataset.index=i; select.disabled=!!state.reviewed[q.id];
      const blank=document.createElement("option"); blank.value=""; blank.textContent="Choose a match"; select.append(blank);
      values.forEach(v=>{const o=document.createElement("option");o.value=v;o.textContent=v;select.append(o);});
      if(saved&&saved.selected)select.value=saved.selected[i]||"";
      row.append(prompt,select); $("answerArea").append(row);
    });
  }
  function renderOrder(q,saved) {
    const items=(saved&&saved.selected)?saved.selected.slice():q.items.slice();
    const wrap=document.createElement("ol");wrap.className="order-list";
    items.forEach((item,i)=>{
      const li=document.createElement("li");li.className="order-item";
      const txt=document.createElement("span");txt.textContent=item;
      const controls=document.createElement("span");controls.className="order-controls";
      [["↑",-1],["↓",1]].forEach(([symbol,delta])=>{const b=document.createElement("button");b.type="button";b.className="small-control";b.textContent=symbol;b.setAttribute("aria-label",`${symbol==="↑"?"Move up":"Move down"} ${item}`);b.disabled=!!state.reviewed[q.id]||(i+delta<0||i+delta>=items.length);b.addEventListener("click",()=>{const a=items.slice();[a[i],a[i+delta]]=[a[i+delta],a[i]];state.responses[q.id]={selected:a};save();render();});controls.append(b);});
      li.append(txt,controls);wrap.append(li);
    });
    $("answerArea").append(wrap);
  }
  function collectSelection(q) {
    if(q.type==="matching") return [...$("answerArea").querySelectorAll("select")].map(s=>s.value);
    if(q.type==="order") return [...$("answerArea").querySelectorAll(".order-item > span:first-child")].map(s=>s.textContent);
    return [...$("answerArea").querySelectorAll("input:checked")].map(i=>Number(i.value));
  }
  function isEmpty(q,sel) {
    if(q.type==="matching") return !sel.length||sel.some(x=>!x);
    if(q.type==="order") return !sel.length;
    return !sel.length;
  }
  function isCorrect(q,sel) {
    if(q.type==="matching") return q.pairs.every((p,i)=>sel[i]===p.right);
    if(q.type==="order") return JSON.stringify(sel)===JSON.stringify(q.answer);
    const a=[...sel].sort((x,y)=>x-y), b=[...q.answer].sort((x,y)=>x-y);
    return JSON.stringify(a)===JSON.stringify(b);
  }
  function check(skipped=false) {
    const q=current(); if(!q||state.reviewed[q.id])return;
    const selected=collectSelection(q);
    if(!skipped && isEmpty(q,selected)) { check(true); return; }
    const correct=!skipped&&isCorrect(q,selected);
    state.responses[q.id]={selected,correct,skipped};
    state.reviewed[q.id]=true;
    save(); render();
  }
  function showFeedback(q,response) {
    const skipped=!response||response.skipped;
    const correct=!!(response&&response.correct);
    $("resultBanner").className=`result-banner ${skipped?"skipped":correct?"correct":"incorrect"}`;
    $("resultBanner").textContent=skipped?"Question skipped — review the correct answer and explanations.":correct?"Correct — review each option to reinforce your understanding.":"Not quite — compare your selection with the correct answer and review every explanation.";
    $("correctAnswerText").textContent=correctLabel(q);
    $("allFeedback").innerHTML="";
    if(q.type==="matching") {
      q.pairs.forEach((p,i)=>{
        const chosen=response&&response.selected?response.selected[i]:"";
        const item=document.createElement("article");item.className="feedback-item "+(chosen===p.right?"correct-option":"chosen-wrong");
        const h=document.createElement("h4");h.textContent=p.left;
        const ptext=document.createElement("p");ptext.textContent=`Your match: ${chosen||"No match selected"}. Correct match: ${p.right}. ${p.explanation||""}`;
        item.append(h,ptext);$("allFeedback").append(item);
      });
    } else if(q.type==="order") {
      q.items.forEach((item,i)=>{
        const fb=document.createElement("article");fb.className="feedback-item "+((response&&response.selected&&response.selected[i]===q.answer[i])?"correct-option":"chosen-wrong");
        const h=document.createElement("h4");h.textContent=`Position ${i+1}: ${q.answer[i]}`;
        const p=document.createElement("p");p.textContent=q.feedback[item]||"This item belongs at this position in the TCP/IP layer sequence.";
        fb.append(h,p);$("allFeedback").append(fb);
      });
    } else {
      q.options.forEach((opt,i)=>{
        const item=document.createElement("article"); const isKey=q.answer.includes(i); const chosen=!!(response&&response.selected&&response.selected.includes(i));
        item.className="feedback-item "+(isKey?"correct-option":chosen?"chosen-wrong":"");
        const h=document.createElement("h4");h.textContent=`${String.fromCharCode(65+i)}. ${opt}${isKey?" — Correct answer":chosen?" — Your selection":""}`;
        const p=document.createElement("p");p.textContent=q.feedback?q.feedback[i]:(isKey?"This option matches the correct answer.":"This option does not match the correct answer.");
        item.append(h,p);$("allFeedback").append(item);
      });
    }
    $("sourceExplanation").textContent=q.explanation;
  }
  function navigate(delta) {
    if(state.reviewQueue){state.queuePos+=delta;if(state.queuePos<0)state.queuePos=0;if(state.queuePos>=state.reviewQueue.length){state.reviewQueue=null;state.queuePos=0;showSummary();return;}}
    else { if(delta>0 && state.index===qs.length-1){showSummary();return;} state.index=Math.max(0,Math.min(qs.length-1,state.index+delta)); }
    save();render();
  }
  function showSummary() {
    $("quizCard").classList.add("hidden");$("summaryCard").classList.remove("hidden");
    const reviewed=Object.values(state.reviewed).filter(Boolean).length;
    const responses=Object.values(state.responses);
    const answered=responses.filter(r=>r&&!r.skipped&&!isEmpty({type:"single"},r.selected||[])).length;
    const correct=responses.filter(r=>r&&r.correct).length;
    $("finalCorrect").textContent=correct;$("finalAnswered").textContent=answered;
    $("finalPercent").textContent=answered?`${Math.round(correct/answered*100)}%`:"—";
    $("summaryMessage").textContent=`You have reviewed ${reviewed} of ${qs.length} questions. You can revisit missed or skipped items, download your notes, or export your results.`;
  }
  function download(filename,content,type="text/plain") {
    const blob=new Blob([content],{type});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=filename;document.body.append(a);a.click();a.remove();URL.revokeObjectURL(url);
  }
  function downloadNotes() {
    const lines=["Cisco CCST Practice Quiz — Student Notes",""];
    qs.forEach(q=>{lines.push(`Question ${q.id}: ${q.prompt}`);lines.push(`Correct answer: ${correctLabel(q)}`);lines.push(`Notes: ${state.notes[q.id]||"(no notes)"}`);lines.push("");});
    download("ccst-study-notes.txt",lines.join("\n"));
  }
  function downloadResults() {
    const rows=[["Question","Prompt","Selected answer","Correct answer","Result","Notes"]];
    qs.forEach(q=>{const r=state.responses[q.id];let selected="Not answered";if(r&&!r.skipped){if(q.type==="matching")selected=q.pairs.map((p,i)=>`${p.left}: ${r.selected[i]||"—"}`).join(" | ");else if(q.type==="order")selected=(r.selected||[]).join(" → ");else selected=(r.selected||[]).map(i=>q.options[i]).join(" | ");}
      rows.push([q.id,q.prompt,selected,correctLabel(q),r?(r.skipped?"Skipped":r.correct?"Correct":"Incorrect"):"Not reviewed",state.notes[q.id]||""]);
    });
    const csv=rows.map(row=>row.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(",")).join("\r\n");
    download("ccst-quiz-results.csv",csv,"text/csv;charset=utf-8");
  }
  $("startBtn").addEventListener("click",()=>{state.reviewQueue=null;render();$("quizCard").scrollIntoView({behavior:"smooth",block:"start"});});
  $("resetBtn").addEventListener("click",()=>{if(confirm("Start over? This clears saved answers and notes in this browser.")){state={index:0,responses:{},notes:{},reviewed:{},reviewQueue:null,queuePos:0};save();render();}});
  $("checkBtn").addEventListener("click",()=>check(false));$("skipBtn").addEventListener("click",()=>check(true));
  $("prevBtn").addEventListener("click",()=>navigate(-1));
  $("nextBtn").addEventListener("click",()=>{const q=current();if(q&&!state.reviewed[q.id])check(true);navigate(1);});
  $("notesBox").addEventListener("input",()=>{const q=current();if(q){state.notes[q.id]=$("notesBox").value;save();}});
  $("clearNoteBtn").addEventListener("click",()=>{const q=current();if(q){state.notes[q.id]="";$("notesBox").value="";save();}});
  $("reviewMissedBtn").addEventListener("click",()=>{const ids=qs.filter(q=>!state.reviewed[q.id]||!state.responses[q.id]||!state.responses[q.id].correct).map(q=>q.id-1);if(!ids.length){alert("There are no missed or skipped questions to review.");return;}state.reviewQueue=ids;state.queuePos=0;render();$("quizCard").scrollIntoView({behavior:"smooth",block:"start"});});
  $("downloadNotesBtn").addEventListener("click",downloadNotes);$("downloadResultsBtn").addEventListener("click",downloadResults);
  $("backToQuizBtn").addEventListener("click",()=>{state.reviewQueue=null;render();});
  render();
})();
