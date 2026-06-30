
#A set is the best choice because usernames should be unique and duplicates are not allowed. Sets automatically remove duplicate values, which helps maintain data integrity without requiring extra checks in the code. Sets are also efficient when checking whether a username already exists in the system. Since the order of usernames is usually not important, the unordered nature of a set is not a problem.

# Lists (Ordered, Mutable, Allows Duplicates)
fruits = ["apple", "banana", "cherry", "banana"]
print("List:", fruits)

#A dictionary is the most suitable choice because it stores information as key-value pairs. Each piece of data can be given a meaningful label, making the information easy to understand and access. For example, a student's name, age, and grades can each have their own key. Dictionaries also allow data to be updated easily when information changes.

# Tuples (Ordered, Immutable, Allows Duplicates)
coordinates = (10.0, 20.0, 30.0)
print("Tuple:", coordinates)

#A list is the best option because tasks need to remain in a specific order. Users may want to view tasks in the order they were added or rearrange them by priority. Lists are mutable, meaning tasks can be added, removed, or edited at any time. Lists also allow duplicate entries if the same task needs to appear more than once.

# Sets (Unordered, Unique Elements Only)
unique_numbers = {1, 2, 3, 2, 1}
print("Set:", unique_numbers)

#A tuple is the most appropriate choice because geographical coordinates represent fixed values that should not be modified accidentally. Unlike lists, tuples are immutable, meaning their contents cannot be changed after creation. This provides additional protection against unintended modifications and helps ensure the accuracy of location data.

# Dictionaries (Key-Value Pairs, Unordered, Fast Lookups)
person = {"name": "Alice", "age": 25, "city": "New York"}
print("Dictionary:", person)
