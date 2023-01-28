# # importing the required module
# import matplotlib.pyplot as plt

# # x axis values
# x = [1,2,3,2,3]
# # corresponding y axis values
# y = [2,4,1,4,5]

# # plotting the points
# plt.plot(x, y)

# # naming the x axis
# plt.xlabel('x - axis')
# # naming the y axis
# plt.ylabel('y - axis')

# # giving a title to my graph
# plt.title('My first graph!')

# # function to show the plot
# plt.show()


# # importing the required modules
# import matplotlib.pyplot as plt
# import numpy as np

# # setting the x - coordinates
# x = np.arange(0, 2*(np.pi), 0.1)
# # setting the corresponding y - coordinates
# y = np.sin(x)

# # plotting the points
# plt.plot(x, y)

# # function to show the plot
# plt.show()


import matplotlib.pyplot as plt
import numpy as np

# 100 linearly spaced numbers
x = np.linspace(-5,5,100)

# the function, which is y = x^2 here
y = x**2 + x*3 + 2

# setting the axes at the centre
fig = plt.figure()
ax = fig.add_subplot(1, 1, 1)
ax.spines['left'].set_position('center')
ax.spines['bottom'].set_position('zero')
ax.spines['right'].set_color('none')
ax.spines['top'].set_color('none')
ax.xaxis.set_ticks_position('bottom')
ax.yaxis.set_ticks_position('left')

# plot the function
plt.plot(x,y, 'r')

# show the plot
plt.show()