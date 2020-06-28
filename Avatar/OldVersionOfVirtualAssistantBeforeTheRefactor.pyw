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

##### structure file imports
from Assistant_Web import browse
#####

warnings.filterwarnings('ignore')



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

    except sr.UnknownValueError: #Check for unknown errors
        #print('Google Speech Recognition could not understand the audio, unknown error')
        pass

    except sr.RequestError as e:
          print(f'Requests results from Google Speech Recognition service error: {e}')

    return data


def response(message):
    myobj = gTTS(text= message, lang='en', slow=False)
    myobj.save('assistant_response.mp3')
    playsound.playsound('assistant_response.mp3',True)
    os.remove('assistant_response.mp3')

def wakeWord(audio):
    #self explanatory list of wake words
    WAKE_WORDS = ['avatar online', 'eyes up airbender', 'izip airbender']
    audio = audio.lower()
    print(audio)
    for phrase in WAKE_WORDS:
        if phrase in audio:
            return True

    return False

def initiator():
    response_words = ['What can I do for you?', 'Hello']


    if wakeWord(recordAudio()):
        response('What can I do for you?')
        initiateAssistant(recordAudio())

def yes_or_no():
    while True:
        y_or_n = recordAudio()
        if 'yes' in y_or_n or 'yeah' in y_or_n or 'do it' in y_or_n:
            response('Shutting down')
            exit()
        elif 'no' in y_or_n or 'nope' in y_or_n or 'nah' in y_or_n:
            response('Shutting down process aborted')
            return False
        else:
            response('im sorry I could not hear you')

#MAIN FILES THAT INITIATES #######################################################
def initiateAssistant(audio):
    #This makes it so that things can be heard correctly, make sure to have all code in lower case
    audio = audio.lower()
    



    #From here beflow is what I use to iterate through my code and allow my program to do things
    if 'set' in audio and 'mood' in audio:
        webbrowser.open('https://www.youtube.com/watch?v=8j2gF-hq5C0', new = 2)

    elif 'take me' in audio and 'class' in audio:
        webbrowser.open('https://bottega.devcamp.com/public-profile/joshua-hunter12840', new= 2)

    elif 'gmail' in audio and 'open' in audio:
        print(audio)
        webbrowser.open('https://mail.google.com/mail/u/0/#inbox', new = 2)
        response('Your gmail has been opened')
    
    elif 'tell' in audio and 'joke' in audio:
        response('I am an empty soul and cannot tell jokes')
        
    elif 'what' in audio and 'time' in audio:
        now = datetime.now()
        current_time = now.strftime("%H:%M")
        if int(now.strftime('%H')) > 12:
            time_cutter = int(now.strftime("%H")) - 12
            current_time = f'{time_cutter}:{now.strftime("%M")}'
            time_block = 'pm'
            #this sting converts the audio
            response(f'The current time is now {current_time} {time_block}')
        else:
            time_block = 'am'
            response(f'The current time is now {current_time} {time_block}')
            #since it is AM, this does not need reformatting
    
    elif 'open' in audio and 'browser' in audio or 'open' in audio and 'chrome' in audio:
        browse(audio)

    elif 'initiate' in audio and 'self-destruct' in audio:
        print(audio)
        response('are you sure you wish to shutdown?')
        yes_or_no()

    else:
        print(audio)
        response("I could not catch that")
        pass

            

response('Debugging Process. Build version 1.13_Avatar')
while True:
    initiator()



