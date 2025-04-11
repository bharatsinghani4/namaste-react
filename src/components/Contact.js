const Contact = () => {
  return (
    <div id="about-us">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          className="border border-black m-2 p-2"
        />
        <input
          type="text"
          placeholder="Message"
          className="border border-black m-2 p-2"
        />
        <button
          type="button"
          className="border border-black m-2 p-2 cursor-pointer bg-gray-200 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
