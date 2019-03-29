#The purpose of this revision is to add the option of persistence through the ability to change and save
#the default password variable
#Nick Bueltel
#TRITEC
#3/1/19

import subprocess
import json

#add tkinter elements.
#Research how cycle multiple tkinter windows/options
#research python script persistence - pickleing/ unpickleing should take care of it
#use pickle module

#using json module

filename = 'cfg'
with open(filename) as f_obj:
PASSWORD = json.load(f_obj)

subprocess.call(r'net use f: /del /Y', shell=True)
subprocess.call(r'net use m: /del /Y', shell=True)
subprocess.call(r'net use p: /del /Y', shell=True)
subprocess.call(r'net use t: /del /Y', shell=True)
subprocess.call(r'net use y: /del /Y', shell=True)

#add password prompt
print("the default password is "+PASSWORD)
print("press y then enter to continue, press n then enter to us a different password")
print(">")

OPTION = None

OPTION = input()

if OPTION == 'y':

#reconnect to the network drives
subprocess.call(r'net use f: \\leecodc\global /user:office\leecocnc1 ' + PASSWORD, shell=True)
subprocess.call(r'net use m: \\leecodc\shop /user:office\leecocnc1 ' + PASSWORD, shell=True)
subprocess.call(r'n'
r'et use p: \\leecodc\ncprohd /user:office\leecocnc1 ' + PASSWORD, shell=True)
subprocess.call(r'net use t: \\leecodc\3ddata /user:office\leecocnc1 ' + PASSWORD, shell=True)
subprocess.call(r'net use y: \\leecodc\qb /user:office\leecocnc1 ' + PASSWORD, shell=True)

elif OPTION == 'n':
print("enter password > ")
PASSWORD = input()

subprocess.call(r'net use f: \\leecodc\global /user:office\leecocnc1 ' + PASSWORD, shell=True)
subprocess.call(r'net use m: \\leecodc\shop /user:office\leecocnc1 ' + PASSWORD, shell=True)
subprocess.call(r'net use p: \\leecodc\ncprohd /user:office\leecocnc1 ' + PASSWORD, shell=True)
subprocess.call(r'net use t: \\leecodc\3ddata /user:office\leecocnc1 ' + PASSWORD, shell=True)
subprocess.call(r'net use y: \\leecodc\qb /user:office\leecocnc1 ' + PASSWORD, shell=True)

filename = 'cfg'
with open(filename, 'w') as f_obj:
json.dump(PASSWORD, f_obj)

#print("network drives mapped.")
input()