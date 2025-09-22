Eco-Tracker: Carbon Footprint Calculator 🌍

A simple, client-side web application to help users estimate their monthly carbon footprint based on their lifestyle choices. The calculator focuses on three key areas: driving, electricity consumption, and diet. It provides immediate feedback, contextual advice, and a visual representation of the user's eco-friendliness.

## ✨ Features

  - **Interactive Calculator**: Users can input their weekly driving distance, monthly electricity usage, and weekly meat consumption.
  - **Instantaneous Results**: Calculates and displays the total monthly carbon footprint in kilograms of CO₂.
  - **Contextual Advice**: Provides simple, encouraging feedback and suggestions for improvement based on the calculated footprint.
  - **Tree Offset Calculation**: Estimates the number of trees that would be needed to absorb the user's monthly carbon emissions over a year.
  - **Visual Feedback**: An "Eco-Friendliness" progress bar that visually represents the user's score—the lower the emissions, the higher the score.
  - **Clean UI**: A simple, green-themed, and easy-to-use interface.
  - **No Backend Needed**: Fully client-side, runs in any modern web browser without needing a server.

## ⚙️ How It Works

The carbon footprint is calculated using simplified emission factors. The total monthly footprint is the sum of emissions from three sources:

1.  **Driving Emissions**: Calculated based on the average emissions for a passenger car.

      - Formula: `(Kilometers driven per week) × 0.21 kg CO₂/km × 4 weeks/month`

2.  **Electricity Emissions**: Calculated based on a general emission factor for electricity generation.

      - Formula: `(kWh used per month) × 0.5 kg CO₂/kWh`

3.  **Dietary Emissions**: Focuses on the impact of meat consumption, a significant contributor to an individual's food-related footprint.

      - Formula: `(Meat-based meals per week) × 5 kg CO₂/meal × 4 weeks/month`

The **Tree Offset** is estimated based on the average amount of CO₂ a mature tree can absorb in a year.

  - Formula: `ceil(Total monthly emissions / 21 kg CO₂ per tree)`


## 🛠️ Technologies Used

  - HTML5: For the structure and content of the web page.
  - CSS3: For styling the application and creating a responsive layout.
  - JavaScript (ES6): For the core calculation logic and DOM manipulation.

Getting Started

To run this project locally, simply follow these steps:

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd your-repository-name
    ```
3.  Open the application:
    Open the `index.html` file in your favorite web browser.

How to Use

1.  Open the `index.html` file in a browser.
2.  Enter your average kilometers driven per week in the first input field.
3.  Enter your estimated monthly electricity usage in kWh in the second field.
4.  Enter the number of meat-based meals you typically consume in a week.
5.  Click the **"Calculate My Carbon Footprint"** button.
6.  Your result will be displayed below the button, and the progress bar at the top will update.

## 🔮 Future Improvements

This is a simple project with a lot of room for growth. Potential future enhancements include:

More Emission Sources: Add more categories like air travel, public transport, waste production, and shopping habits.
Location-Based Factors: Use APIs to fetch location-specific emission factors for electricity, as this varies greatly by region.
Data Persistence: Use `localStorage` to save a user's previous results and track their progress over time.
Detailed Reporting: Show a breakdown of the carbon footprint with charts (e.g., a pie chart) to visualize which category contributes the most.
Resources Page: Add a section with actionable tips and links to resources on how to reduce one's carbon footprint.

