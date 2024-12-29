"use client"
import DropdownInput from '@/components/shared/DropdownInput';
import OutLineBtn from '@/components/shared/OutLineBtn';
import SmallButton from '@/components/shared/SmallButton';
import { useGetAllQuestionsQuery, useUpdateQuestionnaireMutation } from '@/redux/features/profile/profileSlice';
import { useProfileQuery } from '@/redux/features/auth/authApi';
import { Form } from 'antd';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import {
  homeOwnership,
  livingAlone,
  christianityOptions,
  beliefInChrist,
  childrenDesired,
  mainProviderBelief,
  willingToFatherOthersChildren,
  roleModelsForBoys,
  standardForDaughters,
  interests,
  preferredAgeRange,
  preferredEthnicity,
  preferredPhysique,
  preferredFitnessLevel,
  willingToMothersOthersChildren,
  womanAsNurturer,
  makeHome,
} from '@/components/shared/Option';
import Swal from 'sweetalert2';

const EditProfile2 = () => {
  const { data: questionData } = useGetAllQuestionsQuery(undefined);
  const { data: profile } = useProfileQuery(undefined); 
  const [updateQuestionnaire] = useUpdateQuestionnaireMutation()
  const gender = profile?.data?.gender; 
  const [form] = Form.useForm(); 
  const questions = questionData?.data; 


  console.log(questions); 

 useEffect(() => {
    form.setFieldsValue({
            haveHome: questions?.haveAHome || '',
            liveAlone: questions?.liveAlone || '',
            christian: questions?.christian || '',
            believeJesus: questions?.believeJesusIsHead || '',
            children: questions?.numberOfChildrenWanted || '',
            household: questions?.manIsMainProvider || '',
            anotherMan: questions?.stepUpAsFather || '',
            roleModal: questions?.menRoleModelsForBoys || '',
            standard: questions?.menSetStandardForDaughters || '',
            interest: questions?.interestsHobbies || '',
            preferredAge: questions?.preferredAgeRange || '',
            ethnicity: questions?.preferredEthnicity || '',
            bodyShape: questions?.preferredPhysique || '',
            fitness: questions?.preferredFitnessLevel || '',
            mothersAreNurturers: questions?.mothersAreNurturers || '',
            womenMakeHome: questions?.womenMakeHome || '',
            stepUpAsMother: questions?.stepUpAsMother || '',  
    })
}, [questions, form]);  

 const onFinish = async (values: any) => {   
   await updateQuestionnaire(values).then((res) => { 
  
              if (res?.data?.success) {
                  Swal.fire({
                      text: res?.data?.message,
                      icon: "success",
                      showConfirmButton: false,
                      timer: 1500,
                  })
              } else {
                  Swal.fire({
                      title: "Oops",
                      text: res?.data?.message,
                      icon: "error",
                      timer: 1500,
                      showConfirmButton: false,
                  });
              }
          }) 

 } 
 
  return (
    <div>
      <div className="container">
        <h1 className="text-2xl font-medium text-[#007BA5] my-7">
          Edit Your Profile <span>2/2</span>
        </h1>

        <Form layout="vertical" className="w-1/2" form={form} onFinish={onFinish}>
          <DropdownInput name="liveAlone" label="Do you live alone?" options={livingAlone}  />
          <DropdownInput name="christian" label="Are you a Christian?" options={christianityOptions}  />
          <DropdownInput
            name="believeJesus"
            label="Do you believe Jesus Christ is the head of the house and then the man?"
            options={beliefInChrist}
            
          />
          <DropdownInput name="children" label="How many children do you want?" options={childrenDesired} />

          {gender === 'Female' ? (
            <>
              <DropdownInput
                name="stepUpAsMother"
                label="Are you willing to step up and mother another woman's children?"
                options={willingToMothersOthersChildren}
                
              />
              <DropdownInput
                name="mothersAreNurturers"
                label="Do you believe that mothers are nurturers?"
                options={womanAsNurturer}
                
              />
              <DropdownInput
                name="makeHome"
                label="Do you believe that women make the home?"
                options={makeHome}
                
              />
            </>
          ) : (
            <>
              <DropdownInput
                name="haveHome"
                label="Do you have a home?"
                options={homeOwnership}
                
              />
              <DropdownInput
                name="stepUpAsFather"
                label="Are you willing to step up and father another man's children?"
                options={willingToFatherOthersChildren}
                
              />
            </>
          )}

          <DropdownInput
            name="mainProvider"
            label="Do you believe the man is the main provider and protector of the household?"
            options={mainProviderBelief}
            
          />
          <DropdownInput
            name="roleModal"
            label="Do you believe that men are role models for little boys?"
            options={roleModelsForBoys}
            
          />
          <DropdownInput
            name="standard"
            label="Do you believe that men set the standard for daughters?"
            options={standardForDaughters}
            
          />
          <DropdownInput name="interest" label="What are your interests?" options={interests}  />
          <DropdownInput name="preferredAge" label="What is your preferred age range for a partner?" options={preferredAgeRange} />
          <DropdownInput
            name="ethnicity"
            label="What is your preferred ethnicity for a partner?"
            options={preferredEthnicity}
          
          />
          <DropdownInput name="bodyShape" label="What is your preferred physique in a partner?" options={preferredPhysique} />
          <DropdownInput name="fitness" label="What is your preferred fitness level in a partner?" options={preferredFitnessLevel} />

          <div className="flex items-center gap-3 mb-5">
            <Link href="edit-profile-1">
              <OutLineBtn className="flex items-center gap-[2px] mt-0">
                <BsArrowLeft size={22} /> Previous
              </OutLineBtn>
            </Link>
            <SmallButton className="mt-6">Save & Changes</SmallButton>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditProfile2;
