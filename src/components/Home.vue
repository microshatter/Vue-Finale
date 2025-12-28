<template>
    <div class="home">
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-content">
                <h1>📚 {{ $t('mainTitle') }}</h1>
                <p>{{ $t('mainSubtitle') }}</p>
                <button class="cta-button">{{ $t('button.getStarted') }}</button>
            </div>
        </section>

        <!-- Features Section -->
        <section class="features">
            <h2>{{ $t('features.keyFeatures') }}</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <h3>📖 {{ $t('features.bookReservations') }}</h3>
                    <p>{{ $t('features.bookReservationsDesc') }}</p>
                </div>
                <div class="feature-card">
                    <h3>🏢 Study Rooms</h3>
                    <p>Book dedicated study spaces for focused work</p>
                </div>
                <div class="feature-card">
                    <h3>🛠️ Equipment Rental</h3>
                    <p>Access library equipment and technology</p>
                </div>
                <div class="feature-card">
                    <h3>⏰ Easy Scheduling</h3>
                    <p>Intuitive calendar-based reservation system</p>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section class="about">
            <h2>About This Project</h2>
            <p>A modern, web-based system built with Vue 3 and Vite for managing library resources efficiently.</p>
            <p><strong>Tech Stack:</strong> Vue 3 • Vite • JavaScript</p>
        </section>
    </div>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
.home {
    width: 100%;
    min-height: 100vh;
}

.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 100px 20px;
    text-align: center;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 10px;
}

.hero-content p {
    font-size: 1.25rem;
    margin-bottom: 30px;
}

.cta-button {
    background-color: white;
    color: #667eea;
    padding: 12px 30px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.3s;
}

.cta-button:hover {
    transform: scale(1.05);
}

.features {
    padding: 60px 20px;
    background-color: #f9f9f9;
}

.features h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 40px;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.feature-card {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
    font-size: 1.25rem;
    margin-bottom: 10px;
}

.about {
    padding: 60px 20px;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.about h2 {
    font-size: 2rem;
    margin-bottom: 20px;
}
</style>