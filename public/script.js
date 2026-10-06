const startScreen = document.getElementById("start-screen")
const menuScreen = document.getElementById("menu")
const startBtn = document.getElementById("start-btn")
const openTabBtn = document.getElementById("open-tab-btn")
const closeTabBtn = document.getElementById("close-tab-btn")
const tab = document.getElementById("menu-tab")
const uploadScreen = document.getElementById("upload-screen")
const uploadBtn = document.getElementById("upload-btn")
const pafScreen = document.getElementById("paf-screen")
const pafBtn = document.getElementById("paf-btn")
const homeBtn = document.getElementById("home-btn")
const checklistBtn = document.getElementById("checklist-btn")
const checklistScreen = document.getElementById("checklist-screen")



startBtn.addEventListener("click", start)
homeBtn.addEventListener("click", home)
openTabBtn.addEventListener("click", openTab)
closeTabBtn.addEventListener("click", closeTab)
uploadBtn.addEventListener("click", uploadMenu)
pafBtn.addEventListener("click", pafMenu)
checklistBtn.addEventListener("click", checklistMenu)


function start() {
    startScreen.classList.remove("active")
    menuScreen.classList.add("active")
    homeBtn.classList.remove("disabled")
}

function openTab() {
    openTabBtn.classList.add("disabled")
    tab.classList.add("active")
    closeTabBtn.classList.remove("disabled")
}

function closeTab() {
    openTabBtn.classList.remove("disabled")
    tab.classList.remove("active")
    closeTabBtn.classList.add("disabled")
}

function uploadMenu() {
    closeTab()
    menuScreen.classList.remove("active")
    uploadScreen.classList.add("active")
}

function pafMenu() {
    closeTab()
    menuScreen.classList.remove("active")
    pafScreen.classList.add("active")
}

function checklistMenu() {
    closeTab()
    menuScreen.classList.remove("active")
    checklistScreen.classList.add("active")
}

function home() {
    uploadScreen.classList.remove("active")
    pafScreen.classList.remove("active")
    checklistScreen.classList.remove("active")
    menuScreen.classList.add("active")
}