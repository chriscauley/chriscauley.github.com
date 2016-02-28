---
layout: post
title: "Intro to Programming Day 3"
description: ""
category: 
tags: []
---
{% include JB/setup %}

# Dictionaries

One of the most powerful data types in all of programming is the dictionary. Also known as a "linked-list" or "hash table" (or just object in javascript), the dictionary stores values according to keys. These both the keys and values can be any python object, but in practice they are limited to strings to avoid complications. Dictionaries are defined similar to lists in that they use commas to separate each key-value pair, however they use braces `{}` instead of brackets `[]` and colons to link a key to a value. The general form is `{key: value1, key2: value1 ...}`, but for clarity they are usually written on multiple lines.

{% highlight python %}
>>> student_scores = {
        'chris': 10,
        'june': 20,
    }

>>> student_scores['chris']
10

>>> student_scores['chris'] = 15
>>> student_scores['chris']
15

>>> student_scores['tony'] = student_scores['chris'] + 10
>>> student_scores['tony']
25
{% endhighlight %}

If you want to iterate over student scores, the default iteration of a dictionary just cycles through they keys. It's important to remember that the orders of these keys is not fixed and that the order of a dictionary shifts to what is most efficiently accessed in RAM. Python provides a few convenient methods to iterate over values of a dictionary (with `dictionary.values()`) or key value pairs (with `dictionary.items()`).

{% highlight python %}
>>> # the result of the following would be the same as `for score in dictionary.keys()`
>>> for name in student_scores:
       print name
chris
tony
june

>>> for name, score in student_scores.items():
       print name + " has " + str(score) + " points"
june has 10 points
tony has 25 points
chris has 15 points

>>> total = 0
    for score in student_scores.values():
       total = total + score

>>> average = total / 3
>>> average
16
{% endhighlight %}

# datetime

Quite possibly the most tedious thing a programmer has to deal with on a daily basis is handling dates and times. Python provides the datetime library to created `date` or `time` or `datetime` objects. It also has a `timedelta` object which can be used find the difference between two of the afformentioned objects. We're going to focus only on `datetime` and `timedelta`.

{% highlight python %}
>>> import datetime
>>> now = datetime.datetime.now() #1
>>> now
datetime.datetime(2014, 5, 7, 10, 51, 34, 712761)

>>> my_bday = datetime.datetime(1893,6,20) #2
>>> my_age = now - my_bday
>>> my_age
datetime.timedelta(11279, 39175, 182607)

>>> dir(my_age)
['__abs__', '__add__', '__class__', '__delattr__', '__div__', '__doc__', '__eq__', '__floordiv__',
 '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__',
 '__mul__', '__ne__', '__neg__', '__new__', '__nonzero__', '__pos__', '__radd__', '__rdiv__',
 '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rmul__', '__rsub__', '__setattr__',
 '__sizeof__', '__str__', '__sub__', '__subclasshook__', 'days', 'max', 'microseconds', 'min',
 'resolution', 'seconds', 'total_seconds']

>>> print my_age.total_seconds()
974544775.182607
{% endhighlight %}

This illustrates many important points:

1) `datetime.datetime.now()` returns a datetime object for the time it was instantiated. `datetime.date.today()` is a similar function returning a date.

2) datetimes and dates take in integers representing divisions of time in decreasing order. This is often times written as `datetime.datetime(year,month,date,[hour,[minute,[second,[microsecond]]]])`. Here the brackets on `[hour]` implies that it is optional (defaulting to 0, midnight, if not included). The brackets inside the brackets for `[hour,[minute,[second...]]]` implies that if minute is optional even with hour and so on. For this reason all of the following are the same: new years 1980.

{% highlight python %}
datetime.datetime(1980,1,1)          # bare minimum required! year, month and day
datetime.datetime(1980,1,1,0)        # zero hour!
datetime.datetime(1980,1,1,0,0)      # zero minute
datetime.datetime(1980,1,1,0,0,0)    # zero second
datetime.datetime(1980,1,1,0,0,0,0)  # zero microsecond
{% endhighlight %}

## Exercises

* Lincoln was in office from March 4, 1861 to April 15, 1865. How man days was this?

* Write a function that returns the English day of week that a date occurs. You'll probably need `dir(some_datetime)` or a little google to figure this one out.

# Classes and object oriented programming

Object Oriented Programming (or OOP) is the practive of creating custom data types that interract with each other. Data stored as "attributes" and functions stored as "methods". In python "everything is an object", meaning that for every piece of data you can do a `dir(variable)` to get a list of the methods and propreties that a given variable has. Note that for every integer, `dir(some_int)` will be the same as any other integer. Any two strings also have identical methods and properties. That's because all integers are instances of the class `int`. All strings are instances of the class `str`

By convention, classes are named WithCamelCase, capitalizing the letters of each word (annoyingly this rule does not apply to types, where int, str, datetime, type, and bool are not capitalized). A class is defined similary to a function.

{% highlight python %}
{% include geo.py %}
{% endhighlight %}

Here the `class Point` is defined and it has properties x, y, and z and methods __init__ and distance_to. Note that __init__ is what is called when point is called to instanciate a new instance `Point(0,0,0)`. Also note that both methods have a hidden value passed into them, `self`, which is a reference to the point itself.

This is useful because we can now make a new `class Sphere` that inherits from `Point`.

{% highlight python %}
{% include geo2.py %}
{% endhighlight %}

{% highlight python %}

{% endhighlight %}
