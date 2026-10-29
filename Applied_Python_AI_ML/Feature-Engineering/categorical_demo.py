import numpy as np
from sklearn import preprocessing
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer

# 1. Ordinal Encoding with missing value handling
X_missing = [['male'], ['female'], [np.nan], ['female']]
ord_enc = preprocessing.OrdinalEncoder(encoded_missing_value=-1)
print("Ordinal Encoded (Missing = -1):")
print(ord_enc.fit_transform(X_missing))

# 2. One-Hot Encoding with custom categories
genders = ['female', 'male']
locations = ['from Africa', 'from Asia', 'from Europe', 'from US']
browsers = ['uses Chrome', 'uses Firefox', 'uses IE', 'uses Safari']

X_train = [['male', 'from US', 'uses Safari'], ['female', 'from Europe', 'uses Firefox']]

oh_enc = preprocessing.OneHotEncoder(categories=[genders, locations, browsers])
oh_enc.fit(X_train)

test_sample = [['female', 'from Asia', 'uses Chrome']]
print("\nOne-Hot Encoded with Custom Categories:")
print(oh_enc.transform(test_sample).toarray())

# 3. Handling unknown categories safely
robust_enc = preprocessing.OneHotEncoder(handle_unknown='ignore', sparse_output=False)
robust_enc.fit(X_train)

unknown_sample = [['unknown', 'America', 'IE']]
print("\nHandling Unknown Categories (Returns All Zeros):")
print(robust_enc.transform(unknown_sample))