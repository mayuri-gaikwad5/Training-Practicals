import numpy as np
from sklearn.preprocessing import PolynomialFeatures

# 1. Standard Polynomial Features (Degree 2)
X1 = np.arange(6).reshape(3, 2)
poly_std = PolynomialFeatures(degree=2)
X1_poly = poly_std.fit_transform(X1)

print("Standard Polynomial Features (Degree 2):")
print("Feature Names:", poly_std.get_feature_names_out(['X1', 'X2']))
print(X1_poly)

# 2. Interaction-Only Features (Degree 3)
X2 = np.arange(9).reshape(3, 3)
poly_inter = PolynomialFeatures(degree=3, interaction_only=True)
X2_poly = poly_inter.fit_transform(X2)

print("\nInteraction-Only Features (Degree 3):")
print("Feature Names:", poly_inter.get_feature_names_out(['X1', 'X2', 'X3']))
print(X2_poly)