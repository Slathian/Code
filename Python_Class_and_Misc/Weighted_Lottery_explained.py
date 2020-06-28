import numpy as np

weights = {
    'winning': 1,
    'break_even': 2,
    'losing': 3
    }

def weighted_lottery(dictionary_input):
    container_list = []
    for (y, x) in weights.items():
        #takes in the first chunk
        #x is calculated as how many iterations that I want to run
        #y is literally just the name. the container list is empty and for the iterations, we are filling up the list with copies of the name.
        #the first Loop does not end until the second Loop is finished with its iterations
        for _ in range(x):
            container_list.append(y)

    return np.random.choice(container_list)
    #this is just a better way to pull random stuff from a given list. This could have made my code back in the day so much more simple.
    #nimpy ---> the function of random ----> choice; up to the program to randomly choose a value from the given list

print(weighted_lottery(weights))
    
