from flask import Blueprint, request, jsonify
from .models import Resource  # Ensure this is correct
from . import db  # Ensure this imports the 'db' object from app/__init__.py

main = Blueprint('main', __name__)

# Root URL route
@main.route('/')
def index():
    return "Welcome to the Community Resource Mapping API!"

# Define a route to get all resources
@main.route('/resources', methods=['GET'])
def get_resources():
    resources = Resource.query.all()
    resources_list = [{
        'id': resource.id,
        'name': resource.name,
        'description': resource.description,
        'category': resource.category,
        'address': resource.address,
        'latitude': resource.latitude,
        'longitude': resource.longitude,
        'contact_info': resource.contact_info
    } for resource in resources]
    return jsonify(resources_list)

# Define a route to add a new resource
@main.route('/resources', methods=['POST'])
def add_resource():
    data = request.get_json()
    new_resource = Resource(
        name=data['name'],
        description=data.get('description', ''),
        category=data['category'],
        address=data['address'],
        latitude=data['latitude'],
        longitude=data['longitude'],
        contact_info=data.get('contact_info', '')
    )
    db.session.add(new_resource)
    db.session.commit()
    return jsonify({'message': 'Resource added successfully'}), 201
