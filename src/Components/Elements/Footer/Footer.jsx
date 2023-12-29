const Footer = () => {
  return (
    <footer className=" text-white py-4 border-t-2 mt-10">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Choirul Movie Website All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
