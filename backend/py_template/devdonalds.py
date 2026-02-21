from dataclasses import dataclass
from typing import List, Dict, Union
from flask import Flask, request, jsonify
import re

# ==== Type Definitions, feel free to add or modify ===========================
@dataclass
class CookbookEntry:
	name: str

@dataclass
class RequiredItem():
	name: str
	quantity: int

@dataclass
class Recipe(CookbookEntry):
	required_items: List[RequiredItem]

@dataclass
class Ingredient(CookbookEntry):
	cook_time: int


# =============================================================================
# ==== HTTP Endpoint Stubs ====================================================
# =============================================================================
app = Flask(__name__)

# Store your recipes here!
cookbook = None

# Task 1 helper (don't touch)
@app.route("/parse", methods=['POST'])
def parse():
	data = request.get_json()
	recipe_name = data.get('input', '')
	parsed_name = parse_handwriting(recipe_name)
	if parsed_name is None:
		return 'Invalid recipe name', 400
	return jsonify({'msg': parsed_name}), 200

# [TASK 1] ====================================================================
# Takes in a recipeName and returns it in a form that 
def parse_handwriting(recipeName: str) -> Union[str | None]:
	# TODO: implement me
	fixedRecipeName = " ".join(
		''.join(
			[c for c in recipeName.replace('-', ' ').replace('_', ' ').lower() if c.isalpha() or c == ' ']
		).split()
	).title()

	if len(fixedRecipeName) == 0:
		return None
	return fixedRecipeName


# [TASK 2] ====================================================================
# Endpoint that adds a CookbookEntry to your magical cookbook
@app.route('/entry', methods=['POST'])
def create_entry():
	# TODO: implement me
	data = request.json
	
	type = data.get('type')
	if type != 'recipe' and type != 'ingredient':
		return 'conditions violated!', 400
	
	if type == 'ingredient' and data.get('cookTime') < 0:
		return 'conditions violated!', 400

	global cookbook
	if cookbook is None:
		cookbook = {}
	elif data.get('name') in cookbook:
		return 'conditions violated!', 400
	
	cookbook[data.get('name')] = data
	return '', 200


# [TASK 3] ====================================================================
# Endpoint that returns a summary of a recipe that corresponds to a query name
@app.route('/summary', methods=['GET'])
def summary():
	# TODO: implement me
	global cookbook

	name = request.args.get('name').title()
	if not cookbook or not name in cookbook:
		return 'no recipe found', 400
	
	if cookbook[name].get('type') == 'ingredient':
		return 'name specified is an ingredient', 400
	
	try:
		cookTime, ingredients = recr_search(name)
		response = {
			"name": name,
			"cookTime": cookTime,
			"ingredients": [{"name": ingredient, "quantity": quantity} for ingredient, quantity in ingredients.items()]
		}
		return response, 200
	except Exception as e:
		return 'missing recipe/ingredient from cookbook', 400

def recr_search(name):
	global cookbook

	if not name in cookbook:
		raise Exception('could not find name')
	
	entry = cookbook[name]
	if entry.get('type') == 'ingredient':
		return entry.get('cookTime'), {name: 1}
	else:
		cookTime = 0
		ingredientList = {}
		for item in entry.get('requiredItems'):
			baseCook, baseList = recr_search(item.get('name'))
			cookTime += baseCook * item.get('quantity')
			newIngredientList = {key: ingredientList.get(key, 0) + baseList.get(key, 0) * item.get('quantity') for key in set(ingredientList) | set(baseList)}
			ingredientList = newIngredientList
		
		return cookTime, ingredientList
	

# =============================================================================
# ==== DO NOT TOUCH ===========================================================
# =============================================================================

if __name__ == '__main__':
	app.run(debug=True, port=8080)
