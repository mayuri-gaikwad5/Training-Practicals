import pandas as pd
import numpy as np

arrays = [
    ["bar", "bar", "baz", "baz", "foo", "foo", "qux", "qux"],
    ["one", "two", "one", "two", "one", "two", "one", "two"]
]

# Create a MultiIndex with two levels
index = pd.MultiIndex.from_arrays(
    arrays,
    names=["first", "second"]
)

# Create the DataFrame
df = pd.DataFrame(
    np.random.randn(8, 2),
    index=index,
    columns=["A", "B"]
)

# Select the first four rows
df2 = df[:4]

print("First four rows of the DataFrame:")
print(df2)
print("-------------------------------------")

# Stack columns into an additional index level
stacked = df2.stack()

print("Stacked Series:")
print(stacked)

print("-------------------------------------")

print("\nUnstack (default):")
print(stacked.unstack())

print("\nUnstack level 1:")
print(stacked.unstack(1))

print("\nUnstack level 0:")
print(stacked.unstack(0))