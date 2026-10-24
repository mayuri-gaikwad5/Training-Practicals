import numpy as np
from numpy import pi

a = np.arange(15).reshape(3, 5)
print(a)
print(a.shape)
print(a.ndim)
print(a.dtype.name)
print(a.itemsize)
print(a.size)
print(type(a))

# Array Creation
a = np.array([2, 3, 4])
print("array a:- ",a)
print("DataType :- ",a.dtype)

b = np.array([(1.5, 2, 3), (4, 5, 6)])
print("array b:- ",b)
print("DataType :- ",b.dtype)

c = np.array([[1, 2], [3, 4]], dtype=np.complex128)
print("array c:- ",c)
print("DataType :- ",c.dtype)

print()
print("array full of zeros")
print(np.zeros((3, 4)))

print()
print("array full of ones")
print(np.ones((2, 3, 4), dtype=np.int16))

print()
print("empty array ",np.empty((2, 3)))

print()
print(np.arange(10, 30, 5))

print()
print("9 numbers from 0 to 2 \n",np.linspace(0, 2, 9) )

print()
print( np.linspace(0, 2 * pi, 100))

a = np.arange(6)                    # 1d array
print("1-D Array \n",a)
b = np.arange(12).reshape(4, 3)     # 2d array
print("2-D Array \n",b)
c = np.arange(24).reshape(2, 3, 4)  # 3d array
print("3-D Array \n",c)


# Basic Operations
a = np.array([20, 30, 40, 50])
b = np.arange(4)
print("array a:- \n",a)
print("array b:- \n",b)
c= a - b
print("array c:- \n",c )

print("array b *2",b**2)
print(10 * np.sin(a))

print("Element Wise\n",a*b )
print("matrix product\n",a@b)
print("another matrix product \n ",a.dot(b))


print("Array a \n",a)
print("Sum = ",a.sum())
print("Min = ",a.min())
print("Max = ",a.max())

print()
b = np.arange(12).reshape(3, 4)
print("Array b \n ",b)
print("sum of each column \n",b.sum(axis=0))
print("min of each row\n",b.min(axis=1))
print("cumulative sum along each row\n",b.cumsum(axis=1))

# Universal functions
B = np.arange(3)
print("Array B \n ",B)
print("exponential \n",np.exp(B))
print("square root \n",np.sqrt(B))
C = np.array([2., -1., 4.])
print("Addition \n",np.add(B, C))

# Indexing, slicing and iterating
a = np.arange(10)**3
print("Array a\n ",a)
print(a[2])
print(a[2:5])
# equivalent to a[0:6:2] = 1000;
# from start to position 6, exclusive, set every 2nd element to 1000
a[:6:2] = 1000
print(a)
a[::-1]  # reversed a
for i in a:
    print(i**(1 / 3.))

# Multidimensional arrays
def f(x, y):
    return 10 * x + y

b = np.fromfunction(f, (5, 4), dtype=int)

print("Original array:")
print(b)

print("\nElement at row 2, column 3:")
print(b[2, 3])

print("\nAll rows of the second column:")
print(b[0:5, 1])

print("\nSecond column using slicing:")
print(b[:, 1])

print("\nSecond and third rows:")
print(b[1:3, :])

