import sqlite3
import hashlib

conn = sqlite3.connect("userdata.sql")
cur = conn.cursor()

cur.execute("""
    CREATE TABLE IF NOT EXISTS userdata (
        id INTEGER PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL           
    )
""")

user1, pass1 = "abc123", hashlib.sha256("abcpassword".encode()).hexdigest()
user2, pass2 = "def123", hashlib.sha256("defpassword".encode()).hexdigest()
user3, pass3 = "ghi123", hashlib.sha256("ghipassword".encode()).hexdigest()
user4, pass4 = "jkl123", hashlib.sha256("jklpassword".encode()).hexdigest()

cur.execute("INSERT INTO userdata (username, password) VALUES (?, ?)", (user1, pass1))
cur.execute("INSERT INTO userdata (username, password) VALUES (?, ?)", (user2, pass2))
cur.execute("INSERT INTO userdata (username, password) VALUES (?, ?)", (user3, pass3))
cur.execute("INSERT INTO userdata (username, password) VALUES (?, ?)", (user4, pass4))

conn.commit()