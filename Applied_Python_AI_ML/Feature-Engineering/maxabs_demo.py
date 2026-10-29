from sklearn import preprocessing
import numpy as np

# 1. Training Data
X_train = np.array([
    [ 1., -1.,  2.],
    [ 2.,  0.,  0.],
    [ 0.,  1., -1.]
])

# 2. Instantiate and fit_transform
max_abs_scaler = preprocessing.MaxAbsScaler()
X_train_maxabs = max_abs_scaler.fit_transform(X_train)

# 3. Transform test data
X_test = np.array([[-3., -1., 4.]])
X_test_maxabs = max_abs_scaler.transform(X_test)

# 4. Print results
print("Learned scale_ (Max Absolute per column):", max_abs_scaler.scale_)
print("\nScaled Training Set:")
print(X_train_maxabs)
print("\nScaled Test Sample:")
print(X_test_maxabs)