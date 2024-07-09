import { mount } from "@vue/test-utils";
import { expect } from "vitest";
import { BaseDatePicker } from "../components";

// NOTE: Adding a few basic tests, more can be added.

const basicProps = {
  date: "2023-08-08",
  label: "Return Date",
  placeholder: "select return date",
  icon: "calendar",
};

test("renders label prop", () => {
  expect(BaseDatePicker).toBeTruthy();
  const label = "Date of Birth";
  const wrapper = mount(BaseDatePicker, {
    props: { ...basicProps, ...{ label } },
  });
  expect(wrapper.find("label").text()).toBe(label);
});

test("renders placeholder prop", () => {
  const placeholder = "Select a date";
  const wrapper = mount(BaseDatePicker, {
    props: { ...basicProps, ...{ placeholder } },
  });
  expect(wrapper.find(".dp-custom-input").attributes("placeholder")).toBe(
    placeholder
  );
});
