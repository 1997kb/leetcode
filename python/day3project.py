print("Welcome to Treasure Island/nYour mission is to find the treasure")

path = input("Please select your path. Type 'left' or right " )
if(path == 'left'):
    path=input("You have arrived at the lake.Theres a magical door by the lake.Select left to wait for the door to topen 'left' ")
    if(path =='wait'):
        path=input("Select the door, 'Red' 'Blue' 'Yellow'")
        if(path =='Red'):
            print("Burned by fire")
        elif(path == 'Blue'):
            print("Eaten by beasts Game Over")
        elif(path == 'Yellow'):
            print("You win")
        else:
            print("Game over")
    else:
        print("Attacked by Trout")

else:
    print("Fell into a hole Game over")

