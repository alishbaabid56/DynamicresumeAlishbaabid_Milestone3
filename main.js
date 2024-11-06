"use strict";
function generateResume() {
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const about = document.getElementById("about").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const languages = document.getElementById("languages").value.split(",");
    const skills = document.getElementById("skills").value.split(",");
    const profileImage = document.getElementById("profile-image").files[0];
    const resumeSection = document.getElementById("resume");
    let profileImageURL = '';
    if (profileImage) {
        const reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profileImageURL = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            updateResume();
        };
        reader.readAsDataURL(profileImage);
    }
    else {
        profileImageURL = 'default-profile-image.jpg';
        updateResume();
    }
    function updateResume() {
        if (resumeSection) {
            resumeSection.innerHTML = `
                <div class="resume">
                    <div class="sidebar">
                        <img src="${profileImageURL}" alt="Profile Picture" class="profile-img">
                       
                        
                        <h3>Contact</h3>
                         <p><i class="fas fa-phone"></i> ${phone}</p>
                        <p><i class="fas fa-envelope"></i> ${email}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${address}</p>
                        
                        <h3>Education</h3>
                        <p>${education.replace(/\n/g, "<br>")}</p>

                        <h3>Skills</h3>
                        <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
                    </div>
                    <div class="main-content">
                    <h2>${name}</h2>
                     <p><strong>${profession}</strong></p>
                        <h3>Experience</h3>
                        <p>${experience.replace(/\n/g, "<br>")}</p>
                    
                     
                        <h3>Languages</h3>
                       <ul>${languages.map(languages => `<li>${languages.trim()}</li>`).join('')}</ul>
                  
                        <h3>About</h3>
                        <p>${about.replace(/\n/g, "<br>")}</p>
                    </div>
                </div>
            `;
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generate-button");
    if (generateButton) {
        generateButton.addEventListener("click", generateResume);
    }
});
