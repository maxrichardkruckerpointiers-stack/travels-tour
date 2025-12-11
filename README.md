# Cartagena Magica 🇨🇴✨

**Experience the Magic Behind the Walls.**

Cartagena Magica is a modern, high-conversion landing page designed to promote tourism in Cartagena de Indias, Colombia. Built with a mobile-first approach, it seamlessly blends immersive visual storytelling with practical utility, featuring an **AI-powered trip planner** driven by Google's Gemini API.

![Project Banner](https://picsum.photos/id/1047/800/400)

## 🚀 Key Features

*   **🤖 AI Itinerary Planner**: A smart travel assistant using the **Gemini 2.5 Flash** model to generate personalized day-by-day itineraries based on budget, interests, and trip duration.
*   **📱 Mobile-First Design**: Fully responsive layout optimized for tourists browsing on smartphones.
*   **🎨 Immersive UI**: Full-screen hero section, sticky navigation, and high-quality imagery reflecting the vibrant culture of Cartagena.
*   **🔍 Filterable Experiences**: Interactive catalog of tours categorized by Culture, Beach, Nightlife, and Gastronomy.
*   **🗺️ Interactive Map**: Visual exploration of iconic landmarks like the Clock Tower and Castillo San Felipe.
*   **📝 Lead Generation**: Integrated booking inquiry form with validation and simulated CRM submission.
*   **⚡ High Performance**: Built with React 19 and Tailwind CSS for fast load times and smooth transitions.

## 🛠️ Tech Stack

*   **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (via CDN), [Lucide React](https://lucide.dev/) (Icons)
*   **AI Integration**: [Google GenAI SDK](https://www.npmjs.com/package/@google/genai) (Gemini API)
*   **Formatting**: React Markdown

## 🏁 Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn
*   A [Google AI Studio](https://aistudio.google.com/) API Key.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/cartagena-magica.git
    cd cartagena-magica
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment**
    Create a `.env` file in the root directory:
    ```env
    VITE_API_KEY=your_google_gemini_api_key_here
    ```

4.  **Run the application**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## ☁️ Deployment on Vercel

1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Import the project into Vercel.
3.  Vercel will automatically detect the Vite settings.
4.  **Crucial Step**: In the Vercel Project Settings > **Environment Variables**, add:
    *   **Key**: `API_KEY` (or `VITE_API_KEY`)
    *   **Value**: Your actual Google Gemini API Key.
5.  Click **Deploy**.

## 📂 Project Structure

```
/
├── components/         # Reusable UI components
│   ├── AiPlanner.tsx   # Modal for AI itinerary generation
│   ├── Experiences.tsx # Filterable tour cards
│   ├── Hero.tsx        # Main landing section
│   ├── MapSection.tsx  # Interactive points of interest
│   └── ...
├── services/
│   └── geminiService.ts # Logic for calling Google Gemini API
├── constants.ts        # Static data (Tours, Testimonials, Map Points)
├── types.ts            # TypeScript interfaces
├── App.tsx             # Main application layout
├── index.tsx           # Entry point
└── index.html          # HTML template
```

## 🧠 AI Integration Details

The project utilizes the `@google/genai` SDK to provide real-time travel advice.

- **Model**: `gemini-2.5-flash` is used for its speed and efficiency, perfect for interactive web tools.
- **Prompt Engineering**: The system uses a specialized prompt to act as an expert local guide, returning Markdown-formatted itineraries that include specific restaurant recommendations and daily activities.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

*Desarrollado con ❤️ para Cartagena.*