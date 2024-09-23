document.addEventListener('DOMContentLoaded', function() {
    var caName = document.getElementById("name");
    var eng = document.getElementById("eng");
    var eng2 = document.getElementById("eng2");
    var math = document.getElementById("math");
    var math2 = document.getElementById("math2");
    var chem = document.getElementById("chem");
    var chem2 = document.getElementById("chem2");
    var phy = document.getElementById("phy");
    var phy2 = document.getElementById("phy2");
    var bio = document.getElementById("bio");
    var bio2 = document.getElementById("bio2");

    function validateInputs() {
        if (!caName.value.trim()) {
            alert("Please enter your name.");
            return false;
        }

        var subjects = [eng, eng2, math, math2, chem, chem2, phy, phy2, bio, bio2];
        for (let i = 0; i < subjects.length; i++) {
            if (!subjects[i].value || isNaN(subjects[i].value) || Number(subjects[i].value) < 0) {
                alert("Please enter valid non-negative numbers for all subject fields.");
                return false;
            }
        }

        return true;
    }

    window.cal = function() {
        if (!validateInputs()) {
            return;
        }

        // Calculate totals
        var totalBio = Number(bio.value) + Number(bio2.value);
        var totalMath = Number(math.value) + Number(math2.value);
        var totalChem = Number(chem.value) + Number(chem2.value);
        var totalPhy = Number(phy.value) + Number(phy2.value);
        var totalEng = Number(eng.value) + Number(eng2.value);
        var name = caName.value;

        // Redirect to results.html with URL parameters
        var queryParams = `?name=${encodeURIComponent(name)}&eng=${totalEng}&math=${totalMath}&chem=${totalChem}&phy=${totalPhy}&bio=${totalBio}`;
        window.location.href = `results.html${queryParams}`;
    };
});