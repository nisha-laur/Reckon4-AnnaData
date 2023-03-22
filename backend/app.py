# Import flask and datetime module for showing date and time
from flask import Flask, request
from flask_cors import CORS
from model.model import predict_data
from PIL import Image
from chatbot.main import chatbot_response
from chatbot.weather import getWeather
# Initializing flask app
app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    return "Welcome to AnnaData"


@app.route('/login', methods=["POST"])
def login():
    user = request.json["username"]
    passwd = request.json["password"]
    print(user, passwd)
    if (user == "test" and passwd == "test"):
        return {"isLogin": True}
    else:
        return {"isLogin": False}


@app.route('/predict', methods=["POST"])
def predict():
    nitro = float(request.json['nitro'])
    phosp = float(request.json['phosp'])
    potassium = float(request.json['potassium'])
    rain = float(request.json['rain'])
    humid = float(request.json['humid'])
    temp = float(request.json['temp'])
    ph = float(request.json['ph'])

    data = predict_data(nitro, phosp, potassium, temp, humid, ph, rain)
    return {"crop": data}


@app.route('/crop-disease', methods=["POST"])
def crop_disease():
    if (request.method == "POST"):
        f = request.files['file']
        img = Image.open(f)
    return {"response": f}


@app.route('/chat', methods=["POST"])
def chatbot():
    if (request.method == "POST"):
        msg = request.json['message']
        print(msg)
        if (msg == '1'):
            return getWeather('jodhpur')


@app.route('/volunteer', methods=["POST"])
def volunteer():
    if (request.method == "POST"):
        data = request.json
        print(data)
        return {"response": "success"}


# Running app
if __name__ == '__main__':
    app.run(debug=True)
