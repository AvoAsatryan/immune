"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Currency from "@/types/Currency";

import CheckoutPage from "@/components/payments/CheckoutPage";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

type Props = {};

const currencies: Currency[] = [
  {
    value: "usd",
    label: "USD",
    sign: "$",
  },
  {
    value: "amd",
    label: "AMD",
    sign: "֏",
  },
  {
    value: "eur",
    label: "EUR",
    sign: "€",
  },
  {
    value: "rub",
    label: "RUB",
    sign: "₽",
  },
];

const Donate = (props: Props) => {
  const [donationToggleState, setDonationToggleState] = useState(false);
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [open, setOpen] = React.useState(false);
  const [selectedCurrency, setSelectedCurrency] =
    React.useState<Currency | null>(currencies[0]);

  return (
    <div className="donate-section">
      <h2>Նվիրաբերել</h2>
      <p className="mb-[15px] text-[#34495E]">
        Ցանկացած ներդրում մեծ նշանակություն ունի մեր առաքելությունը կյանքի
        կոչելու համար: Ձեր նվիրաբերությունը կօգնի մեզ աջակցել հիվանդ երեխաներին,
        մեծահասակներին և կարիքավոր ընտանիքներին:
      </p>
      <div className="flex items-center justify-center">
        <Input
          className="w-full max-w-[20ch] bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          value={donationAmount}
          type="number"
          placeholder="Amount"
          onChange={(e) => setDonationAmount(Number(e.target.value))}
        />

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[80px] justify-between text-[#34495E] hover:text-gray-700 border-slate-300"
            >
              {selectedCurrency ? (
                <>{selectedCurrency.label}</>
              ) : (
                <>+ Set Currency</>
              )}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[80px] p-0 text-[#34495E] hover:text-gray-700 bg-slate-50">
            <Command>
              <CommandInput />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {currencies.map((currency) => (
                    <CommandItem
                      key={currency.value}
                      value={currency.value}
                      onSelect={(value) => {
                        setSelectedCurrency(
                          currencies.find(
                            (priority) => priority.value === value
                          ) || null
                        );
                        setOpen(false);
                      }}
                    >
                      {currency.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Button
          className="border-0 rounded-r-[5px] py-2.5 px-5 cursor-pointer text-[14px] text-white  bg-[#E74C3C] hover:bg-[#C0392B] transition-colors delay-150"
          onClick={() => {
            if (donationAmount) {
              setDonationToggleState((prevState: boolean) => !prevState);
            }
          }}
        >
          Նվիրաբերել
        </Button>
      </div>

      {donationToggleState && donationAmount && selectedCurrency && (
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertToSubcurrency(donationAmount),
            currency: selectedCurrency.value,
          }}
        >
          <CheckoutPage amount={donationAmount} currency={selectedCurrency}/>
        </Elements>
      )}
    </div>
  );
};

export default Donate;
