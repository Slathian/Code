import speech_recognition as sr
import os
from gtts import gTTS
from datetime import datetime
import warnings
import calendar
import random
import wikipedia
import time
import mainLib
from meme import darth
import playsound
import webbrowser

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

def wakeWord(audio):
    #self explanatory list of wake words
    WAKE_WORDS = ['hey avatar', 'computer poke avatar', 'avatar online', 'morning avatar', 'avatar come online', 'avatar']
    audio = audio.lower()
    print(audio)
    for phrase in WAKE_WORDS:
        if phrase in audio:
            return True

    return False


def initiator():
    if wakeWord(recordAudio()):
        response = 'What can I do for you?'
        myobj = gTTS(text= response, lang='en', slow=False)
        myobj.save('assistant_response.mp3')
        playsound.playsound('assistant_response.mp3',True)
        os.remove('assistant_response.mp3')
        initiateAssistant(recordAudio())

def response(message):
        myobj = gTTS(text= message, lang='en', slow=False)
        myobj.save('assistant_response.mp3')
        playsound.playsound('assistant_response.mp3',True)
        os.remove('assistant_response.mp3')

#MAIN FILES THAT INITIATES
def initiateAssistant(audio):
    #I am using this to tell a joke
    audio = audio.lower()


    #From here beflow is what I use to iterate through my code and allow my program to do things

    if 'tell' and 'joke' in audio:
        response('Tiger fucker! Tiger fucker! Tiger fucker!')
        
    elif 'time' in audio:
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

    #this takes in the following data and turns it into a meme        
    elif 'reconfigure' and 'meme' in audio:
        print(darth())

    elif 'church' and 'sex' in audio:
        response('Greetings Lucy, do you have a moment to talk about Josh eating out your pussy?')
    
    #This whole section is for browser manupulation
    elif 'open' and 'browser' in audio or 'open' and 'chrome' in audio:
 
        #this looks for .com in the sentence, and then enacts on it if it finds it. 
        if '.com' in audio or 'dot-com' in audio:
            #if the string is complete, it will split it up and then pull the string with .com out of the list and push it into the web browser
            if '.com' in audio:
                temp_data = audio.split()
                for pull in temp_data:
                    if '.com' in pull:
                        webbrowser.open(f'https://{pull}', new = 2)
                        response(f'{pull} has been opened')
            if 'dot-com' in audio:
                temp_data = audio.split()
                for pull in temp_data:
                    if 'dot-com' in pull:
                        idx = index(pull) - 1
                        combine = f'{temp_data[idx]}.com'
                        webbrowser.open(f'https://{combine}', new = 2)
                        response(f'{combine} has been opened')                        
        elif '.org' in audio:
            temp_data = audio.split()
            for pull in temp_data:
                if '.org' in pull:
                    webbrowser.open(f'https://{pull}', new = 2)
                    response(f'{pull} has been opened')
        elif '.net' in audio:
            temp_data = audio.split()
            for pull in temp_data:
                if '.net' in pull:
                    webbrowser.open(f'https://{pull}', new = 2)
                    response(f'{pull} has been opened')

        elif 'tricky domain' in audio:
            response('Please clearly state the website you want to visit')
            repackage = recordAudio()
            webbrowser.open(f'https://{repackage.replace(" ", "")}', new = 2)
            
            
        elif 'new' and not 'tab' in audio: 
            webbrowser.open('https://google.com', new = 0)

        else:
            response('If you are having trouble opening a website, remember that you can say, tricky domain, to activate a complex url compiler')

    elif 'shut down' or 'shutdown' in audio:
        response('shutting down')
        exit()

response('Build version 1.03_Avatar')
while True:
    initiator()



