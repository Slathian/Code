import time
import math
import random
import re
import string

def darth():
    toTranslate = input('Type what you want to Derpify : ')
    temp = toTranslate.split()
    assembler = []
    for x in temp:
        tempList = ""
        counter = 0
        for y in x:
            if counter == 0:
                y = y.lower()
                
            if counter == 1:
                y = y.upper()
                counter -= 1

            else:
                counter += 1


            tempList= tempList + y
        
        assembler.append(tempList)

    tempSentence = ""
    for x in assembler:
        tempSentence = tempSentence + x +" "
    return tempSentence

