---
layout: post
title: "Intro to Programming"
description: ""
category: 
tags: [programming,python,educational]
---
{% include JB/setup %}

<!--## 1 - The Interactive Shell #! TODO: this section sucks

For this class we'll be using IDLE, a simple python interface that allows you to quickly run and test code. IDLE consists of two windows, an editor (for writing code) and an interactive prompt (for running code). Code written in the editor can be tested at any time by pressing F5 or selecting the run command from the window menus. From the computers perspective there is no difference between selecting run in the editor and typing it directly into the prompt. But using the editor allows you to save changes to your code to quickly re-run it whenever needed.
-->
# 0 - About this class

This class is based off the book [Invent Your Own Computer Games with Python](http://inventwithpython.com/chapters/) and if you are lost more detailed explanations can be found there. You'll want to install python 2.7.6 for windows (first link [here](https://www.python.org/downloads/windows/)  ) or type `python` in a mac or Linux terminal to get started.

# 1 - Math and Variables

## Integers

Open the interactive prompt and type `2+2`. Python evaluates this expression and prints the result on the line below like this:

{% highlight python %}
>>> 2+2
4
{% endhighlight %}

If you don't see the `>>>` characters then you're most likely in the editor not the prompt.

In python, arithmatic uses the following operators:

<table class="table-striped">
  <tr>
    <td>2+2</td><td>addition</td>
  </tr>
  <tr>
    <td>2-2</td><td>subtraction</td>
  </tr>
  <tr>
    <td>2*2</td><td>multiplication</td>
  </tr>
  <tr>
    <td>2/2</td><td>division</td>
  </tr>
</table>

Order of operations is the same in python as in math, evaluating from left to right, parentheses first, then multiplication and division followed by addition and subtraction. Try these in your prompt and feel free to make up your own.

{% highlight python %}
>>> 2+2+2+2+2
10

>>> 3*10 + 2
32

>>> 2 *  8+1
17

>>> 2 * (8+1)
18
{% endhighlight %}

As you can see, the spacing doesn't matter when writing these expressions. Typically one space is put between every number and operator so that the code is easy to read, but this is not a requirement. The only rule (for now) on spacing is that you can't add spacing to the begining of the line. We'll explain this as the class goes on.

## Variables

Computers store values in memory for later usage. In order for humans to reference values and remeber what they represent, we name the values. Try the following:

{% highlight python %}
>>> 2+2
4

>>> count = 2+2
>>>
{% endhighlight %}

Notice that the in the second line, the `4` wasn't printed afterwards. This is because the interactive prompt stored it as the variable `count`. If you don't store it as a variable, the prompt assumes that you want to see the answer (otherwise the value is lost and typing `2+2` accomplishes nothing). `count` now has a value of `4` and can be used anywhere a number can be used.

{% highlight python %}
>>> count
4

>>> count + 1
5

>>> count * 1000 + 300
4300

>>> new_count = count * 2
>>> new_count
10

>>> count = count + 1
>>> count
5

>>> new_count
10
{% endhighlight %}

The last few lines are very important. Unlike the value of `4` or `9` or `8675309`, the value of `count` is not fixed. It can be modified as needed. It can also be used to create new variables, but once the value of `new_count` is created, modifying `count` has no affect on `new_count`.

Variable names can any combination of letters, numbers and underscores as long as the first character is NOT a number. Other characters (spaces, periods, etc) cannot be used as variable names.

# 2 - Strings

In python, any series of characters surrounded by quotation marks or apostrophes is considered a string. Strings can be added with the `+` operator, and for strings this is called "concatenation". Here are some examples of how strings and integers interact.

{% highlight python %}
>>> name = "Chris"
>>> print "Hello" + name #1
HelloChris

>>> print "Hello " + name + ". How are you?"
Hello Chris. How are you?

>>> print "one\ttwo\tthree\n1\t\2\t3" #2
one       two       three
1       2       3

>>> people_in_car = 4
>>> print "There are " + people_in_car + " people in the car." #3
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: cannot concatenate 'str' and 'int' objects

>>> print "There are " + str(people_in_car) + " people in the car." #4
There are 4 people in the car.

>>> print 1 + int("2")
3

>>> print str(1) + "2"
12

>>> int("two") #5
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: invalid literal for int() with base 10: 'two'
{% endhighlight %}

There are several important things here. First off the comment. Any code after a `#` is ignored by python. This allows you to leave notes for humans to read. It's used above to connect lines of code to these notes:

1)  You strings are added together EXACTLY as they are typed. If you want to have spaces, you must specify them.

2) Certain characters that can't be typed can be make with escape characters. This is slash followed by the escape character. Here we use `\t` for a tab and `\n` for a line break.

3) In Python you cannot add strings and integers together. You can in some languages, but in Python it will raise a `TypeError` meaning you tried to do something with the wrong `type` of variable.

4) `str(some_int)` and `int(some_str)` will convert integers and strings to strings and integers respectively. For this reason `int` and `str` are reserved words and you cannot name a variable with these names.

5) Some strings cannot be converted to integers. These will raise a `VauleError` because a bad value was provided.

#3 - The `raw_input` Function

Another `type` in python is the function. A function takes in any number of arguments (variables passed into the function) and returns a value. You've already seen two functions above, the `int` and `str` functions that take in any type and returns a new variable corresponding to the type you asked for. `print` is similar to a function but without the parentheses. In python 3 `print` is actually a function, so if you see `print(some_value)` then you're probably in a python 3 tutorial.

The `raw_input(some_string)` function prints the argument you give it and then waits for the user to enter in any code via the keyboard. When the user hits enter, `raw_input` then returns the value entered in as a string.

{% highlight python %}
>>> name = raw_input("Type your name and press enter: ") #1
Type your name and press enter: Chris

>>> print "Hello " + name + "! I hope you are feeling well."
Hello Chris! I hope you are feeling well.

>>> age = raw_input("How old are you? ")
How old are you? 30

>>> seconds = int(age) * 365 * 24 * 60 * 60 #2
>>> print "That's " + str(seconds) + " seconds. Make every one count!"
{% endhighlight %}

1) I copied and pasted this from my python terminal so this is how it should look AFTER someone types in "Chris" and presses enter.

2) Note that types need to be converted back and forth as you go from concatenating strings to integer arithmatic.

#4 Guess the number

We now going to write a program called "Guess the number". It is best to write this in the editor and use the run option from the menu (if you're in IDLE) because unlike the above examples, this is a multi-line program. Guess the number has the following steps:

1) pick a random number

2) ask the user for a guess

3) compare their guess to our random number

4) if they guessed the right number, congratulate them

5) if not, repeat from step 2

Here is the full program we will use (copied directly from the source material, chapter 4). Feel free to paste this into your editor as is to save on typing.

{% highlight python %}
# This is a guess the number game.
import random #4.1

guesses_taken = 0 

print('Hello! What is your name?')
my_name = raw_input()

number = random.randint(1, 20) #4.2
print('Well, ' + my_name + ', I am thinking of a number between 1 and 20.')

while guesses_taken < 6: #4.3
    print('Take a guess.') # There are four spaces in front of print.
    guess = raw_input()
    guess = int(guess)

    guesses_taken = guesses_taken + 1

    if guess < number: #4.4
        print('Your guess is too low.') # There are eight spaces in front of print.

    if guess > number:
        print('Your guess is too high.')

    if guess == number:
        break

if guess == number:
    guesses_taken = str(guesses_taken)
    print('Good job, ' + my_name + '! You guessed my number in ' + guesses_taken + ' guesses!')

if guess != number:
    number = str(number)
    print('Nope. The number I was thinking of was ' + number)
{% endhighlight %}

There's a lot to cover here, so I will break it into sub sections.

### 4.1 - `import` Statements

If you had to write everything in one file, programming would become very tedious very quickly. In python, you can pull in code from other programs with import. Here you're importing a full module with `import module_name`. This imports an entire module of code that can be accessed by the module name followed by a period and then the name of the variable inside that module you want to access. You can also import only individual variables with the following syntax:

{% highlight python %}
import random
number_1 = random.randint(0,20) # returns a random variable between zero and 20

from random import randint
number_2 = randint(0,20) # same as above, though not necessarily the same number
{% endhighlight %}

In various circumstances it is better to do this one way or another. Generally, if you want to import one or two things from a module you use `from module import var1, var2...` while if you want to import a lot of things you'll use `import module`.

### 4.2 - The `random` module

Python is described as "batteries included" because many of the basic operations of programming are included in the default library. If you want to learn more about any given module, I recommend the [Python Module of the Week](http://pymotw.com/2/contents.html) blog over the official documention. A few useful functions found in random include:

* `random.random()` - returns a random number between zero and one.

* `random.randint(min_value,max_value)` - returns a random integer between the values given

* `random.choice(sequence)` - returns a random value from any sequence. Right now we only know strings, but there are many other data types that can be used.

Some other great builtin libraries are:

* `datetime` - a module used to handle dates, times, and datetimes (combination of the two).

* `sys` and `os` - modules for controling the computer that the program is running on (file structure manipulation and accessing other programs)

* `urllib` and `urllib2` - handle http connections with python

* `math` - advanced math functions

### 4.3 - `while` Statements

Programming relies heavily on flow control - the ability to move between parts of a program. In olden days, this would be "GOTO LINE 34", but in python and most modern languages we use programming blocks. The `while` keyword tells python to execute the programming block continuously as long as the condition is `True`. For example, this will repeat forever since `True` is always `True`.

{% highlight python %}
while True:
    print "This will never stop!"

print "This will never happen"
{% endhighlight %}

The first print command is inside the while loop because it is indented 4 spaces (other languages usually wrap this code in braces, `{}`). Because the part between the `while` and the colon is the conditional. Since `True` is always `True`, it never stops!

In the our "Guess the number" game, `guesses_taken` starts out as 0 and gets larger by 1 every time the program loops. At the end of the first loop, it goes up to the top of the while loop and repeats until `guesses_taken` is equal to 6. The other way to stop a `while` loop is with the keyword `break`, which terminates the code exactly where it is used whether or not the conditional is `False`

### 4.4 - `if` Statements

Another type of programming block is the `if` statement. Just like the `while` statement, `if` starts takes in a conditional, followed by a conditional and a colon. Any code indented after `if conditional:` is inside the block. Since we're already in a while loop, the `if` block is indented 8 spaces instead of 4.

{% highlight python %}
if True:
    print "This will always print"

if False:
    print "This will never print"

my_variable = random.randint(0,1)
if my_variable == 1:
    print "This will print half of the time"
{% endhighlight %}

## Conditionals and Booleans

`True` and `False` are the only two members of the type `bool`. In python, when you use any variable or expression as a conditional, it is converted to booleans. For example the following are equavalent:

{% highlight python %}
students = 16
if students:
    print "There are students"

if bool(students):
    print "There are not students"
{% endhighlight %}

Here you can see that 16 is considered `True` as far as conditionals are concerned. For integers, any integer except 0 will be considered `True`. For strings, any string except an empty string, `""`, is considered `True`.

Values can be compared using a number of boolean operators. All of the following examples evaluate as `True`.

<table class="table-striped">
  <tr>
    <td>Operator</td><td>Example</td><td>How Example is Read</td>
  </tr>
  <tr>
    <td>&gt;</td><td>4 &gt; 2</td><td>"Four is greater than two"</td>
  </tr>
  <tr>
    <td>&lt;</td><td>1 &lt; 2</td><td>"Two is less than Four"</td>
  </tr>
  <tr>
    <td> == </td><td>2 == 2</td><td>"Two is equal to two"</td>
  </tr>
  <tr>
    <td> == </td><td>2 != 1</td><td>"Two is not equal to one"</td>
  </tr>
</table>

These operators can be used with almost any data type, but in practice only equality and in equality are terribly useful for strings.

{% highlight python %}
# Ask the user for a password and 
password = "my_secret1!1"
password2 = raw_input("What's the password: ")
if password2 == password:
    print "Correct!"
if password2 != password:
    print "Fail!"
{% endhighlight %}

## Functions

A function is a mini-program within a program. We've already seen the funciton `raw_input()` and `int()` and `str()`. Each of these take in one argument and return an argument. Writing your own functions can simplify code and make programming much less repetative. For example, we know how to use `raw_input()` and `int()` to get a number from a user and turn it into an integer instead of a string. We can turn this into a new function as follows:

{% highlight python %}
def square(number):
    return number*number

def number_input(prompt):
    number = raw_input(prompt)
    return int(number)
{% endhighlight %}

The value in parenthesis is called the argument of a funciton. Each of the above functions have one argument, but a function can have as many arguments as desired. 

{% highlight python %}
def bigger_of_two(a,b):
    if a > b:
        return a
    return b

def display_welcome():
    print "Welcome to my program."
{% endhighlight %}

Notice that in the `bigger_of_two` function there is no `if b < a` necessary. This is because if `a` is larger than `b`, the function `return a`, thus immediately exiting the program. Even if the `return` is inside of a `while` loop or multiple `if` statements, the `return` will cause the function to close.

Also note that the `display_welcome` program doesn't have a `return` statement. When the indentation ends, the funciton automatically terminates returning `None`.

{% highlight python %}
{% endhighlight %}

{% highlight python %}
{% endhighlight %}
