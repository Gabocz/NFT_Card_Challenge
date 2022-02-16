const overlay =  document.getElementById("overlay")
const mainTheme = document.getElementById("mainTheme")
mainTheme.addEventListener('mouseover', () => {
    overlay.style.display = "block"
}
)

mainTheme.addEventListener('mouseleave', () => {
    overlay.style.display = "none"
})