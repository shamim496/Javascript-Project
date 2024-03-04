const milestoneData = JSON.parse(data).data;

// load course milestones data
function loadMilestones() {
    const milestones = document.querySelector(".milestones");

    milestones.innerHTML = `${milestoneData.map(function (milestone) {
        return `<div class="milestone border-b" id="${milestone._id}">
                    <div class="flex">
                        <div class="checkbox"><input type="checkbox" onclick = "markMilestone(this, ${milestone._id})"/></div>
                        <div onclick="openMile(this, ${milestone._id})">
                            <p>
                                ${milestone.name}
                                <span><i class="fas fa-chevron-down"></i></span>
                            </p>
                        </div>
                    </div>
                    <div class="hidden_panel">
                        ${milestone.modules.map(function(value) {
                            return `<div class="module border-b">
                            <p>${value.name}</p>
                        </div>`;
                        }).join("")}
                    </div>
                </div>`;
    }).join("")}`;
}

function openMile(mileElement, id) {
    const currentPanel = mileElement.parentNode.nextElementSibling;
    const showPanel = document.querySelector(".show");
    const active = document.querySelector(".active");

    if (active && !mileElement.classList.contains("active")) {
        active.classList.remove("active");
    }

    mileElement.classList.toggle("active");

    if (!currentPanel.classList.contains("show") && showPanel)

    showPanel.classList.remove("show");

    currentPanel.classList.toggle("show");

    showMilestone(id);
}

function showMilestone(id) {
    const milestoneImage = document.querySelector(".milestoneImage");
    const name = document.querySelector(".title");
    const deatils = document.querySelector(".details");

    milestoneImage.style.opacity = "0";
    milestoneImage.src = milestoneData[id].image;
    name.innerText = milestoneData[id].name;
    deatils.innerText = milestoneData[id].description;
}

const milestoneImage = document.querySelector(".milestoneImage");

milestoneImage.onload = function () {
    this.style.opacity = "1";
}

function markMilestone(checkbox, id) {
    const doneList = document.querySelector(".doneList");
    const mileList = document.querySelector(".milestones");
    const item = document.getElementById(id);

    if (checkbox.checked) {
        mileList.removeChild(item);
        doneList.appendChild(item);
    }else{
        mileList.appendChild(item);
        doneList.removeChild(item);
    }

}


loadMilestones();