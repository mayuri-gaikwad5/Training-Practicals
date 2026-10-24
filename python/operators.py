sum1 = 100 + 50      # 150 (100 + 50)
sum2 = sum1 + 250    # 400 (150 + 250)
sum3 = sum2 + sum2   # 800 (400 + 400)

x = 15
y = 4

print(x + y)
print(x - y)
print(x * y)
print(x / y)
print(x % y)
print(x ** y)
print(x // y)
# / - Division (returns a float)
# // - Floor division (returns an integer)

# The Ternary Operator
print()
num = 6
x = "WEEKEND!" if num > 5 else "Workday"
print(x)

# Instead of Elif:
num = 6
x = "Fri" if num == 5 else "Sat" if num == 6 else "Sun" if num == 7 else "weekday"
print(x)

# Comparison Operators
x = 5
y = 3

print(x == y)
print(x != y)
print(x > y)
print(x < y)
print(x >= y)
print(x <= y)

# logical operator
x = 5
print(x > 0 and x < 10)

print(x < 5 or x > 10)

# Identity Operators
x = ["apple", "banana"]
y = ["apple", "banana"]
z = x

print(x is z)
print(x is y)
print(x == y)
print(x is not y)