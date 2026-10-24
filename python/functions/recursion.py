# A simple recursive function that counts down from 5:
def countdown(n):
  if n <= 0:
    print("Done!")
  else:
    print(n)
    countdown(n - 1)

countdown(5)

def factorial(n):
  # Base case
  if n == 0 or n == 1:
    return 1
  # Recursive case
  else:
    return n * factorial(n - 1)

print(factorial(5))

# Fibonacci Sequence
def fibonacci(n):
  if n <= 1:
    return n
  else:
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(7))

# recursion with lists
def sum_list(numbers):
  if len(numbers) == 0:
    return 0
  else:
    return numbers[0] + sum_list(numbers[1:])

my_list = [1, 2, 3, 4, 5]
print(sum_list(my_list))