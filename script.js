var header = [
    "ID",
    "OnClick",
    "Outclick",
    "Option",
    "RoomBooking"
]
var choice = [
    "A", "B", "C", "D"
]
function init(){
    table = document.createElement('table')
    table.setAttribute("border", "1")
    for(var i = 0; i < 6; i++){
        row = document.createElement('tr')
        for(var j = 0; j < 5; j++){
            if(i === 0){
                col = document.createElement('th')
                col.innerHTML = header[j]
            }else {
                col = document.createElement('td')

                
                if(j === 0){
                    col.innerHTML = i
                }else if(j === 1){
                    button = document.createElement('input')
                    button.setAttribute("type", "button")
                    button.setAttribute("value", "Click me" + (i))
                    button.onclick = onClick.bind(null,i)
                    col.appendChild(button)

                }else if (j == 2) {
                    button = document.createElement('input')
                    button.setAttribute("type", "button")
                    button.setAttribute("value", "Click me" + (i+1))
                    button.onclick = outClick.bind(null,i)
                    col.appendChild(button)

                } else if(j === 3){
                    select = document.createElement('select')
                    for(var k = 0; k < 4; k++){
                        option = document.createElement('option')
                        option.innerHTML = choice[k]
                        select.appendChild(option)
                    }
                    col.appendChild(select)
                }else {

                }
            }
            row.appendChild(col)
        }
        table.appendChild(row)
    }
    document.body.appendChild(table)
}
function onClick(id){
    table = document.querySelector('table')
    col = table.rows[id].cells[4]
    col.style.backgroundColor = "blue"

}
function outClick(id) {
    table = document.querySelector('table')
    col = table.rows[id].cells[4]
    col.style.backgroundColor = "white"

}
