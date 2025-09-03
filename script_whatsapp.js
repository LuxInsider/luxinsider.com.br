// Smooth scrolling para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 26, 46, 0.98)';
    } else {
        header.style.background = 'rgba(26, 26, 46, 0.95)';
    }
});

// Form submission com integração ao WhatsApp
document.querySelector('.form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const button = this.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    // Coletar dados do formulário
    const formData = {
        name: this.querySelector('input[placeholder="Seu Nome Real"]').value.trim(),
        email: this.querySelector('input[placeholder="Email Imperial"]').value.trim(),
        phone: this.querySelector('input[placeholder="Telefone VIP"]').value.trim(),
        service: this.querySelector('select').value,
        message: this.querySelector('textarea').value.trim()
    };
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Validação de email básica
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Por favor, insira um email válido.');
        return;
    }
    
    // Atualizar botão para estado de carregamento
    button.textContent = 'Preparando WhatsApp...';
    button.disabled = true;
    
    // Formatar mensagem para WhatsApp
    const whatsappMessage = `🏰 *SOLICITAÇÃO DE ATENDIMENTO REAL - LUX INSIDER*
👑 *Tecnologia a Nível de Realeza*

📋 *DADOS DO CLIENTE:*
👤 *Nome:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Telefone:* ${formData.phone}
🔧 *Serviço:* ${formData.service}

💬 *DESCRIÇÃO DO PROBLEMA:*
${formData.message}

---
✨ Enviado através do site oficial da Lux Insider
🌐 www.luxinsider.com.br`;
    
    // Número do WhatsApp da Lux Insider
    const whatsappNumber = '5511974272013';
    
    // Criar URL do WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Simular um pequeno delay para dar feedback visual
    setTimeout(() => {
        // Abrir WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Atualizar botão para sucesso
        button.textContent = 'WhatsApp Aberto! ✓';
        button.style.background = 'linear-gradient(135deg, #25D366, #128C7E)';
        
        // Mostrar mensagem de sucesso
        alert('WhatsApp aberto com sua mensagem! Complete o envio no WhatsApp para finalizar sua solicitação.');
        
        // Resetar formulário após 5 segundos
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.style.background = '';
            this.reset();
        }, 5000);
    }, 1500);
});

// Parallax effect for hero background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .differential-item, .gallery-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

// Add mobile menu button functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu button if screen is small
    if (window.innerWidth <= 768) {
        const header = document.querySelector('.header .container');
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.innerHTML = '☰';
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.style.cssText = `
            display: block;
            background: none;
            border: none;
            color: var(--gold-primary);
            font-size: 1.5rem;
            cursor: pointer;
            padding: 10px;
        `;
        
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        header.appendChild(mobileMenuBtn);
    }
});

// Resize handler
window.addEventListener('resize', function() {
    // Handle responsive changes if needed
    if (window.innerWidth > 768) {
        const nav = document.querySelector('.nav');
        nav.classList.remove('active');
    }
});

// Add some royal sparkle effects
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: var(--gold-primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: sparkleAnimation 2s ease-out forwards;
    `;
    
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// Add sparkle animation CSS
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleAnimation {
        0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Create sparkles periodically
setInterval(createSparkle, 3000);

console.log('🏰 Lux Insider - Tecnologia a Nível de Realeza carregada com sucesso! 👑');
console.log('📱 WhatsApp Integration: +55 11 97427-2013');
