
ACtl.runInTab('#currentTab', () => {
    let t = document.getElementById("textareaInsertion").value;
    let splitted = t.split(/\r?\n/);
    let x = 0;
    while (x+2 <= splitted.length){
    alert(splitted[x]);
    x=x+1;
    }
    //document.getElementById("validate").click();
    });
    