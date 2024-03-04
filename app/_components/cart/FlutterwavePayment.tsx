"use client";

import { closePaymentModal, FlutterWaveButton } from "flutterwave-react-v3";

const config = {
  public_key: process.env.NEXT_FLUTTERWAVE_PUBLIC_KEY!,
  tx_ref: Date.now().toString() + Math.random(),
  amount: 100,
  currency: "NGN",
  payment_options: "card,mobilemoney,ussd",
  customer: {
    email: "user@gmail.com",
    phone_number: "070********",
    name: "john doe",
  },
  customizations: {
    title: "Dessertify",
    description: "Payment for items in cart",
    logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
  },
};

const fwConfig = {
  ...config,
  text: "Checkout",
// eslint-disable-next-line
  callback: (response) => {
    console.log(response);
    closePaymentModal();
  },
  onClose: () => {},
};

const FlutterwavePayment = () => {
  return <FlutterWaveButton {...fwConfig} />;
};

export default FlutterwavePayment;
