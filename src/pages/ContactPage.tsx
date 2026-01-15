import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="pt-20">
      <section
        className="relative h-[400px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 tracking-heading">
            Contact Us
          </h1>
          <p className="text-xl font-body leading-relaxed">
            We're here to answer your questions
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-text-dark mb-6 tracking-heading">
                Get In Touch
              </h2>
              <p className="text-lg font-body text-text-muted leading-relaxed mb-8">
                Have questions about our programs or want to schedule a visit? We'd love to hear
                from you. Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-text-dark mb-1">Address</h3>
                    <p className="font-body text-text-muted">
                      123 Education Street
                      <br />
                      Tunis, Tunisia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-text-dark mb-1">Phone</h3>
                    <p className="font-body text-text-muted">+216 XX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-text-dark mb-1">Email</h3>
                    <p className="font-body text-text-muted">info@twinkl-education.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-text-dark mb-1">Office Hours</h3>
                    <p className="font-body text-text-muted">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="bg-background-light p-8 rounded-xl">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block font-body font-semibold text-text-dark mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary font-body"
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block font-body font-semibold text-text-dark mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary font-body"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block font-body font-semibold text-text-dark mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary font-body"
                    placeholder="+216 XX XXX XXX"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block font-body font-semibold text-text-dark mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary font-body"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block font-body font-semibold text-text-dark mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary font-body resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary text-white px-6 py-3 rounded-lg font-body font-semibold hover:bg-secondary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-heading font-bold text-text-dark mb-6 text-center tracking-heading">
              Visit Our Center
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.1234567890123!2d10.1815!3d36.8065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ4JzIzLjQiTiAxMMKwMTAnNTMuNCJF!5e0!3m2!1sen!2stn!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TWINKL Education Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
