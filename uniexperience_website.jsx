import React from "react";

const heroImage = null;

const items = {
  goals: [
    "تنظيم فرص العمل الجزئي التخصصية لطلاب الجامعات.",
    "تمكين الطالب من تحقيق دخل مالي أثناء الدراسة دون الابتعاد عن مساره المهني.",
    "تحفيز الشركات على إنتاج فرص مرنة ومناسبة للطلاب.",
    "بناء خبرة عملية طويلة المدى قبل التخرج.",
  ],
  services: [
    ["فرص جزئية تخصصية", "جمع وعرض وظائف بارت تايم مرتبطة بتخصصات الطلاب واحتياج الشركات."],
    ["مطابقة الطالب بالفرصة", "ترشيح الطلاب للفرص حسب التخصص، المهارة، المدينة، والوقت المتاح."],
    ["تهيئة مهنية", "مساعدة الطالب على تجهيز سيرته، ملفه المهني، والاستعداد للمقابلات."],
    ["شراكات", "بناء علاقات مع الجامعات والشركات لتوفير فرص مستمرة ومستدامة."],
  ],
  audience: [
    ["المرحلة الأولى", "طلاب الهندسة والحاسب والتخصصات التقنية."],
    ["الشركاء", "الشركات الناشئة والقطاع الخاص والجامعات."],
    ["التوسع", "جميع التخصصات الجامعية في مختلف مناطق المملكة."],
  ],
};

function runSmokeTests() {
  console.assert(items.goals.length === 4, "Expected 4 initiative goals");
  console.assert(items.services.length === 4, "Expected 4 services");
  console.assert(items.audience.length === 3, "Expected 3 audience groups");
  console.assert(Boolean(heroImage), "Expected hero image path to exist");
}

runSmokeTests();

function Card({ children }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10">
      {children}
    </div>
  );
}

function Button({ children, outline = false }) {
  const className = outline
    ? "rounded-full border border-white/20 px-7 py-3 font-bold text-white transition hover:bg-white/10"
    : "rounded-full bg-gradient-to-l from-sky-400 to-emerald-400 px-7 py-3 font-bold text-slate-950 transition hover:opacity-90";

  return <button className={className}>{children}</button>;
}

function Logo() {
  return (
    <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-400 to-emerald-400 shadow-lg shadow-teal-500/20">
      <span className="text-3xl font-black text-slate-950">I</span>
      <span className="absolute -left-1 top-2 h-2 w-6 rotate-[-25deg] rounded-full bg-white/75" />
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center lg:max-w-[480px]">
      <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#020817] shadow-2xl shadow-cyan-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,.15),transparent_35%),radial-gradient(circle_at_bottom,rgba(16,185,129,.12),transparent_35%)]" />

        <div className="relative h-[80%] w-[80%]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black leading-none text-transparent bg-gradient-to-b from-sky-300 via-cyan-300 to-emerald-400 bg-clip-text drop-shadow-[0_0_35px_rgba(34,211,238,.25)] md:text-[18rem]">
            I
          </div>

          <div className="absolute left-[8%] top-[28%] h-24 w-24 rotate-[-24deg] rounded-[1.2rem] bg-gradient-to-br from-sky-500 to-blue-700 shadow-2xl shadow-blue-950/40" />
          <div className="absolute left-[9%] top-[38%] h-4 w-20 rotate-[-24deg] rounded-full bg-blue-400" />
          <div className="absolute left-[9%] top-[45%] h-14 w-2 rounded-full bg-blue-400" />
          <div className="absolute left-[7.5%] top-[53%] h-7 w-5 rounded-b-full bg-blue-400" />

          <div className="absolute bottom-[18%] right-[5%] h-24 w-32 rounded-[1.5rem] bg-gradient-to-br from-teal-400 to-emerald-500 shadow-2xl shadow-emerald-950/40">
            <div className="absolute -top-6 left-1/2 h-8 w-14 -translate-x-1/2 rounded-t-2xl border-[8px] border-emerald-400 border-b-0" />
            <div className="absolute left-0 top-1/2 h-2 w-full -translate-y-1/2 bg-[#06101f]/70" />
            <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#06101f]" />
          </div>

          <div className="absolute right-[18%] top-[56%] h-7 w-[60%] origin-right rotate-[-42deg] rounded-full bg-gradient-to-l from-emerald-300 via-cyan-300 to-sky-400 shadow-[0_0_30px_rgba(45,212,191,.28)]" />

          <div className="absolute left-[80%] top-[30%] h-0 w-0 rotate-[10deg] border-b-[38px] border-r-[38px] border-t-[38px] border-b-transparent border-r-emerald-300 border-t-transparent drop-shadow-[0_0_20px_rgba(110,231,183,.25)]" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main dir="rtl" className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,.28),transparent_35%),radial-gradient(circle_at_top_left,rgba(16,185,129,.22),transparent_30%)]" />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <h1 className="text-xl font-black">
              <span className="text-sky-400">Uni</span>
              <span className="text-emerald-400">Experience</span>
            </h1>
            <p className="text-xs text-slate-400">خبرة جامعي</p>
          </div>
        </div>

        <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#" className="border-b-2 border-emerald-400 pb-2 text-white">الرئيسية</a>
          <a href="#problem" className="hover:text-white">عن المبادرة</a>
          <a href="#services" className="hover:text-white">الخدمات</a>
          <a href="#beneficiaries" className="hover:text-white">للطلاب</a>
          <a href="#solution" className="hover:text-white">للشركات</a>
          <a href="#services" className="hover:text-white">الفرص</a>
          <a href="#contact" className="hover:text-white">تواصل معنا</a>
        </nav>

        <Button outline>تسجيل دخول</Button>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-16 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            من الطالب للطالب، لمستقبل أفضل
          </div>

          <h2 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
            نربط طلاب الجامعات
            <span className="block bg-gradient-to-l from-emerald-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              بسوق العمل والفرص
            </span>
          </h2>

          <p className="mb-8 max-w-2xl text-xl leading-9 text-slate-300">
            منصة تنظم وتجمع فرص العمل الجزئي التخصصية لطلاب الجامعات مع الشركات والجهات، لتوفير دخل مالي وخبرة عملية خلال سنوات الدراسة.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button>استكشف الفرص</Button>
            <Button outline>انضم كمؤسسة</Button>
          </div>
        </div>

        <HeroVisual />
      </section>

      <section id="problem" className="border-y border-white/10 bg-slate-900/60 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 font-bold text-teal-400">التحدي</p>
            <h2 className="mb-5 text-4xl font-black md:text-5xl">طلاب يعملون… لكن خارج مسارهم</h2>
            <p className="text-lg leading-8 text-slate-300">
              كثير من طلاب الجامعات يعملون أثناء الدراسة في مطاعم، مقاهي، متاجر أو مكتبات لتوفير دخل وخبرة حياتية، لكن غالبًا تكون هذه الوظائف بعيدة عن تخصصاتهم وقد تستهلك وقتهم وجهدهم دون أن تبني خبرة مهنية طويلة المدى.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Card>
              <h3 className="mb-3 text-xl font-bold">دخل بدون مسار</h3>
              <p className="leading-7 text-slate-300">الطالب يحتاج دخلًا ماليًا، لكنه يعمل غالبًا في مجال لا يرتبط بتخصصه.</p>
            </Card>
            <Card>
              <h3 className="mb-3 text-xl font-bold">ضغط على الدراسة</h3>
              <p className="leading-7 text-slate-300">العمل غير المنظم قد يستهلك الوقت والطاقة ويؤثر على المستوى الدراسي.</p>
            </Card>
            <Card>
              <h3 className="mb-3 text-xl font-bold">فرص غير مستثمرة</h3>
              <p className="leading-7 text-slate-300">الشركات لديها مهام بسيطة يمكن أن يقوم بها الطلاب لو تم تنظيمها بشكل صحيح.</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="solution" className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-bold text-teal-400">الحل</p>
            <h2 className="mb-6 text-4xl font-black leading-tight md:text-5xl">وظائف جزئية تخصصية ومرنة للطلاب</h2>
            <p className="mb-8 text-lg leading-9 text-slate-300">
              خبرة جامعي تربط طلاب الجامعات بالشركات الناشئة والقطاع الخاص عبر فرص عمل جزئي ومهام مهنية بسيطة مرتبطة بالتخصص، ليكسب الطالب دخلًا وخبرة في الوقت نفسه، وتستفيد الشركات من كفاءات شابة قابلة للتطوير.
            </p>
            <div className="space-y-4">
              {items.goals.map((goal) => (
                <p key={goal} className="text-slate-200">✓ {goal}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <Card>
              <h3 className="mb-3 text-2xl font-black">للطلاب</h3>
              <p className="leading-8 text-slate-300">دخل مالي، خبرة تخصصية، علاقات مهنية، وبداية مبكرة في سوق العمل.</p>
            </Card>
            <Card>
              <h3 className="mb-3 text-2xl font-black">للشركات</h3>
              <p className="leading-8 text-slate-300">وصول مبكر إلى طلاب قادرين على تنفيذ مهام تخصصية بسيطة وبناء مواهب مستقبلية.</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-white/10 bg-slate-900/60 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 font-bold text-teal-400">الخدمات والبرامج</p>
            <h2 className="text-4xl font-black md:text-5xl">ماذا تقدم المبادرة؟</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {items.services.map(([title, text]) => (
              <Card key={title}>
                <h3 className="mb-3 text-xl font-bold">{title}</h3>
                <p className="leading-7 text-slate-300">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="beneficiaries" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 font-bold text-teal-400">المستفيدون</p>
          <h2 className="mb-5 text-4xl font-black md:text-5xl">من نخدم؟</h2>
          <p className="text-lg leading-8 text-slate-300">
            طلاب الجامعات في المملكة العربية السعودية الذين يرغبون في توفير دخل مالي واكتساب خبرة عملية تخصصية طويلة أثناء الدراسة، إضافة إلى الشركات الناشئة والقطاع الخاص الباحثين عن طلاب قادرين على شغل وظائف ومهام تخصصية مبتدئة.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {items.audience.map(([title, text]) => (
            <Card key={title}>
              <h3 className="mb-3 text-2xl font-black">{title}</h3>
              <p className="leading-7 text-slate-300">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-5 py-20">
        <div className="rounded-[2rem] bg-gradient-to-l from-sky-400 to-emerald-400 p-1">
          <div className="rounded-[1.8rem] bg-slate-950 p-10 text-center md:p-14">
            <h2 className="mb-5 text-4xl font-black">ابدأ رحلتك من الجامعة إلى العمل</h2>
            <p className="mb-8 text-lg leading-8 text-slate-300">
              سواء كنت طالبًا تبحث عن دخل وخبرة، أو شركة تبحث عن كفاءات شابة، خبرة جامعي تصنع نقطة الالتقاء.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button>أنا طالب</Button>
              <Button outline>أنا شركة</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
        <p>خبرة جامعي — UniExperience</p>
        <p className="mt-2">المملكة العربية السعودية | hello@uniexperience.sa</p>
      </footer>
    </main>
  );
}
