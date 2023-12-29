import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PickAddOns from "../components/pickAddOns/pick-add-ons";

const RenderSelectYourPlan = () => {
  render(
    <MemoryRouter initialEntries={["/pick-add-ons"]}>
      <PickAddOns />
    </MemoryRouter>
  );
};

test("Renderiza o componente PickAddOns corretamente", () => {
  RenderSelectYourPlan();

  expect(screen.getByText("Escolher complemento")).toBeInTheDocument();
  expect(
    screen.getByText("Complementos ajudam a aprimorar sua experiência de jogo.")
  ).toBeInTheDocument();
});

test("Seleciona opções e avança para o próximo passo", () => {
  RenderSelectYourPlan();
  const checkboxes = screen.getAllByRole("checkbox");
  checkboxes.forEach((checkbox) => {
    expect(checkbox).not.toBeChecked();
  });

  fireEvent.click(checkboxes[0]);

  expect(checkboxes[0]).toBeChecked();
});
