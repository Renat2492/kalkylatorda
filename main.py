signs = "+-*/"
first_num = 0
second_num = 0
count_ab = 0

def on_button_a():
    global first_num, second_num, count_ab
    if count_ab == 0:
        first_num = first_num - 1
    if count_ab == 2:
        second_num - 1

def on_button_b():
    global first_num, second_num, count_ab
    if count_ab:
        first_num = first_num + 1
    if count_ab == 2:
        second_num + 1
        
def calculate():
    global first_num, second_num, count_ab
    if count_ab == 0:
        input.on_button_pressed(Button.A, on_button_a)
        input.on_button_pressed(Button.B, on_button_b)
    elif count_ab == 2:
        input.on_button_pressed(Button.A, on_button_a)
        input.on_button_pressed(Button.B, on_button_b)