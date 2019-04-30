import { shallowMount } from "@vue/test-utils";
import Categories from "../../src/components/Categories.vue";

describe("Categories.vue", () => {
  it("Checking <h1> tag text", () => {
    const wrapper = shallowMount(Categories);
    const h1 = wrapper.find("h1");
    expect(h1.text()).toBe("Digital News");
  });
});
