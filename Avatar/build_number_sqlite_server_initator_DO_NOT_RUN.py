import sqlite3

conn = sqlite3.connect('avatarServer.db')
c = conn.cursor()
c.execute("CREATE TABLE IF NOT EXISTS versionController (versionNumber INT, UID INT)")
c.execute("INSERT INTO versionController (versionNumber, UID) VALUES (?, ?)", (16, 0))
conn.commit()
c.close()
conn.close()