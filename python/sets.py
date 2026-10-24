thisset = {"apple", "banana", "cherry"}
print(thisset)

# True and 1 is considered the same value:
thisset = {"apple", "banana", "cherry", True, 1, 2}
print(thisset)

# Get the Length of a Set
thisset = {"apple", "banana", "cherry"}
print(len(thisset))

# Set Items - Data Types
set1 = {"apple", "banana", "cherry"}
set2 = {1, 5, 7, 9, 3}
set3 = {True, False, False}
print(type(set1))

# The set() Constructor
thisset = set(("apple", "banana", "cherry")) # note the double round-brackets
print(thisset)

print()
# Access Set Items
thisset = {"apple", "banana", "cherry"}

for x in thisset:
  print(x)

# Check if "banana" is present in the set:
print()
thisset = {"apple", "banana", "cherry"}
print("banana" in thisset)

# Check if "banana" is NOT present in the set:
print()
thisset = {"apple", "banana", "cherry"}
print("banana" not in thisset)

# Add Items
print()
thisset = {"apple", "banana", "cherry"}
thisset.add("orange")
print(thisset)

print()
# Add Sets
thisset = {"apple", "banana", "cherry"}
tropical = {"pineapple", "mango", "papaya"}
thisset.update(tropical)
print(thisset)

print()
# Add Any Iterable
thisset = {"apple", "banana", "cherry"}
mylist = ["kiwi", "orange"]
thisset.update(mylist)
print(thisset)

# Remove Set Items
print()
thisset = {"apple", "banana", "cherry"}
thisset.remove("banana")
print(thisset)

# remove a random item by using the pop() method:
print()
thisset = {"apple", "banana", "cherry"}
x = thisset.pop()
print(x)
print(thisset)

# The clear() method empties the set:
print()
thisset = {"apple", "banana", "cherry"}
thisset.clear()
print(thisset)

# The del keyword will delete the set completely:
thisset = {"apple", "banana", "cherry"}
del thisset


#  Loop Sets
print()
thisset = {"apple", "banana", "cherry"}
for x in thisset:
  print(x)

# Join Sets
print()
set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
set3 = set1.union(set2)
print(set3)

# Use | to join two sets:
print()
set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
set3 = set1 | set2
print(set3)

# Join Multiple Sets
print()
set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
set3 = {"John", "Elena"}
set4 = {"apple", "bananas", "cherry"}
myset = set1.union(set2, set3, set4)
print(myset)

# Use | to join two sets:
print()
set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
set3 = {"John", "Elena"}
set4 = {"apple", "bananas", "cherry"}
myset = set1 | set2 | set3 |set4
print(myset)

# Join a Set and a Tuple
print()
x = {"a", "b", "c"}
y = (1, 2, 3)
z = x.union(y)
print(z)

# Update
print()
set1 = {"a", "b" , "c"}
set2 = {1, 2, 3}
set1.update(set2)
print(set1)

# Intersection
print()
set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}
set3 = set1.intersection(set2)
print(set3)

# Use & to join two sets:
print()
set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}
set3 = set1 & set2
print(set3)

# Keep the items that exist in both set1, and set2:
print()
set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}
set1.intersection_update(set2)
print(set1)

# Difference
print()
set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}
set3 = set1.difference(set2)
print(set3)

# difference update
print()
set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}
set1.difference_update(set2)
print(set1)

# Symmetric Differences
print()
set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}
set3 = set1.symmetric_difference(set2)
print(set3)

# Creating a frozenset
x = frozenset({"apple", "banana", "cherry"})
print(x)
print(type(x))