import{o as e}from"./C0FnF6B9.js";import{n as t,t as n}from"./Tt_7PfBe.js";import{t as r}from"./oH2SK4Cy.js";import{t as i}from"./_QdSbiZv.js";var a=e(t(),1),o=`This policy covers imango.in, ai.imango.in and the AML GPT app (Ask My Life), plus Invoice Studio, Quiz Studio and the other free tools on imango.in. In short: **your notes, books, photos, invoices and quizzes stay on your own device.** We don't have accounts, and we don't have a server that stores what you write.

## What stays on your device

- **AML GPT:** your notes, questions, answers, books, photos, budgets and settings are kept in your browser's storage on your phone or computer. They are not uploaded to us.
- **Invoice Studio and Quiz Studio:** your invoices, quotations, business details and quizzes are kept in your browser's storage too.
- **Backups** are files you save yourself (for example to your phone, Google Drive or a folder you choose). If you set a backup password, those files are encrypted on your device before they are saved, and we can't open them.
- **App lock:** your PIN is stored only as a scrambled (hashed) value on your device. "Unlock with this device" uses your phone's or computer's own fingerprint, face or PIN check; we never see it.

Clearing your browser's data for these sites, or uninstalling the app with its data, deletes what's stored there. Keep a backup.

## When something leaves your device

Only in these cases, and only when you use them:

- **Claude (optional, with your own key).** If you add your own Anthropic API key in AML GPT's settings, each new note you write is sent to Anthropic to find its people, projects and tasks, and each question you ask is sent with the notes needed to answer it. With "Read words from photos" on, photos you add are sent to be read. Passwords, PINs and card numbers found in your notes are removed first. Anthropic's own privacy policy applies to those requests. Without a key, all of this is done on your device.
- **Web answers.** When you ask a question with "Web" turned on and no key, only the question is sent (passwords removed first) to free public services, depending on the question: Frankfurter (exchange rates), Open-Meteo (weather and places), Wiktionary (word meanings), OpenStreetMap Nominatim (where a place is), Wikipedia and Wikidata (facts), and Open Library (books). Your notes are never sent.
- **Reading words from photos (optional, off by default).** Without a Claude key it's done on your device, with a reading engine downloaded once from a public code library (jsDelivr); the photo isn't sent anywhere.
- **Smart answers models (optional).** The Small meaning model comes from our own site; the Multilingual one comes from Hugging Face, with its engine from jsDelivr. Each is downloaded once and kept on your device, and nothing you write is sent with the download.
- **Sharing.** When you share a recap picture, a note or an invoice, it goes where you choose to send it.

## Counting visits

We count visits to our websites with **Cloudflare Web Analytics**. It doesn't use cookies or follow you across sites. It records things like the page's address, the country, the kind of device and browser, and which site linked to us, so we know how many people visit and which pages help them. It never includes your notes, questions, books, photos or invoices.

## Children

Our tools are not made for children under 13, and we don't knowingly collect anything from them. We don't collect personal information from anyone through the apps.

## Your choices

- You can export, back up or delete everything from the app's settings (AML GPT: Settings → Data → Start over).
- You can use AML GPT without a Claude key and without Web answers, and then nothing you write leaves your device.

## Changes

If this policy changes, we'll update this page and the date at the top.

## Contact

Questions about privacy: write to **askmylifegpt@gmail.com**.
`,s=n(),c=`2026-10-04`;function l(){let e=(0,a.useMemo)(()=>i(o),[]);return(0,s.jsx)(`section`,{className:r.page,children:(0,s.jsx)(`div`,{className:`container ${r.postContainer}`,children:(0,s.jsxs)(`article`,{children:[(0,s.jsxs)(`time`,{dateTime:c,className:r.cardDate,children:[`Last updated `,new Date(c).toLocaleDateString(`en-IN`,{year:`numeric`,month:`long`,day:`numeric`})]}),(0,s.jsx)(`h1`,{className:r.postTitle,children:`Privacy policy`}),(0,s.jsx)(`div`,{className:r.postBody,dangerouslySetInnerHTML:{__html:e}})]})})})}export{l as PrivacyPage};