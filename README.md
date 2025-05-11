Sauce Demo Automation Project
This project contains automated test cases for validating the functionality of the Sauce Demo web application. The tests are written using WebDriverIO, with Mocha as the test runner and Allure for reporting.

✅ Test Scenarios
Q1 – Locked Out User Login (20 Marks)
Try logging in with locked_out_user.

Verify the error message shown.

Q2 – Standard User Shopping Journey (50 Marks)
Log in with standard_user.

Reset App State via hamburger menu.

Add any three products to the cart.

Go to checkout and verify product names and total price.

Finish the purchase and verify success message.

Reset App State again and log out.

Q3 – Performance Glitch User (30 Marks)
Log in with performance_glitch_user.

Reset App State.

Filter products by name (Z to A) and select the first one.

Proceed to checkout and verify product name and total price.

Finish the order and verify success message.

Reset App State and log out.

🧰 Tech Stack
Language: JavaScript

Framework: WebDriverIO

Test Runner: Mocha

Reporter: Allure

Assertion Library: Chai

🚀 Setup Instructions
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/saucedemo-automation.git
cd saucedemo-automation
2. Install dependencies
bash
Copy
Edit
npm install
3. Run Tests Individually
bash
Copy
Edit
# Run Q1 only
npx wdio run wdio.conf.js --suite q1

# Run Q2 only
npx wdio run wdio.conf.js --suite q2

# Run Q3 only
npx wdio run wdio.conf.js --suite q3
4. Run All Tests Together (Sequential)
bash
Copy
Edit
npx wdio run wdio.conf.js
5. Generate Allure Report
bash
Copy
Edit
# After running tests
npx allure generate allure-results --clean -o allure-report
npx allure open
🧾 Folder Structure
bash
Copy
Edit
saucedemo-automation/
│
├── test/
│   ├── specs/
│   │   ├── q1_locked_out_user.spec.js
│   │   ├── q2_standard_user_flow.spec.js
│   │   └── q3_performance_user.spec.js
│
├── wdio.conf.js
├── package.json
├── .gitignore
└── README.md
📝 Notes
The .gitignore includes:

node_modules

package-lock.json

Please ensure that you push all code to a public GitHub repository and share the link for evaluation.

All tests are expected to run independently and sequentially, with Allure reports generated after each run.
