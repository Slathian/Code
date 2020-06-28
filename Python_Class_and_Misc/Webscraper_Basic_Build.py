html = ['<h1>', 'some content', '</h1>']
html2 = ['<h1>', 'some content', 'more content',  'some content', 'more content', 'some content', 'more content', '</h1>']
html1 = ['aint', 'no gay']

def remove_glob(webData):
    if len(webData) >= 3:
        _, *content, _ = webData
        return content
    else:
        error = 'The provided list does not have enough data for this function'
        return error

    
print(remove_glob(html1))
