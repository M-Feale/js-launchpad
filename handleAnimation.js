const handleAnimation = (element) => {
    element.classList.add("played")
    setTimeout(() => {
        element.classList.remove("played")
    }, 100) // the length of our timeout is the same length as the transition in styles.css
}

module.exports = handleAnimation;