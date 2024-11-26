var SiteNameInput = document.getElementById("sn")
var UrlInput = document.getElementById("su")
var test = document.getElementById("test")
var All = []
if(localStorage.getItem("All") != null){
    All=JSON.parse(localStorage.getItem("All"))
    display()
}

function get() {
    var siteNameRegex = /^[a-zA-Z0-9\s]+$/;
    if (SiteNameInput.value && UrlInput.value) {
        if (SiteNameInput.value.length >= 3) {
            if (siteNameRegex.test(SiteNameInput.value)) {
                var Information = {
                    sn: SiteNameInput.value,
                    su: UrlInput.value
                }
                All.push(Information)
                console.log(All)
                localStorage.setItem("All", JSON.stringify(All))
                clear()
                display()
            } else {
                alert("Site Name ويجب أن يحتوي فقط على أحرف وأرقام")
            }
        } else {
            alert("Site Name يجب أن يحتوي على 3 أحرف على الأقل")
        }
    } else {
        alert("Please enter a value in the required fields")
    }
}
function clear(){
    SiteNameInput.value=""
    UrlInput.value=""
}
function display() {
    var cartona = "";
    for(var i = 0 ; i < All.length ; i++) {
        cartona += `
            <tr>
                <td>${i + 1}</td>
                <td>${All[i].sn}</td>
                <td><button onclick="VisitUrl(${i})" class="btn btn-warning">Visit</button></td>
                <td><button onclick="del(${i})" class="btn btn-danger">Delete</button></td>
            </tr>
        `;
    }
    document.getElementById("test").innerHTML = cartona;
}
function del(index){
    All.splice(index , 1)
    localStorage.setItem("All" , JSON.stringify(All))
    display()

}
function VisitUrl(index){
    var url = All[index].su;
    if (url) {
        window.open(url, "_blank");
    }
}