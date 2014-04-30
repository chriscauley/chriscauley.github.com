from utils import *
word = get_random_word()
error_count = 0
correct_letters = ''
wrong_letters = ''
guessed_letters = ''
win = False

welcome_user()

while error_count < 6:
    draw_board(error_count,word,guessed_letters)
    guess = get_guess(guessed_letters)
    guessed_letters = guessed_letters + guess
    if guess in word:
        correct_letters = correct_letters + guess
    if not guess in word:
        wrong_letters = wrong_letters + guess
        error_count = error_count + 1
    if check_word(correct_letters,word):
        win = True
        break

print_message(win,word)
