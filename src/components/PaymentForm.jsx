"use client";
import { useRouter } from "next/navigation";
import { useRazorpay } from "react-razorpay";
import axios from "axios";
const BACKENDURI = "http://localhost:9000/api/v1/order";

export default function PaymentForm({ formData, amount, getId, setLoading }) {
  const {  Razorpay } = useRazorpay();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    formData.id = getId();

    try {
      const { data } = await axios.post(`${BACKENDURI}/create-order`, {
        amount: amount * 100,
      });
      const handlePayment = () => {
        const options = {
          key: "rzp_test_q6BPVPdGW5hSYC",
          amount: data.amount, // Amount in paise
          currency: "INR",
          currency: "INR",
          name: "Fintech",
          order_id: data.id,
          handler: async (res) => {
            const verifyRes = await axios.post(
              `${BACKENDURI}/verify-payment`,
              {
                ...res,
                formData,
              }
            );

            if (verifyRes.status === 200) {
              router.push(`/paymentsuccess?phone=${formData.phone}`);
            }
          },
          prefill: {
            name: formData.name,
            email: formData.email,
            contact: formData.phone,
          },
          theme: { color: "#121212" },
        };

        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
      };
      handlePayment();
    } catch (err) {
      console.error("Payment error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md"
    >
      <button
        type="submit"
        className="w-full bg-[#20B486] text-white p-2 rounded"
      >
        Pay Now
      </button>
    </form>
  );
}
