# This snippet demonstrates a Machine Learning Pipeline using Scikit-Learn. 
# It combines two steps—Feature Scaling (StandardScaler) and Model Training
#  (LogisticRegression)—into a single, unified workflow.

# 1. Importing Libraries
from sklearn.datasets import make_classification
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

# 2. Generating Synthetic Data
X, y = make_classification(random_state=42)

# Creates 100 samples with 20 features (X) and corresponding labels 0 or 1 (y).
# random_state=42 guarantees that the random data generated is identical every 
# time you run the script.

# 3. Splitting Train and Test Sets
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)

# 4. Creating the Pipeline
pipe = make_pipeline(StandardScaler(), LogisticRegression())

# 5. Fitting the Pipeline
pipe.fit(X_train, y_train)

# 6. Evaluating on Test Data
accuracy = pipe.score(X_test, y_test)
print(f"Model Accuracy on Test Set: {accuracy:.2f}")
