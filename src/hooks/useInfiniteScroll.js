import { useState, useEffect } from "react"

const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isFetching) return
    callback(() => {
      console.log("called back")
    })
  }, [isFetching])

  function handleScroll() {
    console.log(
      "SCROLL",
      isFetching,
      window.innerHeight,
      document.documentElement.scrollTop,
      document.documentElement.offsetHeight
    )
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return
    setIsFetching(true)
  }

  return [isFetching, setIsFetching]
}

export default useInfiniteScroll
