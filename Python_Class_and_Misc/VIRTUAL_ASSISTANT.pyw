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
import mainLib
from meme import darth
from Assistant_Web import browse
#####

warnings.filterwarnings('ignore')

#Recording our audio and returning it as a string
def recordAudio():

    #recording the audio
    r= sr.Recognizer() #creating a recognizer object
    
    #opening mic, and recording
    with sr.Microphone(device_index=3) as source:
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
    #I am using this to tell a joke
    audio = audio.lower()
    
    #From here beflow is what I use to iterate through my code and allow my program to do things
    if 'set' in audio and 'mood' in audio:
        webbrowser.open('https://www.youtube.com/watch?v=8j2gF-hq5C0', new = 2)

    elif 'take me' in audio and 'class' in audio:
        webbrowser.open('https://bottega.devcamp.com/public-profile/joshua-hunter12840', new= 2)

    elif 'gmail' in audio and 'open' in audio:
        print(audio)
        webbrowser.open('https://mail.google.com/mail/u/0/#inbox', new = 2)
    
    elif 'tell' in audio and 'joke' in audio:
        response('Tiger fucker! Tiger fucker! Tiger fucker!')
        
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

    elif 'church' in audio and 'sex' in audio:
        response('Greetings Lucy, do you have a moment to talk about Josh eating out your pussy?')
    
    #This whole section is for browser manupulation
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

            

response('Build version 1.12_Avatar')
while True:
    initiator()



