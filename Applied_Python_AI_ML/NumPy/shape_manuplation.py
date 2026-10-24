# Changing the shape of an array

import numpy as np
from numpy import newaxis

rg = np.random.default_rng()
a = np.floor(10 * rg.random((3, 4)))
print("Array:")
print(a)
print("\nShape of the array (rows, columns):")
print(a.shape)

print("\nFlattened array:")
print(a.ravel())

print("\nReshaped array (6 rows, 2 columns):")
print(a.reshape(6, 2))

print("\nTransposed array:")
print(a.T)

print("\nShape of the transposed array:")
print(a.T.shape)

print("\nShape of the original array:")
print(a.shape)

# Stacking together different arrays
a = np.floor(10 * rg.random((2, 2)))
b = np.floor(10 * rg.random((2, 2)))

print("Array a:")
print(a)

print("\nArray b:")
print(b)

print("\nVertical stacking of a and b:")
print(np.vstack((a, b)))

print("\nHorizontal stacking of a and b:")
print(np.hstack((a, b)))


# The function column_stack stacks 1D arrays as columns into a 2D array. 
# It is equivalent to hstack only for 2D arrays:
print()

a = np.array([4., 2.])
b = np.array([3., 8.])
print("Array a:")
print(a)

print("\nArray b:")
print(b)

print("Column stack of a and b:")
print(np.column_stack((a, b)))

print("\nHorizontal stack of a and b:")
print(np.hstack((a, b)))

print("\nArray a as a 2D column vector:")
print(a[:, newaxis])

print("\nColumn stack using column vectors:")
print(np.column_stack((a[:, newaxis], b[:, newaxis])))

print("\nHorizontal stack using column vectors:")
print(np.hstack((a[:, newaxis], b[:, newaxis])))

# Splitting one array into several smaller ones
a = np.floor(10 * rg.random((2, 12)))

print("Original array:")
print(a)

print("\nSplit array into 3 equal parts:")
print(np.hsplit(a, 3))

print("\nSplit array after the 3rd and 4th columns:")
print(np.hsplit(a, (3, 4)))

# Copies and views
# No copy at all
a = np.array([[0, 1, 2, 3],
              [4, 5, 6, 7],
              [8, 9, 10, 11]])

b = a

print("Array a:")
print(a)

print("\nArray b:")
print(b)

print("\nAre a and b the same array object?")
print(b is a)

def f(x):
    print(id(x))

print("ID of array a:")
print(id(a))

print("\nID of x inside function f:")
f(a)

# View or shallow copy
print()
a = np.array([[0, 1, 2, 3],
              [4, 5, 6, 7],
              [8, 9, 10, 11]])

c = a.view()

print("Is c the same object as a?")
print(c is a)

print("\nDoes c share its base array with a?")
print(c.base is a)

print("\nDoes c own its data?")
print(c.flags.owndata)

c = c.reshape((2, 6))

print("\nShape of original array a:")
print(a.shape)

c[0, 4] = 1234

print("\nOriginal array a after modifying c:")
print(a)

# Slicing an array returns a view of it
print()
a = np.array([[0, 1, 2, 3],
              [4, 5, 6, 7],
              [8, 9, 10, 11]])

s = a[:, 1:3]

print("Original array a:")
print(a)

print("\nView s (second and third columns):")
print(s)

s[:] = 10

print("\nArray a after modifying s:")
print(a)

# deep copy
print()
a = np.array([[0, 1, 2, 3],
              [4, 5, 6, 7],
              [8, 9, 10, 11]])

d = a.copy()

print("Original array a:")
print(a)

print("\nIs d the same object as a?")
print(d is a)

print("\nDoes d share its base array with a?")
print(d.base is a)

d[0, 0] = 9999

print("\nArray d after modifying its first element:")
print(d)

print("\nOriginal array a remains unchanged:")
print(a)