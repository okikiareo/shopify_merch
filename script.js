const bellIcon = document.querySelector(".bell");
const alertCard = document.querySelector(".alert");

const acctIcon = document.querySelector(".acct");
const menus = document.querySelector(".menus");

const closeIcon = document.querySelector(".close");
const planNotifi = document.querySelector(".plan_notifi");

const downIcon = document.querySelector(".down");
const setupSteps = document.querySelector(".setup_steps");

const guideNo = document.querySelector(".guide_no");
const guideTrack = document.querySelector(".guide_track");

const setupStep = document.querySelectorAll(".setup_step");

const ticks = document.querySelectorAll(".tick");

const status = {
    idle: "./img/load.svg",
    load: "./img/icon-spin.svg",
    done: "./img/tick.svg"
}
// const status = {
//     idle: "https://crushingit.tech/hackathon-assets/icon-spinner.svg",
//     load: "https://crushingit.tech/hackathon-assets/icon-spinner.svg",
//     done: "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg"
// }
// alertIcon.style.display = "none"
bellIcon.addEventListener("click", () => {
    if (menus.classList.contains("open")) {
        menus.classList.remove("open");
    }

    alertCard.classList.toggle("open");
})
// menus.style.display == "none"
acctIcon.addEventListener("click", () => {
    if (alertCard.classList.contains("open")) {
        alertCard.classList.remove("open");
    }
    menus.classList.toggle("open");

});

const handleRemove = (event) => {
    planNotifi.classList.add("hide");
    setTimeout(() => {
        planNotifi.style.setProperty("display", "none");
    }, 500);
}


const toggleSetup = (event) => {
    console.log("setup")
    setupSteps.classList.toggle("open");
}

const toggleTick = (target, e) => {
    if (target.classList.contains("closed")) {
        target.classList.replace("closed", "opened");
        target.classList.add("spin");
        setTimeout(() => setStatus(target, status.load), 0);
        setTimeout(() => setStatus(target, status.done), 500);
    } else {
        target.classList.replace("opened", "closed");
    }
}


const setStatus = (target, status) => {
    const image = target.querySelector("img");
    if (!document.startViewTransition) {
        image.src = status;
    } else {
        document.startViewTransition(() => {
            image.src = status;
        });
    }
}

ticks.forEach(tick => {
    tick.addEventListener("click", (e) => toggleTick(tick, e));
});
closeIcon.addEventListener("click", (e) => handleRemove(e));
downIcon.addEventListener("click", (e) => toggleSetup(e));
// const bellIcon = document.querySelector(".bell");
// const alertIcon = document.querySelector(".alert");

// const acctIcon = document.querySelector(".acct");
// const menusIcon = document.querySelector(".menus");

// const closeIcon = document.querySelector(".close");
// const planNotifi = document.querySelector(".plan_notifi");

// const downIcon = document.querySelector(".down");
// const setupSteps = document.querySelector(".setup_steps");

// const guideNo = document.querySelector(".guide_no");
// const guideTrack = document.querySelector(".guide_track");

// const setupStep = document.querySelectorAll(".setup_step");
// const docWindow = document.body;

// const state = {
//     idle: "img/load.svg",
//     loading: "img/loading.svg",
//     success: "img/tick.svg",
//     timeout: 100
// }

// let value = parseInt( guideNo.dataset.val);
// let limit = parseInt(guideTrack.dataset.max);

// let currPanel = document.querySelector(".setup_step ");
// let prevPanel;

// currPanel.parentElement.parentElement
//     .style.setProperty("background-color", "var(--wht)");


// /**
//  * Handle Toggle
//  * @param {*} event 
//  */
// const handleToggle = (param) => {
//     const { target, type } = param;
//     if (type === "menus") {
//         if (alertIcon.classList.contains("show")) {
//             alertCard.classList.remove("show");
//         }
//     }

//     if (type === "alert") {
//         if (menusIcon.classList.contains("show")) {
//             menusIcon.classList.remove("show");
//         }
//     }

//     if (type === "dropd") {
//         const arrow = downIcon.querySelector("img");
//         if (setupSteps.classList.contains("show")) {
//             arrow.src = "img/icon-arrow-2.svg";
//         } else {
//             arrow.src = "src/assets/app/icon-arrow-1.svg";
//         }
//     }

//     target.classList.toggle("show");
// }

// /**
//  * Handle Remove
//  * @param {*} event 
//  */


// /**
//  * Handle Target
//  * @param {*} event 
//  */
// const handleTarget = (event) => {
//     const target = event.target;
//     if (target.matches(".check")) {
//         const check = target.parentElement.control.checked;
//         if (check) {
//             value = value - 1;
//             updateSlider({ value });
//             target.src = state.idle;
//         } else {
//             value = value + 1;
//             updateSlider({ value });
//             updatePanels({ 
//                 check: target
//             });
//             target.animate([
//                 { transform: "rotate(360deg)" }], { duration: 500 });
//             setTimeout(() => handleStatus({ 
//                 target, status: state.loading }), state.timeout * 0);
//             setTimeout(() => handleStatus({ 
//                 target, status: state.success }), state.timeout * 5);
//         }
//     }

//     if (target.matches(".title")) {
//         prevPanel = currPanel;
//         currPanel = target.nextElementSibling;

//         console.log(currPanel)

//         if (prevPanel) {
//             prevPanel.classList.remove("show");
//             prevPanel.parentElement.parentElement
//                 .style.setProperty("background-color", " transparent");
//         }
//         currPanel.classList.add("show");
//         currPanel.parentElement.parentElement
//                 .style.setProperty("background-color", "var(--l-100)");
//     }
// }

// const handleStatus = (param) => {
//     const { target, status } = param;
//     if (!document.startViewTransition) {
//         target.src = status;
//         return;
//     }
//     document.startViewTransition(() => {
//         target.src = status;
//     });
// }

// const updateSlider = (param) => {
//     const { value } = param;
//     const width = (value / limit) * 100;

//     const val = value.toString();
//     const max = limit.toString();

//     guideNo.innerText = `${val} / ${max} completed`;
//     rangePipe.style.setProperty("width", `${width}%`);
// }

// const updatePanels = (param) => {
//     const { check } = param;
//     const elemA = check.parentElement.parentElement;
//     const elemB = elemA.nextElementSibling;
//     if (!elemB) { return };

//     const panel = elemB.querySelector(".bunker__level-panel");

//     if (currPanel) {
//         currPanel.classList.remove("show");
//         currPanel.parentElement.parentElement
//         .style.setProperty("background-color", " transparent");
//     }

//     panel.classList.add("show");
//     panel.parentElement.parentElement
//         .style.setProperty("background-color", "var(--l-100)");
//     currPanel = panel;
// }

// setupStep.forEach(level => {
//     level.addEventListener("click", (e) => handleTarget(e));
// });

// bellIcon.addEventListener("click", (e) => handleToggle({
//     target: alertCard,
//     type: "alert"
// }));
// acctIcon.addEventListener("click", (e) => handleToggle({
//     target: menusCard,
//     type: "menus"
// }));
// dropdIcon.addEventListener("click", (e) => handleToggle({
//     target: dropdCard,
//     type: "dropd"
// }));
// closeIcon.addEventListener("click", (e) => handleRemove(e));