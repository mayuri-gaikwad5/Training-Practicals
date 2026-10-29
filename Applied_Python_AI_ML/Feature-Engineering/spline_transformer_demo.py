import numpy as np
from sklearn.preprocessing import SplineTransformer

# 1. Define dataset
X = np.arange(5).reshape(5, 1)

# 2. Instantiate and fit_transform
spline = SplineTransformer(degree=2, n_knots=3)
X_spline = spline.fit_transform(X)

print("Original Data:\n", X)
print("\nSpline Transformed Matrix (Degree=2, Knots=3):")
print(np.round(X_spline, 3))

# Verify row sums equal 1.0
print("\nRow Sums:", X_spline.sum(axis=1))