// Format currency
function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(value);
}

// Format percentage
function formatPercentage(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    }).format(value);
}

// Get risk color
function getRiskColor(risk) {
    switch(risk) {
        case 'Low':
            return 'bg-green-100 text-green-800';
        case 'Medium':
            return 'bg-blue-100 text-blue-800';
        case 'High':
            return 'bg-yellow-100 text-yellow-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
}

// Render stars for rating
function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="${i <= rating ? 'text-yellow-400' : 'text-gray-300'}">★</span>`;
    }
    return stars;
}

// Populate stock table
function populateStockTable() {
    const tableBody = document.getElementById('stockTableBody');
    tableBody.innerHTML = '';
    
    stockData.forEach(stock => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50';
        
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${stock.ticker}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${stock.companyName}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">${formatCurrency(stock.currentPrice)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600 text-right font-medium">+${formatPercentage(stock.expectedIncrease)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">${formatCurrency(stock.expectedPrice)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-center">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRiskColor(stock.riskLevel)}">
                    ${stock.riskLevel}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-center">
                <div class="flex justify-center">
                    ${renderStars(stock.investmentRating)}
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-center">
                <button 
                    type="button"
                    class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 view-rationale"
                    data-rationale="${stock.rationale}"
                >
                    View
                </button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
    
    // Add event listeners to rationale buttons
    document.querySelectorAll('.view-rationale').forEach(button => {
        button.addEventListener('click', function() {
            const rationale = this.getAttribute('data-rationale');
            document.getElementById('rationale-text').textContent = rationale;
            document.getElementById('rationale-modal').classList.remove('hidden');
        });
    });
}

// Populate performance table
function populatePerformanceTable() {
    const tableBody = document.getElementById('performanceTableBody');
    tableBody.innerHTML = '';
    
    performanceData.forEach(item => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50';
        
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.periodDate}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${item.ticker}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.companyName}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">${formatPercentage(item.expectedIncrease)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">
                <span class="${item.actualIncrease >= 0 ? 'text-green-600' : 'text-red-600'}">
                    ${formatPercentage(item.actualIncrease)}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">${formatPercentage(item.predictionAccuracy)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">
                <span class="${item.profitLoss >= 0 ? 'text-green-600' : 'text-red-600'}">
                    ${formatPercentage(item.profitLoss)}
                </span>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Populate allocation summary
function populateAllocationSummary() {
    const container = document.getElementById('allocation-summary');
    container.innerHTML = '';
    
    allocationCategories.forEach(category => {
        const div = document.createElement('div');
        div.className = 'bg-gray-50 rounded-lg p-4';
        
        div.innerHTML = `
            <div class="flex justify-between items-center mb-2">
                <span class="px-2 py-1 text-xs font-semibold rounded-full ${category.color}">
                    ${category.name}
                </span>
                <span class="text-sm font-medium">${category.percentage}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="${category.barColor} h-2.5 rounded-full" style="width: ${category.percentage}%"></div>
            </div>
            <div class="mt-3 text-sm text-gray-600">
                ${category.description}
            </div>
        `;
        
        container.appendChild(div);
    });
}

// Populate performance summary
function populatePerformanceSummary() {
    const container = document.getElementById('performance-summary');
    container.innerHTML = '';
    
    performanceSummary.forEach(summary => {
        const div = document.createElement('div');
        div.className = 'bg-gray-50 rounded-lg p-4';
        
        div.innerHTML = `
            <h3 class="font-medium text-gray-900 mb-2">${summary.period}</h3>
            <div class="space-y-2">
                <div class="flex justify-between">
                    <span class="text-sm text-gray-500">Expected Return:</span>
                    <span class="text-sm font-medium">${formatPercentage(summary.expectedReturn)}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-sm text-gray-500">Actual Return:</span>
                    <span class="text-sm font-medium text-green-600">${formatPercentage(summary.actualReturn)}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-sm text-gray-500">Prediction Accuracy:</span>
                    <span class="text-sm font-medium">${formatPercentage(summary.predictionAccuracy)}</span>
                </div>
            </div>
        `;
        
        container.appendChild(div);
    });
}

// Populate learning insights
function populateLearningInsights() {
    const marketTrendsContainer = document.getElementById('marketTrendsInsights');
    const predictionContainer = document.getElementById('predictionInsights');
    
    marketTrendsContainer.innerHTML = '';
    predictionContainer.innerHTML = '';
    
    learningInsights.forEach(insight => {
        const container = insight.category === 'Market Trends' ? marketTrendsContainer : predictionContainer;
        
        const insightElement = document.createElement('div');
        insightElement.className = 'border-l-4 border-indigo-500 pl-4 py-2';
        
        insightElement.innerHTML = `
            <div class="flex justify-between items-start">
                <h4 class="font-medium text-gray-900">${insight.title}</h4>
                <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Impact: ${formatPercentage(insight.impactScore)}
                </span>
            </div>
            <p class="mt-1 text-sm text-gray-600">${insight.description}</p>
            <p class="mt-2 text-xs text-gray-500">
                Discovered: ${new Date(insight.dateDiscovered).toLocaleDateString()}
            </p>
        `;
        
        container.appendChild(insightElement);
    });
}

// Initialize performance chart
function initPerformanceChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartData.labels,
            datasets: [
                {
                    label: 'Expected Return',
                    data: chartData.expected,
                    borderColor: 'rgb(79, 70, 229)',
                    backgroundColor: 'rgba(79, 70, 229, 0.1)',
                    tension: 0.3,
                },
                {
                    label: 'Actual Return',
                    data: chartData.actual,
                    borderColor: 'rgb(16, 185, 129)',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.3,
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y.toFixed(1) + '%';
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    title: {
                        display: true,
                        text: 'Return (%)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Month'
                    }
                }
            }
        }
    });
}

// Simulate update process
function simulateUpdate() {
    const updateModal = document.getElementById('update-modal');
    const progressBar = document.getElementById('update-progress');
    const statusText = document.getElementById('update-status');
    
    updateModal.classList.remove('hidden');
    
    let progress = 0;
    const steps = [
        "Initializing analysis...",
        "Gathering market data...",
        "Analyzing company fundamentals...",
        "Evaluating sector trends...",
        "Calculating risk metrics...",
        "Applying learning algorithm...",
        "Generating recommendations...",
        "Finalizing portfolio allocation..."
    ];
    
    const interval = setInterval(() => {
        progress += 12.5;
        progressBar.style.width = `${progress}%`;
        statusText.textContent = steps[Math.floor(progress / 12.5) - 1];
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                updateModal.classList.add('hidden');
                alert('Recommendations updated successfully!');
            }, 1000);
        }
    }, 800);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tables and charts
    populateStockTable();
    populatePerformanceTable();
    populateLearningInsights();
    populateAllocationSummary();
    populatePerformanceSummary();
    initPerformanceChart();
    
    // Close rationale modal
    document.getElementById('closeRationaleBtn').addEventListener('click', function() {
        document.getElementById('rationale-modal').classList.add('hidden');
    });
    
    // Update button
    document.getElementById('updateBtn').addEventListener('click', function() {
        simulateUpdate();
    });
    
    // Settings form
    document.getElementById('settingsForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Settings saved successfully!');
    });
    
    // Reset settings button
    document.getElementById('resetSettingsBtn').addEventListener('click', function() {
        if (confirm('Are you sure you want to reset all settings to default values?')) {
            document.getElementById('settingsForm').reset();
            alert('Settings reset to defaults.');
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
