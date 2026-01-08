import { id } from "element-plus/es/locales.mjs";
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
    state: () => ({
        users: [],
    }),
    getters: {
        getUsers: (state) => state.users,
    },
    actions: {
        async fetchUsers() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            this.users = data;
        },

        async addUser(username, password, email, admin) {
            const user = {
                id: this.users.length + 1,
                username,
                password,
                email,
                admin
            };

            // Check for existing username
            if (this.users.some(u => u.username === username)) {
                throw new Error("Username already exists");
            }

            // Ensure unique ID
            while (user.id in this.users.map(u => u.id)) {
                user.id += 1;
            }
            this.users.push(user);
        },

        async deleteUser(id) {
            // check if user exists
            const userIndex = this.users.findIndex(user => user.id === id);
            if (userIndex === -1) {
                throw new Error("User not found");
            }
            this.users = this.users.filter(user => user.id !== id);
        },
    }
})