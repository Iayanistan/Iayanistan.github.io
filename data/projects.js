/* =====================================================================
   PORTFOLIO CONTENT: edit this file to change what the site shows.

   Facts (title, course, tools, metrics, figures) were filled in from
   your project files. Everything in `write` is YOURS to fill in.
   Leave a field as "" and it shows a writing prompt while
   SHOW_PROMPTS is true. Set SHOW_PROMPTS to false before you send the
   link to employers; empty sections are then hidden instead.

   Text fields accept basic HTML (<b>, <i>, <a href="">, <br>).
   ===================================================================== */

window.SHOW_PROMPTS = true;

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
    tools: ["MATLAB", "Joukowski conformal mapping", "Vortex panel method", "Thwaites' method", "Falkner–Skan", "XFOIL (validation)"],
    metrics: [
      { value: "1.75", label: "Lift coefficient (CL) of the multi-element wing" },
      { value: "6.6%", label: "Difference from the published value (Loução et al., 2022)" },
      { value: "3", label: "Elements modeled (main plane + 2 flaps)" },
    ],
    figures: [
      { src: "assets/img/rear-wing/01.png", caption: "Streamlines around the inverted multi-element wing" },
      { src: "assets/img/rear-wing/02.png", caption: "Velocity magnitude, inverted orientation" },
      { src: "assets/img/rear-wing/03.png", caption: "Streamlines from the vortex panel method, S1223 multi-element wing" },
      { src: "assets/img/rear-wing/04.png", caption: "S1223 vs. fitted Joukowski profile" },
      { src: "assets/img/rear-wing/05.png", caption: "Falkner–Skan boundary-layer velocity profiles" },
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
    tools: ["ANSYS Mechanical", "SpaceClaim", "MATLAB (1D rod elements)", "Mesh convergence study", "Hand-calc validation"],
    metrics: [
      { value: "1 m", label: "Drop height used for the landing-load model" },
      { value: "2", label: "Interface designs compared (splined, tapered)" },
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
    id: "fsae-pedal-box",
    title: "Quick-Release Pedal Box: Formula SAE",
    subtitle: "Brakes Project Lead on Rose GPE: concept design and selection for fast pedal-box removal on the RGP012 car",
    course: "Rose Grand Prix Engineering (Formula SAE) · Brakes Project Lead",
    date: "Sep 2025 – present",
    categories: ["mechanical"],
    featured: true,
    team: "Rose GPE brakes sub-team",
    tools: ["SolidWorks", "Weighted decision matrix", "BOM / cost analysis", "FSAE rules"],
    metrics: [
      { value: "3", label: "Concepts evaluated (clamping levers, draw latch, underbody threads)" },
      { value: "$25.67", label: "Material cost of the selected concept" },
      { value: "7,895 N", label: "Clamping force of the lever concept" },
    ],
    table: {
      caption: "Concept comparison",
      head: ["Metric", "Clamping levers", "Draw latch", "Underbody threads ✓"],
      rows: [
        ["Cost", "$87.66", "$20.58", "$25.67"],
        ["Added weight", "~16 oz", "~3 oz", "~2 lb"],
        ["Ease of use (1–5)", "3", "5", "4"],
        ["Performance (1–5)", "5", "3", "5"],
      ],
    },
    figures: [],
    mediaNeeded: "Add SolidWorks renders of the pedal box and photos of the build.",
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
    id: "heat-wave-pdes",
    title: "2D Heat & Wave Equations with a C++ Accelerated Solver",
    subtitle: "Finite-difference PDE solvers on curved domains, with the time-stepping loop moved to a C++/xtensor MEX function",
    course: "MA 342 · Computational Modeling · Team of 3",
    date: "Spring 2026",
    categories: ["computational"],
    team: "With Ben Egelseer and Luke Gaston",
    tools: ["MATLAB", "C++17", "xtensor", "MEX", "CMake", "Finite differences"],
    metrics: [],
    figures: [],
    mediaNeeded: "Export 2–3 figures from the report (heat on the 'pringle' domain, damped wave on the disc) and a speedup comparison, MATLAB vs. C++.",
    links: [],
    write: { overview: "", problem: "", role: "", approach: "", results: "", learned: "" },
  },
  {
    id: "ludo",
    title: "Ludo Strategy Monte Carlo",
    subtitle: "Simulating tens of thousands of games to test whether aggressive knockout play beats cautious play",
    course: "MA 342 · Computational Modeling · Individual project",
    date: "Spring 2026",
    categories: ["computational"],
    team: "Individual",
    tools: ["MATLAB", "Monte Carlo simulation", "Controlled experiments (play order, seating)"],
    metrics: [
      { value: "~25,000", label: "Simulated games" },
      { value: "86.1%", label: "2v2 win rate for the knockout strategy vs. cautious play (N=3000)" },
      { value: "~25%", label: "Win rate by play order: seat advantage turned out negligible" },
    ],
    figures: [],
    mediaNeeded: "Regenerate the figures with professional strategy names (e.g. 'Aggressive' / 'Cautious') and a white background, then add them here.",
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
    figures: [],
    mediaNeeded: "Add a screenshot or GIF of the visualizer running, and a README on GitHub.",
    links: [{ label: "GitHub", href: "https://github.com/Iayanistan/Limit-Order-Book-Visualization" }],
    write: { overview: "", problem: "", role: "", approach: "", results: "", learned: "" },
  },
  {
    id: "qibla-finder",
    title: "Qibla Finder",
    subtitle: "A GPS + IMU compass that physically points toward the Kaaba, with servo PID gains tuned by Bayesian optimization",
    course: "Personal project",
    date: "Aug – Nov 2025",
    categories: ["embedded"],
    team: "Individual",
    tools: ["Arduino C++", "ATmega", "TinyGPS++", "MPU9250 IMU", "Servo PID", "Python", "scikit-optimize (Bayesian optimization)", "SolidWorks"],
    metrics: [
      { value: "25", label: "Bayesian-optimization runs to tune PID gains (IAE objective)" },
    ],
    figures: [],
    mediaNeeded: "Add photos/video of the device and the SolidWorks enclosure, plus one integrated firmware sketch on GitHub.",
    links: [{ label: "GitHub", href: "https://github.com/Iayanistan/Qibla-Finder" }],
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
    figures: [],
    mediaNeeded: "Run the game and record a short gameplay GIF; replace the course-template README on GitHub.",
    links: [{ label: "GitHub", href: "https://github.com/Iayanistan/Jetpack-Joyride-Game" }],
    write: { overview: "", problem: "", role: "", approach: "", results: "", learned: "" },
  },
];

// Experience / awards / leadership strip on the home page (facts from your resume).
window.EXPERIENCE = [
  { title: "Chemical Engineering Intern · Hyera Inc.", date: "Jul – Aug 2025",
    text: "1D MATLAB batch-reactor model of pyrolysis and activation, optimized with a genetic algorithm and a surrogate model and validated against experimental data; started a 2D ANSYS Fluent reactor model." },
  { title: "Finalist, top 10 of 100+ teams · Stanford Health Design Competition", date: "Oct 2025",
    text: "Led a 5-person team on the AMANI app, including a $26k budget proposal to Télécoms Sans Frontières." },
  { title: "Brakes Project Lead · Rose Grand Prix Engineering (FSAE)", date: "Sep 2025 – present", text: "" },
  { title: "President · Muslim Student Association", date: "Apr 2024 – present", text: "Also Treasurer of the South Asian Student Alliance and VP of the International Student Association." },
];
