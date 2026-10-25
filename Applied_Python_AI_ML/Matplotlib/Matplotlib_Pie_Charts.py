import matplotlib.pyplot as plt
import numpy as np

y = np.array([35, 25, 25, 15])
# Labels
mylabels = ["Apples", "Bananas", "Cherries", "Dates"]
# Start Angle
# plt.pie(y,labels = mylabels,startangle = 90)


# Explode
# Shadow
myexplode = [0.2, 0, 0, 0]
plt.pie(y, labels = mylabels, explode = myexplode,shadow = True)
plt.show() 

# Colors
y = np.array([35, 25, 25, 15])
mylabels = ["Apples", "Bananas", "Cherries", "Dates"]
mycolors = ["black", "hotpink", "b", "#4CAF50"]

plt.pie(y, labels = mylabels, colors = mycolors)

# Legend
# plt.legend()

# Legend With Header
plt.legend(title = "Four Fruits:")
plt.show() 