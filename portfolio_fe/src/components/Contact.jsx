import React, { useState } from "react";
import { FaPhone, FaMailBulk } from "react-icons/fa";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: null, // null: chưa gửi, true: thành công, false: thất bại
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: "" }); // Reset trạng thái khi gửi lại

    // Các ID này nên được lưu trong biến môi trường để bảo mật hơn
    const SERVICE_ID = "service_haihoan";
    const TEMPLATE_ID = "template_haihoan";
    const PUBLIC_KEY = "UN3xZx83ozOclnkNE";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitStatus({
            success: true,
            message: "Tin nhắn đã được gửi thành công!",
          });
          setForm({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.log("FAILED...", error);
          setSubmitStatus({
            success: false,
            message: "Gửi tin nhắn thất bại. Vui lòng thử lại.",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <div
      id="contact"
      className="min-h-screen items-center flex flex-col md:flex-row gap-20 bg-gradient-to-r from-cyan-800 to-slate-600 px-4 md:px-28 md:py-12 p-28 md:p-28"
    >
      <div className="flex-1 text-white flex flex-col gap-4 justify-center">
        <h2 className="text-3xl font-bold mb-2 ">Liên Hệ Với Tôi</h2>
        <h3 className="text-xl font-semibold text-cyan-300 mb-2">
          Hợp tác cùng phát triển!
        </h3>
        <span className="text-gray-300">
          Nếu bạn có bất kỳ câu hỏi nào hoặc muốn hợp tác, hãy gửi tin nhắn cho
          tôi qua form bên cạnh hoặc liên hệ trực tiếp qua email/điện thoại bên
          dưới.
        </span>
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center gap-2">
            <FaMailBulk className="text-cyan-400" /> haihoan2874@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-cyan-400" /> 0387869146
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex-1 bg-cyan-900 bg-opacity-40 rounded-xl p-8 shadow-lg flex flex-col gap-6"
      >
        <div>
          <label htmlFor="name" className="block  text-white mb-1">
            Họ và tên:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name: "
            required
            className="w-full p-3  rounded bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="block  text-white mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email: "
            required
            className="w-full p-3  rounded bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-white mb-1">
            Nội dung:
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message "
            required
            rows="4" // Gợi ý chiều cao ban đầu
            className="w-full p-3 rounded bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        {submitStatus.message && (
          <p
            className={`text-sm ${
              submitStatus.success ? "text-green-400" : "text-red-400"
            }`}
          >
            {submitStatus.message}
          </p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-cyan-400 text-black font-semibold py-3 rounded-full hover:bg-cyan-300 hover:scale-105 transition-all duration-300 shadow-cyan-400 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
