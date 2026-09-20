import{i as e,n as t,t as n}from"./jsx-runtime-Dk72oS4N.js";import{t as r}from"./proxy-DtPsnYP0.js";import{A as i,B as a,C as o,D as s,F as c,G as l,H as u,L as d,N as f,O as p,Ot as m,P as h,R as g,S as _,T as v,V as y,Y as b,Z as x,at as S,c as ee,ct as te,dt as ne,g as re,h as ie,ht as C,it as ae,j as w,k as T,l as oe,mt as E,nt as se,ot as ce,s as le,st as ue,tt as D,vt as de,xt as fe,z as O}from"./index-BPJawoat.js";import{t as k}from"./renderMarkdown-_QdSbiZv.js";import{a as A,c as pe,d as j,i as me,l as M,n as he,o as ge,r as _e,s as ve,t as N,u as P}from"./QuizStudioPage.module-BjfAZlx6.js";var F=e(t(),1);function ye(e){let[t,n]=(0,F.useState)(()=>typeof window<`u`&&window.matchMedia(e).matches);return(0,F.useEffect)(()=>{let t=window.matchMedia(e);n(t.matches);let r=e=>n(e.matches);return t.addEventListener(`change`,r),()=>t.removeEventListener(`change`,r)},[e]),t}var be=/^\s*-\s*\[([ xX])\]\s*(.*)$/,I=/^#\s+(.*)$/,L=/^##\s+(.*)$/,R=/^\s*<!--\s*points:\s*(\d+)\s*-->\s*$/,xe=/^\s*>\s?(.*)$/,z=/^\s*(```|~~~)/,B=/^---\s*$/;function V(e){if(e.length===2){let t=e.map(e=>e.text.trim().toLowerCase()).sort();if(t[0]===`false`&&t[1]===`true`)return`boolean`}return e.filter(e=>e.correct).length>1?`multi`:`single`}function Se(e){let t={...A};if(e.length===0||!B.test(e[0]))return{settings:t,nextIndex:0};let n=1;for(;n<e.length&&!B.test(e[n]);){let r=e[n].indexOf(`:`);if(r>0){let i=e[n].slice(0,r).trim(),a=e[n].slice(r+1).trim();switch(i){case`shuffleQuestions`:t.shuffleQuestions=a===`true`;break;case`shuffleOptions`:t.shuffleOptions=a===`true`;break;case`instantFeedback`:t.instantFeedback=a===`true`;break;case`passMark`:t.passMark=Number.isFinite(Number(a))?Number(a):A.passMark;break;case`timeLimitMinutes`:t.timeLimitMinutes=Number.isFinite(Number(a))?Number(a):0;break;case`theme`:t.theme=a===`dark`?`dark`:`light`}}n+=1}return{settings:t,nextIndex:Math.min(n+1,e.length)}}function H(e){let t=e.replace(/\r\n/g,`
`).split(`
`),{settings:n,nextIndex:r}=Se(t),i=`Untitled Quiz`,a=[],o=[],s=r;for(;s<t.length&&t[s].trim()===``;)s+=1;let c=s<t.length?I.exec(t[s]):null;for(c&&(i=c[1].trim(),s+=1);s<t.length&&!L.test(t[s]);)a.push(t[s]),s+=1;for(;s<t.length;){let e=L.exec(t[s]);if(!e){s+=1;continue}s+=1;let n=[e[1]],r=1,i=!1;for(;s<t.length;){let e=t[s];if(z.test(e)){i=!i,n.push(e),s+=1;continue}if(!i&&(L.test(e)||be.test(e)))break;let a=R.exec(e);if(!i&&a){r=Number(a[1])||1,s+=1;continue}n.push(e),s+=1}let a=[];for(;s<t.length&&be.test(t[s]);){let e=be.exec(t[s]);a.push({id:M(`o`),text:e[2].trim(),correct:e[1].toLowerCase()===`x`}),s+=1}let c=s;for(;c<t.length&&t[c].trim()===``;)c+=1;let l=[];if(c<t.length&&xe.test(t[c]))for(s=c;s<t.length;){let e=xe.exec(t[s]);if(!e)break;l.push(e[1]),s+=1}for(;s<t.length&&t[s].trim()===``;)s+=1;o.push({id:M(`q`),type:V(a),text:n.join(`
`).trim(),explanation:l.join(`
`).trim(),points:r,options:a})}return{title:i,description:a.join(`
`).trim(),settings:n,questions:o}}function Ce(e){let t=e.settings,n=[`---`,`shuffleQuestions: ${t.shuffleQuestions}`,`shuffleOptions: ${t.shuffleOptions}`,`instantFeedback: ${t.instantFeedback}`,`passMark: ${t.passMark}`,`timeLimitMinutes: ${t.timeLimitMinutes}`,`theme: ${t.theme}`,`---`,``,`# ${e.title}`];e.description.trim()&&n.push(``,e.description.trim());for(let t of e.questions){n.push(``,`## ${t.text}`),t.points!==1&&n.push(`<!-- points: ${t.points} -->`);for(let e of t.options)n.push(`- [${e.correct?`x`:` `}] ${e.text}`);if(t.explanation.trim()){n.push(``);for(let e of t.explanation.trim().split(`
`))n.push(`> ${e}`)}}return n.join(`
`)+`
`}var we=`---
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
`;function U(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}var Te=`
    --bg: #ffffff;
    --surface: #fbfbfc;
    --surface-2: #f4f4f6;
    --text: #15161a;
    --text-dim: #6b6f76;
    --border: #e4e4e8;
    --code-bg: #15161a;
    --code-text: #e9e9ec;`,Ee=`
    --bg: #0b0b0d;
    --surface: #141417;
    --surface-2: #1b1b1f;
    --text: #f2f2f4;
    --text-dim: #9b9ba3;
    --border: #2a2a30;
    --code-bg: #08080a;
    --code-text: #e9e9ec;`;function De(e){let t={title:e.title,descriptionHtml:k(e.description),settings:e.settings,totalPoints:j(e),questions:e.questions.map(e=>({id:e.id,type:e.type,points:e.points||1,html:k(e.text),explanationHtml:e.explanation.trim()?k(e.explanation):``,options:e.options.map(e=>({id:e.id,text:e.text,correct:e.correct}))}))},n=JSON.stringify(t).replace(/</g,`\\u003c`),r=e.settings.theme===`dark`?Ee:Te;return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${U(e.title||`Quiz`)}</title>
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
`}var Oe=`Quiz Info`,ke=`Single Choice`,W=`Multiple Choice`,G=`True False`,K=[`Option A`,`Option B`,`Option C`,`Option D`,`Option E`,`Option F`],Ae=[`A`,`B`,`C`,`D`,`E`,`F`];function q(e){return e==null?``:String(e).trim()}function J(e){return e?`yes`:`no`}function Y(e){let t=q(e).toLowerCase();return t===`yes`||t===`true`||t===`y`||t===`1`}function je(e){let t=e.trim().replace(/^option\s*/i,``);if(!t)return-1;let n=Ae.indexOf(t[0].toUpperCase());if(n>=0)return n;let r=Number(t);return Number.isFinite(r)&&r>0?r-1:-1}function Me(e){let t=Number(q(e));return Number.isFinite(t)&&t>0?Math.floor(t):1}function Ne(e,t){let n=q(e.Question);if(!n)return null;let r=[],i=[];if(K.forEach((t,n)=>{let a=q(e[t]);a&&(i.push(n),r.push({id:M(`o`),text:a,correct:!1}))}),r.length<2)return null;let a=q(e.Correct).split(/[,;/ ]+/).filter(Boolean);for(let e of a){let n=je(e),a=i.indexOf(n);if(a>=0&&(r[a].correct=!0,!t))break}return{id:M(`q`),type:t?`multi`:`single`,text:n,explanation:q(e.Explanation),points:Me(e.Points),options:r}}function Pe(e){let t=q(e.Question);if(!t)return null;let n=Y(e.Correct);return{id:M(`q`),type:`boolean`,text:t,explanation:q(e.Explanation),points:Me(e.Points),options:[{id:M(`o`),text:`True`,correct:n},{id:M(`o`),text:`False`,correct:!n}]}}function Fe(e){let t=new Map;for(let n of e){let e=q(n.Field).toLowerCase();e&&t.set(e,q(n.Value))}let n=Number(t.get(`pass mark (%)`)),r=Number(t.get(`time limit (minutes)`));return{title:t.get(`title`)||`Untitled Quiz`,description:t.get(`description`)??``,settings:{...A,passMark:Number.isFinite(n)?Math.min(100,Math.max(0,n)):A.passMark,timeLimitMinutes:Number.isFinite(r)&&r>0?Math.floor(r):0,shuffleQuestions:Y(t.get(`shuffle questions`)),shuffleOptions:Y(t.get(`shuffle options`)),instantFeedback:Y(t.get(`instant feedback`)),theme:(t.get(`theme`)??``).toLowerCase()===`dark`?`dark`:`light`}}}async function Ie(e){let t=await m(()=>import(`./xlsx-BKER4Xe2.js`),[]),n=t.read(await e.arrayBuffer(),{type:`array`}),r=e=>{let r=n.Sheets[e];return r?t.utils.sheet_to_json(r,{defval:``}):[]},{title:i,description:a,settings:o}=Fe(r(Oe));return{title:i,description:a,settings:o,questions:[...r(ke).map(e=>Ne(e,!1)),...r(W).map(e=>Ne(e,!0)),...r(G).map(Pe)].filter(e=>e!==null)}}async function Le(e){let t=await m(()=>import(`./xlsx-BKER4Xe2.js`),[]),n=e??null,r=n?.settings??A,i=t.utils.book_new(),a=[{Field:`Title`,Value:n?.title??`My Quiz`},{Field:`Description`,Value:n?.description??`A short description of the quiz`},{Field:`Pass mark (%)`,Value:r.passMark},{Field:`Time limit (minutes)`,Value:r.timeLimitMinutes},{Field:`Shuffle questions`,Value:J(r.shuffleQuestions)},{Field:`Shuffle options`,Value:J(r.shuffleOptions)},{Field:`Instant feedback`,Value:J(r.instantFeedback)},{Field:`Theme`,Value:r.theme}],o=t.utils.json_to_sheet(a);o[`!cols`]=[{wch:22},{wch:46}],t.utils.book_append_sheet(i,o,Oe);let s=(e,t)=>{if(!e)return t;let n={Question:e.text};return K.forEach((t,r)=>{n[t]=e.options[r]?.text??``}),n.Correct=e.options.map((e,t)=>e.correct?Ae[t]:null).filter(Boolean).join(`, `),n.Points=e.points,n.Explanation=e.explanation,n},c={Question:`What does typeof null return in JavaScript?`,"Option A":`"null"`,"Option B":`"object"`,"Option C":`"undefined"`,"Option D":`"number"`,"Option E":``,"Option F":``,Correct:`B`,Points:1,Explanation:`A long-standing quirk kept for backwards compatibility.`},l={Question:`Which of these are valid variable declarations?`,"Option A":`let x = 1;`,"Option B":`const x = 1;`,"Option C":`var x = 1;`,"Option D":`variable x = 1;`,"Option E":``,"Option F":``,Correct:`A, B, C`,Points:2,Explanation:`Separate multiple answers with commas.`},u={Question:`Arrays in JavaScript have a fixed length.`,Correct:`FALSE`,Points:1,Explanation:`Arrays are dynamic — push and splice resize them.`},d=n?.questions.filter(e=>e.type===`single`)??[],f=n?.questions.filter(e=>e.type===`multi`)??[],p=n?.questions.filter(e=>e.type===`boolean`)??[],h=d.length?d.map(e=>s(e,c)):[c],g=f.length?f.map(e=>s(e,l)):[l],_=p.length?p.map(e=>({Question:e.text,Correct:e.options.find(e=>e.correct)?.text.toUpperCase()??`TRUE`,Points:e.points,Explanation:e.explanation})):[u],v=[{wch:52},...K.map(()=>({wch:20})),{wch:12},{wch:8},{wch:40}],y=t.utils.json_to_sheet(h,{header:[`Question`,...K,`Correct`,`Points`,`Explanation`]});y[`!cols`]=v,t.utils.book_append_sheet(i,y,ke);let b=t.utils.json_to_sheet(g,{header:[`Question`,...K,`Correct`,`Points`,`Explanation`]});b[`!cols`]=v,t.utils.book_append_sheet(i,b,W);let x=t.utils.json_to_sheet(_,{header:[`Question`,`Correct`,`Points`,`Explanation`]});x[`!cols`]=[{wch:52},{wch:12},{wch:8},{wch:40}],t.utils.book_append_sheet(i,x,G);let S=t.write(i,{bookType:`xlsx`,type:`array`});return new Blob([S],{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`})}var Re=`imango-quiz-studio-library`;function ze(e){return e.createdAt??e.savedAt??``}function X(){try{let e=localStorage.getItem(Re);if(!e)return[];let t=JSON.parse(e);return Array.isArray(t)?t.flatMap(e=>{if(!e||typeof e.id!=`string`)return[];let t=P(e.quiz);return t?[{id:e.id,createdAt:e.createdAt,savedAt:e.savedAt,quiz:t}]:[]}):[]}catch{return[]}}function Z(e){try{return localStorage.setItem(Re,JSON.stringify(e)),!0}catch{return!1}}function Q(){return X().sort((e,t)=>{let n=ze(t).localeCompare(ze(e));return n===0?t.id.localeCompare(e.id):n})}function Be(e,t){let n=X(),r=t?n.find(e=>e.id===t):void 0,i=new Date().toISOString(),a={id:r?r.id:M(`quiz`),createdAt:r?r.createdAt??r.savedAt??i:i,savedAt:i,quiz:e},o=n.findIndex(e=>e.id===a.id);return o>=0?n[o]=a:n.push(a),Z(n)?a:null}function Ve(e){Z(X().filter(t=>t.id!==e))}function He(e){let t=X(),n=t.find(t=>t.id===e);if(!n)return null;let r=new Date().toISOString(),i={id:M(`quiz`),createdAt:r,savedAt:r,quiz:{...n.quiz,title:`${n.quiz.title} (copy)`}};return t.push(i),Z(t)?i:null}function Ue(e,t){let n=X(),r=n.find(t=>t.id===e);r&&(r.quiz={...r.quiz,title:t},r.savedAt=new Date().toISOString(),Z(n))}function We(e){let t=[];e.text.trim()||t.push({questionId:e.id,severity:`warning`,message:`Question text is empty`}),e.options.length<2&&t.push({questionId:e.id,severity:`error`,message:`Needs at least 2 options`}),e.options.some(e=>e.correct)||t.push({questionId:e.id,severity:`error`,message:`No correct answer marked`}),e.options.some(e=>!e.text.trim())&&t.push({questionId:e.id,severity:`warning`,message:`Has an empty option`});let n=new Set;for(let r of e.options){let i=r.text.trim().toLowerCase();if(i&&n.has(i)){t.push({questionId:e.id,severity:`warning`,message:`Has duplicate options`});break}n.add(i)}return t}function Ge(e){let t=[];e.title.trim()||t.push({questionId:null,severity:`warning`,message:`Quiz has no title`}),e.questions.length===0&&t.push({questionId:null,severity:`error`,message:`Quiz has no questions`});for(let n of e.questions)t.push(...We(n));return t}function Ke(e){return{errors:e.filter(e=>e.severity===`error`).length,warnings:e.filter(e=>e.severity===`warning`).length}}var qe=3200;function Je(){let[e,t]=(0,F.useState)([]),n=(0,F.useRef)(0),r=(0,F.useCallback)(e=>{t(t=>t.filter(t=>t.id!==e))},[]);return{toasts:e,pushToast:(0,F.useCallback)((e,i=`success`)=>{n.current+=1;let a=n.current;t(t=>[...t,{id:a,kind:i,message:e}]),window.setTimeout(()=>r(a),qe)},[r]),dismissToast:r}}var Ye=[{keys:`Ctrl / ⌘ + S`,label:`Save quiz to browser`},{keys:`Ctrl / ⌘ + O`,label:`Open my quizzes`},{keys:`Ctrl / ⌘ + ⇧ + S`,label:`Download as .md`},{keys:`Ctrl / ⌘ + E`,label:`Export as .html`},{keys:`Ctrl / ⌘ + P`,label:`Toggle preview`},{keys:`Ctrl / ⌘ + M`,label:`Edit markdown source`},{keys:`Ctrl / ⌘ + Enter`,label:`New question`},{keys:`Ctrl / ⌘ + D`,label:`Duplicate question`},{keys:`Alt + ↑ / ↓`,label:`Move question up / down`},{keys:`Alt + ← / →`,label:`Previous / next question`},{keys:`?`,label:`Keyboard shortcuts`},{keys:`Esc`,label:`Close dialog`}];function Xe(e){return e instanceof HTMLElement?e.tagName===`INPUT`||e.tagName===`TEXTAREA`||e.tagName===`SELECT`||e.isContentEditable:!1}function Ze(e){(0,F.useEffect)(()=>{let t=t=>{let n=t.ctrlKey||t.metaKey;if(t.key===`Escape`){e.onCloseOverlay();return}if(!(n&&t.altKey)){if(n){let n=t.key.toLowerCase();n===`s`?(t.preventDefault(),t.shiftKey?e.onDownloadMarkdown():e.onSave()):n===`o`?(t.preventDefault(),e.onOpenLibrary()):n===`e`?(t.preventDefault(),e.onExport()):n===`p`?(t.preventDefault(),e.onTogglePreview()):n===`m`?(t.preventDefault(),e.onToggleMarkdown()):n===`d`?(t.preventDefault(),e.onDuplicate()):t.key===`Enter`&&(t.preventDefault(),e.onNewQuestion());return}if(t.altKey&&t.key===`ArrowUp`){t.preventDefault(),e.onMoveUp();return}if(t.altKey&&t.key===`ArrowDown`){t.preventDefault(),e.onMoveDown();return}if(t.altKey&&t.key===`ArrowLeft`){t.preventDefault(),e.onPrevQuestion();return}if(t.altKey&&t.key===`ArrowRight`){t.preventDefault(),e.onNextQuestion();return}t.key===`?`&&!Xe(t.target)&&(t.preventDefault(),e.onHelp())}};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e])}var $=n();function Qe({quiz:e,selectedId:t,issues:n,onSelect:r,onAddQuestion:i,onDownloadSample:a,onDownloadExcelTemplate:o,onUploadClick:s,onLoadSample:c,onReorder:l}){let[u,f]=(0,F.useState)(``),[p,m]=(0,F.useState)(null),[h,v]=(0,F.useState)(null),b=(0,F.useMemo)(()=>{let e=new Map;for(let t of n){if(!t.questionId)continue;let n=e.get(t.questionId)??{errors:0,warnings:0};t.severity===`error`?n.errors+=1:n.warnings+=1,e.set(t.questionId,n)}return e},[n]),S=(0,F.useMemo)(()=>{let t=u.trim().toLowerCase();return e.questions.map((e,t)=>({question:e,index:t})).filter(({question:e})=>!t||e.text.toLowerCase().includes(t))},[e.questions,u]);return(0,$.jsxs)(`div`,{className:N.sidebarInner,children:[(0,$.jsxs)(`div`,{className:N.sidebarSection,children:[(0,$.jsxs)(`button`,{type:`button`,className:N.sidebarBtn,onClick:s,children:[(0,$.jsx)(g,{size:16}),`Upload .md or Excel`]}),(0,$.jsxs)(`button`,{type:`button`,className:N.sidebarBtn,onClick:a,children:[(0,$.jsx)(d,{size:16}),`Sample .md`]}),(0,$.jsxs)(`button`,{type:`button`,className:N.sidebarBtn,onClick:o,children:[(0,$.jsx)(E,{size:16}),`Excel template`]}),(0,$.jsxs)(`button`,{type:`button`,className:N.sidebarBtn,onClick:c,children:[(0,$.jsx)(te,{size:16}),`Load example quiz`]})]}),(0,$.jsx)(`div`,{className:N.sidebarDivider}),(0,$.jsxs)(`div`,{className:N.sidebarHeaderRow,children:[(0,$.jsxs)(`span`,{children:[`Questions (`,e.questions.length,`)`]}),(0,$.jsx)(`button`,{type:`button`,className:N.iconBtn,onClick:i,title:`Add question`,children:(0,$.jsx)(ae,{size:15})})]}),e.questions.length>4&&(0,$.jsxs)(`div`,{className:N.sidebarSearch,children:[(0,$.jsx)(x,{size:14}),(0,$.jsx)(`input`,{type:`text`,value:u,onChange:e=>f(e.target.value),placeholder:`Filter questions`,"aria-label":`Filter questions`})]}),(0,$.jsxs)(`div`,{className:N.questionList,children:[S.length===0&&(0,$.jsx)(`p`,{className:N.sidebarEmpty,children:e.questions.length===0?`No questions yet`:`No matches`}),S.map(({question:e,index:n})=>{let i=b.get(e.id),a=e.text.split(`
`)[0].replace(/[`*_#]/g,``).trim(),o=[N.questionListItem,t===e.id?N.questionListItemActive:``,p===n?N.questionListItemDragging:``,h===n&&p!==null&&p!==n?N.questionListItemDropTarget:``].filter(Boolean).join(` `);return(0,$.jsxs)(`button`,{type:`button`,draggable:!u.trim(),className:o,onClick:()=>r(e.id),onDragStart:e=>{e.stopPropagation(),e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,String(n)),m(n)},onDragOver:e=>{p!==null&&(e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect=`move`,v(n))},onDrop:e=>{p!==null&&(e.preventDefault(),e.stopPropagation(),p!==n&&l(p,n),m(null),v(null))},onDragEnd:()=>{m(null),v(null)},children:[(0,$.jsx)(_,{size:13,className:N.dragHandle}),(0,$.jsx)(`span`,{className:N.questionListIndex,children:n+1}),(0,$.jsx)(`span`,{className:N.questionListLabel,children:a||`Untitled question`}),i&&i.errors>0&&(0,$.jsx)(y,{size:14,className:N.issueIconError}),i&&i.errors===0&&i.warnings>0&&(0,$.jsx)(y,{size:14,className:N.issueIconWarning})]},e.id)})]})]})}var $e=[{value:`single`,label:`Single choice`,hint:`One correct answer`},{value:`multi`,label:`Multiple choice`,hint:`Several correct answers`},{value:`boolean`,label:`True / False`,hint:`Two fixed options`}];function et({question:e,index:t,total:n,onChange:r,onDelete:a,onDuplicate:o,onMove:s,onNavigate:c}){let[l,d]=(0,F.useState)(!1),f=(0,F.useMemo)(()=>We(e),[e]),m=(0,F.useMemo)(()=>k(e.text),[e.text]),h=t=>{if(t===`boolean`){r({...e,type:t,options:[{id:M(`o`),text:`True`,correct:!0},{id:M(`o`),text:`False`,correct:!1}]});return}if(t===`single`){let n=!1,i=e.options.map(e=>e.correct&&!n?(n=!0,e):{...e,correct:!1});r({...e,type:t,options:i});return}r({...e,type:t})},g=(t,n)=>{r({...e,options:e.options.map(e=>e.id===t?{...e,text:n}:e)})},_=t=>{e.type===`multi`?r({...e,options:e.options.map(e=>e.id===t?{...e,correct:!e.correct}:e)}):r({...e,options:e.options.map(e=>({...e,correct:e.id===t}))})},v=()=>r({...e,options:[...e.options,{id:M(`o`),text:``,correct:!1}]}),x=t=>r({...e,options:e.options.filter(e=>e.id!==t)}),S=(t,n)=>{let i=t+n;if(i<0||i>=e.options.length)return;let a=[...e.options];[a[t],a[i]]=[a[i],a[t]],r({...e,options:a})};return(0,$.jsxs)(`div`,{className:N.questionEditor,children:[(0,$.jsxs)(`div`,{className:N.editorHeader,children:[(0,$.jsxs)(`div`,{className:N.editorHeaderLeft,children:[c&&(0,$.jsx)(`button`,{type:`button`,className:N.iconBtn,onClick:()=>c(-1),disabled:t===0,title:`Previous question (Alt + ←)`,children:(0,$.jsx)(T,{size:16})}),(0,$.jsxs)(`span`,{className:N.editorBadge,children:[`Question `,t+1]}),(0,$.jsxs)(`span`,{className:N.editorCount,children:[`of `,n]}),c&&(0,$.jsx)(`button`,{type:`button`,className:N.iconBtn,onClick:()=>c(1),disabled:t===n-1,title:`Next question (Alt + →)`,children:(0,$.jsx)(i,{size:16})})]}),(0,$.jsxs)(`div`,{className:N.editorHeaderActions,children:[(0,$.jsx)(`button`,{type:`button`,className:N.iconBtn,onClick:()=>s(-1),disabled:t===0,title:`Move up (Alt + ↑)`,children:(0,$.jsx)(w,{size:16})}),(0,$.jsx)(`button`,{type:`button`,className:N.iconBtn,onClick:()=>s(1),disabled:t===n-1,title:`Move down (Alt + ↓)`,children:(0,$.jsx)(p,{size:16})}),(0,$.jsx)(`button`,{type:`button`,className:N.iconBtn,onClick:o,title:`Duplicate (Ctrl/⌘ + D)`,children:(0,$.jsx)(O,{size:16})}),(0,$.jsx)(`button`,{type:`button`,className:N.iconBtnDanger,onClick:a,title:`Delete question`,children:(0,$.jsx)(C,{size:16})})]})]}),f.length>0&&(0,$.jsx)(`ul`,{className:N.issueList,children:f.map((e,t)=>(0,$.jsxs)(`li`,{className:e.severity===`error`?N.issueError:N.issueWarning,children:[(0,$.jsx)(y,{size:13}),e.message]},t))}),(0,$.jsxs)(`div`,{className:N.fieldRow,children:[(0,$.jsxs)(`label`,{className:N.fieldLabel,children:[`Type`,(0,$.jsx)(`select`,{value:e.type,onChange:e=>h(e.target.value),className:N.select,children:$e.map(e=>(0,$.jsx)(`option`,{value:e.value,children:e.label},e.value))})]}),(0,$.jsxs)(`label`,{className:N.fieldLabel,children:[`Points`,(0,$.jsx)(`input`,{type:`number`,min:1,value:e.points,onChange:t=>r({...e,points:Math.max(1,Number(t.target.value)||1)}),className:N.numberInput})]})]}),(0,$.jsxs)(`div`,{className:N.fieldBlock,children:[(0,$.jsxs)(`div`,{className:N.fieldLabelRow,children:[(0,$.jsx)(`span`,{className:N.fieldLabelText,children:`Question`}),(0,$.jsxs)(`button`,{type:`button`,className:N.ghostBtn,onClick:()=>d(e=>!e),children:[(0,$.jsx)(u,{size:14}),l?`Hide render`:`Show render`]})]}),(0,$.jsx)(`textarea`,{value:e.text,onChange:t=>r({...e,text:t.target.value}),placeholder:"Ask something... Markdown and ``` code blocks are supported",className:N.questionTextarea}),l&&e.text.trim()&&(0,$.jsx)(`div`,{className:N.inlineRender,dangerouslySetInnerHTML:{__html:m}})]}),(0,$.jsxs)(`div`,{className:N.fieldBlock,children:[(0,$.jsxs)(`span`,{className:N.fieldLabelText,children:[`Answers`,(0,$.jsx)(`span`,{className:N.fieldHint,children:e.type===`multi`?`Tick every correct answer`:`Pick the correct answer`})]}),(0,$.jsx)(`div`,{className:N.optionsList,children:e.options.map((t,n)=>(0,$.jsxs)(`div`,{className:`${N.optionRow} ${t.correct?N.optionRowCorrect:``}`,children:[(0,$.jsx)(`input`,{type:e.type===`multi`?`checkbox`:`radio`,checked:t.correct,onChange:()=>_(t.id),"aria-label":`Mark as correct`}),e.type===`boolean`?(0,$.jsx)(`span`,{className:N.booleanLabel,children:t.text}):(0,$.jsx)(`input`,{type:`text`,value:t.text,onChange:e=>g(t.id,e.target.value),placeholder:`Option ${n+1}`,className:N.optionInput}),e.type!==`boolean`&&(0,$.jsxs)(`div`,{className:N.optionActions,children:[(0,$.jsx)(`button`,{type:`button`,className:N.iconBtnSmall,onClick:()=>S(n,-1),disabled:n===0,title:`Move up`,children:(0,$.jsx)(w,{size:13})}),(0,$.jsx)(`button`,{type:`button`,className:N.iconBtnSmall,onClick:()=>S(n,1),disabled:n===e.options.length-1,title:`Move down`,children:(0,$.jsx)(p,{size:13})}),(0,$.jsx)(`button`,{type:`button`,className:N.iconBtnSmall,onClick:()=>x(t.id),disabled:e.options.length<=2,title:`Remove option`,children:(0,$.jsx)(C,{size:13})})]})]},t.id))}),e.type!==`boolean`&&(0,$.jsxs)(`button`,{type:`button`,className:N.addOptionBtn,onClick:v,children:[(0,$.jsx)(ae,{size:14}),`Add option`]})]}),(0,$.jsxs)(`div`,{className:N.fieldBlock,children:[(0,$.jsxs)(`span`,{className:N.fieldLabelText,children:[(0,$.jsx)(b,{size:14}),`Explanation`,(0,$.jsx)(`span`,{className:N.fieldHint,children:`Shown after answering`})]}),(0,$.jsx)(`textarea`,{value:e.explanation,onChange:t=>r({...e,explanation:t.target.value}),placeholder:`Optional: explain why the answer is correct`,className:N.explanationTextarea})]})]})}function tt({quiz:e,issues:t,expandedId:n,onToggle:r,onChange:i,onDelete:a,onDuplicate:o,onMove:s,onAddQuestion:c}){return(0,$.jsxs)(`div`,{className:N.accordionList,children:[e.questions.map((c,l)=>{let u=c.id===n,d=t.filter(e=>e.questionId===c.id),f=d.some(e=>e.severity===`error`),m=d.some(e=>e.severity===`warning`),h=c.text.split(`
`)[0].replace(/[`*_#]/g,``).trim();return(0,$.jsxs)(`div`,{className:N.accordionItem,children:[(0,$.jsxs)(`button`,{type:`button`,className:N.accordionSummary,onClick:()=>r(c.id),"aria-expanded":u,children:[(0,$.jsx)(`span`,{className:N.questionListIndex,children:l+1}),(0,$.jsx)(`span`,{className:N.accordionSummaryText,children:h||`Untitled question`}),f&&(0,$.jsx)(y,{size:15,className:N.issueIconError}),!f&&m&&(0,$.jsx)(y,{size:15,className:N.issueIconWarning}),(0,$.jsx)(p,{size:16,className:`${N.accordionChevron} ${u?N.accordionChevronOpen:``}`})]}),u&&(0,$.jsx)(`div`,{className:N.accordionBody,children:(0,$.jsx)(et,{question:c,index:l,total:e.questions.length,onChange:e=>i(c.id,e),onDelete:()=>a(c.id),onDuplicate:()=>o(c.id),onMove:e=>s(c.id,e)})})]},c.id)}),(0,$.jsxs)(`button`,{type:`button`,className:N.accordionAddBtn,onClick:c,children:[(0,$.jsx)(ae,{size:16}),`Add question`]})]})}function nt(e){let t=e+1831565813;return()=>(t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296)}function rt(e,t){let n=[...e];for(let e=n.length-1;e>0;--e){let r=Math.floor(t()*(e+1));[n[e],n[r]]=[n[r],n[e]]}return n}function it(e,t){let n=e.options.filter(e=>e.correct).map(e=>e.id).sort(),r=[...t].sort();return n.length>0&&r.length===n.length&&r.every((e,t)=>e===n[t])}function at(e){return`${Math.floor(e/60)}:${(e%60).toString().padStart(2,`0`)}`}function ot({quiz:e}){let[t,n]=(0,F.useState)(0),[r,i]=(0,F.useState)({}),[a,o]=(0,F.useState)(!1),[s,c]=(0,F.useState)(()=>Date.now()),[l,u]=(0,F.useState)(()=>Date.now()),d=e.settings.timeLimitMinutes*60,p=(0,F.useMemo)(()=>{let n=nt(t+1),r=e.settings.shuffleQuestions?rt(e.questions,n):e.questions;return e.settings.shuffleOptions?r.map(e=>({...e,options:rt(e.options,n)})):r},[e.questions,e.settings.shuffleQuestions,e.settings.shuffleOptions,t]),m=d>0?Math.max(0,d-Math.floor((l-s)/1e3)):0,h=d>0&&m<=0,g=a||h;(0,F.useEffect)(()=>{if(d<=0||g)return;let e=window.setInterval(()=>u(Date.now()),500);return()=>window.clearInterval(e)},[d,g]);let _=(0,F.useMemo)(()=>k(e.description),[e.description]),v=p.filter(e=>(r[e.id]??[]).length>0).length,y=(0,F.useMemo)(()=>{let t=0,n=0,i=0;for(let e of p)n+=e.points||1,it(e,r[e.id]??[])&&(t+=e.points||1,i+=1);let a=n>0?Math.round(t/n*100):0;return{earned:t,possible:n,correctCount:i,percent:a,passed:a>=e.settings.passMark}},[p,r,e.settings.passMark]),x=(t,n)=>{g||e.settings.instantFeedback&&(r[t.id]??[]).length>0&&t.type!==`multi`||i(e=>{let r=e[t.id]??[];if(t.type===`multi`){let i=r.includes(n)?r.filter(e=>e!==n):[...r,n];return{...e,[t.id]:i}}return{...e,[t.id]:[n]}})};return p.length===0?(0,$.jsx)(`p`,{className:N.emptyState,children:`Add a question to see the preview.`}):(0,$.jsxs)(`div`,{className:N.previewWrap,children:[(0,$.jsxs)(`div`,{className:N.previewHeader,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h2`,{className:N.previewTitle,children:e.title||`Untitled Quiz`}),e.description&&(0,$.jsx)(`div`,{className:N.previewDesc,dangerouslySetInnerHTML:{__html:_}})]}),d>0&&!g&&(0,$.jsxs)(`span`,{className:`${N.timerChip} ${m<=30?N.timerChipLow:``}`,children:[(0,$.jsx)(f,{size:15}),at(m)]})]}),(0,$.jsx)(`div`,{className:N.progressBar,children:(0,$.jsx)(`div`,{className:N.progressFill,style:{width:`${v/p.length*100}%`}})}),(0,$.jsxs)(`p`,{className:N.progressLabel,children:[v,` of `,p.length,` answered`]}),p.map((n,i)=>{let a=r[n.id]??[],o=g||e.settings.instantFeedback&&a.length>0,s=it(n,a);return(0,$.jsxs)(`div`,{className:N.previewQuestion,children:[(0,$.jsxs)(`div`,{className:N.previewQuestionHead,children:[(0,$.jsxs)(`span`,{className:N.previewQuestionLabel,children:[`Question `,i+1]}),n.points>1&&(0,$.jsxs)(`span`,{className:N.pointsChip,children:[n.points,` pts`]}),o&&(0,$.jsx)(`span`,{className:s?N.verdictCorrect:N.verdictIncorrect,children:s?`Correct`:`Incorrect`})]}),(0,$.jsx)(`div`,{className:N.previewQuestionBody,dangerouslySetInnerHTML:{__html:k(n.text)}}),n.options.map(e=>{let r=a.includes(e.id),i=N.previewOption;return o&&e.correct?i+=` ${N.previewOptionCorrect}`:o&&r?i+=` ${N.previewOptionIncorrect}`:r&&(i+=` ${N.previewOptionChecked}`),(0,$.jsxs)(`label`,{className:i,children:[(0,$.jsx)(`input`,{type:n.type===`multi`?`checkbox`:`radio`,name:`preview-${t}-${n.id}`,checked:r,disabled:g,onChange:()=>x(n,e.id)}),(0,$.jsx)(`span`,{children:e.text||(0,$.jsx)(`em`,{children:`(empty option)`})})]},e.id)}),o&&n.explanation.trim()&&(0,$.jsxs)(`div`,{className:N.explanationBox,children:[(0,$.jsx)(b,{size:15}),(0,$.jsx)(`div`,{dangerouslySetInnerHTML:{__html:k(n.explanation)}})]})]},n.id)}),(0,$.jsx)(`div`,{className:N.previewToolbar,children:g?(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{className:y.passed?N.resultPass:N.resultFail,children:[(0,$.jsxs)(`strong`,{children:[y.percent,`%`]}),(0,$.jsxs)(`span`,{children:[y.earned,` / `,y.possible,` points · `,y.correctCount,` of`,` `,p.length,` correct · `,y.passed?`Passed`:`Below pass mark`,` (`,e.settings.passMark,`%)`,h&&!a?` · time up`:``]})]}),(0,$.jsxs)(`button`,{type:`button`,className:N.secondaryBtn,onClick:()=>{i({}),o(!1),n(e=>e+1),c(Date.now()),u(Date.now())},children:[(0,$.jsx)(re,{size:15}),`Retry`]})]}):(0,$.jsx)(`button`,{type:`button`,className:N.primaryStudioBtn,onClick:()=>o(!0),children:`Submit answers`})})]})}function st({title:e,onClose:t,children:n,footer:i,width:a=460}){return(0,$.jsx)(r.div,{className:N.modalOverlay,onClick:t,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.16},children:(0,$.jsxs)(r.div,{className:N.modalPanel,style:{maxWidth:a},onClick:e=>e.stopPropagation(),initial:{opacity:0,y:14,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:8,scale:.98},transition:{duration:.22,ease:[.16,1,.3,1]},role:`dialog`,"aria-modal":`true`,"aria-label":e,children:[(0,$.jsxs)(`div`,{className:N.modalHeader,children:[(0,$.jsx)(`h3`,{className:N.modalTitle,children:e}),(0,$.jsx)(`button`,{type:`button`,className:N.iconBtn,onClick:t,"aria-label":`Close`,children:(0,$.jsx)(de,{size:18})})]}),(0,$.jsx)(`div`,{className:N.modalBody,children:n}),i&&(0,$.jsx)(`div`,{className:N.modalActions,children:i})]})})}function ct({quiz:e,issues:t,onClose:n,onDownloadHtml:r,onDownloadMarkdown:i,onDownloadExcel:o}){let{errors:s,warnings:c}=Ke(t),l=j(e);return(0,$.jsxs)(st,{title:`Export quiz`,onClose:n,width:470,footer:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`button`,{type:`button`,className:N.secondaryBtn,onClick:i,children:`.md`}),(0,$.jsx)(`button`,{type:`button`,className:N.secondaryBtn,onClick:o,children:`.xlsx`}),(0,$.jsx)(`button`,{type:`button`,className:N.primaryStudioBtn,onClick:r,children:`Download .html`})]}),children:[(0,$.jsxs)(`div`,{className:N.shareCard,children:[(0,$.jsx)(`div`,{className:N.shareCardIcon,children:(0,$.jsx)(a,{size:24})}),(0,$.jsx)(`h3`,{className:N.shareCardTitle,children:e.title||`Untitled Quiz`}),e.description&&(0,$.jsx)(`p`,{className:N.shareCardDesc,children:e.description}),(0,$.jsxs)(`div`,{className:N.shareCardStats,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:e.questions.length}),` questions`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:l}),` points`]}),(0,$.jsxs)(`span`,{children:[(0,$.jsxs)(`strong`,{children:[e.settings.passMark,`%`]}),` to pass`]}),e.settings.timeLimitMinutes>0&&(0,$.jsxs)(`span`,{children:[(0,$.jsx)(f,{size:13}),` `,(0,$.jsx)(`strong`,{children:e.settings.timeLimitMinutes}),` min`]})]})]}),(s>0||c>0)&&(0,$.jsxs)(`div`,{className:s>0?N.exportWarnError:N.exportWarn,children:[(0,$.jsx)(y,{size:15}),(0,$.jsxs)(`span`,{children:[s>0&&`${s} error${s===1?``:`s`}`,s>0&&c>0&&` · `,c>0&&`${c} warning${c===1?``:`s`}`,s>0?` — questions with no correct answer will always score as wrong.`:` — you can still export.`]})]}),(0,$.jsx)(`p`,{className:N.modalHint,children:`The .html file is fully self-contained — no server, no internet, no install. Open it anywhere or send it to someone.`})]})}function lt(e){let t=new Date(e);return Number.isNaN(t.getTime())?``:t.toLocaleString(void 0,{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`})}function ut({entries:e,currentId:t,onClose:n,onSaveCurrent:r,onOpen:i,onDelete:a,onDuplicate:o,onRename:s,onNewQuiz:c}){let[u,d]=(0,F.useState)(null),[f,p]=(0,F.useState)(``),m=()=>{u&&f.trim()&&s(u,f.trim()),d(null)};return(0,$.jsxs)(st,{title:`My quizzes`,onClose:n,width:560,footer:(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`button`,{type:`button`,className:N.secondaryBtn,onClick:c,children:[(0,$.jsx)(ae,{size:15}),`New quiz`]}),(0,$.jsxs)(`button`,{type:`button`,className:N.primaryStudioBtn,onClick:r,children:[(0,$.jsx)(v,{size:15}),`Save current quiz`]})]}),children:[e.length===0?(0,$.jsxs)(`div`,{className:N.libraryEmpty,children:[(0,$.jsx)(l,{size:28}),(0,$.jsxs)(`p`,{children:[`No saved quizzes yet. Hit `,(0,$.jsx)(`strong`,{children:`Save current quiz`}),` to keep this one and start another — they all stay in this browser.`]})]}):(0,$.jsx)(`ul`,{className:N.libraryList,children:e.map(e=>{let n=e.id===t,r=e.quiz.questions.length,s=`${r} question${r===1?``:`s`} · ${j(e.quiz)} pts · saved ${lt(e.savedAt)}`;return(0,$.jsxs)(`li`,{className:`${N.libraryRow} ${n?N.libraryRowCurrent:``}`,children:[u===e.id?(0,$.jsxs)(`div`,{className:N.libraryMain,children:[(0,$.jsx)(`input`,{autoFocus:!0,value:f,onChange:e=>p(e.target.value),onBlur:m,onKeyDown:e=>{e.key===`Enter`&&m(),e.key===`Escape`&&d(null)},className:N.libraryRenameInput}),(0,$.jsx)(`span`,{className:N.libraryMeta,children:s})]}):(0,$.jsxs)(`button`,{type:`button`,className:N.libraryMain,onClick:()=>i(e),title:`Open this quiz`,children:[(0,$.jsxs)(`span`,{className:N.libraryTitle,children:[(0,$.jsx)(`span`,{className:N.libraryTitleText,children:e.quiz.title||`Untitled Quiz`}),n&&(0,$.jsx)(`span`,{className:N.libraryCurrentTag,children:`open`})]}),(0,$.jsx)(`span`,{className:N.libraryMeta,children:s})]}),(0,$.jsxs)(`div`,{className:N.libraryActions,children:[(0,$.jsx)(`button`,{type:`button`,className:N.iconBtnSmall,title:`Rename`,onClick:()=>{d(e.id),p(e.quiz.title)},children:(0,$.jsx)(D,{size:14})}),(0,$.jsx)(`button`,{type:`button`,className:N.iconBtnSmall,title:`Duplicate`,onClick:()=>o(e.id),children:(0,$.jsx)(O,{size:14})}),(0,$.jsx)(`button`,{type:`button`,className:N.iconBtnSmall,title:`Delete`,onClick:()=>a(e.id),children:(0,$.jsx)(C,{size:14})})]})]},e.id)})}),(0,$.jsx)(`p`,{className:N.modalHint,children:`Saved quizzes live in this browser only (localStorage) — they aren't uploaded anywhere. Use Export to get a file you can keep or share.`})]})}function dt({settings:e,onChange:t,onClose:n}){let r=n=>t({...e,[n]:!e[n]});return(0,$.jsx)(st,{title:`Quiz settings`,onClose:n,width:480,children:(0,$.jsxs)(`div`,{className:N.settingsList,children:[(0,$.jsxs)(`label`,{className:N.settingRow,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:`Shuffle questions`}),(0,$.jsx)(`small`,{children:`Randomise question order on every attempt`})]}),(0,$.jsx)(`input`,{type:`checkbox`,checked:e.shuffleQuestions,onChange:()=>r(`shuffleQuestions`)})]}),(0,$.jsxs)(`label`,{className:N.settingRow,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:`Shuffle options`}),(0,$.jsx)(`small`,{children:`Randomise answer order within each question`})]}),(0,$.jsx)(`input`,{type:`checkbox`,checked:e.shuffleOptions,onChange:()=>r(`shuffleOptions`)})]}),(0,$.jsxs)(`label`,{className:N.settingRow,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:`Instant feedback`}),(0,$.jsx)(`small`,{children:`Reveal the answer and explanation as soon as it's picked`})]}),(0,$.jsx)(`input`,{type:`checkbox`,checked:e.instantFeedback,onChange:()=>r(`instantFeedback`)})]}),(0,$.jsxs)(`label`,{className:N.settingRow,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:`Pass mark`}),(0,$.jsx)(`small`,{children:`Minimum score to pass`})]}),(0,$.jsxs)(`span`,{className:N.settingInputWrap,children:[(0,$.jsx)(`input`,{type:`number`,min:0,max:100,value:e.passMark,onChange:n=>t({...e,passMark:Math.min(100,Math.max(0,Number(n.target.value)||0))}),className:N.numberInput}),`%`]})]}),(0,$.jsxs)(`label`,{className:N.settingRow,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:`Time limit`}),(0,$.jsx)(`small`,{children:`0 means no limit`})]}),(0,$.jsxs)(`span`,{className:N.settingInputWrap,children:[(0,$.jsx)(`input`,{type:`number`,min:0,value:e.timeLimitMinutes,onChange:n=>t({...e,timeLimitMinutes:Math.max(0,Number(n.target.value)||0)}),className:N.numberInput}),`min`]})]}),(0,$.jsxs)(`label`,{className:N.settingRow,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:`Exported file theme`}),(0,$.jsx)(`small`,{children:`Appearance of the downloaded .html quiz`})]}),(0,$.jsxs)(`select`,{value:e.theme,onChange:n=>t({...e,theme:n.target.value}),className:N.select,children:[(0,$.jsx)(`option`,{value:`light`,children:`Light`}),(0,$.jsx)(`option`,{value:`dark`,children:`Dark`})]})]})]})})}function ft({onClose:e}){return(0,$.jsx)(st,{title:`Keyboard shortcuts`,onClose:e,width:420,children:(0,$.jsx)(`ul`,{className:N.shortcutList,children:Ye.map(e=>(0,$.jsxs)(`li`,{className:N.shortcutRow,children:[(0,$.jsx)(`span`,{children:e.label}),(0,$.jsx)(`kbd`,{className:N.kbd,children:e.keys})]},e.keys))})})}var pt={success:s,error:y,info:te},mt={success:N.toastSuccess,error:N.toastError,info:N.toastInfo};function ht({toasts:e,onDismiss:t}){return(0,$.jsx)(`div`,{className:N.toastStack,children:(0,$.jsx)(oe,{initial:!1,children:e.map(e=>{let n=pt[e.kind];return(0,$.jsxs)(r.button,{type:`button`,onClick:()=>t(e.id),className:`${N.toast} ${mt[e.kind]}`,initial:{opacity:0,y:12,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:8,scale:.96},transition:{duration:.22,ease:[.16,1,.3,1]},children:[(0,$.jsx)(n,{size:17}),(0,$.jsx)(`span`,{children:e.message})]},e.id)})})})}function gt(e,t){let n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=e,r.click(),URL.revokeObjectURL(n)}function _t(e,t,n){gt(e,new Blob([t],{type:n}))}function vt(e){return e.toLowerCase().trim().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)||`quiz`}function yt(){let[e,t]=(0,F.useState)(()=>_e()??H(we)),[n,i]=(0,F.useState)(null),[a,l]=(0,F.useState)(`edit`),[d,f]=(0,F.useState)(null),[p,m]=(0,F.useState)(!1),g=ye(`(max-width: 860px)`),[_,b]=(0,F.useState)(null),[x,te]=(0,F.useState)(null),[re,C]=(0,F.useState)(!1),[w,T]=(0,F.useState)(()=>Q()),[E,D]=(0,F.useState)(null),[O,k]=(0,F.useState)(null),A=(0,F.useRef)(null),j=(0,F.useRef)(!1),{toasts:M,pushToast:P,dismissToast:be}=Je();(0,F.useEffect)(()=>{j.current||(j.current=!0,_e()&&P(`Restored your last draft`,`info`))},[P]),(0,F.useEffect)(()=>{let t=window.setTimeout(()=>{me(e),te(new Date)},600);return()=>window.clearTimeout(t)},[e]),(0,F.useEffect)(()=>{if(O===null)return;let e=window.setTimeout(()=>{let e=H(O);e.questions.length>0&&t(e)},500);return()=>window.clearTimeout(e)},[O]);let I=t=>{k(t===`markdown`?Ce(e):null),l(t)},L=(0,F.useMemo)(()=>O===null?0:H(O).questions.length,[O]),R=(0,F.useMemo)(()=>Ge(e),[e]),xe=(0,F.useMemo)(()=>Ke(R),[R]),z=n&&e.questions.some(e=>e.id===n)?n:e.questions[0]?.id??null,B=e.questions.findIndex(e=>e.id===z),V=B>=0?e.questions[B]:null,Se=(e,n)=>t(t=>({...t,questions:t.questions.map(t=>t.id===e?n:t)})),U=(0,F.useCallback)(()=>{let e=ve();t(t=>({...t,questions:[...t.questions,e]})),i(e.id),b(e.id),l(e=>e===`preview`?`edit`:e),P(`Question added`)},[P]),Te=e=>{t(t=>({...t,questions:t.questions.filter(t=>t.id!==e)})),P(`Question deleted`)},Ee=(0,F.useCallback)(n=>{let r=e.questions.find(e=>e.id===n);if(!r)return;let a=ge(r);t(e=>{let t=e.questions.findIndex(e=>e.id===n),r=[...e.questions];return r.splice(t+1,0,a),{...e,questions:r}}),i(a.id),b(a.id),P(`Question duplicated`)},[e.questions,P]),Oe=(0,F.useCallback)(()=>{V&&Ee(V.id)},[V,Ee]),ke=(0,F.useCallback)((e,n)=>{t(t=>{if(e===n||e<0||n<0||e>=t.questions.length||n>=t.questions.length)return t;let r=[...t.questions],[i]=r.splice(e,1);return r.splice(n,0,i),{...t,questions:r}})},[]),W=(0,F.useCallback)((e,n)=>{t(t=>{let r=t.questions.findIndex(t=>t.id===e),i=r+n;if(r<0||i<0||i>=t.questions.length)return t;let a=[...t.questions];return[a[r],a[i]]=[a[i],a[r]],{...t,questions:a}})},[]),G=(0,F.useCallback)(e=>{z&&W(z,e)},[z,W]),K=t=>{let n=B+t;n<0||n>=e.questions.length||(i(e.questions[n].id),l(e=>e===`preview`?`edit`:e))},Ae=(0,F.useCallback)((e,n)=>{let r=H(e);if(r.questions.length===0){P(`No questions found in that file`,`error`);return}t(r),i(r.questions[0].id),P(`Loaded ${r.questions.length} questions from ${n}`)},[P]),q=(0,F.useCallback)(async e=>{try{let n=await Ie(e);if(n.questions.length===0){P(`No questions found — check the sheet names and headers`,`error`);return}t(n),i(n.questions[0].id),D(null),P(`Loaded ${n.questions.length} questions from ${e.name}`)}catch{P(`Couldn't read that spreadsheet`,`error`)}},[P]),J=(0,F.useCallback)(async e=>{if(/\.(xlsx|xlsm|xls)$/i.test(e.name)){await q(e);return}Ae(await e.text(),e.name)},[q,Ae]),Y=async()=>{gt(`quiz-template.xlsx`,await Le()),P(`Excel template downloaded`)},je=async e=>{let t=e.target.files?.[0];e.target.value=``,t&&await J(t)},Me=e=>Array.from(e.dataTransfer.types??[]).includes(`Files`),Ne=async e=>{if(!Me(e))return;e.preventDefault(),C(!1);let t=e.dataTransfer.files?.[0];if(t){if(!/\.(md|markdown|txt|xlsx|xlsm|xls)$/i.test(t.name)){P(`Drop a .md or .xlsx file`,`error`);return}await J(t)}},Pe=(0,F.useCallback)(()=>{_t(`${vt(e.title)}.md`,Ce(e),`text/markdown`),P(`Saved as .md`)},[e,P]),Fe=(0,F.useCallback)(async()=>{gt(`${vt(e.title)}.xlsx`,await Le(e)),P(`Quiz exported as .xlsx`)},[e,P]),Re=(0,F.useCallback)(()=>{_t(`${vt(e.title)}.html`,De(e),`text/html`),f(null),P(`Quiz exported as .html`)},[e,P]),ze=()=>{let e=H(we);t(e),i(e.questions[0]?.id??null),P(`Example quiz loaded`,`info`)},X=e=>e.title.trim()!==`Untitled Quiz`||e.questions.some(e=>e.text.trim()),Z=e=>Ce(e)===Ce(H(we)),We=()=>T(Q()),qe=(0,F.useCallback)(()=>{if(!E&&(!X(e)||Z(e)))return!1;let t=Be(e,E);return t&&D(t.id),!!t},[e,E]),Ye=(0,F.useCallback)(()=>{let t=Be(e,E);if(!t){P(`Couldn't save — browser storage is full or blocked`,`error`);return}D(t.id),T(Q()),P(`Saved "${e.title||`Untitled Quiz`}" to your quizzes`)},[e,E,P]),Xe=e=>{let n=e.id!==E&&qe();t(e.quiz),i(e.quiz.questions[0]?.id??null),D(e.id),T(Q()),f(null);let r=e.quiz.title||`Untitled Quiz`;P(n?`Opened "${r}" — previous quiz saved`:`Opened "${r}"`)},$e=(0,F.useCallback)(()=>{let e=qe(),n=pe();he(),t(n),i(n.questions[0]?.id??null),D(null),T(Q()),f(null),P(e?`Previous quiz kept in your quizzes`:`New blank quiz`,`info`)},[qe,P]);return Ze({onSave:Ye,onDownloadMarkdown:Pe,onOpenLibrary:()=>f(`library`),onExport:()=>f(`export`),onTogglePreview:()=>I(a===`preview`?`edit`:`preview`),onToggleMarkdown:()=>I(a===`markdown`?`edit`:`markdown`),onNewQuestion:U,onDuplicate:Oe,onMoveUp:()=>G(-1),onMoveDown:()=>G(1),onPrevQuestion:()=>K(-1),onNextQuestion:()=>K(1),onHelp:()=>f(`shortcuts`),onCloseOverlay:()=>{f(null),m(!1)}}),(0,$.jsxs)(`div`,{className:N.studio,onDragOver:e=>{Me(e)&&(e.preventDefault(),C(!0))},onDragLeave:()=>C(!1),onDrop:Ne,children:[(0,$.jsxs)(`header`,{className:N.topbar,children:[(0,$.jsx)(`button`,{type:`button`,className:`${N.iconBtn} ${N.menuToggle}`,onClick:()=>m(e=>!e),"aria-label":`Toggle sidebar`,children:p?(0,$.jsx)(de,{size:20}):(0,$.jsx)(o,{size:20})}),(0,$.jsxs)(fe,{to:`/`,className:N.exitLink,title:`Back to imango.in`,children:[(0,$.jsx)(ie,{size:15}),(0,$.jsx)(ee,{size:19})]}),(0,$.jsx)(`span`,{className:N.topbarDivider}),(0,$.jsx)(`span`,{className:N.topbarTitle,children:`Quiz Studio`}),(0,$.jsx)(`span`,{className:N.saveState,children:xe.errors>0?(0,$.jsxs)(`span`,{className:N.saveStateWarn,children:[(0,$.jsx)(y,{size:14}),xe.errors,` to fix`]}):x?(0,$.jsxs)(`span`,{className:N.saveStateOk,children:[(0,$.jsx)(s,{size:14}),`Saved`]}):null}),(0,$.jsxs)(`div`,{className:N.topbarActions,children:[(0,$.jsxs)(`button`,{type:`button`,className:N.secondaryBtn,onClick:()=>f(`library`),title:`My quizzes (Ctrl/⌘ + O)`,children:[(0,$.jsx)(ce,{size:15}),(0,$.jsxs)(`span`,{className:N.btnLabel,children:[`My quizzes`,w.length>0?` (${w.length})`:``]})]}),(0,$.jsxs)(`button`,{type:`button`,className:N.secondaryBtn,onClick:Ye,title:`Save quiz to this browser (Ctrl/⌘ + S)`,children:[(0,$.jsx)(v,{size:15}),(0,$.jsx)(`span`,{className:N.btnLabel,children:`Save`})]}),(0,$.jsx)(`button`,{type:`button`,className:N.iconBtn,onClick:()=>f(`settings`),title:`Quiz settings`,children:(0,$.jsx)(c,{size:18})}),(0,$.jsx)(`button`,{type:`button`,className:N.iconBtn,onClick:()=>f(`shortcuts`),title:`Keyboard shortcuts (?)`,children:(0,$.jsx)(S,{size:18})}),(0,$.jsx)(le,{}),(0,$.jsxs)(`button`,{type:`button`,className:N.primaryStudioBtn,onClick:()=>f(`export`),disabled:e.questions.length===0,children:[(0,$.jsx)(ue,{size:15}),(0,$.jsx)(`span`,{className:N.btnLabel,children:`Export`})]})]})]}),(0,$.jsxs)(`div`,{className:N.body,children:[(0,$.jsxs)(`aside`,{className:`${N.sidebar} ${p?N.sidebarOpen:``}`,children:[(0,$.jsx)(Qe,{quiz:e,selectedId:z,issues:R,onSelect:e=>{i(e),b(e),m(!1),l(e=>e===`preview`?`edit`:e)},onAddQuestion:U,onDownloadSample:()=>_t(`sample-quiz.md`,we,`text/markdown`),onDownloadExcelTemplate:Y,onUploadClick:()=>A.current?.click(),onLoadSample:ze,onReorder:ke}),(0,$.jsx)(`div`,{className:N.sidebarFooter,children:(0,$.jsxs)(`button`,{type:`button`,className:N.sidebarBtn,onClick:$e,children:[(0,$.jsx)(ae,{size:15}),`New quiz`]})})]}),p&&(0,$.jsx)(`div`,{className:N.scrim,onClick:()=>m(!1)}),(0,$.jsxs)(`main`,{className:N.main,children:[(0,$.jsxs)(`div`,{className:N.mainToolbar,children:[(0,$.jsxs)(`div`,{className:N.modeSwitch,children:[(0,$.jsxs)(`button`,{type:`button`,className:`${N.modeBtn} ${a===`edit`?N.modeBtnActive:``}`,onClick:()=>I(`edit`),children:[(0,$.jsx)(se,{size:15}),(0,$.jsx)(`span`,{className:N.btnLabel,children:`Edit`})]}),(0,$.jsxs)(`button`,{type:`button`,className:`${N.modeBtn} ${a===`markdown`?N.modeBtnActive:``}`,onClick:()=>I(`markdown`),title:`Edit the raw .md source (Ctrl/⌘ + M)`,children:[(0,$.jsx)(h,{size:15}),(0,$.jsx)(`span`,{className:N.btnLabel,children:`Markdown`})]}),(0,$.jsxs)(`button`,{type:`button`,className:`${N.modeBtn} ${a===`split`?N.modeBtnActive:``} ${N.splitOnly}`,onClick:()=>I(`split`),children:[(0,$.jsx)(ne,{size:15}),(0,$.jsx)(`span`,{className:N.btnLabel,children:`Split`})]}),(0,$.jsxs)(`button`,{type:`button`,className:`${N.modeBtn} ${a===`preview`?N.modeBtnActive:``}`,onClick:()=>I(`preview`),children:[(0,$.jsx)(u,{size:15}),(0,$.jsx)(`span`,{className:N.btnLabel,children:`Preview`})]})]}),(0,$.jsx)(`div`,{className:N.mainToolbarActions,children:(0,$.jsx)(`button`,{type:`button`,className:N.secondaryBtn,onClick:Pe,children:`Save .md`})})]}),(0,$.jsxs)(`div`,{className:`${N.panes} ${a===`split`?N.panesSplit:N.panesSingle}`,children:[a===`markdown`&&O!==null&&(0,$.jsxs)(`section`,{className:`${N.pane} ${N.markdownPane}`,children:[(0,$.jsxs)(`div`,{className:N.markdownBar,children:[(0,$.jsxs)(`span`,{className:N.fieldLabelText,children:[(0,$.jsx)(h,{size:14}),`Markdown source`]}),(0,$.jsx)(`span`,{className:L>0?N.markdownOk:N.markdownWarn,children:L>0?`${L} question${L===1?``:`s`} detected`:`No questions detected — changes won't be applied`})]}),(0,$.jsx)(`textarea`,{value:O,onChange:e=>k(e.target.value),spellCheck:!1,className:N.markdownTextarea,"aria-label":`Quiz markdown source`}),(0,$.jsxs)(`p`,{className:N.markdownHint,children:[`Edits apply automatically. `,(0,$.jsx)(`code`,{children:`## question`}),` ·`,` `,(0,$.jsx)(`code`,{children:`- [x] correct`}),` / `,(0,$.jsx)(`code`,{children:`- [ ] wrong`}),` ·`,` `,(0,$.jsx)(`code`,{children:`> explanation`}),` · settings live in the`,` `,(0,$.jsx)(`code`,{children:`---`}),` block at the top.`]})]}),(a===`edit`||a===`split`)&&(0,$.jsxs)(`section`,{className:N.pane,children:[(0,$.jsxs)(`div`,{className:N.quizMetaFields,children:[(0,$.jsx)(`input`,{type:`text`,value:e.title,onChange:e=>t(t=>({...t,title:e.target.value})),placeholder:`Quiz title`,className:N.titleInput}),(0,$.jsx)(`textarea`,{value:e.description,onChange:e=>t(t=>({...t,description:e.target.value})),placeholder:`Short description (optional)`,className:N.descTextarea})]}),e.questions.length===0?(0,$.jsxs)(`div`,{className:N.emptyPanel,children:[(0,$.jsx)(`p`,{children:`No questions yet.`}),(0,$.jsx)(`button`,{type:`button`,className:N.primaryStudioBtn,onClick:U,children:`Add your first question`})]}):g?(0,$.jsx)(tt,{quiz:e,issues:R,expandedId:_,onToggle:e=>b(t=>t===e?null:e),onChange:Se,onDelete:Te,onDuplicate:Ee,onMove:W,onAddQuestion:U}):V&&(0,$.jsx)(et,{question:V,index:B,total:e.questions.length,onChange:e=>Se(V.id,e),onDelete:()=>Te(V.id),onDuplicate:Oe,onMove:G,onNavigate:K},V.id)]}),(a===`preview`||a===`split`)&&(0,$.jsx)(`section`,{className:`${N.pane} ${N.previewPane}`,children:(0,$.jsx)(ot,{quiz:e})})]})]})]}),(0,$.jsx)(`input`,{ref:A,type:`file`,accept:`.md,.markdown,.txt,.xlsx,.xlsm,.xls,text/markdown`,className:N.hiddenInput,onChange:je}),(0,$.jsx)(oe,{children:re&&(0,$.jsx)(r.div,{className:N.dropZone,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:`Drop a .md or Excel file to load it`})}),(0,$.jsxs)(oe,{children:[d===`export`&&(0,$.jsx)(ct,{quiz:e,issues:R,onClose:()=>f(null),onDownloadHtml:Re,onDownloadMarkdown:Pe,onDownloadExcel:Fe},`export`),d===`settings`&&(0,$.jsx)(dt,{settings:e.settings,onChange:e=>t(t=>({...t,settings:e})),onClose:()=>f(null)},`settings`),d===`library`&&(0,$.jsx)(ut,{entries:w,currentId:E,onClose:()=>f(null),onSaveCurrent:Ye,onOpen:Xe,onDelete:e=>{let t=w.find(t=>t.id===e)?.quiz.title||`this quiz`;window.confirm(`Delete "${t}" from your saved quizzes? This can't be undone.`)&&(Ve(e),e===E&&D(null),We(),P(`Quiz deleted`))},onDuplicate:e=>{if(!He(e)){P(`Couldn't duplicate — browser storage is full or blocked`,`error`);return}We(),P(`Quiz duplicated`)},onRename:(e,n)=>{Ue(e,n),e===E&&t(e=>({...e,title:n})),We(),P(`Renamed`)},onNewQuiz:$e},`library`),d===`shortcuts`&&(0,$.jsx)(ft,{onClose:()=>f(null)},`shortcuts`)]}),(0,$.jsx)(ht,{toasts:M,onDismiss:be})]})}export{yt as QuizStudioPage};