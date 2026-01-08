<template>
    <div class="common-layout">
        <el-container>
            <el-header class="admin-header">
                <div class="header-left">
                    <h2>Admin Panel</h2>
                </div>
                <div class="header-right">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            {{ usersStore.getCurrentUser?.username || 'Admin User' }}
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>Profile</el-dropdown-item>
                                <el-dropdown-item @click="handleLogout">Logout</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router unique-opened>
                        <el-menu-item index="/admin/dashboard">
                            <span>Dashboard</span>
                        </el-menu-item>
                        <el-menu-item index="/admin/users">
                            <span>Users</span>
                        </el-menu-item>
                        <el-menu-item index="/admin/settings">
                            <span>Settings</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-container>
                    <el-main>
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item :to="{ path: '/admin/dashboard' }">Admin</el-breadcrumb-item>
                            <el-breadcrumb-item>{{ $route.path.split('/').pop() || 'Dashboard' }}</el-breadcrumb-item>
                        </el-breadcrumb>
                        <router-view />
                    </el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useUsersStore } from '../../stores/users.js'

const route = useRoute()
const router = useRouter()
const usersStore = useUsersStore()

const handleLogout = () => {
    usersStore.logout()
    router.push('/login')
}
</script>

<style scoped>
.admin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #409eff;
    color: white;
    padding: 0 20px;
}

.header-left h2 {
    margin: 0;
}

.header-right {
    cursor: pointer;
}

.el-menu {
    border-right: none;
}

.el-main {
    padding: 20px;
}
</style>
