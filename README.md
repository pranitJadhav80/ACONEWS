**AcoNews**

AcoNews is a React-based news application that fetches the latest news articles using the zNews.io API. The app features a responsive design with dynamic keyword search and is deployed on Firebase.

**Features**

1. Fetches live news articles from the zNews.io API.
2. Responsive design for mobile, tablet, and desktop views.
3. Dynamic keyword search to filter news based on topics of interest.
4. Deployed using Firebase Hosting for fast and secure delivery.

**Prerequisites**

To run this project, you will need:

1. Node.js and npm (Node Package Manager)
2. A Firebase account for hosting
3. A zNews.io API key to fetch the latest news

**Installation**

1. Clone the Repository
git clone https://github.com/your-username/aconews.git
cd aconews
2. Install Dependencies
Make sure you have Node.js installed. Run the following command to install all necessary dependencies:
npm install
3. Set Up the API
Go to zNews.io and create an account to get your API key.
Create a .env file in the root of your project and add the API key:
REACT_APP_NEWS_API_KEY=your_znews_api_key
4. Run the Application Locally
To test the application on your local machine:
npm start
The app will run at http://localhost:3000.

**Project Structure**

├── public                  # Static public files
├── src
│   ├── components          # React components (e.g., NewsItem, NewsList)
│   ├── services            # API integration for fetching news
│   ├── App.js              # Main application entry point
│   ├── index.js            # React DOM entry point
│   └── styles              # CSS and styling files
├── .env                    # Environment variables (API keys, etc.)
└── package.json            # Project metadata and dependencies

**Key Components**

NewsItem: Displays individual news articles.
NewsList: Shows a list of news articles.
SearchBar: Enables users to search news by keywords.

**Deployment**

1. Install Firebase CLI
To deploy the project on Firebase, you need the Firebase CLI installed:
npm install -g firebase-tools
2. Login to Firebase
firebase login
3. Initialize Firebase in Your Project
Navigate to the project directory and initialize Firebase:
firebase init
Choose Hosting and select the default options.
Choose build as the public directory for deployment.
4. Build Your Project for Production
Before deploying, you need to create a production build of your app:
npm run build
5. Deploy to Firebase
Deploy the built project to Firebase Hosting:
firebase deploy
Your app will be deployed, and Firebase will provide a live URL for your project.

**Pushing Code to GitHub**

1. Initialize a Git Repository
If you haven't already, initialize your Git repository:
git init
2. Add Files and Make a Commit
git add .
git commit -m "Initial commit of AcoNews React app"
3. Create a GitHub Repository
Go to GitHub and create a new repository. Then add the remote origin and push your code:
git remote add origin https://github.com/your-username/aconews.git
git push -u origin master

Access the App website on https://aconews24.web.app/
