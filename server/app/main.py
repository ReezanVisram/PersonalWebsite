from flask import Flask
from app.Models import db
from app.Blueprints.Messages.routes import messageBlueprint
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://Reezan:Watermelon123@reezanvisram.com/ReezanVisram'
db.init_app(app)

app.register_blueprint(messageBlueprint, url_prefix='/message')