import pandas as pd
import numpy as np

df = pd.DataFrame({
    "A": ["one", "one", "two", "three"] * 3,
    "B": ["A", "B", "C"] * 4,
    "C": ["foo", "foo", "foo", "bar", "bar", "bar"] * 2,
    "D": np.random.randn(12),
    "E": np.random.randn(12)
})

print("DataFrame:")
print(df)


# Create a pivot table
print("---------------------------------------------------------")
pivot = pd.pivot_table(
    df,
    values="D",
    index=["A", "B"],
    columns=["C"]
)

print("\nPivot Table:")
print(pivot)