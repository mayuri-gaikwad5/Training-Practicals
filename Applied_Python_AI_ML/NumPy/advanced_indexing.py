import numpy as np

a = np.arange(12) ** 2

i = np.array([1, 1, 3, 8, 5])

print("First 12 square numbers:")
print(a)

print("\nElements at indices specified by i:")
print(a[i])

j = np.array([[3, 4],
              [9, 7]])

print("\nIndex array j:")
print(j)

print("\nElements at indices specified by j:")
print(a[j])


print()

palette = np.array([[0, 0, 0],          # Black
                    [255, 0, 0],        # Red
                    [0, 255, 0],        # Green
                    [0, 0, 255],        # Blue
                    [255, 255, 255]])    # White

image = np.array([[0, 1, 2, 0],
                  [0, 3, 4, 0]])

print("Color palette (RGB values):")
print(palette)

print("\nImage array (color indices):")
print(image)

print("\nColor image (RGB values for each pixel):")
print(palette[image])

# We can also give indexes for more than one dimension.
#  The arrays of indices for each dimension must have the same shape.
a = np.arange(12).reshape(3, 4)

print("Original array a:")
print(a)

i = np.array([[0, 1],
              [1, 2]])

j = np.array([[2, 1],
              [3, 3]])

print("\nElements selected using a[i, j]:")
print(a[i, j])

print("\nElements selected using a[i, 2]:")
print(a[i, 2])

print("\nElements selected using a[:, j]:")
print(a[:, j])