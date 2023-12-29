import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import SelectYourPlan from "../components/selectYourPlan/select-your-plan";
import { MemoryRouter } from "react-router-dom";

const RenderSelectYourPlan = () => {
  render(
    <MemoryRouter initialEntries={["/select-your-plan"]}>
      <SelectYourPlan />
    </MemoryRouter>
  );
};

describe("SelectYourPlan component", () => {
  test("Renderiza o componente SelectYourPlan corretamente", () => {
    RenderSelectYourPlan();
    expect(screen.getByText("Selecione o seu plano")).toBeInTheDocument();
  });

  test("Seleciona um plano ao clicar", () => {
    RenderSelectYourPlan();

    const arcadePlan = screen.getByText("Arcade");
    fireEvent.click(arcadePlan);
  });

  test("Alterna entre mensal e anual", () => {
    RenderSelectYourPlan();

    const switchInput = screen.getByRole("checkbox");

    fireEvent.click(switchInput);
  });
});
