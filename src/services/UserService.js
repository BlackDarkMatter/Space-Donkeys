import DataUtils from "../utils/dataUtils";

const dataName = "userList";
const userData = "currentUser";

export const UserService = {
  async getUserList() {
    return (await DataUtils.readData(dataName)) || [];
  },

  async saveUserList(data) {
    await DataUtils.writeData(dataName, data);
  },

  async getCurrentUser() {
    return await DataUtils.readData(userData);
  },

  async saveCurrentUser(data) {
    const userList = await this.getUserList();
    this.saveUserList([
      ...userList.filter((x) => x.username !== data.username),
      data,
    ]);
    await DataUtils.writeData(userData, data);
  },

  async logout() {
    await DataUtils.deleteData(userData);
  },
};
