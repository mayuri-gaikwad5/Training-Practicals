# local scope
def myfunc():
  x = 300
  print(x)

myfunc()

# Function Inside Function
def myfunc():
  x = 300
  def myinnerfunc():
    print(x)
  myinnerfunc()

myfunc()

# Global Scope

x = 300

def myfunc():
  print(x)

myfunc()

print(x)

# local and gloabal
x = 300

def myfunc():
  x = 200
  print(x)

myfunc()

print(x)

# Global Keyword
# If you need to create a global variable, but are stuck in the local scope, you can use the global keyword

def myfunc():
  global x
  x = 300

myfunc()

print(x)
# Also, use the global keyword if you want to make a change to a global variable inside a function
x = 300

def myfunc():
  global x
  x = 200

myfunc()

print(x)

# Nonlocal Keyword
def myfunc1():
  x = "Jane"
  def myfunc2():
    nonlocal x
    x = "hello"
  myfunc2()
  return x

print(myfunc1())

# the LEGB Rule
# Local - Inside the current function
# Enclosing - Inside enclosing functions (from inner to outer)
# Global - At the top level of the module
# Built-in - In Python's built-in namespace
# Example

x = "global"

def outer():
  x = "enclosing"
  def inner():
    x = "local"
    print("Inner:", x)
  inner()
  print("Outer:", x)

outer()
print("Global:", x)
