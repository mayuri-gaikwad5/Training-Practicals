# This code snippet demonstrates Standardization (also known as Z-score normalization),
#  which is a key Feature Engineering technique used to scale numerical features so 
# they have a mean of 0 and a standard deviation (or scale) of 1.


# 1. Importing Libraries
from sklearn import preprocessing
import numpy as np

# 2. Creating the Training Data
X_train = np.array([
    [ 1., -1.,  2.],
    [ 2.,  0.,  0.],
    [ 0.,  1., -1.]
])

# 3. Fitting the Scaler
scaler = preprocessing.StandardScaler().fit(X_train)
# .fit(X_train): This step learns the parameters from
#  the data column by column. Specifically, it calculates
#  the mean and standard deviation for each feature column in X_train.

# 4. Checking Learned Parameters
# Display learned values
print("Mean per column:", scaler.mean_)
print("Standard Deviation per column:", scaler.scale_)

# 5. Transforming the Data

X_scaled = scaler.transform(X_train)
print(X_scaled)

# .transform(X_train): Applies the Z-score standardization formula to each value x:
# after this line runs, each column in X_scaled will now have a mean of approximately
# 0 and a variance/standard deviation of 1.