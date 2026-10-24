a = 33
b = 200
if b > a:
  print("b is greater than a")

# The Elif Keyword
a = 33
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")

#   example
score = 75

if score >= 90:
  print("Grade: A")
elif score >= 80:
  print("Grade: B")
elif score >= 70:
  print("Grade: C")
elif score >= 60:
  print("Grade: D")


# The Else Keyword
a = 200
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
else:
  print("a is greater than b")

# Else Without Elif
a = 200
b = 33
if b > a:
  print("b is greater than a")
else:
  print("b is not greater than a")


# Short Hand If
a = 5
b = 2
if a > b: print("a is greater than b")

# Short Hand If ... Else
a = 2
b = 330
print("A") if a > b else print("B")

# Assign a Value With If ... Else
a = 10
b = 20
bigger = a if a > b else b
print("Bigger is", bigger)

# Multiple Conditions on One Line
a = 330
b = 330
print("A") if a > b else print("=") if a == b else print("B")

# practical example
x = 15
y = 20
max_value = x if x > y else y
print("Maximum value:", max_value)

# Setting a default value:
username = ""
display_name = username if username else "Guest"
print("Welcome,", display_name)

# Nested If Statements
x = 41

if x > 10:
  print("Above ten,")
  if x > 20:
    print("and also above 20!")
  else:
    print("but not above 20.")


# Multiple Levels of Nesting
score = 85
attendance = 90
submitted = True

if score >= 60:
  if attendance >= 80:
    if submitted:
      print("Pass with good standing")
    else:
      print("Pass but missing assignment")
  else:
    print("Pass but low attendance")
else:
  print("Fail")

# The pass Statement
a = 33
b = 200

if b > a:
  pass