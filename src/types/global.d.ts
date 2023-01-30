export {};

declare global {
  type SelectOption = {
    value: string;
    label: string;
    isDisabled?: boolean;
  };
}
