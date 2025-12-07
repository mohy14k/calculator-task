var display_element = document.querySelector(".display")

var buttons = document.querySelectorAll(".btn")


for(let item of buttons)
{
    item.onclick = function(){
        display_element.value = handle_button_click(item,display_element.value)
    }
}

// Main function to handle button logic
function handle_button_click(button, currentValue) {
    const operator = button.getAttribute("operator");
    
    if(currentValue == "Error") 
        currentValue = ""
    

    switch(operator) {
        case "cl":
            return ""; // Clear current value

        case "dl":
            // Delete last character in current value if not empty
            return currentValue ? currentValue.slice(0, -1) : "";

        case "=":
            
            if (currentValue === "") return "";

            try {
                const result = eval(currentValue);
                
                if (result !== undefined)
                    
                    return parseFloat(result.toFixed(4));


                return "Error"; 
            } catch {
                return "Error";
            }

        default:
            return currentValue + operator;
    }
}

// function is_multiple_dots(display_element_text){
//     const operators = ['+','-','*','/']

//     operators.forEach(op => {
//         display_element_text = display_element_text.replaceAll(op, " ")
//     })

//     const split_text = display_element_text.split(" ")

//     if(split_text[split_text.length - 1].includes(".")) {
//         return true;
//     }

//     return false
// }