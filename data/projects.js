/* =====================================================================
   PORTFOLIO CONTENT: edit this file to change what the site shows.

   Facts (title, course, tools, metrics, figures) were filled in from
   your project files. Everything in `write` is YOURS to fill in.
   Leave a field as "" and it shows a writing prompt while
   SHOW_PROMPTS is true. Set SHOW_PROMPTS to false before you send the
   link to employers; empty sections are then hidden instead.

   Text fields accept basic HTML (<b>, <i>, <a href="">, <br>).
   ===================================================================== */

window.SHOW_PROMPTS = false;

window.PROFILE = {
  name: "Iayan Ansari",
  headline: "Mechanical Engineering & Computational Science · Rose-Hulman Institute of Technology · Class of 2027",
  // Your 2–3 sentence intro for the top of the page (leave "" to show a prompt).
  intro: "",
  email: "ansariia@rose-hulman.edu",
  linkedin: "https://www.linkedin.com/in/iayan-ansari",
  github: "https://github.com/Iayanistan",
  resume: "assets/resume.pdf", // drop your current resume PDF at this path
};

// Prompts shown in empty sections (shared by every project).
window.PROMPTS = {
  overview: "In 2–3 sentences: what is this project, and why does it matter? Write it for a recruiter who has 20 seconds.",
  problem:  "What problem or question were you trying to solve? What made it hard or interesting?",
  role:     "What did YOU personally do? (If it was a team, name your specific contributions.)",
  approach: "How did you tackle it? Key methods, design decisions, and trade-offs you made.",
  results:  "What happened? Walk through the numbers and figures below, including what didn't work.",
  learned:  "What did you learn, technically and otherwise? What would you do differently next time?",
};

window.CATEGORIES = {
  computational: "Computational & ML",
  mechanical: "Mechanical & CAD",
  embedded: "Embedded & Mechatronics",
  software: "Software & Finance",
};

window.PROJECTS = [
  {
    id: "pinns",
    title: "Physics-Informed Neural Networks vs. Classical Solvers",
    subtitle: "Solving the shock-forming 1D viscous Burgers equation with PINNs, and checking them against a 4th-order reference solver",
    course: "ME 427 · Individual project",
    date: "Spring 2026",
    categories: ["computational"],
    featured: true,
    team: "Individual",
    tools: ["Python", "PyTorch", "NumPy / SciPy", "Adam → L-BFGS", "ETDRK4", "Compact 4th-order FD + RK4", "Jupyter"],
    metrics: [
      { value: "7.6e-6", label: "Rel. L2 error, ETDRK4 reference (N=1000)" },
      { value: "1.16e-2", label: "Rel. L2 error, best PINN (hard constraints + RAR)" },
      { value: "~5×", label: "Lower L∞ error from RAR vs. other hard-constraint variants" },
      { value: "~2%", label: "Error recovering the advection coefficient λ₁ (inverse problem)" },
    ],
    table: {
      caption: "Benchmark results",
      head: ["Method", "Rel. L2", "L∞"],
      rows: [
        ["ETDRK4 (N=1000)", "7.6e-6", "5.5e-5"],
        ["PINN — vanilla", "8.8e-3", "6.5e-2"],
        ["PINN — hard constraints", "2.7e-2", "0.326"],
        ["PINN — hard + causal", "2.06e-2", "0.217"],
        ["PINN — hard + RAR", "1.16e-2", "4.84e-2"],
      ],
    },
    figures: [
      { src: "assets/img/pinns/01.png", caption: "PINN prediction vs. exact solution across the domain" },
      { src: "assets/img/pinns/02.png", caption: "Method comparison at the shock" },
      { src: "assets/img/pinns/03.png", caption: "Error analysis" },
      { src: "assets/img/pinns/04.png", caption: "Inverse problem: recovering the PDE coefficients from data" },
      { src: "assets/img/pinns/05.png", caption: "3D view of the learned solution u(x, t)" },
      { src: "assets/img/pinns/06.png", caption: "Convergence of the compact 4th-order / RK4 reference solver" },
    ],
    links: [],
    write: { overview: "", problem: "", role: "", approach: "", results: "", learned: "" },
  },
  {
    id: "rear-wing",
    title: "FSAE Rear-Wing Aerodynamic Analysis",
    subtitle: "Potential-flow and boundary-layer analysis of an inverted S1223 multi-element wing, written from scratch in MATLAB",
    course: "ME 401 · Foundations of Fluid Mechanics · Individual project",
    date: "Winter 2026",
    categories: ["computational", "mechanical"],
    featured: true,
    team: "Individual",
    tools: ["MATLAB", "Joukowski conformal mapping", "Vortex panel method (stream-function form)", "Thwaites' method", "Falkner–Skan", "XFOIL (validation)"],
    metrics: [
      { value: "1.75", label: "Single-element C_L from conformal mapping (α = 4°)" },
      { value: "+6.6%", label: "vs. XFOIL C_L of 1.64 at Re = 200,000" },
      { value: "0.02%", label: "Panel-method C_L error vs. the exact conformal-map solution (validation)" },
      { value: "8.22", label: "Inviscid 3-element C_L, vs. 3.43 from RANS CFD (Loução et al., 2022)" },
    ],
    figures: [
      { src: "assets/img/rear-wing/01.png", caption: "Streamlines around the inverted three-element wing (stream-function panel method)" },
      { src: "assets/img/rear-wing/02.png", caption: "Velocity magnitude, inverted orientation" },
      { src: "assets/img/rear-wing/03.png", caption: "Single Joukowski element: exact conformal-mapping streamlines" },
      { src: "assets/img/rear-wing/04.png", caption: "Pressure distribution on each element" },
      { src: "assets/img/rear-wing/05.png", caption: "S1223 vs. best-fit Joukowski profile (ε = 0.090, β = 0.203)" },
      { src: "assets/img/rear-wing/06.png", caption: "Thwaites skin friction vs. Blasius; upper-surface Cf → 0 near 35% chord marks predicted laminar separation" },
      { src: "assets/img/rear-wing/07.png", caption: "Streamlines in standard (lifting) orientation" },
    ],
    links: [],
    write: { overview: "", problem: "", role: "", approach: "", results: "", learned: "" },
  },
  {
    id: "crypto",
    title: "Crypto Price-Spike Prediction & Trading Backtest",
    subtitle: "Can ETH/XRP spikes be predicted? Leak-free features, walk-forward validation, and an honest backtest that includes fees",
    course: "MA 384 · Data Mining",
    date: "Winter 2026",
    categories: ["software", "computational"],
    featured: true,
    team: "", // TODO: confirm individual or team
    tools: ["Python", "pandas", "scikit-learn", "Random forest / gradient boosting / logistic regression", "Granger causality", "Walk-forward CV", "Jupyter"],
    metrics: [
      { value: "0.41", label: "Macro-F1 on the ETH holdout" },
      { value: "0.26", label: "Macro-F1 of a naive baseline" },
      { value: "20", label: "Engineered features, no look-ahead" },
      { value: "No edge", label: "After fees, a 50-day moving-average rule beat the model" },
    ],
    figures: [
      { src: "assets/img/crypto/01.png", caption: "Backtest equity curves vs. benchmarks" },
      { src: "assets/img/crypto/02.png", caption: "Rolling ETH–XRP return correlation" },
      { src: "assets/img/crypto/03.png", caption: "Macro-F1 by experiment and model" },
      { src: "assets/img/crypto/04.png", caption: "ETH holdout confusion matrix (random forest)" },
      { src: "assets/img/crypto/05.png", caption: "Permutation feature importance" },
    ],
    links: [],
    write: { overview: "", problem: "", role: "", approach: "", results: "", learned: "" },
  },
  {
    id: "crank-fea",
    title: "Mountain-Bike Crank Arm FEA: Splined vs. Tapered Interface",
    subtitle: "Estimating the landing load from a 1 m drop, then comparing two bottom-bracket interfaces in ANSYS",
    course: "ME 422 · Finite Element Analysis · Team of 2",
    date: "Winter 2026",
    categories: ["mechanical"],
    featured: true,
    team: "With Chase Masterson",
    tools: ["ANSYS Mechanical", "SpaceClaim", "Al 7075-T6", "Bolt preload (2-step analysis)", "MATLAB (1D rod elements)", "Mesh convergence study", "Hand-calc validation"],
    metrics: [
      { value: "~20%", label: "Lower peak stress for the splined interface than the tapered one" },
      { value: "396 vs 498 MPa", label: "Peak stress, splined vs. tapered, under a 4.15 kN load" },
      { value: "<1%", label: "Agreement with analytic stresses on benchmark shafts" },
      { value: "<2.3%", label: "Mesh-convergence change after refining to 0.56 mm at the bolt holes" },
    ],
    figures: [
      { src: "assets/img/crank-fea/01.png", caption: "Von Mises stress, final mesh (splined)" },
      { src: "assets/img/crank-fea/02.png", caption: "Von Mises stress, final mesh (tapered)" },
      { src: "assets/img/crank-fea/03.png", caption: "Splined crank arm model" },
      { src: "assets/img/crank-fea/04.png", caption: "Tapered geometry in SpaceClaim" },
      { src: "assets/img/crank-fea/05.png", caption: "Final mesh" },
    ],
    links: [],
    write: { overview: "", problem: "", role: "", approach: "", results: "", learned: "" },
  },
  {
    id: "casting-welding",
    title: "Sand Casting & Welded Assembly",
    subtitle: "Designing a sand-casting pattern in SolidWorks and pouring it in tin, plus a slotted, self-standing welded rocket",
    course: "ME 317 · Design for Manufacturing · Team of 4",
    date: "Winter 2026",
    categories: ["mechanical"],
    team: "With AJ Moore, Jack Dalton, Marcus Yoo",
    tools: ["SolidWorks", "Pattern design (draft, parting plane, sprue)", "Sand casting", "Welding", "DXF cut files", "Engineering drawings"],
    metrics: [],
    figures: [
      { src: "assets/img/casting-welding/01.jpg", caption: "Finished cast part" },
      { src: "assets/img/casting-welding/02.jpg", caption: "Castings in the cope and drag" },
      { src: "assets/img/casting-welding/03.jpg", caption: "3D-printed pattern with sprue" },
      { src: "assets/img/casting-welding/04.png", caption: "Pattern drawing" },
      { src: "assets/img/casting-welding/05.jpg", caption: "Welded rocket assembly drawing" },
    ],
    links: [],
    write: { overview: "", problem: "", role: "", approach: "", results: "", learned: "" },
  },
  {
    id: "ludo",
    title: "Ludo Strategy Monte Carlo",
    subtitle: "Simulating tens of thousands of games to compare four strategies: Aggressive, Cohesive, Defensive, and Runner",
    course: "MA 342 · Computational Modeling · Individual project",
    date: "Spring 2026",
    categories: ["computational"],
    team: "Individual",
    tools: ["MATLAB", "Monte Carlo simulation", "Controlled experiments (play order, seating)"],
    metrics: [
      { value: "~25,000", label: "Simulated games" },
      { value: "86.1%", label: "2v2 team win rate: Aggressive (knockout-first) vs. Cohesive (N=3000)" },
      { value: "44.4%", label: "Defensive strategy's win rate in the 4-way tournament (25% = no edge)" },
      { value: "~25%", label: "Win rate by play order: seat advantage turned out negligible" },
    ],
    figures: [
      { src: "assets/img/ludo/01.png", caption: "Baseline 2v2: Aggressive vs. Cohesive team win rates" },
      { src: "assets/img/ludo/02.png", caption: "Four-way tournament, one player per strategy" },
      { src: "assets/img/ludo/03.png", caption: "2v2 head-to-head matrix across all four strategies" },
      { src: "assets/img/ludo/04.png", caption: "Effect of play order: who starts vs. who wins" },
      { src: "assets/img/ludo/05.png", caption: "Knockouts inflicted per game across seating arrangements" },
      { src: "assets/img/ludo/06.png", caption: "Game length by strategy matchup" },
    ],
    links: [],
    write: { overview: "", problem: "", role: "", approach: "", results: "", learned: "" },
  },
  {
    id: "limit-order-book",
    title: "Limit Order Book Engine & Real-Time Visualizer",
    subtitle: "A price-time-priority matching engine that replays real NASDAQ order data and renders the book live",
    course: "Personal project",
    date: "Dec 2025",
    categories: ["software"],
    team: "Individual",
    tools: ["Python", "Heaps with lazy deletion", "pandas / NumPy", "PyQt6", "pyqtgraph", "LOBSTER data (AAPL, GOOG, MSFT)"],
    metrics: [
      { value: "60+ FPS", label: "Real-time rendering (per resume; add a benchmark)" },
      { value: "3", label: "Tickers replayed from LOBSTER sample data" },
    ],
    coverFit: "cover",
    figures: [
      { src: "assets/img/limit-order-book/01.png", caption: "GOOG depth chart during the replay of 2012-06-21: cumulative bids (green) and asks (red)" },
      { src: "assets/img/limit-order-book/02.png", caption: "AAPL book early in the session" },
      { src: "assets/img/limit-order-book/03.png", caption: "MSFT book at penny tick resolution" },
      { src: "assets/img/limit-order-book/04.png", caption: "MSFT book at the end of the replay (668,765 events)" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/Iayanistan/Limit-Order-Book-Visualization" }],
    write: { overview: "", problem: "", role: "", approach: "", results: "", learned: "" },
  },
  {
    id: "pop-the-lock",
    title: "“Pop the Lock” Arcade Game",
    subtitle: "A reaction-timing game: a stepper motor sweeps faster each round and a 24-LED NeoPixel ring marks the target",
    course: "ME 430 · Mechatronics · Individual final project",
    date: "Summer 2025",
    categories: ["embedded"],
    team: "Individual",
    tools: ["Arduino C++", "Stepper motor", "NeoPixel LED ring", "Interrupts", "Photoresistor homing"],
    metrics: [],
    video: "assets/video/pop-the-lock-demo.mp4",
    figures: [
      { src: "assets/img/pop-the-lock/01.jpg", caption: "Win state: ring flashes green" },
      { src: "assets/img/pop-the-lock/02.jpg", caption: "Miss: ring flashes red" },
      { src: "assets/img/pop-the-lock/03.jpg", caption: "Assembled prototype" },
      { src: "assets/img/pop-the-lock/04.jpg", caption: "Pointer and LED ring during play" },
    ],
    links: [],
    write: { overview: "", problem: "", role: "", approach: "", results: "", learned: "" },
  },
  {
    id: "jetpack-joyride",
    title: "Jetpack Joyride Clone",
    subtitle: "A side-scrolling Java Swing game with 5 file-loaded levels, homing missiles, and a Flappy Bird power-up mini-game",
    course: "CSSE 220 · Object-Oriented Software Development · Team project",
    date: "Spring 2024",
    categories: ["software"],
    team: "Team project", // TODO: add teammates' names
    tools: ["Java", "Swing", "javax.sound", "Object-oriented design", "Git"],
    metrics: [
      { value: "~1,800", label: "Lines of Java across 21 classes" },
      { value: "5", label: "Levels loaded from text files" },
    ],
    coverFit: "cover",
    figures: [
      { src: "assets/img/jetpack-joyride/01.png", caption: "Level 1: flying past electrified barriers while a missile approaches" },
      { src: "assets/img/jetpack-joyride/02.png", caption: "Level 3: the power-up that launches the Flappy Bird mini-game" },
      { src: "assets/img/jetpack-joyride/03.png", caption: "Level 5: collecting coins" },
      { src: "assets/img/jetpack-joyride/04.png", caption: "Level 2: rotated walls and coin patterns loaded from Level2.txt" },
      { src: "assets/img/jetpack-joyride/05.png", caption: "Flappy Bird power-up mini-game" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/Iayanistan/Jetpack-Joyride-Game" }],
    write: { overview: "", problem: "", role: "", approach: "", results: "", learned: "" },
  },
];

// Technical reports (PDFs in assets/reports/), listed on the home page.
window.REPORTS = [
  { title: "Ludo Strategy Comparison: A Monte Carlo Study", course: "MA 342 · Individual project", date: "May 2026",
    authors: "Iayan Ansari", pages: 10, file: "assets/reports/ma342-ludo-monte-carlo.pdf", project: "ludo",
    blurb: "About 25,000 simulated games comparing a knockout-seeking Aggressive strategy with a pack-keeping Cohesive one, with controls for play order and seating, plus game-length and knockout analysis." },
  { title: "Radiotherapy Dose Modeling & Treatment-Plan Optimization", course: "MA 342 · Project 1", date: "Mar 2026",
    authors: "Ben Egelseer & Iayan Ansari", pages: 9, file: "assets/reports/ma342-p1-radiotherapy.pdf",
    blurb: "A dose model for radiation beams and an optimization that targets the tumor while sparing healthy tissue." },
  { title: "Delay Differential Equations for Cloud-Computing Systems", course: "MA 342 · Project 2", date: "Mar 2026",
    authors: "Iayan Ansari & Luke Gaston", pages: 11, file: "assets/reports/ma342-p2-delay-differential-equations.pdf",
    blurb: "A time-delay model of a cloud network, with experiments sweeping the delay, coupling strength and network topology." },
  { title: "Heat & Wave Equations on Complex Geometries", course: "MA 342 · Project 3", date: "Apr 2026",
    authors: "Iayan Ansari, Ben Egelseer & Luke Gaston", pages: 21, file: "assets/reports/ma342-p3-heat-and-wave-equations.pdf",
    blurb: "Finite-difference solvers for the 2D heat and wave equations on curved domains, with the time-stepping loop ported to C++." },
  { title: "Stochastic Asset Pricing & Portfolio Optimization", course: "MA 342 · Project 4", date: "May 2026",
    authors: "Ben Egelseer & Iayan Ansari", pages: 11, file: "assets/reports/ma342-p4-stochastic-finance.pdf",
    blurb: "Monte Carlo simulation of stock prices, quadratic portfolio optimization, and bootstrap confidence intervals on the predictions." },
  { title: "2D Ising Model: Monte Carlo Simulation & Critical Exponents", course: "MA 342 · Project 5", date: "May 2026",
    authors: "Iayan Ansari, Ben Egelseer, Luke Gaston & Jack Silkaitis", pages: 25, file: "assets/reports/ma342-p5-ising-model.pdf",
    blurb: "Monte Carlo simulation of a 2D atomic lattice, with linear regression to estimate the critical exponents." },
];

// Experience / awards / leadership strip on the home page (facts from your resume).
window.EXPERIENCE = [
  { title: "Chemical Engineering Intern · Hyera Inc.", date: "Jun – Aug 2026",
    text: "Coupled CFD-DEM model (ANSYS Rocky–Fluent) of steam activation in a double-walled rotary kiln, with the flighted fluid domain extracted from plant CAD; built a 4-channel thermocouple data-acquisition system (HOBO UX120-014M) to provide validation data for the CFD model." },
  { title: "Chemical Engineering Intern · Hyera Inc.", date: "Jul – Aug 2025",
    text: "1D MATLAB batch-reactor model of pyrolysis and activation, optimized with a genetic algorithm and a surrogate model and validated against experimental data; started a 2D ANSYS Fluent reactor model." },
  { title: "Finalist, top 10 of 100+ teams · Stanford Health Design Competition", date: "Oct 2025",
    text: "Led a 5-person team on the AMANI app, including a $26k budget proposal to Télécoms Sans Frontières." },
  { title: "President · Muslim Student Association", date: "Apr 2024 – present", text: "Also Treasurer of the South Asian Student Alliance and VP of the International Student Association." },
];
