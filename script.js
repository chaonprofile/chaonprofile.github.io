// 전체 이미지 데이터 배열
const imageData = {
    general: [
        { src: "차온 에셋 공용/amusement_park_carousel.jpg", title: "놀이공원 회전목마" },
        { src: "차온 에셋 공용/amusement_park_ferris_wheel.jpg", title: "놀이공원 관람차" },
        { src: "차온 에셋 공용/amusement_park_selfie.jpg", title: "놀이공원에서 셀피" },
        { src: "차온 에셋 공용/arcade_game.jpg", title: "아케이드 게임" },
        { src: "차온 에셋 공용/awkward_cooking.jpg", title: "어색한 요리" },
        { src: "차온 에셋 공용/begging_for_hug_affectionately.jpg", title: "애정어린 포옹을 구하기" },
        { src: "차온 에셋 공용/begging_to_buy_one.jpg", title: "하나 사달라고 졸라매기" },
        { src: "차온 에셋 공용/biting_strawberry.jpg", title: "딸기 베어물기" },
        { src: "차온 에셋 공용/blooming_progress_in_shower.jpg", title: "샤워 중 개화 진행" },
        { src: "차온 에셋 공용/cat_ear_beanie.jpg", title: "고양이귀 비니" },
        { src: "차온 에셋 공용/cat_ear_hat_with_mask.jpg", title: "마스크와 고양이귀 모자" },
        { src: "차온 에셋 공용/cherry_blossom_spirit_looking_outside.jpg", title: "창밖을 바라보는 벚꽃의 정령" },
        { src: "차온 에셋 공용/coming_out_after_shower.jpg", title: "샤워 후 나오기" },
        { src: "차온 에셋 공용/cooking_wearing_apron.jpg", title: "앞치마 입고 요리하기" },
        { src: "차온 에셋 공용/covering_with_umbrella_in_rain.jpg", title: "비 오는 날 우산으로 가리기" },
        { src: "차온 에셋 공용/crying_sadly.jpg", title: "슬프게 울기" },
        { src: "차온 에셋 공용/deepening_kiss.jpg", title: "깊어지는 키스" },
        { src: "차온 에셋 공용/drinking_strawberry_beverage.jpg", title: "딸기 음료 마시기" },
        { src: "차온 에셋 공용/eating_at_home.jpg", title: "집에서 식사하기" },
        { src: "차온 에셋 공용/eating_outside.jpg", title: "밖에서 식사하기" },
        { src: "차온 에셋 공용/embarrassed_but_pretending_not.jpg", title: "부끄러워하지만 아닌 척하기" },
        { src: "차온 에셋 공용/exploring_kiss.jpg", title: "탐색적인 키스" },
        { src: "차온 에셋 공용/feeling_sick.jpg", title: "몸이 아픈 상태" },
        { src: "차온 에셋 공용/fireworks.jpg", title: "불꽃놀이" },
        { src: "차온 에셋 공용/grumbling_with_mask.jpg", title: "마스크 쓰고 투덜거리기" },
        { src: "차온 에셋 공용/holding_back_shyly_saying_dont_go.jpg", title: "수줍게 가지 말라고 붙잡기" },
        { src: "차온 에셋 공용/humanized_cherry_blossom_spirit.jpg", title: "인간화된 벚꽃의 정령" },
        { src: "차온 에셋 공용/jealousy.jpg", title: "질투하는 모습" },
        { src: "차온 에셋 공용/laughing_sincerely.jpg", title: "진심으로 웃기" },
        { src: "차온 에셋 공용/leaning_against_cherry_tree.jpg", title: "벚나무에 기대어 있기" },
        { src: "차온 에셋 공용/lifting_and_kissing.jpg", title: "들어올리고 키스하기" },
        { src: "차온 에셋 공용/looking_at_you_instead_of_fireworks.jpg", title: "불꽃놀이 대신 당신을 바라보기" },
        { src: "차온 에셋 공용/looking_outside_from_bathtub.jpg", title: "욕조에서 창밖 바라보기" },
        { src: "차온 에셋 공용/lying_in_flower_field.jpg", title: "꽃밭에 누워있기" },
        { src: "차온 에셋 공용/mart_item_that_catches_eye.jpg", title: "마트에서 눈에 띄는 물건" },
        { src: "차온 에셋 공용/napping_on_sofa.jpg", title: "소파에서 낮잠" },
        { src: "차온 에셋 공용/napping_under_cherry_tree.jpg", title: "벚나무 아래서 낮잠" },
        { src: "차온 에셋 공용/night_walk.jpg", title: "밤 산책" },
        { src: "차온 에셋 공용/not_knowing_how_to_pay.jpg", title: "결제 방법을 모르는 상태" },
        { src: "차온 에셋 공용/overfit_big_shirt.jpg", title: "큰 셔츠 착용" },
        { src: "차온 에셋 공용/pain_of_blooming_curse.jpg", title: "개화 저주의 고통" },
        { src: "차온 에셋 공용/pretending_okay_despite_pain.jpg", title: "고통스럽지만 괜찮은 척하기" },
        { src: "차온 에셋 공용/resting_under_cherry_tree.jpg", title: "벚나무 아래에서 휴식" },
        { src: "차온 에셋 공용/scoffing_or_teasing.jpg", title: "비웃거나 놀리기" },
        { src: "차온 에셋 공용/shopping_at_mart.jpg", title: "마트에서 쇼핑하기" },
        { src: "차온 에셋 공용/showing_curse_of_blooming.jpg", title: "개화의 저주 보여주기" },
        { src: "차온 에셋 공용/sleeping_on_bed.jpg", title: "침대에서 잠자기" },
        { src: "차온 에셋 공용/soaking_in_bathtub.jpg", title: "욕조에 몸 담그기" },
        { src: "차온 에셋 공용/taking_a_shower.jpg", title: "샤워하기" },
        { src: "차온 에셋 공용/taking_off_pants.jpg", title: "바지 벗기" },
        { src: "차온 에셋 공용/tears.jpg", title: "눈물" },
        { src: "차온 에셋 공용/transform_into_human.jpg", title: "인간으로 변신" },
        { src: "차온 에셋 공용/true_feelings_slip_out_while_in_pain.jpg", title: "고통 중 진심이 흘러나오기" },
        { src: "차온 에셋 공용/trying_service_maid_outfit.jpg", title: "메이드복 입어보기" },
        { src: "차온 에셋 공용/walking_in_rainy_street.jpg", title: "비 오는 거리 걷기" }
    ],
    nsfw: [
        { src: "차온 에셋 공용/masturbation_arousal.jpg", title: "자위 - 흥분" },
        { src: "차온 에셋 공용/masturbation_ejaculation.jpg", title: "자위 - 사정" },
        { src: "차온 에셋 공용/masturbation_start.jpg", title: "자위 - 시작" },
        { src: "차온 에셋 공용/nsfw_cunnilingus_oral.jpg", title: "구강 성교" },
        { src: "차온 에셋 공용/nsfw_doggy_penetration.jpg", title: "후배위 성교" },
        { src: "차온 에셋 공용/nsfw_missionary_sex.jpg", title: "정상위 성교" },
        { src: "차온 에셋 공용/orgasm.jpg", title: "오르가즘" },
        { src: "차온 에셋 BL [수]/BL_nsfw_doggy_penetrated_pose.jpg", title: "BL - 후배위로 당하는 자세" },
        { src: "차온 에셋 BL [수]/BL_nsfw_penetrated_by_cock.jpg", title: "BL - 삽입당하는 모습" }
    ]
};

// DOM 요소들
let currentImageIndex = 0;
let currentCategory = 'all';
let currentImages = [];

// 로딩 화면 제어
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('fade-out');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 800);
}

// 햄버거 메뉴 토글
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!hamburger || !mobileMenu) {
        console.error('햄버거 메뉴 요소를 찾을 수 없습니다.');
        return;
    }
    
    hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('햄버거 메뉴 클릭됨');
        
        const isActive = mobileMenu.classList.contains('active');
        
        if (isActive) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
        } else {
            mobileMenu.classList.add('active');
            hamburger.classList.add('active');
        }
    });
    
    // 모바일 메뉴 링크 클릭 시 메뉴 닫기
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log('모바일 링크 클릭됨');
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // 외부 클릭 시 메뉴 닫기
    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('active') && 
            !hamburger.contains(e.target) && 
            !mobileMenu.contains(e.target)) {
            console.log('외부 클릭으로 메뉴 닫기');
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// 배경음악 제어
function initMusicControl() {
    const musicToggle = document.getElementById('music-toggle');
    const bgm = document.getElementById('bgm');
    const playIcon = musicToggle.querySelector('.play-icon');
    const pauseIcon = musicToggle.querySelector('.pause-icon');
    let isPlaying = false;
    
    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            bgm.pause();
            musicToggle.classList.remove('playing');
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            isPlaying = false;
        } else {
            // 사용자 제스처 후에 재생 시작
            bgm.play().then(() => {
                musicToggle.classList.add('playing');
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'block';
                isPlaying = true;
            }).catch((error) => {
                console.log('음악 재생 실패:', error);
            });
        }
    });
    
    // 음악 종료 시 버튼 상태 리셋
    bgm.addEventListener('ended', () => {
        isPlaying = false;
        musicToggle.classList.remove('playing');
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    });
}

// 벚꽃잎 애니메이션
function createCherryBlossoms() {
    const container = document.getElementById('cherry-blossoms');
    const petalCount = 15;
    
    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'cherry-petal';
        
        // 랜덤 시작 위치와 애니메이션 지속시간
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (Math.random() * 3 + 5) + 's';
        petal.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(petal);
        
        // 애니메이션 완료 후 제거
        petal.addEventListener('animationend', () => {
            petal.remove();
        });
    }
    
    // 주기적으로 벚꽃잎 생성
    setInterval(createPetal, 3000);
    
    // 초기 벚꽃잎 생성
    for (let i = 0; i < petalCount; i++) {
        setTimeout(createPetal, i * 200);
    }
}

// 갤러리 초기화
function initGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    const galleryTabs = document.querySelectorAll('.gallery-tab');
    const modal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const modalClose = document.getElementById('modal-close');
    const modalPrev = document.getElementById('modal-prev');
    const modalNext = document.getElementById('modal-next');
    
    // 갤러리 탭 이벤트
    galleryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            galleryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            displayGalleryImages();
        });
    });
    
    // 이미지 표시 함수
    function displayGalleryImages() {
        galleryGrid.innerHTML = '';
        
        let imagesToShow = [];
        if (currentCategory === 'all') {
            imagesToShow = [...imageData.general, ...imageData.nsfw];
        } else if (currentCategory === 'general') {
            imagesToShow = imageData.general;
        } else if (currentCategory === 'nsfw') {
            imagesToShow = imageData.nsfw;
        }
        
        currentImages = imagesToShow;
        
        imagesToShow.forEach((image, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${image.src}" alt="${image.title}" loading="lazy">
                <div class="gallery-overlay">
                    <span>👁</span>
                </div>
            `;
            
            galleryItem.addEventListener('click', () => openModal(index));
            galleryGrid.appendChild(galleryItem);
        });
    }
    
    // 모달 열기
    function openModal(index) {
        currentImageIndex = index;
        updateModalImage();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    // 모달 이미지 업데이트
    function updateModalImage() {
        const image = currentImages[currentImageIndex];
        modalImage.src = image.src;
        modalImage.alt = image.title;
        modalCaption.textContent = image.title;
    }
    
    // 모달 닫기
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // 이전/다음 이미지
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
        updateModalImage();
    }
    
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % currentImages.length;
        updateModalImage();
    }
    
    // 모달 이벤트 리스너
    modalClose.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', prevImage);
    modalNext.addEventListener('click', nextImage);
    
    // 모달 바깥영역 클릭 시 닫기
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // 키보드 네비게이션
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'block') {
            switch (e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
            }
        }
    });
    
    // 초기 갤러리 표시
    displayGalleryImages();
}

// 부드러운 스크롤 네비게이션
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // 헤더 높이 고려
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 스크롤 애니메이션
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // 애니메이션 적용할 요소들 관찰
    const animateElements = document.querySelectorAll('.profile-card, .hero-text, .hero-image');
    animateElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// 헤더 스크롤 효과
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(255, 182, 193, 0.3)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        // 스크롤 방향에 따른 헤더 숨김/표시 (모바일에서만)
        if (window.innerWidth <= 768) {
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        }
        
        lastScrollY = currentScrollY;
    });
}

// 모바일 뷰포트 높이 조정
function initMobileViewport() {
    function setVH() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', () => {
        setTimeout(setVH, 100);
    });
}

// 터치 이벤트 최적화 (모바일)
function initTouchOptimization() {
    // 더블탭 줌 방지만 유지 (bounce 효과 방지 제거)
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            // 햄버거 메뉴나 중요한 버튼이 아닌 경우에만 preventDefault
            if (!e.target.closest('.hamburger, .music-btn, .nav-link, .download-btn')) {
                e.preventDefault();
            }
        }
        lastTouchEnd = now;
    }, { passive: false });
}

// 이미지 지연 로딩
function initLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('loading');
                observer.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.classList.add('loading');
        imageObserver.observe(img);
    });
}

// 성능 최적화
function initPerformanceOptimizations() {
    // Passive event listeners
    window.addEventListener('scroll', () => {}, { passive: true });
    window.addEventListener('touchmove', () => {}, { passive: true });
    
    // 리소스 힌트 추가
    const linkPreload = document.createElement('link');
    linkPreload.rel = 'preload';
    linkPreload.href = '차온 썸네일.png';
    linkPreload.as = 'image';
    document.head.appendChild(linkPreload);
    
    // Critical CSS inlined, non-critical CSS loaded async
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            initScrollAnimations();
            createCherryBlossoms();
        });
    } else {
        setTimeout(() => {
            initScrollAnimations();
            createCherryBlossoms();
        }, 100);
    }
}

// 접근성 개선
function initAccessibility() {
    // 키보드 네비게이션 표시
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // ARIA labels 동적 업데이트
    const musicButton = document.getElementById('music-toggle');
    musicButton.setAttribute('aria-label', '배경음악 재생/정지');
    
    // 고대비 모드 감지
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    // 애니메이션 감소 모드 감지
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
    }
}

// 오류 처리
function initErrorHandling() {
    // 이미지 로딩 실패 시 대체 이미지 표시
    document.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            e.target.style.display = 'none';
            console.warn('이미지 로딩 실패:', e.target.src);
        }
    }, true);
    
    // 음악 로딩 실패 처리
    const bgm = document.getElementById('bgm');
    bgm.addEventListener('error', () => {
        const musicControl = document.getElementById('music-control');
        musicControl.style.display = 'none';
        console.warn('배경음악 로딩 실패');
    });
}

// 메인 초기화 함수
function init() {
    // 기본 기능 초기화
    initHamburgerMenu();
    initMusicControl();
    initGallery();
    initSmoothScroll();
    initHeaderScroll();
    initMobileViewport();
    initTouchOptimization();
    initLazyLoading();
    initAccessibility();
    initErrorHandling();
    
    // 성능 최적화된 기능들
    initPerformanceOptimizations();
    
    // 로딩 완료 후 로딩 화면 숨기기
    setTimeout(hideLoadingScreen, 1000);
}

// DOM 로딩 완료 후 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// 브라우저 호환성을 위한 폴리필
if (!window.IntersectionObserver) {
    // IntersectionObserver 폴리필 (필요시)
    console.warn('IntersectionObserver를 지원하지 않는 브라우저입니다.');
    // 대체 구현 또는 폴리필 로드
}

// PWA 지원을 위한 Service Worker 등록 (선택사항)
// GitHub Pages에서는 sw.js 파일이 없으므로 주석 처리
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('Service Worker 등록됨'))
            .catch(() => console.log('Service Worker 등록 실패'));
    });
}
*/

// 디버그 모드 (개발용)
const DEBUG = false;
if (DEBUG) {
    console.log('디버그 모드 활성화');
    window.imageData = imageData;
    window.currentImages = currentImages;
} 