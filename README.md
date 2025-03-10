# cyber-ai-academy-
# Cyber AI Academy

Cyber AI Academy is a cutting-edge online platform for learning Artificial Intelligence, Machine Learning, Deep Learning, Natural Language Processing, and other advanced topics through interactive video courses and comprehensive notes.

## Features

- **Interactive Video Courses:**  
  Watch high-quality video lectures alongside detailed, well-formatted notes that include headings, code blocks, and more.
  
- **Dynamic Content:**  
  Course details, notes, and video links are fetched dynamically from a Supabase database, making content updates seamless.

- **User Authentication:**  
  Secure signup and login are powered by Supabase Auth, ensuring a safe learning environment.

- **User Profile:**  
  Users can view their profile information along with a personalized motivational thought section.

- **Responsive Design:**  
  Enjoy a seamless learning experience on desktop, tablet, and mobile devices.

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database & Authentication:** Supabase
- **Hosting:** Render

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A Supabase project with authentication and database setup.

### Installation

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/Lnxtanx/cyber-ai-academy-.git
   cd cyber-ai-academy-
Install Dependencies:

sh
Copy
npm install
Configure Environment Variables:

Create a .env file in the root directory and add:

env
Copy
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_public_key
Start the Server:

sh
Copy
node server.js
or for auto-reload during development:

sh
Copy
npx nodemon server.js
Access the Website:

Open your browser and go to http://localhost:3000.

Deployment
This project is deployed on Render. You can access the live site at Cyber AI Academy.

Supabase Setup
Database Tables
Courses Table:
sql
Copy
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    duration INT NOT NULL,
    level TEXT NOT NULL
);
Course Content Table:
sql
Copy
CREATE TABLE course_content (
    id SERIAL PRIMARY KEY,
    course_id INT REFERENCES courses(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    notes TEXT NOT NULL,
    video_url TEXT NOT NULL
);
Users Table (Additional User Data):
sql
Copy
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT auth.uid(),
    full_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT now()
);
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

License
This project is licensed under the MIT License.

Acknowledgements
Supabase
Render
YouTube for video hosting
yaml
Copy

---

### **Final Steps**

1. Save the above `README.md` file in your project root.
2. Use the git commands provided to add, commit, and push your changes to GitHub.
3. Once on GitHub, you can deploy the project to Render as described in your deployment steps.

This README will give visitors a clear understanding of your website, its features, tech stack, and how to get started. Let me know if you need any further assistance!




