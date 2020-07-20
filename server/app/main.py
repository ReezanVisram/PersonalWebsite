from flask import Flask, jsonify
from flask import request
from github import Github
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
req = Github("4d92e33a0cbd78f5bc7d96afb92bf211fcd64fa9")

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    stars = db.Column(db.Integer(), nullable=False)
    lang = db.Column(db.String(255), nullable=False)
    githuburl = db.Column(db.String(255), nullable=False)
    websiteurl = db.Column(db.String(255), nullable=False)

    def __init__(self, name, description, stars, lang, githuburl, websiteurl):
        self.name = name 
        self.description = description
        self.stars = stars
        self.lang = lang
        self.githuburl = githuburl
        self.websiteurl = websiteurl
    
def parseLanguages(d):
    langString = ''

    for lang in d:
        langString += lang + ', '

    return  langString

def createObjectsToAddToDatabase(req):
    databaseObjects = []
    try:
        for repo in req.get_user().get_repos():
            description = repo.description
            stars = repo.stargazers_count
            language = parseLanguages(repo.get_languages())
            githubUrl = repo.html_url
            websiteUrl = '/' + repo.name

            if (not repo.private):
                obj = Project(repo.name, description, stars, language, githubUrl, websiteUrl)
                databaseObjects.append(obj)

        return databaseObjects
    except Exception as e:
        print(str(e))


def addToDatabase(databaseObjects):
    try:
        for dbObject in databaseObjects:
            projects = Project.query.filter_by(name=dbObject.name).all()

            if (len(projects) != 0) or (dbObject.name == 'Hack-the-Northeast'):
                continue

            else:
                db.session.add(dbObject)

        db.session.commit()
    except Exception as e:
        print(str(e))

def updateDatabase():
    addToDatabase(createObjectsToAddToDatabase(req))

def fetchProjects():
    updateDatabase()
    return Project.query.all()

class Config(object):
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://Reezan:Watermelon123@reezanvisram.com/ReezanVisram'


app = Flask(__name__)
app.config.from_object(Config())
db.init_app(app)




req = None



@app.route('/')
def homeRoute():
    projects = fetchProjects()
    return jsonify({'status': 1})

