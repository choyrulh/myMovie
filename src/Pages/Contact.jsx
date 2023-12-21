const Contact = () => {
  return (
    <div className="container mx-auto my-8 text-center">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="mb-8 text-white">
        Have questions, suggestions, or just want to talk about movies? We are
        here to help and love to hear from you! Reach out to us using the
        information below:
      </p>
      <div className="flex flex-col items-center">
        <p className="mb-4 text-lg font-semibold">Email:</p>
        <a
          href="mailto:info@moviemagic.com"
          className="text-blue-500 hover:underline"
        >
          info@moviemagic.com
        </a>
      </div>
      <div className="flex flex-col items-center mt-6">
        <p className="mb-4 text-lg font-semibold">Phone:</p>
        <p className="text-white">(123) 456-7890</p>
      </div>
      <div className="flex flex-col items-center mt-6">
        <p className="mb-4 text-lg font-semibold">Address:</p>
        <p className="text-white">123 Movie Lane, Cinemaville</p>
      </div>
      <p className="mt-8 text-white">
        Connect with us on social media for the latest updates and
        behind-the-scenes content:
      </p>
      <div className="flex justify-center mt-4">
        <a href="#" className="text-blue-500 hover:underline mx-2">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-blue-500 hover:underline mx-2">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-blue-500 hover:underline mx-2">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
