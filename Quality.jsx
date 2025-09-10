'use client';

const Quality = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-md shadow-md">
          <img
            className="h-25 w-auto mb-4"
            src="/assets/award.png"
            alt="Award"
          />
          <h2 className="text-lg font-semibold mb-2">
            13 YEARS OF EXPERTISE
          </h2>
          <p className="text-base text-gray-700">
            We have been in Digital Marketing for 12+ years, helping you compete on the internet and converting your visitors into your clients.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-md shadow-md">
          <img
            className="h-25 w-auto mb-4"
            src="/assets/graph.png"
            alt="Graph"
          />
          <h2 className="text-lg font-semibold mb-2">
            500 CLIENTS
          </h2>
          <p className="text-base text-gray-700">
            We strive to ensure that our customers are satisfied and we work continuously to develop your projects and surpass your expectations.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-md shadow-md">
          <img
            className="h-25 w-auto mb-4"
            src="/assets/message.png"
            alt="Message"
          />
          <h2 className="text-lg font-semibold mb-2">
            Guaranteed SEO results
          </h2>
          <p className="text-base text-gray-700">
            Our unique guarantee plans offer 100% SEO ranking or Free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quality;
