"use client";

import { ChevronDownIcon, MinusIcon, PlusIcon, XIcon } from "lucide-react";
import type { Moment } from "moment";
import moment from "moment";
import { useState } from "react";
import "react-dates/initialize";
import type { FocusedInputShape } from "react-dates";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { siteConfig } from "@/lib/config";

const DESTINATIONS = [
  { city: "Etobicoke", country: "Canada" },
  { city: "Jersey City", country: "United States of America" },
  { city: "Mississauga", country: "Canada" },
  { city: "New York", country: "United States of America" },
  { city: "Toronto", country: "Canada" },
  { city: "Vancouver", country: "Canada" },
] as const;

type Destination = (typeof DESTINATIONS)[number];

export function SearchWidget() {
  const [destination, setDestination] = useState<Destination | null>(null);
  const [guests, setGuests] = useState(1);
  const [startDate, setStartDate] = useState<Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(
    null
  );
  const [destinationOpen, setDestinationOpen] = useState(false);

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (destination) {
      params.set("city", destination.city);
      params.set("country", destination.country);
    }
    params.set("minOccupancy", guests.toString());

    // Use selected dates or default to today/tomorrow
    const checkIn = startDate || moment();
    const checkOut = endDate || moment().add(1, "day");
    params.set("checkIn", checkIn.format("YYYY-MM-DD"));
    params.set("checkOut", checkOut.format("YYYY-MM-DD"));

    window.open(
      `https://${siteConfig.bookingDomain}/en/properties?${params}`,
      "_blank"
    );
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="rounded-3xl border-3 border-rp-black bg-white px-8 py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:px-10 md:py-7">
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          {/* Destination */}
          <div className="flex flex-col gap-2">
            <Popover onOpenChange={setDestinationOpen} open={destinationOpen}>
              <div className="relative">
                <PopoverTrigger asChild>
                  <button
                    className={`flex w-full cursor-pointer items-center justify-between rounded-[0.75rem] border-2 border-rp-black/10 px-4 py-3 pr-16 text-left font-normal text-base text-rp-black leading-[1.15] tracking-[-0.02em] transition-all placeholder:text-rp-black/40 hover:bg-rp-black/5 focus:border-rp-black/20 focus:outline-none focus:ring-0 md:px-5 md:py-4 md:pr-16 md:text-lg ${destinationOpen ? "border-rp-black/20 bg-rp-black/5" : "bg-rp-black/[0.02]"}`}
                    type="button"
                  >
                    <span className={destination ? "" : "text-rp-black/40"}>
                      {destination ? destination.city : "Select a city"}
                    </span>
                    <ChevronDownIcon className="absolute right-4 h-5 w-5 shrink-0 text-rp-black/40 md:right-5" />
                  </button>
                </PopoverTrigger>
                <button
                  aria-label="Clear destination"
                  className={`absolute top-1/2 right-10 mr-[5px] h-5 w-5 -translate-y-1/2 cursor-pointer rounded-full bg-white p-0 transition-colors hover:bg-rp-black/5 md:right-11 ${destination ? "visible opacity-100" : "pointer-events-none invisible opacity-0"}`}
                  onClick={() => setDestination(null)}
                  tabIndex={destination ? 0 : -1}
                  type="button"
                >
                  <XIcon className="h-full w-full text-rp-black/40" />
                </button>
              </div>
              <PopoverContent
                align="start"
                className="w-[var(--radix-popover-trigger-width)] rounded-xl border border-rp-black/10 bg-white p-2"
              >
                <div className="flex max-h-64 flex-col overflow-y-auto">
                  {DESTINATIONS.map((dest) => (
                    <button
                      className="cursor-pointer rounded-lg px-4 py-3 text-left font-normal text-base text-rp-black tracking-[-0.02em] transition-colors hover:bg-rp-black/5"
                      key={dest.city}
                      onClick={() => {
                        setDestination(dest);
                        setDestinationOpen(false);
                      }}
                      type="button"
                    >
                      {dest.city}
                    </button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Date Range */}
          <div className="flex flex-col gap-2">
            <div className="rp-date-picker">
              <DateRangePicker
                block
                displayFormat="MMM D, YYYY"
                endDate={endDate}
                endDateId="checkout"
                endDatePlaceholderText="Check-out"
                focusedInput={focusedInput}
                hideKeyboardShortcutsPanel
                isOutsideRange={(day) => day.isBefore(moment(), "day")}
                noBorder
                numberOfMonths={1}
                onDatesChange={({ startDate: newStart, endDate: newEnd }) => {
                  setStartDate(newStart);
                  setEndDate(newEnd);
                }}
                onFocusChange={(focused) => setFocusedInput(focused)}
                readOnly
                reopenPickerOnClearDates
                showClearDates
                startDate={startDate}
                startDateId="checkin"
                startDatePlaceholderText="Check-in"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex flex-col gap-2">
            <div className="flex w-full items-center justify-between rounded-[0.75rem] border-2 border-rp-black/10 bg-rp-black/[0.02] px-4 py-3 md:px-5 md:py-4">
              <button
                aria-label="Decrease guests"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-rp-black/10 bg-white transition-colors hover:bg-rp-black/5 disabled:cursor-not-allowed disabled:opacity-40"
                disabled={guests <= 1}
                onClick={() => setGuests((g) => Math.max(1, g - 1))}
                type="button"
              >
                <MinusIcon className="h-4 w-4 text-rp-black" />
              </button>
              <span className="font-normal text-base text-rp-black leading-[1.15] tracking-[-0.02em] md:text-lg">
                {guests}+ guests
              </span>
              <button
                aria-label="Increase guests"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-rp-black/10 bg-white transition-colors hover:bg-rp-black/5 disabled:cursor-not-allowed disabled:opacity-40"
                disabled={guests >= 15}
                onClick={() => setGuests((g) => Math.min(15, g + 1))}
                type="button"
              >
                <PlusIcon className="h-4 w-4 text-rp-black" />
              </button>
            </div>
          </div>

          {/* Search Button */}
          <button
            className="mt-2 flex cursor-pointer items-center justify-center rounded-full border-3 border-rp-black bg-rp-blue px-12 py-3 font-medium text-lg text-white tracking-[-0.02em] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:px-16 md:py-4 md:text-xl"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
