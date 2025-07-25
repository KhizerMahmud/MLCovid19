import pandas as pd
def predict(model, recent_data: pd.DataFrame):
    # recent_data contains the same features
    X = recent_data[['new_cases','rolling7']]
    return model.predict(X)