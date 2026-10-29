from sklearn import preprocessing
import numpy as np

# 1. Define dataset
X_train = np.array([
    [ 1., -1.,  2.],
    [ 2.,  0.,  0.],
    [ 0.,  1., -1.]
])

# 2. Instantiate and transform
min_max_scaler = preprocessing.MinMaxScaler()
X_train_minmax = min_max_scaler.fit_transform(X_train)

# 3. View learned minimums and maximums
print("Minimum per column:", min_max_scaler.data_min_)
print("Maximum per column:", min_max_scaler.data_max_)

# 4. View transformed dataset
print("\nScaled Dataset (Range 0 to 1):")
print(X_train_minmax)