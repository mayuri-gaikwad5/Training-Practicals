from sklearn import preprocessing
import numpy as np

# 1. Prepare and fit on Training Data
X_train = np.array([
    [ 1., -1.,  2.],
    [ 2.,  0.,  0.],
    [ 0.,  1., -1.]
])

min_max_scaler = preprocessing.MinMaxScaler()
X_train_minmax = min_max_scaler.fit_transform(X_train)

# 2. Define Test Data
X_test = np.array([[-3., -1., 4.]])

# 3. Transform Test Data using parameters fitted on X_train
X_test_minmax = min_max_scaler.transform(X_test)

print("Learned Training Mins:", min_max_scaler.data_min_)
print("Learned Training Maxs:", min_max_scaler.data_max_)
print("\nTransformed Test Sample:")
print(X_test_minmax)