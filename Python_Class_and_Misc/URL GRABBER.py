import requests
import pprint as pp
r = requests.get('https://api.dailysmarty.com/posts')

for subsection in r.json()['posts']:
    pp.pprint(subsection['post_links'][0]['link_url'])



