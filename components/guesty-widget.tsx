"use client"

import { useEffect, useRef } from "react"

export function GuestyWidget() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Execute the Guesty snippet logic
    const startGuestyWidget = (
      win: Window,
      doc: Document,
      widgetName: string,
      cssUrl: string,
      jsUrl: string,
      config: any,
    ) => {
      function logError(msg: string) {
        console.log("[Guesty Embedded Widget]:", msg)
      }

      // Inject CSS
      if (cssUrl) {
        const head = doc.getElementsByTagName("head")[0]
        if (!doc.querySelector(`link[href="${cssUrl}"]`)) {
          const link = doc.createElement("link")
          link.rel = "stylesheet"
          link.type = "text/css"
          link.href = cssUrl
          link.media = "all"
          head.appendChild(link)
        }
      }

      // Initialization function
      const init = () => {
        try {
          // @ts-ignore
          win[widgetName].create(config).catch((e: any) => {
            logError(e.message)
          })
        } catch (e: any) {
          logError(e.message)
        }
      }

      // Check if script already exists
      let script = doc.querySelector(`script[src="${jsUrl}"]`) as HTMLScriptElement
      if (!script) {
        script = doc.createElement("script")
        script.type = "text/javascript"
        script.src = jsUrl
        script.async = true
        script.onload = init
        // @ts-ignore
        script.onreadystatechange = function () {
          // @ts-ignore
          if (this.readyState === "complete") init()
        }
        const firstScript = doc.getElementsByTagName("script")[0]
        if (firstScript && firstScript.parentNode) {
          firstScript.parentNode.insertBefore(script, firstScript)
        } else {
          doc.head.appendChild(script)
        }
      } else {
        // If script is already loaded, just init
        init()
      }
    }

    // Run the function with the provided parameters
    startGuestyWidget(
      window,
      document,
      "GuestySearchBarWidget",
      "https://s3.amazonaws.com/guesty-frontend-production/search-bar-production.css",
      "https://s3.amazonaws.com/guesty-frontend-production/search-bar-production.js",
      {
        siteUrl: "book.returnpolicystays.com",
        color: "#4097DB",
      },
    )
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto" ref={containerRef}>
      <div className="relative rounded-[3rem] bg-white p-2 shadow-xl ring-1 ring-black/5 md:p-3">
        <style jsx global>{`
          /* Main Widget Container */
          #search-widget_IO312PWQ {
            background: #ffffff;
            border-radius: 9999px; /* Full pill shape */
            padding: 4px !important;
            max-width: 100%;
          }

          /* Internal Guesty Flex Container */
          #search-widget_IO312PWQ > div,
          .guesty-search-bar-container {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            width: 100% !important;
            font-family: var(--font-sans) !important;
          }

          /* Input Wrappers */
          .guesty-search-bar-container > div {
            flex: 1 !important;
            position: relative !important;
            border-right: 1px solid rgba(0, 0, 0, 0.06) !important; /* Subtle divider */
            padding: 0 24px !important;
            margin: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            min-height: 64px !important;
          }
          
          /* Remove divider from last input and button wrapper */
          .guesty-search-bar-container > div:last-of-type,
          .guesty-search-bar-container > div:nth-last-child(2) {
            border-right: none !important;
          }

          /* Inputs */
          .guesty-search-bar-container input,
          .guesty-search-bar-container select,
          #search-widget_IO312PWQ .selectr-selected,
          #search-widget_IO312PWQ .selectr-label {
            border: none !important;
            background: transparent !important;
            font-size: 1rem !important;
            font-weight: 500 !important;
            letter-spacing: -0.02em !important;
            color: #000000 !important;
            caret-color: #000000 !important; /* Ensure caret is black */
            padding: 4px 0 !important;
            height: auto !important;
            outline: none !important;
            box-shadow: none !important;
            cursor: pointer !important;
          }

          /* Additional targeting for Selectr library text */
          #search-widget_IO312PWQ .selectr-container .selectr-selected .selectr-label {
             color: #000000 !important;
          }

          /* Placeholders */
          .guesty-search-bar-container input::placeholder {
            color: #000000 !important;
            font-weight: 400 !important;
            opacity: 0.4 !important;
          }

          /* Labels (if any) */
          .guesty-search-bar-container label {
            text-transform: uppercase !important;
            font-size: 0.7rem !important;
            letter-spacing: 0.05em !important;
            font-weight: 700 !important;
            color: #666 !important;
            margin-bottom: 2px !important;
          }

          /* Submit Button */
          .guesty-search-bar-container button[type="submit"],
          .guesty-search-bar-container .guesty-submit-button {
            background-color: #4097db !important; /* Brand Blue background */
            color: #FFFFF0 !important; /* Ivory text (matches hero body) */
            border-radius: 9999px !important;
            padding: 0 48px !important;
            font-weight: 600 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.05em !important;
            font-size: 0.875rem !important;
            border: 2px solid #000000 !important; /* Neo-Brutalist styles: Border */
            box-shadow: 6px 6px 0px 0px #000000 !important; /* Neo-Brutalist styles: Solid Shadow */
            margin-left: 8px !important;
            height: 64px !important;
            min-width: 160px !important;
            transition: none !important; /* Removed transition for immediate effect */
            transform: translate(0, 0) !important; /* Initial transform */
          }
          
          .guesty-search-bar-container button[type="submit"]:hover {
            /* Updated hover effect: Shadow disappears, button presses down */
            background-color: #4097db !important; 
            box-shadow: 0px 0px 0px 0px #000000 !important;
            transform: translate(6px, 6px) !important;
          }

          /* Specific overrides for the selector provided by the user */
          .guesty-root-element .guesty-search-submit-btn {
             font-family: var(--font-inter), sans-serif !important;
             background-color: #4097db !important; /* Brand Blue */
             color: #FFFFF0 !important; /* Ivory */
             font-weight: 600 !important;
             border-radius: 9999px !important; /* Added border-radius for pill shape */
             border: 2px solid #000000 !important; /* Neo-Brutalist styles: Border */
             box-shadow: 6px 6px 0px 0px #000000 !important; /* Neo-Brutalist styles: Solid Shadow */
             transition: none !important; /* Removed transition for immediate effect */
             transform: translate(0, 0) !important; /* Initial transform */
          }

          .guesty-root-element .guesty-search-submit-btn:hover {
             /* Updated hover effect */
             background-color: #4097db !important;
             box-shadow: 0px 0px 0px 0px #000000 !important;
             transform: translate(6px, 6px) !important;
          }
          
          /* Fix for Lightpick Datepicker clipping off-screen: Force right alignment */
          .guesty-root-element .lightpick {
            left: 55% !important; 
            right: auto !important;
            transform: translateX(-50%) !important;
            top: 100% !important;
            margin-top: 12px !important;
            z-index: 9999 !important;
          }

          /* Legacy fix for React Dates (keeping just in case) */
          .DateRangePicker_picker {
            left: auto !important;
            right: 0 !important;
            /* Ensure it doesn't get cut off on small screens */
            max-width: 100vw !important; 
            margin-right: -10px !important; 
          }

          /* Added overrides for Calendar Date selection */
          .DateRangePicker__Date--selected,
          .DateRangePicker__Date--selected:hover,
          .CalendarDay__selected, 
          .CalendarDay__selected:active, 
          .CalendarDay__selected:hover {
            background: #000000 !important;
            border-color: #000000 !important;
            color: #fff !important;
          }
          
          .CalendarDay__hovered_span,
          .CalendarDay__selected_span {
            background: #FEF380 !important; /* Brand Yellow for ranges */
            border-color: #FEF380 !important;
            color: #1A1A1A !important;
          }

          /* Ensure the calendar doesn't overflow horizontally on mobile either */
          @media (max-width: 768px) {
             #search-widget_IO312PWQ {
               border-radius: 24px !important;
               padding: 16px !important;
             }
             .guesty-search-bar-container {
               flex-direction: column !important;
               gap: 12px !important;
             }
             .guesty-search-bar-container > div {
               width: 100% !important;
               border-right: none !important;
               border-bottom: 1px solid rgba(0, 0, 0, 0.06) !important;
               padding: 12px 0 !important;
             }
             .guesty-search-bar-container .guesty-submit-button {
               width: 100% !important;
               margin: 8px 0 0 0 !important;
             }

             /* Mobile fix for Lightpick */
             .guesty-root-element .lightpick {
                left: 50% !important;
                right: auto !important;
                transform: translateX(-50%) !important;
                width: 100% !important;
                max-width: 100vw !important;
                margin-right: 0 !important;
             }

             .DateRangePicker_picker {
               left: 50% !important;
               right: auto !important;
               transform: translateX(-50%) !important;
               width: 100% !important;
             }

             /* Fix for date value clipping on mobile by removing margins */
             .guesty-root-element.small-size.guesty-widget__container .guesty-widget__item #guesty-search-widget__datepicker {
                width: 100% !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
             }
          }

          @media (min-width: 769px) {
            .guesty-root-element .lightpick {
               max-width: 100vw !important;
            }
          }
        `}</style>
        <div id="search-widget_IO312PWQ" className="w-full" />
      </div>
    </div>
  )
}
