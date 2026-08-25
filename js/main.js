const navToggle = document.querySelector(".nav-toggle");
const mainNavigation = document.querySelector("#main-navigation");

if (navToggle && mainNavigation) {
    const closeMenu = () => {
        navToggle.setAttribute("aria-expanded", "false");
        mainNavigation.classList.remove("is-open");
        navToggle.querySelector(".sr-only").textContent = "Abrir menu";
    };

    navToggle.addEventListener("click", () => {
        const isOpen = navToggle.getAttribute("aria-expanded") === "true";

        navToggle.setAttribute("aria-expanded", String(!isOpen));
        mainNavigation.classList.toggle("is-open", !isOpen);
        navToggle.querySelector(".sr-only").textContent = isOpen
            ? "Abrir menu"
            : "Fechar menu";
    });

    mainNavigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}

const hero = document.querySelector("#inicio");
const sparksCanvas = document.querySelector(".hero-sparks");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (hero && sparksCanvas && !reduceMotion.matches) {
    const context = sparksCanvas.getContext("2d");
    const particles = [];
    let width = 0;
    let height = 0;
    let lastTime = performance.now();
    let spawnTimer = 0;

    const resizeCanvas = () => {
        const bounds = hero.getBoundingClientRect();
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

        width = bounds.width;
        height = bounds.height;
        sparksCanvas.width = Math.floor(width * pixelRatio);
        sparksCanvas.height = Math.floor(height * pixelRatio);
        sparksCanvas.style.width = `${width}px`;
        sparksCanvas.style.height = `${height}px`;
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const createParticle = () => {
        const colors = ["#f8d28b", "#f0a04b", "#e36b32", "#fff1c7"];

        return {
            x: width * (0.18 + Math.random() * 0.68),
            y: height * (0.82 + Math.random() * 0.1),
            previousX: 0,
            previousY: 0,
            velocityX: (Math.random() - 0.5) * 24,
            velocityY: -(62 + Math.random() * 92),
            gravity: 28 + Math.random() * 24,
            wind: (Math.random() - 0.5) * 14,
            phase: Math.random() * Math.PI * 2,
            life: 1.1 + Math.random() * 1.2,
            age: 0,
            size: 0.8 + Math.random() * 1.5,
            color: colors[Math.floor(Math.random() * colors.length)]
        };
    };

    const animateSparks = (currentTime) => {
        const delta = Math.min((currentTime - lastTime) / 1000, 0.033);

        lastTime = currentTime;
        spawnTimer += delta;

        while (spawnTimer > 0.065) {
            if (particles.length < 72) {
                particles.push(createParticle());
            }
            spawnTimer -= 0.065;
        }

        context.clearRect(0, 0, width, height);
        context.globalCompositeOperation = "lighter";

        for (let index = particles.length - 1; index >= 0; index -= 1) {
            const particle = particles[index];

            particle.previousX = particle.x;
            particle.previousY = particle.y;
            particle.age += delta;
            particle.velocityY += particle.gravity * delta;
            particle.velocityX += particle.wind * delta;
            particle.x += particle.velocityX * delta;
            particle.y += particle.velocityY * delta;

            if (particle.age >= particle.life) {
                particles.splice(index, 1);
                continue;
            }

            const lifeProgress = particle.age / particle.life;
            const fade = Math.sin(Math.PI * lifeProgress);
            const flicker = 0.82 + Math.sin(currentTime * 0.018 + particle.phase) * 0.18;

            context.globalAlpha = fade * flicker;
            context.strokeStyle = particle.color;
            context.fillStyle = particle.color;
            context.lineWidth = Math.max(0.7, particle.size * 0.7);
            context.beginPath();
            context.moveTo(particle.previousX, particle.previousY);
            context.lineTo(particle.x, particle.y);
            context.stroke();
            context.beginPath();
            context.arc(particle.x, particle.y, particle.size * 0.72, 0, Math.PI * 2);
            context.fill();
        }

        context.globalAlpha = 1;
        window.requestAnimationFrame(animateSparks);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });
    window.requestAnimationFrame(animateSparks);
}
