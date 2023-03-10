let signs = "+-*/^"
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
        if (signs_count > 0) {
            signs_count = signs_count - 1
        }
        
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
        signs_count = signs_count + 1
    }
    
}

function change_mode() {
    
    count_ab += 1
}

function calculate() {
    let znak: string;
    
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
    } else {
        znak = signs[signs_count % signs.length]
        if (znak == "+") {
            basic.showNumber(first_num + second_num)
        }
        
        if (znak == "-") {
            basic.showNumber(first_num - second_num)
        }
        
        if (znak == "*") {
            basic.showNumber(first_num * second_num)
        }
        
        if (znak == "^") {
            basic.showNumber(first_num ** second_num)
        }
        
        if (znak == "/") {
            if (second_num == 0) {
                basic.showString("divide by zero")
            } else {
                basic.showNumber(first_num / second_num)
            }
            
        }
        
    }
    
}

// basic.forever(calculate) 
while (true) {
    calculate()
}
