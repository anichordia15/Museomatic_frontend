from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import traceback

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
password = 'your_password'  # Replace with your actual password
client = MongoClient(f'mongodb+srv://2002aniketchordia:SFH4UbQ07FJtlNtp@cluster0.bhkqyl3.mongodb.net/Auth?retryWrites=true&w=majority')

db = client['Auth']

# User collection
users = db['users']

@app.route('/register', methods=['POST'])
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

if __name__ == '__main__':
    app.run()
