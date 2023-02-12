signs = "+-*/"
first_num = 0
second_num = 0
count_ab = 0
signs_count = 0

def on_button_a():
    global first_num, second_num, count_ab, signs_count
    if count_ab == 0:
        first_num = first_num - 1
    if count_ab == 2:
        second_num -= 1
    if count_ab == 1: 
        signs_count = signs_count - 1 

def on_button_b():
    global first_num, second_num, count_ab, signs_count
    if count_ab == 0:
        first_num = first_num + 1
    if count_ab == 2:
        second_num += 1
    if count_ab == 1:
        signs_count = signs_count + 1 
        
def change_mode():
    global count_ab
    count_ab += 1

def calculate():
    global first_num, second_num, count_ab, signs_count
    if count_ab == 0:
        input.on_button_pressed(Button.A, on_button_a)
        input.on_button_pressed(Button.B, on_button_b)
        basic.show_number(first_num)
        input.on_button_pressed(Button.AB, change_mode)
    elif count_ab == 2:
        input.on_button_pressed(Button.A, on_button_a)
        input.on_button_pressed(Button.B, on_button_b)
        basic.show_number(second_num)
        input.on_button_pressed(Button.AB, change_mode)
    elif count_ab == 1:
        input.on_button_pressed(Button.A, on_button_a)
        input.on_button_pressed(Button.B, on_button_b)
        basic.show_string(signs[signs_count%len(signs)])
        input.on_button_pressed(Button.AB, change_mode)
    else: 
        znak = signs[signs_count%len(signs)]
        if znak == "+":
            basic.show_number(first_num + second_num)
        if znak == "-":
            basic.show_number(first_num - second_num)
        if znak == "*":
            basic.show_number(first_num * second_num)
        if znak == "/":
            if second_num == 0:
                basic.show_string("divide by zero")
            else:
                basic.show_number(first_num / second_num)
        
basic.forever(calculate)