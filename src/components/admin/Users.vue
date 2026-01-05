<template>
    <div class="title">
        <h1>Users Management</h1>
        <p>Manage users here.</p>
        <!-- Add users table or form here -->
    </div>
    <div class="users">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="ID" width="180"></el-table-column>
            <el-table-column prop="username" label="Name"></el-table-column>
            <el-table-column prop="email" label="Email"></el-table-column>
            <el-table-column prop="role" label="Role"></el-table-column>
            <el-table-column prop="isadmin" label="Is Admin"></el-table-column>
            <el-table-column label="Actions">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.row)">Edit</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.row)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const tableData = ref([]);

const fetchUsers = async () => {
    // Simulate fetching data from an API
    tableData.value = [
        { id: 1, username: 'microshatter', email: 'john@example.com', role: 'Admin', isadmin: true },
        { id: 2, username: 'calc48', email: 'jane@example.com', role: 'User', isadmin: false }
    ];
};

const handleEdit = (user) => {
    // Logic to edit user
    console.log('Editing user:', user);
};

const handleDelete = (user) => {
    // Logic to delete user
    console.log('Deleting user:', user);
};

onMounted(fetchUsers);
</script>