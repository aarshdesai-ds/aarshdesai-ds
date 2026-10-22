# Aarsh Desai

Applied ML and healthcare AI engineer. I build machine learning and LLM systems for clinical and operational decisions, and I measure them before I trust them.

My work covers three areas: LLM applications with retrieval, agents, memory and guardrails; deep learning on medical signals and images; and the engineering that makes a model usable, such as APIs, tests, deployment and documentation.

[LinkedIn](https://www.linkedin.com/in/aarsh-desai-5953b0277/) | [Email](mailto:aarshdesai004@gmail.com)

---

## Snapshot

- B.S. Data Science, Purdue University (May 2026), with a minor in Economics
- Former AI Product Engineer Intern at Raaz MD, where I built multilingual voice-AI and RAG pipelines that turn clinical calls into structured documentation
- Healthcare AI projects across ECG deep learning, chest X-ray classification, clinical risk screening and patient-message triage
- LangGraph agents with human-in-the-loop pauses, long-term memory, labelled evaluation sets and code-level guardrails
- Internship experience in healthcare and education analytics: 3,000+ patient records, 50,000+ education records, Tableau dashboards and recurring reports
- No U.S. work visa sponsorship required

---

## Featured Projects

### Healthcare AI

| Project | What it is | Highlights |
|---|---|---|
| [CardioDesk](https://github.com/aarshdesai-ds/cardiodesk-patient-message-assistant) | RAG assistant that triages patient portal messages for a heart clinic and drafts replies for nurse review | Two-layer safety check caught 100% of emergencies (16 of 16) on 54 labelled synthetic messages, against 69% for rules alone and 81% for the model alone; 98% intent accuracy; a 3-tool agent declined 3 of 3 dosing requests. Rebuilt in LangGraph with an `interrupt()` nurse-review step and FastAPI case endpoints: 100% of normal drafts paused for review, no emergency waited, and none of the 54 results changed |
| [EchoNext-SHD](https://github.com/aarshdesai-ds/echonext-shd-detection) | Structural heart disease detection from 12-lead ECGs | 82,543 ECGs; 1D-CNN residual ensemble with ECG and clinical feature fusion; 0.842 AUROC and 0.812 AUPRC; calibration, ablations, model card; FastAPI, Docker, Gradio, GitHub Actions |
| [Chest X-Ray Classifier](https://github.com/aarshdesai-ds/chest-xray-classifier) | Multi-label detection of 14 thoracic findings on NIH ChestX-ray14 | 112,120 X-rays from 30,805 patients; DenseNet-121 transfer learning raised test macro-AUROC 32%, from 0.604 for a from-scratch baseline to 0.797; patient-level splits, per-class thresholds, Grad-CAM audit, live Streamlit app |
| [Diabetes Risk Screening](https://github.com/aarshdesai-ds/diabetes-prediction) | An end-to-end screening demo built the way a real ML product is | Calibrated Random Forest; 0.84 ROC AUC (95% CI 0.78-0.89) and 0.74 AUPRC; recall-first threshold at 84% sensitivity; a subgroup audit found recall of 64% for ages 21-29 against about 90% for older groups; SHAP explanations, model card, tests, CI/CD, Docker |
| [SurgiCare HMS](https://github.com/aarshdesai-ds/surgicare-hms) | Hospital management system for SurgiCare Hospital, in active development | Patients, OPD token queue, operation-theatre scheduling, consultation notes and a live dashboard; FastAPI, React, Supabase with row-level security, CI; English and Gujarati |

### LLM Systems and Evaluation

| Project | What it is | Highlights |
|---|---|---|
| [QuizMate](https://github.com/aarshdesai-ds/quizmate-python-tutor) | A LangGraph Python tutor that answers from notes, runs quizzes and remembers each learner across sessions | Quiz subgraph that pauses with `interrupt()` for each answer; found the model put 64% of right answers on one letter (23 of 36), and a shuffle in code brought the most common letter down to 31%; long-term memory with fact extraction, scores written only by code, and approval before any delete; extraction accuracy raised from 90% to 100% on 20 labelled messages after tracing each failure to a mislabel or a rule clash |
| [FitBuddy](https://github.com/aarshdesai-ds/fitbuddy-workout-chatbot) | A LangGraph home-workout chatbot with an injury guard | Four tools, Chroma retrieval, SQLite-checkpointed memory and LangSmith tracing; the injury guard cut the unsafe-reply rate from 50% to 0% (9 of 18 to 0 of 18); found that a keyword safety check missed 78% of unsafe replies (7 of 9) and rewrote it, with 19 hand-written test cases; human-in-the-loop approval before logging |
| [TriageDesk](https://github.com/aarshdesai-ds/triagedesk-customer-review-assistant) | Customer-review triage with a RAG pipeline and a follow-up agent, where every change was measured | Policy retrieval raised from 78% to 95% (32 to 39 of 41) across single-change experiments; agent rebuilt from ReAct to a tool-calling loop, raising tool selection from 86% to 100% (18 to 21 of 21); both parts later rebuilt in LangGraph with a code-level hazard rule and an `interrupt()` supervisor pause, raising urgent catches from 11 to 12 of 13 and pausing 14 of 14 escalations |

### Analytics and Statistics

| Project | What it is | Highlights |
|---|---|---|
| [Returns and Growth Intelligence Pipeline](https://github.com/aarshdesai-ds/aarsh-desai-capstone-project) | A three-layer analytics pipeline: SQL, Python analysis and a generated business narrative | MySQL reports, pandas analysis, and a Gemini-written narrative with a numeric checker, so no figure is reported that an earlier layer did not compute |
| [Mumbai Indians 2024-2026 Case Study](https://github.com/aarshdesai-ds/mi-2024-2026-case-study) | A ball-by-ball investigation of three IPL seasons | 219 matches; phase-split analysis; Welch's t-test, Mann-Whitney U and Fisher's exact test, reporting only confirmed findings; a recruitment shortlist verified against Cricsheet data |
| [La Liga Statistical Analysis](https://github.com/aarshdesai-ds/La-Liga_Project_Aarsh) | Three models of team performance, compared | 3,040 matches across 8 seasons; betting odds, Pythagorean expectation and expected goals (xG); residual analysis and market-bias findings |

---

## How I Work

- **Measure first.** I build a labelled test set before tuning anything, and change one thing at a time.
- **Report what didn't work.** My READMEs include the experiments that lowered a score and the limitations still open.
- **Keep safety decisions deterministic.** Where an error is costly, I put the rule in code and keep a person in the loop.
- **Fix model bias in code, not in the prompt.** When an LLM's output is skewed, like quiz answers piling onto one letter, a few lines of code fix it more reliably than another instruction.
- **Choose metrics that fit the problem.** AUROC and calibration for imbalanced clinical data, missed cases counted separately from false alarms.
- **Ship it properly.** An API, tests, a container and a model card or README that states what the system is not for.

---

## Experience

### Raaz MD - AI Product Engineer Intern
Jul 2026 - Sep 2026

- Built an end-to-end multilingual voice-AI pipeline that transcribes and translates Hindi health-coaching calls into structured clinical summaries, using RAG with ChromaDB for patient-history retrieval and a locally hosted 4-bit quantized Mistral-7B model
- Developed a call-type routing system that separates clinical follow-ups from logistics escalations, reducing manual review time
- Implemented reliability safeguards: plausibility guardrails to catch LLM hallucinations, and a PII de-identification layer with NER-based redaction and phone-number pseudonymization
- Designed a longitudinal health-data layer that structures patient history and symptom context into clinician-usable, ML-ready records

### Purdue University - Undergraduate Teaching Assistant
Aug 2025 - Dec 2025

- Taught Python, Git, command-line workflows and debugging to 50+ first-year students in CS 19300, and resolved code errors in one-on-one office hours

### Oeson Learning - Data Analyst Intern
May 2024 - Aug 2024

- Built Python workflows to validate, clean and merge 50,000+ rows of education data from multiple sources, improving data reliability by 20% and reducing ingestion latency by 30%
- Ran A/B tests across two learning modules that drove a 9% lift in engagement, and built Tableau dashboards that cut stakeholder reporting time by 40%

### Surgicare Hospital Services - Healthcare Analytics Intern
May 2023 - Aug 2023

- Analyzed 3,000+ patient and operational records in Python and Excel, uncovering a 17% rise in gynecology prescriptions that informed a pharmaceutical partner's procurement planning
- Improved resource-allocation efficiency by 25% by forecasting supply needs, and cut report preparation time by 35% across 10+ recurring reports

---

## Technical Skills

**LLM and GenAI:** LangGraph, LangChain, LangSmith, RAG, tool-calling agents, human-in-the-loop approval, long-term memory, structured output, prompt design, guardrails, LLM evaluation, ChromaDB, OpenAI and Gemini APIs

**Machine Learning:** PyTorch, TensorFlow/Keras, scikit-learn, transfer learning, CNNs for signals and images, probability calibration, threshold tuning, Grad-CAM, SHAP, hypothesis testing

**Engineering:** Python, SQL, FastAPI, Pydantic, Docker, AWS (EC2, S3), GitHub Actions, pytest, Streamlit, Gradio, Hugging Face Spaces, React, Supabase and PostgreSQL

**Data and BI:** pandas, NumPy, MySQL, SQLite, Tableau, Power BI, Matplotlib, Seaborn, Plotly

---

## Education and Certifications

**Purdue University, College of Science.** B.S. Data Science, minor in Economics. Graduated May 2026.

- Google Data Analytics Professional Certificate (July 2024)
- Google Advanced Data Analytics Professional Certificate (August 2024)
- SQL for Data Science, University of California, Davis (October 2024)
- IBM AI Engineering Professional Certificate (in progress)
- IBM Data Engineering Professional Certificate (in progress)

---

## Contact

I'm interested in roles in healthcare AI, applied machine learning and LLM engineering.

- LinkedIn: [Aarsh Desai](https://www.linkedin.com/in/aarsh-desai-5953b0277/)
- Email: [aarshdesai004@gmail.com](mailto:aarshdesai004@gmail.com)
