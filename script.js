const exercisesDB = [
    { 
        id: 1, 
        name: "Жим штанги лёжа", 
        muscle: "Грудь", 
        img: "https://nef.fit/wp-content/uploads/2026/01/zhim-lezha.png", 
        recommendation: "4 подхода по 8–10 повт. (отдых 90 сек)", 
        tutorialUrl: "https://nef.fit/blog/zhim-lezha/" 
    },
    { 
        id: 9, 
        name: "Отжимания", 
        muscle: "Грудь", 
        img: "https://s0.rbk.ru/v6_top_pics/media/img/1/26/756809525337261.jpg", 
        recommendation: "3 подхода до мышечного отказа (отдых 60 сек)", 
        tutorialUrl: "https://sportrbc.ru/news/64314aa39a794792825beba4" 
    },
    { 
        id: 2, 
        name: "Становая тяга", 
        muscle: "Спина", 
        img: "https://opis-cdn.tinkoffjournal.ru/mercury/mwZKaQHGlQ.in-out-what-is-deadlift.jpg?preset=image_1280w", 
        recommendation: "3 подхода по 5–8 повт. (отдых 120 сек)", 
        tutorialUrl: "https://style.rbc.ru/health/65290ea49a7947347da8ee3b" 
    },
    { 
        id: 4, 
        name: "Подтягивания", 
        muscle: "Спина", 
        img: "https://sportmen.ru/upload/resize_cache/webp/iblock/a72/j94doewllcj7aed80ad73f32pjq2pz5f.webp", 
        recommendation: "4 подхода по 6–12 повт. (отдых 90 сек)", 
        tutorialUrl: "https://sportmen.ru/articles/kak-pravilno-dyshat-pri-podtyagivanii-na-turnike/" 
    },
    { 
        id: 10, 
        name: "Тяга штанги в наклоне", 
        muscle: "Спина", 
        img: "https://nef.fit/wp-content/uploads/2026/09/tyaga-shtangi-v-naklone-1.webp", 
        recommendation: "3 подхода по 10–12 повт. (отдых 90 сек)", 
        tutorialUrl: "https://nef.fit/blog/tyaga-shtangi-v-naklone/" 
    },
    { 
        id: 3, 
        name: "Приседания со штангой", 
        muscle: "Ноги", 
        img: "https://gym-gym.com/public/media/2026/07/barbell-squat-technique-hero-1024x683.webp", 
        recommendation: "4 подхода по 8–10 повт. (отдых 120 сек)", 
        tutorialUrl: "https://gym-gym.com/blog/prisedaniya-so-shtangoj-pravilnaya-tehnika" 
    },
    { 
        id: 6, 
        name: "Выпады с гантелями", 
        muscle: "Ноги", 
        img: "https://resizer.mail.ru/p/bf513ad9-6ec1-5691-a6f2-91edb8757a13/AQAGPct-gml6qb2y8t9EDd2BtGf-sWXXPMEMCxw5orUmZBMUodB5jZ4NhA3ztCyWgH9sLpLaMBuG0T9PDp3LLYeoc88.webp", 
        recommendation: "3 подхода по 12 повт. на каждую ногу (отдых 60 сек)", 
        tutorialUrl: "https://stayfit.today/ru/exercise-605" 
    },
    { 
        id: 11, 
        name: "Жим ногами", 
        muscle: "Ноги", 
        img: "https://s0.rbk.ru/v6_top_pics/resized/960xH/media/img/8/57/347581210571578.webp", 
        recommendation: "4 подхода по 10–15 повт. (отдых 90 сек)", 
        tutorialUrl: "https://instructorpro.ru/uprazhnenie-zhim-nogami/" 
    },
    { 
        id: 12, 
        name: "Махи гантелями в стороны", 
        muscle: "Плечи", 
        img: "https://img.championat.com/news/big/j/c/mahi-gantelyami-v-storony_1730804211804449185.jpg", 
        recommendation: "4 подхода по 15–20 повт. (отдых 60 сек)", 
        tutorialUrl: "https://www.championat.com/lifestyle/article-5774694-mahi-gantelyami-v-storonu-kak-pravilno-delat-stoya-sidya-v-naklone-tehnika-vypolneniya.html" 
    },
    { 
        id: 8, 
        name: "Сгибание рук на бицепс", 
        muscle: "Руки", 
        img: "https://instructorpro.ru/wp-content/uploads/elementor/thumbs/%D1%81%D0%B3%D0%B8%D0%B1-%D0%BD%D0%B0-%D0%B1%D0%B8%D1%86-ri2u0pdbgilshqvkl45r17vnw13gsn4gq5ex8x5uvu.png", 
        recommendation: "3 подхода по 10–12 повт. (отдых 60 сек)", 
        tutorialUrl: "https://nef.fit/blog/skimbaniya-na-biceps/" 
    },
    { 
        id: 5, 
        name: "Планка", 
        muscle: "Кор", 
        img: "https://nef.fit/wp-content/uploads/2025/12/chem-polezna-planka.png", 
        recommendation: "3 подхода по 45–90 сек (отдых 45 сек)", 
        tutorialUrl: "https://nef.fit/blog/planka/" 
    }
];
const workoutPrograms = [
    { id: 'prog_chest_tri', name: "Грудь + Трицепс", desc: "Базовая силовая тренировка для верха тела", exerciseIds: [1, 9, 8] },
    { id: 'prog_back_bi', name: "Спина + Бицепс", desc: "Классическая тяговая тренировка", exerciseIds: [4, 10, 8] },
    { id: 'prog_legs', name: "День ног", desc: "Максимальная проработка нижней части тела", exerciseIds: [3, 6, 11, 5] },
    { id: 'prog_fullbody', name: "Фулбоди (Все тело)", desc: "Комплексная тренировка на все группы мышц", exerciseIds: [1, 4, 3, 12, 5] }
];

let currentUser = null;
let currentFilter = 'all';
let currentSearch = '';

document.addEventListener('DOMContentLoaded', () => {
    loadUser();
    setupAuthModal();
    setupProfileModal();
    setupAvatarUpload();
    setupSearch();
    setupFilters();
    renderAll();
});

function sanitizeUser(user) {
    if (!user) return null;
    return {
        name: user.name || 'User',
        password: user.password || '',
        description: user.description || '',
        avatar: user.avatar || null,
        xp: Number(user.xp) || 0,
        activeWorkout: Array.isArray(user.activeWorkout) ? user.activeWorkout : [],
        completedWorkouts: Array.isArray(user.completedWorkouts) ? user.completedWorkouts : []
    };
}

function loadUser() {
    const session = localStorage.getItem('formaRostaSession');
    if (session) {
        try {
            currentUser = sanitizeUser(JSON.parse(session));
            updateUIForUser();
        } catch (e) {
            console.error("Ошибка загрузки сессии", e);
            localStorage.removeItem('formaRostaSession');
            updateUIForGuest();
        }
    } else {
        currentUser = null;
        updateUIForGuest();
    }
}

function saveUser() {
    if (!currentUser) return;
    const users = JSON.parse(localStorage.getItem('formaRostaUsers') || '[]');
    const idx = users.findIndex(u => u.name === currentUser.name);
    
    if (idx !== -1) {
        users[idx] = currentUser;
    } else {
        users.push(currentUser);
    }

    localStorage.setItem('formaRostaUsers', JSON.stringify(users));
    localStorage.setItem('formaRostaSession', JSON.stringify(currentUser));
    updateStats();
}

function updateUIForGuest() {
    document.getElementById('navUserBadge').classList.add('hidden');
    document.getElementById('authBtn').classList.remove('hidden');
    document.getElementById('logoutBtn').classList.add('hidden');
    document.getElementById('heroAuthBtn').classList.remove('hidden');
    document.getElementById('editProfileBtn').classList.add('hidden');

    document.getElementById('heroTitle').innerHTML = 'Прокачай своё тело.<br>Отслеживай каждый шаг.';
    document.getElementById('heroSubtitle').textContent = 'Собирай тренировки, зарабатывай очки опыта и соревнуйся с друзьями.';
    document.getElementById('statXP').textContent = '0';
    document.getElementById('statWorkouts').textContent = '0';
    document.getElementById('statLevel').textContent = 'Новичок';
}

function updateUIForUser() {
    if (!currentUser) return;

    document.getElementById('userNameText').textContent = currentUser.name;
    document.getElementById('navUserBadge').classList.remove('hidden');
    document.getElementById('authBtn').classList.add('hidden');
    document.getElementById('logoutBtn').classList.remove('hidden');

    renderNavAvatar();

    document.getElementById('heroAuthBtn').classList.add('hidden');
    document.getElementById('editProfileBtn').classList.remove('hidden');

    document.getElementById('heroTitle').textContent = 'Привет, ' + currentUser.name + '!';
    document.getElementById('heroSubtitle').textContent = 'Твой профиль, тренировки и прогресс — в одном месте.';
    updateStats();
}

function renderNavAvatar() {
    const imgEl = document.getElementById('navUserAvatar');
    const letterEl = document.getElementById('navUserLetter');
    if (currentUser.avatar) {
        imgEl.src = currentUser.avatar;
        imgEl.classList.remove('hidden');
        letterEl.classList.add('hidden');
    } else {
        imgEl.classList.add('hidden');
        letterEl.textContent = currentUser.name.charAt(0).toUpperCase();
        letterEl.classList.remove('hidden');
    }
}

function updateStats() {
    if (!currentUser) return;
    document.getElementById('statXP').textContent = currentUser.xp;
    document.getElementById('statWorkouts').textContent = currentUser.completedWorkouts.length;
    document.getElementById('statLevel').textContent = getLevel(currentUser.xp);
}

function getLevel(xp) {
    if (xp >= 1000) return 'Мастер';
    if (xp >= 600) return 'Эксперт';
    if (xp >= 300) return 'Продвинутый';
    if (xp >= 100) return 'Любитель';
    return 'Новичок';
}

function setupAuthModal() {
    const modal = document.getElementById('authModal');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    document.getElementById('authBtn').addEventListener('click', () => modal.classList.remove('hidden'));
    document.getElementById('heroAuthBtn').addEventListener('click', () => modal.classList.remove('hidden'));
    document.getElementById('closeAuthModal').addEventListener('click', () => modal.classList.add('hidden'));
    
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });

    document.getElementById('switchToRegister').addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
        document.getElementById('authModalTitle').textContent = 'Создай аккаунт';
        document.getElementById('authModalSubtitle').textContent = 'Начни свой путь к результату за 10 секунд';
    });

    document.getElementById('switchToLogin').addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
        document.getElementById('authModalTitle').textContent = 'С возвращением!';
        document.getElementById('authModalSubtitle').textContent = 'Войди, чтобы продолжить путь к результату';
    });

    document.getElementById('logoutBtn').addEventListener('click', () => {
        if (confirm('Выйти из аккаунта?')) {
            localStorage.removeItem('formaRostaSession');
            currentUser = null;
            updateUIForGuest();
            renderAll();
            showToast('Вы вышли из аккаунта');
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value.trim();
        const pass = document.getElementById('regPass').value;
        const passConfirm = document.getElementById('regPassConfirm').value;

        if (name.length < 2) return alert('Имя должно содержать минимум 2 символа');
        if (pass.length < 4) return alert('Пароль должен быть минимум 4 символа');
        if (pass !== passConfirm) return alert('Пароли не совпадают');

        const users = JSON.parse(localStorage.getItem('formaRostaUsers') || '[]');
        if (users.some(u => u.name.toLowerCase() === name.toLowerCase())) {
            return alert('Пользователь с таким именем уже существует.');
        }

        const newUser = sanitizeUser({
            name: name,
            password: pass,
            description: '',
            avatar: null,
            xp: 0,
            activeWorkout: [],
            completedWorkouts: []
        });

        users.push(newUser);
        localStorage.setItem('formaRostaUsers', JSON.stringify(users));
        currentUser = newUser;
        localStorage.setItem('formaRostaSession', JSON.stringify(newUser));

        modal.classList.add('hidden');
        registerForm.reset();
        updateUIForUser();
        renderAll();
        showToast('Добро пожаловать, ' + name + '!');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('loginName').value.trim();
        const pass = document.getElementById('loginPass').value;

        if (!name || !pass) return alert('Заполни все поля');

        const users = JSON.parse(localStorage.getItem('formaRostaUsers') || '[]');
        const user = users.find(u => u.name.toLowerCase() === name.toLowerCase() && u.password === pass);

        if (!user) return alert('Неверное имя или пароль.');

        currentUser = sanitizeUser(user);
        localStorage.setItem('formaRostaSession', JSON.stringify(currentUser));

        modal.classList.add('hidden');
        loginForm.reset();
        updateUIForUser();
        renderAll();
        showToast('С возвращением, ' + currentUser.name + '!');
    });
}

function setupProfileModal() {
    const modal = document.getElementById('profileModal');
    const openBtn = document.getElementById('editProfileBtn');
    const closeBtn = document.getElementById('closeProfileModal');
    const form = document.getElementById('profileForm');
    const deleteBtn = document.getElementById('deleteAccountBtn');

    openBtn.addEventListener('click', () => {
        if (!currentUser) {
            document.getElementById('authModal').classList.remove('hidden');
            return;
        }
        document.getElementById('profileName').value = currentUser.name;
        document.getElementById('profileDescription').value = currentUser.description || '';
        document.getElementById('profileCurrentPass').value = '';
        document.getElementById('profileNewPass').value = '';
        
        document.getElementById('profileLevel').textContent = getLevel(currentUser.xp);
        document.getElementById('profileXP').textContent = currentUser.xp + ' XP';
        document.getElementById('profileWorkouts').textContent = currentUser.completedWorkouts.length;

        updateProfileAvatarPreview();
    });

    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!currentUser) return;

        const newName = document.getElementById('profileName').value.trim();
        const newDescription = document.getElementById('profileDescription').value.trim();
        const currentPass = document.getElementById('profileCurrentPass').value;
        const newPass = document.getElementById('profileNewPass').value;

        if (newName.length < 2) return alert('Имя слишком короткое');
        if (currentPass !== currentUser.password) return alert('Неверный текущий пароль');
        
        if (newPass) {
            if (newPass.length < 4) return alert('Новый пароль слишком короткий');
        }

        const users = JSON.parse(localStorage.getItem('formaRostaUsers') || '[]');
        const idx = users.findIndex(u => u.name === currentUser.name);
        
        const nameTaken = users.some((u, i) => 
            u.name.toLowerCase() === newName.toLowerCase() && i !== idx
        );
        
        if (nameTaken) return alert('Это имя уже занято другим пользователем');

        currentUser.name = newName;
        currentUser.description = newDescription;
        if (newPass) currentUser.password = newPass;

        if (idx !== -1) users[idx] = currentUser;
        
        localStorage.setItem('formaRostaUsers', JSON.stringify(users));
        localStorage.setItem('formaRostaSession', JSON.stringify(currentUser));

        modal.classList.add('hidden');
        form.reset();
        updateUIForUser();
        renderAll();
        showToast('Профиль обновлён');
    });

    deleteBtn.addEventListener('click', () => {
        if (!currentUser) return;
        
        const confirmDelete = confirm(`Ты уверен, что хочешь удалить аккаунт "${currentUser.name}"?\n\nВсе данные (тренировки, XP, прогресс) будут удалены безвозвратно!`);
        
        if (confirmDelete) {
            const users = JSON.parse(localStorage.getItem('formaRostaUsers') || '[]');
            const idx = users.findIndex(u => u.name === currentUser.name);
            
            if (idx !== -1) {
                users.splice(idx, 1);
                localStorage.setItem('formaRostaUsers', JSON.stringify(users));
            }
            
            localStorage.removeItem('formaRostaSession');
            currentUser = null;
            
            modal.classList.add('hidden');
            updateUIForGuest();
            renderAll();
            showToast('Аккаунт удалён');
        }
    });
}

function setupAvatarUpload() {
    const input = document.getElementById('avatarInput');
    const removeBtn = document.getElementById('removeAvatarBtn');

    input.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file || !currentUser) return;
        if (!file.type.startsWith('image/')) return alert('Выбери изображение');
        if (file.size > 5 * 1024 * 1024) return alert('Файл слишком большой (макс 5МБ)');

        const reader = new FileReader();
        reader.onload = (event) => {
            compressImage(event.target.result, 200, 200, (compressed) => {
                currentUser.avatar = compressed;
                saveUser();
                updateProfileAvatarPreview();
                renderNavAvatar();
                showToast('Аватар обновлён');
            });
        };
        reader.readAsDataURL(file);
    });

    removeBtn.addEventListener('click', () => {
        if (!currentUser) return;
        currentUser.avatar = null;
        saveUser();
        updateProfileAvatarPreview();
        renderNavAvatar();
        showToast('Аватар удалён');
    });
}

function compressImage(dataUrl, maxWidth, maxHeight, callback) {
    const img = new Image();
    img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        if (width > height) {
            if (width > maxWidth) { height *= maxWidth / width; width = maxWidth; }
        } else {
            if (height > maxHeight) { width *= maxHeight / height; height = maxHeight; }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        callback(canvas.toDataURL('image/jpeg', 0.85));
    };
    img.src = dataUrl;
}

function updateProfileAvatarPreview() {
    const imgEl = document.getElementById('profileAvatarImg');
    const letterEl = document.getElementById('profileAvatarLetter');
    const removeBtn = document.getElementById('removeAvatarBtn');

    if (!currentUser) return;
    if (currentUser.avatar) {
        imgEl.src = currentUser.avatar;
        imgEl.classList.remove('hidden');
        letterEl.classList.add('hidden');
        removeBtn.classList.remove('hidden');
    } else {
        imgEl.classList.add('hidden');
        letterEl.textContent = currentUser.name.charAt(0).toUpperCase();
        letterEl.classList.remove('hidden');
        removeBtn.classList.add('hidden');
    }
}

function renderAll() {
    renderExercises();
    renderPrograms();
    renderActiveWorkout();
    renderRating();
}

function setupSearch() {
    document.getElementById('exerciseSearch').addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderExercises();
    });
}

function setupFilters() {
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentFilter = chip.dataset.filter;
            renderExercises();
        });
    });
}

function renderExercises() {
    const grid = document.getElementById('exercisesGrid');
    grid.innerHTML = '';

    let filtered = exercisesDB;
    if (currentFilter !== 'all') filtered = filtered.filter(ex => ex.muscle === currentFilter);
    if (currentSearch) {
        filtered = filtered.filter(ex =>
            ex.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
            ex.muscle.toLowerCase().includes(currentSearch.toLowerCase())
        );
    }

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="color:rgba(255,255,255,0.5); grid-column:1/-1; text-align:center; padding:40px;">Ничего не найдено</p>';
        return;
    }

    filtered.forEach(ex => {
        const isAdded = currentUser && Array.isArray(currentUser.activeWorkout) && currentUser.activeWorkout.some(w => w.id === ex.id);
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${ex.img}')">
                <span class="card-badge">${ex.muscle}</span>
            </div>
            <div class="card-body">
                <h4 class="card-title">${ex.name}</h4>
                <p class="card-desc" style="color: var(--accent); font-weight: 600; margin-bottom: 12px;">${ex.recommendation}</p>
                <div style="display:flex; gap:8px; flex-wrap:wrap;">
                    <button class="btn ${isAdded ? 'btn-ghost' : 'btn-accent'} btn-sm" style="flex:1;"
                            onclick="toggleExercise(${ex.id})">
                        ${isAdded ? '<i class="ri-check-line"></i> В тренировке' : '<i class="ri-add-line"></i> Добавить'}
                    </button>
                    <a href="${ex.tutorialUrl}" target="_blank" rel="noopener noreferrer" 
                       class="btn btn-ghost btn-sm" style="flex-shrink:0; min-width:120px;">
                        <i class="ri-video-line"></i> Как делать?
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderPrograms() {
    const grid = document.getElementById('programsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';

    workoutPrograms.forEach(prog => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.cursor = 'pointer';
        card.onclick = () => loadProgram(prog.id);
        
        const exCount = prog.exerciseIds.length;
        const exNames = prog.exerciseIds.map(id => exercisesDB.find(e => e.id === id)?.name || '').filter(Boolean).join(', ');

        card.innerHTML = `
            <div class="card-body" style="padding: 24px;">
                <h4 class="card-title" style="margin-bottom: 8px;">${prog.name}</h4>
                <p class="card-desc" style="margin-bottom: 12px;">${prog.desc}</p>
                <div style="font-size: 12px; color: var(--text-soft); margin-bottom: 16px;">
                    ${exCount} упражнений: ${exNames}
                </div>
                <button class="btn btn-primary full-width btn-sm">
                    <i class="ri-play-circle-line"></i> Начать тренировку
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

window.loadProgram = function(programId) {
    if (!currentUser) {
        showToast('Нужно войти в аккаунт');
        document.getElementById('authModal').classList.remove('hidden');
        return;
    }

    const program = workoutPrograms.find(p => p.id === programId);
    if (!program) return;

    currentUser.activeWorkout = [];

    program.exerciseIds.forEach(exId => {
        const ex = exercisesDB.find(e => e.id === exId);
        if (ex) {
            currentUser.activeWorkout.push({ 
                ...ex, 
                addedAt: Date.now(),
                userRecommendation: ex.recommendation
            });
        }
    });

    saveUser();
    renderExercises();
    renderActiveWorkout();
    showToast(`Программа «${program.name}» загружена!`);
    
    setTimeout(() => {
        document.getElementById('active-workout').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
};

window.toggleExercise = function(id) {
    if (!currentUser) {
        showToast('Нужно войти в аккаунт');
        document.getElementById('authModal').classList.remove('hidden');
        return;
    }

    if (!Array.isArray(currentUser.activeWorkout)) {
        currentUser.activeWorkout = [];
    }

    const idx = currentUser.activeWorkout.findIndex(e => e.id === id);
    const ex = exercisesDB.find(e => e.id === id);

    if (idx === -1) {
        currentUser.activeWorkout.push({ 
            ...ex, 
            addedAt: Date.now(),
            userRecommendation: ex.recommendation
        });
        showToast('«' + ex.name + '» добавлено');
    } else {
        currentUser.activeWorkout.splice(idx, 1);
        showToast('«' + ex.name + '» убрано');
    }

    saveUser();
    renderExercises();
    renderActiveWorkout();
};

function renderActiveWorkout() {
    const list = document.getElementById('activeWorkoutList');
    const actions = document.getElementById('workoutActions');
    const count = document.getElementById('activeCount');

    if (!currentUser || !Array.isArray(currentUser.activeWorkout) || currentUser.activeWorkout.length === 0) {
        count.textContent = currentUser ? '0 упражнений' : 'Войди, чтобы начать';
        actions.style.display = 'none';
        list.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon"><i class="ri-dumbbell-line"></i></div>
                <h3>${currentUser ? 'Пока пусто' : 'Нужно войти'}</h3>
                <p>${currentUser ? 'Добавь упражнения из каталога или выбери готовую программу' : 'Зарегистрируйся, чтобы создавать тренировки'}</p>
            </div>
        `;
        return;
    }

    count.textContent = currentUser.activeWorkout.length + ' упражнений';
    actions.style.display = 'flex';
    list.innerHTML = '';

    currentUser.activeWorkout.forEach((ex, i) => {
        const item = document.createElement('div');
        item.className = 'active-item';
        item.innerHTML = `
            <div class="active-item-info" style="flex: 1;">
                <h4>${ex.name}</h4>
                <p>${ex.muscle}</p>
                <div class="set-inputs" style="margin-top: 8px;">
                    <input type="text" class="set-input" value="${ex.userRecommendation || ex.recommendation}" 
                           placeholder="Подходы и время" 
                           style="width: 100%; text-align: left;"
                           onchange="updateWorkoutParam(${i}, 'userRecommendation', this.value)">
                </div>
            </div>
            <button class="btn btn-ghost btn-sm" onclick="removeFromActive(${i})" style="align-self: flex-start; margin-top: 8px; margin-left: 12px;">
                <i class="ri-delete-bin-line"></i>
            </button>
        `;
        list.appendChild(item);
    });
}

window.updateWorkoutParam = function(index, param, value) {
    if (!currentUser || !currentUser.activeWorkout[index]) return;
    currentUser.activeWorkout[index][param] = value;
};

window.removeFromActive = function(i) {
    if (!currentUser || !Array.isArray(currentUser.activeWorkout)) return;
    const ex = currentUser.activeWorkout[i];
    currentUser.activeWorkout.splice(i, 1);
    saveUser();
    renderExercises();
    renderActiveWorkout();
    showToast('«' + ex.name + '» удалено');
};

window.clearActiveWorkout = function() {
    if (!currentUser) return;
    if (confirm('Очистить всю тренировку?')) {
        currentUser.activeWorkout = [];
        saveUser();
        renderExercises();
        renderActiveWorkout();
        showToast('Тренировка очищена');
    }
};

window.finishWorkout = function() {
    if (!currentUser || !Array.isArray(currentUser.activeWorkout) || currentUser.activeWorkout.length === 0) {
        showToast('Добавь хотя бы одно упражнение');
        return;
    }

    const now = new Date();
    const exerciseCount = currentUser.activeWorkout.length;
    const earnedXP = exerciseCount * 100;

    const workout = {
        id: Date.now(),
        date: now.toLocaleDateString('ru-RU'),
        timestamp: now.getTime(),
        count: exerciseCount,
        xpEarned: earnedXP,
        exercises: [...currentUser.activeWorkout]
    };

    if (!Array.isArray(currentUser.completedWorkouts)) {
        currentUser.completedWorkouts = [];
    }

    currentUser.completedWorkouts.unshift(workout);
    currentUser.xp += earnedXP;
    currentUser.activeWorkout = [];

    saveUser();
    renderAll();
    showToast(`Тренировка завершена! +${earnedXP} XP (${exerciseCount} упр.)`);
};

function renderRating() {
    const tbody = document.getElementById('ratingTableBody');
    const empty = document.getElementById('emptyRating');
    const users = JSON.parse(localStorage.getItem('formaRostaUsers') || '[]');

    if (users.length === 0) {
        tbody.innerHTML = '';
        empty.classList.remove('hidden');
        return;
    }

    empty.classList.add('hidden');
    const sorted = [...users].sort((a, b) => b.xp - a.xp);
    tbody.innerHTML = '';

    sorted.forEach((u, i) => {
        const isMe = currentUser && currentUser.name === u.name;
        let avatarHtml;
        if (u.avatar) {
            avatarHtml = '<img src="' + u.avatar + '" style="width:28px;height:28px;border-radius:50%;object-fit:cover;margin-right:10px;vertical-align:middle;">';
        } else {
            avatarHtml = '<span style="display:inline-flex;width:28px;height:28px;border-radius:50%;background:var(--accent);color:var(--text);align-items:center;justify-content:center;font-weight:800;font-size:12px;margin-right:10px;vertical-align:middle;text-transform:uppercase;">' + u.name.charAt(0) + '</span>';
        }

        const tr = document.createElement('tr');
        if (isMe) tr.className = 'current-user-row';
        tr.innerHTML = `
            <td><strong style="color:${i === 0 ? '#FFD700' : i === 1 ? '#C0C0C0' : i === 2 ? '#CD7F32' : 'inherit'};">#${i + 1}</strong></td>
            <td style="font-weight:700; color:${isMe ? 'var(--accent)' : 'white'};">
                ${avatarHtml}${u.name} ${isMe ? '<span style="font-size:11px; opacity:0.6;">(Вы)</span>' : ''}
            </td>
            <td>${getLevel(u.xp)}</td>
            <td><strong>${u.xp} XP</strong></td>
        `;
        tbody.appendChild(tr);
    });
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = msg;
    toast.classList.remove('hidden');
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => toast.classList.add('hidden'), 3000);
}