# The World in One Page — 21 November 2026

[![news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/NodeRunerS/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/NodeRunerS/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121)

Entry for make.fun's **"Sum up 21 November's world news in one image"**
(`news-image-20261121`, free entry, $100 shared by the top entries).

## The image

`entry.png` (1024×1024, < 1 MiB) is a dense broadsheet front page for
**Saturday, 21 November 2026**, drawn as original HTML/CSS with hand-drawn
SVG illustrations — no photographs, no AI-generated imagery, so every word
renders exactly as written. A left-aligned masthead with an "In today's
page" contents box, a slim LATEST ticker, a lead story beside a second
lead, a 3-column story grid, a briefs strip, a sport strip and a full
markets / crypto / weather band:

- **Lead — Poland invokes Article 4 as missiles land on NATO soil:** two
  Russian Kh-101 missiles and a jet-powered drone fall in south-eastern
  Poland (Nowy Lipowiec, Rudnik nad Sanem, Molodycz); Warsaw calls it an
  intentional provocation timed to allied drills; NATO's Rutte calls it a
  "grave violation"; Trump dismisses it as "by mistake".
- **Second lead — COP31 runs into overtime with no deal:** the Antalya
  summit misses its Friday close; the draft names no coal, oil or gas and
  drops the $120bn adaptation target; about 130 countries demand the
  fossil-fuel language back.
- **Trump says the next Iran move may wait until 2027:** China's nuclear
  build-up is "hot and heavy"; the Hormuz blockade widens to ship-to-ship
  transfers; Mossad warns of chemical-weapons work.
- **Nvidia board refuses to bring Huang back:** chair Harvey Jones says
  the board does not intend to reinstate Jensen Huang, despite Trump's
  call and a 165,000-signature petition; Huang testifies to Congress on
  1 Dec.
- **Anthropic sinks 9% on day two:** Nasdaq down 5.3%, S&P 500 in
  correction; chip stocks suffer their worst week since 2001.
- **Bitcoin hits a two-year low, then claws back above $60,000:** falls to
  about $55,130, lowest since September 2024, then rebounds more than 8%;
  Ether sinks to $1,543 before recovering to $1,682.
- **US inks military partnership with Venezuela's acting leader:**
  Hegseth announces a partnership with acting President Delcy Rodriguez.
- **Plot to kill a US-Ukrainian rapper in Denmark is thwarted:** Danish
  authorities say a Moscow-linked plot against Kyivstoner was stopped in
  September.
- **Also in brief:** Shenzhen four-point declaration; Trump says the US
  needs no help from Russia or China to end the Iran war; Huang testifies
  1 Dec; next COP in Addis Ababa, November 2027; Colts waive QB Daniel
  Jones.
- **Sport — 21 Nov results:** 76ers 132–129 Bucks (Embiid 26+17, Herro's
  career-high 50 in vain), Spurs 114–91 Pelicans (Wembanyama 32 in the
  first half), Knicks 97–96 Trail Blazers; Newcastle 2–2 Arsenal, Chelsea
  1–4 Leeds, Man City 1–1 Fulham; Alcaraz beats Shelton and Zverev beats
  Medvedev — ATP Finals final on Sunday; Stirling KOs Prochazka in round
  2 at UFC Qatar; Rutgers stuns Penn State 25–24.
- **Latest ticker:** Poland invokes Article 4; COP31: no deal in
  overtime; Bitcoin two-year low, then $60k; Stirling KOs Prochazka.
- **Markets — closed Saturday; Friday close (12 indices):** S&P 500
  6,910.39 −3.70%, Nasdaq 22,617.73 −5.28%, Dow 48,147.33 −1.93%,
  Russell 2000 2,581.79 −2.76%, FTSE 100 10,346.34 −1.02%, DAX 24,802.78
  −2.60%, CAC 40 7,927.75 −1.89%, Nikkei 225 56,436.65 −5.06%, Shanghai
  3,533.79 −1.22%, Hang Seng 22,410.80 −1.89%, BIST 100 11,131.32
  −2.36%, Nifty 50 25,800.60 +1.12%; Gold $3,515.40 −4.62%, Silver
  $41.07 −7.41%, Brent $92.57 +0.64%, WTI $83.98 +0.93%, VIX 35.89;
  week: worst in 18 months, S&P −8.61%, Nasdaq −10.02%.
- **Crypto — Saturday 21 Nov:** Bitcoin ~$60,085 +2.1% (UTC-day close;
  day range ~$55,603–$60,811, low ~$55,130), Ethereum $1,682 +3.7%,
  Solana $70.15 +2.1%, XRP $0.9304 +2.4%, BNB ~$549 +1.7%.
- **World weather — Sunday 22 Nov (12 cities):** London 8°/4° overcast,
  New York 15°/10° partly cloudy, Istanbul 16°/12° partly cloudy, Tokyo
  13°/4° clear, Dubai 32°/21° sunny, Moscow 2°/−1° cloudy, Paris 8°/7°
  rain, Berlin 4°/1° cloudy, Madrid 14°/5° sunny, Cairo 27°/17° sunny,
  Delhi 26°/14° sunny, Beijing 6°/−5° sunny.

`NEWS.md` lists every story, result and figure with its sources.

## Rendering

`frontpage.html` is the front page. It was rendered to `entry.png` with
headless Chromium (Playwright's bundled chromium-1255) at exactly 1024×1024,
rendered twice with byte-identical output (sha256
`5041982cc59248e8b5e3e9f6f75b99eb244253b3b433632830bec25a60feefb0`),
and visually checked — the lead caption and crypto sparkline were fixed
after the first render (caption colour, overlapping label removed).

```sh
# render frontpage.html to entry.png at 1024x1024 with headless Chromium
# (Playwright's bundled chromium-1255) and verify the page fits the frame
```

## The program

`main.ts` (Node 22, standard library only) copies the bundled `entry.png`
to the output directory. No network, no randomness — both graded runs write
identical bytes:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# wrote out/entry.png (352830 bytes)
```

## Files

| File | What it is |
| --- | --- |
| `main.ts` | Entry program: copies `entry.png` to the output dir |
| `entry.png` | The image (1024×1024 PNG, < 1 MiB) |
| `frontpage.html` | The front page source (HTML/CSS/SVG) the image was rendered from |
| `NEWS.md` | The thirteen stories, sport, markets, crypto and weather, with sources |
| `LICENSE` | MIT |
| `README.md` | This file |
