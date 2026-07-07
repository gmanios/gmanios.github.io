# Aegean Scripts — Linear A &amp; Linear B Sign Composer

<p align="center">
  <strong>𐀀 𐀖 𐀛 𐀰&nbsp;&nbsp;·&nbsp;&nbsp;𐘀 𐘁 𐘂 𐘃</strong><br>
  <em>Explore the syllabograms and ideograms of the Bronze Age Aegean — and write on your own clay tablet.</em>
</p>

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-single%20file-E7DECB?labelColor=221A12">
  <img alt="Dependencies" src="https://img.shields.io/badge/dependencies-none-0E6E67?labelColor=221A12">
  <img alt="Data" src="https://img.shields.io/badge/data-Unicode-B4832A?labelColor=221A12">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-0E6E67?labelColor=221A12">
</p>

---

**Aegean Scripts** is an interactive, dependency-free web app for exploring **Linear A** and **Linear B**, the two related writing systems of the Minoan and Mycenaean world (c. 1800–1200 BCE). Every sign is shown next to its Latin syllabic value; click signs to compose a text on a virtual clay tablet — the transliteration is engraved beneath each glyph, exactly as in the scholarly editions of the tablets — then print the result.

🏛️ **Live demo:** https://gmanios.github.io/aegean_scripts/

## Features

- **Signs beside their syllables.** Each card pairs the glyph with its Latin value (or, for ideograms, its meaning, e.g. `𐂖 → wine`). Sign number and Unicode code point are shown on hover.
- **Two scripts, one workspace.** Switch between **Linear B** (syllabograms · special signs · ideograms) and **Linear A**, with a color identity for each: Minoan faience teal for B, gold ochre for A.
- **Compose on a tablet.** Click signs to engrave them into the clay panel. Each token stacks the glyph over its transliteration, and a standard hyphenated reading (`a-mi-ni-so · ...`) is generated live.
- **Search &amp; filter.** Find signs by Latin value, sign number, or meaning (works in Greek and English).
- **Print-ready.** A dedicated print stylesheet outputs only the composed tablet and its transliteration on a clean white page.
- **Keyboard &amp; clipboard.** `Backspace` deletes the last sign, `Space` inserts a word divider (`·`), and one click copies both the glyphs and the transliteration.
- **Single file, no build.** Pure HTML/CSS/vanilla JavaScript. Just open it.

## The scripts — a note on accuracy

The two systems are treated differently, on purpose:

- **Linear B is deciphered.** Ventris and Chadwick showed in 1952 that it records an early form of **Greek** (Mycenaean). Its syllabic values are well established, and the transliterations shown here are the standard ones.
- **Linear A is *undeciphered*.** It records the unknown language of the Minoans. The Latin values displayed for Linear A are **conventional transcriptions** borrowed from the *homomorphic* `AB` signs shared with Linear B. They let you transcribe the signs consistently, but they **do not** reveal the Minoan words or their meaning. Please read them as scholarly convention, not translation.

Sign inventories and phonetic values are taken from the **Unicode Standard**: the *Linear B Syllabary* (U+10000–U+1007F), *Linear B Ideograms* (U+10080–U+100FF) and *Linear A* (U+10600–U+1077F) blocks.

## By the numbers

| Set | Count |
|---|---|
| Linear B syllabograms (core CV grid + vowels) | 60 |
| Linear B special / optional signs (`a2`, `dwe`, `pte`, …) | 14 |
| Linear B ideograms (with glosses) | 41 |
| Linear A signs (conventional `AB` values) | 51 |

## Usage

Clone or download the repository and open `aegean-scripts.html` in any modern browser — no server or installation required.

```bash
git clone https://github.com/gmanios/aegean_scripts.git
cd aegean-scripts
# then just open aegean-scripts.html (or index.html for the landing page)
```

The signs render through the **Noto Sans Linear A** and **Noto Sans Linear B** web fonts (loaded from Google Fonts), so no special system fonts are needed. An internet connection is required the first time for the fonts to load.

## Deploy to GitHub Pages

1. Push these files to a repository.
2. In **Settings → Pages**, set the source to the `main` branch (root).
3. Your site goes live at `https://<username>.github.io/<repo>/`, with `index.html` as the landing page and the composer at `/aegean_scripts.html`.

## Repository structure

```
aegean-scripts/
├── index.html            # Landing page (GitHub Pages entry point)
├── aegean_scripts.html   # The composer app (single file)
└── README.md
```

## Tech

Vanilla HTML, CSS and JavaScript in a single file. Type: **Fraunces** (display), **Inter** (UI), **Space Mono** (transliterations); glyphs via **Noto Sans Linear A / B**. No frameworks, no build step, no tracking.

## Acknowledgements

- **The Unicode Consortium** — sign encodings and reference names.
- **Google Fonts / Noto project** — Noto Sans Linear A &amp; Linear B.
- The decipherment tradition of **Michael Ventris**, **John Chadwick** and **Alice Kober** for Linear B, and the ongoing epigraphic work (GORILA) on Linear A.

## License

Released under the **MIT License**. See [`LICENSE`](LICENSE) for details. The underlying script data derives from public standards; the sign characters are part of Unicode.

## Author

**Georgios A. Manios** · [gmanios@uth.gr](mailto:gmanios@uth.gr) · GitHub [@gmanios](https://github.com/gmanios)

> Built for the joy of Aegean writing — from Crete, where the tablets were found.

*Contributions, corrections and additional readings are welcome — open an issue or a pull request.*
