const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveCLasses()
    panel.classList.add('active')
  })  
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}  
