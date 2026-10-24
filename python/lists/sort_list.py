# Sort List Alphanumerically
thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
thislist.sort()
print(thislist)

# Sort the list numerically:
thislist = [100, 50, 65, 82, 23]
thislist.sort()
print(thislist)

# Sort Descending
thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
thislist.sort(reverse = True)
print(thislist)

# Customize Sort Function
def myfunc(n):
  return abs(n - 50)

thislist = [100, 50, 65, 82, 23]
thislist.sort(key = myfunc)
print(thislist)

# Case Insensitive Sort
# By default the sort() method is case sensitive, resulting in all capital letters being 
# sorted before lower case letters:

thislist = ["banana", "Orange", "Kiwi", "cherry"]
thislist.sort()
print(thislist)

# Reverse Order
thislist = ["banana", "Orange", "Kiwi", "cherry"]
thislist.reverse()
print(thislist)



