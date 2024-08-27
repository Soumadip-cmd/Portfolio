import React from "react";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-background p-6 rounded-lg shadow-lg">
        <div className="w-full md:w-2/3 p-4">
          <h2 className="text-2xl font-bold text-primary">Let's work together</h2>
          <p className="text-muted-foreground mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nescit sit
            illo esse commodo.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-ring"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-ring"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-ring"
            />

            <select className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-ring">
              <option>Select a service</option>
              <option>Service 1</option>
              <option>Service 2</option>
            </select>

            <textarea
              placeholder="Type your message here."
              className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-ring"
              rows="4"
            ></textarea>

            <button
              type="submit"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-md"
            >
              Send message
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-accent mr-2">📞</span>
              <span className="text-muted-foreground">(+40) 321 654 876</span>
            </div>
            <div className="flex items-center">
              <span className="text-accent mr-2">✉️</span>
              <span className="text-muted-foreground">youremail@email.com</span>
            </div>
            <div className="flex items-center">
              <span className="text-accent mr-2">📍</span>
              <span className="text-muted-foreground">
                Code Corner, Tech Town 13579
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
