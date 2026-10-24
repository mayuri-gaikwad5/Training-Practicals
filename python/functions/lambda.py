def myfunc(n):
  return lambda a : a * n

mydoubler = myfunc(2)

print(mydoubler(11))

# Lambda with Built-in Functions
numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
print(doubled)

# Using Lambda with filter()
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
odd_numbers = list(filter(lambda x: x % 2 != 0, numbers))
print(odd_numbers)

# Using Lambda with sorted()
students = [("Emil", 25), ("Tobias", 22), ("Linus", 28)]
sorted_students = sorted(students, key=lambda x: x[1])
print(sorted_students)