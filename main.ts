function generateResume(): void {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const profession = (document.getElementById("profession") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const about = (document.getElementById("about") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLInputElement).value;
    const languages = (document.getElementById("languages") as HTMLInputElement).value.split(",");
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",");
    const profileImage = (document.getElementById("profile-image") as HTMLInputElement).files![0];

    const resumeSection = document.getElementById("resume");

    let profileImageURL = '';
    if (profileImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImageURL = e.target?.result as string;
            updateResume();
        };
        reader.readAsDataURL(profileImage);
    } else {
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
