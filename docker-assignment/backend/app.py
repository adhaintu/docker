from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({"message": "Flask app is running!"})

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()

    name = data.get('name')
    message = data.get('message')

    return jsonify({
        "message": f"Hello {name}!",
        "received_message": message
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)