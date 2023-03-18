import React from "react";
import DIvFlex from "../HelperComponents/DivFlex";
import TextInput from "./TextInput";
import ButtonForm from "../HelperComponents/ButtonForm";
import WarnigTextBox from "../HelperComponents/WarnigTextBox";
import TitleOfSection from "../HelperComponents/TitleOfSection";

import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { VisitorMold } from "../../model/Visitor/VisitorMold";
import { setVisitorInfo } from "../../app/redux/slicer/visitorSlicer";


let visitorSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    secondName: yup.string().required('Second Name is required'),
    age: yup.string().required('Age is required'),
});

export interface IFormValuesVisitorInfo {
    name: string
    secondName: string
    age: string
}

export default function Form() {
    const methods = useForm<IFormValuesVisitorInfo>({
        resolver: yupResolver(visitorSchema, {}),
    });
    const { handleSubmit, formState: { errors } } = methods;

    const dispatch = useDispatch()

    function onSubmit(data: IFormValuesVisitorInfo) {
        const { age, name, secondName } = data
        const visitor = new VisitorMold(name, secondName, age);
        const visitorInfo = {
            name: visitor.name,
            secondName: visitor.secondName,
            currentAge: visitor.currentAge,
            visitorEnteredDate: visitor.visitorEnteredDate,
            visitorEnteredNumber: visitor.visitorEnteredNumber
        }
        dispatch(setVisitorInfo(visitorInfo))

    }

    return (
        <FormProvider {...methods} > // pass all methods into the context
            <form className="w-9/12 ml-auto  mr-auto mt-8" onSubmit={handleSubmit(onSubmit)}>
                <TitleOfSection text="Fill out Visitor form" />
                <DIvFlex width="11/12" direction="row" >

                    <DIvFlex direction="col" width="1/4">
                        {errors.name ? <WarnigTextBox title="Name" description={errors.name.message as string} /> : null}
                        <TextInput label="Name" placeholder="John" registerName="name" type="text" key={Math.random()} />
                    </DIvFlex>

                    <DIvFlex direction="col" width="1/4">
                        {errors.secondName ? <WarnigTextBox title="Second Name" description={errors.secondName.message as string} /> : null}
                        <TextInput label="Second Name" placeholder="Tea" registerName="secondName" type="text" key={Math.random()} />
                    </DIvFlex>

                    <DIvFlex direction="col" width="1/4">
                        {errors.age ? <WarnigTextBox title="Age" description={errors.age.message as string} /> : null}
                        <TextInput label="Age" placeholder="13" registerName="age" type="date" key={Math.random()} />
                    </DIvFlex>



                    <ButtonForm displayText="Send" type='submit' />
                </DIvFlex>

            </form>
        </FormProvider>
    );
}
