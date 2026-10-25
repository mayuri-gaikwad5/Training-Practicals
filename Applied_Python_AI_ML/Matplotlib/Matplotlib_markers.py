import matplotlib.pyplot as plt
import numpy as np

ypoints = np.array([3, 8, 1, 10])

# plt.plot(ypoints, marker = 'o')
plt.plot(ypoints, marker = '*')
plt.show()

# Format Strings fmt
# This parameter is also called fmt, and is written with this syntax:
# marker|line|color

ypoints = np.array([3, 8, 1, 10])

plt.plot(ypoints, 'o:r')
plt.show()

# Marker Size
# ms to set the size of the markers:
ypoints = np.array([3, 8, 1, 10])

plt.plot(ypoints, marker = 'o', ms = 20)
plt.show()

# Marker Color
# markeredgecolor or the shorter mec to set
# the color of the edge of the markers:
ypoints = np.array([3, 8, 1, 10])

plt.plot(ypoints, marker = 'o', ms = 20, mec = 'r')
plt.show()

# markerfacecolor or the shorter mfc to set the color
#  inside the edge of the markers:

ypoints = np.array([3, 8, 1, 10])

plt.plot(ypoints, marker = 'o', ms = 20, mfc = 'r')
plt.show()

'''Use both the mec and mfc arguments to color the entire marker:'''
# Set the color of both the edge and the face to red:
ypoints = np.array([3, 8, 1, 10])

plt.plot(ypoints, marker = 'o', ms = 20, mec = 'r', mfc = 'r')
plt.show()