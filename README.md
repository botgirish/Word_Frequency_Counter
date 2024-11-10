# Word_Frequency_Counter

Here's a step-by-step guide to save and run this project in VSCode:

Prerequisites
Install Node.js from Node.js Downloads.
Install VSCode if you haven't already from Visual Studio Code.
Step 1: Set Up the Project Folder
Create a New Folder:

Go to your file explorer, and create a folder for this project, for example, WordFrequencyApp.
Open the Folder in VSCode:

Open VSCode.
Go to File > Open Folder and select the WordFrequencyApp folder.
Step 2: Initialize the Backend (Express Server)
Open the Terminal in VSCode:

Go to Terminal > New Terminal or press Ctrl + (backtick) to open a terminal in VSCode.
Initialize Node Project:

In the terminal, run:

# npm init -y
This creates a package.json file to manage your project dependencies.
Install Dependencies:

Install express and axios cheerio and Puppeteer by running:

# npm install express Puppeteer axios cheerio
Optional (for development): Install nodemon to auto-restart the server:

# npm install nodemon --save-dev
Create the Server File:

In the WordFrequencyApp folder, create a file named server.js.
Copy and paste the backend code from above into server.js.
Edit package.json for nodemon (optional):

Open package.json.
Under "scripts", add:
# "start": "nodemon server.js"
This allows you to start the server with npm start.
Run the Server:

In the terminal, start the server by running:

# npm start
Your server should now be running on http://localhost:5000.
Step 3: Set Up the Frontend (React App)
Open a New Terminal Tab in VSCode:

Open a new terminal tab (to keep the backend running) by clicking the + symbol in the terminal pane.
Create React App:

Inside the WordFrequencyApp folder, run:

# npx create-react-app client
This creates a React app in a client folder inside your project.
Install Axios in the React App:

Go into the client folder by running:

# cd client
Install axios for making API requests:

# npm install axios
Replace Code in App.js:

Open client/src/App.js.
Delete the existing code, and replace it with the React frontend code provided above.
Update package.json for Proxying Requests:

To make requests from React to the Express server, add a "proxy" field in client/package.json:

# "proxy": "http://localhost:5000"
Run the React App:

In the terminal, start the React app by running:

npm start
This should open the app in your default browser at http://localhost:3000.
Step 4: Test the Application
Input a URL in the frontend input field.
Click Fetch to see the word frequencies displayed in the table.
