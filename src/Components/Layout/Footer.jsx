const Footer = () => {
  return (
    <footer className="footer">
      <p className="relative bottom-0 left-0 mt-8 flex w-full items-center justify-center gap-[10px] p-2 font-montserrat text-xl">
        Copyright © {new Date().getFullYear()} ardamoin{" "}
        <a
          href="https://github.com/ardamoin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github text-2xl text-[#191919] transition-transform duration-[0.3s] ease-[ease-in-out] hover:rotate-[360deg] hover:scale-[1.2]"></i>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
