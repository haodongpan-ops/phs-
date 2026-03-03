import { GoogleGenAI } from "@google/genai";

// This assumes that process.env.API_KEY is replaced by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const findSolution = async (query: string) => {
  const productList = `
    - PowerAcuity ProKaryo: Primarily used for "Human Genetics (chromosome/bone marrow analysis)".
    - PowerAcuity PathView: Primarily used for "Digital Pathology (clinical & research)".
    - PowerAcuity MetaLux: Primarily used for "Industrial Surface Inspection (steel, semiconductor)".
    - PowerAcuity VetScan: Primarily used for "Veterinary Diagnostics".
    - PowerAcuity AgriSight: Primarily used for "Agricultural Analysis (grain spores/seed testing)".
    - PowerAcuity EcoSight: Primarily used for "Environmental Monitoring (plankton/microplastics)".
  `;

  const prompt = `
    You are an expert AI assistant for PowerAcuity, a high-tech imaging and AI company.
    A potential customer is asking for a solution for their needs.
    Based on the user's query and the following list of our products, identify the single best product to recommend.
    The user's query can be in any language.
    
    Our Products:
    ${productList}

    User's Query: "${query}"

    Your Task:
    1.  Analyze the user's query.
    2.  Select the most relevant product from the list.
    3.  Provide a short, 1-2 sentence explanation in English for why this product is the best fit.
    4.  Format your response EXACTLY as follows, with no extra text or pleasantries:
        RECOMMENDED_PRODUCT_NAME: Your explanation here.
    
    Example response format:
    PowerAcuity VetScan: This solution is ideal for veterinary diagnostics, which matches your need to analyze animal tissue samples.
  `;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
    });
    return response.text.trim();
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(error.message);
    }
    throw new Error("An unknown error occurred while analyzing your request.");
  }
};
