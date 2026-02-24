const jobs = [
    { company: "DataViz Solutions", title: "Data Visualization Specialist", loc: "Remote", type: "Full-time", sal: "$120k - $140k", desc: "Transform complex data into compelling visual stories. Focus on D3.js, Python, and strong analytical thinking." },
    { company: "Mobile First Corp", title: "React Native Developer", loc: "Remote", type: "Full-time", sal: "$130k - $170k", desc: "Build high-performance native applications using React Native. Work on products used by millions of users." },
    { company: "Webflow Agency", title: "Web Designer & Developer", loc: "Los Angeles, CA", type: "Part-time", sal: "$80k - $100k", desc: "Create stunning web experiences for high-profile clients. Must have experience with modern web design." },
    { company: "CloudFirst Inc", title: "Backend Developer", loc: "Sunnyvale, CA", type: "Full-time", sal: "$140k - $180k", desc: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices." }
];

let interviewCount = 0;
let rejectedCount = 0;

function renderJobs() {
    const container = document.getElementById('job-container');
    
    container.innerHTML = jobs.map((job, index) => `
        <div class="job-card bg-white p-6 rounded-lg shadow-sm border border-slate-200" id="card-${index}">
            <div class="flex justify-between items-start mb-2">
                <div>
                    <h3 class="text-lg font-bold text-slate-900">${job.company}</h3>
                    <p class="text-blue-600 font-medium text-sm">${job.title}</p>
                </div>
                <span class="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded uppercase">Not Applied</span>
            </div>
            
            <p class="text-xs text-slate-500 mb-3">${job.loc} • ${job.type} • ${job.sal}</p>
            <p class="text-sm text-slate-600 mb-4 leading-relaxed">${job.desc}</p>
            
            <div class="flex gap-3">
                <button onclick="setStatus(${index}, 'interview')" 
                    class="px-4 py-2 text-xs font-bold border border-emerald-500 text-emerald-500 rounded hover:bg-emerald-500 hover:text-white transition-colors">
                    INTERVIEW
                </button>
                <button onclick="setStatus(${index}, 'rejected')" 
                    class="px-4 py-2 text-xs font-bold border border-rose-500 text-rose-500 rounded hover:bg-rose-500 hover:text-white transition-colors">
                    REJECTED
                </button>
            </div>
        </div>
    `).join('');
}

window.setStatus = function(id, type) {
    const card = document.getElementById(`card-${id}`);
    if (card.dataset.done) return;

    if (type === 'interview') {
        interviewCount++;
        document.getElementById('int-val').innerText = interviewCount;
        card.classList.add('card-interview');
    } else {
        rejectedCount++;
        document.getElementById('rej-val').innerText = rejectedCount;
        card.classList.add('card-rejected');
    }
    
    card.dataset.done = "true";
    // Disable buttons after selection
    const buttons = card.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.add('opacity-50', 'cursor-not-allowed'));
}

// Initialize
renderJobs();