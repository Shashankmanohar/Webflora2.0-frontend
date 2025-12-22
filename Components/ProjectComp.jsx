import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";

const ProjectComp = () => {
  return (
    <div>
      
      <h1 className="lg:text-7xl md:text-4xl text-4xl leading-14 w-full text-center" id="work">
        The <span className="text-orange-600">Work</span> That Defines{" "}
        <span className="text-orange-600">Us</span>
      </h1>
      <div className="flex justify-between gap-5 px-5">
        <img
          src="/left.png"
          className="bg-orange-600 w-10 h-10 p-2 rounded-full relative top-10 shrink-0 md:hidden lg:block"
          alt=""
        />
        <img
          src="/right.png"
          className="bg-orange-600 w-10 h-10 p-2 rounded-full relative top-10 md:hidden lg:block"
          alt=""
        />
      </div>
      <div className="card flex flex-nowrap overflow-x-auto gap-4 lg:flex-nowrap lg:overflow-x-auto">
        {/* CARD 1 */}
        <CardContainer className="lg:w-[440px] w-90 h-fit border-1 border-orange-600 hover:rounded-3xl rounded-xl lg:pb-69 pb-71 shadow-gray-600 shadow-2xs">
          <CardBody className="bg-black text-white rounded-3xl p-6">
            <CardItem
              translateZ={80}
              className="mb-6 rounded-xl overflow-hidden"
            >
              <Image
                src="/image1.png"
                alt="Demo"
                width={800}
                height={500}
                className="w-full h-52 object-cover rounded-xl"
              />
            </CardItem>

            <CardItem translateZ={60} className="text-2xl font-semibold mb-3">
              DBM Vidya Mandir
            </CardItem>

            <CardItem translateZ={40} className="text-gray-300">
              Designed by us to present the school’s vibrant activities,
              standout events, and energetic campus spirit through a modern,
              engaging digital experience.
            </CardItem>

            <div className="flex items-center justify-between p-4">
              <CardItem translateZ={30} className="pointer-events-auto">
                <a
                  href="https://www.dbmvidyamandir.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-orange-600 text-black rounded-full font-medium hover:bg-gray-200 transition inline-block"
                >
                  Visit Website
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* CARD 2 */}
        <CardContainer className="lg:w-[440px] w-90 h-fit border-1 border-orange-600 hover:rounded-3xl rounded-xl lg:pb-69 pb-71  shadow-gray-600 shadow-2xs">
          <CardBody className="bg-black text-white rounded-3xl p-6 ">
            <CardItem
              translateZ={80}
              className="w-full mb-6 rounded-xl overflow-hidden"
            >
              <Image
                src="/imag2.png"
                alt="Demo"
                width={800}
                height={500}
                className="w-full h-52 object-cover rounded-xl"
              />
            </CardItem>

            <CardItem
              translateZ={60}
              className="text-2xl font-semibold mb-3 leading-10"
            >
              Team Excellent Career Institute
            </CardItem>

            <CardItem translateZ={40} className="text-gray-300 ">
              Designed by us to highlight Team Excellent Career Institute’s key
              courses, achievements, and academic excellence with a modern,
              student-focused layout.
            </CardItem>

            <div className="flex items-center justify-between p-4">
              <CardItem translateZ={30} className="pointer-events-auto">
                <a
                  href="https://teamexcellentcareerinstitute.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-orange-600 text-black rounded-full font-medium hover:bg-gray-200 transition inline-block"
                >
                  Visit Website
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* card 3 */}
        <CardContainer className=" lg:w-[440px] w-90 h-fit border-1 border-orange-600 hover:rounded-3xl rounded-xl lg:pb-69 pb-71  shadow-gray-600 shadow-2xs">
          <CardBody className="bg-black text-white rounded-3xl p-6 ">
            <CardItem
              translateZ={80}
              className="w-full mb-6 rounded-xl overflow-hidden"
            >
              <Image
                src="/imag2.png"
                alt="Demo"
                width={800}
                height={500}
                className="w-full h-52 object-cover rounded-xl"
              />
            </CardItem>

            <CardItem
              translateZ={60}
              className="text-2xl font-semibold mb-3 leading-10"
            >
              Team Excellent Career Institute
            </CardItem>

            <CardItem translateZ={40} className="text-gray-300 ">
              Designed by us to highlight Team Excellent Career Institute’s key
              courses, achievements, and academic excellence with a modern,
              student-focused layout.
            </CardItem>

            <div className="flex items-center justify-between p-4">
              <CardItem translateZ={30} className="pointer-events-auto">
                <a
                  href="https://teamexcellentcareerinstitute.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-orange-600 text-black rounded-full font-medium hover:bg-gray-200 transition inline-block"
                >
                  Visit Website
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* card 4 */}

        <CardContainer className=" lg:w-[440px] w-90 h-fit border-1 border-orange-600 hover:rounded-3xl rounded-xl lg:pb-69 pb-71  shadow-gray-600 shadow-2xs">
          <CardBody className="bg-black text-white rounded-3xl p-6 ">
            <CardItem
              translateZ={80}
              className="w-full mb-6 rounded-xl overflow-hidden"
            >
              <Image
                src="/imag2.png"
                alt="Demo"
                width={800}
                height={500}
                className="w-full h-52 object-cover rounded-xl"
              />
            </CardItem>

            <CardItem
              translateZ={60}
              className="text-2xl font-semibold mb-3 leading-10"
            >
              Team Excellent Career Institute
            </CardItem>

            <CardItem translateZ={40} className="text-gray-300 ">
              Designed by us to highlight Team Excellent Career Institute’s key
              courses, achievements, and academic excellence with a modern,
              student-focused layout.
            </CardItem>

            <div className="flex items-center justify-between p-4">
              <CardItem translateZ={30} className="pointer-events-auto">
                <a
                  href="https://teamexcellentcareerinstitute.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-orange-600 text-black rounded-full font-medium hover:bg-gray-200 transition inline-block"
                >
                  Visit Website
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default ProjectComp;
