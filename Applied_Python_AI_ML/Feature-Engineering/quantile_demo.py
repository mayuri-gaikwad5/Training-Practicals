from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn import preprocessing
import numpy as np

# 1. Load Data
X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)

# 2. Fit and Transform
quantile_transformer = preprocessing.QuantileTransformer(random_state=0)
X_train_trans = quantile_transformer.fit_transform(X_train)
X_test_trans = quantile_transformer.transform(X_test)

# 3. Print Percentiles Comparison
percentiles = [0, 25, 50, 75, 100]

print("Train Raw Percentiles      :", np.percentile(X_train[:, 0], percentiles))
print("Train Transformed Quantiles:", np.percentile(X_train_trans[:, 0], percentiles))
print("\nTest Raw Percentiles       :", np.percentile(X_test[:, 0], percentiles))
print("Test Transformed Quantiles :", np.percentile(X_test_trans[:, 0], percentiles).round(3))