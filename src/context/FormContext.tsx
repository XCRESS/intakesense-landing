"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface FormContextType {
    showForm: boolean;
    openForm: () => void;
    closeForm: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [showForm, setShowForm] = useState(false);

    const openForm = () => setShowForm(true);
    const closeForm = () => setShowForm(false);

    return (
        <FormContext.Provider value={{ showForm, openForm, closeForm }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = (): FormContextType => {
    const context = useContext(FormContext);
    if (!context) throw new Error("useFormContext must be used inside FormProvider");
    return context;
};
