let signs = "+-*/"
let first_num = 0
let second_num = 0
let count_ab = 0
let signs_count = 0
function on_button_a() {
    
    if (count_ab == 0) {
        first_num = first_num - 1
    }
    
    if (count_ab == 2) {
        second_num -= 1
    }
    
    if (count_ab == 1) {
        signs_count = signs_count - 1
    }
    
}

function on_button_b() {
    
    if (count_ab == 0) {
        first_num = first_num + 1
    }
    
    if (count_ab == 2) {
        second_num += 1
    }
    
    if (count_ab == 1) {
        signs_count == signs_count - 1
    }
    
}

function change_mode() {
    
    count_ab += 1
}

basic.forever(function calculate() {
    
    if (count_ab == 0) {
        input.onButtonPressed(Button.A, on_button_a)
        input.onButtonPressed(Button.B, on_button_b)
        basic.showNumber(first_num)
        input.onButtonPressed(Button.AB, change_mode)
    } else if (count_ab == 2) {
        input.onButtonPressed(Button.A, on_button_a)
        input.onButtonPressed(Button.B, on_button_b)
        basic.showNumber(second_num)
        input.onButtonPressed(Button.AB, change_mode)
    } else if (count_ab == 1) {
        input.onButtonPressed(Button.A, on_button_a)
        input.onButtonPressed(Button.B, on_button_b)
        basic.showString(signs[signs_count % signs.length])
        input.onButtonPressed(Button.AB, change_mode)
    }
    
})
