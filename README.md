# HisabHero 🚀

**HisabHero** (formerly FinSight) is a powerful, AI-driven financial dashboard specially designed for small and medium enterprises (SMEs). 

It allows business owners to seamlessly track their cash flow, analyze expense anomalies, parse complex PDF bank statements into usable metrics, and converse natively with a state-of-the-art **Global Floating AI Assistant**.

---

## 🌟 Key Features

1. **PDF Bank Statement Processing:** Upload massive, unformatted bank statement PDFs, and let the robust Google Gemini 2.5 Flash pipeline instantly extract, classify, and visualize the tabular transactional data into your application.
2. **Context-Aware AI Assistant:** Ask your data questions. HisabHero features a floating, global AI Chatbot that natively understands your *live* dashboard context—it can tell you your current runway, your biggest expense categories, and automatically flag financial anomalies.
3. **Advanced Visualizations:** Track the health of your SME visually using detailed cash-flow charts, pie charts, metric read-outs, and a global "Business Health Score".
4. **CSV Bulk Uploading & Smart Mapping:** Map and ingest hundreds of legacy transaction records instantly.

---

## 🛠 Tech Stack

- **Frontend:** React, Vite, TypeScript, Tailwind CSS, Recharts, Lucide-React
- **Backend:** Node.js, Express.js (REST API)
- **AI Engine:** `@google/genai` (powered by **Gemini 2.5 Flash**)

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/MasterRohitPatil/finsight_jsonversion.git
cd finsight_jsonversion
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
You MUST configure the Google Gemini Large Language Model for the AI extraction and Chatbot features to function correctly. 
1. Create a `.env` file in the root directory.
2. Add your API Key inside the file:
```env
GEMINI_API_KEY="AIzaSyYourKeyHere..."
```

### 4. Run the Application
You need to run both the Frontend Vite Server and the Backend Express Server simultaneously.

**Start the Vite Frontend:**
```bash
npm run dev
```

**Start the Express Backend:**
```bash
npm run server
```

The frontend will be available at `http://localhost:8080` (or the port specified by Vite in your console) and the backend natively runs on `http://localhost:5000`.

---

## 🤝 Contribution & Maintenance
This repository was developed during a high-speed hackathon environment, focusing on delivering an extremely high-quality, fully integrated AI Financial Analyst MVP.
