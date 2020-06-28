import sqlite3
import time
import datetime

# This is what you need for connection to avatarServer.db
#conn = sqlite3.connect('avatarServer.db')
#c = conn.cursor()
# you can have multiple servers, might make a seperate one for the version number but idk if I will do that. 


def create_table(table):
    conn = sqlite3.connect('avatarServer.db')
    c = conn.cursor()
    c.execute(f"CREATE TABLE IF NOT EXISTS {table} (reminderContent TEXT, datestamp TEXT)")
    c.close()
    conn.close()


def dyn_data_entry(audio):
    conn = sqlite3.connect('avatarServer.db')
    c = conn.cursor()
    unix = time.time()
    date = str(datetime.datetime.fromtimestamp(unix) .strftime('%Y-%m-%d %H:%M:%S'))
    c.execute("INSERT INTO reminders (reminderContent, datestamp) VALUES (?, ?)", (str(audio), date))
    conn.commit()
    c.close()
    conn.close()

def read_from_db(column, table):
    conn = sqlite3.connect('avatarServer.db')
    c = conn.cursor()
    c.execute(f"SELECT {column} FROM {table}")
    data = c.fetchall()
    c.close()
    conn.close()
    return data
