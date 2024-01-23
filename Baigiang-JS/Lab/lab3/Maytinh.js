var btn = document.querySelectorAll("button")
var btn1 = document.querySelectorAll("button")


console.log(btn)




function toanhang1() {
   
    var a;
    var b;
    var c = "";
    var checked  = true;
        var resuilt = true;

    btn.forEach(function (num, index) {
        
        num.onclick = function (e) {
            if(checked){
                if (resuilt) {
                    if (!Number(e.target.value) && !e.target.value.includes("0")) {
                        c = e.target.value
                        console.log(c)
                        resuilt = false;
    
                    }
                    else {
                        a = Number(e.target.value)
                        console.log(a)
    
                    }
                }
                else {
                    b = Number(e.target.value)
                    console.log(b)
                   
    
                }
                if(a!=undefined && b!=undefined){
                    checked = false
                }

            }
            else{
              if(e.target.value.includes("=")){
                tinh(a,b,c)
              }
              else if(e.target.value.includes("C")){
                a = undefined;
                b=undefined;
                c=undefined;
                resuilt = true
                checked = true
              }
              
            }
            
        }
        
    })
       
}
toanhang1()



function tinh(a, b, toantu) {
    switch (toantu) {
        case "+": {
            let kq = Number(a) + Number(b);
            alert("Tong: " + kq);
            break;
        }

        case "-": {
            let kq = a - b;
            alert("Hieu" + kq);
            break;
        }

        case "*":
            {
                let kq = a * b;
                alert("Tich" + kq);
                break;
            }

        case "/": {
            let kq = a / b;
            alert("Thuong" + kq);
            break;
        }


        default:
            alert(toantu + "không phải là toán tử")
            break;
    }
}
