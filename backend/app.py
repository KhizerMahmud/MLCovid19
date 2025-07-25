from fastapi import FastAPI
from pydantic import BaseModel
from models.train_model import train
from models.data_preprocessing import load_raw, preprocess
from models.predict import predict
import pandas as pd
import joblib

app = FastAPI()
model = None

class PredictRequest(BaseModel):
    location: str
    age_group: str = None

@app.post("/train")
def retrain():
    df = load_raw("data/raw/cases_deaths.csv")
    df = preprocess(df)
    global model
    model = train(df)
    joblib.dump(model, "model.pkl")
    return {"status":"trained"}

@app.post("/predict")
def do_predict(req: PredictRequest):
    df = load_raw("data/raw/cases_deaths.csv")
    df = preprocess(df)
    recent = df[df.location==req.location].tail(7)
    preds = predict(model, recent)
    return {"predictions": preds.tolist()}
