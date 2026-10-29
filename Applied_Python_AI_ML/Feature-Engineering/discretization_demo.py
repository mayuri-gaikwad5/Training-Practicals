import numpy as np
import pandas as pd
from sklearn import preprocessing

# 1. KBinsDiscretizer
X_kbins = np.array([[-3., 5., 15],
                    [ 0., 6., 14],
                    [ 6., 3., 11]])

est = preprocessing.KBinsDiscretizer(n_bins=[3, 2, 2], encode='ordinal').fit(X_kbins)
print("KBins Discretized Output:")
print(est.transform(X_kbins))

# 2. Custom Bins with pandas.cut and FunctionTransformer
bins = [0, 1, 13, 20, 60, np.inf]
labels = ['infant', 'kid', 'teen', 'adult', 'senior citizen']

custom_bin_transformer = preprocessing.FunctionTransformer(
    pd.cut, kw_args={'bins': bins, 'labels': labels, 'retbins': False}
)

ages = np.array([0.2, 2, 15, 25, 97])
print("\nCustom Age Bins Output:")
print(custom_bin_transformer.fit_transform(ages))

# 3. Binarizer (Threshold = 0.0)
X_bin = [[ 1., -1.,  2.],
         [ 2.,  0.,  0.],
         [ 0.,  1., -1.]]

binarizer = preprocessing.Binarizer()
print("\nBinarized Output (Threshold 0.0):")
print(binarizer.transform(X_bin))