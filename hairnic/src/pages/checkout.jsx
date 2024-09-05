import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import ProductTable from "../components/ProductTable";
import CouponCode from "../components/CouponCode";
import BillingDetails from "../components/BillingDetails";
import CartTotals from "../components/CartTotals";
import PaymentMethod from "../components/PaymentMethod";

const Checkout = () => {
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    country: "India",
    streetAddress1: "",
    streetAddress2: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
    termsAndConditions: false,
  });

  const [errors, setErrors] = useState({});

  const increaseQuantity1 = () => setQuantity1(quantity1 + 1);
  const decreaseQuantity1 = () => quantity1 > 1 && setQuantity1(quantity1 - 1);
  const increaseQuantity2 = () => setQuantity2(quantity2 + 1);
  const decreaseQuantity2 = () => quantity2 > 1 && setQuantity2(quantity2 - 1);

  const price1 = 129.9;
  const price2 = 115.7;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.firstName) newErrors.firstName = "First name is required";
    if (!formValues.lastName) newErrors.lastName = "Last name is required";
    if (!formValues.zipCode) newErrors.zipCode = "ZIP code is required";
    if (!formValues.email) newErrors.email = "Email is required";
    if (!formValues.termsAndConditions)
      newErrors.termsAndConditions = "You must accept the terms and conditions";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("Form Submitted", formValues);
    }
  };

  return (
    <div>
      <MyNavbar />
      <div className="container-fluid container-md px-2 px-sm-3 px-md-4 py-3 py-md-5">
        <div className="row">
          <ProductTable
            quantity1={quantity1}
            quantity2={quantity2}
            increaseQuantity1={increaseQuantity1}
            decreaseQuantity1={decreaseQuantity1}
            increaseQuantity2={increaseQuantity2}
            decreaseQuantity2={decreaseQuantity2}
            price1={price1}
            price2={price2}
          />
          <CouponCode />
          <BillingDetails
            formValues={formValues}
            handleChange={handleChange}
            errors={errors}
          />
          <CartTotals
            price1={price1}
            price2={price2}
            quantity1={quantity1}
            quantity2={quantity2}
          />
          <PaymentMethod
            formValues={formValues}
            handleChange={handleChange}
            errors={errors}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
