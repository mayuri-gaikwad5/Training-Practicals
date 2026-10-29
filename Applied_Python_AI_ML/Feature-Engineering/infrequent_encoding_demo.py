import numpy as np
from sklearn import preprocessing

# 1. Dataset setup
X = np.array([['dog'] * 5 + ['cat'] * 20 + ['rabbit'] * 10 + ['snake'] * 3], dtype=object).T

# 2. OrdinalEncoder with min_frequency
ord_enc = preprocessing.OrdinalEncoder(min_frequency=6).fit(X)
print("Infrequent Categories (Ordinal):", ord_enc.infrequent_categories_)
print("Transformed ['dog', 'cat', 'rabbit', 'snake']:\n", 
      ord_enc.transform(np.array([['dog'], ['cat'], ['rabbit'], ['snake']])))

# 3. OneHotEncoder with handle_unknown='infrequent_if_exist'
oh_enc = preprocessing.OneHotEncoder(
    handle_unknown='infrequent_if_exist', 
    sparse_output=False, 
    min_frequency=6
).fit(X)

print("\nFeature Names (One-Hot):", oh_enc.get_feature_names_out())
print("Transformed Unseen Category ['dragon']:\n", 
      oh_enc.transform(np.array([['dragon']])))