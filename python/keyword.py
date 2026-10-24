def a_void_function():
    a = 1
    b = 2
    c = a + b

x = a_void_function()
print(x)

def improper_return_function(a):
    if (a % 2) == 0:
        return True

x = improper_return_function(3)
print(x)

# async , await
import asyncio

async def main():
    print('Hello')
    await asyncio.sleep(1)
    print('world')

asyncio.run(main())

# break 
print("using key word break")
for i in range(1,11):
    if i == 5:
        break
    print(i)
print("using key word continue")
# continue 
for i in range(1,11):
    if i == 5:
        continue
    print(i)

# if, else, elif

def if_example(a):
    if a == 1:
        print('One')
    elif a == 2:
        print('Two')
    else:
        print('Something else')

if_example(2)
if_example(4)
if_example(1)

# except, raise, try
def reciprocal(num):
    try:
        r = 1/num
    except:
        print('Exception caught')
        return
    return r

print(reciprocal(10))
print(reciprocal(0))

# for
names = ['John','Monica','Steven','Robin']
for i in names:
    print('Hello '+i)

# in
for i in 'hello':
    print(i)

# lambda
a = lambda x: x*2
for i in range(1,6):
    print(a(i))

# without using non local keyword
def outer_function():
    a = 5
    def inner_function():
        a = 10
        print("Inner function: ",a)
    inner_function()
    print("Outer function: ",a)

outer_function()
# output
# Inner function:  10
# Outer function:  5


# using non local keyword 
def outer_function():
    a = 5
    def inner_function():
        nonlocal a
        a = 10
        print("Inner function: ",a)
    inner_function()
    print("Outer function: ",a)

outer_function()

# output
# Inner function:  10
# Outer function:  10

# return
def func_return():
    a = 10
    return a

def no_return():
    a = 10

print(func_return())
print(no_return())

# while
i = 5
while(i):
    print(i)
    i = i - 1

# for yeild 
def generator():
    for i in range(6):
        yield i*i

g = generator()
for i in g:
    print(i)
