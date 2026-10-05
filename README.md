# Aarsh Desai

Applied ML and healthcare AI engineer. I build machine learning and LLM systems for clinical and operational decisions, and I measure them before I trust them.

My work covers three areas: LLM applications with retrieval, agents and guardrails; deep learning on medical signals and images; and the engineering that makes a model usable, such as APIs, tests, deployment and documentation.

[LinkedIn](https://www.linkedin.com/in/aarsh-desai-5953b0277/) | [Email](mailto:aarshdesai004@gmail.com)

---

## Snapshot

- B.S. Data Science, Purdue University (May 2026), with a minor in Economics
- Former AI Product Engineer Intern at Raaz MD, where I built multilingual voice-AI and RAG pipelines that turn clinical calls into structured documentation
- - Healthcare AI projects across ECG deep learning, chest X-ray classification, clinical risk screening and patient-message triage
- LLM systems with labelled evaluation sets, tool-calling agents and code-level guardrails
- Internship experience in healthcare and education analytics: 3,000+ patient records, 50,000+ education records, Tableau dashboards and recurring reports
- No U.S. work visa sponsorship required

---

## Featured Projects

### Healthcare AI

| Project | What it is | Highlights |
|---|---|---|
| [CardioDesk](https://github.com/aarshdesai-ds/cardiodesk-patient-message-assistant) | RAG assistant that triages patient portal messages for a heart clinic and drafts replies for nurse review | Two-layer safety check caught 16 of 16 emergencies on 54 labelled synthetic messages (rules alone 11, model alone 13); a tool-calling agent chose the correct tools in 22 of 22 checked cases; FastAPI and Streamlit, deployed |
| [EchoNext-SHD](https://github.com/aarshdesai-ds/echonext-shd-detection) | Structural heart disease detection from 12-lead ECGs | 82,543 ECGs; 1D-CNN residual ensemble with ECG and clinical feature fusion; 0.842 AUROC and 0.812 AUPRC; calibration, ablations, model card; FastAPI, Docker, Gradio, GitHub Actions |
| [Chest X-Ray Classifier](https://github.com/aarshdesai-ds/chest-xray-classifier) | Multi-label detection of 14 thoracic findings on NIH ChestX-ray14 | 112,120 X-rays; DenseNet-121 transfer learning; 0.797 test macro-AUROC against 0.604 for a from-scratch baseline; patient-level splits, per-class thresholds, Grad-CAM audit, live Streamlit app |
| [Diabetes Risk Screening](https://github.com/aarshdesai-ds/diabetes-prediction) | An end-to-end screening demo built the way a real ML product is | Calibrated Random Forest; 0.84 ROC AUC and 0.74 AUPRC; recall-first threshold, SHAP explanations, model card, tests, CI/CD, Docker |
| [SurgiCare HMS](https://github.com/aarshdesai-ds/surgicare-hms) | Hospital management system for SurgiCare Hospital, in active development | Patients, OPD token queue, operation-theatre scheduling, consultation notes and a live dashboard; FastAPI, React, Supabase with row-level security, CI; English and Gujarati |

### LLM Systems and Evaluation

| Project | What it is | Highlights |
|---|---|---|
| [TriageDesk](https://github.com/aarshdesai-ds/triagedesk-customer-review-assistant) | Customer-review triage with a RAG pipeline and a follow-up agent, where every change was measured | Policy retrieval raised from 32 to 39 of 41 across single-change experiments; agent rebuilt from ReAct to a tool-calling loop, raising tool selection from 18 to 21 of 21; a held-out set showed a remaining gap (3 of 5 urgent cases), reported in the README |

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
- **Choose metrics that fit the problem.** AUROC and calibration for imbalanced clinical data, missed cases counted separately from false alarms.
- **Ship it properly.** An API, tests, a container and a model card or README that states what the system is not for.

---

## Experience

### Raaz MD - AI Product Engineer Intern
Jul 2026 - [end month] 2026

- Built an end-to-end multilingual voice-AI pipeline that transcribes and translates Hindi health-coaching calls into structured clinical summaries, using RAG with ChromaDB for patient-history retrieval and a locally hosted 4-bit quantized Mistral-7B model
- Developed a call-type routing system that separates clinical follow-ups from logistics escalations, reducing manual review time
- Implemented reliability safeguards: plausibility guardrails to catch LLM hallucinations, and a PII de-identification layer with NER-based redaction and phone-number pseudonymization

---

## Technical Skills

**LLM and GenAI:** LangChain, RAG, tool-calling agents, structured output, prompt design, guardrails, LLM evaluation, ChromaDB, OpenAI and Gemini APIs, LangGraph (in progress)

**Machine Learning:** PyTorch, TensorFlow/Keras, scikit-learn, transfer learning, CNNs for signals and images, probability calibration, threshold tuning, Grad-CAM, SHAP, hypothesis testing

**Engineering:** Python, SQL, FastAPI, Pydantic, Docker, GitHub Actions, pytest, Streamlit, Gradio, Hugging Face Spaces, React, Supabase and PostgreSQL

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
