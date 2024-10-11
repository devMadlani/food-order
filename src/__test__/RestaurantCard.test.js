import React from "react";
import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../components/RestaurantCard"
import MOCK_DATA from "../mocks/resCard.json"
import "@testing-library/jest-dom"
it('should render REstaurantCard component with props Data', () => {
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const resName = screen.getByText("Urban China");
    expect(resName).toBeInTheDocument()
});

const PromotedRestaurantCard = withPromotedLabel(RestaurantCard)
it('it should render RestaurantCard component with Promoted Label', () => {
    render(<PromotedRestaurantCard/>)

    const isLabel = screen.getByText("Promoted");
    expect(isLabel).toBeInTheDocument()
});
