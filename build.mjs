import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
const { chromium } = createRequire(import.meta.url)('C:/Users/USER/Documents/Claude/ספטמבר 2026/הודעות פרטיות ארבע 29.9.26/node_modules/playwright-core/index.js');
const dir = 'C:/Users/USER/Documents/Claude/אוקטובר 2026/סטוריז המלצת רותי 28.10.26';
const logo = 'C:/Users/USER/Documents/Claude/אוקטובר 2026/קיצור דרך לתוכניות 4.10.26/logo.png';

const css = `
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;800&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
html{direction:ltr;overflow:hidden;width:1080px;height:1920px}
body{width:1080px;height:1920px;direction:ltr;font-family:"Rubik",sans-serif;text-align:center;color:#4a3340;position:relative;overflow:hidden}
.bg1{background:linear-gradient(160deg,#FEF6F5 0%,#FBD9D6 100%)}
.bg2{background:linear-gradient(160deg,#F3FBF8 0%,#FDE1EA 100%)}
.bg3{background:linear-gradient(160deg,#EEF7FB 0%,#FEF6F5 100%)}
.bg4{background:linear-gradient(160deg,#FDE1EA 0%,#EAF7F2 100%)}
.circle{position:absolute;border-radius:50%}
.wrap{direction:rtl;position:absolute;left:80px;right:80px;top:230px;bottom:420px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:44px}
.hook{font-size:104px;font-weight:800;line-height:1.18;color:#B8236B}
.line{font-size:64px;font-weight:500;line-height:1.35}
.line b{color:#B8236B;font-weight:700}
.dots{direction:rtl;position:absolute;top:96px;left:0;right:0;display:flex;justify-content:center;gap:14px}
.dots i{width:70px;height:8px;border-radius:4px;background:#F8B9B6;opacity:.55}
.dots i.on{background:#D14175;opacity:1}
.card{background:#fff;border-radius:44px;padding:20px;box-shadow:0 18px 50px rgba(184,35,107,.18);border:6px solid #FBC5D6}
.card img{display:block;width:860px;border-radius:30px}
.cta{background:#D14175;color:#fff;font-weight:700;font-size:70px;padding:34px 70px;border-radius:90px;box-shadow:0 14px 36px rgba(209,65,117,.35)}
.ph{position:absolute;left:140px;top:520px;width:800px;height:1090px;transform:rotate(-3deg);border-radius:128px;background:linear-gradient(145deg,#d9d4cf,#8f8a86 45%,#cfc9c3);padding:12px;box-shadow:0 60px 90px rgba(90,40,60,.35),0 20px 30px rgba(90,40,60,.25)}
.ph .bz{width:100%;height:100%;border-radius:116px;background:#0b0b0d;padding:16px}
.ph .sc{position:relative;width:100%;height:100%;border-radius:100px;overflow:hidden;background:linear-gradient(180deg,#F7DADD,#F1E2DC);direction:ltr}
.sb{height:84px;background:#F4E1DF;display:flex;justify-content:space-between;align-items:flex-end;padding:0 56px 10px;font-weight:700;font-size:30px;color:#111}
.isl{position:absolute;top:18px;left:50%;transform:translateX(-50%);width:170px;height:48px;border-radius:30px;background:#000}
.sc img{display:block;width:100%}
.inp{position:absolute;left:24px;right:24px;bottom:54px;height:78px;border-radius:40px;background:#fff;color:#9a9a9a;font-size:30px;display:flex;align-items:center;padding:0 30px;direction:rtl}
.hi{position:absolute;bottom:16px;left:50%;transform:translateX(-50%);width:230px;height:9px;border-radius:5px;background:#111}
.gl{position:absolute;inset:0;background:linear-gradient(115deg,rgba(255,255,255,.22) 0%,rgba(255,255,255,0) 35%);pointer-events:none}
.btn{position:absolute;width:8px;border-radius:4px;background:#9a948f}
.logo{position:absolute;bottom:330px;left:50%;transform:translateX(-50%);width:150px;opacity:.95}
`;
const dots = n => `<div class="dots">${[1,2,3,4].map(i=>`<i class="${i===n?'on':''}"></i>`).join('')}</div>`;
const deco = `<div class="circle" style="width:620px;height:620px;background:#FBD9D6;opacity:.55;top:-200px;left:-220px"></div>
<div class="circle" style="width:520px;height:520px;background:#CFEDE3;opacity:.5;bottom:-160px;right:-180px"></div>`;

const frames = [
`<body class="bg1">${deco}${dots(1)}<div class="wrap">
<div class="line">קיבלתי הודעה מרותי, אמא מהתוכנית שלנו</div>
<div class="hook">הבן שלה בכיתה ג' התחבר לספר אפילו יותר מהקטן</div>
<div class="line">תחליקי הלאה ותראי מה היא כתבה</div></div></body>`,
`<body class="bg2">${deco}${dots(2)}<div class="wrap">
<div class="hook" style="font-size:88px">רותי כבר בתוכנית ההכנה לכיתה א׳ ובמועדון האימהות</div>
<div class="line">הספר הגיע אצלה אתמול, והם קראו אותו יחד באותו יום</div>
<div class="line">הבן שלה בכיתה ג׳ מתמודד עם <b>קשיי למידה</b></div></div></body>`,
`<body class="bg3">${deco}${dots(3)}
<div class="line" style="position:absolute;top:240px;left:0;right:0;font-size:72px;font-weight:700;color:#B8236B;direction:rtl">הנה מה שהיא כתבה לי:</div>
<div class="ph"><div class="btn" style="left:-8px;top:250px;height:90px"></div><div class="btn" style="left:-8px;top:370px;height:150px"></div><div class="btn" style="right:-8px;top:420px;height:220px"></div>
<div class="bz"><div class="sc"><div class="sb"><span>8:21</span><span>5G &nbsp;<span style="display:inline-block;width:46px;height:22px;border:3px solid #111;border-radius:7px;vertical-align:-2px;position:relative"><i style="position:absolute;inset:2px;background:#111;border-radius:3px;width:70%"></i></span></span></div><div class="isl"></div><img src="ruti.jpeg"><div class="inp">הודעה</div><div class="hi"></div><div class="gl"></div></div></div></div></body>`,
`<body class="bg4">${deco}${dots(4)}<div class="wrap">
<div class="hook" style="font-size:96px">הספר "האותיות הסודיות של גיא"</div>
<div class="line">אם תרצי לקבל את הקישור לכל הפרטים ולרכישה במחיר מוזל + משלוח חינם</div>
<div class="cta">כתבי לי "ספר"</div></div></body>`
];

const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
for (let i = 0; i < frames.length; i++) {
  const f = path.join(dir, `_f${i+1}.html`);
  fs.writeFileSync(f, `<!doctype html><html lang="he" dir="rtl"><head><meta charset="utf-8"><style>${css}</style></head>${frames[i]}</html>`);
  await p.goto('file:///' + f.replace(/\\/g,'/'), { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(600);
  await p.screenshot({ path: path.join(dir, `סטורי ${i+1}.png`) });
}
await b.close();
console.log('ok');
