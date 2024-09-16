from . import db  # Ensure that 'db' is imported correctly from 'app/__init__.py'

# Define the Resource model
class Resource(db.Model):
    __tablename__ = 'resources'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255), nullable=True)
    category = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(150), nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    contact_info = db.Column(db.String(100), nullable=True)

    def __repr__(self):
        return f'<Resource {self.name}>'
