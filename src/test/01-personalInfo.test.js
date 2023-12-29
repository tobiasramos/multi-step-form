import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import PersonalInfo from "../components/personalInfo/personal-info";

describe("PersonalInfo component", () => {
  test("Renderiza o componente PersonalInfo corretamente", () => {
    render(<PersonalInfo />);

    expect(screen.getByText("Informação pessoal")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Por favor, forneça seu nome, email e número de telefone."
      )
    ).toBeInTheDocument();
  });

  test("Validando os campos de entrada", () => {
    render(<PersonalInfo />);

    const inputName = screen.getByLabelText("Nome:");
    const inputEmail = screen.getByLabelText("Email:");
    const inputPhoneNumber = screen.getByLabelText("Numero de telefone:");

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPhoneNumber).toBeInTheDocument();

    fireEvent.change(inputName, { target: { value: "Tobias" } });
    fireEvent.change(inputEmail, { target: { value: "tobias@test.com" } });
    fireEvent.change(inputPhoneNumber, { target: { value: "(99)999999999" } });

    expect(inputName.value).toBe("Tobias");
    expect(inputEmail.value).toBe("tobias@test.com");
    expect(inputPhoneNumber.value).toBe("(99)999999999");
  });
});
