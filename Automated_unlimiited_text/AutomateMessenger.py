import pyautogui    #importing the pyautogui module
import time         #importing the time module
while True:
    time.sleep(5)    #the parameter in the time.sleep shows after how many second the text will repeat itself 
    pyautogui.typewrite('This text will repeat again and again')   #just like t says this text will repeat after every 5 seconds as mentioned in the time.sleep
    pyautogui.press('enter')   #this will start upon pressing enter

