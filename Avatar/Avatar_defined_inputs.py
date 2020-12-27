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


#Recording our audio and returning it as a string
def recordAudio():

    #recording the audio
    r= sr.Recognizer() #creating a recognizer object
    
    #opening mic, and recording
    with sr.Microphone() as source:
    #with sr.Microphone() as source:
        #print('Recording is on')
        audio = r.listen(source)

    #Utilize google speech recognition software
    data = ' '
    try:
        data = r.recognize_google(audio)
        #print(f'you said {data}')

    except sr.UnknownValueError: 
        #Checks for unknown errors
        #print('Google Speech Recognition could not understand the audio or there was an unknown error')
        pass

    except sr.RequestError as e:
          print(f'Requests results from Google Speech Recognition service error: {e}')

    return data

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
        # if 'dot-com' in audio:
        #     for pull in audio.split():
        #         if 'dot-com' in pull:
        #             idx = index(pull) - 1
        #             combine = f'{temp_data[idx]}.com'
        #             webbrowser.open(f'https://{combine}', new = 2)
        #             response(f'{combine} has been opened')                        
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

def wakeWord(audio):
    #self explanatory list of wake words
    WAKE_WORDS = ['avatar']
    audio = audio.lower()
    print(audio)
    for phrase in WAKE_WORDS:
        if phrase in audio:
            return True

    return False

def yes_or_no():
    while True:
        y_or_n = recordAudio()
        if 'yes' in y_or_n or 'yeah' in y_or_n or 'do it' in y_or_n or 'yup' in y_or_n:
            response('Shutting down')
            exit()
        elif 'no' in y_or_n or 'nope' in y_or_n or 'nah' in y_or_n:
            response('Shutting down process aborted')
            return False
        else:
            response('im sorry I could not hear you')

