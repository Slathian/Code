import math
from functools import reduce

sale_prices = [
  100,
  83,
  220,
  40,
  100,
  400,
  10,
  1,
  3,
  69
]

def median(number_batch):
    sorted_list = sorted(sale_prices)
    temp1 = len(number_batch)
    temp2 = temp1 % 2
    if temp2 == 0:
        temp1 /= 2
        temp1_1 = temp1 +1      
        temp3 = int(temp1)
        temp3_1 = int(temp1_1)
        return f' The median of this data set is {sorted_list[temp3]} and {sorted_list[temp3_1]}'
    if temp2 ==1:
        temp1 -=1
        temp1 /= 2        
        temp3 = int(temp1)
        return f'The median of this number set is {sorted_list[temp3]}'

print(median(sale_prices))

    
