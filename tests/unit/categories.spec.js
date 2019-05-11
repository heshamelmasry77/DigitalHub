import { shallowMount } from "@vue/test-utils";

import Categories from "../../src/components/Categories.vue";

describe("Categories.vue", () => {
  it("Checking <h1> tag text", () => {
    const wrapper = shallowMount(Categories);
    const h1 = wrapper.find("h1");
    expect(h1.text()).toBe("Digital News");
  });

  it("Open chosen category", () => {
    const wrapper = shallowMount(Categories);
    const valueOfCategory = wrapper
      .findAll(".text-monospace")
      .at(2)
      .text();
    const expectedUrl = `${window.location}news/${valueOfCategory}`;
    window.history.pushState({}, "", `/news/${valueOfCategory}`);
    expect(window.location.href).toBe(expectedUrl);
  });
});
