import pandas as pd
import numpy as np

dates = pd.date_range("20130101", periods=6)

df = pd.DataFrame(
    np.random.randn(6, 4),
    index=dates,
    columns=list("ABCD")
)

df["D"] = 5

s1 = pd.Series(
    [1, 2, 3, 4, 5, 6],
    index=pd.date_range("20130102", periods=6)
)
df["F"] = s1

print("Mean of each column:")
print(df.mean())
print("-------------------------------------")

print("Calculate the mean value for each row:")
df.mean(axis=1)

print("-------------------------------------")
s = pd.Series([1, 3, 5, np.nan, 6, 8], index=dates).shift(2)
print(s)
print(df.sub(s, axis="index"))

# Concat
print("-------------------------------------")
# Create a DataFrame with 10 rows and 4 columns
df = pd.DataFrame(np.random.randn(10, 4))

print("Original DataFrame:")
print(df)

# Split the DataFrame into three pieces
pieces = [df[:3], df[3:7], df[7:]]

print("\nConcatenated DataFrame:")
print(pd.concat(pieces))

# Join
print("-------------------------------------")
# Create two DataFrames
left = pd.DataFrame({
    "key": ["foo", "foo"],
    "lval": [1, 2]
})

right = pd.DataFrame({
    "key": ["foo", "foo"],
    "rval": [4, 5]
})

print("Left DataFrame:")
print(left)

print("\nRight DataFrame:")
print(right)

# Merge DataFrames using the common column
merged = pd.merge(left, right, on="key")

print("\nMerged DataFrame:")
print(merged)

# Grouping
print("-------------------------------------")
df = pd.DataFrame({
    "A": ["foo", "bar", "foo", "bar", "foo", "bar", "foo", "foo"],
    "B": ["one", "one", "two", "three", "two", "two", "one", "three"],
    "C": np.random.randn(8),
    "D": np.random.randn(8)
})

print("DataFrame:")
print(df)
print("-------------------------------------")
print(df.groupby("A")[["C", "D"]].sum())

print("-------------------------------------")
print(df.groupby(["A", "B"]).sum())