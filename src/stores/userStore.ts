import { observable, action, computed } from "mobx";
import httpService from "../service/api";
import get from "lodash/get";
import groupBy from "lodash/groupBy";
import { IStory } from "../utils/types";
import { format } from "date-fns";
import { email } from "../utils/regex";

export default class UserStore {
  @observable loggedIn: boolean = false;
  @observable loginErrors: string | null = null;
  @observable experiences = [];
  @observable experiencesLoading: boolean = true;
  @observable username: string = "";
  @observable password: string = "";
  @observable userId: string = "";
  @observable currentPage: number = 1;
  @observable totalItems: number = 1;
  @observable itemsPerPage: number = 10;
  @observable experienceFilter: string | null = null;
  @observable newPassword: string = "";
  @observable confirmPassword: string = "";
  @observable changePasswordSuccess: boolean = false;
  @observable changePasswordErrors: [] = [];
  @observable newEmail: string = "";
  @observable changeEmailSuccess: boolean = false;
  @observable changeEmailErrors: [] = [];
  @observable modalOpen: boolean = false;
  @observable withdrawType: string = "undefined";

  @action
  async logIn() {
    this.loginErrors = null;

    try {
      const data = await httpService.api.post("/login", {
        email: this.username,
        password: this.password,
      });

      this.userId = get(data, "data.data.id");
      this.loggedIn = true;
      this.clear();
    } catch ({ response }) {
      this.loginErrors = get(response, "data.message");
    }
  }

  async logOut() {
    try {
      await httpService.api.post("/logout", {});
      this.loggedIn = false;
      this.clear();
    } catch ({ response }) {
      console.error(response.status, response.statusText);
    }
  }

  @action
  fetchUserExperiences = async (pageNum: number) => {
    try {
      this.experiencesLoading = true;

      const { data } = await httpService.api.get(
        `/api/contributions?page=${pageNum}&filter[end_user_id]=${this.userId}
        `
      );

      const experiences = get(data, "data");

      if (this.experienceFilter) {
        experiences.filter(
          (experience: IStory) => experience.status === this.experienceFilter
        );
      } else {
        this.experiences = experiences;
      }

      this.currentPage = get(data, "meta.current_page");
      this.totalItems = get(data, "meta.total");
      this.itemsPerPage = get(data, "meta.per_page");
      this.experiencesLoading = false;
    } catch ({ response }) {
      console.error(response);
    }
  };

  @computed
  get experiencesGroupedByDate() {
    return groupBy(this.experiences, (experiences: IStory) =>
      format(new Date(experiences.created_at), "dd MMM yyyy")
    );
  }

  totalInReview = (experiences: IStory[]) => {
    const total = experiences.filter(
      (experience: IStory) => experience.status === "in_review"
    ).length;

    return total ? `${total} in review` : null;
  };

  totalToReview = (experiences: IStory[]) => {
    const total = experiences.filter(
      (experience: IStory) => experience.status === "changes_requested"
    ).length;

    return total ? `${total} to review` : null;
  };
  totalPublic = (experiences: IStory[]) => {
    const total = experiences.filter(
      (experience: IStory) => experience.status === "public"
    ).length;

    return total ? `${total} public` : null;
  };

  totalPrivate = (experiences: IStory[]) => {
    const total = experiences.filter(
      (experience: IStory) => experience.status === "private"
    ).length;

    return total ? `${total} private` : null;
  };

  @action
  handleChange = (value: string, field: string) => {
    // @ts-ignore
    this[field] = value;
  };

  @action
  filterResults = async (filter: string) => {
    if (filter === "all") {
      this.experienceFilter = null;
    } else {
      this.experienceFilter = filter;
    }

    await this.fetchUserExperiences(this.currentPage);

    if (this.experienceFilter) {
      this.experiences = this.experiences.filter(
        (experience: IStory) => experience.status === this.experienceFilter
      );
    }
  };

  @action clear = () => {
    this.username = "";
    this.password = "";
    this.experiences = [];
    this.currentPage = 1;
    this.totalItems = 1;
    this.itemsPerPage = 10;
  };

  @action
  resetPassword = async () => {
    if (this.newPassword === this.confirmPassword) {
      this.changePasswordSuccess = false;
      this.changePasswordErrors = [];

      try {
        await httpService.api.put(`/api/end-users/${this.userId}`, {
          password: this.newPassword,
        });

        this.changePasswordSuccess = true;
        this.newPassword = "";
        this.confirmPassword = "";
      } catch ({ response }) {
        this.changePasswordErrors = get(response, "data.errors.password");
      }
    }
  };

  @action
  resetEmail = async () => {
    this.changeEmailSuccess = false;
    this.changeEmailErrors = [];

    try {
      await httpService.api.put(`/api/end-users/${this.userId}`, {
        email: this.newEmail,
      });

      this.changeEmailSuccess = true;
      this.newEmail = "";
    } catch ({ response }) {
      this.changeEmailErrors = get(response, "data.errors.email");
    }
  };

  @action
  setDeleteType = (deleteType: string) => {
    this.withdrawType = deleteType;
    this.toggleModal();
  };

  @action
  toggleModal = () => {
    this.modalOpen = !this.modalOpen;
  };

  deleteAccount = async () => {
    try {
      await httpService.api.delete(
        `/api/end-users/${this.userId}?type=${this.withdrawType}`
      );

      this.toggleModal();
      this.logOut();
    } catch ({ response }) {
      console.error(response);
    }
  };

  @computed
  get loginDisabled() {
    return !email.test(this.username) || !this.password;
  }
}
