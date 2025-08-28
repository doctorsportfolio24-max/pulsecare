
const partners = [
  { name: "Stanford Medicine", logo: "🏥" },
  { name: "MIT Tech Lab", logo: "🔬" },
  { name: "Google Health", logo: "🌐" },
  { name: "IBM Watson", logo: "🤖" },
  { name: "Johns Hopkins", logo: "🎓" },
  { name: "Mayo Clinic", logo: "⚕️" }
];

const ResearchPartnerships = () => {
  return (
    <section id="research" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Research <span className="gradient-text">Partnerships</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Collaborating with leading institutions to advance medical science
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className="text-center group cursor-pointer hover:scale-110 transition-transform duration-300"
                >
                  <div className="text-4xl mb-3 group-hover:animate-bounce">
                    {partner.logo}
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                    {partner.name}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="font-semibold">15+ Active Research Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchPartnerships;
