import requests
from bs4 import BeautifulSoup as bs
from inflection import titleize as ttl

r = requests.get('http://www.dailysmarty.com/topics/python')
soup = bs(r.text, 'html.parser')

def generator(links):
    titles = []

    def formatter(url):
        if url.has_attr('href') and '/posts/' in url.get('href'):
            url = url['href'].split('/')[-1]
            url = url.replace('-', ' ')
            url = ttl(url)
            titles.append(url)
            
    for link in links:
        formatter(link)

    return titles

data = soup.find_all('a')
for temp in generator(data):
    print(temp)
