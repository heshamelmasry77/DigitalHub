import { shallowMount } from "@vue/test-utils";

import News from "../../src/views/News.vue";

describe("News.vue", () => {
  it("go back to home page", () => {
    const wrapper = shallowMount(News);
    wrapper.find("button").trigger("click");
    expect(window.location.href).toBe(`http://${window.location.host}/`);
  });
});
