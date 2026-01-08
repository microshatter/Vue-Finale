<template>
    <div class="title">
        <h1>Users Management</h1>
        <p>Manage users here.</p>
    </div>

    <!-- Add User Form -->
    <div class="mb-6 p-4 bg-white rounded-lg shadow">
        <h2 class="text-lg font-semibold mb-4">Add New User</h2>
        <el-form :model="newUserForm" label-width="120px" @submit.prevent="handleAddUser">
            <el-form-item label="Username">
                <el-input v-model="newUserForm.username" placeholder="Enter username"></el-input>
            </el-form-item>
            <el-form-item label="Email">
                <el-input v-model="newUserForm.email" type="email" placeholder="Enter email"></el-input>
            </el-form-item>
            <el-form-item label="Password">
                <el-input v-model="newUserForm.password" type="password" placeholder="Enter password"></el-input>
            </el-form-item>
            <el-form-item label="Admin">
                <el-checkbox v-model="newUserForm.admin">Is Admin</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleAddUser" :loading="addingUser">Add User</el-button>
            </el-form-item>
        </el-form>
    </div>

    <div class="users">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="ID" width="80"></el-table-column>
            <el-table-column prop="username" label="Username"></el-table-column>
            <el-table-column prop="email" label="Email"></el-table-column>
            <el-table-column prop="name" label="Full Name"></el-table-column>
            <el-table-column prop="admin" label="Is Admin">
                <template #default="scope">
                    <el-tag :type="scope.row.admin ? 'success' : 'info'">
                        {{ scope.row.admin ? 'Yes' : 'No' }}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column label="Actions" width="150">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.row)">Edit</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.row)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import { useUsersStore } from '../../stores/users.js';
import { ElMessage } from 'element-plus';

const usersStore = useUsersStore();
const tableData = ref([]);
const addingUser = ref(false);

const newUserForm = reactive({
    username: '',
    email: '',
    password: '',
    admin: false
});

const fetchUsers = async () => {
    await usersStore.fetchUsers();
    tableData.value = usersStore.getUsers;
};

const handleAddUser = async () => {
    if (!newUserForm.username || !newUserForm.email || !newUserForm.password) {
        ElMessage.error('Please fill in all fields');
        return;
    }

    try {
        addingUser.value = true;
        await usersStore.addUser(
            newUserForm.username,
            newUserForm.password,
            newUserForm.email,
            newUserForm.admin
        );

        // Reset form
        Object.keys(newUserForm).forEach(key => {
            if (typeof newUserForm[key] === 'boolean') {
                newUserForm[key] = false;
            } else {
                newUserForm[key] = '';
            }
        });

        await fetchUsers(); // Refresh the list
        ElMessage.success('User added successfully');
    } catch (error) {
        ElMessage.error(error.message);
    } finally {
        addingUser.value = false;
    }
};

const handleEdit = (user) => {
    // Logic to edit user
    console.log('Editing user:', user);
    // TODO: Implement edit modal/form
    ElMessage.info('Edit functionality not implemented yet');
};

const handleDelete = async (user) => {
    if (confirm(`Are you sure you want to delete user ${user.username}?`)) {
        try {
            await usersStore.deleteUser(user.id);
            await fetchUsers(); // Refresh the list
            ElMessage.success('User deleted successfully');
        } catch (error) {
            ElMessage.error(error.message);
        }
    }
};

onMounted(fetchUsers);
</script>