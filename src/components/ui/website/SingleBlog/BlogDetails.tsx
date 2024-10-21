import Image from 'next/image';
import React from 'react'; 
import img1 from "@/assets/home3.png"
import Heading from '@/components/shared/Heading';

const BlogDetails = () => {
    return (
        <div className="container my-10">
      <div className="w-full h-[456px] relative">
        <Image
          alt="new details"
          src={img1}
          fill
          // style={{objectFit: "contain"}}
        />

        <div
          className="absolute left-0 -bottom-4 bg-white lg:w-[450px] w-full lg:rounded-r-3xl rounded-r-xl py-2"
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          }}
        >
          <Heading
            className="font-normal lg:text-[32px] text-[24px] text-center   leading-[48px] text-[#3E3E3E]"
          > A Scriptural look at Jesus’ teachings on marriage </Heading>
        </div>
      </div>

      <p className="text-[#767676] text-[16px] leading-[21px] font-normal mt-10">
       Quis urna. tempor consectetur risus quis dui. Ut leo. malesuada gravida eget ex. viverra Nunc Nunc dignissim, convallis. odio non sapien sed Praesent at sit luctus elit. leo. amet, urna viverra ac turpis Nunc elit. massa ipsum elit sed id  ipsum elit. enim. laoreet efficitur. eget maximus vitae nisi nisl. placerat ex ex. ex ac faucibus faucibus elit sit ex. nibh hendrerit Ut Nunc Ut non, Ut nec tincidunt tincidunt turpis Quisque enim. tincidunt ultrices In nibh vitae quis vitae sed Nunc at Nullam quis sapien malesuada convallis. vehicula, ipsum orci eu sit amet, hendrerit urna commodo tincidunt placerat odio risus ullamcorper leo. nisl. est. sed vitae Nunc nibh sapien odio ipsum massa In non luctus non. id convallis. at urna risus dui. laoreet Sed ac enim. amet, ac leo. scelerisque ex Donec Quisque nibh Sed consectetur Morbi non luctus Quisque non dui. varius luctus lacus, sodales. porta sed elit consectetur ac Praesent viverra consectetur vitae sed Nunc at Nullam quis sapien malesuada convallis. vehicula, ipsum orci eu sit amet, hendrerit urna commodo tincidunt placerat odio risus ullamcorper leo. nisl. est. sed vitae Nunc nibh sapien odio ipsum massa In non luctus non. id convallis. at urna risus dui. laoreet Sed ac enim. amet, ac leo. scelerisque ex Donec Quisque nibh Sed consectetur Morbi non luctus Quisque non dui. varius luctus lacus, sodales. porta sed elit consectetur ac Praesent viverra consectetur vitae sed Nunc at Nullam quis sapien malesuada convallis. vehicula, ipsum orci eu sit amet, hendrerit urna commodo tincidunt placerat odio risus ullamcorper leo. nisl. est. sed vitae Nunc nibh sapien odio ipsum massa In non luctus non. id convallis. at urna risus dui. laoreet Sed ac enim. amet, ac leo. scelerisque ex Donec Quisque nibvitae sed Nunc at Nullam quis sapien malesuada convallis. vehicula, ipsum orci eu sit amet, hendrerit urna commodo tincidunt placerat odio risus ullamcorper leo. nisl. est. sed vitae Nunc nibh sapien odio ipsum massa In non luctus non. id convallis. at urna risus dui. laoreet Sed ac enim. amet, ac leo. scelerisque ex Donec Quisque nibh Sed consectetur Morbi non luctus Quisque non dui. varius luctus lacus, sodales. porta sed elit consectetur ac Praesent viverra consectetur vitae sed Nunc at Nullam quis sapien malesuada convallis. vehicula, ipsum orci eu sit amet, hendrerit urna commodo tincidunt placerat odio risus ullamcorper leo. nisl. est. sed vitae Nunc nibh sapien odio ipsum massa In non luctus non. id convallis. at urna risus dui. laoreet Sed ac enim. amet, ac leo. scelerisque ex Donec Quisque nibh Sed consectetur Morbi non luctus Quisque non dui. varius luctus lacus, sodales. porta sed elit consectetur ac Praesent viverra consectetur vitae sed Nunc at Nullam quis sapien malesuada convallis. vehicula, ipsum orci eu sit amet, hendrerit urna commodo tincidunt placerat odio risus ullamcorper leo. nisl. est. sed vitae Nunc nibh sapien odio ipsum massa In non luctus non. id convallis. at urna risus dui. laoreet Sed ac enim. amet, ac leo. scelerisque ex Donec Quisque nibh Sed consectetur Morbi non luctus Quisque non dui. varius luctus lacus, sodales. porta sed elit consectetur ac Praesent viverra consectetur
      </p>
    </div>
    );
};

export default BlogDetails;