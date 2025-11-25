"use client";

import { format } from "date-fns";
import { ChevronDownIcon, XIcon } from "lucide-react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const DESTINATIONS = [
  { city: "Etobicoke", country: "Canada" },
  { city: "Jersey City", country: "United States of America" },
  { city: "Mississauga", country: "Canada" },
  { city: "New York", country: "United States of America" },
  { city: "Toronto", country: "Canada" },
  { city: "Vancouver", country: "Canada" },
] as const;

type Destination = (typeof DESTINATIONS)[number];

function getDefaultDateRange(): DateRange {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return { from: today, to: tomorrow };
}

export function SearchWidget() {
  const [destination, setDestination] = useState<Destination | null>(null);
  const [guests, setGuests] = useState(1);
  const [dateRange, setDateRange] = useState<DateRange | undefined>(
    getDefaultDateRange
  );
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [destinationOpen, setDestinationOpen] = useState(false);

  const [guestsOpen, setGuestsOpen] = useState(false);

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (destination) {
      params.set("city", destination.city);
      params.set("country", destination.country);
    }
    params.set("minOccupancy", guests.toString());
    if (dateRange?.from) {
      params.set("checkIn", format(dateRange.from, "yyyy-MM-dd"));
    }
    if (dateRange?.to) {
      params.set("checkOut", format(dateRange.to, "yyyy-MM-dd"));
    }

    window.open(
      `https://book.returnpolicystays.com/en/properties?${params}`,
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
            <div className="font-medium text-base text-rp-black tracking-[-0.02em]">
              Destination
            </div>
            <Popover onOpenChange={setDestinationOpen} open={destinationOpen}>
              <PopoverTrigger asChild>
                <button
                  className={`flex w-full cursor-pointer items-center justify-between rounded-xl border-2 border-rp-black/10 px-4 py-3 text-left font-normal text-base text-rp-black leading-[1.15] tracking-[-0.02em] transition-all placeholder:text-rp-black/40 hover:bg-rp-black/5 focus:border-rp-black/20 focus:outline-none focus:ring-0 md:px-5 md:py-4 md:text-lg ${destinationOpen ? "border-rp-black/20 bg-rp-black/5" : "bg-rp-black/[0.02]"}`}
                  type="button"
                >
                  <span className={destination ? "" : "text-rp-black/40"}>
                    {destination ? destination.city : "Select a city"}
                  </span>
                  <ChevronDownIcon className="h-5 w-5 text-rp-black/40" />
                </button>
              </PopoverTrigger>
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
            <div className="font-medium text-base text-rp-black tracking-[-0.02em]">
              Check-in / Check-out
            </div>
            <Popover onOpenChange={setCalendarOpen} open={calendarOpen}>
              <PopoverTrigger asChild>
                <button
                  className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded-xl border-2 border-rp-black/10 px-4 py-3 text-left font-normal text-base text-rp-black leading-[1.15] tracking-[-0.02em] transition-all hover:bg-rp-black/5 focus:border-rp-black/20 focus:outline-none focus:ring-0 md:px-5 md:py-4 md:text-lg ${calendarOpen ? "border-rp-black/20 bg-rp-black/5" : "bg-rp-black/[0.02]"}`}
                  type="button"
                >
                  <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    {dateRange?.from ? (
                      <>
                        {format(dateRange.from, "MMM d, yyyy")}
                        <span className="mx-2 text-rp-black/40">→</span>
                        {dateRange.to
                          ? format(dateRange.to, "MMM d, yyyy")
                          : "Select"}
                      </>
                    ) : (
                      <span className="text-rp-black/40">Select dates</span>
                    )}
                  </span>
                  {dateRange?.from && (
                    // biome-ignore lint/a11y/useSemanticElements: Cannot use button element as it would be nested inside PopoverTrigger button
                    <div
                      className="shrink-0 cursor-pointer rounded-full p-1 transition-colors hover:bg-rp-black/10"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDateRange(undefined);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.stopPropagation();
                          e.preventDefault();
                          setDateRange(undefined);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      <XIcon className="h-4 w-4 text-rp-black/60" />
                    </div>
                  )}
                </button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="w-auto rounded-xl border border-rp-black/10 bg-white p-0"
                sideOffset={8}
              >
                <div className="p-4">
                  <Calendar
                    className="border-0"
                    disabled={{ before: new Date() }}
                    mode="range"
                    numberOfMonths={2}
                    onSelect={setDateRange}
                    selected={dateRange}
                    showOutsideDays={false}
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests */}
          <div className="flex flex-col gap-2">
            <div className="font-medium text-base text-rp-black tracking-[-0.02em]">
              Minimum Guests
            </div>
            <Popover onOpenChange={setGuestsOpen} open={guestsOpen}>
              <PopoverTrigger asChild>
                <button
                  className={`flex w-full cursor-pointer items-center justify-between rounded-xl border-2 border-rp-black/10 px-4 py-3 text-left font-normal text-base text-rp-black leading-[1.15] tracking-[-0.02em] transition-all hover:bg-rp-black/5 focus:border-rp-black/20 focus:outline-none focus:ring-0 md:px-5 md:py-4 md:text-lg ${guestsOpen ? "border-rp-black/20 bg-rp-black/5" : "bg-rp-black/[0.02]"}`}
                  type="button"
                >
                  <span>{guests}+ guests</span>
                  <ChevronDownIcon className="h-5 w-5 text-rp-black/40" />
                </button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="w-[var(--radix-popover-trigger-width)] rounded-xl border border-rp-black/10 bg-white p-2"
              >
                <div className="flex max-h-64 flex-col overflow-y-auto">
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                    <button
                      className="cursor-pointer rounded-lg px-4 py-3 text-left font-normal text-base text-rp-black tracking-[-0.02em] transition-colors hover:bg-rp-black/5"
                      key={num}
                      onClick={() => {
                        setGuests(num);
                        setGuestsOpen(false);
                      }}
                      type="button"
                    >
                      {num}+
                    </button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
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
