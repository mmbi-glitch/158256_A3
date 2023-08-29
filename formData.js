function submitFormData() {
    // if nothing saved at start, store an empty array
    if (localStorage.getItem("form-data") == null) {
        localStorage.setItem("form-data", "[]");
    }

    // get data from form inputs and store in an array
    let newFormData = [];
    newFormData.push("<strong>Date: </strong>" + new Date() + "</li>");
    newFormData.push("<strong>Customer's Name: </strong>" + document.getElementById("requested-name").value);
    newFormData.push("<strong>Customer's Email: </strong>" + document.getElementById("requested-email").value);
    newFormData.push("<strong>Subject: </strong>" + document.getElementById("requested-subject").value);
    newFormData.push("<strong>Message: </strong>" + document.getElementById("requested-message").value);
    // get old data and fill with new data
    let previousFormData = JSON.parse(localStorage.getItem("form-data"));
    previousFormData.push(newFormData);
    // save old + new data to local storage
    localStorage.setItem('form-data', JSON.stringify(previousFormData));
}

function getFormData() {
    let formData = JSON.parse(localStorage.getItem("form-data"));
    let parentList = document.getElementById("form-data-append");
    let i;
    if (localStorage.getItem("form-data") != null) {
        for (i = 0; i < formData.length; i++) {
            for (let k = 0; k < formData[i].length; k++) {
                let childData = document.createElement("li");
                parentList.append(childData);
                childData.innerHTML = formData[i][k];
            }
            parentList.appendChild(document.createElement("br"));
        }
    }
}

function clearFormData() {
    localStorage.clear();
    location.reload();
}
