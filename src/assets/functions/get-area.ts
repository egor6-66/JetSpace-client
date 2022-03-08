export const getHeight = (value: number) => {
    return window.screen.height - value
}

export const getWidth = (value: number) => {
    if (window.innerWidth > 1600) return 1500 - value
    if (window.innerWidth < 1000) return window.innerWidth - 30
    else return window.innerWidth - value
}