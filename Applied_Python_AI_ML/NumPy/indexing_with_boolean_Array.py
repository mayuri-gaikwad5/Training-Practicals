import numpy as np

a = np.arange(12).reshape(3, 4)

print("Original array:")
print(a)

b = a > 4

print("\nBoolean array (elements greater than 4):")
print(b)

print("\nElements of a greater than 4:")
print(a[b])

# Boolean indexing along rows and columns in NumPy
print()
import numpy as np

a = np.arange(12).reshape(3, 4)

b1 = np.array([False, True, True])
b2 = np.array([True, False, True, False])

print("Original array:")
print(a)

print("\nSelect rows using a[b1, :]:")
print(a[b1, :])

print("\nSelect rows using a[b1]:")
print(a[b1])

print("\nSelect columns using a[:, b2]:")
print(a[:, b2])

print("\nSelect elements using a[b1, b2]:")
print(a[b1, b2])

# The ix_() function
a = np.array([2, 3, 4, 5])
b = np.array([8, 5, 4])
c = np.array([5, 4, 6, 8, 3])

ax, bx, cx = np.ix_(a, b, c)

print("ax:")
print(ax)

print("\nbx:")
print(bx)

print("\ncx:")
print(cx)

print("\nShapes of ax, bx, and cx:")
print(ax.shape, bx.shape, cx.shape)

result = ax + bx * cx

print("\nResult of ax + bx * cx:")
print(result)

print("\nElement at index [3, 2, 4]:")
print(result[3, 2, 4])

print("\nCalculation using original arrays:")
print(a[3] + b[2] * c[4])