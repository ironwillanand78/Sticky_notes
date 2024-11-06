let textArea = document.querySelector("#input-area");
let btn = document.querySelector(".input-button");
let rightSide = document.querySelector(".right-side");
let para = document.querySelector(".para");
let color = document.querySelector(".bg-color");

btn.addEventListener("click" , () =>{
    if(textArea.value === ""){
        alert("Enter Some Text");
    }else{
        let div = document.createElement("div");
        div.className = "note-div";

        // creating cross button..
        let button = document.createElement("button");
        button.className = "cross-btn";
        button.innerText = "X";
        button.style.backgroundColor = color.value;
        // Append the button to the div
        div.appendChild(button);

        //  Set the text content of the div to the text from the textarea (without overwriting the button)
        let textContent = document.createElement("p");
        textContent.textContent = textArea.value;
        div.appendChild(textContent);

        // appending the div to the right side...
        rightSide.appendChild(div);

        div.style.backgroundColor = color.value;
        

        div.style.width = `${textArea.offsetWidth}px`;

        para.style.display = "none";

        button.addEventListener("click", () => {
            div.remove();
        });
        // clearing the text area value......

        textArea.value = "";
    }
})