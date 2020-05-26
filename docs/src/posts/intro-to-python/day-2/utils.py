import random
import os
from var import word_list, HANGMAN_PICS

def get_random_word():
    return random.choice(word_list).lower()

def welcome_user():
    print "H A N G M A N\n\n"
    print "Welcome to hangman! Guess the word one letter at a time before you are hung."
    print "You can make 6 mistakes before you are hung."

def draw_board(error_count,word,guessed_letters):
    os.system('clear')
    print HANGMAN_PICS[error_count]
    word_string = ""
    for letter in word:
        if letter in guessed_letters:
            word_string = word_string + letter
        if not letter in guessed_letters:
            word_string = word_string + "_"
        word_string = word_string + " "
    print word_string
    print "\nYou have " + str(6-error_count) + " guesses remaining."

def get_guess(guessed_letters):
    while True:
        guess = raw_input("Pick a letter: ").lower()
        if len(guess) > 1:
            print "Please only pick one letter"
            continue
        if guess in guessed_letters:
            print "You already guessed " + guess
            print "Please choose a letter other than these ones:"
            print guessed_letters
            continue
        if not guess in "abcdefghijklmnopqrstuvwxyz":
            print "You should only pick letters."
            continue
        return guess

def check_word(guessed_letters,word):
    for letter in word:
        if not letter in guessed_letters:
            return False
    return True

def print_message(win,word):
    print "\n============\n"
    if win:
        print "Good job, you guessed the word!"
        print "It was '" + word + "'. Remember this word, it saved your life!"
    if not win:
        print "Sorry, you did not guess the word, so we had to strangle you to death."
        print "That sucks."
        print "The word was '" + word + "'. I'll write it on your tombstone."
