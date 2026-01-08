import { id } from "element-plus/es/locales.mjs";
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
    state: () => ({
        users: [
            {
                id: 1,
                username: 'admin',
                email: 'admin@example.com',
                password: '123456',
                admin: true,
                name: 'Administrator',
                reservations: []
            },
            {
                id: 2,
                username: 'user',
                email: 'user@example.com',
                password: '123456',
                admin: false,
                name: 'Regular User',
                reservations: []
            }
        ],
        currentUser: null,
        isAuthenticated: false,
    }),
    getters: {
        getUsers: (state) => state.users,
        getCurrentUser: (state) => state.currentUser,
        isLoggedIn: (state) => state.isAuthenticated,
        isAdmin: (state) => state.currentUser?.admin || false,
    },
    actions: {
        async fetchUsers() {
            // For demo purposes, we'll add some default users with proper structure
            // In a real app, this would fetch from your API
        },

        async login(username, password) {
            // Find user by username
            const user = this.users.find(u => u.username === username);
            if (!user) {
                throw new Error("User not found");
            }

            // In a real app, you'd verify the password hash
            // For demo purposes, we'll assume password matches if user exists
            if (user.password !== password) {
                throw new Error("Invalid password");
            }

            this.currentUser = user;
            this.isAuthenticated = true;

            // Store in localStorage for persistence
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('isAuthenticated', 'true');
        },

        async register(username, email, password, admin = false) {
            // Check for existing username
            if (this.users.some(u => u.username === username)) {
                throw new Error("Username already exists");
            }

            // Check for existing email
            if (this.users.some(u => u.email === email)) {
                throw new Error("Email already exists");
            }

            const newUser = {
                id: Math.max(...this.users.map(u => u.id), 0) + 1,
                username,
                email,
                password, // In real app, hash this
                admin,
                name: username, // Add name field for compatibility,
                reservations: []
            };

            this.users.push(newUser);
            return newUser;
        },

        async addUser(username, password, email, admin) {
            const user = {
                id: this.users.length + 1,
                username,
                password,
                email,
                admin,
                name: username,
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

        async updateUser(id, updates) {
            const userIndex = this.users.findIndex(user => user.id === id);
            if (userIndex === -1) {
                throw new Error("User not found");
            }

            // Check for username uniqueness if updating username
            if (updates.username && updates.username !== this.users[userIndex].username) {
                if (this.users.some(u => u.username === updates.username)) {
                    throw new Error("Username already exists");
                }
            }

            // Check for email uniqueness if updating email
            if (updates.email && updates.email !== this.users[userIndex].email) {
                if (this.users.some(u => u.email === updates.email)) {
                    throw new Error("Email already exists");
                }
            }

            this.users[userIndex] = { ...this.users[userIndex], ...updates };
        },

        async deleteUser(id) {
            // check if user exists
            const userIndex = this.users.findIndex(user => user.id === id);
            if (userIndex === -1) {
                throw new Error("User not found");
            }

            // Prevent deleting current user
            if (this.currentUser && this.currentUser.id === id) {
                throw new Error("Cannot delete current user");
            }

            this.users = this.users.filter(user => user.id !== id);
        },

        logout() {
            this.currentUser = null;
            this.isAuthenticated = false;
            localStorage.removeItem('currentUser');
            localStorage.removeItem('isAuthenticated');
        },

        initializeAuth() {
            // Load auth state from localStorage
            const storedUser = localStorage.getItem('currentUser');
            const storedAuth = localStorage.getItem('isAuthenticated');

            if (storedUser && storedAuth === 'true') {
                this.currentUser = JSON.parse(storedUser);
                this.isAuthenticated = true;
            }
        },
    }
})