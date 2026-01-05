<template>
    <div class="login-container">
        <div class="login-form">
            <div class="login-header">
                <h2>{{ $t('login.title') }}</h2>
                <p class="subtitle">{{ $t('login.subtitle') }}</p>
            </div>

            <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef" class="form">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" :placeholder="$t('login.usernamePlaceholder')" size="large">
                        <template #prefix>
                            <el-icon>
                                <User />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" :placeholder="$t('login.passwordPlaceholder')"
                        type="password" size="large" show-password>
                        <template #prefix>
                            <el-icon>
                                <Lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item>
                    <div class="remember-me">
                        <el-checkbox v-model="loginForm.rememberMe">{{ $t('login.rememberMe') }}</el-checkbox>
                        <el-link type="primary" href="#" @click.prevent="handleForgotPassword">
                            {{ $t('login.forgotPassword') }}
                        </el-link>
                    </div>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" size="large" class="login-button" @click="handleLogin" :loading="loading"
                        :disabled="loading">
                        {{ $t('login.signIn') }}
                    </el-button>
                </el-form-item>
            </el-form>

            <div class="divider">
                <span>{{ $t('login.divider') }}</span>
            </div>

            <div class="social-login">
                <el-button v-for="provider in socialProviders" :key="provider.id" class="social-button"
                    @click="handleSocialLogin(provider.id)">
                    {{ $t('login.continueWith') }} {{ provider.name }}
                </el-button>
            </div>

            <div class="signup-section">
                <p>{{ $t('login.noAccount') }}
                    <el-link type="primary" @click="handleSignUp">
                        {{ $t('login.signUp') }}
                    </el-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import { User, Lock } from '@element-plus/icons-vue';

const router = useRouter();

// Form data
const loginForm = reactive({
    username: '',
    password: '',
    rememberMe: false
});

// Form validation rules
const loginRules = {
    username: [
        { required: true, message: 'Please enter your username', trigger: 'blur' },
        { min: 3, max: 20, message: 'Username length should be 3 to 20 characters', trigger: 'blur' }
    ],
    password: [
        { required: true, message: 'Please enter your password', trigger: 'blur' },
        { min: 6, message: 'Password length should be at least 6 characters', trigger: 'blur' }
    ]
};

// Refs
const loginFormRef = ref();

// State
const loading = ref(false);

// Social login providers
const socialProviders = ref([
    { id: 'google', name: 'Google' },
    { id: 'github', name: 'GitHub' },
    { id: 'microsoft', name: 'Microsoft' }
]);

// Handle login
const handleLogin = async () => {
    if (!loginFormRef.value) return;

    try {
        await loginFormRef.value.validate();

        loading.value = true;

        // Simulate API call
        setTimeout(() => {
            loading.value = false;
            ElMessage.success('Login successful!');
            // Redirect to dashboard or previous page
            router.push('/admin/dashboard');
        }, 1500);
    } catch (error) {
        console.error('Validation failed:', error);
        ElMessage.error('Please fill in all required fields correctly');
    }
};

// Handle social login
const handleSocialLogin = (providerId) => {
    ElMessage.info(`Login with ${providerId} clicked`);
    // In a real app, this would redirect to the social login provider
};

// Handle forgot password
const handleForgotPassword = () => {
    ElMessage.info('Forgot password clicked');
    // In a real app, this would navigate to password reset page
};

// Handle sign up
const handleSignUp = () => {
    ElMessage.info('Sign up clicked');
    router.push('/register');
};
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 20px;
}

.login-form {
    width: 100%;
    max-width: 420px;
    padding: 40px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.login-header {
    text-align: center;
    margin-bottom: 30px;
}

.login-header h2 {
    margin: 0 0 8px 0;
    font-size: 24px;
    font-weight: 600;
    color: #1f2d3d;
}

.subtitle {
    margin: 0;
    color: #8492a6;
    font-size: 14px;
}

.form {
    margin-bottom: 20px;
}

.remember-me {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.login-button {
    width: 100%;
    height: 48px;
    font-size: 16px;
    letter-spacing: 1px;
}

.divider {
    display: flex;
    align-items: center;
    margin: 25px 0;
}

.divider::before,
.divider::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #dfe4ed;
}

.divider span {
    padding: 0 12px;
    color: #909399;
    font-size: 14px;
}

.social-login {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.social-button {
    height: 44px;
    font-size: 14px;
}

.signup-section {
    text-align: center;
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #e4e7ed;
}

.signup-section p {
    margin: 0;
    color: #606266;
    font-size: 14px;
}

@media (max-width: 768px) {
    .login-form {
        padding: 30px 20px;
        margin: 0 10px;
    }
}
</style>