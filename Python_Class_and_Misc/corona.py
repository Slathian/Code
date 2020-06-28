import requests
from bs4 import BeautifulSoup as bs
from inflection import titleize as ttl

r = requests.get('https://www.google.com/search?rlz=1C1CHBF_enUS865US865&sxsrf=ALeKk00CQS13Zhdy9fGgmhuXpe-rpWsO8g:1586280380615&q=coronavirus+us&spell=1&sa=X&ved=2ahUKEwjC2-b06tboAhUPo54KHem3DywQBSgAegQIIhAm&biw=2560&bih=1307')
tree = bs(r.text, 'html.parser')
good_html = tree.prettify()
soup = bs(good_html, 'html.parser')
for class_ in soup.find_all('class'):
    print (class_)




#if 'class' in soup.find_('div'):
 #   print(soup.find_('div'))
