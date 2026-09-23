import{i as e,n as t,t as n}from"./jsx-runtime-Dk72oS4N.js";import{t as r}from"./proxy-DtPsnYP0.js";import{$ as i,A as a,B as o,C as s,E as c,F as l,H as u,I as d,L as f,M as p,Mt as m,N as h,S as g,St as _,Tt as v,U as y,V as b,W as x,Z as ee,_t as te,c as ne,ct as re,dt as ie,g as ae,h as oe,it as se,j as S,k as ce,l as le,lt as ue,mt as de,q as C,rt as w,s as fe,st as T,ut as pe,vt as E,z as D}from"./index-CGEfFe89.js";import{t as O}from"./renderMarkdown-_QdSbiZv.js";import{a as k,c as me,d as A,i as he,l as j,n as ge,o as _e,r as ve,s as ye,t as M,u as N}from"./QuizStudioPage.module-S5mpNvcD.js";var P=e(t(),1);function be(e){let t=(0,P.useCallback)(t=>{let n=window.matchMedia(e);return n.addEventListener(`change`,t),()=>n.removeEventListener(`change`,t)},[e]),n=(0,P.useCallback)(()=>window.matchMedia(e).matches,[e]);return(0,P.useSyncExternalStore)(t,n,()=>!1)}var xe=/^\s*-\s*\[([ xX])\]\s*(.*)$/,F=/^#\s+(.*)$/,I=/^##\s+(.*)$/,L=/^\s*<!--\s*points:\s*(\d+)\s*-->\s*$/,Se=/^\s*>\s?(.*)$/,R=/^\s*(```|~~~)/,z=/^---\s*$/;function B(e){if(e.length===2){let t=e.map(e=>e.text.trim().toLowerCase()).sort();if(t[0]===`false`&&t[1]===`true`)return`boolean`}return e.filter(e=>e.correct).length>1?`multi`:`single`}function Ce(e){let t={...k};if(e.length===0||!z.test(e[0]))return{settings:t,nextIndex:0};let n=1;for(;n<e.length&&!z.test(e[n]);){let r=e[n].indexOf(`:`);if(r>0){let i=e[n].slice(0,r).trim(),a=e[n].slice(r+1).trim();switch(i){case`shuffleQuestions`:t.shuffleQuestions=a===`true`;break;case`shuffleOptions`:t.shuffleOptions=a===`true`;break;case`instantFeedback`:t.instantFeedback=a===`true`;break;case`passMark`:t.passMark=Number.isFinite(Number(a))?Number(a):k.passMark;break;case`timeLimitMinutes`:t.timeLimitMinutes=Number.isFinite(Number(a))?Number(a):0;break;case`theme`:t.theme=a===`dark`?`dark`:`light`}}n+=1}return{settings:t,nextIndex:Math.min(n+1,e.length)}}function V(e){let t=e.replace(/\r\n/g,`
`).split(`
`),{settings:n,nextIndex:r}=Ce(t),i=`Untitled Quiz`,a=[],o=[],s=r;for(;s<t.length&&t[s].trim()===``;)s+=1;let c=s<t.length?F.exec(t[s]):null;for(c&&(i=c[1].trim(),s+=1);s<t.length&&!I.test(t[s]);)a.push(t[s]),s+=1;for(;s<t.length;){let e=I.exec(t[s]);if(!e){s+=1;continue}s+=1;let n=[e[1]],r=1,i=!1;for(;s<t.length;){let e=t[s];if(R.test(e)){i=!i,n.push(e),s+=1;continue}if(!i&&(I.test(e)||xe.test(e)))break;let a=L.exec(e);if(!i&&a){r=Number(a[1])||1,s+=1;continue}n.push(e),s+=1}let a=[];for(;s<t.length&&xe.test(t[s]);){let e=xe.exec(t[s]);a.push({id:j(`o`),text:e[2].trim(),correct:e[1].toLowerCase()===`x`}),s+=1}let c=s;for(;c<t.length&&t[c].trim()===``;)c+=1;let l=[];if(c<t.length&&Se.test(t[c]))for(s=c;s<t.length;){let e=Se.exec(t[s]);if(!e)break;l.push(e[1]),s+=1}for(;s<t.length&&t[s].trim()===``;)s+=1;o.push({id:j(`q`),type:B(a),text:n.join(`
`).trim(),explanation:l.join(`
`).trim(),points:r,options:a})}return{title:i,description:a.join(`
`).trim(),settings:n,questions:o}}function we(e){let t=e.settings,n=[`---`,`shuffleQuestions: ${t.shuffleQuestions}`,`shuffleOptions: ${t.shuffleOptions}`,`instantFeedback: ${t.instantFeedback}`,`passMark: ${t.passMark}`,`timeLimitMinutes: ${t.timeLimitMinutes}`,`theme: ${t.theme}`,`---`,``,`# ${e.title}`];e.description.trim()&&n.push(``,e.description.trim());for(let t of e.questions){n.push(``,`## ${t.text}`),t.points!==1&&n.push(`<!-- points: ${t.points} -->`);for(let e of t.options)n.push(`- [${e.correct?`x`:` `}] ${e.text}`);if(t.explanation.trim()){n.push(``);for(let e of t.explanation.trim().split(`
`))n.push(`> ${e}`)}}return n.join(`
`)+`
`}var Te=`---
shuffleQuestions: false
shuffleOptions: false
instantFeedback: false
passMark: 70
timeLimitMinutes: 0
theme: light
---

# JavaScript Fundamentals

A short practice quiz. Edit this file in any text editor, then upload it to Quiz Studio.

## What does \`typeof null\` return in JavaScript?
- [ ] "null"
- [x] "object"
- [ ] "undefined"
- [ ] "number"

> A long-standing bug kept for backwards compatibility: \`null\` has the type tag for objects.

## Which of these are valid ways to declare a variable? (select all that apply)
<!-- points: 2 -->
- [x] let x = 1;
- [x] const x = 1;
- [x] var x = 1;
- [ ] variable x = 1;

> \`let\`, \`const\` and \`var\` are the three declaration keywords. \`variable\` is not one.

## What will this code log?

\`\`\`js
console.log(1 + "1");
\`\`\`

- [ ] 2
- [x] "11"
- [ ] NaN
- [ ] undefined

> The \`+\` operator coerces the number to a string when either side is a string.

## Arrays in JavaScript have a fixed length that cannot change after creation.
- [ ] True
- [x] False

> Arrays are dynamic — \`push\`, \`splice\` and assigning to \`length\` all resize them.
`;function H(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}var Ee=`
    --bg: #ffffff;
    --surface: #fbfbfc;
    --surface-2: #f4f4f6;
    --text: #15161a;
    --text-dim: #6b6f76;
    --border: #e4e4e8;
    --code-bg: #15161a;
    --code-text: #e9e9ec;`,De=`
    --bg: #0b0b0d;
    --surface: #141417;
    --surface-2: #1b1b1f;
    --text: #f2f2f4;
    --text-dim: #9b9ba3;
    --border: #2a2a30;
    --code-bg: #08080a;
    --code-text: #e9e9ec;`;function Oe(e){let t={title:e.title,descriptionHtml:O(e.description),settings:e.settings,totalPoints:A(e),questions:e.questions.map(e=>({id:e.id,type:e.type,points:e.points||1,html:O(e.text),explanationHtml:e.explanation.trim()?O(e.explanation):``,options:e.options.map(e=>({id:e.id,text:e.text,correct:e.correct}))}))},n=JSON.stringify(t).replace(/</g,`\\u003c`),r=e.settings.theme===`dark`?De:Ee;return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${H(e.title||`Quiz`)}</title>
<style>
  :root {
    --accent: #ff7a00;
    --accent-soft: rgba(255, 122, 0, 0.12);
    --correct: #14915a;
    --correct-soft: rgba(20, 145, 90, 0.12);
    --incorrect: #d93a3f;
    --incorrect-soft: rgba(217, 58, 63, 0.12);${r}
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    background: var(--bg);
    color: var(--text);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
  .progress-rail {
    position: sticky;
    top: 0;
    height: 4px;
    background: var(--surface-2);
    z-index: 10;
  }
  .progress-bar {
    height: 100%;
    width: 0%;
    background: var(--accent);
    transition: width 0.3s ease;
  }
  .wrap { max-width: 760px; margin: 0 auto; padding: 40px 20px 100px; }
  header { margin-bottom: 28px; }
  h1 { font-size: clamp(24px, 5vw, 32px); line-height: 1.25; margin: 0 0 10px; letter-spacing: -0.02em; }
  .desc { color: var(--text-dim); margin-bottom: 16px; }
  .desc :last-child { margin-bottom: 0; }
  .meta { display: flex; flex-wrap: wrap; gap: 8px; }
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    font-weight: 600;
    padding: 5px 11px;
    border-radius: 20px;
    background: var(--surface-2);
    color: var(--text-dim);
  }
  .chip.timer { background: var(--accent-soft); color: var(--accent); }
  .chip.timer.low { background: var(--incorrect-soft); color: var(--incorrect); }
  .card {
    border: 1px solid var(--border);
    border-radius: 16px;
    background: var(--surface);
    padding: 22px;
    margin-bottom: 16px;
  }
  .q-head { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; flex-wrap: wrap; }
  .q-label { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-dim); }
  .q-points { font-size: 11px; font-weight: 600; padding: 3px 9px; border-radius: 20px; background: var(--surface-2); color: var(--text-dim); }
  .verdict { font-size: 11px; font-weight: 700; padding: 3px 9px; border-radius: 20px; margin-left: auto; }
  .verdict.ok { background: var(--correct-soft); color: var(--correct); }
  .verdict.no { background: var(--incorrect-soft); color: var(--incorrect); }
  .q-body { margin-bottom: 14px; }
  .q-body > :first-child { margin-top: 0; }
  .q-body > :last-child { margin-bottom: 0; }
  .q-body pre {
    background: var(--code-bg);
    color: var(--code-text);
    padding: 14px 16px;
    border-radius: 10px;
    overflow-x: auto;
    font-size: 13px;
  }
  .q-body code { font-family: "SFMono-Regular", Consolas, Menlo, monospace; font-size: 0.92em; }
  .q-body :not(pre) > code { background: var(--surface-2); padding: 2px 5px; border-radius: 4px; }
  .opt {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 11px 14px;
    border: 1px solid var(--border);
    border-radius: 11px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: border-color 0.15s ease, background 0.15s ease;
    background: var(--bg);
  }
  .opt:hover:not(.locked) { border-color: var(--accent); }
  .opt input { margin: 4px 0 0; accent-color: var(--accent); flex-shrink: 0; }
  .opt.checked { border-color: var(--accent); background: var(--accent-soft); }
  .opt.correct { border-color: var(--correct); background: var(--correct-soft); }
  .opt.incorrect { border-color: var(--incorrect); background: var(--incorrect-soft); }
  .opt.locked { cursor: default; }
  .explain {
    display: flex;
    gap: 9px;
    margin-top: 12px;
    padding: 12px 14px;
    border-radius: 11px;
    background: var(--surface-2);
    font-size: 14px;
    color: var(--text-dim);
  }
  .explain strong { color: var(--text); }
  .explain > div > :first-child { margin-top: 0; }
  .explain > div > :last-child { margin-bottom: 0; }
  .toolbar { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin-top: 24px; }
  button {
    font: inherit;
    font-weight: 600;
    padding: 12px 24px;
    border-radius: 24px;
    border: none;
    background: var(--accent);
    color: #fff;
    cursor: pointer;
    transition: opacity 0.15s ease;
  }
  button:hover { opacity: 0.9; }
  button.ghost { background: transparent; border: 1px solid var(--border); color: var(--text); }
  .result {
    border-radius: 16px;
    padding: 22px;
    margin-bottom: 20px;
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 18px;
    flex-wrap: wrap;
  }
  .result.pass { border-color: var(--correct); background: var(--correct-soft); }
  .result.fail { border-color: var(--incorrect); background: var(--incorrect-soft); }
  .score { font-size: 34px; font-weight: 800; letter-spacing: -0.02em; line-height: 1; }
  .result .detail { font-size: 14px; color: var(--text-dim); }
  .result .status { font-weight: 700; }
  .result.pass .status { color: var(--correct); }
  .result.fail .status { color: var(--incorrect); }
  .credit { margin-top: 44px; text-align: center; font-size: 12px; color: var(--text-dim); }
  .credit a { color: var(--accent); text-decoration: none; }
  @media (max-width: 560px) {
    .wrap { padding: 28px 16px 80px; }
    .card { padding: 18px; border-radius: 14px; }
  }
  @media print {
    .toolbar, .progress-rail, .credit { display: none; }
    .card { break-inside: avoid; }
  }
</style>
</head>
<body>
<div class="progress-rail"><div class="progress-bar" id="progressBar"></div></div>
<div class="wrap">
  <div id="app"></div>
  <div class="credit">Made with <a href="https://imango.in/quiz-studio" target="_blank" rel="noreferrer">Imango Quiz Studio</a></div>
</div>

<script id="quiz-data" type="application/json">${n}<\/script>
<script>
(function () {
  var data = JSON.parse(document.getElementById("quiz-data").textContent);
  var app = document.getElementById("app");
  var progressBar = document.getElementById("progressBar");
  var settings = data.settings;

  var answers = {};
  var submitted = false;
  var questions = [];
  var secondsLeft = settings.timeLimitMinutes * 60;
  var timerId = null;

  function shuffle(list) {
    var copy = list.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function buildQuestions() {
    var list = settings.shuffleQuestions ? shuffle(data.questions) : data.questions.slice();
    if (settings.shuffleOptions) {
      list = list.map(function (q) {
        var copy = {};
        for (var k in q) copy[k] = q[k];
        copy.options = shuffle(q.options);
        return copy;
      });
    }
    return list;
  }

  function isCorrect(q) {
    var picked = (answers[q.id] || []).slice().sort();
    var correctIds = q.options.filter(function (o) { return o.correct; })
      .map(function (o) { return o.id; }).sort();
    if (correctIds.length === 0 || picked.length !== correctIds.length) return false;
    for (var i = 0; i < picked.length; i++) {
      if (picked[i] !== correctIds[i]) return false;
    }
    return true;
  }

  function computeResult() {
    var earned = 0, possible = 0, correctCount = 0;
    questions.forEach(function (q) {
      possible += q.points;
      if (isCorrect(q)) { earned += q.points; correctCount++; }
    });
    var percent = possible > 0 ? Math.round((earned / possible) * 100) : 0;
    return {
      earned: earned, possible: possible, correctCount: correctCount,
      percent: percent, passed: percent >= settings.passMark
    };
  }

  function answeredCount() {
    return questions.filter(function (q) {
      return (answers[q.id] || []).length > 0;
    }).length;
  }

  function formatTime(total) {
    var m = Math.floor(total / 60), s = total % 60;
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  function esc(text) {
    return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function render() {
    var html = "";

    if (submitted) {
      var r = computeResult();
      html +=
        '<div class="result ' + (r.passed ? "pass" : "fail") + '">' +
        '<div class="score">' + r.percent + "%</div>" +
        '<div><div class="status">' + (r.passed ? "Passed" : "Not passed") + "</div>" +
        '<div class="detail">' + r.earned + " / " + r.possible + " points · " +
        r.correctCount + " of " + questions.length + " correct · pass mark " +
        settings.passMark + "%</div></div></div>";
    }

    html += "<header><h1>" + esc(data.title || "Quiz") + "</h1>";
    if (data.descriptionHtml) html += '<div class="desc">' + data.descriptionHtml + "</div>";

    html += '<div class="meta">';
    html += '<span class="chip">' + questions.length + " questions</span>";
    html += '<span class="chip">' + data.totalPoints + " points</span>";
    if (settings.timeLimitMinutes > 0 && !submitted) {
      html += '<span class="chip timer' + (secondsLeft <= 30 ? " low" : "") + '" id="timerChip">' +
        formatTime(Math.max(0, secondsLeft)) + " left</span>";
    }
    html += "</div></header>";

    questions.forEach(function (q, qi) {
      var picked = answers[q.id] || [];
      var revealed = submitted || (settings.instantFeedback && picked.length > 0);
      var ok = isCorrect(q);

      html += '<div class="card" data-qid="' + q.id + '">';
      html += '<div class="q-head"><span class="q-label">Question ' + (qi + 1) + "</span>";
      if (q.points > 1) html += '<span class="q-points">' + q.points + " pts</span>";
      if (revealed) {
        html += '<span class="verdict ' + (ok ? "ok" : "no") + '">' +
          (ok ? "Correct" : "Incorrect") + "</span>";
      }
      html += "</div>";
      html += '<div class="q-body">' + q.html + "</div>";

      q.options.forEach(function (opt) {
        var checked = picked.indexOf(opt.id) !== -1;
        var cls = "opt";
        if (revealed) {
          cls += " locked";
          if (opt.correct) cls += " correct";
          else if (checked) cls += " incorrect";
        } else if (checked) {
          cls += " checked";
        }
        html +=
          '<label class="' + cls + '">' +
          '<input type="' + (q.type === "multi" ? "checkbox" : "radio") + '"' +
          ' name="q_' + q.id + '" value="' + opt.id + '"' +
          (checked ? " checked" : "") + (revealed ? " disabled" : "") + " />" +
          "<span>" + esc(opt.text) + "</span></label>";
      });

      if (revealed && q.explanationHtml) {
        html += '<div class="explain"><strong>Why:</strong><div>' + q.explanationHtml + "</div></div>";
      }

      html += "</div>";
    });

    html += '<div class="toolbar">';
    if (submitted) {
      html += '<button id="retryBtn">Try again</button>';
      html += '<button class="ghost" id="printBtn">Print / Save PDF</button>';
    } else {
      html += '<button id="submitBtn">Submit answers</button>';
      html += '<span class="detail" id="answeredLabel">' + answeredCount() + " of " +
        questions.length + " answered</span>";
    }
    html += "</div>";

    app.innerHTML = html;
    updateProgress();
    bindEvents();
  }

  function updateProgress() {
    var pct = questions.length ? (answeredCount() / questions.length) * 100 : 0;
    progressBar.style.width = (submitted ? 100 : pct) + "%";
  }

  function bindEvents() {
    Array.prototype.forEach.call(app.querySelectorAll("input"), function (input) {
      input.addEventListener("change", function () {
        var card = input.closest(".card");
        if (!card) return;
        var qid = card.getAttribute("data-qid");
        var q = questions.filter(function (item) { return item.id === qid; })[0];
        if (!q) return;

        if (q.type === "multi") {
          var current = answers[qid] || [];
          if (input.checked) current = current.concat([input.value]);
          else current = current.filter(function (v) { return v !== input.value; });
          answers[qid] = current;
        } else {
          answers[qid] = [input.value];
        }

        if (settings.instantFeedback) render();
        else {
          Array.prototype.forEach.call(card.querySelectorAll(".opt"), function (label) {
            var box = label.querySelector("input");
            if (box.checked) label.classList.add("checked");
            else label.classList.remove("checked");
          });
          var label = document.getElementById("answeredLabel");
          if (label) label.textContent = answeredCount() + " of " + questions.length + " answered";
          updateProgress();
        }
      });
    });

    var submitBtn = document.getElementById("submitBtn");
    if (submitBtn) submitBtn.addEventListener("click", finish);

    var retryBtn = document.getElementById("retryBtn");
    if (retryBtn) retryBtn.addEventListener("click", function () {
      answers = {};
      submitted = false;
      questions = buildQuestions();
      secondsLeft = settings.timeLimitMinutes * 60;
      startTimer();
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    var printBtn = document.getElementById("printBtn");
    if (printBtn) printBtn.addEventListener("click", function () { window.print(); });
  }

  function finish() {
    submitted = true;
    if (timerId) { clearInterval(timerId); timerId = null; }
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startTimer() {
    if (timerId) clearInterval(timerId);
    if (settings.timeLimitMinutes <= 0) return;
    timerId = setInterval(function () {
      secondsLeft--;
      var chip = document.getElementById("timerChip");
      if (chip) {
        chip.textContent = formatTime(Math.max(0, secondsLeft)) + " left";
        if (secondsLeft <= 30) chip.className = "chip timer low";
      }
      if (secondsLeft <= 0) finish();
    }, 1000);
  }

  questions = buildQuestions();
  render();
  startTimer();
})();
<\/script>
</body>
</html>
`}var ke=`Quiz Info`,Ae=`Single Choice`,U=`Multiple Choice`,W=`True False`,G=[`Option A`,`Option B`,`Option C`,`Option D`,`Option E`,`Option F`],je=[`A`,`B`,`C`,`D`,`E`,`F`];function K(e){return e==null?``:String(e).trim()}function q(e){return e?`yes`:`no`}function J(e){let t=K(e).toLowerCase();return t===`yes`||t===`true`||t===`y`||t===`1`}function Me(e){let t=e.trim().replace(/^option\s*/i,``);if(!t)return-1;let n=je.indexOf(t[0].toUpperCase());if(n>=0)return n;let r=Number(t);return Number.isFinite(r)&&r>0?r-1:-1}function Ne(e){let t=Number(K(e));return Number.isFinite(t)&&t>0?Math.floor(t):1}function Pe(e,t){let n=K(e.Question);if(!n)return null;let r=[],i=[];if(G.forEach((t,n)=>{let a=K(e[t]);a&&(i.push(n),r.push({id:j(`o`),text:a,correct:!1}))}),r.length<2)return null;let a=K(e.Correct).split(/[,;/ ]+/).filter(Boolean);for(let e of a){let n=Me(e),a=i.indexOf(n);if(a>=0&&(r[a].correct=!0,!t))break}return{id:j(`q`),type:t?`multi`:`single`,text:n,explanation:K(e.Explanation),points:Ne(e.Points),options:r}}function Fe(e){let t=K(e.Question);if(!t)return null;let n=J(e.Correct);return{id:j(`q`),type:`boolean`,text:t,explanation:K(e.Explanation),points:Ne(e.Points),options:[{id:j(`o`),text:`True`,correct:n},{id:j(`o`),text:`False`,correct:!n}]}}function Ie(e){let t=new Map;for(let n of e){let e=K(n.Field).toLowerCase();e&&t.set(e,K(n.Value))}let n=Number(t.get(`pass mark (%)`)),r=Number(t.get(`time limit (minutes)`));return{title:t.get(`title`)||`Untitled Quiz`,description:t.get(`description`)??``,settings:{...k,passMark:Number.isFinite(n)?Math.min(100,Math.max(0,n)):k.passMark,timeLimitMinutes:Number.isFinite(r)&&r>0?Math.floor(r):0,shuffleQuestions:J(t.get(`shuffle questions`)),shuffleOptions:J(t.get(`shuffle options`)),instantFeedback:J(t.get(`instant feedback`)),theme:(t.get(`theme`)??``).toLowerCase()===`dark`?`dark`:`light`}}}async function Le(e){let t=await m(()=>import(`./xlsx-BKER4Xe2.js`),[]),n=t.read(await e.arrayBuffer(),{type:`array`}),r=e=>{let r=n.Sheets[e];return r?t.utils.sheet_to_json(r,{defval:``}):[]},{title:i,description:a,settings:o}=Ie(r(ke));return{title:i,description:a,settings:o,questions:[...r(Ae).map(e=>Pe(e,!1)),...r(U).map(e=>Pe(e,!0)),...r(W).map(Fe)].filter(e=>e!==null)}}async function Re(e){let t=await m(()=>import(`./xlsx-BKER4Xe2.js`),[]),n=e??null,r=n?.settings??k,i=t.utils.book_new(),a=[{Field:`Title`,Value:n?.title??`My Quiz`},{Field:`Description`,Value:n?.description??`A short description of the quiz`},{Field:`Pass mark (%)`,Value:r.passMark},{Field:`Time limit (minutes)`,Value:r.timeLimitMinutes},{Field:`Shuffle questions`,Value:q(r.shuffleQuestions)},{Field:`Shuffle options`,Value:q(r.shuffleOptions)},{Field:`Instant feedback`,Value:q(r.instantFeedback)},{Field:`Theme`,Value:r.theme}],o=t.utils.json_to_sheet(a);o[`!cols`]=[{wch:22},{wch:46}],t.utils.book_append_sheet(i,o,ke);let s=(e,t)=>{if(!e)return t;let n={Question:e.text};return G.forEach((t,r)=>{n[t]=e.options[r]?.text??``}),n.Correct=e.options.map((e,t)=>e.correct?je[t]:null).filter(Boolean).join(`, `),n.Points=e.points,n.Explanation=e.explanation,n},c={Question:`What does typeof null return in JavaScript?`,"Option A":`"null"`,"Option B":`"object"`,"Option C":`"undefined"`,"Option D":`"number"`,"Option E":``,"Option F":``,Correct:`B`,Points:1,Explanation:`A long-standing quirk kept for backwards compatibility.`},l={Question:`Which of these are valid variable declarations?`,"Option A":`let x = 1;`,"Option B":`const x = 1;`,"Option C":`var x = 1;`,"Option D":`variable x = 1;`,"Option E":``,"Option F":``,Correct:`A, B, C`,Points:2,Explanation:`Separate multiple answers with commas.`},u={Question:`Arrays in JavaScript have a fixed length.`,Correct:`FALSE`,Points:1,Explanation:`Arrays are dynamic — push and splice resize them.`},d=n?.questions.filter(e=>e.type===`single`)??[],f=n?.questions.filter(e=>e.type===`multi`)??[],p=n?.questions.filter(e=>e.type===`boolean`)??[],h=d.length?d.map(e=>s(e,c)):[c],g=f.length?f.map(e=>s(e,l)):[l],_=p.length?p.map(e=>({Question:e.text,Correct:e.options.find(e=>e.correct)?.text.toUpperCase()??`TRUE`,Points:e.points,Explanation:e.explanation})):[u],v=[{wch:52},...G.map(()=>({wch:20})),{wch:12},{wch:8},{wch:40}],y=t.utils.json_to_sheet(h,{header:[`Question`,...G,`Correct`,`Points`,`Explanation`]});y[`!cols`]=v,t.utils.book_append_sheet(i,y,Ae);let b=t.utils.json_to_sheet(g,{header:[`Question`,...G,`Correct`,`Points`,`Explanation`]});b[`!cols`]=v,t.utils.book_append_sheet(i,b,U);let x=t.utils.json_to_sheet(_,{header:[`Question`,`Correct`,`Points`,`Explanation`]});x[`!cols`]=[{wch:52},{wch:12},{wch:8},{wch:40}],t.utils.book_append_sheet(i,x,W);let ee=t.write(i,{bookType:`xlsx`,type:`array`});return new Blob([ee],{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`})}var ze=`imango-quiz-studio-library`;function Be(e){return e.createdAt??e.savedAt??``}function Y(){try{let e=localStorage.getItem(ze);if(!e)return[];let t=JSON.parse(e);return Array.isArray(t)?t.flatMap(e=>{if(!e||typeof e.id!=`string`)return[];let t=N(e.quiz);return t?[{id:e.id,createdAt:e.createdAt,savedAt:e.savedAt,quiz:t}]:[]}):[]}catch{return[]}}function X(e){try{return localStorage.setItem(ze,JSON.stringify(e)),!0}catch{return!1}}function Z(){return Y().sort((e,t)=>{let n=Be(t).localeCompare(Be(e));return n===0?t.id.localeCompare(e.id):n})}function Ve(e,t){let n=Y(),r=t?n.find(e=>e.id===t):void 0,i=new Date().toISOString(),a={id:r?r.id:j(`quiz`),createdAt:r?r.createdAt??r.savedAt??i:i,savedAt:i,quiz:e},o=n.findIndex(e=>e.id===a.id);return o>=0?n[o]=a:n.push(a),X(n)?a:null}function He(e){X(Y().filter(t=>t.id!==e))}function Ue(e){let t=Y(),n=t.find(t=>t.id===e);if(!n)return null;let r=new Date().toISOString(),i={id:j(`quiz`),createdAt:r,savedAt:r,quiz:{...n.quiz,title:`${n.quiz.title} (copy)`}};return t.push(i),X(t)?i:null}function We(e,t){let n=Y(),r=n.find(t=>t.id===e);r&&(r.quiz={...r.quiz,title:t},r.savedAt=new Date().toISOString(),X(n))}function Q(e){let t=[];e.text.trim()||t.push({questionId:e.id,severity:`warning`,message:`Question text is empty`}),e.options.length<2&&t.push({questionId:e.id,severity:`error`,message:`Needs at least 2 options`}),e.options.some(e=>e.correct)||t.push({questionId:e.id,severity:`error`,message:`No correct answer marked`}),e.options.some(e=>!e.text.trim())&&t.push({questionId:e.id,severity:`warning`,message:`Has an empty option`});let n=new Set;for(let r of e.options){let i=r.text.trim().toLowerCase();if(i&&n.has(i)){t.push({questionId:e.id,severity:`warning`,message:`Has duplicate options`});break}n.add(i)}return t}function Ge(e){let t=[];e.title.trim()||t.push({questionId:null,severity:`warning`,message:`Quiz has no title`}),e.questions.length===0&&t.push({questionId:null,severity:`error`,message:`Quiz has no questions`});for(let n of e.questions)t.push(...Q(n));return t}function Ke(e){return{errors:e.filter(e=>e.severity===`error`).length,warnings:e.filter(e=>e.severity===`warning`).length}}var qe=3200;function Je(){let[e,t]=(0,P.useState)([]),n=(0,P.useRef)(0),r=(0,P.useCallback)(e=>{t(t=>t.filter(t=>t.id!==e))},[]);return{toasts:e,pushToast:(0,P.useCallback)((e,i=`success`)=>{n.current+=1;let a=n.current;t(t=>[...t,{id:a,kind:i,message:e}]),window.setTimeout(()=>r(a),qe)},[r]),dismissToast:r}}var Ye=[{keys:`Ctrl / ⌘ + S`,label:`Save quiz to browser`},{keys:`Ctrl / ⌘ + O`,label:`Open my quizzes`},{keys:`Ctrl / ⌘ + ⇧ + S`,label:`Download as .md`},{keys:`Ctrl / ⌘ + E`,label:`Export as .html`},{keys:`Ctrl / ⌘ + P`,label:`Toggle preview`},{keys:`Ctrl / ⌘ + M`,label:`Edit markdown source`},{keys:`Ctrl / ⌘ + Enter`,label:`New question`},{keys:`Ctrl / ⌘ + D`,label:`Duplicate question`},{keys:`Alt + ↑ / ↓`,label:`Move question up / down`},{keys:`Alt + ← / →`,label:`Previous / next question`},{keys:`?`,label:`Keyboard shortcuts`},{keys:`Esc`,label:`Close dialog`}];function Xe(e){return e instanceof HTMLElement?e.tagName===`INPUT`||e.tagName===`TEXTAREA`||e.tagName===`SELECT`||e.isContentEditable:!1}function Ze(e){(0,P.useEffect)(()=>{let t=t=>{let n=t.ctrlKey||t.metaKey;if(t.key===`Escape`){e.onCloseOverlay();return}if(!(n&&t.altKey)){if(n){let n=t.key.toLowerCase();n===`s`?(t.preventDefault(),t.shiftKey?e.onDownloadMarkdown():e.onSave()):n===`o`?(t.preventDefault(),e.onOpenLibrary()):n===`e`?(t.preventDefault(),e.onExport()):n===`p`?(t.preventDefault(),e.onTogglePreview()):n===`m`?(t.preventDefault(),e.onToggleMarkdown()):n===`d`?(t.preventDefault(),e.onDuplicate()):t.key===`Enter`&&(t.preventDefault(),e.onNewQuestion());return}if(t.altKey&&t.key===`ArrowUp`){t.preventDefault(),e.onMoveUp();return}if(t.altKey&&t.key===`ArrowDown`){t.preventDefault(),e.onMoveDown();return}if(t.altKey&&t.key===`ArrowLeft`){t.preventDefault(),e.onPrevQuestion();return}if(t.altKey&&t.key===`ArrowRight`){t.preventDefault(),e.onNextQuestion();return}t.key===`?`&&!Xe(t.target)&&(t.preventDefault(),e.onHelp())}};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e])}var $=n();function Qe({quiz:e,selectedId:t,issues:n,onSelect:r,onAddQuestion:a,onDownloadSample:s,onDownloadExcelTemplate:c,onUploadClick:l,onLoadSample:u,onReorder:d}){let[f,p]=(0,P.useState)(``),[m,h]=(0,P.useState)(null),[_,v]=(0,P.useState)(null),b=(0,P.useMemo)(()=>{let e=new Map;for(let t of n){if(!t.questionId)continue;let n=e.get(t.questionId)??{errors:0,warnings:0};t.severity===`error`?n.errors+=1:n.warnings+=1,e.set(t.questionId,n)}return e},[n]),x=(0,P.useMemo)(()=>{let t=f.trim().toLowerCase();return e.questions.map((e,t)=>({question:e,index:t})).filter(({question:e})=>!t||e.text.toLowerCase().includes(t))},[e.questions,f]);return(0,$.jsxs)(`div`,{className:M.sidebarInner,children:[(0,$.jsxs)(`div`,{className:M.sidebarSection,children:[(0,$.jsxs)(`button`,{type:`button`,className:M.sidebarBtn,onClick:l,children:[(0,$.jsx)(o,{size:16}),`Upload .md or Excel`]}),(0,$.jsxs)(`button`,{type:`button`,className:M.sidebarBtn,onClick:s,children:[(0,$.jsx)(D,{size:16}),`Sample .md`]}),(0,$.jsxs)(`button`,{type:`button`,className:M.sidebarBtn,onClick:c,children:[(0,$.jsx)(te,{size:16}),`Excel template`]}),(0,$.jsxs)(`button`,{type:`button`,className:M.sidebarBtn,onClick:u,children:[(0,$.jsx)(ie,{size:16}),`Load example quiz`]})]}),(0,$.jsx)(`div`,{className:M.sidebarDivider}),(0,$.jsxs)(`div`,{className:M.sidebarHeaderRow,children:[(0,$.jsxs)(`span`,{children:[`Questions (`,e.questions.length,`)`]}),(0,$.jsx)(`button`,{type:`button`,className:M.iconBtn,onClick:a,title:`Add question`,children:(0,$.jsx)(T,{size:15})})]}),e.questions.length>4&&(0,$.jsxs)(`div`,{className:M.sidebarSearch,children:[(0,$.jsx)(i,{size:14}),(0,$.jsx)(`input`,{type:`text`,value:f,onChange:e=>p(e.target.value),placeholder:`Filter questions`,"aria-label":`Filter questions`})]}),(0,$.jsxs)(`div`,{className:M.questionList,children:[x.length===0&&(0,$.jsx)(`p`,{className:M.sidebarEmpty,children:e.questions.length===0?`No questions yet`:`No matches`}),x.map(({question:e,index:n})=>{let i=b.get(e.id),a=e.text.split(`
`)[0].replace(/[`*_#]/g,``).trim(),o=[M.questionListItem,t===e.id?M.questionListItemActive:``,m===n?M.questionListItemDragging:``,_===n&&m!==null&&m!==n?M.questionListItemDropTarget:``].filter(Boolean).join(` `);return(0,$.jsxs)(`button`,{type:`button`,draggable:!f.trim(),className:o,onClick:()=>r(e.id),onDragStart:e=>{e.stopPropagation(),e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,String(n)),h(n)},onDragOver:e=>{m!==null&&(e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect=`move`,v(n))},onDrop:e=>{m!==null&&(e.preventDefault(),e.stopPropagation(),m!==n&&d(m,n),h(null),v(null))},onDragEnd:()=>{h(null),v(null)},children:[(0,$.jsx)(g,{size:13,className:M.dragHandle}),(0,$.jsx)(`span`,{className:M.questionListIndex,children:n+1}),(0,$.jsx)(`span`,{className:M.questionListLabel,children:a||`Untitled question`}),i&&i.errors>0&&(0,$.jsx)(y,{size:14,className:M.issueIconError}),i&&i.errors===0&&i.warnings>0&&(0,$.jsx)(y,{size:14,className:M.issueIconWarning})]},e.id)})]})]})}var $e=[{value:`single`,label:`Single choice`,hint:`One correct answer`},{value:`multi`,label:`Multiple choice`,hint:`Several correct answers`},{value:`boolean`,label:`True / False`,hint:`Two fixed options`}];function et({question:e,index:t,total:n,onChange:r,onDelete:i,onDuplicate:o,onMove:s,onNavigate:c}){let[l,u]=(0,P.useState)(!1),d=(0,P.useMemo)(()=>Q(e),[e]),f=(0,P.useMemo)(()=>O(e.text),[e.text]),m=t=>{if(t===`boolean`){r({...e,type:t,options:[{id:j(`o`),text:`True`,correct:!0},{id:j(`o`),text:`False`,correct:!1}]});return}if(t===`single`){let n=!1,i=e.options.map(e=>e.correct&&!n?(n=!0,e):{...e,correct:!1});r({...e,type:t,options:i});return}r({...e,type:t})},g=(t,n)=>{r({...e,options:e.options.map(e=>e.id===t?{...e,text:n}:e)})},_=t=>{e.type===`multi`?r({...e,options:e.options.map(e=>e.id===t?{...e,correct:!e.correct}:e)}):r({...e,options:e.options.map(e=>({...e,correct:e.id===t}))})},v=()=>r({...e,options:[...e.options,{id:j(`o`),text:``,correct:!1}]}),te=t=>r({...e,options:e.options.filter(e=>e.id!==t)}),ne=(t,n)=>{let i=t+n;if(i<0||i>=e.options.length)return;let a=[...e.options];[a[t],a[i]]=[a[i],a[t]],r({...e,options:a})};return(0,$.jsxs)(`div`,{className:M.questionEditor,children:[(0,$.jsxs)(`div`,{className:M.editorHeader,children:[(0,$.jsxs)(`div`,{className:M.editorHeaderLeft,children:[c&&(0,$.jsx)(`button`,{type:`button`,className:M.iconBtn,onClick:()=>c(-1),disabled:t===0,title:`Previous question (Alt + ←)`,children:(0,$.jsx)(S,{size:16})}),(0,$.jsxs)(`span`,{className:M.editorBadge,children:[`Question `,t+1]}),(0,$.jsxs)(`span`,{className:M.editorCount,children:[`of `,n]}),c&&(0,$.jsx)(`button`,{type:`button`,className:M.iconBtn,onClick:()=>c(1),disabled:t===n-1,title:`Next question (Alt + →)`,children:(0,$.jsx)(p,{size:16})})]}),(0,$.jsxs)(`div`,{className:M.editorHeaderActions,children:[(0,$.jsx)(`button`,{type:`button`,className:M.iconBtn,onClick:()=>s(-1),disabled:t===0,title:`Move up (Alt + ↑)`,children:(0,$.jsx)(h,{size:16})}),(0,$.jsx)(`button`,{type:`button`,className:M.iconBtn,onClick:()=>s(1),disabled:t===n-1,title:`Move down (Alt + ↓)`,children:(0,$.jsx)(a,{size:16})}),(0,$.jsx)(`button`,{type:`button`,className:M.iconBtn,onClick:o,title:`Duplicate (Ctrl/⌘ + D)`,children:(0,$.jsx)(b,{size:16})}),(0,$.jsx)(`button`,{type:`button`,className:M.iconBtnDanger,onClick:i,title:`Delete question`,children:(0,$.jsx)(E,{size:16})})]})]}),d.length>0&&(0,$.jsx)(`ul`,{className:M.issueList,children:d.map((e,t)=>(0,$.jsxs)(`li`,{className:e.severity===`error`?M.issueError:M.issueWarning,children:[(0,$.jsx)(y,{size:13}),e.message]},t))}),(0,$.jsxs)(`div`,{className:M.fieldRow,children:[(0,$.jsxs)(`label`,{className:M.fieldLabel,children:[`Type`,(0,$.jsx)(`select`,{value:e.type,onChange:e=>m(e.target.value),className:M.select,children:$e.map(e=>(0,$.jsx)(`option`,{value:e.value,children:e.label},e.value))})]}),(0,$.jsxs)(`label`,{className:M.fieldLabel,children:[`Points`,(0,$.jsx)(`input`,{type:`number`,min:1,value:e.points,onChange:t=>r({...e,points:Math.max(1,Number(t.target.value)||1)}),className:M.numberInput})]})]}),(0,$.jsxs)(`div`,{className:M.fieldBlock,children:[(0,$.jsxs)(`div`,{className:M.fieldLabelRow,children:[(0,$.jsx)(`span`,{className:M.fieldLabelText,children:`Question`}),(0,$.jsxs)(`button`,{type:`button`,className:M.ghostBtn,onClick:()=>u(e=>!e),children:[(0,$.jsx)(x,{size:14}),l?`Hide render`:`Show render`]})]}),(0,$.jsx)(`textarea`,{value:e.text,onChange:t=>r({...e,text:t.target.value}),placeholder:"Ask something... Markdown and ``` code blocks are supported",className:M.questionTextarea}),l&&e.text.trim()&&(0,$.jsx)(`div`,{className:M.inlineRender,dangerouslySetInnerHTML:{__html:f}})]}),(0,$.jsxs)(`div`,{className:M.fieldBlock,children:[(0,$.jsxs)(`span`,{className:M.fieldLabelText,children:[`Answers`,(0,$.jsx)(`span`,{className:M.fieldHint,children:e.type===`multi`?`Tick every correct answer`:`Pick the correct answer`})]}),(0,$.jsx)(`div`,{className:M.optionsList,children:e.options.map((t,n)=>(0,$.jsxs)(`div`,{className:`${M.optionRow} ${t.correct?M.optionRowCorrect:``}`,children:[(0,$.jsx)(`input`,{type:e.type===`multi`?`checkbox`:`radio`,checked:t.correct,onChange:()=>_(t.id),"aria-label":`Mark as correct`}),e.type===`boolean`?(0,$.jsx)(`span`,{className:M.booleanLabel,children:t.text}):(0,$.jsx)(`input`,{type:`text`,value:t.text,onChange:e=>g(t.id,e.target.value),placeholder:`Option ${n+1}`,className:M.optionInput}),e.type!==`boolean`&&(0,$.jsxs)(`div`,{className:M.optionActions,children:[(0,$.jsx)(`button`,{type:`button`,className:M.iconBtnSmall,onClick:()=>ne(n,-1),disabled:n===0,title:`Move up`,children:(0,$.jsx)(h,{size:13})}),(0,$.jsx)(`button`,{type:`button`,className:M.iconBtnSmall,onClick:()=>ne(n,1),disabled:n===e.options.length-1,title:`Move down`,children:(0,$.jsx)(a,{size:13})}),(0,$.jsx)(`button`,{type:`button`,className:M.iconBtnSmall,onClick:()=>te(t.id),disabled:e.options.length<=2,title:`Remove option`,children:(0,$.jsx)(E,{size:13})})]})]},t.id))}),e.type!==`boolean`&&(0,$.jsxs)(`button`,{type:`button`,className:M.addOptionBtn,onClick:v,children:[(0,$.jsx)(T,{size:14}),`Add option`]})]}),(0,$.jsxs)(`div`,{className:M.fieldBlock,children:[(0,$.jsxs)(`span`,{className:M.fieldLabelText,children:[(0,$.jsx)(ee,{size:14}),`Explanation`,(0,$.jsx)(`span`,{className:M.fieldHint,children:`Shown after answering`})]}),(0,$.jsx)(`textarea`,{value:e.explanation,onChange:t=>r({...e,explanation:t.target.value}),placeholder:`Optional: explain why the answer is correct`,className:M.explanationTextarea})]})]})}function tt({quiz:e,issues:t,expandedId:n,onToggle:r,onChange:i,onDelete:o,onDuplicate:s,onMove:c,onAddQuestion:l}){return(0,$.jsxs)(`div`,{className:M.accordionList,children:[e.questions.map((l,u)=>{let d=l.id===n,f=t.filter(e=>e.questionId===l.id),p=f.some(e=>e.severity===`error`),m=f.some(e=>e.severity===`warning`),h=l.text.split(`
`)[0].replace(/[`*_#]/g,``).trim();return(0,$.jsxs)(`div`,{className:M.accordionItem,children:[(0,$.jsxs)(`button`,{type:`button`,className:M.accordionSummary,onClick:()=>r(l.id),"aria-expanded":d,children:[(0,$.jsx)(`span`,{className:M.questionListIndex,children:u+1}),(0,$.jsx)(`span`,{className:M.accordionSummaryText,children:h||`Untitled question`}),p&&(0,$.jsx)(y,{size:15,className:M.issueIconError}),!p&&m&&(0,$.jsx)(y,{size:15,className:M.issueIconWarning}),(0,$.jsx)(a,{size:16,className:`${M.accordionChevron} ${d?M.accordionChevronOpen:``}`})]}),d&&(0,$.jsx)(`div`,{className:M.accordionBody,children:(0,$.jsx)(et,{question:l,index:u,total:e.questions.length,onChange:e=>i(l.id,e),onDelete:()=>o(l.id),onDuplicate:()=>s(l.id),onMove:e=>c(l.id,e)})})]},l.id)}),(0,$.jsxs)(`button`,{type:`button`,className:M.accordionAddBtn,onClick:l,children:[(0,$.jsx)(T,{size:16}),`Add question`]})]})}function nt(e){let t=e+1831565813;return()=>(t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296)}function rt(e,t){let n=[...e];for(let e=n.length-1;e>0;--e){let r=Math.floor(t()*(e+1));[n[e],n[r]]=[n[r],n[e]]}return n}function it(e,t){let n=e.options.filter(e=>e.correct).map(e=>e.id).sort(),r=[...t].sort();return n.length>0&&r.length===n.length&&r.every((e,t)=>e===n[t])}function at(e){return`${Math.floor(e/60)}:${(e%60).toString().padStart(2,`0`)}`}function ot({quiz:e}){let[t,n]=(0,P.useState)(0),[r,i]=(0,P.useState)({}),[a,o]=(0,P.useState)(!1),[s,c]=(0,P.useState)(()=>Date.now()),[u,d]=(0,P.useState)(()=>Date.now()),f=e.settings.timeLimitMinutes*60,p=(0,P.useMemo)(()=>{let n=nt(t+1),r=e.settings.shuffleQuestions?rt(e.questions,n):e.questions;return e.settings.shuffleOptions?r.map(e=>({...e,options:rt(e.options,n)})):r},[e.questions,e.settings.shuffleQuestions,e.settings.shuffleOptions,t]),m=f>0?Math.max(0,f-Math.floor((u-s)/1e3)):0,h=f>0&&m<=0,g=a||h;(0,P.useEffect)(()=>{if(f<=0||g)return;let e=window.setInterval(()=>d(Date.now()),500);return()=>window.clearInterval(e)},[f,g]);let _=(0,P.useMemo)(()=>O(e.description),[e.description]),v=p.filter(e=>(r[e.id]??[]).length>0).length,y=(0,P.useMemo)(()=>{let t=0,n=0,i=0;for(let e of p)n+=e.points||1,it(e,r[e.id]??[])&&(t+=e.points||1,i+=1);let a=n>0?Math.round(t/n*100):0;return{earned:t,possible:n,correctCount:i,percent:a,passed:a>=e.settings.passMark}},[p,r,e.settings.passMark]),b=(t,n)=>{g||e.settings.instantFeedback&&(r[t.id]??[]).length>0&&t.type!==`multi`||i(e=>{let r=e[t.id]??[];if(t.type===`multi`){let i=r.includes(n)?r.filter(e=>e!==n):[...r,n];return{...e,[t.id]:i}}return{...e,[t.id]:[n]}})};return p.length===0?(0,$.jsx)(`p`,{className:M.emptyState,children:`Add a question to see the preview.`}):(0,$.jsxs)(`div`,{className:M.previewWrap,children:[(0,$.jsxs)(`div`,{className:M.previewHeader,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h2`,{className:M.previewTitle,children:e.title||`Untitled Quiz`}),e.description&&(0,$.jsx)(`div`,{className:M.previewDesc,dangerouslySetInnerHTML:{__html:_}})]}),f>0&&!g&&(0,$.jsxs)(`span`,{className:`${M.timerChip} ${m<=30?M.timerChipLow:``}`,children:[(0,$.jsx)(l,{size:15}),at(m)]})]}),(0,$.jsx)(`div`,{className:M.progressBar,children:(0,$.jsx)(`div`,{className:M.progressFill,style:{width:`${v/p.length*100}%`}})}),(0,$.jsxs)(`p`,{className:M.progressLabel,children:[v,` of `,p.length,` answered`]}),p.map((n,i)=>{let a=r[n.id]??[],o=g||e.settings.instantFeedback&&a.length>0,s=it(n,a);return(0,$.jsxs)(`div`,{className:M.previewQuestion,children:[(0,$.jsxs)(`div`,{className:M.previewQuestionHead,children:[(0,$.jsxs)(`span`,{className:M.previewQuestionLabel,children:[`Question `,i+1]}),n.points>1&&(0,$.jsxs)(`span`,{className:M.pointsChip,children:[n.points,` pts`]}),o&&(0,$.jsx)(`span`,{className:s?M.verdictCorrect:M.verdictIncorrect,children:s?`Correct`:`Incorrect`})]}),(0,$.jsx)(`div`,{className:M.previewQuestionBody,dangerouslySetInnerHTML:{__html:O(n.text)}}),n.options.map(e=>{let r=a.includes(e.id),i=M.previewOption;return o&&e.correct?i+=` ${M.previewOptionCorrect}`:o&&r?i+=` ${M.previewOptionIncorrect}`:r&&(i+=` ${M.previewOptionChecked}`),(0,$.jsxs)(`label`,{className:i,children:[(0,$.jsx)(`input`,{type:n.type===`multi`?`checkbox`:`radio`,name:`preview-${t}-${n.id}`,checked:r,disabled:g,onChange:()=>b(n,e.id)}),(0,$.jsx)(`span`,{children:e.text||(0,$.jsx)(`em`,{children:`(empty option)`})})]},e.id)}),o&&n.explanation.trim()&&(0,$.jsxs)(`div`,{className:M.explanationBox,children:[(0,$.jsx)(ee,{size:15}),(0,$.jsx)(`div`,{dangerouslySetInnerHTML:{__html:O(n.explanation)}})]})]},n.id)}),(0,$.jsx)(`div`,{className:M.previewToolbar,children:g?(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{className:y.passed?M.resultPass:M.resultFail,children:[(0,$.jsxs)(`strong`,{children:[y.percent,`%`]}),(0,$.jsxs)(`span`,{children:[y.earned,` / `,y.possible,` points · `,y.correctCount,` of`,` `,p.length,` correct · `,y.passed?`Passed`:`Below pass mark`,` (`,e.settings.passMark,`%)`,h&&!a?` · time up`:``]})]}),(0,$.jsxs)(`button`,{type:`button`,className:M.secondaryBtn,onClick:()=>{i({}),o(!1),n(e=>e+1),c(Date.now()),d(Date.now())},children:[(0,$.jsx)(ae,{size:15}),`Retry`]})]}):(0,$.jsx)(`button`,{type:`button`,className:M.primaryStudioBtn,onClick:()=>o(!0),children:`Submit answers`})})]})}function st({title:e,onClose:t,children:n,footer:i,width:a=460}){return(0,$.jsx)(r.div,{className:M.modalOverlay,onClick:t,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.16},children:(0,$.jsxs)(r.div,{className:M.modalPanel,style:{maxWidth:a},onClick:e=>e.stopPropagation(),initial:{opacity:0,y:14,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:8,scale:.98},transition:{duration:.22,ease:[.16,1,.3,1]},role:`dialog`,"aria-modal":`true`,"aria-label":e,children:[(0,$.jsxs)(`div`,{className:M.modalHeader,children:[(0,$.jsx)(`h3`,{className:M.modalTitle,children:e}),(0,$.jsx)(`button`,{type:`button`,className:M.iconBtn,onClick:t,"aria-label":`Close`,children:(0,$.jsx)(_,{size:18})})]}),(0,$.jsx)(`div`,{className:M.modalBody,children:n}),i&&(0,$.jsx)(`div`,{className:M.modalActions,children:i})]})})}function ct({quiz:e,issues:t,onClose:n,onDownloadHtml:r,onDownloadMarkdown:i,onDownloadExcel:a}){let{errors:o,warnings:s}=Ke(t),c=A(e);return(0,$.jsxs)(st,{title:`Export quiz`,onClose:n,width:470,footer:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`button`,{type:`button`,className:M.secondaryBtn,onClick:i,children:`.md`}),(0,$.jsx)(`button`,{type:`button`,className:M.secondaryBtn,onClick:a,children:`.xlsx`}),(0,$.jsx)(`button`,{type:`button`,className:M.primaryStudioBtn,onClick:r,children:`Download .html`})]}),children:[(0,$.jsxs)(`div`,{className:M.shareCard,children:[(0,$.jsx)(`div`,{className:M.shareCardIcon,children:(0,$.jsx)(u,{size:24})}),(0,$.jsx)(`h3`,{className:M.shareCardTitle,children:e.title||`Untitled Quiz`}),e.description&&(0,$.jsx)(`p`,{className:M.shareCardDesc,children:e.description}),(0,$.jsxs)(`div`,{className:M.shareCardStats,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:e.questions.length}),` questions`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:c}),` points`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsxs)(`strong`,{children:[e.settings.passMark,`%`]}),` to pass`]}),e.settings.timeLimitMinutes>0&&(0,$.jsxs)(`span`,{children:[(0,$.jsx)(l,{size:13}),` `,(0,$.jsx)(`strong`,{children:e.settings.timeLimitMinutes}),` min`]})]})]}),(o>0||s>0)&&(0,$.jsxs)(`div`,{className:o>0?M.exportWarnError:M.exportWarn,children:[(0,$.jsx)(y,{size:15}),(0,$.jsxs)(`span`,{children:[o>0&&`${o} error${o===1?``:`s`}`,o>0&&s>0&&` · `,s>0&&`${s} warning${s===1?``:`s`}`,o>0?` — questions with no correct answer will always score as wrong.`:` — you can still export.`]})]}),(0,$.jsx)(`p`,{className:M.modalHint,children:`The .html file is fully self-contained — no server, no internet, no install. Open it anywhere or send it to someone.`})]})}function lt(e){let t=new Date(e);return Number.isNaN(t.getTime())?``:t.toLocaleString(void 0,{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`})}function ut({entries:e,currentId:t,onClose:n,onSaveCurrent:r,onOpen:i,onDelete:a,onDuplicate:o,onRename:s,onNewQuiz:l}){let[u,d]=(0,P.useState)(null),[f,p]=(0,P.useState)(``),m=()=>{u&&f.trim()&&s(u,f.trim()),d(null)};return(0,$.jsxs)(st,{title:`My quizzes`,onClose:n,width:560,footer:(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`button`,{type:`button`,className:M.secondaryBtn,onClick:l,children:[(0,$.jsx)(T,{size:15}),`New quiz`]}),(0,$.jsxs)(`button`,{type:`button`,className:M.primaryStudioBtn,onClick:r,children:[(0,$.jsx)(c,{size:15}),`Save current quiz`]})]}),children:[e.length===0?(0,$.jsxs)(`div`,{className:M.libraryEmpty,children:[(0,$.jsx)(C,{size:28}),(0,$.jsxs)(`p`,{children:[`No saved quizzes yet. Hit `,(0,$.jsx)(`strong`,{children:`Save current quiz`}),` to keep this one and start another — they all stay in this browser.`]})]}):(0,$.jsx)(`ul`,{className:M.libraryList,children:e.map(e=>{let n=e.id===t,r=e.quiz.questions.length,s=`${r} question${r===1?``:`s`} · ${A(e.quiz)} pts · saved ${lt(e.savedAt)}`;return(0,$.jsxs)(`li`,{className:`${M.libraryRow} ${n?M.libraryRowCurrent:``}`,children:[u===e.id?(0,$.jsxs)(`div`,{className:M.libraryMain,children:[(0,$.jsx)(`input`,{autoFocus:!0,value:f,onChange:e=>p(e.target.value),onBlur:m,onKeyDown:e=>{e.key===`Enter`&&m(),e.key===`Escape`&&d(null)},className:M.libraryRenameInput}),(0,$.jsx)(`span`,{className:M.libraryMeta,children:s})]}):(0,$.jsxs)(`button`,{type:`button`,className:M.libraryMain,onClick:()=>i(e),title:`Open this quiz`,children:[(0,$.jsxs)(`span`,{className:M.libraryTitle,children:[(0,$.jsx)(`span`,{className:M.libraryTitleText,children:e.quiz.title||`Untitled Quiz`}),n&&(0,$.jsx)(`span`,{className:M.libraryCurrentTag,children:`open`})]}),(0,$.jsx)(`span`,{className:M.libraryMeta,children:s})]}),(0,$.jsxs)(`div`,{className:M.libraryActions,children:[(0,$.jsx)(`button`,{type:`button`,className:M.iconBtnSmall,title:`Rename`,onClick:()=>{d(e.id),p(e.quiz.title)},children:(0,$.jsx)(w,{size:14})}),(0,$.jsx)(`button`,{type:`button`,className:M.iconBtnSmall,title:`Duplicate`,onClick:()=>o(e.id),children:(0,$.jsx)(b,{size:14})}),(0,$.jsx)(`button`,{type:`button`,className:M.iconBtnSmall,title:`Delete`,onClick:()=>a(e.id),children:(0,$.jsx)(E,{size:14})})]})]},e.id)})}),(0,$.jsx)(`p`,{className:M.modalHint,children:`Saved quizzes live in this browser only (localStorage) — they aren't uploaded anywhere. Use Export to get a file you can keep or share.`})]})}function dt({settings:e,onChange:t,onClose:n}){let r=n=>t({...e,[n]:!e[n]});return(0,$.jsx)(st,{title:`Quiz settings`,onClose:n,width:480,children:(0,$.jsxs)(`div`,{className:M.settingsList,children:[(0,$.jsxs)(`label`,{className:M.settingRow,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:`Shuffle questions`}),(0,$.jsx)(`small`,{children:`Randomise question order on every attempt`})]}),(0,$.jsx)(`input`,{type:`checkbox`,checked:e.shuffleQuestions,onChange:()=>r(`shuffleQuestions`)})]}),(0,$.jsxs)(`label`,{className:M.settingRow,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:`Shuffle options`}),(0,$.jsx)(`small`,{children:`Randomise answer order within each question`})]}),(0,$.jsx)(`input`,{type:`checkbox`,checked:e.shuffleOptions,onChange:()=>r(`shuffleOptions`)})]}),(0,$.jsxs)(`label`,{className:M.settingRow,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:`Instant feedback`}),(0,$.jsx)(`small`,{children:`Reveal the answer and explanation as soon as it's picked`})]}),(0,$.jsx)(`input`,{type:`checkbox`,checked:e.instantFeedback,onChange:()=>r(`instantFeedback`)})]}),(0,$.jsxs)(`label`,{className:M.settingRow,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:`Pass mark`}),(0,$.jsx)(`small`,{children:`Minimum score to pass`})]}),(0,$.jsxs)(`span`,{className:M.settingInputWrap,children:[(0,$.jsx)(`input`,{type:`number`,min:0,max:100,value:e.passMark,onChange:n=>t({...e,passMark:Math.min(100,Math.max(0,Number(n.target.value)||0))}),className:M.numberInput}),`%`]})]}),(0,$.jsxs)(`label`,{className:M.settingRow,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:`Time limit`}),(0,$.jsx)(`small`,{children:`0 means no limit`})]}),(0,$.jsxs)(`span`,{className:M.settingInputWrap,children:[(0,$.jsx)(`input`,{type:`number`,min:0,value:e.timeLimitMinutes,onChange:n=>t({...e,timeLimitMinutes:Math.max(0,Number(n.target.value)||0)}),className:M.numberInput}),`min`]})]}),(0,$.jsxs)(`label`,{className:M.settingRow,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:`Exported file theme`}),(0,$.jsx)(`small`,{children:`Appearance of the downloaded .html quiz`})]}),(0,$.jsxs)(`select`,{value:e.theme,onChange:n=>t({...e,theme:n.target.value}),className:M.select,children:[(0,$.jsx)(`option`,{value:`light`,children:`Light`}),(0,$.jsx)(`option`,{value:`dark`,children:`Dark`})]})]})]})})}function ft({onClose:e}){return(0,$.jsx)(st,{title:`Keyboard shortcuts`,onClose:e,width:420,children:(0,$.jsx)(`ul`,{className:M.shortcutList,children:Ye.map(e=>(0,$.jsxs)(`li`,{className:M.shortcutRow,children:[(0,$.jsx)(`span`,{children:e.label}),(0,$.jsx)(`kbd`,{className:M.kbd,children:e.keys})]},e.keys))})})}var pt={success:ce,error:y,info:ie},mt={success:M.toastSuccess,error:M.toastError,info:M.toastInfo};function ht({toasts:e,onDismiss:t}){return(0,$.jsx)(`div`,{className:M.toastStack,children:(0,$.jsx)(le,{initial:!1,children:e.map(e=>{let n=pt[e.kind];return(0,$.jsxs)(r.button,{type:`button`,onClick:()=>t(e.id),className:`${M.toast} ${mt[e.kind]}`,initial:{opacity:0,y:12,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:8,scale:.96},transition:{duration:.22,ease:[.16,1,.3,1]},children:[(0,$.jsx)(n,{size:17}),(0,$.jsx)(`span`,{children:e.message})]},e.id)})})})}function gt(e,t){let n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=e,r.click(),URL.revokeObjectURL(n)}function _t(e,t,n){gt(e,new Blob([t],{type:n}))}function vt(e){return e.toLowerCase().trim().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)||`quiz`}function yt(){let[e,t]=(0,P.useState)(()=>ve()??V(Te)),[n,i]=(0,P.useState)(null),[a,o]=(0,P.useState)(`edit`),[l,u]=(0,P.useState)(null),[p,m]=(0,P.useState)(!1),h=be(`(max-width: 860px)`),[g,b]=(0,P.useState)(null),[ee,te]=(0,P.useState)(null),[ie,ae]=(0,P.useState)(!1),[S,C]=(0,P.useState)(()=>Z()),[w,E]=(0,P.useState)(null),[D,O]=(0,P.useState)(null),k=(0,P.useRef)(null),A=(0,P.useRef)(!1),{toasts:j,pushToast:N,dismissToast:xe}=Je();(0,P.useEffect)(()=>{A.current||(A.current=!0,ve()&&N(`Restored your last draft`,`info`))},[N]),(0,P.useEffect)(()=>{let t=window.setTimeout(()=>{he(e),te(new Date)},600);return()=>window.clearTimeout(t)},[e]),(0,P.useEffect)(()=>{if(D===null)return;let e=window.setTimeout(()=>{let e=V(D);e.questions.length>0&&t(e)},500);return()=>window.clearTimeout(e)},[D]);let F=t=>{O(t===`markdown`?we(e):null),o(t)},I=(0,P.useMemo)(()=>D===null?0:V(D).questions.length,[D]),L=(0,P.useMemo)(()=>Ge(e),[e]),Se=(0,P.useMemo)(()=>Ke(L),[L]),R=n&&e.questions.some(e=>e.id===n)?n:e.questions[0]?.id??null,z=e.questions.findIndex(e=>e.id===R),B=z>=0?e.questions[z]:null,Ce=(e,n)=>t(t=>({...t,questions:t.questions.map(t=>t.id===e?n:t)})),H=(0,P.useCallback)(()=>{let e=ye();t(t=>({...t,questions:[...t.questions,e]})),i(e.id),b(e.id),o(e=>e===`preview`?`edit`:e),N(`Question added`)},[N]),Ee=e=>{t(t=>({...t,questions:t.questions.filter(t=>t.id!==e)})),N(`Question deleted`)},De=(0,P.useCallback)(n=>{let r=e.questions.find(e=>e.id===n);if(!r)return;let a=_e(r);t(e=>{let t=e.questions.findIndex(e=>e.id===n),r=[...e.questions];return r.splice(t+1,0,a),{...e,questions:r}}),i(a.id),b(a.id),N(`Question duplicated`)},[e.questions,N]),ke=(0,P.useCallback)(()=>{B&&De(B.id)},[B,De]),Ae=(0,P.useCallback)((e,n)=>{t(t=>{if(e===n||e<0||n<0||e>=t.questions.length||n>=t.questions.length)return t;let r=[...t.questions],[i]=r.splice(e,1);return r.splice(n,0,i),{...t,questions:r}})},[]),U=(0,P.useCallback)((e,n)=>{t(t=>{let r=t.questions.findIndex(t=>t.id===e),i=r+n;if(r<0||i<0||i>=t.questions.length)return t;let a=[...t.questions];return[a[r],a[i]]=[a[i],a[r]],{...t,questions:a}})},[]),W=(0,P.useCallback)(e=>{R&&U(R,e)},[R,U]),G=t=>{let n=z+t;n<0||n>=e.questions.length||(i(e.questions[n].id),o(e=>e===`preview`?`edit`:e))},je=(0,P.useCallback)((e,n)=>{let r=V(e);if(r.questions.length===0){N(`No questions found in that file`,`error`);return}t(r),i(r.questions[0].id),N(`Loaded ${r.questions.length} questions from ${n}`)},[N]),K=(0,P.useCallback)(async e=>{try{let n=await Le(e);if(n.questions.length===0){N(`No questions found — check the sheet names and headers`,`error`);return}t(n),i(n.questions[0].id),E(null),N(`Loaded ${n.questions.length} questions from ${e.name}`)}catch{N(`Couldn't read that spreadsheet`,`error`)}},[N]),q=(0,P.useCallback)(async e=>{if(/\.(xlsx|xlsm|xls)$/i.test(e.name)){await K(e);return}je(await e.text(),e.name)},[K,je]),J=async()=>{gt(`quiz-template.xlsx`,await Re()),N(`Excel template downloaded`)},Me=async e=>{let t=e.target.files?.[0];e.target.value=``,t&&await q(t)},Ne=e=>Array.from(e.dataTransfer.types??[]).includes(`Files`),Pe=async e=>{if(!Ne(e))return;e.preventDefault(),ae(!1);let t=e.dataTransfer.files?.[0];if(t){if(!/\.(md|markdown|txt|xlsx|xlsm|xls)$/i.test(t.name)){N(`Drop a .md or .xlsx file`,`error`);return}await q(t)}},Fe=(0,P.useCallback)(()=>{_t(`${vt(e.title)}.md`,we(e),`text/markdown`),N(`Saved as .md`)},[e,N]),Ie=(0,P.useCallback)(async()=>{gt(`${vt(e.title)}.xlsx`,await Re(e)),N(`Quiz exported as .xlsx`)},[e,N]),ze=(0,P.useCallback)(()=>{_t(`${vt(e.title)}.html`,Oe(e),`text/html`),u(null),N(`Quiz exported as .html`)},[e,N]),Be=()=>{let e=V(Te);t(e),i(e.questions[0]?.id??null),N(`Example quiz loaded`,`info`)},Y=e=>e.title.trim()!==`Untitled Quiz`||e.questions.some(e=>e.text.trim()),X=e=>we(e)===we(V(Te)),Q=()=>C(Z()),qe=(0,P.useCallback)(()=>{if(!w&&(!Y(e)||X(e)))return!1;let t=Ve(e,w);return t&&E(t.id),!!t},[e,w]),Ye=(0,P.useCallback)(()=>{let t=Ve(e,w);if(!t){N(`Couldn't save — browser storage is full or blocked`,`error`);return}E(t.id),C(Z()),N(`Saved "${e.title||`Untitled Quiz`}" to your quizzes`)},[e,w,N]),Xe=e=>{let n=e.id!==w&&qe();t(e.quiz),i(e.quiz.questions[0]?.id??null),E(e.id),C(Z()),u(null);let r=e.quiz.title||`Untitled Quiz`;N(n?`Opened "${r}" — previous quiz saved`:`Opened "${r}"`)},$e=(0,P.useCallback)(()=>{let e=qe(),n=me();ge(),t(n),i(n.questions[0]?.id??null),E(null),C(Z()),u(null),N(e?`Previous quiz kept in your quizzes`:`New blank quiz`,`info`)},[qe,N]);return Ze({onSave:Ye,onDownloadMarkdown:Fe,onOpenLibrary:()=>u(`library`),onExport:()=>u(`export`),onTogglePreview:()=>F(a===`preview`?`edit`:`preview`),onToggleMarkdown:()=>F(a===`markdown`?`edit`:`markdown`),onNewQuestion:H,onDuplicate:ke,onMoveUp:()=>W(-1),onMoveDown:()=>W(1),onPrevQuestion:()=>G(-1),onNextQuestion:()=>G(1),onHelp:()=>u(`shortcuts`),onCloseOverlay:()=>{u(null),m(!1)}}),(0,$.jsxs)(`div`,{className:M.studio,onDragOver:e=>{Ne(e)&&(e.preventDefault(),ae(!0))},onDragLeave:()=>ae(!1),onDrop:Pe,children:[(0,$.jsxs)(`header`,{className:M.topbar,children:[(0,$.jsx)(`button`,{type:`button`,className:`${M.iconBtn} ${M.menuToggle}`,onClick:()=>m(e=>!e),"aria-label":`Toggle sidebar`,children:p?(0,$.jsx)(_,{size:20}):(0,$.jsx)(s,{size:20})}),(0,$.jsxs)(v,{to:`/`,className:M.exitLink,title:`Back to imango.in`,children:[(0,$.jsx)(oe,{size:15}),(0,$.jsx)(ne,{size:19})]}),(0,$.jsx)(`span`,{className:M.topbarDivider}),(0,$.jsx)(`span`,{className:M.topbarTitle,children:`Quiz Studio`}),(0,$.jsx)(`span`,{className:M.saveState,children:Se.errors>0?(0,$.jsxs)(`span`,{className:M.saveStateWarn,children:[(0,$.jsx)(y,{size:14}),Se.errors,` to fix`]}):ee?(0,$.jsxs)(`span`,{className:M.saveStateOk,children:[(0,$.jsx)(ce,{size:14}),`Saved`]}):null}),(0,$.jsxs)(`div`,{className:M.topbarActions,children:[(0,$.jsxs)(`button`,{type:`button`,className:M.secondaryBtn,onClick:()=>u(`library`),title:`My quizzes (Ctrl/⌘ + O)`,children:[(0,$.jsx)(ue,{size:15}),(0,$.jsxs)(`span`,{className:M.btnLabel,children:[`My quizzes`,S.length>0?` (${S.length})`:``]})]}),(0,$.jsxs)(`button`,{type:`button`,className:M.secondaryBtn,onClick:Ye,title:`Save quiz to this browser (Ctrl/⌘ + S)`,children:[(0,$.jsx)(c,{size:15}),(0,$.jsx)(`span`,{className:M.btnLabel,children:`Save`})]}),(0,$.jsx)(`button`,{type:`button`,className:M.iconBtn,onClick:()=>u(`settings`),title:`Quiz settings`,children:(0,$.jsx)(f,{size:18})}),(0,$.jsx)(`button`,{type:`button`,className:M.iconBtn,onClick:()=>u(`shortcuts`),title:`Keyboard shortcuts (?)`,children:(0,$.jsx)(re,{size:18})}),(0,$.jsx)(fe,{}),(0,$.jsxs)(`button`,{type:`button`,className:M.primaryStudioBtn,onClick:()=>u(`export`),disabled:e.questions.length===0,children:[(0,$.jsx)(pe,{size:15}),(0,$.jsx)(`span`,{className:M.btnLabel,children:`Export`})]})]})]}),(0,$.jsxs)(`div`,{className:M.body,children:[(0,$.jsxs)(`aside`,{className:`${M.sidebar} ${p?M.sidebarOpen:``}`,children:[(0,$.jsx)(Qe,{quiz:e,selectedId:R,issues:L,onSelect:e=>{i(e),b(e),m(!1),o(e=>e===`preview`?`edit`:e)},onAddQuestion:H,onDownloadSample:()=>_t(`sample-quiz.md`,Te,`text/markdown`),onDownloadExcelTemplate:J,onUploadClick:()=>k.current?.click(),onLoadSample:Be,onReorder:Ae}),(0,$.jsx)(`div`,{className:M.sidebarFooter,children:(0,$.jsxs)(`button`,{type:`button`,className:M.sidebarBtn,onClick:$e,children:[(0,$.jsx)(T,{size:15}),`New quiz`]})})]}),p&&(0,$.jsx)(`div`,{className:M.scrim,onClick:()=>m(!1)}),(0,$.jsxs)(`main`,{className:M.main,children:[(0,$.jsxs)(`div`,{className:M.mainToolbar,children:[(0,$.jsxs)(`div`,{className:M.modeSwitch,children:[(0,$.jsxs)(`button`,{type:`button`,className:`${M.modeBtn} ${a===`edit`?M.modeBtnActive:``}`,onClick:()=>F(`edit`),children:[(0,$.jsx)(se,{size:15}),(0,$.jsx)(`span`,{className:M.btnLabel,children:`Edit`})]}),(0,$.jsxs)(`button`,{type:`button`,className:`${M.modeBtn} ${a===`markdown`?M.modeBtnActive:``}`,onClick:()=>F(`markdown`),title:`Edit the raw .md source (Ctrl/⌘ + M)`,children:[(0,$.jsx)(d,{size:15}),(0,$.jsx)(`span`,{className:M.btnLabel,children:`Markdown`})]}),(0,$.jsxs)(`button`,{type:`button`,className:`${M.modeBtn} ${a===`split`?M.modeBtnActive:``} ${M.splitOnly}`,onClick:()=>F(`split`),children:[(0,$.jsx)(de,{size:15}),(0,$.jsx)(`span`,{className:M.btnLabel,children:`Split`})]}),(0,$.jsxs)(`button`,{type:`button`,className:`${M.modeBtn} ${a===`preview`?M.modeBtnActive:``}`,onClick:()=>F(`preview`),children:[(0,$.jsx)(x,{size:15}),(0,$.jsx)(`span`,{className:M.btnLabel,children:`Preview`})]})]}),(0,$.jsx)(`div`,{className:M.mainToolbarActions,children:(0,$.jsx)(`button`,{type:`button`,className:M.secondaryBtn,onClick:Fe,children:`Save .md`})})]}),(0,$.jsxs)(`div`,{className:`${M.panes} ${a===`split`?M.panesSplit:M.panesSingle}`,children:[a===`markdown`&&D!==null&&(0,$.jsxs)(`section`,{className:`${M.pane} ${M.markdownPane}`,children:[(0,$.jsxs)(`div`,{className:M.markdownBar,children:[(0,$.jsxs)(`span`,{className:M.fieldLabelText,children:[(0,$.jsx)(d,{size:14}),`Markdown source`]}),(0,$.jsx)(`span`,{className:I>0?M.markdownOk:M.markdownWarn,children:I>0?`${I} question${I===1?``:`s`} detected`:`No questions detected — changes won't be applied`})]}),(0,$.jsx)(`textarea`,{value:D,onChange:e=>O(e.target.value),spellCheck:!1,className:M.markdownTextarea,"aria-label":`Quiz markdown source`}),(0,$.jsxs)(`p`,{className:M.markdownHint,children:[`Edits apply automatically. `,(0,$.jsx)(`code`,{children:`## question`}),` ·`,` `,(0,$.jsx)(`code`,{children:`- [x] correct`}),` / `,(0,$.jsx)(`code`,{children:`- [ ] wrong`}),` ·`,` `,(0,$.jsx)(`code`,{children:`> explanation`}),` · settings live in the`,` `,(0,$.jsx)(`code`,{children:`---`}),` block at the top.`]})]}),(a===`edit`||a===`split`)&&(0,$.jsxs)(`section`,{className:M.pane,children:[(0,$.jsxs)(`div`,{className:M.quizMetaFields,children:[(0,$.jsx)(`input`,{type:`text`,value:e.title,onChange:e=>t(t=>({...t,title:e.target.value})),placeholder:`Quiz title`,className:M.titleInput}),(0,$.jsx)(`textarea`,{value:e.description,onChange:e=>t(t=>({...t,description:e.target.value})),placeholder:`Short description (optional)`,className:M.descTextarea})]}),e.questions.length===0?(0,$.jsxs)(`div`,{className:M.emptyPanel,children:[(0,$.jsx)(`p`,{children:`No questions yet.`}),(0,$.jsx)(`button`,{type:`button`,className:M.primaryStudioBtn,onClick:H,children:`Add your first question`})]}):h?(0,$.jsx)(tt,{quiz:e,issues:L,expandedId:g,onToggle:e=>b(t=>t===e?null:e),onChange:Ce,onDelete:Ee,onDuplicate:De,onMove:U,onAddQuestion:H}):B&&(0,$.jsx)(et,{question:B,index:z,total:e.questions.length,onChange:e=>Ce(B.id,e),onDelete:()=>Ee(B.id),onDuplicate:ke,onMove:W,onNavigate:G},B.id)]}),(a===`preview`||a===`split`)&&(0,$.jsx)(`section`,{className:`${M.pane} ${M.previewPane}`,children:(0,$.jsx)(ot,{quiz:e})})]})]})]}),(0,$.jsx)(`input`,{ref:k,type:`file`,accept:`.md,.markdown,.txt,.xlsx,.xlsm,.xls,text/markdown`,className:M.hiddenInput,onChange:Me}),(0,$.jsx)(le,{children:ie&&(0,$.jsx)(r.div,{className:M.dropZone,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:`Drop a .md or Excel file to load it`})}),(0,$.jsxs)(le,{children:[l===`export`&&(0,$.jsx)(ct,{quiz:e,issues:L,onClose:()=>u(null),onDownloadHtml:ze,onDownloadMarkdown:Fe,onDownloadExcel:Ie},`export`),l===`settings`&&(0,$.jsx)(dt,{settings:e.settings,onChange:e=>t(t=>({...t,settings:e})),onClose:()=>u(null)},`settings`),l===`library`&&(0,$.jsx)(ut,{entries:S,currentId:w,onClose:()=>u(null),onSaveCurrent:Ye,onOpen:Xe,onDelete:e=>{let t=S.find(t=>t.id===e)?.quiz.title||`this quiz`;window.confirm(`Delete "${t}" from your saved quizzes? This can't be undone.`)&&(He(e),e===w&&E(null),Q(),N(`Quiz deleted`))},onDuplicate:e=>{if(!Ue(e)){N(`Couldn't duplicate — browser storage is full or blocked`,`error`);return}Q(),N(`Quiz duplicated`)},onRename:(e,n)=>{We(e,n),e===w&&t(e=>({...e,title:n})),Q(),N(`Renamed`)},onNewQuiz:$e},`library`),l===`shortcuts`&&(0,$.jsx)(ft,{onClose:()=>u(null)},`shortcuts`)]}),(0,$.jsx)(ht,{toasts:j,onDismiss:xe})]})}export{yt as QuizStudioPage};