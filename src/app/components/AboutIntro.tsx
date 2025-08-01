// src/components/AboutIntro.tsx
"use client";

export default function AboutIntro() {
  return (
   <section className="grid md:grid-cols-2 gap-1 mt-20 max-w-6xl mx-auto items-start">
        {/* Left Column – Paragraph Text */}        
        <div className="text-4xl font-bold leading-[50px] space-y-1 bg-cover bg-center text-white  rounded-lg"
            style={{
            backgroundImage:
            "url('https://cdn-kbkfn.nitrocdn.com/DvGadheEphxHjgXDPeUVvjVrIroOCLbz/assets/desktop/optimized/rev-1b2c2c7/cdn.builder.io/api/v1/image/assets/TEMP/358db332f46e6af119a02a57e79ca12a.8039994b6675bfdf246508038acbff60fda3126568c1d41cd1e56cfbc40cc418')",
            }}>                    
            <div className="flex flex-raw">
                <p className="mr-2 text-black">A</p>
                <p className="text-green-600">Trusted&nbsp;</p>
                <p className="mr-2 text-black"> Web Designing</p>

            </div>
            <div>
                <p className=" text-black">and Web Development</p>
            </div>
            <div className="flex flex-wrap">
                <p className="text-green-600 mr-2">Company</p>
                <p className=" text-black">in Kochi</p>
            </div>               
        </div>

        {/* Right Column – Heading Lines */}
        <div className="bg-transparent">
            <p className="text-gray-700 mb-6">
                WebCastle Media, a professional Web Designing, and Web Development company in Kochi
                started out in 2008. With more than 1000+ clients across the globe, creativity is 
                the foundation on which we thrive to excel. Creativity as talent is not achieved, it 
                is gifted. With more than 80 most talented and creative groups of employees spread 
                across three countries, we are a cut above in the field of web development and digital marketing.
            </p>
            <p className="text-gray-700 mb-6">
                The ingredients of our company are our employees and our taste is YOU, the customer. Devotion,
                creativity, and results are the main focus of WebCastle Media. With great pride, we 
                say confidently that we are the most creative website development company in India. 
                This is because of the basic values that guide us: Devotion and Dedication. We will,
                therefore, change our services into value-added and profitable.
            </p>
        </div>
    </section>

  );
}
