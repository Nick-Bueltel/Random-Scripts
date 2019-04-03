# GUI implementation
#The purpose of this revision is to add a GUI element to the eznetlogin script
#Nick Bueltel
#TRITEC
#3/1/19

import subprocess
import tkinter as tk
import tkinter
import json
from tkinter import *
from tkinter import messagebox
import os
def clear_button():
   subprocess.call(r'net use f: /del /Y', shell=True)
   subprocess.call(r'net use m: /del /Y', shell=True)
   subprocess.call(r'net use p: /del /Y', shell=True)
   subprocess.call(r'net use t: /del /Y', shell=True)
   subprocess.call(r'net use y: /del /Y', shell=True)

def default_password():
   filename = 'cfg'
   with open(filename) as f_obj:
       PASSWORD = json.load(f_obj)

       # reconnect to the network drives
       subprocess.call(r'net use f: \\leecodc\global /user:office\leecocnc1 ' + PASSWORD, shell=True)
       subprocess.call(r'net use m: \\leecodc\shop /user:office\leecocnc1 ' + PASSWORD, shell=True)
       subprocess.call(r'net use p: \\leecodc\ncprohd /user:office\leecocnc1 ' + PASSWORD, shell=True)
       subprocess.call(r'net use t: \\leecodc\3ddata /user:office\leecocnc1 ' + PASSWORD, shell=True)
       subprocess.call(r'net use y: \\leecodc\qb /user:office\leecocnc1 ' + PASSWORD, shell=True)

def new_password():

   PASSWORD2 = INPUTFIELD.get()

   subprocess.call(r'net use f: \\leecodc\global /user:office\leecocnc1 ' + PASSWORD2, shell=True)
   subprocess.call(r'net use m: \\leecodc\shop /user:office\leecocnc1 ' + PASSWORD2, shell=True)
   subprocess.call(r'net use p: \\leecodc\ncprohd /user:office\leecocnc1 ' + PASSWORD2, shell=True)
   subprocess.call(r'net use t: \\leecodc\3ddata /user:office\leecocnc1 ' + PASSWORD2, shell=True)
   subprocess.call(r'net use y: \\leecodc\qb /user:office\leecocnc1 ' + PASSWORD2, shell=True)

   filename = 'cfg'
   with open(filename, 'w') as f_obj:
       json.dump(PASSWORD2, f_obj)

#add tkinter elements.
class Window(Frame):
   def __init__(self, master=None,):
       Frame.__init__(self, master)
       self.master = master
       self.init_window()

   def init_window(self):
       self.master.title("EZNETMAP1.4")
       self.pack()

def print_helloworld():
   print("hello world")
root = Tk()

root.geometry("410x30")

mainframe = tk.Frame(root,)

mainframe.place(x=0, y=0, anchor="nw",)
CLEARBUTTON = tk.Button(mainframe, text="clear", fg="red", command=clear_button)
CLEARBUTTON.pack(side=LEFT)

MAPWITHDEFAULT = tk.Button(mainframe, text="Use default password", fg="blue", command=default_password)
MAPWITHDEFAULT.pack(side=LEFT)

NEWPASSWORD = tk.Button(mainframe, text="Use entered password", fg="green", command=new_password)
NEWPASSWORD.pack(side=RIGHT)

INPUTFIELD = tk.Entry(mainframe, fg="green", bg="black", relief="raised")
INPUTFIELD.pack(side=LEFT)

app = Window(root)

root.mainloop()

#using json module

#print("network drives mapped.")
input()