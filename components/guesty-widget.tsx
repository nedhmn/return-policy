"use client";

import { useEffect, useRef } from "react";

export function GuestyWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dateRangeSetRef = useRef(false);

  // Set default date range (today + tomorrow) - wait for styles before interacting
  useEffect(() => {
    if (dateRangeSetRef.current) {
      document.body.classList.add("guesty-dates-ready");
      return;
    }

    let isSettingDates = false;

    // Wait for next frame to ensure styles are applied
    const waitForPaint = () =>
      new Promise<void>((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            resolve();
          });
        });
      });

    const setDefaultDates = async () => {
      if (isSettingDates || dateRangeSetRef.current) return false;
      isSettingDates = true;

      const checkInInput = document.querySelector(
        "#search-widget_IO312PWQ input.check-in"
      ) as HTMLInputElement;
      const lp = document.querySelector(".lightpick") as HTMLElement;

      if (!checkInInput || !lp) {
        isSettingDates = false;
        return false;
      }

      // Skip if dates already set
      if (checkInInput.value) {
        dateRangeSetRef.current = true;
        document.body.classList.add("guesty-dates-ready");
        return true;
      }

      // FORCE hide with inline styles immediately
      lp.style.cssText =
        "position: fixed !important; left: -99999px !important; top: -99999px !important; visibility: hidden !important; opacity: 0 !important;";

      // Wait for the hiding styles to be painted
      await waitForPaint();
      // Extra safety delay
      await new Promise((r) => setTimeout(r, 50));

      // Helper to simulate click
      const simulateClick = (el: Element) => {
        el.dispatchEvent(
          new MouseEvent("mousedown", { bubbles: true, cancelable: true })
        );
        el.dispatchEvent(
          new MouseEvent("mouseup", { bubbles: true, cancelable: true })
        );
        el.dispatchEvent(
          new MouseEvent("click", { bubbles: true, cancelable: true })
        );
      };

      // Click input to trigger lightpick to render day cells
      simulateClick(checkInInput);

      // Wait for cells to render
      await new Promise((r) => setTimeout(r, 200));

      // Get today and tomorrow
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      // Helper to find cell by date
      const findCellByDate = (targetDate: Date): Element | null => {
        const cells = lp.querySelectorAll(
          ".lightpick__day:not(.is-disabled):not(.is-previous-month)"
        );
        let foundCell: Element | null = null;
        cells.forEach((cell) => {
          const timestamp = parseInt(cell.getAttribute("data-time") || "0", 10);
          const cellDate = new Date(timestamp);
          cellDate.setHours(0, 0, 0, 0);
          if (cellDate.toDateString() === targetDate.toDateString()) {
            foundCell = cell;
          }
        });
        return foundCell;
      };

      const todayCell = findCellByDate(today);
      if (todayCell) {
        simulateClick(todayCell);
        await new Promise((r) => setTimeout(r, 100));

        const tomorrowCell = findCellByDate(tomorrow);
        if (tomorrowCell) {
          simulateClick(tomorrowCell);
        }
      }

      // Wait for lightpick to close and inputs to update
      await new Promise((r) => setTimeout(r, 100));

      // Remove inline styles
      lp.removeAttribute("style");

      dateRangeSetRef.current = true;
      document.body.classList.add("guesty-dates-ready");
      return true;
    };

    // Watch for lightpick to appear and IMMEDIATELY hide it
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement) {
            // Immediately hide any lightpick element the moment it's added
            if (node.classList?.contains("lightpick")) {
              node.style.cssText =
                "position: fixed !important; left: -99999px !important; top: -99999px !important; visibility: hidden !important; opacity: 0 !important;";
            }
            const nested = node.querySelector?.(".lightpick") as HTMLElement;
            if (nested) {
              nested.style.cssText =
                "position: fixed !important; left: -99999px !important; top: -99999px !important; visibility: hidden !important; opacity: 0 !important;";
            }
          }
        }
      }

      // Check if we should start date selection
      const lp = document.querySelector(".lightpick") as HTMLElement;
      if (lp && !dateRangeSetRef.current && !isSettingDates) {
        // Hide it first, then wait, then set dates
        lp.style.cssText =
          "position: fixed !important; left: -99999px !important; top: -99999px !important; visibility: hidden !important; opacity: 0 !important;";

        // Wait for styles to apply before doing anything
        setTimeout(() => {
          setDefaultDates();
        }, 100);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Execute the Guesty snippet logic
    const startGuestyWidget = (options: {
      win: Window;
      doc: Document;
      widgetName: string;
      cssUrl: string;
      jsUrl: string;
      config: Record<string, unknown>;
    }) => {
      const { win, doc, widgetName, cssUrl, jsUrl, config } = options;
      const logError = (msg: string) =>
        console.log("[Guesty Embedded Widget]:", msg);

      // Inject CSS
      if (cssUrl) {
        const head = doc.getElementsByTagName("head")[0];
        if (!doc.querySelector(`link[href="${cssUrl}"]`)) {
          const link = doc.createElement("link");
          link.rel = "stylesheet";
          link.type = "text/css";
          link.href = cssUrl;
          link.media = "all";
          head.appendChild(link);
        }
      }

      // Initialization function
      const init = () => {
        try {
          // @ts-expect-error - Guesty widget API
          win[widgetName].create(config).catch((e: Error) => {
            logError(e.message);
          });
        } catch (e) {
          logError(e instanceof Error ? e.message : String(e));
        }
      };

      // Check if script already exists
      let script = doc.querySelector(
        `script[src="${jsUrl}"]`
      ) as HTMLScriptElement;
      if (script) {
        // If script is already loaded, just init
        init();
      } else {
        script = doc.createElement("script");
        script.type = "text/javascript";
        script.src = jsUrl;
        script.async = true;
        script.onload = init;
        // @ts-expect-error
        script.onreadystatechange = function () {
          // @ts-expect-error
          if (this.readyState === "complete") {
            init();
          }
        };
        const firstScript = doc.getElementsByTagName("script")[0];
        if (firstScript?.parentNode) {
          firstScript.parentNode.insertBefore(script, firstScript);
        } else {
          doc.head.appendChild(script);
        }
      }
    };

    // Run the function with the provided parameters
    startGuestyWidget({
      win: window,
      doc: document,
      widgetName: "GuestySearchBarWidget",
      cssUrl:
        "https://s3.amazonaws.com/guesty-frontend-production/search-bar-production.css",
      jsUrl:
        "https://s3.amazonaws.com/guesty-frontend-production/search-bar-production.js",
      config: {
        siteUrl: "book.returnpolicystays.com",
        color: "#4097DB",
      },
    });
  }, []);

  return (
    <div className="mx-auto w-full max-w-4xl" ref={containerRef}>
      <div className="relative rounded-[3rem] bg-white p-2 shadow-xl ring-1 ring-black/5 md:p-3">
        <style global jsx>{`
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
        <div className="w-full" id="search-widget_IO312PWQ" />
      </div>
    </div>
  );
}
