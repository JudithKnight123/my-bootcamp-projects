def greet(name):
    print("Hello " + name)  # Missing space and indentation issue

def count_to_n(n):
    i = 0
    while i < n:  # Potential infinite loop!
        print(i)
        # Missing increment for i

def calculate_average(numbers):
    total = sum(numbers)
    return total / len(numbers)  # What happens if numbers is an empty list?