import "./Checkout.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {

    const { cart } = useContext(CartContext);

    const navigate = useNavigate();

    const [address, setAddress] = useState({
        name: "",
        mobile: "",
        email: "",
        state: "",
        city: "",
        pincode: "",
        completeAddress: ""
    });

    const [savedAddresses, setSavedAddresses] = useState([]);

    const [editId, setEditId] = useState(null);


    useEffect(() => {

        if (cart.length === 0) {
            navigate("/cart");
        }

        const saved = JSON.parse(
            localStorage.getItem("addresses")
        );

        if (saved) {
            setSavedAddresses(saved);
        }

    }, [cart, navigate]);


    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );


    const shipping = subtotal >= 499 ? 0 : 50;

    const gst = Math.round(subtotal * 0.05);

    const total = subtotal + shipping + gst;



    const handleChange = (e) => {

        setAddress({
            ...address,
            [e.target.name]: e.target.value
        });

    };



    const saveAddress = () => {

        const {
            name,
            mobile,
            email,
            state,
            city,
            pincode,
            completeAddress
        } = address;


        if (
            !name ||
            !mobile ||
            !email ||
            !state ||
            !city ||
            !pincode ||
            !completeAddress
        ) {

            alert("Please fill all address details");

            return;

        }


        let updatedAddresses;


        if (editId) {

            updatedAddresses = savedAddresses.map((item) =>
                item.id === editId
                    ? {
                        ...address,
                        id: editId
                    }
                    : item
            );

            setEditId(null);

        }
        else {

            updatedAddresses = [
                ...savedAddresses,
                {
                    ...address,
                    id: Date.now()
                }
            ];

        }


        setSavedAddresses(updatedAddresses);


        localStorage.setItem(
            "addresses",
            JSON.stringify(updatedAddresses)
        );


        alert(
            editId
                ? "Address Updated Successfully"
                : "Address Saved Successfully"
        );


        setAddress({
            name: "",
            mobile: "",
            email: "",
            state: "",
            city: "",
            pincode: "",
            completeAddress: ""
        });

    };



    const editAddress = (item) => {

        setAddress(item);

        setEditId(item.id);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };



    const deleteAddress = (id) => {

        const updatedAddresses = savedAddresses.filter(
            (item) => item.id !== id
        );


        setSavedAddresses(updatedAddresses);


        localStorage.setItem(
            "addresses",
            JSON.stringify(updatedAddresses)
        );

    };
    return (
        <>
            <Navbar />

            <div className="checkout-container">

                <div className="checkout-header">

                    <h1>Checkout</h1>

                    <p>
                        <span onClick={() => navigate("/")}>
                            Home
                        </span>

                        {" / "}

                        <span onClick={() => navigate("/cart")}>
                            Cart
                        </span>

                        {" / Checkout"}
                    </p>

                </div>


                <div className="checkout-layout">


                    <div className="checkout-left">


                        <div className="checkout-card">

                            <h2>
                                Delivery Address
                            </h2>


                            <div className="address-form">


                                <div className="form-row">


                                    <div className="form-group">

                                        <label>
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            name="name"
                                            value={address.name}
                                            onChange={handleChange}
                                            placeholder="Enter Full Name"
                                        />

                                    </div>


                                    <div className="form-group">

                                        <label>
                                            Mobile Number
                                        </label>

                                        <input
                                            type="tel"
                                            name="mobile"
                                            value={address.mobile}
                                            onChange={handleChange}
                                            placeholder="Enter Mobile Number"
                                        />

                                    </div>


                                </div>



                                <div className="form-row">


                                    <div className="form-group">

                                        <label>
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={address.email}
                                            onChange={handleChange}
                                            placeholder="Enter Email"
                                        />

                                    </div>


                                    <div className="form-group">

                                        <label>
                                            State
                                        </label>

                                        <input
                                            type="text"
                                            name="state"
                                            value={address.state}
                                            onChange={handleChange}
                                            placeholder="State"
                                        />

                                    </div>


                                </div>



                                <div className="form-row">


                                    <div className="form-group">

                                        <label>
                                            City
                                        </label>

                                        <input
                                            type="text"
                                            name="city"
                                            value={address.city}
                                            onChange={handleChange}
                                            placeholder="City"
                                        />

                                    </div>


                                    <div className="form-group">

                                        <label>
                                            Pincode
                                        </label>

                                        <input
                                            type="number"
                                            name="pincode"
                                            value={address.pincode}
                                            onChange={handleChange}
                                            placeholder="Pincode"
                                        />

                                    </div>


                                </div>



                                <div className="form-group">

                                    <label>
                                        Complete Address
                                    </label>

                                    <textarea
                                        rows="5"
                                        name="completeAddress"
                                        value={address.completeAddress}
                                        onChange={handleChange}
                                        placeholder=""
                                    />

                                </div>


                                <button
                                    className="save-address-btn"
                                    onClick={saveAddress}
                                >

                                    {
                                        editId
                                            ? "Update Address"
                                            : "Save Address"
                                    }

                                </button>


                            </div>


                        </div>



                        {
                            savedAddresses.length > 0 && (

                                <div className="checkout-card">

                                    <h2>
                                        Saved Addresses
                                    </h2>


                                    <div className="saved-address-container">


                                        {
                                            savedAddresses.map((item) => (

                                                <div
                                                    className="saved-address-card"
                                                    key={item.id}
                                                >

                                                    <h3>
                                                        {item.name}
                                                    </h3>

                                                    <p>
                                                        {item.mobile}
                                                    </p>

                                                    <p>
                                                        {item.completeAddress}
                                                    </p>

                                                    <p>
                                                        {item.city}, {item.state} - {item.pincode}
                                                    </p>


                                                    <div className="address-actions">

                                                        <button
                                                            onClick={() => editAddress(item)}
                                                        >
                                                            Edit
                                                        </button>


                                                        <button
                                                            onClick={() => deleteAddress(item.id)}
                                                        >
                                                            Delete
                                                        </button>


                                                    </div>


                                                </div>

                                            ))
                                        }


                                    </div>


                                </div>

                            )
                        }
                        <div className="checkout-card">

                            <h2>
                                Payment Method
                            </h2>

                        </div>


                    </div>



                    <div className="checkout-right">


                        <div className="order-summary">


                            <h2>
                                Order Summary
                            </h2>


                            {
                                cart.length === 0 ? (

                                    <p className="empty-cart-msg">
                                        No Products Added
                                    </p>

                                )

                                    :

                                    (

                                        <>


                                            {
                                                cart.map((item) => (

                                                    <div
                                                        className="summary-product"
                                                        key={item.id}
                                                    >

                                                        <div className="summary-left">

                                                            <img
                                                                src={item.image}
                                                                alt={item.name}
                                                            />


                                                            <div>

                                                                <h4>
                                                                    {item.name}
                                                                </h4>


                                                                <p>
                                                                    Qty : {item.quantity}
                                                                </p>

                                                            </div>


                                                        </div>



                                                        <span>
                                                            ₹{item.price * item.quantity}
                                                        </span>


                                                    </div>


                                                ))
                                            }



                                            <hr />



                                            <div className="price-row">

                                                <span>
                                                    Subtotal
                                                </span>

                                                <span>
                                                    ₹{subtotal}
                                                </span>

                                            </div>



                                            <div className="price-row">

                                                <span>
                                                    Shipping
                                                </span>


                                                <span>

                                                    {
                                                        shipping === 0
                                                            ?
                                                            "FREE"
                                                            :
                                                            `₹${shipping}`
                                                    }

                                                </span>

                                            </div>



                                            <div className="price-row">

                                                <span>
                                                    GST (5%)
                                                </span>


                                                <span>
                                                    ₹{gst}
                                                </span>


                                            </div>



                                            <hr />



                                            <div className="price-row total-row">

                                                <span>
                                                    Total
                                                </span>


                                                <span>
                                                    ₹{total}
                                                </span>


                                            </div>



                                            <button
                                                className="payment-btn"
                                                onClick={() => {

                                                    if (savedAddresses.length === 0) {

                                                        alert(
                                                            "Please save your address first"
                                                        );

                                                        return;

                                                    }


                                                    alert(
                                                        "Payment Page will be added in next module."
                                                    );

                                                }}
                                            >

                                                Proceed To Payment

                                            </button>


                                        </>

                                    )
                            }


                        </div>


                    </div>


                </div>


            </div>


            <Footer />

        </>
    );

}


export default Checkout;