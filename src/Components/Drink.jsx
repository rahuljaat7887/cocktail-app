import React from "react";

function Drink() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              The Catcher in the Rye
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center"></span>
            </div>
            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className="flex">
              <div className="rounded-md shadow-md dark:bg-coolGray-900 dark:text-coolGray-100 mt-8 w-1/2 flex items-center justify-center flex-col">
                <img
                  src="https://source.unsplash.com/random/100x100/?2"
                  alt=""
                  className="object-cover object-center w-40 rounded-md h-40 dark:bg-coolGray-500"
                />
                <div className="flex flex-col justify-between p-3 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-1xl font-semibold tracking-wide">
                      Donec lectus leo
                    </h2>
                  </div>
                </div>
              </div>
              <div className="rounded-md shadow-md dark:bg-coolGray-900 dark:text-coolGray-100 mt-8 w-1/2 flex items-center justify-center flex-col">
                <img
                  src="https://source.unsplash.com/random/100x100/?2"
                  alt=""
                  className="object-cover object-center w-40 rounded-md h-40 dark:bg-coolGray-500"
                />
                <div className="flex flex-col justify-between p-3 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-1xl font-semibold tracking-wide">
                      Donec lectus leo
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Drink;
