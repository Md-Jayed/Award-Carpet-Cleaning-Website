
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCleaningAdvice = async (issue: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User asks for cleaning advice: ${issue}. Provide professional advice as Award Carpet Cleaning. Keep it encouraging but realistic about DIY vs Professional. If it's a difficult stain like red wine, pet urine, or ink, emphasize why professional steam cleaning is better.`,
      config: {
        systemInstruction: "You are the 'Award Carpet Cleaning Expert'. You give friendly, professional advice on carpet, upholstery, and tile maintenance. Mention that professional service is always the safest bet for high-value surfaces.",
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my cleaning knowledge base. Please call us directly for immediate advice!";
  }
};
