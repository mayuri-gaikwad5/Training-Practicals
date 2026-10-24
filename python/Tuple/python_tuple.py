thistuple = ("apple", "banana", "cherry")
print(thistuple)

# Tuples allow duplicate values:
thistuple = ("apple", "banana", "cherry", "apple", "cherry")
print(thistuple)

# Print the number of items in the tuple:
thistuple = ("apple", "banana", "cherry")
print(len(thistuple))

# Create Tuple With One Item
thistuple = ("apple",)
print(type(thistuple))

#NOT a tuple
thistuple = ("apple")
print(type(thistuple))


# Create an Empty Tuple
thistuple = ()
print(type(thistuple))

# The tuple() Constructor
# Using the tuple() method to make a tuple:
thistuple = tuple(("apple", "banana", "cherry")) # note the double round-brackets
print(thistuple)

# Access Tuple Items
thistuple = ("apple", "banana", "cherry")
print(thistuple[1])

# Range of Indexes
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[2:5])

# Range of Negative Indexes
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[-4:-1])

# Check if Item Exists
thistuple = ("apple", "banana", "cherry")
if "apple" in thistuple:
  print("Yes, 'apple' is in the fruits tuple")

# Change Tuple Values
x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
x = tuple(y)
print(x)

# Add Items
# 1. Convert into a list
thistuple = ("apple", "banana", "cherry")
y = list(thistuple)
y.append("orange")
thistuple = tuple(y)

# 2. Add tuple to a tuple.
thistuple = ("apple", "banana", "cherry")
y = ("orange",)
thistuple += y

print(thistuple)

# Remove Items
thistuple = ("apple", "banana", "cherry")
y = list(thistuple)
y.remove("apple")
thistuple = tuple(y)

# The del keyword can delete the tuple completely:
thistuple = ("apple", "banana", "cherry")
del thistuple

# Unpacking a Tuple
fruits = ("apple", "banana", "cherry")

(green, yellow, red) = fruits

print(green)
print(yellow)
print(red)

# Using Asterisk*
fruits = ("apple", "banana", "cherry", "strawberry", "raspberry")
(green, yellow, *red) = fruits
print(green)
print(yellow)
print(red)

print()
fruits = ("apple", "mango", "papaya", "pineapple", "cherry")

(green, *tropic, red) = fruits

print(green)
print(tropic)
print(red)