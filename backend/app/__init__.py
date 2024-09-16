from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os

# Initialize the SQLAlchemy database instance
db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)

    # Database configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://ariannaluis:      @localhost:5432/community_mapping'  
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize the database and migration modules
    db.init_app(app)
    migrate.init_app(app, db)

    # Import and register routes
    from .routes import main
    app.register_blueprint(main)

    return app
