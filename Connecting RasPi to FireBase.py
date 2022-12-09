#Basic Imports
import math
import time

#Imports to connect to ADC
import board
import busio

#Imports to recive data
import adafruit_ads1x15.ads1015 as ADS
from adafruit_ads1x15.analog_in import AnalogIn

#Imports send data to FireBase
import pyrebase

# Create the I2C bus - Communication proto-call .i.e cabling raspi setup and raspi
i2c = busio.I2C(board.SCL, board.SDA)

# Create the ADC object using the I2C bus - Connecting the ADC to rasp
ads = ADS.ADS1015(i2c)

# Create single-ended input on channel 1
chan = AnalogIn(ads, ADS.P1) #Importnat!
samples = 5 # number of samples taken from ads1115 (ADC)
places = int(2) # seting how much the value has to be rounded

#------------------------ Collecting Data from ADC and sending it to FireBase --------------------------

while True:
    # reset variables
    count = int(0)
    datai = []
    maxIValue = 0
    IrmsA0 = 0
    ampsA0 = 0
    kilowatts = float(0)
    # since we are measuring an AC circuit the output of SCT-013 wand the voltage sensor will be a sinewave.
    # in order to calculate amps from sinewave we will need to get the peak voltage
    # from each input and use root mean square formula (RMS)
    # this loop will take 200 samples from each input and give you the highest (peak)
    for count in range(5):        
        datai.append(chan.voltage)
        print("{:>5.3f}".format(datai[count]))
        if datai[count] > maxIValue:
            maxIValue = datai[count]               
    #calculate current using the sampled data
    # I used a sct-013 that is calibrated for 1000mV output @ 60A. Usually has 30A/1V printed on it.
    print("proceeding")
    IrmsA0 = float(maxIValue / float(2047) * 60)
    IrmsA0 = round(IrmsA0, places)
    ampsA0 = IrmsA0 / math.sqrt(2)  # RMS formula to get current reading to match what an ammeter shows.
    ampsA0 = round(ampsA0, places)
    #calculate power
    power = round(ampsA0 * 230,places)
    print('Power: {0}'.format(power))

    #Posting Data to real time FireBase
    config = {
      "apiKey": "AIzaSyBc_VSDWzMHZKTwPwPPZnSfb5CNQF81j1s",
      "authDomain": "http://sems-73da9.firebaseapp.com/",
      "databaseURL": "https://sems-73da9-default-rtdb.firebaseio.com",
      "storageBucket": "http://sems-73da9.appspot.com"
    }

  
    firebase = pyrebase.initialize_app(config)
    db = firebase.database()
    
    print("Sending Data to FireBase.....")
    
    db.child("SEMS").child("rtPower").set(power) #Sends real-time power to the firebase realrime database
    print(power+"has been set in real-time")
    time.sleep(30)