# import pandas as pd
# import numpy as np

# # Create a DataFrame with 10 rows and 5 columns
# df = pd.DataFrame(np.random.randint(0, 5, (10, 5)))

# print("Original DataFrame:")
# print(df)

# # Save the DataFrame to a CSV file
# df.to_csv("foo.csv")

# print("\nDataFrame read from CSV:")
# print(pd.read_csv("foo.csv"))

import pandas as pd
import numpy as np

# Create a DataFrame
df = pd.DataFrame(np.random.randint(0, 5, (10, 5)))

print("Original DataFrame:")
print(df)

# Save to an Excel file
df.to_excel("foo.xlsx", sheet_name="Sheet1")

print("\nDataFrame read from Excel:")
df_read = pd.read_excel(
    "foo.xlsx",
    sheet_name="Sheet1",
    index_col=None,
    na_values=["NA"],
    engine="openpyxl"
)

print(df_read)