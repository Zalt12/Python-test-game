def get_choice(choices):
    print("\n".join([f"{i}. {choice}" for i, choice in enumerate(choices, start=1)]))
    choice_num = int(input("Enter the number of your choice: ")) - 1
    return choice_num

def forest():
    print("You find yourself in a mysterious forest.")
    choice = get_choice(["Go deeper into the forest", "Follow the path"])
    if choice == 0:
        print("You stumble upon a hidden treasure!")
    else:
        print("You encounter a friendly forest creature.")
        choice = get_choice(["Befriend the creature", "Run away"])
        if choice == 0:
            print("The creature becomes your loyal companion.")
        else:
            print("You escape, but the creature looks sad.")

def mountain():
    print("You climb a steep mountain.")
    choice = get_choice(["Search for a cave", "Look for a viewpoint"])
    if choice == 0:
        print("You find a cave filled with sparkling gems!")
    else:
        print("You reach the summit and enjoy a breathtaking view.")

def play_game():
    print("Welcome to the Adventure Game!")
    print("You are at a crossroads. Do you want to go to the forest or the mountain?")
    choice = get_choice(["Forest", "Mountain"])
    if choice == 0:
        forest()
    else:
        mountain()

def main():
    play_game()
    play_again = input("Do you want to play again? (yes/no): ")
    if play_again.lower() == "yes":
        main()
    else:
        print("Thanks for playing!")

if __name__ == "__main__":
    main()
