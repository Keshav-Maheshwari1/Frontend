import { useRouter } from "next/navigation";
import { useRazorpay } from "react-razorpay";
import axios from "axios";

const BACKENDURI = "http://13.235.234.229:7000/api/v1/order";

export function usePayment() {
  const { Razorpay } = useRazorpay();
  const router = useRouter();

  const initiatePayment = async ({ formData, amount, getId, setLoading }) => {
    try {
      setLoading(true);
      formData.id = getId;

      const { data } = await axios.post(`${BACKENDURI}/create-order`, {
        amount: amount * 100,
      });

      const options = {
        key: "rzp_test_q6BPVPdGW5hSYC",
        amount: data.amount,
        currency: "INR",
        name: "Fintech",
        order_id: data.id,
        handler: async (res) => {
          const verifyRes = await axios.post(`${BACKENDURI}/verify-payment`, {
            ...res,
            formData,
          });

          if (verifyRes.status === 200) {
            alert("Your order has been successfully placed");
            router.push(`/`);
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#121212" },
      };

      const rzpInstance = new Razorpay(options);
      rzpInstance.open();
    } catch (err) {
      console.error("Payment error:", err);
    } finally {
      setLoading(false);
    }
  };

  return { initiatePayment };
}
