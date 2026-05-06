function addJob() {

    let company = document.getElementById("companyInput").value;
    let role = document.getElementById("roleInput").value;
    let status = document.getElementById("statusInput").value;

    if (company === "" || role === "") {
        alert("Please enter details");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML =
        company + " | " + role + " | " + status +
        ' <button onclick="deleteJob(this)">Delete</button>';

    document.getElementById("jobList").appendChild(li);

    saveData();  // 🔥 VERY IMPORTANT

    document.getElementById("companyInput").value = "";
    document.getElementById("roleInput").value = "";
}


// Delete job
function deleteJob(button) {
    let li = button.parentElement;
    li.remove();
    saveData();  // 🔥 VERY IMPORTANT
}


// Save jobs
function saveData() {
    localStorage.setItem("jobs", document.getElementById("jobList").innerHTML);
}


// Load jobs when page opens
function loadData() {
    let data = localStorage.getItem("jobs");

    if (data) {
        document.getElementById("jobList").innerHTML = data;
    }
}


// Run when page loads
window.onload = loadData;
  