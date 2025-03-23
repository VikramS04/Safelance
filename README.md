Safelance - Empowering Transparent & Fair Freelancer Payments

Safelance is a web-based platform designed to streamline freelancer payments by ensuring transparency, security, and fairness. It addresses common challenges faced by freelancers and employers, such as trust issues, payment delays, and inefficient work verification processes. Safelance provides a milestone-based payment system, work verification tools, and a dispute resolution mechanism to foster trust and efficiency.

Features
Core Features
Milestone-Based Payments:

Employers can set payment milestones tied to deliverables or work completion percentages.

Funds are held securely until work is verified and approved.

Work Verification System:

Freelancers can submit work updates for review.

Employers can approve, reject, or request revisions through an intuitive dashboard.

Dispute Resolution Mechanism:

A ticketing system allows freelancers and employers to raise disputes.

Admins can intervene to resolve conflicts fairly.

Technologies Used
Frontend
React.js: For building a dynamic and responsive user interface.

React Router: For seamless navigation between pages.

Axios: For making API requests to the backend.

Backend
Node.js: For server-side logic.

Express.js: For building RESTful APIs.

MongoDB: For database management.

JWT: For secure user authentication.

Installation
Prerequisites
Node.js (v16 or higher)

npm (v8 or higher)

MongoDB Atlas (or a local MongoDB instance)

Steps to Run Locally
Clone the Repository:

bash
Copy
git clone https://github.com/VikramS04/Safelance.git
cd Safelance
Install Dependencies:

bash
Copy
cd client
npm install
cd ../server
npm install
Set Up Environment Variables:

Create a .env file in the server directory and add the following:

env
Copy
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
Run the Application:

Start the backend server:

bash
Copy
cd server
npm start
Start the frontend development server:

bash
Copy
cd client
npm start
Access the Application:

Open your browser and navigate to http://localhost:Port.

Screenshots
Dashboard
Dashboard for tracking milestones and payments.

Work Submission
Freelancer submitting work for review.

Dispute Resolution
Dispute resolution interface for admins.

Contributing
We welcome contributions to Safelance! If you'd like to contribute, please follow these steps:

Fork the repository.

Create a new branch for your feature or bugfix.

Commit your changes.

Push your branch and submit a pull request.

Please ensure your code follows the project's coding standards and includes appropriate tests.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or feedback, feel free to reach out:

Vikram S
GitHub: VikramS04
Email: vikramsaini7723@gmail.com

Acknowledgments
Thanks to all contributors and supporters of this project.

Happy coding! 🚀
