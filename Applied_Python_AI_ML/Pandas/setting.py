import pandas as pd
import numpy as np

# Create a DataFrame with 6 rows
dates = pd.date_range("20130101", periods=6)
df = pd.DataFrame(
    np.random.randn(6, 4),
    index=dates,
    columns=list("ABCD")
)
# Create a Series with dates as its index
s1 = pd.Series(
    [1, 2, 3, 4, 5, 6],
    index=pd.date_range("20130102", periods=6)
)

print("Series s1:")
print(s1)

# Add the Series as a new column F
df["F"] = s1

print("\nDataFrame after adding column F:")
print(df)

# Missing data
print("-------------------------------------")
# Reindex the DataFrame
df1 = df.reindex(
    index=dates[0:4],
    columns=list(df.columns) + ["E"]
)

# Assign 1 to column E for the first two dates
df1.loc[dates[0]:dates[1], "E"] = 1

print("Updated DataFrame:")
print(df1)
print("-------------------------------------")

# DataFrame.dropna() drops any rows that have missing data:
print(df1.dropna(how="any"))

print("-------------------------------------")
# DataFrame.fillna() fills missing data:
print(df1.fillna(value=5))