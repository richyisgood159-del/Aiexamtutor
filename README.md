# AI Exam Tutor — visual + AI build

Private-study prototype for the supplied January 2026 Pearson Edexcel IAL Biology Unit 1 papers.

Features:
- Original question-paper pages embedded for every question so diagrams, graphs, tables and photos remain visible.
- Original mark-scheme pages shown after an attempt.
- Text, MCQ and drawing answer modes.
- Drawing canvas with mouse/trackpad/Apple Pencil support, undo and clear.
- AI marking through an OpenRouter key supplied in the browser session.
- Drawing image is sent to the AI for vision marking when the selected free model supports image input.
- Local fallback marker for text/MCQ answers.
- Confidence rating, previous/next navigation, progress, retry flow and on-device autosave using localStorage.
- Original PDFs remain bundled and accessible.

Security note: do not commit an API key to GitHub. The key is entered at runtime and stored only in sessionStorage.

GitHub Pages: upload the *contents* of this folder to the repository root, commit, and Pages will redeploy automatically.
