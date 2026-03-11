export const resumeData = {
  "basics": {
    "name": "Shubham Limbachiya",
    "photo": "https://github.com/SL-025/Portfolio/blob/main/src/DSC07409(2).JPG",
    "title": "AI Developer | Python & ML Enthusiast | NLP | Web Dev | Data Science | Deep Learning | LLMs",
    "summary": "AI and ML developer with experience in building and deploying ML and GenAI applications across Python, NLP, REST APIs and computer vision. Built multiple end-to-end projects introducing an Interpretability Stability Score (ISS) to quantify Grad-CAM robustness under perturbations and production style AI agents on NeuralSeek. Strong in Python, model evaluation, data handling, and communicating results to technical and non-technical stakeholders.",
    "location": "St Louis, Missouri, United States",
    "email": "lshubham65@gmail.com",
    "phone": "314-906-5180",
    "links": [
      { "name": "LinkedIn", "url": "https://www.linkedin.com/in/shubham-limbachiya" },
      { "name": "GitHub", "url": "https://github.com" }
    ]
  },
  "experience": {
    "technical": [
      {
        "company": "NeuralSeek (CerebralBlue)",
        "role": "AI Agent Developer Intern",
        "dates": "Sept 2025 - Nov 2025",
        "location": "St. Louis, MO Remote",
        "bullets": [
          "Planned and deployed a multi-step AI agent workflow on NeuralSeek to generate student specific cover letters from job descriptions and user profile inputs, improving usability by reducing manual drafting 60%.",
          "Built and iterated on AWS Bedrock using Python (boto3, JSON). Implemented prompt patterns and lightweight guardrails. Created baseline ML experiments in Python to sanity check data and establish simple performance benchmarks."
        ],
        "metrics": ["60% reduction in manual drafting"]
      },
      {
        "company": "Evenuefy Inc",
        "role": "Python and AI Developer Intern",
        "dates": "Feb 2024 - Jul 2024",
        "location": "Ahmedabad, India",
        "bullets": [
          "Developed a recommendation engine using Python and scikit-learn, increasing user satisfaction by 30%.",
          "Optimized NLP pipelines with SpaCy to reduce query time by 40%.",
          "Collaborated with product and dev teams in Agile sprints to deliver features on time.",
          "Built scalable backend systems using REST APIs for AI-powered user interactions.",
          "Gained real-world experience building production-ready AI components."
        ],
        "metrics": ["30% increase in user satisfaction", "40% reduction in query time"]
      },
      {
        "company": "Bharti Soft Tech Pvt. Ltd.",
        "role": "Data Science Intern",
        "dates": "Jan 2024 - Feb 2024",
        "location": "Vadodara, India",
        "bullets": [
          "Designed and implemented an AI-based internal search tool that reduced research time by 20%.",
          "Created a searchable knowledge base using NLTK and Enchant for internal document navigation.",
          "Participated in iterative user testing and integrated real-time feedback.",
          "Learned fundamentals of enterprise data systems and AI content retrieval."
        ],
        "metrics": ["20% reduction in research time"]
      }
    ],
    "leadership_ops": [
      {
        "company": "Saint Louis University",
        "role": "Building Supervisor",
        "dates": "June 2025 - Present",
        "location": "St Louis, Missouri, United States",
        "bullets": [
          "Ensure the Recreation Center maintains the highest standards by prioritizing safety, supporting smooth operations, managing memberships, providing assistance, and supervising all tasks with attention to quality."
        ]
      },
      {
        "company": "Saint Louis University",
        "role": "Operation Assistant",
        "dates": "April 2025 - Present",
        "location": "St Louis, Missouri, United States",
        "bullets": [
          "Assisted in daily operations at the Simon Recreation Center, ensuring smooth facility workflow, effective coordination of resources and a safe, welcoming environment for all patrons."
        ]
      },
      {
        "company": "Saint Louis University",
        "role": "Lifeguard",
        "dates": "November 2024 - Present",
        "location": "St Louis, Missouri, United States",
        "bullets": [
          "Ensured a safe aquatic environment by enforcing pool rules and emergency protocols."
        ]
      },
      {
        "company": "Excelerate",
        "role": "Business Strategy Intern",
        "dates": "Feb 2025 - Mar 2025",
        "location": "Virtual",
        "bullets": [
          "Conducted user research and competitor benchmarking to enhance platform UX.",
          "Delivered strategy recommendations improving feature adoption and learner satisfaction."
        ]
      },
      {
        "company": "Excelerate",
        "role": "Digital Strategy Associate Intern",
        "dates": "Jan 2025 - Feb 2025",
        "location": "Virtual",
        "bullets": [
          "Audited digital assets and utilized RACE Framework (Reach, Act, Convert, Engage) to identify growth.",
          "Proposed a strategy roadmap aligning with KPIs and digital engagement goals."
        ]
      },
      {
        "company": "STUDENTS' CENTRAL COMMITTEE, SVIT-VASAD",
        "role": "Vice General Secretary",
        "dates": "March 2023 - March 2024",
        "location": "Vasad, India",
        "bullets": [
          "Overseeing the planning and execution of both technical and non-technical events, including college fests and awareness programs. Collaborated with faculty and student teams to ensure smooth event operations, while promoting a safe, inclusive, and disciplined campus environment."
        ]
      }
    ]
  },
  "achievements": [
    { "item": "Reduced manual drafting by 60% using multi-step AI agent workflow", "context": "NeuralSeek" },
    { "item": "Increased user satisfaction by 30% with event recommendation engine", "context": "Evenuefy" },
    { "item": "Reduced query processing time by 40% through NLP pipeline optimization", "context": "Evenuefy" },
    { "item": "Reduced research time by 20% for internal stakeholders", "context": "Bharti Soft Tech" },
    { "item": "Developed ArchAlert platform enabling 40-60% faster hotspot identification", "context": "Project ArchAlert" },
    { "item": "Achieved ~84% accuracy with MobileViT-S on CIFAR-10", "context": "Explainable AI Project" }
  ],
  "projects": [
    {
      "title": "ArchAlert (Urban Safety Awareness Web App)",
      "stack": "Next.js, React, TypeScript, FastAPI (Python), REST APIs, Leaflet, Recharts, Docker, Hugging Face",
      "date": "Feb 2026",
      "bullets": [
        "A full-stack urban safety intelligence platform using GIS maps transforming live & historical incident data into interactive risk-awareness dashboards.",
        "Engineered geospatial risk-tile analytics and AI-assisted narrative insights, enabling users to identify hotspot zones up to 40–60% faster for improved situational awareness and decision-making.",
        "Focused on proactive public-safety awareness — combining data visualization, optional LLM summarization, and UX-driven dashboards to enhance community safety understanding without predictive bias."
      ],
      "links": [{ "name": "GitHub", "url": "https://github.com" }]
    },
    {
      "title": "Explainable AI in Edge-Deployed Classification (ISS + Grad-CAM)",
      "stack": "PyTorch, timm, OpenCV, scikit-image, Docker, Gradio",
      "date": "Aug 2025 – Dec 2025",
      "bullets": [
        "Designed and applied Interpretability Stability Score (ISS), a metric that quantifies Grad-CAM explanation stability under controlled perturbations while predictions remain unchanged.",
        "Trained and evaluated MobileNetV2, MobileNetV3-Small(CNN) and MobileViT-S (Vision Transformer) on CIFAR-10; achieved ~84% accuracy with MobileViT-S and reported ISS values revealing explanation instability not visible from just the accuracy alone.",
        "Packaged workflow with Docker, reproducible scripts and a Gradio demo for CPU-based inference and explanation generation."
      ],
      "links": [{ "name": "GitHub", "url": "https://github.com" }, { "name": "Demo", "url": "https://huggingface.co" }]
    },
    {
      "title": "AssistAIve (AI Tools Recommender Chatbot)",
      "stack": "Python, Flask, SpaCy, NLTK, SciKit-Learn",
      "date": "Dec 2024 – Mar 2025",
      "bullets": [
        "Built a chatbot that recommends relevant AI tools based on user intent and keywords using NLP preprocessing and intent routing.",
        "Executed a lightweight backend with Flask and structured tool metadata for fast retrieval and response generation."
      ],
      "links": [{ "name": "GitHub", "url": "https://github.com" }]
    },
    {
      "title": "Pandeyji Eatery (Food Delivery Management System)",
      "stack": "Python, Chatbot",
      "bullets": [
        "Developed a chatbot for real-time order tracking, payments and support, aimed at reducing customer service response times by 40%."
      ]
    }
  ],
  "skills": {
    "languages": ["Python", "Java", "C", "HTML", "SQL"],
    "ml_ai": ["SciKit-learn", "PyTorch", "TensorFlow", "Keras", "NLP (SpaCy, NLTK)", "CNN", "Vision Transformers"],
    "computer_vision": ["OpenCV", "Grad-CAM", "SSIM (scikit-image)", "model interpretability"],
    "data": ["Pandas", "NumPy", "Matplotlib", "SQL"],
    "tools": ["Git/GitHub", "Docker", "Gradio (Hugging Face)", "JIRA", "Power BI", "DialogFlow"],
    "platforms": ["Windows", "Linux", "MacOS"],
    "domains": ["Artificial Intelligence", "GenAI", "AI Agents", "MLOps", "Deep Learning", "NLP", "Agile/Scrum"],
    "soft_skills": ["Team Leadership", "Communication", "Agile Collaboration", "Time Management"]
  },
  "education": [
    {
      "institution": "Saint Louis University",
      "degree": "Master of Science in Artificial Intelligence",
      "dates": "Expected May 2026",
      "gpa": "3.88/4.00"
    },
    {
      "institution": "Gujarat Technological University",
      "degree": "Bachelor of Engineering in Information Technology",
      "dates": "June 2024",
      "gpa": "3.7/4.00"
    },
    {
      "institution": "Agasti Education",
      "degree": "High School Certificate",
      "dates": "June 2019"
    },
    {
      "institution": "Lions international Academy",
      "degree": "Secondary School Certificate",
      "dates": "June 2017 - June 2018"
    }
  ],
  "certifications": [
    "AI for India 2.0 – GUVI, Aug 2023",
    "Face Recognition App in Python – GUVI, Apr 2021",
    "NeuralSeek (1)AI Agents Foundation, (2)Agentic AI for Business and (3)Multi-tier AI Agent Architecture",
    "Python Programming",
    "AI for India",
    "Build a Face Recognition Application using Python"
  ],
  "research": [
    {
      "title": "AI Security",
      "description": "Researching vulnerabilities in intelligent systems and publishing mitigation approaches.",
      "date": "Targeted publication: 2026"
    }
  ],
  "extra": [
    "GPA: 3.88/4.00 (MS), 3.7/4.00 (BE)",
    "Open to Internships & Full-Time Roles",
    "Languages: English (Professional Working), Gujarati (Professional Working), Hindi (Professional Working)",
    "Top Skills: Large Language Models (LLM), Amazon Web Services (AWS), Prompt Engineering",
    "AI Focus Areas: Chatbots, Recommendation Engines, NLP, AI Security",
    "Web Skills: HTML, CSS, Flask APIs"
  ]
}
