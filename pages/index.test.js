import Home from "./index.js"
import { render } from "@testing-library/react"

describe(Home,()=>{
    it("Testing react home component",()=>{
       const { getByTestId } = render(<Home />);
       const count=getByTestId("count").textContent;
       expect(count).toEqual(0);
    });
});
