import { mount } from "enzyme"
import Component from "./ping"

describe("The Ping page", () => {
  it("should render", () => {
    const wrapper = mount(<Component />)
    expect(wrapper).toBeDefined()
  })
  it("should render with props", () => {
    const props = { mockKey: "mockValue" }
    const wrapper = mount(<Component {...props} />)
    expect(wrapper).toBeDefined()
  })
})
