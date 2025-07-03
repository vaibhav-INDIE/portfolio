import { Metadata } from 'next';
import React from 'react'; // Good practice, though often implicit in Next.js

export const metadata: Metadata = {
  title: "Diabetes Prediction System | Vaibhav's Portfolio",
  description: 'An interactive diabetes prediction system using machine learning and rigorous EDA.',
};

// An array for the tech stack to make it easy to manage
const techStack = ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'EDA', 'Machine Learning'];

// A reusable component for our consistent heading style
const SectionHeader = ({ title, level = 2, className = '' }: { title: string; level?: 1 | 2 | 3 | 4 | 5 | 6; className?: string }) => {
  // Create a type for valid heading elements
  type HeadingTag = `h${1 | 2 | 3 | 4 | 5 | 6}`;
  const Tag = `h${level}` as HeadingTag;
  const textSize = level === 2 ? 'text-2xl' : 'text-xl';

  return (
    <div className={`inline-block ${className}`}>
      <Tag className={`${textSize} font-bold`}>{title}</Tag>
      {/* --- MODIFIED LINE: Changed to-blue-500 to to-purple-500 --- */}
      <div className="mt-2 h-1 w-full rounded-full bg-gradient-to-r from-purple-400 to-purple-600" />
    </div>
  );
};


export default function DiabetesPredictionPage() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-16"> {/* Added more bottom padding */}
      {/* Main Page Title */}
      <h1 className="text-3xl font-bold mb-4">Diabetes Prediction System</h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
        A Machine Learning system for predicting diabetes risk based on medical records, featuring in-depth Exploratory Data Analysis.
      </p>
      
      {/* The embedded Streamlit App */}
      <div className="w-full h-[700px] rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
        <iframe
          src="https://diabetes-prediction-eda-itapaipebuqpvkagcp6v8e.streamlit.app/?embed=true&theme=dark"
          width="100%"
          height="100%"
          className="border-0"
          title="Diabetes Prediction App"
          allowFullScreen
        />
      </div>

      {/* GitHub Link Button */}
      <div className="mt-8">
        <a
          href="https://github.com/vaibhav-INDIE/Diabetes-Prediction-EDA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors font-semibold"
        >
          View on GitHub
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
      
      {/* --- NEW SECTION: Project Overview --- */}
      <div className="mt-16">
        <SectionHeader title="Project Overview" level={2} className="mb-6" />
        
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8 text-gray-700 dark:text-gray-300">
            <h3 className="text-xl font-semibold">The Challenge</h3>
            <p>
              Raw medical datasets are often noisy and contain illogical values—such as zero for blood pressure or glucose levels—which can severely mislead a machine learning model. Building a reliable predictive system requires a robust method to handle these data anomalies before training.
            </p>
            <h3 className="text-xl font-semibold mt-6">The Solution</h3>
            <p>
              This project emphasizes rigorous Exploratory Data Analysis (EDA) to uncover and address data quality issues. K-Means clustering was employed to intelligently impute invalid zero-values, replacing them with more realistic estimates based on patient groupings. This cleaned and engineered data was then used to train and evaluate multiple models, including L1-Regularized Regression and Voting Ensembles, resulting in a more accurate and trustworthy prediction system.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
            {/* Key Features */}
            <div>
                <SectionHeader title="Key Features" level={3} className="mb-4" />
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>EDA-driven cleaning of invalid medical records.</li>
                    <li>K-Means clustering for intelligent data imputation.</li>
                    <li>Feature engineering and binning for better generalization.</li>
                    <li>High F1-score and ROC-AUC achieved across models.</li>
                    <li>Interactive prediction interface built with Streamlit.</li>
                </ul>
            </div>
            {/* Technology Stack */}
            <div>
                <SectionHeader title="Technology Stack" level={3} className="mb-4" />
                <div className="flex flex-wrap gap-3">
                    {techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-purple-100/80 text-purple-900 dark:bg-purple-900/40 dark:text-purple-200 text-sm font-medium px-4 py-1.5 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}