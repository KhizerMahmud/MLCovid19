import pandas as pd

def load_raw(path): return pd.read_csv(path)
def preprocess(df):
    # compute features: daily new cases, 7-day rolling avg, demographics if available
    df['new_cases'] = df.groupby('location')['confirmed'].diff().fillna(0)
    df['rolling7'] = df.groupby('location')['new_cases'].rolling(7).mean().reset_index(0,drop=True)
    return df.dropna()