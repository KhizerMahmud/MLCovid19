# COVID-19 Death Predictor 🌍☠️

A full-stack machine learning app to predict COVID-19 deaths by location and age group. Built using **FastAPI**, **LightGBM**, and **React**.

## 📸 Screenshot

![UI Screenshot](screenshot.png)

## 🚀 Features

- Predict future COVID-19 deaths based on recent trends
- Select location and age group
- Interactive chart visualization
- Responsive UI built with React + Bootstrap
- RESTful API powered by FastAPI

## 🧠 Machine Learning

- Model: LightGBM Regression
- Features: 7-day rolling average, daily new cases
- Output: Predicted deaths over next 7 days

## 🏗 Project Structure

covid_death_predictor/
├── backend/
│ └── app.py, models/, data/
├── frontend/
│ └── src/components/, App.jsx
├── docker-compose.yml
├── Dockerfile.backend
├── Dockerfile.frontend
└── README.md


## 🐳 How to Run

### 1. Clone the repo

```bash
git clone https://github.com/KhizerMahmud/MLCovid19.git
cd MLCovid19
```


