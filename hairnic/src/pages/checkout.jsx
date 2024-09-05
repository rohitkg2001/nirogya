import React, { useState } from "react";
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


    if (!/^\d{10}$/.test(formValues.phone))
      newErrors.phone = "Phone number must be 10 digits";


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formValues.email))
      newErrors.email = "Invalid email address";


    if (!/^\d{6}$/.test(formValues.zipCode))
      newErrors.zipCode = "ZIP code must be 6 digits";


    if (!formValues.streetAddress1)
      newErrors.streetAddress1 = "Street Address 1 is required";


    if (!formValues.city) newErrors.city = "City is required";


    const validCountries = ["India", "USA", "UK", "Canada"];
    if (!validCountries.includes(formValues.country))
      newErrors.country = "Invalid country selected";


    if (!formValues.paymentMethod)
      newErrors.paymentMethod = "Payment method must be selected";

    return newErrors;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({}); // Reset errors before validation
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Handle successful form submission
      setOrderDetails({
        ...formValues,
        total: price1 * quantity1 + price2 * quantity2,
      });

      // Set order submitted state to true
      setOrderSubmitted(true);
    }
  };

  return (
    <>
      <MyNavbar />
      <div className="container px-2 py-3">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
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
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 my-4">
            <CouponCode />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-4">
            <h4>Billing Details</h4>
            <BillingDetails
              formValues={formValues}
              handleChange={handleChange}
              errors={errors}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-4">
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
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
