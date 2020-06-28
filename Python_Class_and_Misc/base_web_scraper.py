import requests
from bs4 import BeautifulSoup as bs
from inflection import titleize as ttl

# INPUT WEBSITE BELOW #
#r = requests.get('    ###   ')
soup = bs(r.text, 'html.parser')
print(soup.prettify())
