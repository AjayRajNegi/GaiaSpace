export default function ContactForm() {
  return (
    <>
      <main
        className="contactBackground mx-auto mt-20 w-[80%] rounded-xl border-[#252A41] px-[4vw] pb-20 pt-10"
        style={{
          border: "2px solid #252A41",
        }}
      >
        <article className="mx-auto w-fit">
          <h1 className="mx-auto w-fit text-5xl font-semibold text-[#fff]">
            Get in <span className="text-[#6FCBFF]">Touch</span>
          </h1>
          <p className="text-sm text-[#fff]">
            Connect To GaiaSpace, join us or ask us anything you desire
          </p>
        </article>
        <article>
          <form className="mt-8 space-y-4 text-white">
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="text"
                placeholder="First Name *"
                className="flex-1 rounded border border-blue-400 bg-transparent px-4 py-2 outline-none"
                required
              />
              <input
                type="text"
                placeholder="Middle Name"
                className="flex-1 rounded border border-blue-400 bg-transparent px-4 py-2 outline-none"
              />
              <input
                type="text"
                placeholder="Last Name *"
                className="flex-1 rounded border border-blue-400 bg-transparent px-4 py-2 outline-none"
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email *"
              className="w-full rounded border border-blue-400 bg-transparent px-4 py-2 outline-none"
              required
            />

            <input
              type="tel"
              placeholder="Phone number *"
              className="w-full rounded border border-blue-400 bg-transparent px-4 py-2 outline-none"
              required
            />

            <input
              type="text"
              placeholder="Company/Organization Name"
              className="w-full rounded border border-blue-400 bg-transparent px-4 py-2 outline-none"
            />

            <div className="flex flex-col gap-4 sm:flex-row">
              <select className="flex-1 rounded border border-blue-400 bg-transparent px-4 py-2 text-white outline-none">
                <option value="" disabled selected hidden>
                  Designation
                </option>
                <option className="text-black">Manager</option>
                <option className="text-black">Developer</option>
                <option className="text-black">Researcher</option>
              </select>

              <select className="flex-1 rounded border border-blue-400 bg-transparent px-4 py-2 text-white outline-none">
                <option value="" disabled selected hidden>
                  Select a Reason
                </option>
                <option className="text-black">General Inquiry</option>
                <option className="text-black">Collaboration</option>
                <option className="text-black">Job Opportunity</option>
              </select>
            </div>

            <textarea
              placeholder="Leave Us a Message *"
              className="w-full resize-none rounded border border-blue-400 bg-transparent px-4 py-2 outline-none"
              rows={4}
              required
            ></textarea>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full rounded bg-blue-600 py-2 font-semibold tracking-wider text-white transition-colors hover:bg-blue-700"
              >
                SEND
              </button>
            </div>
          </form>
        </article>
      </main>
    </>
  );
}
