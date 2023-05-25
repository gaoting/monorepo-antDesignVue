export interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

export interface FormArrayType {
  label: string;
  name: string;
  type: string;
  value?: any;
  defaultValue?: any;
  validateMsg?: string;
  rulesOpen?: boolean;
}
