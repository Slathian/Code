import speech_recognition as sr
import os
from gtts import gTTS
from datetime import datetime
import time
import warnings
import calendar
import random
import wikipedia
import time
import playsound
import webbrowser
import sqlite3

##### structure file imports
from Avatar_defined_inputs import browse, recordAudio, response, wakeWord, yes_or_no as y_n
import Avatar_db as db
# -----


##### Warning ignore 
warnings.filterwarnings('ignore')
# -----

##### Initiation Code
def initiator():
    #response_words = ['insert noise here']
    #temp_var = random.choice(response_words)

    if wakeWord(recordAudio()):
        #response(temp_var)
        playsound.playsound('sounds/int_beep.mp3',True)
        initiateAssistant(recordAudio())

# -----


##### AI PROCESSING CODE CHUNKS
def initiateAssistant(audio):
    #This makes it so that things can be heard correctly, make sure to have all code in lower case
    audio = audio.lower()
    
    #From here beflow is what I use to iterate through my code and allow my program to do things
    if 'set' in audio and 'mood' in audio:
        webbrowser.open('https://www.youtube.com/watch?v=8j2gF-hq5C0', new = 2)

    elif 'set' in audio and 'reminder' in audio:
        response('what is your reminder?')
        db.create_table('reminders')
        temp_audio = recordAudio()
        db.dyn_data_entry(temp_audio)
        response('the reminder has been set')
    
    elif 'what' in audio and 'reminders' in audio or 'what' in audio and 'reminder' in audio:
        data = db.read_from_db('reminderContent', 'reminders')
        for row in data:
            response(str(row))

    elif 'take me' in audio and 'class' in audio or 'open' in audio and 'class' in audio or 'take me' in audio and 'classes' in audio or 'open' in audio and 'classes' in audio :
        webbrowser.open('https://bottega.devcamp.com/public-profile/joshua-hunter12840', new= 2)

    elif 'gmail' in audio and 'open' in audio:
        print(audio)
        webbrowser.open('https://mail.google.com/mail/u/0/#inbox', new = 2)
        response('Your gmail has been opened')
    
    elif 'tell' in audio and 'joke' in audio:
        response('I am an empty soul and cannot tell jokes')
    
    elif 'open' in audio and 'browser' in audio or 'open' in audio and 'chrome' in audio:
        browse(audio)

    elif 'initiate' in audio and 'self-destruct' in audio:
        print(audio)
        response('are you sure you wish to shutdown?')
        y_n()

    elif 'nevermind' in audio or 'never mind' in audio:
        pass

    else:
        print(audio)
        response("I could not catch that")
        pass




# -----

##### Activator loop module and automatic version controller updator
conn = sqlite3.connect('avatarServer.db')
c = conn.cursor()
c.execute("SELECT versionNumber FROM versionController WHERE UID=0")
buildNumber = c.fetchall()[0][0]
updatedBuildNumber = buildNumber + 0.01
c.execute(f"UPDATE versionController SET versionNumber = {updatedBuildNumber} WHERE versionNumber = {buildNumber} AND UID = 0")
conn.commit()

c.close()
conn.close()
print (buildNumber)
response(f'Debugging Process. Build version {buildNumber}_Avatar')
while True:
    initiator()

# -----