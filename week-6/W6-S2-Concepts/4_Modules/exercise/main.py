from file_operations import read_file, write_file
import string_operations
from math_operations import add, subtract


if __name__ == "__main__":
    # Math operations
    print("Addition:", add(5, 3))
    print("Subtraction:", subtract(10, 4))

    # String operations
    print("Uppercase:", string_operations.uppercase("hello"))
    print("Lowercase:", string_operations.lowercase("WORLD"))

    # File operations
    write_file("sample.txt", "Hello, world!")
    print("File content:", read_file("sample.txt"))