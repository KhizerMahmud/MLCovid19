from lightgbm import LGBMRegressor
from .data_preprocessing import preprocess

def train(df):
    X = df[['new_cases','rolling7']]
    y = df['deaths']
    model = LGBMRegressor(n_estimators=100)
    model.fit(X, y)
    return model