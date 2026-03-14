// ============================================================
// CURRICULUM DATA — 20-Day FSPW Life Skills & Entrepreneurship
// ============================================================
const CURRICULUM = [
    {
        topic: "Introduction & Programme Overview",
        subtopics: ["Welcome Note", "Curriculum Index & Acknowledgement"],
        objectives: [
            "Complete the formal programme acknowledgement and commitment",
            "Review the full 21-day learning path and key focus areas",
            "Understand the assessment and reporting structures",
            "Identify personal learning goals for the internship duration"
        ],
        intro: "Welcome to the First Step Pediatric Wellness Internship Programme. This session serves as your formal induction, where we clarify the expectations, roadmaps, and commitments required to make the most of this 20-day journey in life skills and entrepreneurship.",
        sections: [
            { title: "The FSPW Mindset", body: "Our mission is to bridge the gap between academic knowledge and real-world capability. Over the next few weeks, you will engage with concepts ranging from emotional intelligence to financial literacy. This day Zero is about grounding yourself in that mission and preparing for the growth ahead." }
        ]
    },
    {
        topic: "Growth Mindset & Learning from Failure",
        subtopics: ["Fixed vs Growth Mindset", "How Successful People Handle Failure"],
        objectives: [
            "Understand the difference between a fixed and a growth mindset",
            "Recognise how your beliefs about intelligence affect your performance",
            "Analyse how global leaders turned failure into their greatest advantage",
            "Develop a personal mantra to embrace challenges and persist through difficulty"
        ],
        intro: "The foundation of all achievement begins in the mind. Carol Dweck's landmark research at Stanford University revealed that individuals who believe their abilities can be developed — those with a growth mindset — consistently outperform those who believe talent is fixed. In a rapidly changing world, resilience and adaptability are not optional traits; they are survival skills.",
        sections: [
            { title: "Understanding Fixed vs Growth Mindset", body: "A fixed mindset assumes that intelligence, talent, and ability are static traits we are born with. People with this mindset avoid challenges for fear of appearing incapable. A growth mindset, in contrast, holds that abilities are developed through dedication and hard work. Every challenge becomes an opportunity, and feedback becomes fuel. Research shows that students taught growth mindset principles show significantly higher academic achievement and emotional resilience." },
            { title: "How Successful People Handle Failure", body: "J.K. Rowling was rejected by 12 publishers before Harry Potter changed the world. Steve Jobs was fired from Apple before returning to build the most valuable company on Earth. Failure, when seen through the right lens, is not the opposite of success — it is part of success. The most innovative companies in the world, including Google and Amazon, conduct 'failure post-mortems' — structured reviews to extract maximum learning from every setback." }
        ]
    },
    {
        topic: "Self-Awareness & Goal Setting",
        subtopics: ["Understanding Strengths and Weaknesses", "Setting Personal Goals"],
        objectives: [
            "Conduct a personal SWOT analysis to identify strengths, weaknesses, opportunities, and threats",
            "Distinguish between short-term, medium-term, and long-term goals",
            "Apply the SMART framework to write actionable goals",
            "Create a personal vision statement that guides decision-making"
        ],
        intro: "Socrates said 'Know thyself.' Two and a half thousand years later, this remains the most powerful piece of career and life advice available. Self-awareness — the ability to truthfully assess your own skills, emotions, values, and impact — is consistently ranked as the number-one leadership trait by Fortune 500 CEOs. It is also the prerequisite for every goal-setting system that actually works.",
        sections: [
            { title: "Understanding Your Strengths and Weaknesses", body: "Strengths are not just things you are good at — they are tasks that energise you and where your performance is consistently strong. Weaknesses are not permanent flaws; they are development areas. Tools like the StrengthsFinder assessment, the Johari Window, and personal journalling are used by executives at McKinsey, Deloitte, and KPMG to build self-knowledge and lead more effectively." },
            { title: "Setting Goals That Actually Work", body: "A goal without a plan is just a wish. The SMART framework — Specific, Measurable, Achievable, Relevant, Time-bound — transforms vague ambitions into executable roadmaps. Research from Dominican University shows that people who write down their goals and share them with someone are 76% more likely to achieve them. Begin with your 'why' — your purpose — and align every goal to that deeper motivation." }
        ]
    },
    {
        topic: "Communication Skills",
        subtopics: ["Speaking Clearly", "Listening Skills"],
        objectives: [
            "Identify the core elements of effective verbal and non-verbal communication",
            "Practise structuring messages with clarity and purpose",
            "Develop active listening habits that build trust and understanding",
            "Recognise common communication barriers and strategies to overcome them"
        ],
        intro: "Communication is the single most sought-after skill by employers globally, ranked above technical expertise, leadership experience, and academic results. Yet most students are never formally taught how to communicate well. Whether writing an email, presenting an idea, or listening during a meeting, your ability to convey and receive information accurately determines the quality of every relationship and outcome in your life.",
        sections: [
            { title: "Speaking with Clarity and Purpose", body: "Effective speaking is not about using complex vocabulary — it is about making your message easy to understand and hard to forget. The best communicators use simple words, concrete examples, and deliberate pauses. The Pyramid Principle, developed at McKinsey, teaches professionals to lead with the conclusion, then support it with structured evidence. This prevents confusion and respects the listener's time." },
            { title: "The Power of Active Listening", body: "Most people listen to reply, not to understand. Active listening involves full attention, withholding judgement, reflecting back what you heard, and asking clarifying questions. Studies show that managers who listen actively have teams that are 40% more engaged and 30% more productive. The greatest gift you can give anyone in a conversation is your genuine attention." }
        ]
    },
    {
        topic: "Public Speaking & Confidence",
        subtopics: ["Body Language", "Stage Confidence"],
        objectives: [
            "Understand how body language shapes perception before you say a single word",
            "Learn techniques to manage stage fright and speaking anxiety",
            "Structure a short compelling talk with an opening hook, body, and close",
            "Demonstrate poise, eye contact, and vocal variety in front of a group"
        ],
        intro: "The fear of public speaking consistently ranks above the fear of death in surveys across cultures. Yet the ability to stand and speak with confidence is one of the highest-value skills in any profession. Leaders who communicate compellingly — from Martin Luther King Jr. to Malala Yousafzai — change minds, move organisations, and inspire action at scale. This skill can be learned by anyone.",
        sections: [
            { title: "The Language Before the Words: Body Language", body: "Dr. Amy Cuddy's research at Harvard shows that 'power poses' — open, expansive postures — change not just how others see you, but how you feel about yourself. Eye contact signals confidence and credibility. Gestures that are open and deliberate reinforce your message. Fidgeting, crossed arms, and downcast eyes undermine even the strongest content." },
            { title: "Building Stage Confidence", body: "Confidence on stage is not the absence of nerves — it is the management of them. Professional speakers use techniques like deep diaphragmatic breathing, pre-performance routines, and visualisation to channel anxiety into energy. The three-second rule — maintaining eye contact with one audience member for three seconds before moving on — creates intimacy even in large rooms. Preparation is the foundation of all confidence." }
        ]
    },
    {
        topic: "Teamwork & Collaboration",
        subtopics: ["Working in Teams", "Respecting Different Ideas"],
        objectives: [
            "Understand the five stages of team development (Tuckman Model)",
            "Identify different team roles and how they contribute to collective success",
            "Practise giving and receiving constructive feedback",
            "Develop strategies for navigating disagreement without damaging relationships"
        ],
        intro: "No individual, regardless of talent, builds anything of significance alone. Every great product, movement, and institution is the result of collaborative effort. Google's Project Aristotle — a study of hundreds of teams — found that the single biggest predictor of team success was not the intelligence of the members, but psychological safety: the shared belief that it is safe to speak up, take risks, and make mistakes together.",
        sections: [
            { title: "How High-Performing Teams Work", body: "Bruce Tuckman identified four stages all teams pass through: Forming (polite introductions), Storming (conflict as roles are established), Norming (rules and trust develop), and Performing (high output). Skipping or rushing the early stages creates fragile teams. Effective team members know which stage they are in and adjust their behaviour accordingly." },
            { title: "Valuing Different Perspectives", body: "Diversity of thought is a strategic asset. Teams with varied backgrounds and viewpoints consistently generate more innovative solutions than homogeneous groups. The key is creating an environment where different ideas are genuinely welcomed, not just tolerated. This requires deliberate practices: rotating who speaks first in meetings, using structured brainstorming techniques, and separating idea generation from idea evaluation." }
        ]
    },
    {
        topic: "Leadership Skills",
        subtopics: ["Taking Initiative", "Responsibility and Accountability"],
        objectives: [
            "Distinguish between leadership and management, and understand when each is needed",
            "Identify your natural leadership style and how to adapt it to different situations",
            "Understand the relationship between accountability and trust in any team",
            "Practise taking initiative on a small real-world task today"
        ],
        intro: "Leadership is not a title or a position — it is a choice repeated in small moments every day. The world's most respected leadership researchers, from John C. Maxwell to Peter Drucker, agree on one thing: leadership is influence, and it is available to every person regardless of age, background, or formal authority. The question is not 'Am I a leader?' but 'Am I choosing to lead?'",
        sections: [
            { title: "Taking Initiative: The Courage to Begin", body: "Initiative is the willingness to take action before being asked, when you see something that needs doing. It is the difference between employees who wait for instructions and those who create solutions. Companies like Spotify and 3M famously allocate dedicated time for employees to work on self-initiated projects — because they know that the most valuable innovations come from people who saw a problem and acted on it." },
            { title: "Accountability: The Bedrock of Trust", body: "Accountability means owning your commitments — even when things go wrong, especially when things go wrong. Leaders who deflect blame destroy team trust. Leaders who say 'I got that wrong, here is what I am doing to fix it' build it. The Oz Principle outlines a culture of accountability based on four steps: See It, Own It, Solve It, Do It — a framework used by companies like Amazon and Johnson & Johnson." }
        ]
    },
    {
        topic: "Problem Solving & Critical Thinking",
        subtopics: ["Identifying Problems", "Logical Thinking"],
        objectives: [
            "Apply structured problem-solving frameworks (5 Whys, Root Cause Analysis, Mind Mapping)",
            "Distinguish between symptoms and root causes of a problem",
            "Practise logical reasoning and avoid common cognitive biases",
            "Solve a real-world challenge using a step-by-step thinking process"
        ],
        intro: "The World Economic Forum consistently ranks complex problem-solving as the most critical skill for the future of work. In an age of artificial intelligence, routine tasks are automated — but the ability to identify the right problem, analyse it rigorously, and devise creative solutions remains deeply human. Critical thinking is not an innate gift; it is a disciplined habit that anyone can develop.",
        sections: [
            { title: "Identifying the Real Problem", body: "Most people solve the wrong problem. Toyota's famous '5 Whys' technique — asking 'why' five times in sequence — peels back symptoms to reveal root causes. A car that won't start is a symptom; the drained battery is a cause. But why was the battery drained? Each layer of questioning brings you closer to a problem that can actually be solved permanently, not just patched." },
            { title: "Structured Logical Thinking", body: "Logical thinking means evaluating claims based on evidence and sound reasoning, not emotion or assumption. MECE thinking (Mutually Exclusive, Collectively Exhaustive) — a core framework at McKinsey — ensures that your analysis covers all possible explanations without overlap. Systems thinking, lateral thinking, and second-order thinking are additional tools that enable you to see connections and consequences that others miss." }
        ]
    },
    {
        topic: "Creativity & Innovation",
        subtopics: ["Thinking Differently", "Generating New Ideas"],
        objectives: [
            "Understand what creativity actually is and dispel common myths about it",
            "Use structured creativity techniques: SCAMPER, random association, and forced connections",
            "Generate 20 ideas for a given challenge using divergent thinking",
            "Evaluate and refine ideas using convergent thinking techniques"
        ],
        intro: "Creativity is not a personality trait reserved for artists. It is a cognitive skill — the ability to make connections between previously unrelated concepts — and it can be trained. Adobe's State of Create report found that 80% of people feel unlocking creativity is critical to economic growth, but only 25% feel they are living up to their creative potential. Innovation distinguishes leaders from followers.",
        sections: [
            { title: "The Science of Thinking Differently", body: "The human brain defaults to familiar patterns — a feature that makes us efficient but also predictable. Creative thinking deliberately disrupts these patterns. Techniques like the Six Thinking Hats (Edward de Bono) guide groups to examine problems from six distinct perspectives simultaneously: facts, emotions, caution, optimism, creativity, and process. This structured divergence consistently produces better solutions than conventional brainstorming." },
            { title: "Generating and Capturing Ideas", body: "The SCAMPER method provides seven creative triggers: Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, and Reverse. Applying each trigger to an existing product or problem generates dozens of novel directions. Quantity is the friend of quality in idea generation — research shows that the more ideas you generate, the higher the proportion of genuinely good ones. Keep an idea journal: the creative mind is most generative when it trusts its ideas will be captured." }
        ]
    },
    {
        topic: "Opportunity Recognition",
        subtopics: ["Seeing Business Opportunities Around You", "Turning Problems into Solutions"],
        objectives: [
            "Develop the habit of observing everyday frustrations as potential business opportunities",
            "Understand the difference between an idea and a validated opportunity",
            "Apply the Jobs-to-Be-Done framework to understand unmet customer needs",
            "Identify one real local problem that could form the basis of a business solution"
        ],
        intro: "Every successful business began as someone's observation that a problem existed and no one had solved it well enough. Airbnb founders saw empty rooms and travellers unable to afford hotels. Uber founders were stranded without a cab. Opportunity recognition is not luck — it is a trained perception, a lens through which entrepreneurs constantly scan the world asking: 'What frustrates people? What could be better? What does no one yet have?'",
        sections: [
            { title: "Seeing Opportunities Everywhere", body: "Opportunity recognition requires curiosity and attention. The most successful entrepreneurs carry what researchers call 'alertness' — a persistent readiness to notice gaps between what exists and what could exist. This alertness is sharpened by diverse experiences, wide reading, conversations with people unlike yourself, and asking 'why not?' when you encounter a limitation. Train yourself to annotate your day: every inconvenience is a potential product waiting to be built." },
            { title: "Turning Problems into Solutions", body: "The Jobs-to-Be-Done theory, developed by Clayton Christensen at Harvard, argues that customers don't buy products — they 'hire' them to get a job done. Understanding the real 'job' unlocks innovation. WhatsApp was hired to let people message internationally without SMS charges. Canva was hired to let non-designers create professional visuals. Defining the problem precisely is the most important step in building solutions that people actually want." }
        ]
    },
    {
        topic: "Design Thinking",
        subtopics: ["Understanding Users", "Creating Solutions"],
        objectives: [
            "Walk through all five stages of the Design Thinking process: Empathise, Define, Ideate, Prototype, Test",
            "Conduct a five-minute empathy interview with a peer to uncover a real need",
            "Create a simple paper prototype of a solution to a defined problem",
            "Understand how iteration and feedback improve solutions over time"
        ],
        intro: "Design Thinking is the methodology behind some of the world's most beloved products and services — from the first Apple computer to the redesign of hospital check-in systems that reduced patient anxiety by 40%. Pioneered at IDEO and taught at Stanford's d.school, Design Thinking is a rigorous, human-centred process for solving complex problems by deeply understanding the people you are designing for.",
        sections: [
            { title: "Empathy: Understanding the People You Design For", body: "Design Thinking begins not with solutions but with people. The empathy stage involves immersive observation — watching people in their natural environment, listening without interrupting, and asking reflective open-ended questions. The goal is not to confirm your assumptions, but to discover what you didn't know you didn't know. Airbnb's designers famously visited hosts in their homes, photographed their spaces, and discovered that poor listing photos — not price or location — were driving low bookings." },
            { title: "From Problem Definition to Prototype", body: "A well-crafted problem statement — sometimes called a 'How Might We' question — focuses the team's creative energy. Prototyping means building quick, rough, low-cost representations of ideas — not to get it perfect, but to get it wrong fast and learn. A cardboard model, a paper sketch, or a role-played scenario can reveal fundamental flaws in minutes that would take months to discover after a product is built. Test early, test often, iterate always." }
        ]
    },
    {
        topic: "Product & Service Development",
        subtopics: ["Designing Products", "Creating Value"],
        objectives: [
            "Understand the difference between features, benefits, and value propositions",
            "Apply the Minimum Viable Product (MVP) concept to test ideas quickly",
            "Map a customer journey to identify pain points and improvement opportunities",
            "Design a simple value proposition canvas for a product idea"
        ],
        intro: "A product is anything that can be offered to a market to satisfy a need or want. A great product does not just solve a problem — it creates delight, builds loyalty, and becomes indispensable. The history of business is littered with technically superior products that failed because they did not understand their customer deeply enough, and simpler products that won because they understood what people truly valued.",
        sections: [
            { title: "What Makes a Great Product", body: "Peter Drucker wrote: 'The aim of marketing is to make selling superfluous — to know and understand the customer so well that the product sells itself.' Great products are built around a clear value proposition: a specific promise of the tangible benefit a customer will receive, and why your solution is better than any alternative. Apple's iPod was not marketed as '1GB storage' — it was '1,000 songs in your pocket.' That reframing changed everything." },
            { title: "The Minimum Viable Product", body: "The MVP principle, popularised by Eric Ries in 'The Lean Startup,' holds that the fastest path to a great product is to build the simplest version that can be tested with real customers, gather feedback, and iterate. Dropbox launched not with a working product but a three-minute demo video — and gathered 75,000 sign-ups overnight, validating demand before writing a single line of code. Build for learning, not for perfection." }
        ]
    },
    {
        topic: "Customer Understanding",
        subtopics: ["Who Are Customers", "Understanding Needs"],
        objectives: [
            "Segment a customer base using demographic, psychographic, and behavioural criteria",
            "Create a detailed customer persona for your target audience",
            "Apply Maslow's Hierarchy of Needs to understand underlying customer motivations",
            "Conduct a simple customer interview and analyse the insights gathered"
        ],
        intro: "The greatest business failure is building something nobody wants. The second greatest is building something people want but for the wrong reasons. True customer understanding is rare, and those who achieve it build sustainable competitive advantages. Amazon's 'Day 1 mentality' — staying obsessively focused on the customer, not the competitor — has driven two decades of category-defining innovation across industries no one imagined Amazon would enter.",
        sections: [
            { title: "Defining and Segmenting Your Customer", body: "Not all customers are the same. Effective businesses identify specific segments — groups of people who share similar characteristics, needs, and behaviours — and tailor their offerings accordingly. Customer personas are fictional but research-based profiles of ideal customers. A persona for a tutoring app might be 'Riya, 16, Grade 11, anxious about board exams, prefers video content, influenced by peer recommendations.' The more specific your persona, the more targeted your solution." },
            { title: "Understanding What Customers Really Need", body: "Theodore Levitt of Harvard Business School famously said: 'People don't want to buy a quarter-inch drill. They want a quarter-inch hole.' Understanding the deeper 'need behind the need' is the key to building loyalty. Maslow's Hierarchy provides a lens: are customers seeking safety, belonging, esteem, or self-actualisation? Instagram didn't just sell photo-sharing — it sold belonging and self-expression. Understanding the hierarchy unlocks emotional connection." }
        ]
    },
    {
        topic: "Sales & Persuasion",
        subtopics: ["Convincing Customers", "Building Trust"],
        objectives: [
            "Understand the psychology of persuasion using Cialdini's six principles",
            "Learn a simple consultative selling process: Discover, Diagnose, Design, Deliver",
            "Practise handling common objections with confidence and empathy",
            "Understand why trust is the foundation of every successful sale"
        ],
        intro: "Sales is not manipulation — it is the art of helping people make decisions that genuinely serve their interests. Every professional, whether a doctor recommending a treatment, a teacher persuading a student to study, or a founder pitching to investors, is selling. Robert Cialdini's influence research has shown that human decision-making follows predictable psychological patterns — and understanding these patterns makes you both a better persuader and a more discerning consumer.",
        sections: [
            { title: "The Psychology of Persuasion", body: "Cialdini's six principles of influence — Reciprocity, Commitment, Social Proof, Authority, Liking, and Scarcity — operate below conscious awareness. Reciprocity means people feel obligated to give back when they have received. Social proof means people look to others' choices when uncertain. Authority means credibility increases trust. Used ethically, these principles help you communicate value in ways that resonate with how people actually think." },
            { title: "Building Trust That Lasts", body: "The highest-performing salespeople across industries share one quality: they are genuinely interested in their customer's success, not just the transaction. Trust is built through consistency (doing what you say), competence (knowing your subject), and care (making the customer feel seen). Once trust is broken it is nearly impossible to rebuild. The short-term temptation to oversell always destroys long-term customer relationships." }
        ]
    },
    {
        topic: "Negotiation Skills",
        subtopics: ["Win-Win Thinking", "Fair Deals"],
        objectives: [
            "Understand the difference between positional and interest-based negotiation",
            "Apply the BATNA (Best Alternative To a Negotiated Agreement) concept to any negotiation",
            "Practise active listening and reframing techniques in a negotiation scenario",
            "Recognise how cultural, emotional, and power dynamics shape negotiation outcomes"
        ],
        intro: "Negotiation is not about winning at someone else's expense — it is about creating agreements where all parties feel respected and satisfied. This principle, at the heart of the Harvard Negotiation Project and the book 'Getting to Yes,' has transformed everything from diplomatic talks to business contracts. Every professional negotiates every day — salaries, deadlines, responsibilities, and decisions. Those who negotiate well build better careers and stronger relationships.",
        sections: [
            { title: "Beyond Positions: Interest-Based Negotiation", body: "Positional negotiation — where each side states what they want and refuses to move — leads to deadlock or resentful compromise. Interest-based negotiation asks: 'Why does each party want what they want?' Understanding the interests beneath the positions almost always reveals more creative solutions. Two sisters fighting over an orange who discover one wants the juice and the other wants the peel can both get 100% of what they need — once they reveal their underlying interests." },
            { title: "BATNA: Your Source of Negotiating Power", body: "BATNA is your safety net — the best outcome you can achieve if negotiations fail entirely. Knowing your BATNA clearly means you never accept a deal worse than your alternative, and never make unnecessary concessions out of fear. Preparing a strong BATNA before any negotiation — whether for a project deadline, a salary discussion, or a business contract — dramatically increases your confidence, clarity, and outcomes." }
        ]
    },
    {
        topic: "Marketing & Branding",
        subtopics: ["Advertising", "Creating a Brand Identity"],
        objectives: [
            "Understand the difference between marketing, advertising, and branding",
            "Apply the 4 Ps of marketing: Product, Price, Place, Promotion",
            "Define the elements of a compelling brand identity: name, visual, voice, and values",
            "Analyse what makes a great advertising campaign and create a simple campaign concept"
        ],
        intro: "A brand is not a logo — it is a feeling. When people see the Nike swoosh, they don't think about shoes; they feel something about achievement, sport, and identity. This is the power of branding done well. Marketing is the strategic process of connecting the right product with the right people at the right time and price. In the digital age, every young person is both a consumer of marketing and a potential marketer.",
        sections: [
            { title: "What Marketing Really Is", body: "The American Marketing Association defines marketing as the activity of creating, communicating, delivering, and exchanging offerings that have value for customers. The classic 4 Ps — Product, Price, Place, Promotion — remain the foundational framework for any marketing strategy. Modern marketers add a fifth P: People — because in service businesses, the person who delivers the experience is the product." },
            { title: "Building a Brand That Means Something", body: "Simon Sinek's 'Start With Why' principle holds that great brands communicate from the inside out: they start with their purpose (Why), then explain how they fulfil it (How), then describe what they offer (What). Apple's brand says: 'We believe in challenging the status quo. Here's how we do it — through beautifully designed products. We make computers.' Purpose-led brands command loyalty, premium pricing, and advocacy that no advertising budget can buy." }
        ]
    },
    {
        topic: "Financial Literacy",
        subtopics: ["Money Basics", "Cost, Revenue, and Profit"],
        objectives: [
            "Understand the fundamental concepts of income, expenses, assets, and liabilities",
            "Calculate gross revenue, total costs, and net profit for a simple business",
            "Understand the difference between cashflow and profit, and why businesses fail despite being profitable",
            "Create a simple personal or business budget and identify areas to save or invest"
        ],
        intro: "Financial literacy is one of the most underprovided and highest-impact life skills in education globally. The OECD reports that fewer than half of young people in major economies understand basic financial concepts. Yet financial decisions — how to earn, spend, save, invest, and borrow — shape the quality of every aspect of life. Understanding money is not just a business skill; it is a life skill that determines degrees of freedom.",
        sections: [
            { title: "The Language of Money", body: "Revenue is the total money a business earns. Costs are the expenses incurred to run the business. Profit is what remains when costs are subtracted from revenue. This sounds simple, but most financial mismanagement comes from confusing these three. Assets are things that put money in your pocket; liabilities are things that take money out. Rich Dad Poor Dad's core lesson — make your money work for you by acquiring assets — remains the most important financial principle any young person can internalise." },
            { title: "Cashflow: Why Profitable Businesses Fail", body: "A business can be genuinely profitable on paper and still collapse due to cashflow problems. If a business earns Rs. 1,00,000 in January but does not collect payment until March, and its rent is due in February, it may be unable to pay — despite being profitable. Understanding the timing of money in and out — cashflow management — is the single most important financial skill for entrepreneurs and is consistently cited as the number-one cause of small business failure worldwide." }
        ]
    },
    {
        topic: "Decision Making",
        subtopics: ["Evaluating Options", "Making Smart Choices"],
        objectives: [
            "Understand common cognitive biases that distort decision-making",
            "Apply structured decision-making frameworks: decision matrix, pros/cons, cost-benefit analysis",
            "Practise pre-mortem analysis to anticipate what could go wrong before committing",
            "Develop the habit of distinguishing reversible from irreversible decisions"
        ],
        intro: "Every outcome in your life is the cumulative result of decisions — big and small. Jeff Bezos famously manages his decision-making energy by scheduling his most critical decisions in the morning, before decision fatigue sets in. Nobel laureate Daniel Kahneman's research on fast (System 1) and slow (System 2) thinking has revealed that most of our daily decisions are made instinctively, subject to dozens of cognitive biases that systematically lead us astray.",
        sections: [
            { title: "Cognitive Biases: The Hidden Enemy of Good Decisions", body: "Confirmation bias makes us seek information that confirms what we already believe. Sunk cost fallacy makes us continue investing in losing situations because of what we have already spent. Availability heuristic makes us overweight vivid recent examples when assessing probability. Anchoring makes the first number we hear disproportionately influence our judgement. Recognising these biases — by name — is the first step to preventing them from controlling you." },
            { title: "Frameworks for Better Decisions", body: "The decision matrix assigns weights to different criteria (cost, time, impact, risk) and scores each option — reducing emotional noise. The pre-mortem, developed by psychologist Gary Klein, asks: 'If this decision fails completely, what caused it?' Planning for failure in advance reveals risks that optimism blinds us to. Bezos's 'regret minimisation framework' asks: 'When I am 80, which decision will I regret more?' Long-term perspective clarifies short-term confusion." }
        ]
    },
    {
        topic: "Time Management & Productivity",
        subtopics: ["Prioritising Tasks", "Managing Time Effectively"],
        objectives: [
            "Apply the Eisenhower Matrix to categorise tasks by urgency and importance",
            "Understand and combat the top five productivity killers for students and professionals",
            "Design a personal time-blocking schedule for maximum output",
            "Develop habits and systems, not just willpower, to sustain high performance"
        ],
        intro: "Time is the only resource that is distributed in perfect equality — everyone gets 24 hours. Yet the difference in what people produce with those 24 hours is extraordinary. Productivity research consistently shows that high performers do not work harder — they work with more clarity, focus, and intention. The ability to manage your attention — not just your time — is the defining skill of anyone seeking to create exceptional results.",
        sections: [
            { title: "The Eisenhower Matrix: Doing What Really Matters", body: "Dwight Eisenhower, one of history's most productive leaders, distinguished between urgent and important tasks. Quadrant 1 (Urgent + Important): crises, deadlines. Quadrant 2 (Not Urgent + Important): planning, learning, health — the quadrant of strategic success. Quadrant 3 (Urgent + Not Important): interruptions, most meetings. Quadrant 4 (Neither): time wasters. Most people spend their lives in Quadrant 1 reacting to emergencies because they never invested enough time in Quadrant 2 preventing them." },
            { title: "Systems Over Willpower", body: "Willpower is finite and depletes across the day. High performers design their environment and habits so that the right behaviours require as little willpower as possible. James Clear's 'Atomic Habits' shows that habits are driven by cues, routines, and rewards — and that making good behaviours obvious, attractive, easy, and satisfying makes them nearly automatic. A productive daily system — consistent work blocks, clear shutdown rituals, and regular review — produces more than any burst of intense effort." }
        ]
    },
    {
        topic: "Ethics & Responsibility",
        subtopics: ["Honesty in Business", "Social Responsibility"],
        objectives: [
            "Understand the philosophical foundations of ethical decision-making",
            "Analyse real business case studies where ethics were compromised and the consequences",
            "Understand Corporate Social Responsibility (CSR) and why it is good business, not just good citizenship",
            "Develop a personal code of ethics that will guide professional decisions"
        ],
        intro: "Every business decision has an ethical dimension. Enron, Theranos, and countless other organisations collapsed because their leaders chose short-term gain over long-term integrity. Conversely, companies like Patagonia and Tata Group have built multi-generational trust and loyalty by embedding ethical principles into every decision. In a hyper-connected world where information is instant, the ethical dimension of every business decision is more consequential than ever.",
        sections: [
            { title: "Honesty as a Business Strategy", body: "Warren Buffett often says: 'It takes 20 years to build a reputation and five minutes to ruin it.' Honesty in business — with customers, employees, investors, and the public — is not just morally right; it is strategically superior. Trust reduces transaction costs, attracts talent, earns customer loyalty, and builds resilience in crises. Businesses built on deception require ever-increasing effort to maintain their facade, and inevitably collapse under its weight." },
            { title: "Social Responsibility: Business as a Force for Good", body: "The Business Roundtable's 2019 statement, signed by 181 major CEOs, redefined the purpose of a corporation from serving shareholders alone to creating value for all stakeholders — employees, communities, and the environment. Social responsibility is not philanthropy bolted onto a business model; it is the integration of social and environmental sustainability into core business strategy. B-Corp certified companies have demonstrated that doing good and doing well are not in conflict." }
        ]
    },
    {
        topic: "Storytelling & Pitching Ideas",
        subtopics: ["Explaining Ideas Clearly", "Presenting to an Audience"],
        objectives: [
            "Understand the neuroscience of why stories persuade more effectively than data alone",
            "Structure a compelling pitch using the problem-solution-impact narrative arc",
            "Create and deliver a 2-minute pitch for an idea, product, or project",
            "Receive and act on feedback to refine your pitch and communication style"
        ],
        intro: "In the information age, the ability to tell a compelling story is the skill that separates those who are heard from those who are ignored. Data may convince the mind, but stories move the heart — and behaviour follows the heart. The world's most funded startup pitches, most watched TED Talks, and most read business books all share one quality: they told a story that made the audience feel something. This is the final, integrating skill of the programme.",
        sections: [
            { title: "The Neuroscience of Storytelling", body: "When we process data, only two regions of the brain activate. When we hear a story, every region of the brain lights up — including the motor cortex, sensory cortex, and frontal cortex. Princeton researcher Uri Hasson demonstrated 'neural coupling' — when a skilled storyteller tells a tale, the listener's brain activity begins to mirror the speaker's. This is why 'once upon a time' is the most persuasive phrase in any language." },
            { title: "The Art of the Pitch", body: "The most effective pitches follow a simple structure: Hook (grab attention in the first 10 seconds), Problem (make the audience feel the pain), Solution (present your answer simply and confidently), Evidence (proof it works), Ask (what you need to move forward). Guy Kawasaki's 10/20/30 rule — no more than 10 slides, 20 minutes, 30-point font — forces clarity and respects the audience's time. The goal of a pitch is not to impress — it is to be understood and believed." }
        ]
    },
    {
        topic: "Final Project Review & Submission",
        subtopics: ["Project Showcase", "Final Feedback"],
        objectives: [
            "Present your final project to the facilitator and peers",
            "Incorporate feedback into your final submission",
            "Reflect on the growth achieved throughout the programme",
            "Complete final administrative and reporting requirements"
        ],
        intro: "As you reach the culmination of your internship, today is dedicated to showcasing your hard work and the innovations you've developed. This is an opportunity to receive high-level feedback and refine your outputs for final submission.",
        sections: [
            { title: "The Power of Final Review", body: "Continuous improvement is a core tenet of professional excellence. Your final review is not just a conclusion, but a gateway to applying your skills in even more complex environments." }
        ]
    },
    {
        topic: "Conclusion & Letter to the World",
        subtopics: ["Programme Completion"],
        objectives: [],
        intro: "Dear Reader,\n\nI am writing to share how the FSPW Internship Programme has fundamentally transformed my capability and outlook. Through the 'School of Champions,' I have been enabled to see problems as opportunities and to build solutions with empathy and precision.\n\nThis program doesn't just teach skills; it builds the character and resilience of a pioneer. Anyone who engages with this curriculum is not just an intern, but a future leader being enabled by a world-class framework of innovation and wellness.\n\nThe benefits are lifelong: a sharpened mind, an empowered heart, and a professional toolkit that is ready for any challenge.",
        sections: []
    },
    {
        topic: "Internship Certificate",
        subtopics: ["Certification of Completion", "Programme Validation"],
        objectives: [
            "Formal validation of the 21-day internship curriculum",
            "Verification of learning outcomes and project submissions",
            "Professional endorsement for career and academic advancement"
        ],
        intro: "This Certificate is awarded to signify the successful completion of the First Step Pediatric Wellness Internship Programme. It recognises the intern's dedication to mastering life skills, emotional intelligence, and entrepreneurship principles.",
        sections: []
    }
];

// ============================================================
// STATE
// ============================================================
let currentDay = 0;
let currentRating = 0;

// ============================================================
// RENDER CARDS
// ============================================================
function renderCards() {
    const grid = document.getElementById('days-grid');
    const groups = ['g1', 'g2', 'g3', 'g4'];
    grid.innerHTML = CURRICULUM.map((d, i) => {
        const g = groups[Math.floor(i / 5) % 4];
        return `
    <div class="day-card ${g}" onclick="openDay(${i})">
    <div class="day-num-label">Day ${i}</div>
      <div class="day-big">${String(i).padStart(2, '0')}</div>
      <div class="day-topic">${d.topic}</div>
      <div class="day-sub">${d.subtopics.join(' &middot; ')}</div>
      <div class="card-arr">
        <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
    </div>`;
    }).join('');
}

// ============================================================
// NAVIGATION
// ============================================================
function openDay(day) {
    currentDay = day;
    const data = CURRICULUM[day];
    document.getElementById('dv-badge').textContent = 'Day ' + day;
    document.getElementById('dv-title').textContent = 'Day ' + day + ' | ' + data.topic;
    document.getElementById('dv-sub').textContent = data.subtopics.join(' | ') + ' · Complete your daily report';
    document.getElementById('learn-list').innerHTML = data.objectives.map(o => `<li>${o}</li>`).join('');
    document.getElementById('learn-box').style.display = (data.objectives.length === 0) ? 'none' : 'block';
    document.getElementById('f-date').value = new Date().toISOString().split('T')[0];
    resetForm();

    // Toggle form sections for Day 0
    const form = document.getElementById('report-form');
    const sections = form.querySelectorAll('.fsec, .fg');
    let isDetails = true;
    sections.forEach(el => {
        if (day === 0 || day === 22 || day === 23) {
            if (el.classList.contains('fsec') && (el.textContent.includes('Activity Log') || el.textContent.includes('Personal Reflection'))) isDetails = false;
            el.style.display = isDetails ? 'flex' : 'none';
        } else {
            el.style.display = 'flex';
        }
    });

    document.getElementById('cards-view').style.display = 'none';
    document.getElementById('doc-view').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCards() {
    document.getElementById('doc-view').style.display = 'none';
    document.getElementById('cards-view').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// RATING
// ============================================================
function setRating(v) {
    currentRating = v;
    document.getElementById('f-rating').value = v;
    document.querySelectorAll('.star').forEach(s => s.classList.toggle('on', +s.dataset.v <= v));
}

function resetForm() {
    document.getElementById('report-form').reset();
    currentRating = 0;
    document.querySelectorAll('.star').forEach(s => s.classList.remove('on'));
    document.getElementById('f-date').value = new Date().toISOString().split('T')[0];
    // re-init dynamic lists
    if (typeof initDlField === 'function') {
        initDlField('dl-activities', 'Describe an activity or observation...', 3, 95, 'word');
        initDlField('dl-concepts', 'Explain a concept you understood today...', 3, 95, 'word');
        initDlField('dl-notes', 'Describe the activity, your role, and the outcome...', 3, 95, 'word');
        initDlField('dl-impact', 'What is the one thing that changed how you think or see things today?', 3, 100);
        initDlField('dl-challenges', 'Describe a challenge and how you approached it...', 3, 100);
        initDlField('dl-apply', 'Give a real-life example of how you will use this learning...', 3, 100);
    }
}

// ============================================================
// CUMULATIVE PAGE OFFSET
// Day 1 PDF: Cover(p1)+Ack(p2)+ToC(p3)+Content(p4-p6) = 6 pages
// Day N (N>=2): Cover at page 4N-1, content follows (4 pages each)
// ============================================================
function getStartPage(day) {
    if (day === 0) return 1;
    return 3 * day - 2; // Day 1->1, Day 2->4, Day 21->61, Day 22->64
}

// ============================================================
// PDF ENGINE
// ============================================================
function generatePDF(e) {
    e.preventDefault();
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const W = 210, H = 297;
    const ML = 18, MR = 18, TW = W - ML - MR;
    let y = 0;
    let pageNum = 1;
    const startPage = getStartPage(currentDay);

    const C = {
        navy: [10, 14, 38],
        white: [255, 255, 255],
        accent: [91, 82, 240],
        accent2: [155, 140, 247],
        gold: [212, 160, 23],
        gray: [120, 130, 155],
        light: [235, 238, 248],
        body: [40, 48, 70],
        mid: [80, 90, 120],
        border: [220, 224, 240],
        cream: [252, 250, 245],
        ink: [20, 30, 80]
    };

    const data = CURRICULUM[currentDay];
    const intern = {
        name: document.getElementById('f-name').value.trim() || 'Intern',
        date: document.getElementById('f-date').value,
        institution: (document.getElementById('f-institution') || { value: '' }).value.trim(),
        grade: (document.getElementById('f-grade') || { value: '' }).value.trim(),
        facilitator: document.getElementById('f-facilitator').value.trim(),
        duration: (document.getElementById('f-duration') || { value: '' }).value.trim(),
        startDate: (document.getElementById('f-start-date') || { value: '' }).value,
        endDate: (document.getElementById('f-end-date') || { value: '' }).value,
        activities: getDlItems('dl-activities'),
        concepts: getDlItems('dl-concepts'),
        actNote: getDlItems('dl-notes'),
        impact: getDlItems('dl-impact'),
        challenges: getDlItems('dl-challenges'),
        apply: getDlItems('dl-apply')
    };

    // Validation for 3-6 items in each list
    const lists = [
        { id: 'dl-activities', name: "Summary of Today's Activities" },
        { id: 'dl-concepts', name: 'Key Concepts Understood' },
        { id: 'dl-notes', name: 'Group / Individual Activity Notes' },
        { id: 'dl-impact', name: 'Most Impactful Learning' },
        { id: 'dl-challenges', name: 'Challenges Encountered' },
        { id: 'dl-apply', name: 'How You Will Apply This' }
    ];

    if (currentDay > 0 && currentDay <= 21) {
        for (const list of lists) {
            const items = getDlItems(list.id);
            if (items.length < 3) {
                alert(`Please provide at least 3 points for: ${list.name}`);
                return;
            }
            if (items.length > 6) {
                alert(`Please provide at most 6 points for: ${list.name}`);
                return;
            }
        }
    }
    const dateStr = intern.date
        ? new Date(intern.date + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        : '';

    // ---- helpers ----
    function addPage() {
        // Only add a page if the current one has substantial content (y > threshold)
        // or if it's the very first page being added after the cover.
        if (y > 25 || pageNum === 1) {
            doc.addPage();
            pageNum++;
            y = 18;
            footerStrip();
        } else {
            // Already on a fresh page, just reset y to be sure
            y = 18;
        }
    }
    function check(need = 12) { if (y + need > H - 18) addPage(); }

    function footerStrip(forcePg = -1) {
        const absPage = startPage + (forcePg === -1 ? pageNum : forcePg) - 1;
        doc.setFillColor(...C.accent);
        doc.rect(0, H - 3, W, 3, 'F');
        doc.setFillColor(...C.navy);
        doc.rect(0, H - 10, W, 7, 'F');
        doc.setFontSize(6.5); doc.setFont('helvetica', 'normal'); doc.setTextColor(...C.gray);
        doc.text(`FSPW Pvt. Ltd. | Internship Programme | Reg No: U86904KA2025PTC212490`, ML, H - 5.5);
        if (currentDay !== 0) {
            doc.text(`Page ${absPage}`, W - MR, H - 5.5, { align: 'center' });
        }
    }

    function drawSignature(name, x, y) {
        // Signatures removed as per user request
    }

    function sectionBar(title, color = C.accent) {
        check(16);
        // Background with left accent stripe
        doc.setFillColor(color[0], color[1], color[2]);
        doc.roundedRect(ML, y, TW, 9, 1, 1, 'F');
        doc.setFontSize(7.8); doc.setFont('helvetica', 'bold'); doc.setTextColor(255, 255, 255);
        doc.text(title.toUpperCase(), ML + 5, y + 6.2);
        y += 14;
    }

    function subheading(title) {
        check(10);
        doc.setFontSize(9); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.accent);
        doc.text(title, ML, y);
        y += 1.5;
        doc.setDrawColor(...C.accent2); doc.setLineWidth(0.3);
        doc.line(ML, y, ML + doc.getTextWidth(title), y);
        y += 5;
    }

    function para(text, size = 9.5, color = C.body, indent = 0) {
        if (!text) return;
        doc.setFontSize(size); doc.setFont('helvetica', 'normal'); doc.setTextColor(...color);
        const lines = doc.splitTextToSize(text, TW - indent);
        lines.forEach(l => { check(6); doc.text(l, ML + indent, y); y += 5.6; });
        y += 3;
    }

    function label(lbl, val, indent = 0) {
        if (!val || (Array.isArray(val) && !val.length)) return;
        check(12);
        // Label bar
        doc.setFillColor(240, 242, 252);
        doc.rect(ML + indent, y, TW - indent, 6.5, 'F');
        doc.setDrawColor(...C.border); doc.setLineWidth(0.25);
        doc.rect(ML + indent, y, TW - indent, 6.5, 'S');
        doc.setFontSize(7.8); doc.setFont('helvetica', 'bold'); doc.setTextColor(60, 70, 110);
        doc.text(lbl, ML + indent + 4, y + 4.6);
        y += 9;
        if (Array.isArray(val)) {
            val.forEach((v, i) => {
                check(7);
                doc.setFillColor(250, 251, 255);
                doc.rect(ML + indent, y, TW - indent, 6, 'F');
                doc.setFontSize(9); doc.setFont('helvetica', 'normal'); doc.setTextColor(...C.body);
                const ls = doc.splitTextToSize(`${i + 1}.  ${v}`, TW - indent - 6);
                ls.forEach((l, li) => { check(5.5); doc.text(l, ML + indent + 4, y + 4.5 + li * 5.5); });
                y += Math.max(6, ls.length * 5.5 + 2);
            });
        } else {
            const ls = doc.splitTextToSize(val, TW - indent - 4);
            ls.forEach(l => { check(6); doc.text(l, ML + indent + 4, y); y += 5.5; });
        }
        y += 4;
    }

    function twoCol(pairs) {
        const half = (TW - 6) / 2;
        let maxY = y;
        pairs.forEach(([lbl, val], idx) => {
            if (!val) return;
            const x = idx % 2 === 0 ? ML : ML + half + 6;
            const resetY = idx % 2 === 0 ? y : maxY;
            let cy = (idx % 2 === 1) ? maxY : y;

            doc.setFontSize(7.5); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.mid);
            doc.text(lbl, x, cy); cy += 4.5;
            doc.setFontSize(9); doc.setFont('helvetica', 'normal'); doc.setTextColor(...C.body);
            const lines = doc.splitTextToSize(val, half);
            lines.forEach(l => { doc.text(l, x, cy); cy += 4.5; });
            cy += 2;
            maxY = Math.max(maxY, cy);
        });
        y = maxY;
    }

    function divider() {
        check(6);
        doc.setDrawColor(...C.border); doc.setLineWidth(0.25);
        doc.line(ML, y, W - MR, y); y += 6;
    }

    // ============================================================
    // PAGE 1: COVER / CERTIFICATE
    // ============================================================
    if (currentDay === 21 || currentDay === 23) {
        // ============================================================
        // HARVARD-STYLE CERTIFICATE (DAY XX)
        // ============================================================
        doc.setFillColor(...C.cream);
        doc.rect(0, 0, W, H, 'F');
        
        // Classic Ornate Border
        doc.setDrawColor(40, 40, 40); doc.setLineWidth(1.2);
        doc.rect(10, 10, W - 20, H - 20, 'S');
        doc.setDrawColor(...C.gold); doc.setLineWidth(0.4);
        doc.rect(11.5, 11.5, W - 23, H - 23, 'S');

        // Harvard-style typography
        doc.setFont('times', 'bold'); doc.setTextColor(30, 30, 30);
        doc.setFontSize(28);
        doc.text('FSPW Pvt. Ltd.', W / 2, 40, { align: 'center' });
        
        doc.setDrawColor(30, 30, 30); doc.setLineWidth(0.5);
        doc.line(W / 2 - 40, 45, W / 2 + 40, 45);

        doc.setFont('times', 'italic'); doc.setFontSize(14);
        doc.text('By authority of the Board of Directors, be it known that', W / 2, 65, { align: 'center' });

        doc.setFont('times', 'bold'); doc.setFontSize(38); doc.setTextColor(180, 0, 0); // Crimson accent
        doc.text(intern.name.toUpperCase(), W / 2, 90, { align: 'center' });

        doc.setFont('times', 'normal'); doc.setFontSize(14); doc.setTextColor(30, 30, 30);
        doc.text('having satisfactorily completed the prescribed curriculum of the', W / 2, 105, { align: 'center' });

        doc.setFont('times', 'bold'); doc.setFontSize(22);
        doc.text('6-MONTH INTERNSHIP PROGRAMME', W / 2, 120, { align: 'center' });

        doc.setFont('times', 'normal'); doc.setFontSize(12);
        const certP1 = "In recognition of outstanding achievement and contribution at FSPW Pvt. Ltd.. This award carries all the rights, honours, and privileges appertaining thereto.";
        const certLines = doc.splitTextToSize(certP1, 150);
        doc.text(certLines, W / 2, 135, { align: 'center' });

        // Institutional Logo in Circle
        try { 
            doc.addImage('vectorised-image.png', 'PNG', W / 2 - 15, 175, 30, 30); 
        } catch (e) {}
        
        doc.setDrawColor(180, 0, 0); doc.setLineWidth(0.5);
        doc.circle(W / 2, 190, 22, 'S');

        // Classical Signatures
        const sy = 250;
        doc.setDrawColor(30, 30, 30); doc.setLineWidth(0.3);
        doc.line(35, sy, 85, sy);
        doc.line(W - 85, sy, W - 35, sy);

        doc.setFont('times', 'normal'); doc.setFontSize(10);
        doc.text('Ngamnui Wangsa', 60, sy + 6, { align: 'center' });
        doc.text('FOUNDER & DIRECTOR', 60, sy + 11, { align: 'center' });
        
        doc.text('Ananthan V M', W - 60, sy + 6, { align: 'center' });
        doc.text('CEO & FOUNDER', W - 60, sy + 11, { align: 'center' });

        drawSignature('Ananthan V M', 45, sy - 5);
        drawSignature(intern.facilitator || 'Ananthan V M', W - 75, sy - 5);

        doc.setFont('times', 'italic'); doc.setFontSize(8); doc.setTextColor(100, 100, 100);
        doc.text(`Given this day ${dateStr ? 'on ' + dateStr : ''} at First Step Pediatric Wellness Corporate Office`, W / 2, 275, { align: 'center' });
        doc.setFontSize(7); doc.text('FSPW PVT. LTD. | Reg No: U86904KA2025PTC212490', W / 2, 282, { align: 'center' });

    } else if (currentDay === 0) {
        // ============================================================
        // DELOITTE-STYLE MINIMALIST COVER (DAY 0)
        // ============================================================
        doc.setFillColor(255, 255, 255);
        doc.rect(0, 0, W, H, 'F');

        // Deloitte Green Accent Square (replaced with FSPW Brand Color)
        doc.setFillColor(...C.accent);
        doc.rect(W - 35, 20, 15, 15, 'F');

        // Logo at Top Left - Adjusted for minimalism
        try {
            doc.addImage('vectorised-image.png', 'PNG', ML, 15, 18, 18);
        } catch (e) {}

        doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.navy);
        doc.setFontSize(8); 
        doc.text('FSPW PVT. LTD.', ML, 38);

        // Huge Bold Title
        doc.setFontSize(44); doc.setFont('helvetica', 'bold');
        doc.text('Internship', ML, 100);
        doc.text('Report', ML, 118);

        // Thin professional line
        doc.setDrawColor(...C.accent); doc.setLineWidth(2);
        doc.line(ML, 130, ML + 30, 130);

        doc.setFontSize(14); doc.setFont('helvetica', 'normal'); doc.setTextColor(...C.mid);
        doc.text('Comprehensive Programme Documentation', ML, 142);
        doc.setFontSize(13); doc.setFont('helvetica', 'normal'); doc.setTextColor(...C.gray);
        doc.text('Official Internship Record', ML, 150);

        // Participant Information Box
        let iy = 175;
        const infoH = 65;
        doc.setFillColor(248, 250, 255);
        doc.rect(ML, iy, TW, infoH, 'F');
        doc.setDrawColor(...C.border); doc.setLineWidth(0.5);
        doc.rect(ML, iy, TW, infoH, 'S');

        iy += 10;
        const info = [
            ['PARTICIPANT', intern.name],
            ['INSTITUTION', intern.institution || 'N/A'],
            ['DURATION', intern.duration || '6 MONTHS'],
            ['START DATE', intern.startDate ? new Date(intern.startDate).toLocaleDateString('en-IN') : 'N/A'],
            ['END DATE', intern.endDate ? new Date(intern.endDate).toLocaleDateString('en-IN') : 'N/A']
        ];

        info.forEach(([lbl, val]) => {
            doc.setFontSize(8); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.gray);
            doc.text(lbl, ML + 8, iy);
            doc.setFontSize(11); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.navy);
            doc.text(val, ML + 45, iy);
            iy += 12;
        });

        // Bottom Strip
        doc.setFillColor(...C.navy);
        doc.rect(0, H - 40, W, 40, 'F');
        doc.setFontSize(9); doc.setFont('helvetica', 'normal'); doc.setTextColor(255, 255, 255);
        doc.text('FSPW Private Limited', ML, H - 20);
        doc.text('www.fspw.org', ML, H - 15);
        
        doc.setTextColor(...C.accent2); doc.setFont('helvetica', 'bold');
        doc.text('OFFICIAL TRANSCRIPT', W - MR, H - 18, { align: 'right' });

    } else {
        // Original Colorful Cover for Days 1-20
        doc.setFillColor(...C.navy);
        doc.rect(0, 0, W, H, 'F');

        // top accent bar
        doc.setFillColor(...C.accent);
        doc.rect(0, 0, W, 4, 'F');

        // decorative side strip
        doc.setFillColor(30, 35, 75);
        doc.rect(0, 4, 5, H - 4, 'F');

        // Circle badge — session number
        doc.setFillColor(91, 82, 240, 0.18);
        doc.circle(W - 35, 55, 38, 'F');
        doc.setFillColor(...C.accent);
        doc.circle(W - 35, 55, 28, 'F');
        doc.setTextColor(...C.white);
        const dayTxt = String(currentDay).padStart(2, '0');
        doc.setFontSize(8); doc.setFont('helvetica', 'bold');
        doc.text('MODULE', W - 35, 49, { align: 'center' });
        doc.setFontSize(24); doc.setFont('helvetica', 'black');
        doc.text(dayTxt, W - 35, 62, { align: 'center' });

        // FSPW logo area
        try {
            doc.addImage('vectorised-image.png', 'PNG', 18, 12, 10, 10);
        } catch (e) {}
        doc.setFontSize(8); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.accent2);
        doc.text('FSPW PVT. LTD.', 32, 17);
        doc.setFontSize(7.5); doc.setFont('helvetica', 'normal'); doc.setTextColor(...C.gray);
        doc.text('Internship Programme', 32, 21);

        // gold line
        doc.setDrawColor(...C.gold); doc.setLineWidth(0.8);
        doc.line(18, 35, 100, 35);

        // Cover title
        doc.setFontSize(22); doc.setFont('helvetica', 'black'); doc.setTextColor(...C.white);
        let ty = 50;
        const titleLines = doc.splitTextToSize(data.topic, 130);
        titleLines.forEach(tl => { doc.text(tl, 18, ty); ty += 11; });
        doc.setFontSize(8); doc.setFont('helvetica', 'normal'); doc.setTextColor(...C.accent2);
        doc.text(data.subtopics.join('   |   '), 18, ty + 4);

        // divider line
        doc.setDrawColor(50, 55, 100); doc.setLineWidth(0.3);
        doc.line(18, ty + 12, W - 18, ty + 12);

        // intern info box
        let iy = ty + 22;
        const boxH = 52;
        doc.setFillColor(20, 25, 60);
        doc.roundedRect(18, iy, TW, boxH, 3, 3, 'F');
        doc.setFillColor(...C.accent); doc.roundedRect(18, iy, 3, boxH, 1.5, 1.5, 'F');

        const infoItems = [
            ['Prepared by', intern.name],
            ['Institution', intern.institution || 'Not specified'],
            ['Grade / Year', intern.grade || 'Not specified'],
            ['Date', dateStr || 'Not specified'],
            ['Facilitator', intern.facilitator || 'Not specified'],
            ['Programme', 'FSPW Pvt. Ltd. Internship']
        ];
        let ix = 27, iiy = iy + 9;
        const colW2 = TW / 2 - 4;
        infoItems.forEach(([lbl, val], idx) => {
            const cx = idx % 2 === 0 ? ix : ix + colW2 + 4;
            const cy2 = idx < 2 ? iiy : idx < 4 ? iiy + 14 : iiy + 28;
            if (idx % 2 === 0 || idx < infoItems.length) {
                doc.setFontSize(7); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.gray);
                doc.text(lbl.toUpperCase(), cx, cy2);
                doc.setFontSize(9); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.white);
                doc.text(val, cx, cy2 + 5.5);
            }
        });

        // bottom branding
        doc.setFontSize(7); doc.setFont('helvetica', 'normal'); doc.setTextColor(60, 70, 100);
        doc.text('This document is prepared as part of the FSPW Pvt. Ltd. Internship Programme.', 18, H - 16);
        doc.text('FSPW Pvt. Ltd.  |  pediconnect@fspw.org', 18, H - 11);

        doc.setFillColor(...C.accent);
        doc.rect(0, H - 4, W, 4, 'F');
    }

    // Add About page ONLY for Day 0 report as per user request
    if (currentDay === 0) {
        addPage();
        drawAboutPage();
    }

    function drawAboutPage() {
        doc.setFillColor(...C.white); doc.rect(0, 0, W, H, 'F');
        
        // Premium Layout: Navy Sidebar & Top Header
        doc.setFillColor(...C.navy); doc.rect(0, 0, W, 18, 'F');
        doc.setFillColor(...C.accent); doc.rect(0, 0, 6, H, 'F');
        doc.setFontSize(8.5); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.white);
        doc.text('FSPW PVT. LTD. |  VANGUARD OF INNOVATION', 12, 11);

        y = 35;
        
        // Section: The Organisation
        doc.setFontSize(22); doc.setFont('helvetica', 'black'); doc.setTextColor(...C.navy);
        doc.text('The Organisation', ML, y); y += 4;
        doc.setDrawColor(...C.accent); doc.setLineWidth(1.5);
        doc.line(ML, y, ML + 45, y); y += 12;

        try {
            doc.addImage('vectorised-image.png', 'PNG', W - 12 - 30, y - 5, 30, 30);
        } catch (e) {}

        const aboutFspw = "First Step Pediatric Wellness (FSPW) represents the vanguard of healthcare innovation, seamlessly blending deep medical expertise with cutting-edge Artificial Intelligence. Our foundation is built upon years of elite research conducted at prestigious international medical institutes, resulting in groundbreaking tools that are redefining pediatric healthcare globally.\n\nWe are more than just a company; we are a mission-driven organization committed to social equity. By providing free, high-quality healthcare to underprivileged communities, we ensure that the future of wellness is accessible to every child, regardless of background.";
        
        doc.setFontSize(10.5); doc.setFont('helvetica', 'normal'); doc.setTextColor(...C.body);
        const fspwLines = doc.splitTextToSize(aboutFspw, TW - 48);
        fspwLines.forEach(l => { check(7); doc.text(l, ML, y); y += 6.2; });
        
        y += 4;
        doc.setFontSize(10); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.accent);
        doc.text('Exploration & Impact: www.fspw.org', ML, y);
        
        y += 24;

        // Section: The Leadership
        doc.setFontSize(22); doc.setFont('helvetica', 'black'); doc.setTextColor(...C.navy);
        doc.text('The Leadership', ML, y); y += 4;
        doc.setDrawColor(...C.accent); doc.setLineWidth(1.5);
        doc.line(ML, y, ML + 45, y); y += 12;

        const aboutMentor = "Ananthan V M, the visionary CEO and Founder of FSPW Pvt. Ltd., is a distinguished pioneer in the field of Artificial Intelligence. With an illustrious career spanning leadership and managerial roles in global giants, he brings unparalleled expertise to the intersection of technology and humanity.\n\nUnder his direction, our team has crafted a world-class experiential programme designed to transcend traditional education. We empower our interns with the resilience, strategic thinking, and emotional intelligence required to lead and thrive in the high-stakes 'real world' of tomorrow.";
        
        doc.setFontSize(10.5); doc.setFont('helvetica', 'normal'); doc.setTextColor(...C.body);
        const mentorLines = doc.splitTextToSize(aboutMentor, TW);
        mentorLines.forEach(l => { check(7); doc.text(l, ML, y); y += 6.2; });

        // Motivational Quote / Mission at bottom
        y = H - 55;
        doc.setFillColor(242, 244, 255);
        doc.roundedRect(ML, y, TW, 25, 2, 2, 'F');
        doc.setDrawColor(...C.accent2); doc.setLineWidth(0.5);
        doc.roundedRect(ML, y, TW, 25, 2, 2, 'S');
        
        doc.setFont('times', 'bolditalic'); doc.setFontSize(12); doc.setTextColor(...C.navy);
        const quote = '"Empowering the next generation of pioneers through technology, empathy, and leadership."';
        doc.text(quote, W / 2, y + 14, { align: 'center', maxWidth: TW - 10 });

        footerStrip();
    }

    function drawInternshipCertificationPage() {
        addPage();
        doc.setFillColor(...C.white); doc.rect(0, 0, W, H, 'F');
        doc.setFillColor(...C.navy); doc.rect(0, 0, W, 16, 'F');
        doc.setFillColor(...C.accent); doc.rect(0, 0, 5, H, 'F');
        doc.setFontSize(8); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.white);
        doc.text('FIRST STEP PEDIATRIC WELLNESS  |  INTERNSHIP PROGRAMME  |  FORMAL CERTIFICATION', 12, 10);

        y = 35;
        doc.setFontSize(18); doc.setFont('helvetica', 'black'); doc.setTextColor(...C.navy);
        doc.text('Internship Commitment & Certification', ML, y); y += 4;
        doc.setDrawColor(...C.accent); doc.setLineWidth(1.5);
        doc.line(ML, y, ML + 95, y); y += 15;

        const certContent = "This document serves as a formal record of the internship commitment initiated by the participant with First Step Pediatric Wellness (FSPW Pvt. Ltd.). By engaging in this 6-month programme, the intern agrees to adhere to the professional standards, ethical guidelines, and learning objectives outlined in the internship schedule.\n\nThis page is reserved for formal validation and final endorsement by the programme facilitator and the board of directors upon the successful completion of all required modules and assessments.";
        
        doc.setFontSize(11); doc.setFont('helvetica', 'normal'); doc.setTextColor(...C.body);
        const lines = doc.splitTextToSize(certContent, TW);
        lines.forEach(l => { check(7); doc.text(l, ML, y); y += 6.5; });

        y += 30;
        // Empty signature fields
        doc.setFontSize(9); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.mid);
        doc.text('Date of Completion', ML, y);
        doc.text('Facilitator Signature', W - MR - 45, y);

        y += 10;
        doc.setDrawColor(...C.border); doc.setLineWidth(0.3);
        doc.line(ML, y, ML + 50, y);
        doc.line(W - MR - 50, y, W - MR, y);

        y += 25;
        doc.setFontSize(9); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.mid);
        doc.text('Director\'s Endorsement', ML, y);
        
        y += 10;
        doc.line(ML, y, ML + 60, y);
        
        y += 5;
        doc.setFontSize(7.5); doc.setFont('helvetica', 'normal'); doc.setTextColor(...C.gray);
        doc.text('FSPW PVT. LTD. | Reg No: U86904KA2025PTC212490', ML, y);

        footerStrip();
    }

    // ============================================================

    // ============================================================
    // PAGE 2 (Day 0 only): ACKNOWLEDGEMENT & TOC
    // ============================================================
    if (currentDay === 0) {
        addPage();
        doc.setFillColor(...C.white); doc.rect(0, 0, W, H, 'F');

        // header strip
        doc.setFillColor(...C.navy); doc.rect(0, 0, W, 16, 'F');
        doc.setFillColor(...C.accent); doc.rect(0, 0, 5, H, 'F');
        doc.setFontSize(8); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.white);
        doc.text('FIRST STEP PEDIATRIC WELLNESS  |  FSPW PVT. LTD.  |  INTERNSHIP PROGRAMME', 12, 10);

        y = 28;
        doc.setFontSize(16); doc.setFont('helvetica', 'black'); doc.setTextColor(...C.navy);
        doc.text('Acknowledgement', ML, y); y += 3;
        doc.setDrawColor(...C.accent); doc.setLineWidth(1.2);
        doc.line(ML, y, ML + 55, y); y += 10;

        const ack = `I, ${intern.name}, sincerely acknowledge the First Step Pediatric Wellness (FSPW Pvt. Ltd.) team for designing and facilitating this Internship Programme. I am grateful for the structured framework, expert guidance, and the opportunity to develop skills that are relevant to life, career, and entrepreneurship.\n\nI understand that the knowledge, frameworks, and experiences shared during this programme are intended to build my capacity as a thoughtful, ethical, and capable young professional. I commit to applying the learnings from each session with integrity and a growth-oriented mindset.\n\nI extend my gratitude to my facilitator, ${intern.facilitator || 'the programme facilitator'}, and to ${intern.institution || 'my institution'}, for supporting my participation in this programme.`;
        para(ack, 9.5, C.body);

        // Intern signature
        y += 6;
        doc.setFontSize(9); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.mid);
        doc.text('Intern Signature', ML, y); y += 8;
        doc.setDrawColor(...C.border); doc.setLineWidth(0.3);
        doc.line(ML, y, ML + 70, y); y += 5;
        doc.setFontSize(8); doc.setFont('helvetica', 'normal'); doc.setTextColor(...C.mid);
        doc.text(intern.name, ML, y);
        doc.text(dateStr || '_______________', ML + 80, y - 5);

        // Founder signature removed
        y += 14;
        doc.setFontSize(9); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.mid);
        doc.text('Authorised by: Founder & Director, FSPW Pvt. Ltd.', ML, y); y += 8;
        doc.setDrawColor(...C.border); doc.setLineWidth(0.3);
        doc.line(ML, y, ML + 70, y); y += 5;
        doc.setFontSize(8); doc.setFont('helvetica', 'normal'); doc.setTextColor(...C.mid);
        doc.text('Ananthan V M  |  Founder & Director, FSPW Pvt. Ltd.', ML, y);
        
        // INTERNSHIP CERTIFICATION PAGE (Day 0)
        drawInternshipCertificationPage();

        // Full programme ToC — all 20 days
        // The ToC goes on a new page so it has plenty of room
        addPage();
        doc.setFillColor(...C.white); doc.rect(0, 0, W, H, 'F');
        doc.setFillColor(...C.navy); doc.rect(0, 0, W, 16, 'F');
        doc.setFillColor(...C.accent); doc.rect(0, 0, 5, H, 'F');
        doc.setFontSize(8); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.white);
        doc.text('FIRST STEP PEDIATRIC WELLNESS  |  FSPW PVT. LTD.  |  INTERNSHIP PROGRAMME', 12, 10);

        y = 26;
        doc.setFontSize(15); doc.setFont('helvetica', 'black'); doc.setTextColor(...C.navy);
        doc.text('Table of Contents', ML, y); y += 3;
        doc.setDrawColor(...C.accent); doc.setLineWidth(1.2);
        doc.line(ML, y, ML + 60, y); y += 9;

        // Curriculum header bar
        y += 2;
        doc.setFillColor(...C.navy);
        doc.roundedRect(ML, y, TW, 7, 1, 1, 'F');
        doc.setFontSize(7); doc.setFont('helvetica', 'bold'); doc.setTextColor(255, 255, 255);
        doc.text('INTERNSHIP SCHEDULE', ML + 4, y + 5);
        doc.text('PAGE', W - MR - 2, y + 5, { align: 'right' });
        y += 11;

        // One row per day (1 to 21)
        for (let idx = 1; idx <= 21; idx++) {
            const d = CURRICULUM[idx];
            const n = idx;
            const pg = 3 * n - 2;
            check(8);
            // Alternating row background
            if (idx % 2 === 0) {
                doc.setFillColor(246, 247, 255);
                doc.rect(ML, y - 4.5, TW, 7, 'F');
            }
            // Day badge
            doc.setFillColor(...C.accent);
            doc.roundedRect(ML, y - 4, 14, 6, 1, 1, 'F');
            doc.setFontSize(7.5); doc.setFont('helvetica', 'black'); doc.setTextColor(255, 255, 255);
            doc.text(String(n).padStart(2, '0'), ML + 7, y, { align: 'center' });
            // Topic
            doc.setFontSize(8.5); doc.setFont('helvetica', 'normal'); doc.setTextColor(...C.body);
            doc.text(d.topic, ML + 18, y);
            const tw = doc.getTextWidth(d.topic);
            const dotsEnd = W - MR - 12;
            doc.setTextColor(...C.border);
            for (let dx = ML + 18 + tw + 2; dx < dotsEnd; dx += 3) doc.text('.', dx, y);
            doc.setFontSize(8.5); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.accent);
            doc.text(String(pg), W - MR, y, { align: 'right' });
            y += 7.5;
        }

        // Conclusion row (with extra spacing)
        y += 5; 
        const conclusionIdx = 22;
        const conclusionData = CURRICULUM[conclusionIdx];
        check(8);

        doc.setFontSize(8.5); doc.setFont('helvetica', 'normal'); doc.setTextColor(...C.body);
        doc.text(conclusionData.topic, ML + 18, y);
        const twC = doc.getTextWidth(conclusionData.topic);
        const dotsEndC = W - MR - 12;
        doc.setTextColor(...C.border);
        for (let dx = ML + 18 + twC + 2; dx < dotsEndC; dx += 3) doc.text('.', dx, y);
        doc.setFontSize(8.5); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.accent);
        doc.text('64', W - MR, y, { align: 'right' });
        y += 7.5;

        footerStrip();
    }

    function drawConclusionLetterPage() {
        addPage();
        doc.setFillColor(...C.white); doc.rect(0, 0, W, H, 'F');

        // header strip
        doc.setFillColor(...C.navy); doc.rect(0, 0, W, 16, 'F');
        doc.setFillColor(...C.accent); doc.rect(0, 0, 5, H, 'F');
        doc.setFontSize(8); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.white);
        doc.text('FIRST STEP PEDIATRIC WELLNESS  |  FSPW PVT. LTD.  |  INTERNSHIP PROGRAMME', 12, 10);

        y = 35;
        doc.setFontSize(22); doc.setFont('helvetica', 'black'); doc.setTextColor(...C.navy);
        doc.text('Letter to the World', ML, y); y += 4;
        doc.setDrawColor(...C.accent); doc.setLineWidth(1.5);
        doc.line(ML, y, ML + 65, y); y += 15;

        const letter = CURRICULUM[22].intro;
        para(letter, 11, C.body);

        y += 24;
        doc.setFontSize(10.5); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.navy);
        doc.text('Sincerely,', ML, y); y += 7;
        doc.text(intern.name, ML, y); y += 5;
        doc.setFont('helvetica', 'normal'); doc.setFontSize(9.5); doc.setTextColor(...C.mid);
        doc.text('Graduate of the School of Champions', ML, y);

        footerStrip();
    }

    // ============================================================
    // CONTENT PAGES (Day 1-21)
    // ============================================================
    if (currentDay > 0 && currentDay <= 21) {
        addPage();
        doc.setFillColor(...C.white); doc.rect(0, 0, W, H, 'F');
        doc.setFillColor(...C.navy); doc.rect(0, 0, W, 14, 'F');
        doc.setFillColor(...C.accent); doc.rect(0, 0, 4, H, 'F');
        doc.setFontSize(7.5); doc.setFont('helvetica', 'bold'); doc.setTextColor(...C.white);
        doc.text(`${String(currentDay).padStart(2, '0')}  |  ${data.topic.toUpperCase()}`, 10, 9.5);
        y = 22;

    // Programme Intro
    sectionBar('Programme Introduction & Context', C.navy);
    para(data.intro, 9.5, C.body);
    divider();

    // Objectives
    sectionBar('Session Learning Objectives', C.accent);
    data.objectives.forEach((obj, i) => {
        check(8);
        doc.setFillColor(...C.accent); doc.circle(ML + 2.5, y - 1, 2, 'F');
        doc.setFontSize(9.5); doc.setFont('helvetica', 'normal'); doc.setTextColor(...C.body);
        const ls = doc.splitTextToSize(obj, TW - 8);
        ls.forEach((l, li) => { if (li > 0) check(6); doc.text(l, ML + 8, y + (li * 5)); });
        y += ls.length * 5 + 3;
    });
    divider();

    // Subject matter sections
    data.sections.forEach((sec, si) => {
        sectionBar(`Module ${si + 1} ${sec.title}`, si === 0 ? [20, 80, 110] : [40, 90, 60]);
        para(sec.body, 9.5, C.body);
        divider();
    });

    // Activity Log & Reflection (always shown for days 1-21)
    {
        // Activity Log
        addPage();
        sectionBar('Activity Log', [80, 50, 180]);
    label('Summary of Today\'s Activities', intern.activities);
    label('Key Concepts Understood', intern.concepts);
    label('Group / Individual Activity Notes', intern.actNote);
    divider();

    // Reflection
    sectionBar('Personal Reflection & Application', [120, 60, 40]);
    label('Most Impactful Learning', intern.impact);
    label('Challenges Encountered', intern.challenges);
    label('How I Will Apply This', intern.apply);
        divider();
    }
    } else if (currentDay === 22) {
        drawConclusionLetterPage();
    }

    // end of report

    // Apply footer to all pages
    const totalPgs = doc.getNumberOfPages();
    for (let p = 1; p <= totalPgs; p++) {
        if (currentDay === 23) continue; // Certificate has no footer/pg
        doc.setPage(p);
        if (p === 1 && currentDay === 0) continue; // day 0 cover has no footer
        footerStrip(p);
    }

    // Download
    const safe = (intern.name).replace(/\s+/g, '_');
    doc.save(`FSPW_Day${currentDay}_${safe}_Report.pdf`);

    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
}

// ============================================================
// INIT
// ============================================================
renderCards();
document.getElementById('f-date').value = new Date().toISOString().split('T')[0];

function toggleHelp() {
    const modal = document.getElementById('help-modal');
    modal.classList.toggle('open');
}
