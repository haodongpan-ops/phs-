import { GoogleGenAI } from "@google/genai";
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generate() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: 'A professional, high-quality, cinematic photograph of the iconic traditional red gate of Shanghai Jiao Tong University (SJTU) on a beautiful sunny day. Clear blue sky, lush green trees around. 8k resolution, photorealistic, architectural photography.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        }
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        fs.writeFileSync('./public/sjtu-gate.png', Buffer.from(base64EncodeString, 'base64'));
        console.log('Image saved to ./public/sjtu-gate.png');
        break;
      }
    }
  } catch (error) {
    console.error("Error generating image:", error);
  }
}

generate();
