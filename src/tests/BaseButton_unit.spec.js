import { mount } from "@vue/test-utils";
import { expect } from "vitest";
import BaseButton from "../components/Base/BaseButton.vue";

// NOTE: Adding a few basic tests, more can be added.

test("renders label prop", () => {
  expect(BaseButton).toBeTruthy();
  const label = "Search";
  const wrapper = mount(BaseButton, { props: { label } });
  expect(wrapper.find("button").text()).toBe(label);
});

test("emits click event", async () => {
  const wrapper = mount(BaseButton, { props: { label: "Search" } });
  await wrapper.find("button").trigger("click");
  expect(wrapper.emitted().click).toBeTruthy();
  expect(wrapper.emitted().click.length).toBe(1);
});

test("does not emit click event when disabled", async () => {
  const wrapper = mount(BaseButton, {
    props: { label: "Search", disabled: true },
  });
  await wrapper.find("button").trigger("click");
  expect(wrapper.emitted().click).toBeFalsy();
});

test("applies base-button class", () => {
  const wrapper = mount(BaseButton, { props: { label: "Search" } });
  expect(wrapper.find("button").classes()).toContain("base-button");
});
