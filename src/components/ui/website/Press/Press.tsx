import React from 'react';
import Heading from '@/components/shared/Heading';


const data = 
    " Quis urna. tempor consectetur risus quis dui. Ut leo. malesuada gravida eget ex. viverra Nunc Nunc dignissim, convallis. odio non sapien sed Praesent at sit luctus elit. leo. amet, urna viverra ac turpis Nunc elit. massa ipsum elit sed id  ipsum elit. enim. laoreet efficitur. eget maximus vitae nisi nisl. placerat ex ex. ex ac faucibus faucibus elit sit ex. nibh hendrerit Ut Nunc Ut non, Ut nec tincidunt tincidunt turpis Quisque enim. tincidunt ultrices In nibh vitae quis vitae sed Nunc at Nullam quis sapien malesuada convallis. vehicula, ipsum orci eu sit amet, hendrerit urna commodo tincidunt placerat odio risus ullamcorper leo. nisl. est. sed vitae Nunc nibh sapien odio ipsum massa In non luctus non. id convallis. at urna risus dui. laoreet Sed ac enim. amet, ac leo. scelerisque ex Donec Quisque nibh Sed consectetur Morbi non luctus Quisque non dui. varius luctus lacus, sodales. porta sed elit consectetur ac Praesent viverra consectetur vitae sed Nunc at Nullam quis sapien malesuada convallis. vehicula, ipsum orci eu sit amet, hendrerit urna commodo tincidunt placerat odio risus ullamcorper leo. nisl. est. sed vitae Nunc nibh sapien odio ipsum massa In non luctus non. id convallis. at urna risus dui. laoreet Sed ac enim. amet, ac leo. scelerisque ex Donec Quisque nibh Sed consectetur Morbi non luctus Quisque non dui. varius luctus lacus, sodales. porta sed elit consectetur ac Praesent viverra consectetur vitae sed Nunc at Nullam quis sapien malesuada convallis. vehicula, ipsum orci eu sit amet, hendrerit urna commodo tincidunt placerat odio risus ullamcorper leo. nisl. est. sed vitae Nunc nibh sapien odio ipsum massa In non luctus non. id convallis. at urna risus dui. laoreet Sed ac enim. amet, ac leo. scelerisque ex Donec Quisque nibvitae sed Nunc at Nullam quis sapien malesuada convallis. vehicula, ipsum orci eu sit amet, hendrerit urna commodo tincidunt placerat odio risus ullamcorper leo. nisl. est. sed vitae Nunc nibh sapien odio ipsum massa In non luctus non. id convallis. at urna risus dui. laoreet Sed ac enim. amet, ac leo. scelerisque ex Donec Quisque nibh Sed consectetur Morbi non luctus Quisque non dui. varius luctus lacus, sodales. porta sed elit consectetur ac Praesent viverra consectetur vitae sed Nunc at Nullam quis sapien malesuada convallis. vehicula, ipsum orci eu sit amet, hendrerit urna commodo tincidunt placerat odio risus ullamcorper leo. nisl. est. sed vitae Nunc nibh sapien odio ipsum massa In non luctus non. id convallis. at urna risus dui. laoreet Sed ac enim. amet, ac leo. scelerisque ex Donec Quisque nibh Sed consectetur Morbi non luctus Quisque non dui. varius luctus lacus, sodales. porta sed elit consectetur ac Praesent viverra consectetur vitae sed Nunc at Nullam quis sapien malesuada convallis. vehicula, ipsum orci eu sit amet, hendrerit urna commodo tincidunt placerat odio risus ullamcorper leo. nisl. est. sed vitae Nunc nibh sapien odio ipsum massa In non luctus non. id convallis. at urna risus dui. laoreet Sed ac enim. amet, ac leo. scelerisque ex Donec Quisque nibh Sed consectetur Morbi non luctus Quisque non dui. varius luctus lacus, sodales. porta sed elit consectetur ac Praesent viverra consectetur  "

const Press = () => {
    return (
        <div className=" container  lg:my-12 my-6" 
        >
            <Heading className=" mb-3"> Press   </Heading>
      
            <div
                className=" text-[16px] text-black pb-2  tracking-wide "
                dangerouslySetInnerHTML={{ __html: data }}  
            
              />
          </div>
    );
};

export default Press;