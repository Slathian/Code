import math
import time

def fizzbang(max_limit):
    number_set = list(range(1, max_limit  + 1))
    for num in number_set:
        if num % 3 == 0 and not num % 5 == 0:
            print('fizz')
        elif num % 5 ==0 and not num % 3 == 0:
            print('bang')
        elif num % 3 == 0 and num % 5 == 0:
            print('fizzbang')
        else:
            print(num)

fizzbang(100)

