// Exam Tutor AI configuration
window.EXAM_TUTOR_AI = {
  provider: 'openrouter',
  endpoint: 'https://openrouter.ai/api/v1/chat/completions',
  // Fixed free multimodal model: avoids random-model inconsistency from openrouter/free.
  model: 'google/gemma-4-31b-it:free'
};
