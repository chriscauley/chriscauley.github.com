---
layout: post
title: "Intro to Programming Day 2"
description: ""
category: 
tags: []
---
{% include JB/setup %}

# 1 - for loops and lists

While loops allow you to repeat a set of code over and over until a `break` statement is reached or until the conditional of the while loop is met. This can be used to cycle through individual items, but for convenience sake you can also use `for ... in ...:` syntax, which is known as a for loop.

{% highlight python %}
print "entering loop"
for letter in "ABCDEFG":
    print letter

print "exiting loop"
{% endhighlight %}

The output of this would look like

{% highlight python %}
entering loop
A
B
C
D
E
F
G
exiting loop
{% endhighlight %}

Just like with a while loop, the for loop repeats the indented code, but each time the code is repeated the value of the variable `letter` changes to the next letter in the sequence. In this case the sequence is a string so the items in the string are each character. Most types in python can be iterated in some way (integers cannot). A list is a series of python objects that can be iterated over. For example, part of a game of battleship might look something like this:

{% highlight python %}
ship_positions = ['A1','A2','A3','G4','H4','I4','J4']
def check_guess(guess):
    for position in ship_positions:
        if guess == position:
            print "hit!"
            return True
    print "miss!"
    return False
{% endhighlight %}

Here a guess of 'H4' will first try 'A1'. Since they are not equal, the code inside the if statement will not execute and the for loop will repeat. When it gets to 'H4', it will `print "hit!"` and the function will exit when True is returned. The `print "miss!"` line will not execute because it returned before the for loop was completed. `guess("J5")` will try every value in `ship_positions` and when none match it will `print "miss!"` and `return False`. We could write a function to simplifie this simple behavior, but since this is common python provides the `in` operator (not to beconfused with `for ... in ...:`). The following is equivalent to the program above:

{% highlight python %}
ship_positions = ['A1','A2','A3','G4','H4','I4','J4']
def check_guess(guess):
    if guess in ship_positions:
        print "hit!"
        return True
    print "miss!"
    return False
{% endhighlight %}

The above is a list of strings, but a list can be a mixture of any objects. In python we can use the `range(i)` function to create a list of numbers of length `i`. We can also use the function `len(variable)` to get the integer length of a variable. Note that range gives a list starting with 0, because this is usually programatically more convenient.

{% highlight python %}
>>> word = "Constantinople"
>>> print "The word " + word + " is " + str(len(word)) + " letters long."
The word Constantinople is 14 letters long.
{% endhighlight %}

## Exercises

1. Write a program that will count to 100 by 5s (printing 0,5,10...100). There are many ways to solve this using what we've learned so far.

2. Save five names to a list. Print out the names. Then try to print the individual letters of each of the names (hint: you can put a loop inside a loop by indenting twice).

3. Range is very versitile in that it can take 1-3 arguments. Try each of the following. Can you deduce what range is doing with the extra arguments?

{% highlight Python %}
print range(1,10)
print range(1,20)
print range(0,20,2)
print range(0,105,5)
{% endhighlight %}

# 2 - A few string methods

Last week we asked for a `raw_input` where we wanted a number. If the user enters an invalid value, then trying to turn the input into an integer results in a `ValueError`.

{% highlight Python %}
>>> some_number =raw_input("Enter a number: ")
Enter a number: a
>>> print some_number
a
>>> int(some_number)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: invalid literal for int() with base 10: 'a'
{% endhighlight %}

What we want is a function that checks to see if `some_number` is a number. As you can imagine, if there was a built in function for everything we could want to do for a string then it would be impossible to memorize all the built in functions and naming variables would become very difficult. Instead a string has a variety of "methods". Think of these as functions that automatically use the string as an argument.

{% highlight python %}
>>> not_a_number = 'a'
>>> a_number = '1'
>>> not_a_number.isdigit()
False
>>> a_number.isdigit()
True
{% endhighlight %}

If there was a function `isdigit` you would write `isdigit(some_variable)`, but all strings have a method `isdigit` which determines if the string can be turned into an `int` and returns `True` or `False` accordingly. So we use the method on the string to tell if is a number by writting `some_variable.isdigit()`

To see all of the methods of a string we can use the `dir` built in function, which prints a list of all possible methods of the variable. `dir` will always show the same thing for any two strings, but will return a different list of methods for a different type.

{% highlight python %}
>>> print dir('a')
['__add__', '__class__', '__contains__', '__delattr__', '__doc__', '__eq__', '__format__', '__ge__', 
'__getattribute__', '__getitem__', '__getnewargs__', '__getslice__', '__gt__', '__hash__', '__init__', '__le__',
'__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', 
'__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '_formatter_field_name_split', 
'_formatter_parser', 'capitalize', 'center', 'count', 'decode', 'encode', 'endswith', 'expandtabs', 'find', 'format', 
'index', 'isalnum', 'isalpha', 'isdigit', 'islower', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 
'lstrip', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 
'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
>>> print dir([1,2])
['__add__', '__class__', '__contains__', '__delattr__', '__delitem__', '__delslice__', '__doc__', '__eq__', 
'__format__', '__ge__', '__getattribute__', '__getitem__', '__getslice__', '__gt__', '__hash__', '__iadd__', 
'__imul__', '__init__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__', '__reduce__', 
'__reduce_ex__', '__repr__', '__reversed__', '__rmul__', '__setattr__', '__setitem__', '__setslice__', '__sizeof__',
'__str__', '__subclasshook__', 'append', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
{% endhighlight %}

Looking at this we can see many useful methods for strings and lists. I'll briefly describe a few of these. We'll ignore the "magic methods" or those starting with underscores, "_". These are advanced and outside the scope of this class. Don't worry about memorizing this list just yet. This is mostly just to give you an idea of what each method can do.

{% highlight python %}
>>> some_string = "This is a string"
>>> print some_string.lower()
this is a string
>>> print some_string.upper()
THIS IS A STRING
>>> print some_string.title()
This Is A String
>>> print some_string.startswith('t')
False
>>> print some_string.startswith('T')
True
>>> print some_string.lower().startswith('t')
True
>>> print some_string
this is a string
{% endhighlight %}


And now their definitions:

* `str.lower()` - return the string with all letters lowercase.

* `str.upper()` - return the string with all letters uppercase. 

* `str.title()` - return the string with the first letter of every word capitalized.

* `str.startswith(string)` - takes in a string as an argument and returns `True` or  `False` depending on whether or not the string starts with the string argument.

* `some_string.lower().startswith('t')` - This shows that you can "chain" methods together. Because `str.lower()` returns a string, you can apply `.startswith('t')` to the result.

* The last line is to illustrate that the string has not changed

And now some `list` methods:

{% highlight python %}
>>> a_list = range(3)
>>> print a_list
[0,1,2]
>>> a_list.append("monkey")
>>> print a_list
[0,1,2,"monkey"]
>>> a_list.insert(1,666)
>>> print a_list
[0,666,1,2,"monkey"]
>>> a_list.sort()
>>> print a_list
[0,1,2,666,"monkey"]
{% endhighlight %}

And now the definitions:

* `list.append(variable)` - adds the variable to the end of the list. This increases the length of the list by one.

* `list.insert(position,variable)` - inserts the variable at the position. This will increase the length of the list by one.

* `list.sort()` - sorts the list.

* Notice that neither of these return a value. Instead the variable `a_list` itself is changed. This is very different then the methods of a string. If you want to keep the original list, you must save it as a different variable.

{% highlight python %}
def number_input(prompt):
    value = raw_input(prompt)
    while not value.isdigit():
        value = raw_input("Sorry, the value must be a whole number ")
    return int(value)
{% endhighlight %}

# 3 - Hangman!

And now, two days into the class, we finally have all to tools to write a somewhat interesting program. This is going to consist of two files, a library of functions we'll use and a program that uses those tools to play hangman. Let's start with the latter, a file we'll call `hangman.py`

{% highlight python %}
{% include hangman.py %}
{% endhighlight %}

{% highlight python %}
{% include hangman.py %}
{% endhighlight %}

