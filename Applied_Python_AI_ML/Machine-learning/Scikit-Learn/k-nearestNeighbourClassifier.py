from sklearn import datasets

# Load dataset
iris = datasets.load_iris()

# Create and fit a nearest-neighbor classifier
from sklearn import neighbors
knn = neighbors.KNeighborsClassifier()
knn.fit(iris.data, iris.target)

# Predict and print the result
result=knn.predict([[0.1, 0.2, 0.3, 0.4]])
print(result)