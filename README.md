# webEngageAssignment 
# Onsite Survey Web App (Task 1)

This is a 2-page mobile responsive onsite survey web app that captures user input and displays it on a thank you page. The survey collects the user's email address, mobile number, and country code.

**deployed Link:** https://web-engage-hemant.netlify.app/

## Table of Contents

- [webEngageAssignment](#webengageassignment)
- [Onsite Survey Web App (Task 1)](#onsite-survey-web-app-task-1)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Validation](#validation)
- [Nunjucks Data Rendering Project (Task 2)](#nunjucks-data-rendering-project-task-2)
  - [Features](#features-1)
  - [Installation](#installation-1)
  - [Usage](#usage-1)
  - [Customization](#customization)
  - [Deployment](#deployment)
  - [Credits](#credits)

## Project Overview

The goal of this project is to create a mobile responsive onsite survey web app that captures user input, validates it, and displays a thank you message with the collected data on a second page.

**Project Deployed Link:** https://nunjucks.onrender.com/

## Features

- Collects user's email address, mobile number, and country code.
- Validates email address format and length.
- Validates mobile number length and format.
- Displays custom error messages for invalid inputs.
- Renders user input on the thank you page.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Web browser
- Text editor for code editing

### Installation

1. Clone this repository to your local machine.
2. Open the Task1 folder in your preferred text editor.
3. Open the `index.html` file from Task1 folder, in a web browser.

## Usage

1. On the first page, provide your email address, mobile number, and select the country code.
2. Click the "TALK TO US" button.
3. If any input is missing or invalid, error messages will be displayed.
4. Upon successful submission, you will be redirected to the thank you page with the rendered user data.

## Validation

- Email address must be in a valid format.
- Mobile number must be exactly 10 digits.
- Custom error messages are displayed for invalid inputs.


# Nunjucks Data Rendering Project (Task 2)

This project demonstrates the use of the Nunjucks templating engine to generate dynamic HTML content based on JSON data retrieved from an external API. The application fetches user data from the JSONPlaceholder API and displays various user-related information using conditional rendering and data manipulation.

## Features

- Utilizes Nunjucks templating engine for dynamic content generation.
- Fetches user data from JSONPlaceholder API.
- Performs conditional rendering and data manipulation for organized content presentation.
- Renders the content on a local server for easy access.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/hemantjayas/webEngageAssignment

2. navigate to the Task2 Directory
   ```bash
   cd Task2
   ```
3. Install project dependencies:
   ```bash
   npm install
   ```
4. Start the local server:
   ```bash
   npm start
   ```
  The application will be accessible at http://localhost:3000.

## Usage

1. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the application.
   
2. The application will fetch user data from the JSONPlaceholder API and render it using Nunjucks templates.

3. Explore different sections on the rendered page:
   - Users with even IDs along with their name, username, and email.
   - Address details based on IDs including suite, street, city, and zipcode.
   - Users with email addresses ending in `.biz` along with their names and emails.
   - Users from specific cities with city names, zipcodes, and geographic coordinates.
   - `CatchPhrase` field shortened to a maximum of 15 characters.

## Customization

- Adjust conditional statements and data manipulations in the Nunjucks template (`users.njk`) as needed.
- Modify the Axios API request URL to fetch data from a different source.
- Customize styling by editing the provided CSS or adding your own.

## Deployment

To deploy the project, consider using various hosting options like shared hosting, cloud services, or platforms like Render.

## Credits

- JSONPlaceholder API: [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)
- Nunjucks Templating Engine: [https://mozilla.github.io/nunjucks](https://mozilla.github.io/nunjucks)
- Axios HTTP Client: [https://axios-http.com](https://axios-http.com)