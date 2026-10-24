a = "Hello"
b = "World"
c = a + b
print(c)

a = "Hello"
b = "World"
c = a + " " + b
print(c)

# format-string
# age = 36
# #This will produce an error:
# txt = "My name is John, I am " + age
# print(txt)

#  shows error :- TypeError: can only concatenate str (not "int") to str

# F-Strings
age = 36
txt = f"My name is John, I am {age}"
print(txt)

# Placeholders and Modifiers
price = 59
txt = f"The price is {price} dollars"
print(txt)

price = 59
txt = f"The price is {price:.2f} dollars"
print(txt)

txt = f"The price is {20 * 59} dollars"
print(txt)

# Execute Functions in F-Strings
fruit = "apples"
txt = f"I love {fruit.upper()}"
print(txt)
def myconverter(x):
  return x * 0.3048

txt = f"The plane is flying at a {myconverter(30000)} meter altitude"
print(txt)

price = 59000
txt = f"The price is {price:,} dollars"
print(txt)

# string format
price = 49
txt = "The price is {} dollars"
print(txt.format(price))

quantity = 3
itemno = 567
price = 49
myorder = "I want {} pieces of item number {} for {:.2f} dollars."
print(myorder.format(quantity, itemno, price))

# named indexes
myorder = "I have a {carname}, it is a {model}."
print(myorder.format(carname = "Ford", model = "Mustang"))