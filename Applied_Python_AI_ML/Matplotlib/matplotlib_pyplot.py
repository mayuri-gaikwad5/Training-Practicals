# import matplotlib.pyplot as plt
# import numpy as np

# xpoints = np.array([0, 6])
# ypoints = np.array([0, 250])

# plt.plot(xpoints, ypoints)
# plt.show()

import matplotlib.pyplot as plt
import numpy as np

xpoints = np.array([1, 8])
# Parameter 1 is an array containing the points on the x-axis.
ypoints = np.array([3, 10])
# Parameter 2 is an array containing the points on the y-axis.

plt.plot(xpoints, ypoints)
plt.show()

# Plotting Without Line
xpoints = np.array([1, 8])
ypoints = np.array([3, 10])

plt.plot(xpoints, ypoints, 'o')
plt.show()

# Multiple Points
xpoints = np.array([1, 2, 6, 8])
ypoints = np.array([3, 8, 1, 10])

plt.plot(xpoints, ypoints)
plt.show()

# Default X-Points
# If we do not specify the points on the x-axis, 
# they will get the default values 0, 1, 2, 3 etc., 
# depending on the length of the y-points.

ypoints = np.array([3, 8, 1, 10, 5, 7])

plt.plot(ypoints)
plt.show()