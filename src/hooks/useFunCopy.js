import { useState } from "react"

export const useFunCopy = (url) => {
  const [isClicked, setIsClicked] = useState(false)

  const copyURL = () => {
    setIsClicked(true)
    navigator.clipboard.writeText(url)
    funClick()
  }
  const funClick = () => {
    setTimeout(() => {
      setIsClicked(false)
    },350)
    clearInterval()
  }
  return {
    isClicked,
    copyURL
  }
}