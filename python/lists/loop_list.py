thislist = ["apple", "banana", "cherry"]
for x in thislist:
  print(x)

# Loop Through the Index Numbers
thislist = ["apple", "banana", "cherry"]
for i in range(len(thislist)):
  print(thislist[i])

print()
# Looping Using List Comprehension
thislist = ["apple", "banana", "cherry"]
[print(x) for x in thislist]


# basic way without using list compherension 
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = []

for x in fruits:
  if "a" in x:
    newlist.append(x)

print(newlist)

# using list compherension
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]

newlist = [x for x in fruits if "a" in x]

print(newlist)


# syntax 
# newlist = [expression for item in iterable if condition == True]

newlist = [x for x in range(10)]
print(newlist)

# Expression
newlist = [x.upper() for x in fruits]
print(newlist)

newlist = ['hello' for x in fruits]
print(newlist)

newlist = [x if x != "banana" else "orange" for x in fruits]
print(newlist)