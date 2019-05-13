import { shallowMount } from "@vue/test-utils";

import App from "../../src/App.vue";

describe("App.vue", () => {
  it("go news page", () => {
    const wrapper = shallowMount(App);
    const newsHref = wrapper
      .findAll(".nav-link")
      .at(1)
      .props().to;
    window.history.pushState({}, "", newsHref);
    expect(window.location.href).toBe(`http://${window.location.host}${newsHref}`);
  });
});
