print("Hello")
print('Hello')

print("Quotes Inside Quotes ")
print("It's alright")
print("He is called 'Johnny'")
print('He is called "Johnny"')

print("Assign String to a Variable")
a = "Hello"
print(a)

print("Multiline Strings")
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a)

print("Strings are Arrays")
a = "Hello, World!"
print(a[1])


print("Looping Through a String")
for x in "banana":
  print(x)


print("String Length")
a = "Hello, World!"
print(len(a))

print("Check String")
txt = "The best things in life are free!"
print("free" in txt)
# Print only if "free" is present:
txt = "The best things in life are free!"
if "free" in txt:
  print("Yes, 'free' is present.")

print("Check if expensive is NOT present in the following text:")
txt = "The best things in life are free!"
print("expensive" not in txt)
