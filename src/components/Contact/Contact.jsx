const Contact = (props) => {

    //Dummy contact mail
    const contact = {
        email: 'johnsmith@mail.com',
      }

    //   const clickHandler = (e) => {
    //     e.preventDefault();
    //   }

  return (
    <section id="contact" className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[#444444] mt-20 mb-8">
        CONTACT
      </h2>
      <a href="101mineshrajput@gmail.com">
        <button className="border-2 border-[#2978b5] px-[1.26rem] py-[0.72rem] bg-right-bottom hover:bg-[#2978b5] hover:text-white hover:bg-left-bottom hover:transition hover:ease-in-out hover:duration-500">Email Me</button>
      </a>
    </section>
  );
};

export default Contact;
