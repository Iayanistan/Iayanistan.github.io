# Iayan Ansari: Project Portfolio

A static portfolio site (plain HTML/CSS/JS, no build step), meant for GitHub Pages.

```
index.html          home page: intro, project grid with filters, experience
project.html        one template for every project (project.html?id=pinns)
data/projects.js    ALL the content: edit this file
css/style.css       styling (light + dark mode)
js/main.js          renders pages from data/projects.js
assets/img/<id>/    figures copied from your project folders (resized)
assets/video/       ME430 demo video
assets/resume.pdf   ← add your current resume here (the button hides until you do)
```

## 1. Write your sections
Open `data/projects.js`. Every project has a `write` block:

```js
write: { overview: "", problem: "", role: "", approach: "", results: "", learned: "" },
```

Fill in each string. Separate paragraphs with a blank line (`\n\n`); basic HTML such as `<b>` and `<a>` works.
While `SHOW_PROMPTS = true`, empty sections show a yellow "To write" prompt so you can see what's left.
Also fill in `PROFILE.intro` (your 2–3 sentence intro at the top of the home page).

I only filled in facts pulled from your files: titles, courses, teammates, tools, metrics and figures.
Please check them. Subtitles, captions and experience blurbs are short factual drafts, so rewrite them freely.

**Before sending the link to anyone:** set `window.SHOW_PROMPTS = false;`. Empty sections then disappear instead of showing prompts.

## 2. Media still needed
| Project | What to add |
|---|---|
| FSAE Pedal Box | SolidWorks renders and build photos (the GPE folder only has vendor catalog images) |
| Limit Order Book | Screenshot/GIF of the visualizer, plus a README on GitHub |
| Qibla Finder | Device photos/video and enclosure CAD; one integrated sketch on GitHub |
| Jetpack Joyride | Gameplay GIF; replace the course-template README on GitHub; add teammates to `team` |
| Heat & Wave PDEs | 2–3 figures exported from the report, plus a MATLAB vs. C++ speedup number |
| Ludo Monte Carlo | Regenerate figures with professional strategy names and a white background (the current ones say "Screw You"/"FU"/"Yeet") |
| Crypto (MA384) | Confirm whether it was individual or team (`team` field) |

To add figures: put images in `assets/img/<project-id>/` and list them in that project's `figures` array.
The first figure becomes the card thumbnail.

## 3. Preview locally
```
python -m http.server 8765
```
Then open http://localhost:8765. Opening `index.html` directly works too, but the resume check only runs on a server.

## 4. Publish on GitHub Pages
1. On GitHub, create a **public** repo named exactly `Iayanistan.github.io` (no README).
2. In this folder:
   ```
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/Iayanistan/Iayanistan.github.io.git
   git push -u origin main
   ```
3. Open repo **Settings → Pages**, and set Source to "Deploy from a branch", branch `main`, folder `/ (root)`.
4. After about a minute the site is live at **https://iayanistan.github.io**.

Note: the demo video is about 56 MB. That's under GitHub's 100 MB limit, but you could upload it to YouTube (unlisted) and link it instead to keep the repo small.
Your resume PDF will be public on the site, so consider removing your phone number from that copy.

## 5. Left out on purpose
- **MDS410 capstone:** add it once the model has results, and check the client IP agreement first.
- **Fluid Simulator:** it's Matthias Müller's Ten Minute Physics code, not original work.
- **Stubs and tutorials:** Equal-Weight S&P, HackerRank, Ranked-Matchmaker, jub. Also the "Maybe" items (Radiotherapy, ES205 piezo, EM204 memos, EM104 CAD).
- Duplicate folders: `Qibla Finder` = `Qibla-Finder`, and `Fluid Simulator` = `Fluid-Simulator`.

## 6. Suggested future projects
1. **Neural-operator CFD surrogate** (FNO/DeepONet on 2D Navier–Stokes or airfoil Cp): the natural sequel to PINNs + the rear-wing work, for simulation/ML roles.
2. **Parallel CFD solver in C++ (MPI/OpenMP or CUDA)** with strong/weak scaling plots: builds on CSSE 335 and the C++ MEX work.
3. **FSAE pedal box: design → FEA → physical test → validation report**: full design-cycle evidence is what automotive and mechanical employers value most.
4. **Lap-time / vehicle-dynamics simulator** (point-mass → bicycle model) using RGP car parameters, for your automotive concentration.
5. **C++ matching engine + market-making agent** (Avellaneda–Stoikov) on your order book, with latency benchmarks, for quant and SWE roles.
6. **Qibla Finder v2 as a finished product:** custom KiCad PCB, integrated firmware, 3D-printed enclosure.
7. **Finish the capstone computer vision work:** trained YOLO model with mAP numbers, deployed on a Jetson or Raspberry Pi.
