import pandas as pd
import numpy as np

s = pd.Series([1, 3, 5, np.nan, 6, 8])

print("Pandas Series:")
print(s)

#  NumPy array with a datetime index using 
# date_range() and labeled columns:

dates = pd.date_range("20130101", periods=6)

print("Date range:")
print(dates)

df = pd.DataFrame(
    np.random.randn(6, 4),
    index=dates,
    columns=list("ABCD")
)

print("\nDataFrame:")
print(df)

print()
# Creating a DataFrame by passing a dictionary of objects 
# where the keys are the column labels and the values are 
# the column values.
df2 = pd.DataFrame({
    "A": 1.0,
    "B": pd.Timestamp("20130102"),
    "C": pd.Series(1, index=range(4), dtype="float32"),
    "D": np.array([3] * 4, dtype="int32"),
    "E": pd.Categorical(["test", "train", "test", "train"]),
    "F": "foo",
})

print("DataFrame:")
print(df2)

print("\nData types of each column:")
print(df2.dtypes)

# Viewing data
print("First 5 rows of the DataFrame:")
print(df.head())

print("\nLast 3 rows of the DataFrame:")
print(df.tail(3))

print(df.index)
print(df.columns)
print()
print(df.to_numpy())
# describe() shows a quick statistic summary of your data:
print(df.describe())
# Transposing your data:
print(df.T)
print()
# DataFrame.sort_index() sorts by an axis:
print(df.sort_index(axis=1, ascending=False))

# Getitem ([])
print("-------------------------------------")
print(df["A"])

# selects multiple columns
print("-------------------------------------")
print(df[["B", "A"]])
print()

# passing a slice : selects matching rows:
print("-------------------------------------")
print(df[0:3])
print("-------------------------------------")
print(df["20130102":"20130104"])

# Selection by label
# Selecting a row matching a label:
print("-------------------------------------")
print(df.loc[dates[0]])

# Selecting all rows (:) with a select column labels:
print("-------------------------------------")
print(df.loc[:, ["A", "B"]])

# label slicing, both endpoints are included:
print("-------------------------------------")
print(df.loc["20130102":"20130104", ["A", "B"]])


# Boolean indexing
# elect rows where df.A is greater than 0
print("-------------------------------------")
print(df[df["A"] > 0])
print("-------------------------------------")
print(df[df > 0])

# Using isin() method for filtering:
print("-------------------------------------")
df2 = df.copy()

df2["E"] = ["one", "one", "two", "three", "four", "three"]

print("DataFrame with column E:")
print(df2)

print("\nRows where E is either 'two' or 'four':")
print(df2[df2["E"].isin(["two", "four"])])
