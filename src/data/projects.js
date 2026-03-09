import {
  Brain,
  Map,
  Database,
  Terminal,
  LineChart,
  ShieldAlert,
  BookOpen,
  Utensils,
} from "lucide-react";

export const projects = [
  {
    id: "treediffusion",
    title: "TreeDiffusion for Medical Imaging",
    category: "AI/ML",
    icon: Brain,
    tags: ["PyTorch", "Diffusion", "Reconstruction"],
    overview:
      "A generative diffusion approach for reconstructing medical images from degraded inputs—prioritizing anatomical continuity and stable training.",
    problems: [
      "Noisy / incomplete scans can erase fine structure.",
      "GAN-style approaches can be unstable and inconsistent.",
      "Reconstruction must preserve edges without amplifying artifacts.",
    ],
    solutions: [
      "Used diffusion modeling for stability and consistent outputs.",
      "Designed multi-scale refinement to recover structure progressively.",
      "Focused evaluation on structural clarity and artifact suppression.",
    ],
    outcome:
      "Improved perceived structural fidelity versus simple interpolation baselines, demonstrating diffusion’s fit for reconstruction workflows.",
  },
  {
    id: "rl-trading",
    title: "Q-Learning Trading Platform",
    category: "AI/ML",
    icon: LineChart,
    tags: ["Python", "Reinforcement Learning", "Backtesting"],
    overview:
      "A reinforcement learning system that learns trading actions from market state transitions, paired with a realistic backtesting harness.",
    problems: [
      "Markets are non-stationary—models overfit easily.",
      "Backtests can lie if execution assumptions are unrealistic.",
      "Agents can ‘win’ by over-trading or exploiting leakage.",
    ],
    solutions: [
      "Built a backtesting framework with strict train/test separation.",
      "Added constraints to discourage churn and reduce drawdown risk.",
      "Separated signal logic from execution logic to avoid leakage.",
    ],
    outcome:
      "Produced a disciplined evaluation pipeline and clearer insight into RL behavior under noisy financial dynamics.",
  },
  {
    id: "xgboost-trading",
    title: "XGBoost Trading Signal Pipeline",
    category: "AI/ML",
    icon: LineChart,
    tags: ["XGBoost", "Feature engineering", "Position sizing"],
    overview:
      "A supervised learning pipeline for market signal prediction with position sizing logic designed around risk awareness.",
    problems: [
      "Signal prediction is fragile under regime changes.",
      "High accuracy doesn’t guarantee profitable execution.",
      "Position sizing can dominate outcomes more than the signal itself.",
    ],
    solutions: [
      "Engineered features with emphasis on generalization.",
      "Evaluated using trading-aware metrics (not just accuracy).",
      "Integrated position sizing rules to control exposure.",
    ],
    outcome:
      "A more realistic ML-to-execution workflow that highlighted where models break—and how risk controls stabilize behavior.",
  },
  {
    id: "genre-engine",
    title: "AI Genre Suggestion Engine",
    category: "AI/ML",
    icon: Brain,
    tags: ["Random Forest", "Interpretability", "Prediction"],
    overview:
      "A genre prediction model optimized for interpretability and stable performance on constrained datasets.",
    problems: [
      "Deep models can be overkill and hard to explain.",
      "Small datasets need bias-resistant modeling choices.",
    ],
    solutions: [
      "Used Random Forest for robustness and feature importance visibility.",
      "Iterated on features to reduce spurious correlations.",
    ],
    outcome:
      "Reliable predictions with transparent reasoning—easy to tune and communicate.",
  },
  {
    id: "landcover",
    title: "Comparative Land Cover Classification",
    category: "GIS",
    icon: Map,
    tags: ["ENVI", "Landsat 8", "Classification"],
    overview:
      "A remote sensing workflow to classify land use and compare change over time using Landsat 8 imagery.",
    problems: [
      "Seasonality and lighting shifts distort comparisons.",
      "Classification outputs can be hard to interpret without context.",
    ],
    solutions: [
      "Applied preprocessing to normalize spectral differences.",
      "Compared time slices with emphasis on interpretable transitions.",
    ],
    outcome:
      "Clear land-use change narratives suitable for environmental monitoring and reporting.",
  },
  {
    id: "airbnb-crime",
    title: "Urban Crime & Airbnb Spatial Autocorrelation",
    category: "GIS",
    icon: Map,
    tags: ["QGIS", "Python", "Spatial statistics"],
    overview:
      "A spatial analysis exploring localized relationships between short-term rentals and crime patterns using autocorrelation methods.",
    problems: [
      "Naive correlation ignores geographic clustering.",
      "Hotspots can be artifacts of density, not causality.",
    ],
    solutions: [
      "Used spatial autocorrelation to respect geographic structure.",
      "Mapped results to reveal neighborhood-level patterns.",
    ],
    outcome:
      "More defensible insights than simple correlation—showing where spatial context changes the story.",
  },
  {
    id: "arsenic",
    title: "Soil Arsenic Modeling & Risk Mapping",
    category: "GIS",
    icon: ShieldAlert,
    tags: ["Interpolation", "Risk mapping", "Environmental analysis"],
    overview:
      "Spatial interpolation and risk visualization to identify high-risk contaminant zones for clearer decision-making.",
    problems: [
      "Sparse sampling makes interpolation sensitive.",
      "Risk maps must be readable, not just statistically correct.",
    ],
    solutions: [
      "Selected interpolation based on data density and variance.",
      "Designed map outputs for clarity and actionability.",
    ],
    outcome:
      "A risk communication artifact that translates complex spatial uncertainty into usable guidance.",
  },
  {
    id: "emergency-locator",
    title: "Emergency Map Locator",
    category: "GIS",
    icon: Map,
    tags: ["GIS tool", "Spatial queries", "UX clarity"],
    overview:
      "A GIS-based locator concept for quickly pinpointing emergency services relative to a user’s location.",
    problems: [
      "Emergency UX must be fast and unambiguous.",
      "Spatial queries must be reliable under edge cases.",
    ],
    solutions: [
      "Optimized for minimal steps and clear map hierarchy.",
      "Designed around dependable spatial lookup patterns.",
    ],
    outcome:
      "A practical GIS concept emphasizing reliability and speed over feature bloat.",
  },
  {
    id: "unix-shell",
    title: "Custom Unix Shell",
    category: "Systems",
    icon: Terminal,
    tags: ["C", "Linux", "Processes"],
    overview:
      "A functional shell in C implementing command execution and process control to understand OS fundamentals deeply.",
    problems: [
      "Process management is easy to get subtly wrong.",
      "Edge cases (pipes, errors, signals) reveal real OS complexity.",
    ],
    solutions: [
      "Implemented fork/exec patterns with careful error handling.",
      "Built around correctness-first behavior and predictable output.",
    ],
    outcome:
      "Stronger systems intuition—especially around process lifecycle and Linux execution semantics.",
  },
  {
    id: "dbms-engine",
    title: "DBMS Storage Engine",
    category: "Systems",
    icon: Database,
    tags: ["Storage", "Data structures", "Performance"],
    overview:
      "Core storage logic and data management structures for a database system—focused on access patterns and correctness.",
    problems: [
      "Data layout decisions directly impact performance.",
      "Correctness under edge cases is non-negotiable.",
    ],
    solutions: [
      "Designed structures for predictable reads/writes.",
      "Validated behavior with targeted tests for tricky cases.",
    ],
    outcome:
      "A grounded understanding of how databases actually move and organize data beneath abstractions.",
  },
  {
    id: "library-system",
    title: "Library Management System",
    category: "Software",
    icon: BookOpen,
    tags: ["CRUD", "Data modeling", "Maintainability"],
    overview:
      "A practical system for tracking inventory and users—built with clean data modeling and maintainable logic.",
    problems: [
      "Messy data models create long-term maintenance pain.",
      "User flows must stay simple even as features grow.",
    ],
    solutions: [
      "Designed a clear schema and predictable operations.",
      "Kept logic modular to support future expansion.",
    ],
    outcome:
      "A stable foundation project that reinforced clean architecture habits.",
  },
  {
    id: "recipe-site",
    title: "Recipe Website",
    category: "Software",
    icon: Utensils,
    tags: ["UI", "Content structure", "Searchable data"],
    overview:
      "A recipe platform for storing instructions and substitutions with emphasis on readable structure and usability.",
    problems: [
      "Recipes are structured data—formatting matters.",
      "Substitutions need to be discoverable at the right moment.",
    ],
    solutions: [
      "Designed content structure for scanning and clarity.",
      "Organized substitutions as first-class data, not footnotes.",
    ],
    outcome:
      "A user-friendly content system that strengthened practical UI + data organization skills.",
  },
];
