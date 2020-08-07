import os
from tkinter import *
from bs4 import BeautifulSoup
import time

wait = time.sleep
root = Tk()


# https://fortnitetracker.com/events/epicgames_S13_DailyTrios_NAE_PC?window=S13_DailyTrios_NAE_PC_Event14
# Pulling the URL...
url = 0
def pullURL():
    global url
    url = urlInputField.get()
    urlLabel = Label(root, text = urlInputField.get())
    urlLabel.pack()
    print(url)
print(f'this is the url on the global scope {url}')
urlInputField = Entry(root, width = 150)
urlButton = Button(root, text = 'Input URL', command = pullURL)
DEBUG_BUTTON = Button


# Displaying to Tkinter
urlInputField.pack()
urlButton.pack()


root.mainloop()

# use flask front end ---> add new front end to a flask website to pass data back and forth. wrap into a package or set up for him. save / edit files on a flask application. Build on front end. 