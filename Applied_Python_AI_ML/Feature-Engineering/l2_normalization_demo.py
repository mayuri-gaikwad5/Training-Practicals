from sklearn import preprocessing
import numpy as np

# 1. Input array
X = [[1., -1., 2.],
     [2.,  0., 0.],
     [0.,  1., -1.]]

# 2. Functional method
X_normalized = preprocessing.normalize(X, norm='l2')
print("Normalized Matrix (Functional):")
print(np.round(X_normalized, 4))

# 3. Class estimator method
normalizer = preprocessing.Normalizer(norm='l2').fit(X)

# 4. Transform new row
new_sample = [[-1., 1., 0.]]
transformed_sample = normalizer.transform(new_sample)

print("\nTransformed New Sample:")
print(np.round(transformed_sample, 4))

# 5. Verify L2 length equals 1.0
row_lengths = np.linalg.norm(X_normalized, axis=1)
print("\nLength of each transformed row vector:", row_lengths)
