import { GoogleGenAI } from "@google/genai";
import { AiItineraryRequest } from "../types";

// Fix: Use process.env.API_KEY as per Google GenAI guidelines and to resolve ImportMeta error
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateItinerary = async (request: AiItineraryRequest): Promise<string> => {
  const model = "gemini-2.5-flash";
  const prompt = `
    Act as an expert travel guide for Cartagena, Colombia.
    Create a concise, exciting ${request.days}-day itinerary for a trip.
    The traveler's budget is ${request.budget}.
    Their main interests are: ${request.interests.join(', ')}.
    
    Format the output with Markdown. Use bold headings for days (e.g., **Day 1: Arrival & History**).
    Keep descriptions brief and punchy suitable for a mobile screen.
    Include 1 restaurant recommendation per day.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
    return response.text || "Sorry, I couldn't generate an itinerary at this moment.";
  } catch (error) {
    console.error("Error generating itinerary:", error);
    return "An error occurred while communicating with the AI travel assistant.";
  }
};