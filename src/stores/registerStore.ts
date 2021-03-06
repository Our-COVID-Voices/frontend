import { observable, action } from "mobx";
import httpService from "../service/api";
import UserStore from "./userStore";

export default class RegisterStore {
  @observable step: number = 0;
  @observable consent = false;
  @observable showConfirmation = false;
  @observable email: string = "";
  @observable password: string = "";
  @observable userStore: UserStore | null = null;
  @observable registerError: boolean = false;
  @observable canContact: boolean | undefined = undefined;
  @observable username: string = "";
  constructor(userStore: UserStore) {
    this.userStore = userStore;
  }

  @action
  clear = () => {
    this.step = 0;
    this.consent = false;
    this.showConfirmation = false;
    this.email = "";
    this.password = "";
    this.canContact = undefined;
    this.registerError = false;
  };

  @action
  nextStep() {
    this.step = this.step + 1;
    window.scrollTo(0, 0);
  }

  @action
  previousStep() {
    this.step = this.step - 1;
    this.registerError = false;
    window.scrollTo(0, 0);
  }

  @action
  toggleConsent() {
    this.consent = !this.consent;
  }

  @action
  register = async () => {
    try {
      const params = {
        email: this.email,
        password: this.password,
        country: `${this.canContact}`,
        gender: this.username,
      };

      const {
        data: {
          data: { id },
        },
      } = await httpService.api.post("/api/end-users", params);

      this.showConfirmation = true;

      if (this.userStore) {
        this.userStore.handleChange(this.email, "username");
        this.userStore.handleChange(this.password, "password");
        this.userStore.userId = id;

        this.userStore.logIn();
      }
    } catch ({ response }) {
      this.registerError = true;
    }
  };

  @action
  handleChange = (value: string, field: string) => {
    // @ts-ignore
    this[field] = value;
  };

  @action
  handleContact = (value: boolean) => {
    this.canContact = value;
  };
}
