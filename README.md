# FinVision – Goal-Based Financial Planning Assistant

**Github link** : https://github.com/Juveriya12/finvision
**Video link** : https://drive.google.com/file/d/1UwIjowV2arJBlaNN-XInMQM_DOARvbO_/view?usp=sharing


## Overview

FinVision is a web-based financial planning tool designed to help users understand and plan their financial goals effectively. The platform allows users to estimate future goal costs, calculate the required monthly investments using SIP (Systematic Investment Plan), visualize investment growth over time, and generate professional financial reports.

The application also integrates a financial chatbot assistant that helps users understand their financial plans and explains key financial concepts such as compounding, inflation, SIP investing, and diversification.

FinVision aims to make financial planning more accessible and educational for individuals who want to understand how disciplined investing can help achieve long-term goals.



# Problem Statement

Many individuals struggle with financial planning because they:

* Do not understand how inflation affects future goal costs
* Are unsure how much they need to invest monthly
* Lack knowledge of investment concepts like compounding or SIP
* Do not have tools to visualize long-term investment growth

FinVision addresses these challenges by providing an interactive platform that combines financial calculations, visual analytics, and educational guidance.


# Key Features

### 1. Goal-Based Financial Planning

Users can plan financial goals such as:

* Education
* Wedding
* Home purchase
* Retirement

The system calculates the future value of the goal by considering inflation and the time horizon.


### 2. SIP Investment Calculator

FinVision calculates the required monthly SIP amount needed to reach the user's financial goal based on:

* Expected rate of return
* Investment duration
* Inflation-adjusted goal value


### 3. Investment Growth Visualization

The application provides graphical visualization of investment growth using charts.

Users can view:

* Investment value growth over time
* Investment vs returns distribution

This helps users understand the impact of long-term investing and compounding.


### 4. Investment Timeline

FinVision generates a detailed investment timeline showing:

* Period (Year/Month)
* Amount invested
* Interest earned
* Total invested amount
* Portfolio value
* Total profit

Users can switch between **yearly** and **monthly** timelines.


### 5. Downloadable Financial Report

Users can export their financial plan as a professional PDF report.

The report includes:

* Goal summary
* SIP requirement
* Investment summary
* Investment distribution chart
* Investment timeline

This allows users to save or share their financial plan.


### 6. Financial AI Chatbot

FinVision includes an interactive chatbot assistant that can:

* Explain the user's financial plan
* Answer questions about financial concepts
* Provide educational insights on investing

The chatbot can explain concepts such as:

* SIP (Systematic Investment Plan)
* Compounding
* Inflation
* Diversification
* Long-term investing

This makes the platform both a **planning tool and a financial learning assistant**.


### 7. User Authentication

The application includes basic authentication functionality.

Users can:

* Register a new account
* Login to their account
* Access the financial planning dashboard

Authentication is implemented through API routes.


# Technology Stack

### Frontend

* Next.js
* React
* Tailwind CSS
* Recharts (for charts and visualizations)

### Backend

* Next.js API Routes

### Other Libraries

* html2pdf.js – PDF report generation
* html2canvas – capturing chart visuals
* react-icons – UI icons


# Project Structure

```
src/
 ├ app/
 │  ├ api/
 │  │  ├ auth/
 │  │  │  ├ login/
 │  │  │  └ register/
 │  │  └ chat/
 │  │     └ route.js
 │  │
 │  ├ auth/
 │  │  ├ login/
 │  │  ├ register/
 │  │  └ forgot-password/
 │  │
 │  ├ dashboard/
 │  │  └ page.js
 │  │
 │  ├ home/
 │  │  └ page.js
 │  │
 │  ├ page.js
 │  └ layout.js
 │
 ├ components/
 │  ├ ChatBot.jsx
 │  ├ GoalPlanner.jsx
 │  ├ GrowthChart.jsx
 │  ├ PieChartTemp.jsx
 │  ├ InvestmentTable.jsx
 │  └ ExcelExport.jsx
 │
 ├ utils/
 │  ├ financialCalculations.js
 │  └ healthScore.js
```


# How It Works

1. User registers and logs into the platform.
2. The user navigates to the financial planning dashboard.
3. The user enters financial goal parameters such as goal cost, investment duration, expected return, and inflation.
4. The system calculates the required SIP investment.
5. Investment growth charts and timeline tables are generated.
6. The user can download a financial report.
7. The chatbot assists users with financial explanations and guidance.


# Example Use Case

A user planning for a wedding in 10 years can:

1. Enter the current goal cost.
2. Specify expected inflation and investment return.
3. View the future value of the goal.
4. See how much SIP investment is required monthly.
5. Analyze the growth of investments over time.
6. Download a financial report.


# Future Improvements

Possible improvements for future development include:

* Integration with real financial market data
* AI-powered financial recommendations
* Portfolio diversification suggestions
* Database-backed user authentication
* Personalized investment insights


# Conclusion

FinVision provides an accessible and interactive approach to financial planning by combining financial calculations, visual analytics, and educational assistance. The platform helps users better understand how disciplined investing and long-term planning can help achieve financial goals.

