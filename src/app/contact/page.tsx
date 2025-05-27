import { ContactForm } from "./contact-form"

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-10 border-b border-orange-500 pb-2 inline-block">Contact</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg">
          <div className="text-orange-500 mb-2 text-lg font-semibold">Phone:</div>
          <p>+254723909353</p>
          <p>+254738509151</p>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg">
          <div className="text-orange-500 mb-2 text-lg font-semibold">Email:</div>
          <p>beatricewambuimbugua@gmail.com</p>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-lg">
          I am always open to discussing <span className="font-semibold">new projects</span>,{" "}
          <span className="font-semibold">opportunities in tech world</span>,
          <span className="font-semibold"> partnerships</span> and more so{" "}
          <span className="font-semibold">mentorship</span>.
        </p>
      </div>

      <ContactForm />
    </div>
  )
}
