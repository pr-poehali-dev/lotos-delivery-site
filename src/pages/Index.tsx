import { useState } from "react";
import Icon from "@/components/ui/icon";

const SUSHI_IMG = "https://cdn.poehali.dev/projects/49e88e47-7ec2-4e1f-ae72-385afe175080/files/fb2994ad-00b6-46ed-b120-8e8bef42ea4f.jpg";
const PIZZA_IMG = "https://cdn.poehali.dev/projects/49e88e47-7ec2-4e1f-ae72-385afe175080/files/e12079cd-51ec-4f16-a323-2ec92d8ecdf5.jpg";
const SNACKS_IMG = "https://cdn.poehali.dev/projects/49e88e47-7ec2-4e1f-ae72-385afe175080/files/4f1f366f-5977-47bf-9ba6-89ee58e60f5c.jpg";

const menuCategories = [
  { id: "rolls", label: "Роллы", emoji: "🍣" },
  { id: "pizza", label: "Пицца", emoji: "🍕" },
  { id: "snacks", label: "Закуски", emoji: "🥟" },
  { id: "drinks", label: "Напитки", emoji: "🥤" },
  { id: "desserts", label: "Десерты", emoji: "🍮" },
  { id: "sauces", label: "Соусы", emoji: "🫙" },
];

const menuItems = {
  rolls: [
    { name: "Лосось Классик", desc: "Нори, рис, огурец, лосось, сыр Филадельфия", price: 420, img: SUSHI_IMG, badge: "Хит" },
    { name: "Дракон", desc: "Угорь, авокадо, огурец, тигровая креветка", price: 520, img: SUSHI_IMG, badge: "Острый" },
    { name: "Радуга", desc: "Ассорти рыбы, авокадо, огурец, сыр", price: 580, img: SUSHI_IMG, badge: null },
    { name: "Запечённый Лосось", desc: "Лосось, сыр, запечённый соус, масаго", price: 490, img: SUSHI_IMG, badge: "Новинка" },
    { name: "Спайси Тунец", desc: "Тунец, огурец, спайси соус, кунжут", price: 460, img: SUSHI_IMG, badge: "Острый" },
    { name: "Том Ям Ролл", desc: "Креветки, кокосовый соус, лайм, чили", price: 540, img: SUSHI_IMG, badge: null },
  ],
  pizza: [
    { name: "Маргарита", desc: "Томатный соус, моцарелла, базилик", price: 380, img: PIZZA_IMG, badge: null },
    { name: "Пепперони", desc: "Томатный соус, пепперони, моцарелла", price: 450, img: PIZZA_IMG, badge: "Хит" },
    { name: "Четыре сыра", desc: "Моцарелла, пармезан, горгонзола, чеддер", price: 520, img: PIZZA_IMG, badge: null },
    { name: "Гавайская", desc: "Ветчина, ананас, моцарелла, томат", price: 430, img: PIZZA_IMG, badge: null },
    { name: "Морская", desc: "Морепродукты, сливочный соус, моцарелла", price: 580, img: PIZZA_IMG, badge: "Новинка" },
    { name: "Барбекю", desc: "Курица, бекон, лук, соус BBQ", price: 490, img: PIZZA_IMG, badge: null },
  ],
  snacks: [
    { name: "Эдамаме", desc: "Варёные бобы эдамаме с морской солью", price: 180, img: SNACKS_IMG, badge: null },
    { name: "Гёдза", desc: "Жареные пельмени с свининой и капустой", price: 290, img: SNACKS_IMG, badge: "Хит" },
    { name: "Темпура", desc: "Овощи и креветки в хрустящем кляре", price: 350, img: SNACKS_IMG, badge: null },
    { name: "Чипсы Нори", desc: "Хрустящие морские водоросли с кунжутом", price: 150, img: SNACKS_IMG, badge: null },
  ],
  drinks: [
    { name: "Зелёный чай", desc: "Японский зелёный чай Сенча, 500мл", price: 120, img: SNACKS_IMG, badge: null },
    { name: "Матча Латте", desc: "Матча, молоко, сироп, 400мл", price: 220, img: SNACKS_IMG, badge: "Новинка" },
    { name: "Кола / Спрайт", desc: "Газированный напиток, 0.5л", price: 90, img: SNACKS_IMG, badge: null },
    { name: "Сок апельсин", desc: "Натуральный апельсиновый сок, 0.3л", price: 130, img: SNACKS_IMG, badge: null },
  ],
  desserts: [
    { name: "Моти мороженое", desc: "Рисовые шарики с мороженым, 3 шт", price: 280, img: SNACKS_IMG, badge: "Хит" },
    { name: "Чизкейк", desc: "Нью-Йоркский чизкейк с ягодным соусом", price: 250, img: SNACKS_IMG, badge: null },
    { name: "Тирамису", desc: "Классический итальянский десерт", price: 270, img: SNACKS_IMG, badge: null },
  ],
  sauces: [
    { name: "Соевый соус", desc: "Классический японский, 50мл", price: 50, img: SNACKS_IMG, badge: null },
    { name: "Спайси соус", desc: "Острый соус на основе чили, 50мл", price: 60, img: SNACKS_IMG, badge: "Острый" },
    { name: "Терияки", desc: "Сладко-солёный японский соус, 50мл", price: 60, img: SNACKS_IMG, badge: null },
    { name: "Унаги", desc: "Соус из угря, сладкий, 50мл", price: 70, img: SNACKS_IMG, badge: null },
  ],
};

const reviews = [
  { name: "Анна К.", text: "Заказываю роллы каждую неделю! Всегда свежие, доставка быстрая. Лосось Классик — лучший в городе!", rating: 5, date: "2 дня назад" },
  { name: "Михаил Р.", text: "Пицца Пепперони просто огонь — тонкое тесто, много начинки. Дети в восторге, буду брать ещё.", rating: 5, date: "5 дней назад" },
  { name: "Светлана Д.", text: "Привезли за 35 минут, всё горячее. Гёдза невероятные! Спасибо LOTOS за качество.", rating: 5, date: "1 неделю назад" },
  { name: "Дмитрий В.", text: "Роллы Дракон — моя слабость. Порции большие, цены адекватные. Рекомендую всем друзьям!", rating: 5, date: "2 недели назад" },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("rolls");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const addToCart = (name: string) => {
    setCart(prev => ({ ...prev, [name]: (prev[name] || 0) + 1 }));
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--lotos-dark)", color: "#F5F0EA" }}>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ background: "rgba(20,18,16,0.95)", backdropFilter: "blur(12px)", borderColor: "rgba(255,107,26,0.2)" }}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("hero")}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-display font-bold" style={{ background: "linear-gradient(135deg, #FF6B1A, #FFB800)" }}>
              L
            </div>
            <span className="font-display text-2xl font-bold tracking-widest text-gradient">LOTOS</span>
          </div>

          <div className="hidden md:flex items-center gap-7">
            {[["hero", "Главная"], ["menu", "Меню"], ["delivery", "Доставка"], ["about", "О нас"], ["reviews", "Отзывы"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="nav-link text-sm font-body" style={{ color: "#C8BFB0" }}>
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:+78007007070" className="hidden md:flex items-center gap-2 text-sm font-medium" style={{ color: "#FF6B1A" }}>
              <Icon name="Phone" size={16} />
              +7 (800) 700-70-70
            </a>
            <button
              onClick={() => scrollTo("menu")}
              className="relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{ background: "linear-gradient(135deg, #FF6B1A, #FFB800)", color: "#fff" }}
            >
              <Icon name="ShoppingCart" size={16} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold" style={{ background: "#fff", color: "#FF6B1A" }}>
                  {totalItems}
                </span>
              )}
              Корзина
            </button>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} style={{ color: "#FF6B1A" }} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 mobile-menu-open" style={{ borderTop: "1px solid rgba(255,107,26,0.2)" }}>
            {[["hero", "Главная"], ["menu", "Меню"], ["delivery", "Доставка"], ["about", "О нас"], ["reviews", "Отзывы"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="block w-full text-left py-3 text-sm border-b" style={{ color: "#C8BFB0", borderColor: "rgba(255,107,26,0.1)" }}>
                {label}
              </button>
            ))}
            <a href="tel:+78007007070" className="flex items-center gap-2 mt-3 text-sm font-medium" style={{ color: "#FF6B1A" }}>
              <Icon name="Phone" size={16} />
              +7 (800) 700-70-70
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center hero-pattern pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "radial-gradient(circle, #FF6B1A, transparent)" }} />
          <div className="absolute bottom-1/4 left-10 w-64 h-64 rounded-full opacity-8 blur-3xl" style={{ background: "radial-gradient(circle, #FFB800, transparent)" }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6" style={{ background: "rgba(255,107,26,0.15)", border: "1px solid rgba(255,107,26,0.3)", color: "#FF6B1A" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#FF6B1A" }} />
              Доставка по Кабардинке
            </div>
            <h1 className="font-display text-6xl md:text-7xl font-bold leading-none mb-4 tracking-tight">
              <span className="text-gradient">СУШИ</span>
              <br />
              <span style={{ color: "#F5F0EA" }}>И ПИЦЦА</span>
            </h1>
            <p className="text-lg mb-8 max-w-md leading-relaxed" style={{ color: "#A09080" }}>
              Свежие роллы, сочная пицца и вкусные закуски прямо к вашей двери. Готовим с любовью каждый день.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("menu")}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl font-display font-semibold text-lg tracking-wide transition-all hover:scale-105 animate-pulse-glow"
                style={{ background: "linear-gradient(135deg, #FF6B1A, #FFB800)", color: "#fff" }}
              >
                <Icon name="UtensilsCrossed" size={22} />
                Смотреть меню
              </button>
              <a
                href="tel:+78007007070"
                className="flex items-center gap-3 px-8 py-4 rounded-2xl font-display font-semibold text-lg tracking-wide transition-all hover:scale-105"
                style={{ border: "2px solid rgba(255,107,26,0.4)", color: "#FF6B1A" }}
              >
                <Icon name="Phone" size={22} />
                Позвонить
              </a>
            </div>

            <div className="flex gap-8 mt-10">
              {[["30 мин", "Доставка"], ["500+", "Заказов"], ["4.9★", "Рейтинг"]].map(([val, label]) => (
                <div key={label}>
                  <div className="font-display text-2xl font-bold text-gradient">{val}</div>
                  <div className="text-xs mt-1" style={{ color: "#806050" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 animate-float">
              <div className="absolute inset-0 rounded-full opacity-30 blur-2xl" style={{ background: "radial-gradient(circle, #FF6B1A, #FFB800)" }} />
              <img
                src={SUSHI_IMG}
                alt="Роллы LOTOS"
                className="relative z-10 w-full h-full object-cover rounded-full"
                style={{ border: "4px solid rgba(255,107,26,0.4)", boxShadow: "0 0 60px rgba(255,107,26,0.3)" }}
              />
            </div>
            <div className="absolute top-8 -left-4 px-4 py-3 rounded-2xl animate-fade-in-up" style={{ background: "rgba(255,184,0,0.15)", border: "1px solid rgba(255,184,0,0.3)", backdropFilter: "blur(10px)" }}>
              <div className="font-display font-bold" style={{ color: "#FFB800" }}>🍕 Пицца</div>
              <div className="text-xs" style={{ color: "#A09080" }}>от 380 ₽</div>
            </div>
            <div className="absolute bottom-12 -right-4 px-4 py-3 rounded-2xl" style={{ background: "rgba(255,107,26,0.15)", border: "1px solid rgba(255,107,26,0.3)", backdropFilter: "blur(10px)" }}>
              <div className="font-display font-bold" style={{ color: "#FF6B1A" }}>🍣 Роллы</div>
              <div className="text-xs" style={{ color: "#A09080" }}>от 420 ₽</div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20" style={{ background: "var(--lotos-dark2)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "#FF6B1A" }}>НАШ ВЫБОР</p>
            <h2 className="font-display text-5xl font-bold">МЕНЮ</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {menuCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl font-body font-medium text-sm transition-all"
                style={
                  activeCategory === cat.id
                    ? { background: "linear-gradient(135deg, #FF6B1A, #FFB800)", color: "#fff", transform: "scale(1.05)" }
                    : { background: "rgba(255,255,255,0.05)", color: "#A09080", border: "1px solid rgba(255,255,255,0.08)" }
                }
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems[activeCategory as keyof typeof menuItems]?.map((item) => (
              <div
                key={item.name}
                className="card-hover rounded-3xl overflow-hidden"
                style={{ background: "var(--lotos-card)", border: "1px solid rgba(255,107,26,0.1)" }}
              >
                <div className="menu-card-img h-48 relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  {item.badge && (
                    <span
                      className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        background: item.badge === "Острый" ? "#FF3B00" : item.badge === "Новинка" ? "#00C97A" : "linear-gradient(135deg, #FF6B1A, #FFB800)",
                        color: "#fff"
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold mb-1">{item.name}</h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: "#80706A" }}>{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-bold text-gradient">{item.price} ₽</span>
                    <button
                      onClick={() => addToCart(item.name)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all hover:scale-105"
                      style={
                        cart[item.name]
                          ? { background: "linear-gradient(135deg, #FF6B1A, #FFB800)", color: "#fff" }
                          : { background: "rgba(255,107,26,0.15)", color: "#FF6B1A", border: "1px solid rgba(255,107,26,0.3)" }
                      }
                    >
                      <Icon name="Plus" size={16} />
                      {cart[item.name] ? `В корзине (${cart[item.name]})` : "Добавить"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section id="delivery" className="py-20" style={{ background: "var(--lotos-dark)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "#FF6B1A" }}>КАК ЭТО РАБОТАЕТ</p>
            <h2 className="font-display text-5xl font-bold">ДОСТАВКА</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              { icon: "MapPin", title: "Зона доставки", desc: "Кабардинка и ближайшие районы", color: "#FF6B1A" },
              { icon: "Clock", title: "Время доставки", desc: "от 30 до 60 минут", color: "#FFB800" },
              { icon: "Truck", title: "Стоимость", desc: "Бесплатно от 800 ₽", color: "#FF6B1A" },
            ].map(item => (
              <div key={item.title} className="text-center p-8 rounded-3xl" style={{ background: "var(--lotos-card)", border: "1px solid rgba(255,107,26,0.1)" }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(255,107,26,0.12)" }}>
                  <Icon name={item.icon} size={28} style={{ color: item.color }} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                <p style={{ color: "#80706A" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, rgba(255,107,26,0.12), rgba(255,184,0,0.08))", border: "1px solid rgba(255,107,26,0.2)" }}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-3xl font-bold mb-4">Оформить заказ</h3>
                <p className="mb-6" style={{ color: "#A09080" }}>Позвоните нам или напишите в WhatsApp — примем заказ быстро и без ошибок.</p>
                <div className="space-y-3">
                  <a href="tel:+78007007070" className="flex items-center gap-3 text-lg font-medium" style={{ color: "#FF6B1A" }}>
                    <Icon name="Phone" size={20} />
                    +7 (800) 700-70-70
                  </a>
                  <a href="https://wa.me/78007007070" className="flex items-center gap-3 text-lg font-medium" style={{ color: "#25D366" }}>
                    <Icon name="MessageCircle" size={20} />
                    WhatsApp
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                {[["1", "Выберите блюда в меню"], ["2", "Позвоните или напишите нам"], ["3", "Ждите — привезём горячим!"]].map(([num, step]) => (
                  <div key={num} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg flex-shrink-0" style={{ background: "linear-gradient(135deg, #FF6B1A, #FFB800)", color: "#fff" }}>
                      {num}
                    </div>
                    <span className="font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20" style={{ background: "var(--lotos-dark2)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src={SUSHI_IMG} alt="Наши роллы" className="rounded-3xl w-full h-52 object-cover" style={{ border: "2px solid rgba(255,107,26,0.2)" }} />
                <img src={PIZZA_IMG} alt="Наша пицца" className="rounded-3xl w-full h-52 object-cover mt-8" style={{ border: "2px solid rgba(255,184,0,0.2)" }} />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "#FF6B1A" }}>НАШ РЕСТОРАН</p>
              <h2 className="font-display text-5xl font-bold mb-6">О НАС</h2>
              <p className="text-lg mb-5 leading-relaxed" style={{ color: "#A09080" }}>
                LOTOS — это семейный ресторан доставки в Кабардинке. Мы готовим роллы и пиццу из свежих продуктов каждый день.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: "#80706A" }}>
                Каждый ролл собирается вручную нашими поварами. Рис готовим по японскому рецепту, рыбу доставляем свежей. В пицце используем итальянскую муку и томатный соус по собственному рецепту.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[["🍣", "Свежая рыба"], ["🌿", "Натуральные продукты"], ["👨‍🍳", "Опытные повара"]].map(([emoji, label]) => (
                  <div key={label} className="text-center p-4 rounded-2xl" style={{ background: "rgba(255,107,26,0.08)", border: "1px solid rgba(255,107,26,0.1)" }}>
                    <div className="text-2xl mb-2">{emoji}</div>
                    <div className="text-xs font-medium" style={{ color: "#C8BFB0" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20" style={{ background: "var(--lotos-dark)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "#FF6B1A" }}>ЧТО ГОВОРЯТ ГОСТИ</p>
            <h2 className="font-display text-5xl font-bold">ОТЗЫВЫ</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="p-7 rounded-3xl card-hover" style={{ background: "var(--lotos-card)", border: "1px solid rgba(255,107,26,0.1)" }}>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i} style={{ color: "#FFB800" }}>★</span>
                  ))}
                </div>
                <p className="mb-5 leading-relaxed" style={{ color: "#C8BFB0" }}>"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold" style={{ background: "linear-gradient(135deg, #FF6B1A, #FFB800)", color: "#fff" }}>
                      {r.name[0]}
                    </div>
                    <span className="font-medium">{r.name}</span>
                  </div>
                  <span className="text-xs" style={{ color: "#605040" }}>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20" style={{ background: "var(--lotos-dark2)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "#FF6B1A" }}>НАЙДИТЕ НАС</p>
            <h2 className="font-display text-5xl font-bold">КОНТАКТЫ</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              {[
                { icon: "MapPin", label: "Адрес", val: "Кабардинка, ул. Центральная, 1", color: "#FF6B1A" },
                { icon: "Phone", label: "Телефон", val: "+7 (800) 700-70-70", color: "#FFB800" },
                { icon: "Clock", label: "Режим работы", val: "Пн–Вс: 10:00 — 23:00", color: "#FF6B1A" },
                { icon: "MessageCircle", label: "WhatsApp", val: "+7 (800) 700-70-70", color: "#25D366" },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4 p-5 rounded-2xl" style={{ background: "var(--lotos-card)", border: "1px solid rgba(255,107,26,0.1)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}20` }}>
                    <Icon name={item.icon} size={22} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-xs mb-1" style={{ color: "#605040" }}>{item.label}</div>
                    <div className="font-medium">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl overflow-hidden" style={{ height: "350px", border: "2px solid rgba(255,107,26,0.2)" }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.9442,44.6766&z=14&l=map&text=Кабардинка"
                width="100%"
                height="100%"
                frameBorder={0}
                title="Карта"
                style={{ filter: "invert(90%) hue-rotate(180deg)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t" style={{ background: "var(--lotos-dark)", borderColor: "rgba(255,107,26,0.15)" }}>
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-display font-bold" style={{ background: "linear-gradient(135deg, #FF6B1A, #FFB800)" }}>
              L
            </div>
            <span className="font-display text-xl font-bold tracking-widest text-gradient">LOTOS</span>
          </div>
          <p className="text-sm text-center" style={{ color: "#504030" }}>
            © 2024 LOTOS. Доставка суши и пиццы в Кабардинке
          </p>
          <a href="tel:+78007007070" className="text-sm font-medium" style={{ color: "#FF6B1A" }}>
            +7 (800) 700-70-70
          </a>
        </div>
      </footer>

    </div>
  );
}