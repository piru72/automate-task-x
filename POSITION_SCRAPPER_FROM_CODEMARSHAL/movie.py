import json

# Read the data from the JSON file
with open('data.json', 'r') as file:
    data = json.load(file)

# Open a text file for writing
with open('data.txt', 'w') as output_file:
    # Iterate through the objects and write the movie titles to the file
    for movie in data:
        output_file.write(movie['title'] + '\n')
