#!/usr/bin/env python3
"""Build the '25 Hidden Places in Italy' lead-magnet PDF."""
import base64, os
from weasyprint import HTML
from places import PLACES

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOGO = f"{REPO}/public/images/wanderlust-logo-transparent.png"
OUT = f"{REPO}/public/downloads/25-hidden-places-in-italy.pdf"
os.makedirs(os.path.dirname(OUT), exist_ok=True)

with open(LOGO, "rb") as f:
    logo_b64 = base64.b64encode(f.read()).decode()
logo_uri = f"data:image/png;base64,{logo_b64}"

# Group places by region for section headers
REGIONS = [
    ("Northern Italy", PLACES[0:5]),
    ("Central Italy", PLACES[5:12]),
    ("The South & Islands", PLACES[12:25]),
]

def esc(s):
    return (s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))

cards = ""
n = 0
for region, items in REGIONS:
    cards += f'<h2 class="region">{esc(region)}</h2>\n'
    for name, area, desc, tip in items:
        n += 1
        cards += f'''
        <div class="card">
          <div class="num">{n:02d}</div>
          <div class="body">
            <div class="place">{esc(name)} <span class="area">· {esc(area)}</span></div>
            <p class="desc">{esc(desc)}</p>
            <p class="tip"><span class="tiplabel">Insider tip</span> {esc(tip)}</p>
          </div>
        </div>'''

html = f'''<!doctype html>
<html><head><meta charset="utf-8"><style>
@page {{
  size: A4; margin: 20mm 16mm 18mm 16mm;
  @bottom-center {{
    content: "Wanderlust Travel Guides  ·  wanderlusttravelguides.com";
    font-family: Georgia, serif; font-size: 8pt; color: #94a3b8;
  }}
  @bottom-right {{ content: counter(page); font-family: Georgia, serif; font-size: 8pt; color: #94a3b8; }}
}}
@page cover {{ margin: 0; @bottom-center {{ content: none; }} @bottom-right {{ content: none; }} }}
* {{ box-sizing: border-box; }}
body {{ font-family: Georgia, 'Times New Roman', serif; color: #1e293b; line-height: 1.5; }}

/* Cover */
.cover {{
  page: cover; page-break-after: always;
  height: 297mm; width: 210mm;
  background: linear-gradient(150deg, #0c4a6e 0%, #1d4ed8 55%, #0e7490 100%);
  color: #fff; padding: 40mm 22mm; position: relative;
}}
.cover img {{ height: 26mm; margin-bottom: 30mm; }}
.cover .kicker {{ font-size: 12pt; letter-spacing: 3px; text-transform: uppercase; color: #bae6fd; margin-bottom: 10mm; }}
.cover h1 {{ font-size: 40pt; line-height: 1.1; margin: 0 0 8mm; font-weight: 700; }}
.cover .sub {{ font-size: 15pt; color: #e0f2fe; max-width: 130mm; }}
.cover .foot {{ position: absolute; bottom: 26mm; left: 22mm; right: 22mm; font-size: 10.5pt; color: #bae6fd; border-top: 1px solid rgba(255,255,255,.3); padding-top: 6mm; }}

/* Intro */
.intro {{ page-break-after: always; }}
.intro h2 {{ font-size: 22pt; color: #0c4a6e; margin: 0 0 6mm; }}
.intro p {{ font-size: 12pt; margin: 0 0 5mm; color: #334155; }}
.intro .how {{ background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 6mm 8mm; border-radius: 3px; margin-top: 8mm; }}
.intro .how h3 {{ margin: 0 0 3mm; color: #0369a1; font-size: 12pt; }}
.intro .how ul {{ margin: 0; padding-left: 6mm; font-size: 11pt; color: #334155; }}
.intro .how li {{ margin-bottom: 2mm; }}

/* Region + cards */
h2.region {{
  font-size: 18pt; color: #0c4a6e; margin: 8mm 0 4mm;
  padding-bottom: 2mm; border-bottom: 2px solid #0ea5e9; break-after: avoid;
}}
.card {{ display: flex; gap: 5mm; padding: 4mm 0; border-bottom: 1px solid #e2e8f0; break-inside: avoid; }}
.num {{ font-size: 26pt; font-weight: 700; color: #bae6fd; min-width: 16mm; line-height: 1; }}
.place {{ font-size: 13.5pt; font-weight: 700; color: #0f172a; margin-bottom: 1.5mm; }}
.area {{ font-weight: 400; font-size: 11pt; color: #0891b2; }}
.desc {{ font-size: 10.5pt; margin: 0 0 2.5mm; color: #334155; }}
.tip {{ font-size: 10pt; margin: 0; color: #475569; background: #f8fafc; padding: 2.5mm 3.5mm; border-radius: 3px; }}
.tiplabel {{ font-weight: 700; color: #0369a1; text-transform: uppercase; font-size: 8pt; letter-spacing: 1px; margin-right: 2mm; }}

/* Closing */
.closing {{ page-break-before: always; text-align: center; padding-top: 30mm; }}
.closing h2 {{ font-size: 22pt; color: #0c4a6e; margin-bottom: 6mm; }}
.closing p {{ font-size: 12pt; color: #334155; max-width: 140mm; margin: 0 auto 5mm; }}
.closing .cta {{ display: inline-block; margin-top: 6mm; background: #1d4ed8; color: #fff; padding: 5mm 12mm; border-radius: 6px; font-size: 12pt; font-weight: 700; text-decoration: none; }}
.closing .note {{ font-size: 10pt; color: #94a3b8; margin-top: 10mm; }}
</style></head><body>

<div class="cover">
  <img src="{logo_uri}" alt="Wanderlust"/>
  <div class="kicker">Free Travel Guide</div>
  <h1>25 Hidden Places in Italy Most Tourists Miss</h1>
  <div class="sub">The villages, coastlines and secret corners that locals love — and the guidebooks skip.</div>
  <div class="foot">A free gift from Wanderlust Travel Guides · wanderlusttravelguides.com</div>
</div>

<div class="intro">
  <h2>Welcome, fellow traveller</h2>
  <p>Everyone sees Rome, Venice and Florence — and they're wonderful. But the Italy that stays with you is usually the one you weren't expecting: a pastel fishing village with no tour buses, a town carved into a cliff, free hot springs steaming in a quiet wood.</p>
  <p>This little guide gathers 25 of those places, spread from the Alps to Sicily. Every one is real, reachable, and worth the detour. We've kept the crowds-favourites out on purpose — this is the good stuff.</p>
  <div class="how">
    <h3>How to use this guide</h3>
    <ul>
      <li>Places are grouped by region — North, Centre, and South &amp; Islands — so you can build a route.</li>
      <li>Each entry has an <strong>Insider tip</strong>: the one thing worth doing when you get there.</li>
      <li>Mix two or three of these into a mainstream trip for the perfect balance.</li>
    </ul>
  </div>
</div>

{cards}

<div class="closing">
  <h2>Ready to plan the whole trip?</h2>
  <p>This is just a taste. Our full country guides turn scattered ideas like these into a complete, ready-to-follow itinerary — with day-by-day plans, hidden gems, food spots, transport and budgets all in one place.</p>
  <a class="cta" href="https://www.wanderlusttravelguides.com/guides/europe/italy-ultimate">Explore the Italy Guide →</a>
  <p class="note">© Wanderlust Travel Guides · Feel free to share this PDF with a fellow traveller.</p>
</div>

</body></html>'''

HTML(string=html).write_pdf(OUT)
print("Wrote", OUT, os.path.getsize(OUT), "bytes")
