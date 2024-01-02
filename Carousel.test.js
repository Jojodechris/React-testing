import { render, fireEvent } from "@testing-library/react"
import {screen} from '@testing-library/dom';
import Card from "./Card";
import Carousel from "./Carousel"
import TEST_IMAGES from "./_testCommon.js";
import App from "./App";

// explaining destructuring 
// function returnAnObject() {
//   //   return {
//   //     container: 'aklsdjfa;sdf',
//   //     getByText: ';klajdsf;lkajsdf'
//   //   }
//   // }
  
//   // const {container, getByText} = returnAnObject()
  
//   // const container = returnAnObject().container
// }

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("renders without crashing", function() {
  render(<Card />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});



it("should move backward", ()=> {
   const {container} = render(<App />)
   screen.debug()
    const title = getByText("Photo by Richard Pasquarella on Unsplash")
    const right_btn= getByText("bi bi-arrow-right-circle")
    fireEvent.click(right_btn)
    expect(title.toHaveTextContent("Photo by Pratik Patel on Unsplash"))
    const left_btn = getByText("bi bi-arrow-left-circle")
    fireEvent.click(left_btn)
    expect(title.toHaveTextContent("Photo by Richard Pasquarella on Unsplash"))
})

