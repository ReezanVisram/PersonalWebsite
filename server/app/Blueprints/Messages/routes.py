from flask import Blueprint, request, jsonify
from flask_cors import CORS
from app.Models import db
from app.Models.Message import Message

messageBlueprint = Blueprint("Message", __name__)
CORS(messageBlueprint)


@messageBlueprint.route('/send', methods=["POST"])
def sendRoute():
    if (request.method == "POST"):
        reqJson = request.get_json()

        name = reqJson['name']
        email = reqJson['email']
        messageContent = reqJson['message']

        m = Message(name, email, messageContent)

        db.session.add(m)
        db.session.commit()
        res = {'status': 1}

    return jsonify(res)

