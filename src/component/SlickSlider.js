"use client"
import { IMAGE_PATH } from "@/configs/config"
import { useState, useEffect } from "react"
import TitleInfo from "./TitleInfo"

export default function SlickSlider({ data }) {
  const d = data?.pageData
  const words = d?.Vibrant_Journey_Title?.trim().split(" ")
  const last = words?.slice(-2).join(" ")
  const first = words?.slice(0, -2).join(" ")

  const stats = []
  for (let i = 1; i <= 10; i++) {
    const count = d?.[`VJC-${i}`]
    const title = d?.[`VJT-${i}`]
    const desc = d?.[`VJD-${i}`]

    if (count && title && desc) {
      stats.push({
        count,
        title,
        desc,
      })
    }
  }

  // Create cardDetails from API data
  const cardDetails = []
  for (let i = 1; i <= 10; i++) {
    const title = d?.[`VJC-Title-${i}`]
    // const subheading = d?.[`VJC-SubHeading-${i}`]
    const images = d?.[`VJC-Images-${i}`]

    if (title && images) {
      cardDetails.push({
        id: i,
        title,
        // subheading,
        images,
      })
    }
  }

  const [imageIndex, setImageIndex] = useState({})

  // Initialize imageIndex when cardDetails changes
  useEffect(() => {
    if (cardDetails.length > 0) {
      const initialIndex = cardDetails.reduce((acc, item) => {
        acc[item.id] = 0
        return acc
      }, {})
      setImageIndex(initialIndex)
    }
  }, [cardDetails.length])

  // Set up staggered intervals for each card
  useEffect(() => {
    if (cardDetails.length === 0) return

    const intervals = cardDetails.map((item, idx) => {
      return setInterval(
        () => {
          setImageIndex((prevIndex) => {
            const newIndex = { ...prevIndex }
            if (item.images && item.images.length > 0) {
              newIndex[item.id] = (prevIndex[item.id] + 1) % item.images.length
            }
            return newIndex
          })
        },
        (idx + 1) * 1000,
      ) // Different timing for each card: 1s, 2s, 3s, etc.
    })

    // Clear all intervals on cleanup
    return () => {
      intervals.forEach(clearInterval)
    }
  }, [cardDetails.length]) // Only depend on length to avoid recreating intervals unnecessarily

  return (
    <>
      <section className="h-full bg-[#F3F3F3] py-8">
        <div className="break1:max-w-[1500px] break2:max-w-[1320px] break3:max-w-[1200px] break4:max-w-[1040px] mx-auto">
          <TitleInfo first="Vibrant Journey" second={d?.Vibrant_Journey_Title} color='black' />
          <div className="mt-10 grid grid-cols-12 gap-4">
            <div className="mt-10 col-span-12 max-lg:mx-auto">
              <section className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {cardDetails.slice(0, 6).map((item) => (
                  <div
                    key={item.id}
                    className="group relative h-[20rem] w-full max-sm:h-80 max-sm:w-72 max-2xl:w-64 max-2xl:h-80 max-xl:w-52 max-xl:h-72 max-lg:h-96 max-lg:w-80 max-md:w-60 max-md:h-80 bg-white shadow-md overflow-hidden"
                  >
                    <img
                      key={`${item.id}-${imageIndex[item.id] || 0}`}
                      src={IMAGE_PATH + item.images[imageIndex[item.id] || 0]}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black from-[calc(7/16*100%)] ring-1 ring-inset ring-gray-950/10 sm:from-5%"
                    />
                    <div className="absolute bottom-0 left-0 p-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {/* <blockquote>
                        <p className="text-xs uppercase text-white">{item.subheading}</p>
                      </blockquote> */}
                      <figcaption className="mt-3 border-t border-white/20 pt-2">
                        <p className="font-novaReg">
                          <span className="bg-gradient-to-r text-sm line-clamp-2 from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
                            {item.title}
                          </span>
                        </p>
                      </figcaption>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
