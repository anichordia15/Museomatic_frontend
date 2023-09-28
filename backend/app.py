from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import traceback
from bson import ObjectId
import smtplib


sender_email = '2002aniketchordia@gmail.com'
app_password = 'klgxnlwajshtrykn'

server = smtplib.SMTP('smtp.gmail.com',587)
server.starttls()
server.login(sender_email, app_password)


app = Flask(__name__)
CORS(app)

# Connect to MongoDB
password = 'your_password'  # Replace with your actual password
client = MongoClient(f'mongodb+srv://2002aniketchordia:SFH4UbQ07FJtlNtp@cluster0.bhkqyl3.mongodb.net/Auth?retryWrites=true&w=majority')

db = client['Auth']

# User collection
users = db['users']
registrations = db['registrations']


@app.route('/signup', methods=['POST'])
def register():
    try:
        # Get the user details from the request
        name = request.json['name']
        email = request.json['email']
        phone = request.json['phone']
        password = request.json['password']

        # Create a new user document
        user = {
            'name': name,
            'email': email,
            'phone': phone,
            'password': password
        }

        # Insert the user document into the collection
        users.insert_one(user)

        return jsonify({'message': 'User registered successfully'}), 201

    except Exception as e:
        traceback.print_exc()
        return jsonify({'message': 'Internal Server Error'}), 500

@app.route('/login', methods=['POST'])
def login():
    try:
        # Get the user details from the request
        email = request.json['email']
        password = request.json['password']

        # Find the user document by email
        user = users.find_one({'email': email})

        # Check if the user exists and the password is correct
        if user and user['password'] == password:
            return jsonify({'message': 'Login successful'}), 200

        return jsonify({'message': 'Invalid email or password'}), 401

    except Exception as e:
        traceback.print_exc()
        return jsonify({'message': 'Internal Server Error'}), 500

@app.route('/api/registrations', methods=['POST'])
def create_registration():
    try:
        # Get the registration details from the request
        name = request.json['name']
        email = request.json['email']
        contact = request.json['contact']
        nationality = request.json['nationality']
        gender = request.json['gender']
        age = int(request.json['age'])
        date = request.json['date']
        timeslot = request.json['timeslot']
        numVisitors = int(request.json['numVisitors'])
        paymentScreenshot = request.json.get('paymentScreenshot', '')

        # Create a new registration document
        registration = {
            'name': name,
            'email': email,
            'contact': contact,
            'nationality': nationality,
            'gender': gender,
            'age': age,
            'date': date,
            'timeslot': timeslot,
            'numVisitors': numVisitors,
        }

        # Insert the registration document into the collection
        registrations.insert_one(registration)
        
        server.sendmail('2002aniketchordia@gmail.com', email, f"Ticket Confirmed{name, date, numVisitors}")
        return jsonify({'message': 'Registration created successfully'}), 201

    except Exception as e:
        traceback.print_exc()
        return jsonify({'message': 'Internal Server Error'}), 500




@app.route('/eticket', methods=['GET'])
def get_registration():

        email = request.json['email']

        registration = registrations.find_one({'email': email})
        
        if registration:
            # Convert ObjectId to string
            registration['_id'] = str(registration['_id'])

            # Return the registration document
            return jsonify(registration), 200
        else:
            return jsonify({'message': 'Registration not found'}), 404






if __name__ == '__main__':
    app.run()
