// app/diabetes-prediction/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diabetes Prediction App | Your Name',
  description: 'Interactive diabetes prediction system using machine learning',
};

export default function DiabetesPredictionPage() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-8">
      <h1 className="text-3xl font-bold mb-6">Diabetes Prediction System</h1>
      <p className="mb-6 text-lg">
        A Machine Learning system for predicting diabetes risk based on medical records. This is not a Professional Project, it is just for fun.
      </p>
      
      <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://diabetes-prediction-eda-itapaipebuqpvkagcp6v8e.streamlit.app/?embed=true"
          width="100%"
          height="100%"
          className="border-0"
          title="Diabetes Prediction App"
          allowFullScreen
        />
      </div>

      <div className="mt-6">
        <a
          href="https://github.com/vaibhav-INDIE/Diabetes-Prediction-EDA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          View on GitHub
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}