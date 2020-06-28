stats = {
    'Google': 10,
    'Facebook': 20,
    'Twitter': 7,
    'Discord': 25
}

def histogram(databank):
    first_iteration = True
    first_iterationSecond = True
    counter = 0
    end_count = 0
    triggered = 0
    temp_histogram_databank = []
    for (name, multiple) in databank.items():
        tempName = name
        
        if first_iterationSecond == True:
            #~~~ Trigger Loop
            counterSecond = 0
            first_iterationSecond = False
            first_multiple_count = multiple
            print(first_multiple_count)
        
        if counter == multiple:
                    print('this should work')
                    print(counter)
                    print(multiple)
        pre_counter_wipe = counter
        print(counter)
        counter = 0
        triggered += 1
        print(multiple)
        
        #~~~ Second Loop Section    
        for _ in range(multiple):
            if first_iteration == True:
                #~~~ Second Layer Trigger Loop
                tempNameSecond = name
                first_iteration = False
                firstName = name
            counter += 1

            if counter == multiple:
                    print('this should work')
                    print(counter)
                    print(multiple)

  #          if tempName != tempNameSecond:
                #dollars = pre_counter_wipe * '$'
                #temp_histogram_data = f' {name}: {dollars}'
                  #temp_histogram_databank.append(temp_histogram_data)
            print(name)
            tempNameSecond = name
            counter += 1

    #~~~ Outside of the Loop
    pre_counter_wipe =counter
    dollars = pre_counter_wipe * '$'
    temp_histogram_data = f' {name}: {dollars}'
    #temp_histogram_databank.append(temp_histogram_data)
    #print(temp_histogram_databank)
    iterations = triggered
    triggered -= 1

    while iterations > 0:
        #print(temp_histogram_databank[triggered])
        triggered -= 1
        iterations -= 1
    
    





histogram(stats)
