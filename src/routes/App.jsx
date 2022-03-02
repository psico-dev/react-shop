import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "../containers/Home"
import { Checkout } from "../containers/Checkout"
import { Information } from "../containers/Information"
import { Payment } from "../containers/Payment"
import { Succes } from "../containers/Succes"
import { NotFound } from "../containers/NotFound"


function App () {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/checkout/information" element={<Information />} />
        <Route exact path="/checkout/payment" element={<Payment />} />
        <Route exact path="/checkout/succes" element={<Succes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export { App }