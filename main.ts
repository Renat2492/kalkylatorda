let signs = "+-*/"
let first_num = 0
let second_num = 0
let count_ab = 0
function on_button_a() {
    
    if (count_ab == 0) {
        first_num = first_num - 1
    }
    
    if (count_ab == 2) {
        second_num - 1
    }
    
}

function on_button_b() {
    
    if (count_ab) {
        first_num = first_num + 1
    }
    
    if (count_ab == 2) {
        second_num + 1
    }
    
}

function calculate() {
    
    if (count_ab == 0) {
        input.onButtonPressed(Button.A, on_button_a)
        input.onButtonPressed(Button.B, on_button_b)
    } else if (count_ab == 2) {
        input.onButtonPressed(Button.A, on_button_a)
        input.onButtonPressed(Button.B, on_button_b)
    }
    
}

