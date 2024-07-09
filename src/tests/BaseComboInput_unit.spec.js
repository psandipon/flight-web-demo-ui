import { mount } from "@vue/test-utils";
import { expect } from "vitest";
import BaseComboInput from "../components/Base/BaseComboInput.vue";

// NOTE: Adding a few basic tests, more can be added.

const basicProps = {
  label: "label",
  value: "item",
  placeholder: "placeholder",
  items: ["item"],
};

test("renders placeholder prop", () => {
  const placeholder = "Enter something";
  const wrapper = mount(BaseComboInput, {
    props: { ...basicProps, ...{ placeholder } },
  });
  expect(wrapper.find("input").attributes("placeholder")).toBe(placeholder);
});

test("emits update:modelValue event on input change", async () => {
  const wrapper = mount(BaseComboInput, {
    props: { ...basicProps, ...{ items: ["a", "b", "c"] } },
  });
  await wrapper.find("input").setValue("a");
  expect(wrapper.emitted("update:value")).toBeTruthy();
  expect(wrapper.emitted("update:value")[0]).toEqual(["a"]);
});

test("shows dropdown menu on input focus or click", async () => {
  const wrapper = mount(BaseComboInput, {
    props: { ...basicProps, ...{ items: ["a", "b", "c"] } },
  });
  expect(wrapper.find(".dropdown-menu").exists()).toBe(false);
  await wrapper.find("input").trigger("focus");
  expect(wrapper.find(".dropdown-menu").exists()).toBe(true);
  await wrapper.find("input").trigger("click");
  expect(wrapper.find(".dropdown-menu").exists()).toBe(true);
});

test("hides dropdown menu on click outside", async () => {
  const wrapper = mount(BaseComboInput, {
    props: { ...basicProps, ...{ items: ["a", "b", "c"] } },
  });
  await wrapper.find("input").trigger("focus");
  expect(wrapper.find(".dropdown-menu").exists()).toBe(true);
  await document.body.click();
  expect(wrapper.find(".dropdown-menu").exists()).toBe(false);
});

test("selects item from dropdown menu on click", async () => {
  const wrapper = mount(BaseComboInput, {
    props: { ...basicProps, ...{ items: ["a", "b", "c"] } },
  });
  await wrapper.find("input").trigger("focus");
  await wrapper.findAll(".dropdown-menu li")[1].trigger("click");
  expect(wrapper.emitted("update:value")).toBeTruthy();
  expect(wrapper.emitted("update:value")[1]).toEqual(["b"]);
});

test("adds error class to input if value is not in items prop", async () => {
  const wrapper = mount(BaseComboInput, {
    props: { ...basicProps, ...{ items: ["a", "b", "c"] } },
  });
  await wrapper.find("input").setValue("d");
  expect(wrapper.find(".error").exists()).toBe(true);
});
