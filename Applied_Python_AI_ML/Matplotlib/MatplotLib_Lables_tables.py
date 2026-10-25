# Create Labels for a Plot
# xlabel() and ylabel() functions to set a label for the x- and y-axis.

import numpy as np
import matplotlib.pyplot as plt

x = np.array([80, 85, 90, 95, 100, 105, 110, 115, 120, 125])
y = np.array([240, 250, 260, 270, 280, 290, 300, 310, 320, 330])

plt.plot(x, y)

plt.xlabel("Average Pulse")
plt.ylabel("Calorie Burnage")



# Create a Title for a Plot
# you can use the title() function to set a title for the plot.
plt.title("Sports Watch Data")
plt.show()

# Set Font Properties for Title and Labels

# use the fontdict parameter in xlabel(), ylabel(), and title()
# to set font properties for the title and labels.

x = np.array([80, 85, 90, 95, 100, 105, 110, 115, 120, 125])
y = np.array([240, 250, 260, 270, 280, 290, 300, 310, 320, 330])

font1 = {'family':'serif','color':'blue','size':20}
font2 = {'family':'serif','color':'darkred','size':15}

# Position the Title
# You can use the loc parameter in title() to position the title.
# Legal values are: 'left', 'right', and 'center'. Default value is 'center'.

plt.title("Sports Watch Data", fontdict = font1,loc = 'left')
plt.xlabel("Average Pulse", fontdict = font2)
plt.ylabel("Calorie Burnage", fontdict = font2)

plt.plot(x, y)
# Add Grid Lines to a Plot
# you can use the grid() function to add grid lines to the plot.

# plt.grid()

# Specify Which Grid Lines to Display
# Set Line Properties for the Grid


# plt.grid(axis = 'x')
# plt.grid(axis = 'y')
plt.grid(color = 'green', linestyle = '--', linewidth = 0.5)

plt.show()