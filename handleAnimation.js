const handleAnimation = (element) => {
    element.classList.add("played")
            setTimeout(() => {
                element.classList.remove("played")
            }, 100)
}