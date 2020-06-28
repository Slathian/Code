import speech_recognition as sr
import os
from gtts import gTTS
from datetime import datetime
import warnings
import calendar
import random
import wikipedia
import time
import playsound
import webbrowser

def response(message):
    myobj = gTTS(text= message, lang='en', slow=False)
    myobj.save('assistant_response.mp3')
    playsound.playsound('assistant_response.mp3',True)
    os.remove('assistant_response.mp3')

def browse(recording):
    audio = recording
    #this looks for .com in the sentence, and then enacts on it if it finds it. 
    if '.com' in audio or 'dot-com' in audio:
    #if the string is complete, it will split it up and then pull the string with .com out of the list and push it into the web browser
        if '.com' in audio:
            for pull in audio.split():
                if '.com' in pull:
                    webbrowser.open(f'https://{pull}', new = 2)
                    response(f'{pull} has been opened')
        if 'dot-com' in audio:
            for pull in audio.split():
                if 'dot-com' in pull:
                    idx = index(pull) - 1
                    combine = f'{temp_data[idx]}.com'
                    webbrowser.open(f'https://{combine}', new = 2)
                    response(f'{combine} has been opened')                        
    elif '.org' in audio:
        for pull in audio.split():
            if '.org' in pull:
                webbrowser.open(f'https://{pull}', new = 2)
                response(f'{pull} has been opened')
    elif '.net' in audio:
        for pull in audio.split():
            if '.net' in pull:
                webbrowser.open(f'https://{pull}', new = 2)
                response(f'{pull} has been opened')
    elif 'tricky domain' in audio:
        response('Please clearly state the website you want to visit')
        repackage = recordAudio()
        webbrowser.open(f'https://{repackage.replace(" ", "")}', new = 2)
                          
    elif 'new' and not 'tab' in audio: 
        webbrowser.open('https://google.com', new = 2)
        
    else:
        response('If you are having trouble opening a website, remember that you can say, tricky domain, to activate a complex url compiler')
