// handler
import { HfInference } from "@huggingface/inference";

const HF_ACCESS_TOKEN = "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";

const inference = new HfInference(HF_ACCESS_TOKEN);

export default async function handler(req, res) {
  const { text, lang } = req.body;

  // Map the languages to the correct models
  const languageModels = {
    "en-es": "Helsinki-NLP/opus-mt-en-es",
    "en-de": "Helsinki-NLP/opus-mt-en-de",
    "en-fr": "Helsinki-NLP/opus-mt-en-fr",
    "en-ru": "Helsinki-NLP/opus-mt-en-ru", 
    "en-zh": "Helsinki-NLP/opus-mt-en-zh", 
     "en-ja": "Helsinki-NLP/opus-mt-en-ja", 
     "en-ko": "Helsinki-NLP/opus-mt-en-ko", 
     "en-it": "Helsinki-NLP/opus-mt-en-it",
     "en-pt": "Helsinki-NLP/opus-mt-en-pt", 
     "en-ar": "Helsinki-NLP/opus-mt-en-ar", 
     "en-hi": "Helsinki-NLP/opus-mt-en-hi", 
     "en-id": "Helsinki-NLP/opus-mt-en-id", 
    // Add more models as needed
  };

  const translationResponse = await inference.translation({
    model: languageModels[lang], // Select the model based on the language
    inputs: text,
  });

  // Return the results
  res.status(200).json({
    translation_text: translationResponse.translation_text,
  });
}
