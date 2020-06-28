stats = {
    'Google': 10,
    'Facebook': 20,
    'Twitter': 7,
    'Discord': 25
}

def histogram(databank):
    dump = []
    counter = 0
    for (name, multiple) in databank.items():
        dollars = multiple * '$'
        data = f'{name}: {dollars}'
        dump.append(data)
        counter += 1
    
    iterations = counter
    counter -= 1
    item = ''
    while iterations > 0:
        item += f'''{dump[counter]}
'''
        counter -= 1
        iterations -= 1
    return item
        

print(histogram(stats))
