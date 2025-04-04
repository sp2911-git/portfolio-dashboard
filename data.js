// Stock data
const stockData = [
    {
        id: 1,
        ticker: "NVDA",
        companyName: "NVIDIA Corporation",
        currentPrice: 102.77,
        expectedIncrease: 0.152,
        expectedPrice: 118.39,
        riskLevel: "Medium",
        investmentRating: 5,
        rationale: "Undisputed leader in AI chips with 85% market share in AI training GPUs. Strong growth in data center revenue and expanding AI software ecosystem.",
        allocationCategory: "Core Holdings",
        allocationPercentage: 15
    },
    {
        id: 2,
        ticker: "TSM",
        companyName: "Taiwan Semiconductor Manufacturing",
        currentPrice: 159.41,
        expectedIncrease: 0.128,
        expectedPrice: 179.81,
        riskLevel: "Medium",
        investmentRating: 5,
        rationale: "World's premier semiconductor foundry with 67% global market share. Critical manufacturing partner for NVIDIA, AMD, and Apple with leading-edge process technology.",
        allocationCategory: "Core Holdings",
        allocationPercentage: 15
    },
    {
        id: 3,
        ticker: "AVGO",
        companyName: "Broadcom Inc.",
        currentPrice: 1345.52,
        expectedIncrease: 0.105,
        expectedPrice: 1486.80,
        riskLevel: "Low",
        investmentRating: 4,
        rationale: "Diversified semiconductor leader with strong AI networking portfolio. VMware acquisition strengthens enterprise software position and recurring revenue streams.",
        allocationCategory: "Core Holdings",
        allocationPercentage: 10
    },
    {
        id: 4,
        ticker: "ASML",
        companyName: "ASML Holding N.V.",
        currentPrice: 947.85,
        expectedIncrease: 0.142,
        expectedPrice: 1082.44,
        riskLevel: "Low",
        investmentRating: 5,
        rationale: "Monopoly position in EUV lithography machines essential for advanced semiconductor manufacturing. Critical supplier to TSMC, Samsung, and Intel with no viable competitors.",
        allocationCategory: "Core Holdings",
        allocationPercentage: 10
    },
    {
        id: 5,
        ticker: "AMD",
        companyName: "Advanced Micro Devices",
        currentPrice: 178.59,
        expectedIncrease: 0.187,
        expectedPrice: 211.99,
        riskLevel: "Medium",
        investmentRating: 4,
        rationale: "Gaining market share in data center CPUs and expanding AI GPU portfolio. MI300 accelerators showing strong early adoption for AI workloads.",
        allocationCategory: "Growth Opportunities",
        allocationPercentage: 10
    },
    {
        id: 6,
        ticker: "MU",
        companyName: "Micron Technology",
        currentPrice: 117.89,
        expectedIncrease: 0.224,
        expectedPrice: 144.30,
        riskLevel: "High",
        investmentRating: 4,
        rationale: "Leading provider of memory solutions critical for AI workloads. HBM3E and GDDR7 memory technologies positioned for strong growth as AI deployment accelerates.",
        allocationCategory: "Growth Opportunities",
        allocationPercentage: 10
    },
    {
        id: 7,
        ticker: "MRVL",
        companyName: "Marvell Technology",
        currentPrice: 72.41,
        expectedIncrease: 0.198,
        expectedPrice: 86.75,
        riskLevel: "Medium",
        investmentRating: 4,
        rationale: "Custom ASIC solutions and networking chips optimized for AI infrastructure. Strong position in data center connectivity and storage acceleration.",
        allocationCategory: "Growth Opportunities",
        allocationPercentage: 10
    },
    {
        id: 8,
        ticker: "CRDO",
        companyName: "Credo Technology Group",
        currentPrice: 21.35,
        expectedIncrease: 0.286,
        expectedPrice: 27.46,
        riskLevel: "High",
        investmentRating: 3,
        rationale: "Emerging leader in high-speed connectivity solutions for AI data centers. Innovative SerDes technology enabling next-generation networking infrastructure.",
        allocationCategory: "Emerging Innovators",
        allocationPercentage: 7
    },
    {
        id: 9,
        ticker: "ARM",
        companyName: "Arm Holdings",
        currentPrice: 124.78,
        expectedIncrease: 0.253,
        expectedPrice: 156.35,
        riskLevel: "High",
        investmentRating: 3,
        rationale: "Processor architecture powering next-generation AI devices and infrastructure. Expanding beyond mobile into data centers, automotive, and edge AI applications.",
        allocationCategory: "Emerging Innovators",
        allocationPercentage: 7
    },
    {
        id: 10,
        ticker: "LSCC",
        companyName: "Lattice Semiconductor",
        currentPrice: 74.23,
        expectedIncrease: 0.169,
        expectedPrice: 86.77,
        riskLevel: "Medium",
        investmentRating: 3,
        rationale: "Leader in low-power FPGAs ideal for edge AI applications. Strong position in automotive, industrial, and communications markets with programmable solutions.",
        allocationCategory: "Emerging Innovators",
        allocationPercentage: 6
    }
];

// Performance data
const performanceData = [
    {
        id: 1,
        periodDate: "March 2025",
        ticker: "NVDA",
        companyName: "NVIDIA Corporation",
        expectedIncrease: 0.145,
        actualIncrease: 0.162,
        predictionAccuracy: 0.953,
        profitLoss: 0.162
    },
    {
        id: 2,
        periodDate: "March 2025",
        ticker: "TSM",
        companyName: "Taiwan Semiconductor Manufacturing",
        expectedIncrease: 0.132,
        actualIncrease: 0.145,
        predictionAccuracy: 0.932,
        profitLoss: 0.145
    },
    {
        id: 3,
        periodDate: "March 2025",
        ticker: "AVGO",
        companyName: "Broadcom Inc.",
        expectedIncrease: 0.118,
        actualIncrease: 0.125,
        predictionAccuracy: 0.965,
        profitLoss: 0.125
    },
    {
        id: 4,
        periodDate: "February 2025",
        ticker: "NVDA",
        companyName: "NVIDIA Corporation",
        expectedIncrease: 0.128,
        actualIncrease: 0.143,
        predictionAccuracy: 0.928,
        profitLoss: 0.143
    },
    {
        id: 5,
        periodDate: "February 2025",
        ticker: "TSM",
        companyName: "Taiwan Semiconductor Manufacturing",
        expectedIncrease: 0.115,
        actualIncrease: 0.132,
        predictionAccuracy: 0.915,
        profitLoss: 0.132
    },
    {
        id: 6,
        periodDate: "February 2025",
        ticker: "AMD",
        companyName: "Advanced Micro Devices",
        expectedIncrease: 0.135,
        actualIncrease: 0.152,
        predictionAccuracy: 0.942,
        profitLoss: 0.152
    },
    {
        id: 7,
        periodDate: "January 2025",
        ticker: "NVDA",
        companyName: "NVIDIA Corporation",
        expectedIncrease: 0.108,
        actualIncrease: 0.122,
        predictionAccuracy: 0.901,
        profitLoss: 0.122
    },
    {
        id: 8,
        periodDate: "January 2025",
        ticker: "MU",
        companyName: "Micron Technology",
        expectedIncrease: 0.125,
        actualIncrease: 0.138,
        predictionAccuracy: 0.912,
        profitLoss: 0.138
    },
    {
        id: 9,
        periodDate: "January 2025",
        ticker: "MRVL",
        companyName: "Marvell Technology",
        expectedIncrease: 0.115,
        actualIncrease: 0.128,
        predictionAccuracy: 0.921,
        profitLoss: 0.128
    }
];

// Learning insights data
const learningInsights = [
    {
        id: 1,
        category: "Market Trends",
        title: "AI Chip Demand Acceleration",
        description: "Companies with direct exposure to AI chip manufacturing consistently outperform market expectations by 15-20%.",
        impactScore: 0.85,
        dateDiscovered: "2025-03-15"
    },
    {
        id: 2,
        category: "Market Trends",
        title: "Data Center Expansion Correlation",
        description: "Stock performance strongly correlates with data center capex announcements from major cloud providers.",
        impactScore: 0.78,
        dateDiscovered: "2025-02-28"
    },
    {
        id: 3,
        category: "Market Trends",
        title: "Supply Chain Resilience",
        description: "Companies with diversified manufacturing partners show 30% less volatility during supply chain disruptions.",
        impactScore: 0.65,
        dateDiscovered: "2025-01-20"
    },
    {
        id: 4,
        category: "Prediction Improvements",
        title: "Earnings Surprise Weighting",
        description: "Increasing the weight of earnings surprise history improved forecast accuracy by 12% for growth-stage companies.",
        impactScore: 0.72,
        dateDiscovered: "2025-03-10"
    },
    {
        id: 5,
        category: "Prediction Improvements",
        title: "Technical Indicator Refinement",
        description: "Combining RSI with MACD signals improved short-term price movement predictions by 8.5%.",
        impactScore: 0.68,
        dateDiscovered: "2025-02-15"
    },
    {
        id: 6,
        category: "Prediction Improvements",
        title: "Sector Rotation Detection",
        description: "New algorithm to detect early signs of sector rotation improved timing of allocation shifts by 14 days on average.",
        impactScore: 0.75,
        dateDiscovered: "2025-01-05"
    }
];

// Performance chart data
const chartData = {
    labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    expected: [8.2, 9.5, 7.8, 10.4, 12.3, 14.5, 16.2],
    actual: [7.8, 10.2, 8.1, 11.5, 13.7, 15.2, null] // null for current month (no actual data yet)
};

// Allocation categories
const allocationCategories = [
    {
        name: "Core Holdings",
        percentage: 50,
        color: "bg-blue-100 text-blue-800",
        barColor: "bg-blue-600",
        description: "NVDA, TSM, AVGO, ASML"
    },
    {
        name: "Growth Opportunities",
        percentage: 30,
        color: "bg-green-100 text-green-800",
        barColor: "bg-blue-600",
        description: "AMD, MU, MRVL"
    },
    {
        name: "Emerging Innovators",
        percentage: 20,
        color: "bg-yellow-100 text-yellow-800",
        barColor: "bg-blue-600",
        description: "CRDO, ARM, LSCC"
    }
];

// Performance summary data
const performanceSummary = [
    {
        period: "March 2025",
        expectedReturn: 0.145,
        actualReturn: 0.152,
        predictionAccuracy: 0.953
    },
    {
        period: "February 2025",
        expectedReturn: 0.123,
        actualReturn: 0.137,
        predictionAccuracy: 0.928
    },
    {
        period: "January 2025",
        expectedReturn: 0.104,
        actualReturn: 0.115,
        predictionAccuracy: 0.901
    }
];
