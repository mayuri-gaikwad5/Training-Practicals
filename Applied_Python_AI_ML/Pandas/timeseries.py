import pandas as pd
import numpy as np

# Generate 100 timestamps at 1-second intervals
rng = pd.date_range("1/1/2012", periods=100, freq="s")

# Create a Series with random integers
ts = pd.Series(
    np.random.randint(0, 500, len(rng)),
    index=rng
)

print("Original Time Series:")
print(ts)

# Group values into 5-minute intervals and calculate their sum
print("\nResampled Series (5-minute sum):")
print(ts.resample("5min").sum())