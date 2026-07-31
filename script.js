// ==========================================
//  POC-III Quiz Engine
//  B.Pharm 4th Semester — Sessional I
// ==========================================

// ===== QUESTIONS DATA (25 Medium-Level MCQs) =====
const questions = [
  {
    id: 1,
    topic: "Heterocyclic Classification",
    question: "Which of the following is a 6-membered heterocyclic compound containing one nitrogen atom?",
    options: ["Furan", "Pyridine", "Thiophene", "Pyrrole"],
    correct: 1,
    hint: "Think about ring size — Pyrrole and Furan are 5-membered rings.",
    keywords: ["six","6","nitrogen","heteroatom","pyridine"]
  },
  {
    id: 2,
    topic: "Heterocyclic Nomenclature",
    question: "In the Hantzsch-Widman nomenclature system, the prefix 'oxa-' indicates the presence of which heteroatom in the ring?",
    options: ["Nitrogen", "Sulfur", "Oxygen", "Phosphorus"],
    correct: 2,
    hint: "'Oxa' shares its root with a very common element in water.",
    keywords: ["oxygen","oxa","prefix","nomenclature","widman"]
  },
  {
    id: 3,
    topic: "5-Membered Ring Reactivity",
    question: "The correct order of reactivity towards electrophilic aromatic substitution among 5-membered heterocycles is:",
    options: [
      "Pyrrole > Furan > Thiophene",
      "Furan > Pyrrole > Thiophene",
      "Thiophene > Furan > Pyrrole",
      "Furan > Thiophene > Pyrrole"
    ],
    correct: 0,
    hint: "The more electron-donating the heteroatom's lone pair to the ring, the more reactive.",
    keywords: ["electron","density","lone pair","donation","aromatic","nucleophilic"]
  },
  {
    id: 4,
    topic: "5-Membered Ring Reactivity",
    question: "Electrophilic substitution in pyrrole preferentially occurs at which position?",
    options: ["C-1 (nitrogen)", "C-2 (α-position)", "C-3 (β-position)", "C-4"],
    correct: 1,
    hint: "The position adjacent (alpha) to the heteroatom has the highest electron density.",
    keywords: ["alpha","adjacent","c-2","electron density","resonance","intermediate"]
  },
  {
    id: 5,
    topic: "Pyrrole Synthesis",
    question: "Knorr pyrrole synthesis involves the condensation of which two reactants?",
    options: [
      "An α-aminoketone with a β-ketoester",
      "Succinimide with zinc dust",
      "Mucic acid with glycerol",
      "Acetylene with ammonia"
    ],
    correct: 0,
    hint: "Named after Ludwig Knorr — think about combining an amine-containing ketone with an ester.",
    keywords: ["amino","ketone","ketoester","condensation","cyclization","knorr"]
  },
  {
    id: 6,
    topic: "Pyrrole Reactions",
    question: "When pyrrole is treated with dilute mineral acids, it undergoes:",
    options: ["Reduction to pyrrolidine", "Polymerization (resinification)", "Ring-opening reaction", "N-protonation to form pyrrolium ion"],
    correct: 1,
    hint: "Pyrrole is acid-sensitive — protonation at C-2 disrupts aromaticity leading to dark polymeric material.",
    keywords: ["polymer","resin","acid","protonation","c-2","aromaticity","dark"]
  },
  {
    id: 7,
    topic: "Pyrrole Uses",
    question: "Pyrrole ring system is found in all of the following biologically important molecules EXCEPT:",
    options: ["Hemoglobin (heme)", "Chlorophyll", "Vitamin B₁₂", "Ascorbic acid (Vitamin C)"],
    correct: 3,
    hint: "Three of these contain a porphyrin ring system. One is a simple lactone.",
    keywords: ["porphyrin","heme","chlorophyll","b12","tetrapyrrole"]
  },
  {
    id: 8,
    topic: "Enantiomers & Diastereomers",
    question: "Two stereoisomers that are non-superimposable mirror images of each other are called:",
    options: ["Diastereomers", "Enantiomers", "Meso compounds", "Constitutional isomers"],
    correct: 1,
    hint: "Think of your left and right hands — they are mirror images but can't overlap.",
    keywords: ["mirror","non-superimposable","chiral","optical","hands"]
  },
  {
    id: 9,
    topic: "Enantiomers & Diastereomers",
    question: "Which statement about diastereomers is CORRECT?",
    options: [
      "They are mirror images of each other",
      "They have identical physical properties",
      "They have different melting points and solubilities",
      "They always have equal and opposite optical rotations"
    ],
    correct: 2,
    hint: "Unlike enantiomers, diastereomers are NOT mirror images — so their properties differ.",
    keywords: ["different","physical","properties","melting","not mirror","configuration"]
  },
  {
    id: 10,
    topic: "Meso Compounds",
    question: "A meso compound is optically inactive because it possesses:",
    options: [
      "No chiral centers at all",
      "An internal plane of symmetry despite having chiral centers",
      "An equal mixture of two enantiomers",
      "Only one chiral center"
    ],
    correct: 1,
    hint: "Look for an internal mirror plane — the molecule cancels its own optical activity.",
    keywords: ["internal","plane","symmetry","chiral","cancel","superimposable"]
  },
  {
    id: 11,
    topic: "Elements of Symmetry",
    question: "Which of the following is NOT a valid element of symmetry used in stereochemistry?",
    options: [
      "Simple axis of symmetry (Cₙ)",
      "Plane of symmetry (σ)",
      "Centre of symmetry (i)",
      "Bond dissociation energy"
    ],
    correct: 3,
    hint: "Symmetry elements are geometric operations — one of these is a thermodynamic property.",
    keywords: ["axis","plane","centre","alternating","geometric","operation","point group"]
  },
  {
    id: 12,
    topic: "Asymmetric Carbon",
    question: "An asymmetric carbon atom (chiral center) is defined as a carbon bonded to:",
    options: [
      "Four identical substituents",
      "Three different and one identical substituent",
      "Four different substituents",
      "Two pairs of identical substituents"
    ],
    correct: 2,
    hint: "The key criterion is that ALL four groups attached must be different from each other.",
    keywords: ["four","different","substituent","tetrahedral","sp3","chiral"]
  },
  {
    id: 13,
    topic: "Optical Isomerism",
    question: "For a compound with 'n' chiral centers and no meso forms, the maximum number of optically active stereoisomers is:",
    options: ["n", "2n", "2ⁿ", "n²"],
    correct: 2,
    hint: "It's an exponential relationship — each chiral center doubles the possibilities.",
    keywords: ["2","power","exponential","doubles","formula","maximum"]
  },
  {
    id: 14,
    topic: "Optical Isomerism",
    question: "A racemic mixture (±) is characterized by:",
    options: [
      "Rotating plane-polarized light to the right",
      "Rotating plane-polarized light to the left",
      "Zero net optical rotation",
      "Double the optical rotation of one enantiomer"
    ],
    correct: 2,
    hint: "Equal amounts of (+) and (−) enantiomers cancel each other's rotation.",
    keywords: ["equal","mixture","cancel","zero","optically inactive","opposite"]
  },
  {
    id: 15,
    topic: "Basicity of Pyridine",
    question: "Pyridine (pKb ≈ 8.8) is significantly more basic than pyrrole (pKb ≈ 13.6) because:",
    options: [
      "Pyridine has a larger ring size",
      "The lone pair on N in pyridine is in an sp² orbital NOT part of the aromatic π-system",
      "Pyrrole has more hydrogen atoms",
      "Pyridine contains more carbon atoms than pyrrole"
    ],
    correct: 1,
    hint: "In pyrrole, the nitrogen lone pair is part of the aromatic sextet — protonation destroys aromaticity.",
    keywords: ["lone pair","sp2","aromatic","sextet","not part","delocalized","available","orbital"]
  },
  {
    id: 16,
    topic: "Furan & Thiophene Uses",
    question: "Which important industrial solvent is manufactured by catalytic hydrogenation of furan?",
    options: ["Dioxane", "Tetrahydrofuran (THF)", "Diethyl ether", "Dimethyl sulfoxide (DMSO)"],
    correct: 1,
    hint: "Saturating all double bonds in furan gives a fully reduced cyclic ether widely used in labs.",
    keywords: ["hydrogenation","thf","tetrahydrofuran","solvent","saturation","reduction"]
  },
  {
    id: 17,
    topic: "Furan & Thiophene Uses",
    question: "Thiophene is commonly found as a natural impurity in commercially available:",
    options: ["Ethanol", "Coal-tar benzene", "Methanol", "Chloroform"],
    correct: 1,
    hint: "Thiophene and this aromatic hydrocarbon have very similar boiling points (~80°C), making separation difficult.",
    keywords: ["benzene","coal tar","boiling point","similar","impurity","indophenine"]
  },
  {
    id: 18,
    topic: "Beckmann Rearrangement",
    question: "The Beckmann rearrangement converts:",
    options: [
      "Ketones directly to esters",
      "Oximes to substituted amides (or lactams)",
      "Alcohols to ethers",
      "Aldehydes to carboxylic acids"
    ],
    correct: 1,
    hint: "Oximes (C=N-OH) undergo this acid-catalyzed rearrangement with group migration.",
    keywords: ["oxime","amide","lactam","migration","rearrangement","c=n"]
  },
  {
    id: 19,
    topic: "Beckmann Rearrangement",
    question: "In the Beckmann rearrangement, the group that migrates to nitrogen is the one that is:",
    options: [
      "cis (syn) to the hydroxyl group",
      "trans (anti) to the hydroxyl group",
      "The smaller of the two groups",
      "The more electronegative group"
    ],
    correct: 1,
    hint: "The migration is stereospecific — the group anti-periplanar to the leaving -OH migrates.",
    keywords: ["trans","anti","periplanar","stereospecific","migration","opposite","hydroxyl"]
  },
  {
    id: 20,
    topic: "Wolff-Kishner Reduction",
    question: "The Wolff-Kishner reduction converts a carbonyl group (C=O) to:",
    options: ["An alcohol (−OH)", "A methylene group (−CH₂−)", "A carboxylic acid (−COOH)", "An amine (−NH₂)"],
    correct: 1,
    hint: "This reduction completely removes the oxygen — C=O becomes CH₂.",
    keywords: ["methylene","ch2","deoxygenation","remove","oxygen","reduce"]
  },
  {
    id: 21,
    topic: "Wolff-Kishner Reduction",
    question: "Which set of reagents is used in the Wolff-Kishner reduction?",
    options: [
      "Zn-Hg / conc. HCl",
      "NH₂NH₂ / KOH / ethylene glycol (high boiling solvent)",
      "LiAlH₄ in dry ether",
      "H₂ / Pd-C at high pressure"
    ],
    correct: 1,
    hint: "This is the base-catalyzed complement of Clemmensen — it uses hydrazine under strongly basic conditions.",
    keywords: ["hydrazine","koh","base","ethylene glycol","high temperature","huang-minlon"]
  },
  {
    id: 22,
    topic: "Birch Reduction",
    question: "Birch reduction of benzene produces:",
    options: ["Cyclohexane", "Cyclohexene", "1,4-Cyclohexadiene", "1,3-Cyclohexadiene"],
    correct: 2,
    hint: "It's a partial reduction giving a non-conjugated (1,4-) diene, NOT a fully saturated product.",
    keywords: ["1,4","cyclohexadiene","partial","non-conjugated","unconjugated","diene"]
  },
  {
    id: 23,
    topic: "Birch Reduction",
    question: "The reagents used in Birch reduction are:",
    options: [
      "H₂ / Pt at high pressure",
      "Na (or Li) in liquid NH₃ with an alcohol (t-BuOH)",
      "Zn / acetic acid",
      "LiAlH₄ in dry THF"
    ],
    correct: 1,
    hint: "A dissolving-metal reduction in a cryogenic solvent (liquid ammonia at −33°C).",
    keywords: ["sodium","lithium","liquid ammonia","alcohol","dissolving metal","solvated electron"]
  },
  {
    id: 24,
    topic: "Metal Hydride Reduction",
    question: "Which of the following functional groups can NaBH₄ NOT reduce under standard conditions?",
    options: ["Aldehyde", "Ketone", "Ester", "Acid chloride"],
    correct: 2,
    hint: "NaBH₄ is a mild reducing agent — it handles aldehydes and ketones but cannot reduce less reactive carbonyls.",
    keywords: ["mild","selective","ester","cannot","less reactive","lialh4","stronger"]
  },
  {
    id: 25,
    topic: "Oppenauer Oxidation",
    question: "Oppenauer oxidation is specifically used to convert:",
    options: [
      "Primary alcohols to aldehydes",
      "Secondary alcohols to ketones",
      "Aldehydes to carboxylic acids",
      "Alkenes to epoxides"
    ],
    correct: 1,
    hint: "This is the exact reverse of Meerwein-Ponndorf-Verley (MPV) reduction.",
    keywords: ["secondary","alcohol","ketone","aluminum","isopropoxide","acetone","mpv","reverse"]
  }
];

// ===== STATE =====
let state = {
  studentName: '',
  currentQ: 0,
  answers: [],        // { selected: null|index, textAnswer: '', hintUsed: false, timeSpent: 0, optionChanges: 0, visits: 0 }
  totalTime: 0,
  quizStartTime: null,
  qStartTime: null,
  timerInterval: null,
  qTimerInterval: null,
  tabSwitches: 0,
  submitted: false
};

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  document.getElementById('student-name').addEventListener('keydown', e => {
    if (e.key === 'Enter') startQuiz();
  });
  // Track tab switches
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && !state.submitted && state.quizStartTime) {
      state.tabSwitches++;
      const el = document.getElementById('tab-count');
      const warn = document.getElementById('tab-warn');
      if (el) el.textContent = state.tabSwitches;
      if (warn) warn.classList.add('visible');
    }
  });
});

// ===== PARTICLE BACKGROUND =====
function initParticles() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  const PARTICLE_COUNT = 60;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.3 + 0.05
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(168, 133, 247, ${p.opacity})`;
      ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(168, 133, 247, ${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ===== SCREEN MANAGEMENT =====
function switchScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function showWelcome() { switchScreen('welcome-screen'); }
function showStats() {
  switchScreen('stats-screen');
  renderStats();
}

// ===== START QUIZ =====
function startQuiz() {
  const name = document.getElementById('student-name').value.trim();
  if (!name) {
    document.getElementById('name-error').textContent = "Bro, at least tell us your name 💀";
    return;
  }
  if (name.length < 2) {
    document.getElementById('name-error').textContent = "That's not a name, that's a typo.";
    return;
  }
  document.getElementById('name-error').textContent = '';

  state.studentName = name;
  state.currentQ = 0;
  state.tabSwitches = 0;
  state.submitted = false;
  state.answers = questions.map(() => ({
    selected: null,
    textAnswer: '',
    hintUsed: false,
    timeSpent: 0,
    optionChanges: 0,
    visits: 0
  }));

  document.getElementById('student-tag').textContent = '👤 ' + name;
  document.getElementById('tab-count').textContent = '0';
  document.getElementById('tab-warn').classList.remove('visible');

  // Build dot navigation
  const dotNav = document.getElementById('dot-nav');
  dotNav.innerHTML = '';
  questions.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' current' : '');
    dot.title = `Q${i + 1}`;
    dot.addEventListener('click', () => goToQuestion(i));
    dotNav.appendChild(dot);
  });

  switchScreen('quiz-screen');
  renderQuestion(0);

  // Start timers
  state.quizStartTime = Date.now();
  state.totalTime = 0;
  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(updateGlobalTimer, 1000);
  startQTimer();
}

// ===== RENDER QUESTION =====
function renderQuestion(index) {
  const q = questions[index];
  const a = state.answers[index];
  a.visits++;

  // Animate card
  const card = document.getElementById('question-card');
  card.style.animation = 'none';
  card.offsetHeight; // reflow
  card.style.animation = 'slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both';

  // Header
  document.getElementById('q-num').textContent = `Q${index + 1}`;
  document.getElementById('q-topic-tag').textContent = q.topic;
  document.getElementById('q-text').textContent = q.question;

  // Options
  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn' + (a.selected === i ? ' selected' : '');
    btn.innerHTML = `
      <span class="option-letter">${letters[i]}</span>
      <span class="option-text">${opt}</span>
    `;
    btn.addEventListener('click', () => selectOption(index, i));
    grid.appendChild(btn);
  });

  // Text answer
  document.getElementById('text-answer').value = a.textAnswer;

  // Hint
  const hintBtn = document.getElementById('hint-btn');
  const hintReveal = document.getElementById('hint-reveal');
  const hintText = document.getElementById('hint-text');
  hintText.textContent = q.hint;
  if (a.hintUsed) {
    hintBtn.classList.add('used');
    hintReveal.classList.add('show');
  } else {
    hintBtn.classList.remove('used');
    hintReveal.classList.remove('show');
  }

  // Progress
  document.getElementById('progress-fill').style.width = `${((index + 1) / questions.length) * 100}%`;
  document.getElementById('progress-label').textContent = `${index + 1} / ${questions.length}`;

  // Navigation buttons
  document.getElementById('prev-btn').disabled = index === 0;
  const nextBtn = document.getElementById('next-btn');
  const submitBtn = document.getElementById('submit-btn');
  if (index === questions.length - 1) {
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'inline-flex';
  } else {
    nextBtn.style.display = 'inline-flex';
    submitBtn.style.display = 'none';
  }

  // Update dots
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('current', i === index);
    d.classList.toggle('answered', state.answers[i].selected !== null && i !== index);
  });

  // Q timer display
  updateQTimerDisplay();
}

// ===== SELECT OPTION =====
function selectOption(qIndex, optIndex) {
  const a = state.answers[qIndex];
  if (a.selected !== null && a.selected !== optIndex) {
    a.optionChanges++;
  }
  a.selected = optIndex;

  // Update UI
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === optIndex);
  });

  // Update dot
  const dots = document.querySelectorAll('.dot');
  if (dots[qIndex]) dots[qIndex].classList.add('answered');
}

// ===== HINT =====
function useHint() {
  const a = state.answers[state.currentQ];
  if (a.hintUsed) return;
  a.hintUsed = true;

  document.getElementById('hint-btn').classList.add('used');
  document.getElementById('hint-reveal').classList.add('show');
}

// ===== SAVE TEXT ANSWER =====
function saveTextAnswer() {
  const textarea = document.getElementById('text-answer');
  state.answers[state.currentQ].textAnswer = textarea.value;
}

// ===== NAVIGATION =====
function goToPrev() {
  if (state.currentQ > 0) goToQuestion(state.currentQ - 1);
}
function goToNext() {
  if (state.currentQ < questions.length - 1) goToQuestion(state.currentQ + 1);
}
function goToQuestion(index) {
  saveTextAnswer();
  recordQTime();
  state.currentQ = index;
  renderQuestion(index);
  startQTimer();
}

// ===== TIMERS =====
function updateGlobalTimer() {
  state.totalTime = Math.floor((Date.now() - state.quizStartTime) / 1000);
  const mins = String(Math.floor(state.totalTime / 60)).padStart(2, '0');
  const secs = String(state.totalTime % 60).padStart(2, '0');
  const display = document.getElementById('timer-display');
  display.textContent = `${mins}:${secs}`;

  const timerBox = document.getElementById('timer-box');
  if (state.totalTime > 1500) { // 25 min
    timerBox.classList.add('overtime');
  }
}

function startQTimer() {
  state.qStartTime = Date.now();
  clearInterval(state.qTimerInterval);
  state.qTimerInterval = setInterval(updateQTimerDisplay, 1000);
}
function recordQTime() {
  if (state.qStartTime) {
    state.answers[state.currentQ].timeSpent += Math.floor((Date.now() - state.qStartTime) / 1000);
  }
}
function updateQTimerDisplay() {
  const elapsed = state.answers[state.currentQ].timeSpent + (state.qStartTime ? Math.floor((Date.now() - state.qStartTime) / 1000) : 0);
  document.getElementById('q-timer').textContent = `${elapsed}s on this Q`;
}

// ===== SUBMIT =====
function submitQuiz() {
  saveTextAnswer();
  recordQTime();

  const unanswered = state.answers.filter(a => a.selected === null).length;
  const answered = questions.length - unanswered;

  if (unanswered > 0) {
    document.getElementById('modal-msg').textContent =
      `You left ${unanswered} question${unanswered > 1 ? 's' : ''} unanswered. Submit anyway?`;
  } else {
    document.getElementById('modal-msg').textContent = "All questions answered. Ready to submit?";
  }

  document.getElementById('modal-stats').innerHTML = `
    <div class="modal-stat"><span class="val text-green">${answered}</span><span class="lbl">Answered</span></div>
    <div class="modal-stat"><span class="val text-red">${unanswered}</span><span class="lbl">Skipped</span></div>
    <div class="modal-stat"><span class="val text-amber">${state.answers.filter(a => a.hintUsed).length}</span><span class="lbl">Hints Used</span></div>
  `;

  document.getElementById('confirm-modal').classList.add('show');
}

function closeModal() {
  document.getElementById('confirm-modal').classList.remove('show');
}

function confirmSubmit() {
  closeModal();
  clearInterval(state.timerInterval);
  clearInterval(state.qTimerInterval);
  state.submitted = true;
  calculateAndShowResults();
}

// ===== SCORING =====
function calculateAndShowResults() {
  let totalScore = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let skippedCount = 0;
  let hintsUsed = 0;
  let totalTextLength = 0;
  let keywordHits = 0;
  let totalKeywords = 0;

  const breakdown = questions.map((q, i) => {
    const a = state.answers[i];
    let marks = 0;
    let status = 'skipped';

    if (a.selected === null) {
      skippedCount++;
    } else if (a.selected === q.correct) {
      correctCount++;
      marks = a.hintUsed ? 0.5 : 1;
      status = 'correct';
    } else {
      wrongCount++;
      status = 'wrong';
    }

    if (a.hintUsed) hintsUsed++;
    totalScore += marks;
    totalTextLength += a.textAnswer.length;

    // Keyword evaluation
    const textLower = a.textAnswer.toLowerCase();
    let qKeywordHits = 0;
    q.keywords.forEach(kw => {
      if (textLower.includes(kw.toLowerCase())) {
        qKeywordHits++;
        keywordHits++;
      }
    });
    totalKeywords += q.keywords.length;

    return {
      ...q,
      answer: a,
      marks,
      status,
      keywordHits: qKeywordHits,
      totalKeywords: q.keywords.length
    };
  });

  // Save to stats
  saveToStats({
    name: state.studentName,
    date: new Date().toISOString(),
    score: totalScore,
    maxScore: 25,
    correct: correctCount,
    wrong: wrongCount,
    skipped: skippedCount,
    hintsUsed,
    tabSwitches: state.tabSwitches,
    totalTime: state.totalTime,
    textChars: totalTextLength,
    keywordHits,
    totalKeywords,
    breakdown: breakdown.map((b, i) => ({
      qId: b.id,
      status: b.status,
      marks: b.marks,
      hintUsed: b.answer.hintUsed,
      timeSpent: b.answer.timeSpent,
      optionChanges: b.answer.optionChanges,
      visits: b.answer.visits,
      textAnswer: b.answer.textAnswer,
      selected: b.answer.selected,
      correct: b.correct,
      keywordHits: b.keywordHits
    }))
  });

  renderResults(totalScore, correctCount, wrongCount, skippedCount, hintsUsed, keywordHits, totalKeywords, breakdown);
}

// ===== RESULTS RENDERING =====
function renderResults(score, correct, wrong, skipped, hints, kwHits, kwTotal, breakdown) {
  const container = document.getElementById('results-screen');
  const percentage = (score / 25) * 100;
  const passed = score >= 15;
  const msg = generateMessage(score);
  const grade = getGrade(score);
  const strokeOffset = 502 - (502 * (percentage / 100));
  const strokeColor = passed ? (score >= 20 ? '#10b981' : '#06b6d4') : (score >= 10 ? '#f59e0b' : '#ef4444');
  const understandingPct = kwTotal > 0 ? Math.round((kwHits / kwTotal) * 100) : 0;

  const avgTime = Math.round(state.totalTime / 25);
  const mins = Math.floor(state.totalTime / 60);
  const secs = state.totalTime % 60;

  container.innerHTML = `
    <div class="results-container">
      <div class="result-hero glass-card">
        <div class="score-circle">
          <svg viewBox="0 0 180 180">
            <circle class="score-track" cx="90" cy="90" r="80"/>
            <circle class="score-progress" cx="90" cy="90" r="80"
              style="stroke: ${strokeColor}; stroke-dashoffset: ${strokeOffset}"/>
          </svg>
          <div class="score-value">
            <div class="score-num" style="color: ${strokeColor}">${score}</div>
            <div class="score-total">out of 25</div>
          </div>
        </div>
        <div class="result-grade" style="color: ${strokeColor}">${grade}</div>
        <div class="result-msg">${msg}</div>
      </div>

      <div class="result-stats-grid">
        <div class="stat-mini glass-card">
          <div class="stat-val text-green">${correct}</div>
          <div class="stat-lbl">Correct</div>
        </div>
        <div class="stat-mini glass-card">
          <div class="stat-val text-red">${wrong}</div>
          <div class="stat-lbl">Wrong</div>
        </div>
        <div class="stat-mini glass-card">
          <div class="stat-val" style="color: var(--text-muted)">${skipped}</div>
          <div class="stat-lbl">Skipped</div>
        </div>
        <div class="stat-mini glass-card">
          <div class="stat-val text-amber">${hints}</div>
          <div class="stat-lbl">Hints Used</div>
        </div>
        <div class="stat-mini glass-card">
          <div class="stat-val text-cyan">${mins}m ${secs}s</div>
          <div class="stat-lbl">Total Time</div>
        </div>
        <div class="stat-mini glass-card">
          <div class="stat-val text-purple">${avgTime}s</div>
          <div class="stat-lbl">Avg/Question</div>
        </div>
        <div class="stat-mini glass-card">
          <div class="stat-val text-red">${state.tabSwitches}</div>
          <div class="stat-lbl">Tab Switches ⚠️</div>
        </div>
        <div class="stat-mini glass-card">
          <div class="stat-val" style="color: ${understandingPct > 50 ? 'var(--accent-green)' : 'var(--accent-amber)'}">${understandingPct}%</div>
          <div class="stat-lbl">Understanding</div>
        </div>
      </div>

      <div class="breakdown-section glass-card">
        <h3>📋 Question-by-Question Breakdown</h3>
        <table class="breakdown-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Topic</th>
              <th>Status</th>
              <th>Marks</th>
              <th>Hint</th>
              <th>Time</th>
              <th>Changes</th>
              <th>Your Explanation</th>
              <th>Correct Answer</th>
            </tr>
          </thead>
          <tbody>
            ${breakdown.map((b, i) => `
              <tr>
                <td><strong>Q${i + 1}</strong></td>
                <td style="font-size:0.75rem;color:var(--text-secondary)">${b.topic}</td>
                <td>
                  ${b.status === 'correct' ? '<span class="badge-correct">✓ Correct</span>' :
                    b.status === 'wrong' ? '<span class="badge-wrong">✗ Wrong</span>' :
                    '<span class="badge-skip">— Skipped</span>'}
                </td>
                <td><strong>${b.marks}</strong></td>
                <td>${b.answer.hintUsed ? '<span class="badge-hint">Used</span>' : '—'}</td>
                <td style="font-family:var(--font-mono);font-size:0.75rem">${b.answer.timeSpent}s</td>
                <td style="font-family:var(--font-mono);font-size:0.75rem">${b.answer.optionChanges}</td>
                <td><span class="text-answer-preview" title="${escapeHtml(b.answer.textAnswer)}">${b.answer.textAnswer || '<em style="opacity:0.4">—</em>'}</span></td>
                <td style="font-size:0.75rem;color:var(--accent-green)">${b.options[b.correct]}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div class="result-actions">
        <button class="btn-primary" onclick="retryQuiz()">
          <span>🔄 Try Again</span>
        </button>
        <button class="btn-ghost" onclick="showStats()" style="margin-top:0">
          <span>📊 View All Stats</span>
        </button>
        <button class="btn-ghost" onclick="showWelcome()" style="margin-top:0">
          <span>🏠 Home</span>
        </button>
      </div>
    </div>
  `;

  switchScreen('results-screen');

  // Animate score circle
  setTimeout(() => {
    const prog = container.querySelector('.score-progress');
    if (prog) prog.style.strokeDashoffset = strokeOffset;
  }, 100);

  // Confetti for high scores
  if (score >= 20) launchConfetti();
}

// ===== MESSAGE GENERATOR =====
function generateMessage(score) {
  if (score <= 7) {
    const msgs = [
      `WHAT THE ACTUAL FUCK WAS THAT?! ${score}/25?! 💀\n\nGo fuck yourself and study hard because you are NOT as clever as you think. Your answer sheet made the server physically cringe. Even a random number generator would've scored better — and it doesn't even have a brain, just like you apparently.\n\nYou just wasted years of your parents' hard-earned money for THIS? One-day batting? One-week batting? Bro, you need one-YEAR batting at this rate. Don't fake yourself in the name of a degree. That B.Pharm isn't going to prescribe itself while you're out here being a professional dumbass.\n\nClose Instagram. Delete TikTok. Burn your gaming setup. And OPEN. THE. DAMN. TEXTBOOK. Your future patients are already scared. 📚🔥`,

      `${score}/25... Are you SERIOUS right now?! 🤡\n\nBro really walked in thinking "vibes and prayers will carry me through pharmaceutical organic chemistry." SPOILER: They won't. They never did. They never will.\n\nGo fuck yourself and study hard. You're not clever, you're not "street smart," you're just lazy with extra steps. Your textbook has more dust on it than a pharaoh's tomb. The audacity to call yourself a pharmacy student with THIS score is genuinely criminal.\n\nStop faking yourself in the name of a degree. Either commit to learning or go home and tell your parents the truth — that their investment is currently yielding negative returns. 💀`
    ];
    return msgs[Math.floor(Math.random() * msgs.length)];
  }
  else if (score <= 14) {
    const msgs = [
      `${score}/25... Seriously? 😤\n\nYou call THIS an attempt? This is pharmaceutical chemistry, not a fucking lucky draw. You can't just circle random options and hope the universe aligns in your favor.\n\nGo study hard because you're clearly not as clever as you think. Stop doing one-night batting and expecting miracles. Your neurons are on vacation while your classmates are grinding. The textbook is literally begging you to open it.\n\nYou're below 15 and that means you officially need to get your shit together. No excuses, no "I'll study tomorrow," no "the syllabus is too hard." The syllabus isn't hard — YOUR effort is soft. Man up. Woman up. Whatever up. Just STUDY UP. 📖`,

      `${score}/25... Underwhelming doesn't even begin to describe this. 💀\n\nYou're in that beautiful zone where you know just enough to be dangerous but not enough to be useful. Congratulations, you're the human equivalent of a half-read prescription — confusing and potentially harmful.\n\nStop batting last minute. Stop pretending you'll "figure it out." You won't. Chemistry doesn't give participation trophies. Either you know your Beckmann from your Birch or you're just filling space in the classroom.\n\nBelow 15. That's the wake-up call. Hit the books or the books will hit your career. Hard. 🥊`
    ];
    return msgs[Math.floor(Math.random() * msgs.length)];
  }
  else if (score <= 18) {
    const msgs = [
      `${score}/25 — Alright, not bad, not legendary either. 😏\n\nYou're like a generic drug — you get the job done but nobody's writing a paper about you. You passed the roast threshold so you're spared the verbal destruction, consider yourself lucky.\n\nThere's clearly some knowledge in that skull. You didn't just guess your way through this — some real studying happened. But there are gaps. Gaps wider than your confidence suggests. Plug them.\n\nYou've got potential. Don't waste it by getting comfortable with "just enough." Push harder, go from generic to branded. 💊💪`,

      `${score}/25 — Solid. Respectable. Not quite legendary but definitely not embarrassing. ✌️\n\nYou actually opened the textbook this semester and it shows. Heterocyclic chemistry didn't completely own you, and you clearly understand some named reactions. That's more than most can say.\n\nBut don't let this mediocre comfort zone become your home. There's room to grow. Tighten up the weak areas, and next time you'll be in the elite zone. Keep grinding. 📈`
    ];
    return msgs[Math.floor(Math.random() * msgs.length)];
  }
  else if (score <= 22) {
    const msgs = [
      `${score}/25 — NOW we're talking! 🔥🧠\n\nYou actually KNOW your stuff. Like, genuinely. Your neurons are firing on all cylinders. You didn't just study — you UNDERSTOOD. That's the difference between a pharmacist and a pill counter.\n\nPyrrole synthesis? Check. Stereochemistry? Nailed it. Named reactions? You probably dream in Beckmann rearrangements. Your professors would be proud, your parents would be proud, hell, even I'm proud and I'm just a quiz engine.\n\nKeep this energy. You're not just passing exams — you're building a career. The pharmaceutical world needs people like you. Go claim it. 🌟💪`,

      `${score}/25 — Damn, look at you! 🎯\n\nThis score screams "I actually give a damn about my education." You separated the wheat from the chaff and came out shining. Your understanding of POC-III is genuinely impressive.\n\nYou're the kind of student who makes professors think "maybe teaching ISN'T so bad after all." Consistency like this is rare. Treasure it, nurture it, and for the love of chemistry, keep it going into the finals. Respect. 🙌`
    ];
    return msgs[Math.floor(Math.random() * msgs.length)];
  }
  else {
    const msgs = [
      `${score}/25 — ABSOLUTE FUCKING LEGEND! 👑🏆🚀\n\nARE YOU EVEN HUMAN?! Did you literally EAT the textbook for breakfast?! Your brain is running on premium octane fuel while everyone else is sputtering on kerosene.\n\nHeterocyclic chemistry? CHILD'S PLAY. Stereochemistry? You dream in R and S configurations. Named reactions? You could NAME reactions that haven't even been DISCOVERED yet. Wolff-Kishner? More like Wolff-KING.\n\nYou're not a B.Pharm student — you're a B.Pharm BOSS. Standing ovation. Mic drop. Textbook salute. Your future patients are already lucky and they don't even know it yet.\n\nI genuinely have nothing to roast. You earned this. Now go flex on the finals. 🎤⬇️💎🌟`,

      `${score}/25 — FLAWLESS EXECUTION! 🏅✨\n\nI've seen a lot of students come through here but YOU... you're built different. Your pharmaceutical organic chemistry game is on an entirely different planet. While others are struggling with pyrrole, you're out here casually acing everything like it's kindergarten math.\n\nThe way you demolished this quiz should be studied as a case study in "how to actually prepare for exams." No last-minute batting. No shortcuts. Just pure, unfiltered KNOWLEDGE.\n\nYour parents' investment is yielding dividends. Your professors should put your name on a plaque. YOU ARE THE STANDARD. Go forth and conquer, you magnificent specimen. 💪👑🔥`
    ];
    return msgs[Math.floor(Math.random() * msgs.length)];
  }
}

function getGrade(score) {
  if (score <= 7) return '💀 CATASTROPHIC FAILURE';
  if (score <= 14) return '😤 BELOW EXPECTATIONS';
  if (score <= 18) return '😏 DECENT — ROOM TO GROW';
  if (score <= 22) return '🔥 IMPRESSIVE!';
  return '👑 LEGENDARY!';
}

// ===== CONFETTI =====
function launchConfetti() {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);

  const colors = ['#a855f7', '#6366f1', '#3b82f6', '#10b981', '#f59e0b', '#f43f5e', '#06b6d4', '#ec4899'];

  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = (Math.random() * 8 + 6) + 'px';
    piece.style.height = (Math.random() * 8 + 6) + 'px';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
    piece.style.animationDelay = (Math.random() * 1.5) + 's';
    container.appendChild(piece);
  }

  setTimeout(() => container.remove(), 5000);
}

// ===== RETRY =====
function retryQuiz() {
  document.getElementById('student-name').value = state.studentName;
  showWelcome();
}

// ===== LOCAL STORAGE STATS =====
function saveToStats(record) {
  const stats = JSON.parse(localStorage.getItem('poc3_quiz_stats') || '[]');
  stats.push(record);
  localStorage.setItem('poc3_quiz_stats', JSON.stringify(stats));
}

function getStats() {
  return JSON.parse(localStorage.getItem('poc3_quiz_stats') || '[]');
}

function clearAllStats() {
  if (confirm('Are you sure you want to delete ALL student records? This cannot be undone.')) {
    localStorage.removeItem('poc3_quiz_stats');
    renderStats();
  }
}

function renderStats() {
  const stats = getStats();
  const body = document.getElementById('stats-body');

  if (stats.length === 0) {
    body.innerHTML = `
      <div class="stats-empty">
        <p style="font-size:2rem">📭</p>
        <p>No quiz attempts recorded yet.</p>
        <p style="font-size:0.8rem;margin-top:4px">Student records will appear here after someone takes the quiz.</p>
      </div>
    `;
    return;
  }

  // Group by student name
  const grouped = {};
  stats.forEach(s => {
    if (!grouped[s.name]) grouped[s.name] = [];
    grouped[s.name].push(s);
  });

  body.innerHTML = `
    <table class="stats-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Student Name</th>
          <th>Score</th>
          <th>Correct</th>
          <th>Wrong</th>
          <th>Skipped</th>
          <th>Hints</th>
          <th>Tab Switches</th>
          <th>Time</th>
          <th>Understanding</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        ${stats.map((s, i) => {
          const pct = Math.round((s.score / s.maxScore) * 100);
          const underPct = s.totalKeywords > 0 ? Math.round((s.keywordHits / s.totalKeywords) * 100) : 0;
          const barColor = s.score >= 20 ? '#10b981' : s.score >= 15 ? '#06b6d4' : s.score >= 10 ? '#f59e0b' : '#ef4444';
          const date = new Date(s.date);
          const dateStr = date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: '2-digit' });
          const timeStr = date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
          const mins = Math.floor(s.totalTime / 60);
          const secs = s.totalTime % 60;
          return `
            <tr>
              <td>${i + 1}</td>
              <td><strong>${escapeHtml(s.name)}</strong></td>
              <td>
                <strong style="color:${barColor}">${s.score}</strong> / ${s.maxScore}
                <div class="score-bar"><div class="score-bar-fill" style="width:${pct}%;background:${barColor}"></div></div>
              </td>
              <td class="text-green">${s.correct}</td>
              <td class="text-red">${s.wrong}</td>
              <td>${s.skipped}</td>
              <td class="text-amber">${s.hintsUsed}</td>
              <td class="${s.tabSwitches > 0 ? 'text-red' : ''}">${s.tabSwitches} ${s.tabSwitches > 3 ? '🚨' : ''}</td>
              <td style="font-family:var(--font-mono);font-size:0.75rem">${mins}m ${secs}s</td>
              <td style="color:${underPct > 50 ? 'var(--accent-green)' : 'var(--accent-amber)'}">${underPct}%</td>
              <td style="font-size:0.72rem;color:var(--text-muted)">${dateStr}<br>${timeStr}</td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>

    <div style="margin-top:24px;padding:20px;background:rgba(255,255,255,0.02);border-radius:var(--radius-sm);border:1px solid var(--glass-border)">
      <h4 style="font-family:var(--font-display);margin-bottom:12px;font-size:0.9rem">📊 Summary by Student</h4>
      ${Object.entries(grouped).map(([name, attempts]) => {
        const best = Math.max(...attempts.map(a => a.score));
        const avg = (attempts.reduce((sum, a) => sum + a.score, 0) / attempts.length).toFixed(1);
        const totalHints = attempts.reduce((sum, a) => sum + a.hintsUsed, 0);
        const totalTabs = attempts.reduce((sum, a) => sum + a.tabSwitches, 0);
        return `
          <div style="display:flex;align-items:center;gap:16px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.03);flex-wrap:wrap">
            <strong style="min-width:120px">${escapeHtml(name)}</strong>
            <span style="font-size:0.78rem;color:var(--text-secondary)">Attempts: ${attempts.length}</span>
            <span style="font-size:0.78rem;color:var(--accent-green)">Best: ${best}/25</span>
            <span style="font-size:0.78rem;color:var(--accent-cyan)">Avg: ${avg}</span>
            <span style="font-size:0.78rem;color:var(--accent-amber)">Total Hints: ${totalHints}</span>
            ${totalTabs > 0 ? `<span style="font-size:0.78rem;color:var(--accent-red)">Tab Switches: ${totalTabs} 🚨</span>` : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ===== UTILITY =====
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
