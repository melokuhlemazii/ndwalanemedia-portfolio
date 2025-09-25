const categories = [
  { name: "Corporate", href: "#corporate" },
  { name: "Umemulo", href: "#umemulo" },
  { name: "Wedding", href: "#wedding" },
  { name: "Studio", href: "#studio" },
];

const Categories = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-sm font-semibold text-muted-foreground tracking-[3px] uppercase mb-8">
          Captured Moments
        </div>
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="category-link text-2xl lg:text-3xl font-bold"
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;