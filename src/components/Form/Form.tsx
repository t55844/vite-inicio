import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import DIvFlex from "../HelperComponents/DivFlex";
import TextInput from "./TextInput";

interface FormValues {
    name: string
    secondName: string
    age: Date
}

export default function Form() {
    const methods = useForm<FormValues>();
    const { handleSubmit } = methods;
    const onSubmit = data => console.log(data);

    return (
        <FormProvider {...methods} > // pass all methods into the context
            <form onSubmit={handleSubmit(onSubmit)}>
                <DIvFlex direction="row" >
                    <TextInput label="Name" placeholder="John" registerName="name" type="text" key={Math.random()} />
                    <TextInput label="Secnd Name" placeholder="Tea" registerName="secondName" type="text" key={Math.random()} />
                    <TextInput label="Age" placeholder="13" registerName="age" type="date" key={Math.random()} />
                </DIvFlex>

            </form>
        </FormProvider>
    );
}
